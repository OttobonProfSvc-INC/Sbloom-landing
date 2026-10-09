const fs = require('fs');
const path = require('path');

// Copy the uploaded image to public/logo.jpg
const sourceImagePath = "C:\\Users\\Sravya\\.gemini\\antigravity-ide\\brain\\8161622d-65c9-4e02-918f-1322e3bb6b83\\.user_uploaded\\media_1791439525994.jpg";
const destImagePath = path.join(__dirname, '../SB/sbloom/public/logo.jpg');
fs.copyFileSync(sourceImagePath, destImagePath);

// Update Logo.tsx
const logoPath = path.join(__dirname, '../SB/sbloom/src/components/Logo.tsx');
const newLogoContent = `export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={\`flex items-center \${className}\`}>
      <img src="/logo.jpg" alt="SBLOOM" className="h-[44px] w-auto object-contain" />
    </div>
  );
}
`;
fs.writeFileSync(logoPath, newLogoContent);

// Update Navbar.tsx
const navbarPath = path.join(__dirname, '../SB/sbloom/src/components/Navbar.tsx');
const newNavbarContent = `"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Industries", href: "/industries" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-300 \${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }\`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 relative z-50">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={\`text-sm font-medium tracking-wide transition-colors py-2 \${
                pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                  ? "text-gold-primary"
                  : "text-white/80 hover:text-white"
              }\`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-white text-black text-sm font-semibold rounded hover:bg-gold-primary transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={\`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 \${
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }\`}
        >
          <nav className="flex flex-col items-center gap-8 text-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={\`transition-colors \${
                  pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                    ? "text-gold-primary"
                    : "text-white hover:text-gold-primary"
                }\`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 px-8 py-3 bg-gold-primary text-black font-semibold rounded hover:bg-white transition-colors"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
`;
fs.writeFileSync(navbarPath, newNavbarContent);

console.log('Logo and Navbar updated successfully.');
