'use client'; // This is the client-side directive

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-6 #9bd7fc">
      {/* Logo and title on the left */}
      <Link href="/" className="web-tittle flex items-center text-4xl font-bold text-white">
        <i className="fas fa-code mr-2 text-3xl" /> {/* Add your icon here */}
        Alishba Zahid
      </Link>

      {/* Menu icon */}
      <div
        id="menu"
        className={`fas fa-bars ${menuOpen ? 'fa-times' : ''} text-white`}
        onClick={() => setMenuOpen(!menuOpen)}
      />

      {/* Navbar items on the right */}
      <nav className={`navbar ${menuOpen ? 'nav-toggle' : ''}`}>
        <ul className="flex space-x-8">
          <li>
          <Link href="/" className="text-white hover:text-[#c3d2ed80]">
          Home
         </Link>

          </li>
          <li>
            <Link href="/about" className="text-white hover:text-[#c3d2ed80]">
              About
            </Link>
          </li>
          <li>
            <Link href="/skills" className="text-white hover:text-[#c3d2ed80]">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/education" className="text-white hover:text-[#c3d2ed80]">
              Education
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-[#c3d2ed80]">
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
