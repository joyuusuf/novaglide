'use client';

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#how-it-works", label: "How it works" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <Link href="/" className="text-lg font-bold text-white tracking-tight">
          Nova<span className="gradient-text">Glide</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="text-sm text-muted hover:text-white transition-colors"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="text-sm px-4 py-2 rounded-full border border-line text-white hover:bg-white/5 transition-colors"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm text-muted hover:text-white transition-colors">
                Log in
              </Link>
              <Link
                href="/register"
                className="text-sm px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity"
              >
                Get started
              </Link>
            </>
          )}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line px-4 py-4 flex flex-col gap-4 bg-base">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-muted hover:text-white" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          {user ? (
            <>
              <Link href="/dashboard" className="text-white" onClick={() => setOpen(false)}>
                Dashboard
              </Link>
              <button onClick={logout} className="text-left text-white">
                Log out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-white" onClick={() => setOpen(false)}>
                Log in
              </Link>
              <Link
                href="/register"
                className="text-center px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                onClick={() => setOpen(false)}
              >
                Get started
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
