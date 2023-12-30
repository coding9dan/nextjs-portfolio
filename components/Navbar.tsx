import Link from "next/link";
import React from "react";

interface Props {
  page: string;
}

const Navbar: React.FC<Props> = ({ page }) => {
  return (
    <nav className="flex justify-between items-center py-4 px-2">
      <div className="flex items-center gap-[1ch]">
        <div className="w-5 h-5 bg-yellow-400 rounded-full" />
        <span className="text-sm font-semibold tracking-widest">
          Code in Life
        </span>
      </div>
      <div className="flex gap-12 text-md text-zinc-400">
        <Link
          href="/"
          className={`${
            page === "home" ? "text-black font-medium" : "hover:text-zinc-800"
          }`}
        >
          Home
        </Link>
        <Link
          href="/weather"
          className={`${
            page === "weather"
              ? "text-black font-medium"
              : "hover:text-zinc-800"
          }`}
        >
          Weather
        </Link>
        <Link
          href="/game"
          className={`${
            page === "game" ? "text-black font-medium" : "hover:text-zinc-800"
          }`}
        >
          Game
        </Link>
        <Link
          href="/about"
          className={`${
            page === "about" ? "text-black font-medium" : "hover:text-zinc-800"
          }`}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
