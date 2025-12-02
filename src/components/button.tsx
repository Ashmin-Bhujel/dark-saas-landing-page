import { cn } from "@/lib/utils";

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className, ...props }: Button) {
  return (
    <button
      className={cn(
        "cursor-pointer rounded-xl bg-white px-4 py-2 font-medium text-black transition-colors duration-200 hover:bg-neutral-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
