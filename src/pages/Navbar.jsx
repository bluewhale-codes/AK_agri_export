import React, { useState } from 'react';
import { Instagram, Linkedin, Facebook, Youtube, User, ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen((s) => !s);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/why', label: 'Why Choose Us' },
    { href: '/aboutUs', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="w-full font-serif py-3 md:py-5 bg-[rgb(43,65,27)] border-b-4 border-yellow-500">
      {/* Top Accent Bar */}
      <div className="h-1 md:h-2 w-full bg-[rgb(43,65,27)]" />

      {/* Main Nav */}
      <nav role="navigation" aria-label="Main Navigation">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Left: Logo + Socials */}
          <div className="flex items-center gap-3 md:gap-6 text-[#d4b45a]">
            <img
              src="https://res.cloudinary.com/dycjjaxsk/image/upload/v1764085917/generated-image_52_1_hqhpy6.png"
              alt="AK Agriculture Export logo"
              className="h-16 md:h-24 lg:h-28 object-contain"
            />
            <div className="hidden sm:flex items-center gap-3 md:gap-4">
              <a href="https://www.instagram.com/ak.agri.group_of_company/" target='_blank' className="p-1 hover:text-[#f0d47a]">
                <Instagram size={22} className="md:w-6 md:h-6" />
              </a>
              
              
            </div>
          </div>

          {/* Center: Desktop Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 text-[#d4b45a] font-semibold text-base lg:text-lg tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#f0d47a] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Actions + Mobile button */}
          <div className="flex items-center gap-3">
            

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-[#d4b45a] hover:text-[#f0d47a]"
              onClick={toggleMobile}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu (full‑width) */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="md:hidden px-4 pt-3 pb-4 space-y-3 bg-[rgb(43,65,27)] text-[#f8e7a0]"
          >
            <div className="flex items-center gap-4 mb-2 sm:hidden">
              <a href="https://www.instagram.com/ak.agri.group_of_company/" target='_blank'><Instagram size={20} /></a>
              
             
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-base font-medium hover:text-[#f0d47a]"
              >
                {link.label}
              </a>
            ))}
            
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
