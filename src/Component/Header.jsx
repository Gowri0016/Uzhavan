import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMounted(true);
    setMenuOpen(false); // Close menu when route changes
  }, [location]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Login', path: '/Login' },
  ];

  return (
    <header
      className={`backdrop-blur-sm bg-green-200/80 shadow-md z-50 px-6 py-4 md:px-12 md:py-6 max-w-full mx-auto fixed top-0 left-0 right-0 transition-all duration-700 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
      }`}
    >
      <nav className="flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="flex items-center text-3xl font-extrabold text-green-700 select-none tracking-wider">
          <span className="mr-2 text-4xl animate-bounce">🌱</span>Uzhavan
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-green-900 font-medium text-lg">
          {navItems.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className="relative group"
            >
              <span className="group-hover:text-green-600 transition duration-200">
                {label}
              </span>
              <span
                className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"
              />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden z-50 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-1 w-7 bg-green-700 rounded transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-1 w-7 bg-green-700 rounded transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-1 w-7 bg-green-700 rounded transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-64 opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 pt-4 pb-2 text-green-900 font-medium text-lg bg-green-50 rounded-lg shadow-inner">
          {navItems.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className="relative group"
              onClick={() => setMenuOpen(false)}
            >
              <span className="group-hover:text-green-600 transition">
                {label}
              </span>
              <span
                className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"
              />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}