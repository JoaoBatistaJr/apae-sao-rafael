import Link from "next/link";
import { getCursos } from "@/lib/notion-cursos";

export default async function AnnouncementBar() {
  const cursos = await getCursos().catch(() => []);
  if (cursos.length === 0) return null;

  return (
    <div className="w-full bg-[#4BCBAB] py-2 text-center" style={{ paddingBlock: "2px" }}>
      <p className="text-xs font-bold text-gray-900 sm:text-sm">
        🎉 Inscrições abertas para nossos cursos!{" "}
        <Link href="/cursos" className="underline hover:no-underline hover:text-white">
          Saiba mais →
        </Link>
      </p>
    </div>
  );
}