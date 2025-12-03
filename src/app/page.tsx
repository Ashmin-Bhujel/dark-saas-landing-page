import Banner from "@/components/banner";
import Features from "@/components/features";
import Hero from "@/components/hero";
import LogoTicker from "@/components/logo-ticker";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Banner />
      <main>
        <Navbar />
        <Hero />
        <LogoTicker />
        <Features />
      </main>
    </>
  );
}
