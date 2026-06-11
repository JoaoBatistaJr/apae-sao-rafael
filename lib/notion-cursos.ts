/* eslint-disable @typescript-eslint/no-explicit-any */
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const DATABASE_ID = process.env.NOTION_CURSOS_DATABASE_ID!;

export type NotionBlock = {
  type: string;
  text?: string;
  url?: string;
  level?: number;
};

export type Curso = {
  id: string;
  titulo: string;
  descricao: string;
  tag: string;
  custo: string;
  duracao: string;
  vagas: string;
  linkInscricao: string;
  dataInicio: string;
  imagem: string;
  slug: string;
  blocos?: NotionBlock[];
};

function getCover(page: any): string {
  const cover = page.cover;
  if (!cover) return "";
  const url = cover.type === "file" ? cover.file?.url : cover.external?.url;
  if (!url) return "";
  return `/api/image?url=${encodeURIComponent(url)}`;
}

function getText(prop: any): string {
  if (!prop) return "";
  switch (prop.type) {
    case "rich_text":
      return prop.rich_text?.[0]?.plain_text ?? "";
    case "title":
      return prop.title?.[0]?.plain_text ?? "";
    case "url":
      return prop.url ?? "";
    case "select":
      return prop.select?.name ?? "";
    case "date":
      return prop.date?.start ?? "";
    default:
      return "";
  }
}

function richTextToString(richText: any[]): string {
  if (!richText) return "";
  return richText.map((t: any) => t.plain_text).join("");
}

function toSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export async function getBlocosCurso(pageId: string): Promise<NotionBlock[]> {
  const response = await notion.blocks.children.list({ block_id: pageId });
  const blocos: NotionBlock[] = [];

  for (const block of response.results as any[]) {
    switch (block.type) {
      case "paragraph":
        const paraText = richTextToString(block.paragraph?.rich_text);
        if (paraText) blocos.push({ type: "paragraph", text: paraText });
        break;
      case "heading_1":
        blocos.push({
          type: "heading",
          level: 1,
          text: richTextToString(block.heading_1?.rich_text),
        });
        break;
      case "heading_2":
        blocos.push({
          type: "heading",
          level: 2,
          text: richTextToString(block.heading_2?.rich_text),
        });
        break;
      case "heading_3":
        blocos.push({
          type: "heading",
          level: 3,
          text: richTextToString(block.heading_3?.rich_text),
        });
        break;
      case "bulleted_list_item":
        blocos.push({
          type: "bullet",
          text: richTextToString(block.bulleted_list_item?.rich_text),
        });
        break;
      case "numbered_list_item":
        blocos.push({
          type: "numbered",
          text: richTextToString(block.numbered_list_item?.rich_text),
        });
        break;
      case "quote":
        blocos.push({
          type: "quote",
          text: richTextToString(block.quote?.rich_text),
        });
        break;
      case "divider":
        blocos.push({ type: "divider" });
        break;
      case "image":
        const imgUrl =
          block.image?.file?.url ?? block.image?.external?.url ?? "";
        if (imgUrl) blocos.push({ type: "image", url: imgUrl });
        break;
      case "video":
        const videoUrl = block.video?.external?.url ?? "";
        if (videoUrl) blocos.push({ type: "video", url: videoUrl });
        break;
    }
  }

  return blocos;
}

export async function getCursos(): Promise<Curso[]> {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: { property: "Ativo", checkbox: { equals: true } },
  });

  return response.results.map((page: any) => {
    const props = page.properties;
    const titulo = getText(props["Título"]);
    return {
      id: page.id,
      titulo,
      descricao: getText(props["Descrição"]),
      tag: getText(props["Tag"]),
      custo: getText(props["Custo"]),
      duracao: getText(props["Duração"]),
      vagas: getText(props["Vagas"]),
      linkInscricao: getText(props["Link Inscrição"]),
      dataInicio: getText(props["Data de inicio"]),
      imagem: getCover(page),
      slug: toSlug(titulo),
    };
  });
}

export async function getCurso(slug: string): Promise<Curso | null> {
  const cursos = await getCursos();
  const curso = cursos.find((c) => c.slug === slug) ?? null;
  if (!curso) return null;
  curso.blocos = await getBlocosCurso(curso.id);
  return curso;
}
