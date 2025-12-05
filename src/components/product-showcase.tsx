import Image from "next/image";
import appScreen from "@/assets/images/app-screen.png";

export default function ProductShowcase() {
  return (
    <section className="bg-linear-(--product-showcase-gradient) px-4 py-[72px] text-white sm:py-24">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        {/* Product showcase content */}
        <div className="flex max-w-xl flex-col gap-5">
          <h2 className="text-center text-5xl leading-12 font-bold tracking-tighter sm:text-6xl">
            Intuitive interface
          </h2>
          <p className="text-xl leading-7 text-white/70">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>

        {/* App screen image */}
        <div className="pt-14">
          <Image src={appScreen} alt="App screen" />
        </div>
      </div>
    </section>
  );
}
