import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between">
      <div className="mb-2">
        <Link
          href="https://freedns.afraid.org/"
          target="_blank"
          className="text-gray-500"
          style={{ fontSize: "10px" }}
        >
          Free DNS{" "}
        </Link>
      </div>
      <div>
        <span className="text-gray-500" style={{ fontSize: "10px" }}>
          Next.js 13 + React + TypeScript + Tailwind CSS
        </span>
      </div>
    </div>
  );
};

export default Footer;
