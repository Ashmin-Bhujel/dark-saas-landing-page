import { cn } from "@/lib/utils";

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className, ...props }: Button) {
  return (
    <button
      className={cn(
        "cursor-pointer rounded-lg border bg-white px-4 py-2 transition-colors duration-200 hover:border-white hover:bg-black hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
