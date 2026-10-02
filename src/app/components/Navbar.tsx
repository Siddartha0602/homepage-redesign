"use client";

import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-tis-darkBg/80 border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3">
          <div className="bg-tis-gold p-2 rounded-xl text-tis-navy font-bold">
            TIS
          </div>
          <span className="font-bold text-xl tracking-tight dark:text-white text-tis-navy">
            TULAS <span className="text-tis-gold">International</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-700 dark:text-gray-300">
          <a href="#about" className="hover:text-tis-gold transition">
            About Us
          </a>
          <a href="#academics" className="hover:text-tis-gold transition">
            Academics
          </a>
          <a href="#boarding" className="hover:text-tis-gold transition">
            Boarding Life
          </a>
          <a href="#admissions" className="hover:text-tis-gold transition">
            Admissions
          </a>
        </div>

        {/* Actions (Theme Switcher + Call to Action) */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-slate-800" />
            )}
          </button>

          <a
            href="#admissions"
            className="hidden sm:inline-block bg-tis-gold hover:bg-amber-500 text-tis-navy font-semibold px-5 py-2.5 rounded-xl transition shadow-md hover:shadow-lg"
          >
            Apply Now
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-800 dark:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-tis-darkBg border-b border-gray-200 dark:border-gray-800 px-6 py-6 space-y-4">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block text-slate-800 dark:text-gray-200 hover:text-tis-gold font-medium"
          >
            About Us
          </a>
          <a
            href="#academics"
            onClick={() => setIsOpen(false)}
            className="block text-slate-800 dark:text-gray-200 hover:text-tis-gold font-medium"
          >
            Academics
          </a>
          <a
            href="#boarding"
            onClick={() => setIsOpen(false)}
            className="block text-slate-800 dark:text-gray-200 hover:text-tis-gold font-medium"
          >
            Boarding Life
          </a>
          <a
            href="#admissions"
            onClick={() => setIsOpen(false)}
            className="block text-slate-800 dark:text-gray-200 hover:text-tis-gold font-medium"
          >
            Admissions
          </a>
          <a
            href="#admissions"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-tis-gold text-tis-navy font-semibold py-3 rounded-xl"
          >
            Apply Now
          </a>
        </div>
      )}
    </nav>
  );
}