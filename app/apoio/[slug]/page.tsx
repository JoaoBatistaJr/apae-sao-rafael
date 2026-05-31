import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="w-full bg-[#003F8A]">
        <TopBar />
        <Header />
      </div>
      <main className="flex flex-1 flex-col items-center justify-center gap-4 bg-warm">
        <p className="text-5xl">🚧</p>
        <h1 className="text-2xl font-extrabold text-gray-700">Em breve</h1>
        <p className="text-sm text-gray-400">Esta página está sendo construída.</p>
      </main>
      <Footer />
    </div>
  );
}
