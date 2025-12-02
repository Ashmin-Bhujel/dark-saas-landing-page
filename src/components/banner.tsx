import Link from "next/link";

export default function Banner() {
  return (
    <div className="bg-linear-(--banner-gradient)">
      <div className="container mx-auto px-4 py-3 text-center leading-6 font-medium">
        <p>
          <span className="hidden sm:inline">
            Introducing a completely redesigned interface —{" "}
          </span>
          <Link href={"/"} className="underline underline-offset-2">
            Explore the demo
          </Link>
        </p>
      </div>
    </div>
  );
}
