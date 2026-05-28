import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-[#4BCBAB] py-2 text-center" style={{paddingBlock: "2px"}}>
      <p className="text-xs font-bold text-gray-900 sm:text-sm">
        🎉 Inscrições abertas para nossos cursos!{" "}
        <Link href="/cursos" className="underline hover:no-underline">
          Saiba mais →
        </Link>
      </p>
    </div>
  );
}