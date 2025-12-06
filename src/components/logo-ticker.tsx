"use client";
import acmeLogo from "@/assets/images/acme.png";
import apexLogo from "@/assets/images/apex.png";
import celestialLogo from "@/assets/images/celestial.png";
import echoLogo from "@/assets/images/echo.png";
import pulseLogo from "@/assets/images/pulse.png";
import quantumLogo from "@/assets/images/quantum.png";
import { motion } from "motion/react";
import Image from "next/image";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export default function LogoTicker() {
  return (
    <section className="bg-black text-center text-white">
      <div className="container mx-auto px-4 py-[72px] sm:py-24">
        <p className="text-xl text-white/70">
          Trusted by the world&apos;s most innovative teams
        </p>

        {/* Logos */}
        <div className="mx-auto flex max-w-4xl justify-center pt-9">
          <div className="flex items-center overflow-hidden mask-x-from-90%">
            <motion.div
              initial={{ translateX: 0 }}
              animate={{ translateX: "-50%" }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex flex-none items-center gap-16 pr-16"
            >
              {images.map((image) => (
                <Image
                  src={image.src}
                  alt={image.alt}
                  key={image.alt}
                  height={32}
                />
              ))}

              {images.map((image) => (
                <Image
                  src={image.src}
                  alt={image.alt}
                  key={image.alt}
                  height={32}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
