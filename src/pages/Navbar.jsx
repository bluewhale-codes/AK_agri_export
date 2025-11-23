import React from 'react';
import { Instagram, Linkedin, Facebook, Youtube, User, ShoppingCart, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="w-full font-serif bg-white">
      {/* 1. Top Accent Bar (Pale Green) */}
      <div className="h-2 w-full bg-[#d4e5d4]"></div>

      {/* 2. Main Logo Area */}
      <div className="flex justify-center py-6">
        {/* 
           Replace the src below with your actual logo file path.
           Since your logo is horizontal, you might want to use a specific 
           'stacked' version here, or just let it sit centered.
        */}
          <img 
            src="https://res.cloudinary.com/dycjjaxsk/image/upload/v1763746425/generated-image_41_1_ay3mus.png" 
            alt="Ak Agriculture Export" 
            className="h-20 object-contain" 
          />
        <img 
          src="https://res.cloudinary.com/dycjjaxsk/image/upload/v1763746422/generated-image_41_2_fe5mbq.png" 
          alt="Ak Agriculture Export" 
          className="h-20 object-contain" 
        />
      </div>

      {/* 3. Navigation Bar (Bordered Top & Bottom) */}
      <div className="border-t border-b border-[#e6dcc3]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          
          {/* Left: Social Media Icons (Gold Color) */}
          <div className="flex items-center gap-5 text-[#c5a96e]">
            <a href="#" className="hover:text-[#a38b55] transition-colors"><Instagram size={20} strokeWidth={1.5} /></a>
            <a href="#" className="hover:text-[#a38b55] transition-colors"><Linkedin size={20} strokeWidth={1.5} /></a>
            <a href="#" className="hover:text-[#a38b55] transition-colors"><Facebook size={20} strokeWidth={1.5} /></a>
            <a href="#" className="hover:text-[#a38b55] transition-colors"><Youtube size={20} strokeWidth={1.5} /></a>
          </div>

          <div className="hidden md:flex items-center gap-10 text-[#4a4a4a] font-semibold text-lg tracking-wide">

  {/* Dropdown Item 1 */}
  {/* <div className="group relative flex items-center gap-1 cursor-pointer hover:text-[#c5a96e] transition-colors">
    <span>Products</span>
    <ChevronDown size={16} />
  </div> */}

  

  <a href="/home" className="hover:text-[#c5a96e] transition-colors">Home</a>
  <a href="/products" className="hover:text-[#c5a96e] transition-colors">Products</a>
  <a href="/why" className="hover:text-[#c5a96e] transition-colors">Why Choose Us</a>
  <a href="/aboutUs" className="hover:text-[#c5a96e] transition-colors">About Us</a>
  <a href="/contact" className="hover:text-[#c5a96e] transition-colors">Contact</a>
</div>

          {/* Right: User Actions */}
          <div className="flex items-center gap-6 text-[#c5a96e]">
            <button className="hover:text-[#a38b55] transition-colors">
              <User size={24} strokeWidth={1.5} />
            </button>
            
           
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
