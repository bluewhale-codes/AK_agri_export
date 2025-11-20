import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img 
            src="https://res.cloudinary.com/dycjjaxsk/image/upload/v1763645624/5lvfehvzREiLvzFZ5xCUog_1_t5dtqm.jpg" 
            alt="AK Agriculture Exports Logo"
            className="h-12 w-auto"
          />
          <h1 className="text-xl font-bold text-green-700">
            AK Agriculture Exports
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-green-600 cursor-pointer">Home</li>
          <li className="hover:text-green-600 cursor-pointer">Products</li>
          <li className="hover:text-green-600 cursor-pointer">About Us</li>
          <li className="hover:text-green-600 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-3xl" 
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col p-4 gap-4 text-gray-700 font-medium">
            <li className="hover:text-green-600 cursor-pointer">Home</li>
            <li className="hover:text-green-600 cursor-pointer">Products</li>
            <li className="hover:text-green-600 cursor-pointer">About Us</li>
            <li className="hover:text-green-600 cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
