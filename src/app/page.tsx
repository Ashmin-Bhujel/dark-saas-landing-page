import Banner from "@/components/banner";
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
      </main>
    </>
  );
}
