import emojiStarImage from "@/assets/images/emojistar.png";
import helixImage from "@/assets/images/helix2.png";
import Image from "next/image";
import Button from "./button";

export default function CallToAction() {
  return (
    <section className="overflow-x-clip bg-black px-4 py-[72px] text-center text-white sm:py-24">
      <div className="container mx-auto">
        <div className="relative mx-auto max-w-xl">
          {/* Heading */}
          <h2 className="text-center text-5xl leading-12 font-bold tracking-tighter sm:text-6xl">
            Get instant access
          </h2>

          {/* Content */}
          <p className="pt-5 text-xl text-white/70">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>

          {/* Form */}
          <form
            id="call-to-action"
            className="mx-auto flex max-w-sm flex-col gap-2.5 pt-10 sm:flex-row"
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your@email.com"
              className="flex-1 rounded-lg bg-white/20 px-5 py-3 placeholder:font-medium placeholder:text-[#9CA3AF]"
            />
            <Button form="call-to-action">Get Access</Button>
          </form>

          {/* Emoji star 3D image */}
          <Image
            src={emojiStarImage}
            alt=""
            width={200}
            className="absolute right-[calc(100%+24px)] bottom-36 hidden sm:block"
          />

          {/* Helix 3D image */}
          <Image
            src={helixImage}
            alt=""
            width={200}
            className="absolute top-6 left-[calc(100%+36px)] hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
}
