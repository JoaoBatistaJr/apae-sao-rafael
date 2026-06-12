import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) return new NextResponse("Missing url", { status: 400 });

  try {
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) return new NextResponse("Failed", { status: 502 });

    const buffer = await res.arrayBuffer();
    const contentType = res.headers.get("content-type") ?? "image/jpeg";

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control":
          "public, max-age=86400, stale-while-revalidate=604800, stale-if-error=86400",
        "CDN-Cache-Control": "public, max-age=86400",
        "Vercel-CDN-Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    return new NextResponse("Error", { status: 500 });
  }
}
