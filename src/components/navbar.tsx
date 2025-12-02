import MenuIcon from "@/assets/icons/menu";
import logoImage from "@/assets/images/logosaas.png";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";

interface NavLink {
  href: string;
  title: string;
}

const navLinks: NavLink[] = [
  {
    href: "/",
    title: "About",
  },
  {
    href: "/",
    title: "Features",
  },
  {
    href: "/",
    title: "Updates",
  },
  {
    href: "/",
    title: "Help",
  },
  {
    href: "/",
    title: "Customers",
  },
];

function NavLink({ href, title }: NavLink) {
  return (
    <Link
      href={href}
      className="text-white/60 transition-colors duration-200 hover:text-white"
    >
      {title}
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="bg-black">
      <div className="flex items-center justify-between p-4">
        {/* Logo */}
        <div className="group relative">
          <div className="absolute inset-x-0 top-2 bottom-0 bg-linear-(--logo-glow-gradient) blur-md transition-[filter] duration-200 group-hover:blur-xl"></div>
          <Link href={"/"}>
            <Image
              src={logoImage}
              alt="Dark SaaS logo"
              className="relative size-12"
            />
          </Link>
        </div>

        {/* Hamburger menu */}
        <button className="inline-flex size-10 items-center justify-center rounded-lg border border-white/30 sm:hidden">
          <MenuIcon className="text-white" />
        </button>

        {/* Navigation */}
        <nav className="hidden sm:block">
          <ul className="flex items-center justify-center gap-6">
            {navLinks.map((navLink) => (
              <li key={navLink.title}>
                <NavLink href={navLink.href} title={navLink.title} />
              </li>
            ))}

            <Button>Get for free</Button>
          </ul>
        </nav>
      </div>
    </header>
  );
}
