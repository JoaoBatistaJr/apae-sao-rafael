import { NextRequest, NextResponse } from "next/server";

// Apenas domínios usados pelo Notion para hospedar imagens.
// Qualquer URL fora dessa lista é rejeitada antes do fetch.
const ALLOWED_HOSTS = [
  "notion.so",
  "www.notion.so",
  "prod-files-secure.s3.us-west-2.amazonaws.com",
  "s3.us-west-2.amazonaws.com",
  "images.unsplash.com",
];

function isAllowedUrl(rawUrl: string): boolean {
  let parsed: URL;
  try {
    parsed = new URL(rawUrl);
  } catch {
    return false;
  }

  // Só permite HTTP(S) — bloqueia file://, ftp://, etc.
  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
    return false;
  }

  return ALLOWED_HOSTS.some(
    (host) => parsed.hostname === host || parsed.hostname.endsWith(`.${host}`)
  );
}

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) return new NextResponse("Missing url", { status: 400 });

  if (!isAllowedUrl(url)) {
    return new NextResponse("Domain not allowed", { status: 403 });
  }

  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
      next: { revalidate: 43200 },
    });
    if (!res.ok) return new NextResponse("Failed", { status: 502 });

    const buffer = await res.arrayBuffer();
    const contentType = res.headers.get("content-type") ?? "image/jpeg";

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=43200, stale-while-revalidate=86400, stale-if-error=604800",
        "CDN-Cache-Control": "public, max-age=43200",
        "Vercel-CDN-Cache-Control": "public, max-age=43200",
      },
    });
  } catch {
    return new NextResponse("Error", { status: 500 });
  }
}