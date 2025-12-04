import React from "react";

const TwoSideBanner = () => {
  return (
   <section className="bg-[#f9f9f4] py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full max-w-xs aspect-square rounded-2xl overflow-hidden shadow-xl bg-white">
              <img
                src="https://res.cloudinary.com/dycjjaxsk/image/upload/v1764870565/photo-1611162616305-c69b3fa7fbe0_l3j1ey.avif"
                alt="Section 1"
                className="w-full h-full object-cover"
              />
            </div>
            <a
              href="https://example.com/first-link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center px-6 py-2 bg-green-700 text-white text-sm font-semibold rounded-full shadow hover:bg-green-800 transition"
            >
              Visit Profle !
            </a>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full max-w-xs aspect-square rounded-2xl overflow-hidden shadow-xl bg-white">
              <img
                src="https://res.cloudinary.com/dycjjaxsk/image/upload/v1764872270/Screenshot_2025-12-04_234732_u2thq1.png"
                alt="Section 2"
                className="w-full h-full object-cover"
              />
            </div>
            <a
              href="https://example.com/second-link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center px-6 py-2 bg-green-700 text-white text-sm font-semibold rounded-full shadow hover:bg-green-800 transition"
            >
              +91 89600 00295
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoSideBanner;
