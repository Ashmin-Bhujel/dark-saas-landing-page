import Banner from "@/components/banner";
import FAQs from "@/components/faqs";
import Features from "@/components/features";
import Hero from "@/components/hero";
import LogoTicker from "@/components/logo-ticker";
import Navbar from "@/components/navbar";
import ProductShowcase from "@/components/product-showcase";

export default function Home() {
  return (
    <>
      <Banner />
      <main>
        <Navbar />
        <Hero />
        <LogoTicker />
        <Features />
        <ProductShowcase />
        <FAQs />
      </main>
    </>
  );
}
