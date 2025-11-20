import React from "react";
import { CheckCircle } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="w-full bg-[#f9f9f4] py-20 px-6 md:px-16 font-serif">
      
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3d3d3d]">
          About Us
        </h2>
        <p className="text-lg mt-4 text-[#6c6c6c] max-w-2xl mx-auto">
          Delivering India’s finest agricultural products with uncompromised quality and global trust.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        
        {/* Left Info Section */}
        <div>
          {/* History */}
          <h3 className="text-2xl font-bold text-[#4a4a4a] mb-3">
            Our Journey
          </h3>
          <p className="text-[#5f5f5f] leading-relaxed mb-8">
            We started with a mission to bring India’s rich agricultural heritage to the global market. Today, we export premium-quality
            Jaggery, Mangoes, Basmati Rice, Wheat, and Onions to multiple countries with full customer satisfaction and world-class standards.
          </p>

          {/* Mission / Vision */}
          <h3 className="text-2xl font-bold text-[#4a4a4a] mb-3">
            Mission & Vision
          </h3>
          <p className="text-[#5f5f5f] leading-relaxed mb-8">
            Our mission is to deliver authentic, natural, and chemical-free agricultural products worldwide.  
            Our vision is to become India’s most trusted agro-export brand known for quality, purity, and transparency.
          </p>

          {/* Certifications */}
          <h3 className="text-2xl font-bold text-[#4a4a4a] mb-3">
            Certifications
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-[#4a4a4a]">
              <CheckCircle className="text-green-700" size={22} />
              APEDA Certified Exporter
            </li>
            <li className="flex items-center gap-3 text-[#4a4a4a]">
              <CheckCircle className="text-green-700" size={22} />
              FSSAI Licensed Supplier
            </li>
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/2/SY/OP/JM/182960890/jaggery-cubes-1000x1000.jpeg"
              className="w-full h-48 object-cover rounded-xl shadow-md"
              alt="Warehouse"
            />
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2025/6/515703495/OY/NS/FH/246311548/onion-1000x1000.jpg"
              className="w-full h-48 object-cover rounded-xl shadow-md"
              alt="Farm"
            />
            <img
              src="https://media.istockphoto.com/id/519309790/photo/pile-of-raw-basmati-rice-with-a-spoon.jpg?s=612x612&w=0&k=20&c=A9A87HykypkOo5qLMQm6bZjBQn83NE1NHMppw8-6Tnc="
              className="w-full h-48 object-cover rounded-xl shadow-md"
              alt="Quality Check"
            />
            <img
              src="https://5.imimg.com/data5/ANDROID/Default/2025/7/525381928/RZ/DP/GG/9580208/product-jpeg-1000x1000.jpg"
              className="w-full h-48 object-cover rounded-xl shadow-md"
              alt="Packaging"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
