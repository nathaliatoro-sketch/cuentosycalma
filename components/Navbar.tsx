"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/cursos", label: "Cursos" },
  { href: "/cuentos", label: "Cuentos" },
  { href: "/recursos", label: "Recursos" },
  { href: "/comunidad", label: "Comunidad" },
  { href: "/sobre-mi", label: "Sobre mí" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-beige border-b border-rosa/40 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-playfair text-xl font-bold text-lila">
          Cuentos para la Calma
        </Link>
        <ul className="hidden md:flex gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-poppins text-sm text-gray-600 hover:text-rosa transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-lila text-2xl"
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>
      {open && (
        <ul className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-beige">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block font-poppins text-sm text-gray-600 hover:text-rosa py-1"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
