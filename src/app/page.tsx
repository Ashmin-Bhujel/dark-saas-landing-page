import Banner from "@/components/banner";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Banner />
      <main>
        <Navbar />
        <Hero />
      </main>
    </>
  );
}
