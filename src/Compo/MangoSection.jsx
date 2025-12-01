import React from "react";
import TextType from "./Animation/TextType";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion"; // Import Framer Motion

const MangoSection = ({ Prodctdetail, idx }) => {
  return (
    <section
      className={`w-full px-4 sm:px-6 md:px-8 py-8 md:py-10 lg:py-14 ${
        Prodctdetail.reverse ? "bg-gray-50" : ""
      }`}
    >
      <div
        className={`
          max-w-6xl mx-auto
          grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center
        `}
      >
        {/* Animated Left Content */}
        <motion.div
          className={`
            space-y-3 sm:space-y-4
            ${Prodctdetail.reverse ? "lg:order-2" : ""}
          `}
          initial={{ opacity: 0, y: 50 }}         // Start below and invisible
          whileInView={{ opacity: 1, y: 0 }}      // Animate to visible, up
          viewport={{ once: true, amount: 0.4 }}  // Animate once, 40% in view
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            {Prodctdetail.title}
          </h1>
          <p>
            <span className="text-yellow-600 text-2xl sm:text-3xl font-semibold">
              {Prodctdetail.highlight}
            </span>
          </p>
          <div>
            <ul className="space-y-2 sm:space-y-3">
              {Prodctdetail.descriptions.map((item, i) => (
                <li
                  key={i}
                  className="text-sm sm:text-base md:text-lg lg:text-xl flex items-start text-gray-700"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right Image */}
        <div
          className={`
            flex justify-center
            ${Prodctdetail.reverse ? "lg:order-1" : ""}
          `}
        >
          <img
            src={Prodctdetail.image}
            alt={Prodctdetail.title}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MangoSection;
