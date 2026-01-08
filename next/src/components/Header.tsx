"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Announcement Bar */}
      <div className="bg-[var(--pink)] text-center py-2 px-4 text-sm">
        <p>Promotional offer or updates here just one line</p>
      </div>

      {/* Main Header */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        {/* Left Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wide">
          <Link href="/itineraries" className="hover:opacity-70 transition-opacity">
            Itineraries
          </Link>
          <Link href="/editions" className="hover:opacity-70 transition-opacity">
            Editions
          </Link>
          <Link href="/people" className="hover:opacity-70 transition-opacity">
            People
          </Link>
          <Link href="/about" className="hover:opacity-70 transition-opacity">
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-2xl md:text-3xl tracking-wider">
          SOUVENIR
        </Link>

        {/* Right Navigation */}
        <div className="flex items-center gap-4 text-sm uppercase tracking-wide">
          <Link href="/login" className="hidden sm:block hover:opacity-70 transition-opacity">
            Login
          </Link>
          <button aria-label="Search" className="p-2 hover:opacity-70 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
          <Link href="/cart" className="p-2 hover:opacity-70 transition-opacity relative">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4">
          <div className="flex flex-col items-center gap-4 text-sm uppercase tracking-wide">
            <Link
              href="/itineraries"
              className="hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Itineraries
            </Link>
            <Link
              href="/editions"
              className="hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Editions
            </Link>
            <Link
              href="/people"
              className="hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              People
            </Link>
            <Link
              href="/about"
              className="hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/login"
              className="hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

