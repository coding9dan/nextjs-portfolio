import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
