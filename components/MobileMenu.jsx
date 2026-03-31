"use client";

import { useState } from "react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#focus", label: "Focus" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
      >
        <span className="flex flex-col gap-1.5" aria-hidden="true">
          <span
            className="block h-0.5 w-5 rounded bg-current transition-all duration-300"
            style={open ? { transform: "translateY(8px) rotate(45deg)" } : {}}
          />
          <span
            className="block h-0.5 w-5 rounded bg-current transition-all duration-300"
            style={open ? { opacity: 0 } : {}}
          />
          <span
            className="block h-0.5 w-5 rounded bg-current transition-all duration-300"
            style={open ? { transform: "translateY(-8px) rotate(-45deg)" } : {}}
          />
        </span>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[15px] text-slate-200 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
