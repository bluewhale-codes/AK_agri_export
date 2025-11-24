// ...existing code...
import React, { useState } from 'react';
import { Instagram, Linkedin, Facebook, Youtube, User, ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen((s) => !s);

  const navLinks = [
    { href: '/home', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/why', label: 'Why Choose Us' },
    { href: '/aboutUs', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="w-full font-serif bg-white">
      {/* 1. Top Accent Bar (Pale Green) */}
      <div className="h-2 w-full bg-[#d4e5d4]" />

      {/* 2. Main Logo Area */}
      <div className="flex justify-center py-6">
        <div className="flex items-center gap-4">
          
          
        </div>
      </div>

      {/* 3. Navigation Bar */}
      <nav className="" role="navigation" aria-label="Main Navigation">
        <div className="max-w-7xl mx-auto  h-40 flex items-center justify-between">
          {/* Left: Social Media Icons */}
          <div className="flex items-center gap-4 text-[#c5a96e]">
            <img
            src="https://res.cloudinary.com/dycjjaxsk/image/upload/v1763965259/generated-image_49_1_tvqn7t.png"
            alt="AK Agriculture Export logo"
            className="h-32 object-contain"
          />
            <a href="#" className="p-1 hover:text-[#a38b55] focus:outline-none focus:ring-2 focus:ring-[#a38b55] rounded">
              <Instagram size={18} strokeWidth={1.5} aria-hidden="true" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="p-1 hover:text-[#a38b55] focus:outline-none focus:ring-2 focus:ring-[#a38b55] rounded">
              <Linkedin size={18} strokeWidth={1.5} aria-hidden="true" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="p-1 hover:text-[#a38b55] focus:outline-none focus:ring-2 focus:ring-[#a38b55] rounded">
              <Facebook size={18} strokeWidth={1.5} aria-hidden="true" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="p-1 hover:text-[#a38b55] focus:outline-none focus:ring-2 focus:ring-[#a38b55] rounded">
              <Youtube size={18} strokeWidth={1.5} aria-hidden="true" />
              <span className="sr-only">YouTube</span>
            </a>
          </div>

          {/* Center: Desktop Links */}
          <div className="hidden md:flex items-center gap-10 text-[#4a4a4a] font-semibold text-lg tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#c5a96e] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c5a96e] rounded"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Actions + Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <button
              className="hidden md:inline-flex items-center p-1 text-[#c5a96e] hover:text-[#a38b55] transition-colors focus:outline-none focus:ring-2 focus:ring-[#a38b55] rounded"
              aria-label="View cart"
            >
              <ShoppingCart size={22} strokeWidth={1.5} />
            </button>

            <button
              className="hidden md:inline-flex items-center p-1 text-[#c5a96e] hover:text-[#a38b55] transition-colors focus:outline-none focus:ring-2 focus:ring-[#a38b55] rounded"
              aria-label="Account"
            >
              <User size={22} strokeWidth={1.5} />
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-[#4a4a4a] hover:text-[#c5a96e] focus:outline-none focus:ring-2 focus:ring-[#c5a96e] rounded"
              onClick={toggleMobile}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-max-h duration-200 overflow-hidden border-t border-[#e6dcc3] ${mobileOpen ? 'max-h-screen' : 'max-h-0'}`}
        >
          <div className="px-6 py-4 bg-white flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-[#4a4a4a] font-medium py-2 hover:text-[#c5a96e] focus:outline-none focus:ring-2 focus:ring-[#c5a96e] rounded"
              >
                {link.label}
              </a>
            ))}

            <div className="flex items-center gap-4 pt-2 border-t border-[#f0ead8] mt-2">
              <button className="flex items-center gap-2 text-[#c5a96e] hover:text-[#a38b55] focus:outline-none focus:ring-2 focus:ring-[#a38b55] rounded p-1">
                <ShoppingCart size={18} />
                <span className="text-sm">Cart</span>
              </button>
              <button className="flex items-center gap-2 text-[#c5a96e] hover:text-[#a38b55] focus:outline-none focus:ring-2 focus:ring-[#a38b55] rounded p-1">
                <User size={18} />
                <span className="text-sm">Account</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
// ...existing code...