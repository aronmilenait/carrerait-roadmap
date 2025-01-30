"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/cuestionario", label: "Cuestionarios" },
  { href: "/orientacion", label: "Orientación" },
  { href: "/recursos", label: "Recursos" },
  { href: "/sobre-carrerait", label: "Sobre CarreraIT" },
  { href: "/contacto", label: "Contacto" },
  { href: "/contribuir", label: "Contribuir" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">
                <span className="text-teal-300">Carrera</span>
                <span className="text-teal-500">IT</span>
              </span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center px-1 pt-1 text-md font-medium text-teal-50 hover:text-teal-200 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-teal-600 hover:text-teal-500 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden">
          <div className="text-center pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block pl-3 pr-4 py-2 text-base font-medium text-teal-50 hover:text-teal-200 hover:bg-teal-50 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
