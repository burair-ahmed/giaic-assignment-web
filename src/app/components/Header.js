// components/Header.js
"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="p-5 bg-blue-600 text-white flex items-center justify-between">
      <h1 className="text-xl font-bold">Burair Ahmed</h1>
      <nav className={`space-x-4 ${menuOpen ? "block" : "hidden"} md:flex`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
    </header>
  );
}
