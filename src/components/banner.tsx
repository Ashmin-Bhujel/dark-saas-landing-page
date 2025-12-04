"use client";
import X from "@/assets/icons/x";
import Link from "next/link";
import { useState } from "react";

export default function Banner() {
  const [closed, setClosed] = useState(false);

  function closeBanner() {
    setClosed(true);
  }

  if (closed) return;

  return (
    <div className="bg-linear-(--banner-gradient) px-4 py-3">
      <div className="relative container mx-auto">
        <p className="text-center leading-6 font-medium">
          <span className="hidden sm:inline">
            Introducing a completely redesigned interface —{" "}
          </span>

          <Link href={"/"} className="underline underline-offset-2">
            Explore the demo
          </Link>
        </p>

        {/* Close button */}
        <X
          className="absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer"
          onClick={closeBanner}
        />
      </div>
    </div>
  );
}
