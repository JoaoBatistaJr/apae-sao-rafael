/* eslint-disable @typescript-eslint/no-explicit-any */
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const DATABASE_ID = process.env.NOTION_DATABASE_ID!;

export type NotionBlock = {
  type: string;
  text?: string;
  url?: string;
  level?: number;
  items?: string[];
};

export type Noticia = {
  id: string;
  titulo: string;
  descricao: string;
  tag: string;
  imagem: string;
  data: string;
  slug: string;
  blocos?: NotionBlock[];
};

export function driveToDirectUrl(url: string): string {
  if (!url) return url;
  const matchFile = url.match(/\/file\/d\/([^/]+)/);
  if (matchFile)
    return `https://drive.google.com/thumbnail?id=${matchFile[1]}&sz=w1000`;
  const matchOpen = url.match(/[?&]id=([^&]+)/);
  if (matchOpen)
    return `https://drive.google.com/thumbnail?id=${matchOpen[1]}&sz=w1000`;
  return url;
}

function proxyUrl(url: string): string {
  if (!url) return url;
  return `/api/image?url=${encodeURIComponent(url)}`;
}

function getCover(page: any): string {
  const cover = page.cover;
  if (!cover) return "";
  const url = cover.type === "file" ? cover.file?.url : cover.external?.url;
  if (!url) return "";
  return proxyUrl(url);
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

export async function getBlocos(pageId: string): Promise<NotionBlock[]> {
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
        if (imgUrl) blocos.push({ type: "image", url: proxyUrl(imgUrl) });
        break;
      case "video":
        const videoUrl = block.video?.external?.url ?? "";
        if (videoUrl) blocos.push({ type: "video", url: videoUrl });
        break;
    }
  }

  return blocos;
}

export async function getNoticias(): Promise<Noticia[]> {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: { property: "Publicado", checkbox: { equals: true } },
    sorts: [{ property: "Data", direction: "descending" }],
  });

  return response.results.map((page: any) => {
    const props = page.properties;
    const titulo = getText(props["Título"]);
    const cover = getCover(page);
    const campoImagem = getText(props["Imagem"]);
    const imagem = cover || driveToDirectUrl(campoImagem);
    return {
      id: page.id,
      titulo,
      descricao: getText(props["Descrição"]),
      tag: getText(props["Tag"]),
      imagem,
      data: getText(props["Data"]),
      slug: toSlug(titulo),
    };
  });
}

export async function getNoticia(slug: string): Promise<Noticia | null> {
  const noticias = await getNoticias();
  const noticia = noticias.find((n) => n.slug === slug) ?? null;
  if (!noticia) return null;
  noticia.blocos = await getBlocos(noticia.id);
  return noticia;
}
