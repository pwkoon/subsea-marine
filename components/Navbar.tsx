import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <div className="bg-darkGrey p-5 text-yellow flex flex-row justify-between items-center">
      <p className="font-extrabold text-3xl">SUBSEA MARINE</p>
      <div className="flex flex-row">
        <Link href="/" className="nav-link">
          HOME
        </Link>
        <Link href="/about" className="nav-link">
          ABOUT
        </Link>
        <Link href="/services" className="nav-link">
          SERVICES
        </Link>
        <Link href="/projects" className="nav-link">
          PROJECTS
        </Link>
        <Link href="/contacts" className="nav-link">
          CONTACTS
        </Link>
      </div>
    </div>
  );
}

