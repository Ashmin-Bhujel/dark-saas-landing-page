"use client";
import Arrow from "@/assets/icons/arrow";
import cursorImage from "@/assets/images/cursor.png";
import messageImage from "@/assets/images/message.png";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";

export default function Hero() {
  return (
    <section className="relative overflow-clip bg-linear-(--hero-section-gradient) px-4 py-[72px] sm:py-24">
      {/* Gradient ellipse */}
      <div className="absolute top-[calc(100%-96px)] left-1/2 h-[375px] w-[750px] -translate-x-1/2 rounded-[50%] border border-[#B48CDE] bg-radial-(--hero-section-ellipse-gradient) sm:top-[calc(100%-120px)] sm:h-[768px] sm:w-[1536px] lg:h-[1200px] lg:w-[2400px] xl:w-[3600px] 2xl:w-[4800px]"></div>

      <div className="relative mx-auto flex max-w-xl flex-col items-center justify-center text-center text-white">
        {/* Pill as a link */}
        <Link
          href={"/"}
          className="group flex items-center gap-3 rounded-full border border-white/30 px-4 py-1"
        >
          <p className="animate-text-gradient">Version 2.0 is here</p>

          <p className="flex items-center gap-0.5 transition-colors duration-200 group-hover:text-orange-300">
            <span>Read More</span>
            <Arrow className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </p>
        </Link>

        {/* Hero heading */}
        <div className="relative pt-8 text-7xl leading-[72px] font-bold tracking-tighter sm:text-9xl sm:leading-32">
          <h1 className="inline-flex flex-col">
            <span>One Task</span>
            <span>at a Time</span>
          </h1>

          {/* Cursor 3D image */}
          <motion.div
            drag={true}
            dragSnapToOrigin={true}
            className="absolute top-[140px] right-[476px] hidden cursor-move sm:block"
          >
            <Image
              src={cursorImage}
              alt=""
              width={200}
              height={200}
              draggable={false}
              className="max-w-none"
            />
          </motion.div>

          {/* Message 3D image */}
          <motion.div
            drag={true}
            dragSnapToOrigin={true}
            className="absolute top-[88px] left-[498px] hidden cursor-move sm:block"
          >
            <Image
              src={messageImage}
              alt=""
              width={200}
              height={200}
              draggable={false}
              className="max-w-none"
            />
          </motion.div>
        </div>

        {/* Hero text content */}
        <div className="pt-8">
          <p className="max-w-md text-xl leading-7">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>

        {/* Call to action */}
        <div className="pt-8">
          <Button>Get for free</Button>
        </div>
      </div>
    </section>
  );
}
