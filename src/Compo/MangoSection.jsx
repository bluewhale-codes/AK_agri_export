import React from "react";
import TextType from "./Animation/TextType";
import { CheckCircle } from "lucide-react";
const MangoSection = ({Prodctdetail,idx}) => {
  return (
    <section
      className={`container mx-auto px-6 py-10 lg:py-14 ${
        Prodctdetail.reverse ? "bg-gray-50" : ""
      }`}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
          Prodctdetail.reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Left Content */}
        <div className={`${Prodctdetail.reverse ? "lg:order-2" : ""} space-y-4`}>
          <h1 className="text-3xl lg:text-4xl font-bold">{Prodctdetail.title}</h1>
          
          <p>
            <span className="text-yellow-600 text-3xl lg:text-3xl font-semibold">
              {Prodctdetail.highlight}
            </span>
          </p>

           <div>
             <ul>
                  {Prodctdetail.descriptions.map((item, idx) => (
                  <li key={idx} className="text-2xl py-3 lg:text-2xl flex items-center text-gray-700">
                    <CheckCircle className="w-7 h-7 text-green-600 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
             </ul>
           </div>
        </div>

        {/* Right Image */}
        <div className={`${Prodctdetail.reverse ? "lg:order-1" : ""} flex justify-center`}>
          <img src={Prodctdetail.image} alt={Prodctdetail.title} className="w-full max-w-md" />
        </div>
      </div>
    </section>
  );
};

export default MangoSection;
