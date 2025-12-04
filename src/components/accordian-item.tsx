"use client";
import Minus from "@/assets/icons/minus";
import Plus from "@/assets/icons/plus";
import { useState } from "react";
import { type AccordianItem } from "./faqs";
import { cn } from "@/lib/utils";

export default function AccordionItem({ question, answer }: AccordianItem) {
  const [isHidden, setIsHidden] = useState(true);

  function toogleAccordianAnswer() {
    setIsHidden((currentState) => !currentState);
  }

  return (
    <div className="flex flex-col border-b border-white/30 py-7 sm:min-w-2xl">
      {/* Question */}
      <button
        className="group flex cursor-pointer items-center justify-between text-left"
        onClick={toogleAccordianAnswer}
      >
        <p className="text-lg font-bold transition-transform duration-200 group-hover:translate-x-2">
          {question}
        </p>
        {isHidden ? (
          <Plus className="size-6 transition-transform duration-200 group-hover:-translate-x-2" />
        ) : (
          <Minus className="size-6 transition-transform duration-200 group-hover:-translate-x-2" />
        )}
      </button>

      {/* Answer */}
      <div
        className={cn("pt-3 text-white/70", {
          "invisible hidden h-0": isHidden,
          "visible block h-auto": !isHidden,
        })}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}
