import React from "react";
import TextType from "./Animation/TextType";
const MangoSection = ({
  title,
  highlight,
  description,
  image,
  buttonText = "Buy Mangoes",
  reverse = false,
}) => {
  return (
    <section
      className={`container mx-auto px-6 py-10 lg:py-14 ${
        reverse ? "bg-gray-50" : ""
      }`}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Left Content */}
        <div className={`${reverse ? "lg:order-2" : ""} space-y-4`}>
          <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>
          
          <p>
            <span className="text-yellow-600 text-lg font-semibold">
              {highlight}
            </span>
          </p>

          <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
            {description}
          </p>
        </div>

        {/* Right Image */}
        <div className={`${reverse ? "lg:order-1" : ""} flex justify-center`}>
          <img src={image} alt={title} className="w-full max-w-md" />
        </div>
      </div>
    </section>
  );
};

export default MangoSection;
