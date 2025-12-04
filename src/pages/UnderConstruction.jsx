import React from "react";

function UnderConstruction() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-800">
      <div className="text-center px-4">
        {/* Logo / Brand name */}
        <div className="mb-3">
          <span className="text-2xl font-bold tracking-wide">
           <img
              src="https://res.cloudinary.com/dycjjaxsk/image/upload/v1764085917/generated-image_52_1_hqhpy6.png"
              alt="AK Agriculture Export logo"
              className="h-16 md:h-24 lg:h-28 object-contain"
            />
          </span>
        </div>

        {/* Illustration image */}
        <img
          src="https://c7.alamy.com/comp/2B77M01/3d-web-page-under-construction-concept-2B77M01.jpg"
          alt="Under construction"
          className="mx-auto mb-4 max-w-xs w-full h-auto"
        />

        {/* Text */}
        <h1 className="text-xl md:text-2xl font-semibold mb-2">
          Under Construction
        </h1>
        <p className="text-slate-500 max-w-md mx-auto text-sm md:text-base">
          This page is being worked on. Please check back soon.
        </p>
      </div>
    </div>
  );
}

export default UnderConstruction;
