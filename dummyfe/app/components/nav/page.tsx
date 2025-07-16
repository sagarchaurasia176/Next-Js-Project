import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 border-b-2 shadow-md bg-slate-700">
      <ul className="flex space-x-6 items-center justify-center text-lg font-medium text-white">
        <li>
          <Link href="/" className="hover:text-blue-400 transition duration-200">
            Home
          </Link>
        </li>
        {/* Minor issues changed */}
        <li>
          <Link href="/pages/contact" className="hover:text-blue-400 transition duration-200">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-400 transition duration-200">
            About
          </Link>
        </li>
        <li>
          <Link href="/signin" className="hover:text-blue-400 transition duration-200">
            Sign In
          </Link>
        </li>
      </ul>
    </nav>
  );
}
