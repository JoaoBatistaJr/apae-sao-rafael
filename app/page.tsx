import Image from "next/image";
import TopBar from "@/components/TopBar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SupportUs from "@/components/SupportUs";
import News from "@/components/News";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export const revalidate = 3600;

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <div className="relative w-full bg-black">
        <Image
          src="/Hero.png"
          alt="APAE São Rafael"
          fill
          className="object-cover object-center scale-[1.02]"
          priority
        />
        <div className="absolute inset-0 bg-black" style={{ opacity: 0.55 }} />
        <div className="relative z-10">
          <TopBar />
          <AnnouncementBar />
          <Header />
          <Hero />
        </div>
      </div>
      <Services />
      <SupportUs />
      <News />
      <Testimonials />
      <Partners />
      <Footer />
    </main>
  );
}
