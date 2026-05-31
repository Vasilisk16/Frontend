"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Все объекты" },
  { href: "/about", label: "О проекте" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-serif text-xl text-neutral-900">
          <span className="font-semibold">Архангельск</span>
          <span className="mx-2 text-neutral-400">·</span>
          <span className="italic text-neutral-600">наследие</span>
        </Link>

        <nav className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
                  isActive
                    ? "text-neutral-900"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
