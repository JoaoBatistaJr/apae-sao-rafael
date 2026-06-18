import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) return new NextResponse("Missing url", { status: 400 });

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