export default function Footer() {
  return (
    <footer className="bg-[rgb(43,65,27)] text-[#d4b45a] mt-10">
      {/* Top section */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {/* Brand + Logo */}
        <div className="flex flex-col items-start sm:items-start gap-3">
          <div className="flex items-center gap-3">
            <img
              src="https://res.cloudinary.com/dycjjaxsk/image/upload/v1764085917/generated-image_52_1_hqhpy6.png"
              alt="AK Agriculture Export logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <span className="text-base sm:text-lg md:text-xl font-bold text-[#f5e3a5] tracking-wide">
              AK Agriculture Export
            </span>
          </div>
          <p className="text-[11px] sm:text-xs md:text-sm font-medium text-[#e4cfa0]/90 max-w-xs leading-relaxed">
            Supplying premium Indian agricultural products worldwide with
            trust, quality, and timely delivery.
          </p>
        </div>

        {/* Company Links */}
        <div className="sm:text-left">
          <h3 className="text-xs sm:text-sm md:text-base font-bold text-[#f5e3a5] mb-2 sm:mb-3 uppercase tracking-wide">
            Company
          </h3>
          <ul className="space-y-1 text-[11px] sm:text-xs md:text-sm font-semibold">
            <li>
              <a href="/aboutUs" className="hover:text-[#ffe9ac] transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="/why" className="hover:text-[#ffe9ac] transition-colors">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-[#ffe9ac] transition-colors">
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#ffe9ac] transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

       

        {/* Social + Contact */}
        <div className="sm:text-left">
          <h3 className="text-xs sm:text-sm md:text-base font-bold text-[#f5e3a5] mb-2 sm:mb-3 uppercase tracking-wide">
            Connect
          </h3>
          <ul className="space-y-1 text-[11px] sm:text-xs md:text-sm font-semibold">
            <li>
              <a href="https://www.instagram.com/ak.agri.group_of_company/" className="hover:text-[#ffe9ac] transition-colors">
                Instagram
              </a>
            </li>
            {/* <li>
              <a href="https://linkedin.com" className="hover:text-[#ffe9ac] transition-colors">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://facebook.com" className="hover:text-[#ffe9ac] transition-colors">
                Facebook
              </a>
            </li> */}
          </ul>

          <div className="mt-3 sm:mt-4 text-[10px] sm:text-[11px] md:text-xs font-semibold text-[#e4cfa0]/90 space-y-1">
            <p>Email: info@akagricultureexport.com</p>
            <p>Phone: +91-918960000295</p>
            <p>Location: Saharanpur, Uttar Pradesh, India</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#b89646]/40">
        <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4 text-center text-[10px] sm:text-xs md:text-sm font-semibold text-[#e4cfa0]/80">
          © {new Date().getFullYear()} AK Agriculture Export. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
