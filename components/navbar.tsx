"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-20 py-4 flex justify-between items-center bg-black/70 backdrop-blur">
      {/* <span className="font-semibold text-lg">Om</span> */}

      <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-700">
        <Image
          src="/avatar.png"
          alt="Om Autade"
          width={32}
          height={32}
          className="object-cover"
          priority
        />
      </div>


      <div className="flex gap-6 text-sm text-gray-400 items-center">
        <a href="#projects" className="hover:text-white transition">
            Projects
        </a>
        <a href="#about" className="hover:text-white transition">
            About
        </a>
        <a href="#skills" className="hover:text-white transition">
            Skills
        </a>
        <a href="#contact" className="hover:text-white transition">
            Contact
        </a>
        <a
            href="/resume.pdf"
            target="_blank"
            className="px-4 py-2 border border-gray-600 rounded-lg hover:border-white hover:text-white transition"
        >
            Resume
        </a>
      </div>
    </nav>
  );
}
