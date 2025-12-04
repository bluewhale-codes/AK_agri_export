import React from 'react';
import { CheckCircle, Globe, Award, Truck, Shield, FileCheck ,Check } from 'lucide-react';
import TextType from '../Compo/Animation/TextType';
import { motion } from "framer-motion";

import MissionVision from '../Compo/Animation/MissionVision';
const AboutUs = () => {
  const products = [
    {
      category: "Grains & Cereals",
      image:"https://fitandflex.in/cdn/shop/articles/istockphoto-157581211-612x612.jpg?v=1719222075",
      items: ["Wheat", "Rice", "Maize", "Barley"]
    },
    {
      category: "Fresh Fruits",
      image:"https://res.cloudinary.com/dycjjaxsk/image/upload/v1763719618/Screenshot_2025-11-21_153615_p6621b.png",
      items: ["Mangoes", "Bananas", "Grapes", "Pomegranates"]
    },
    {
       image:"https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg",
      category: "Vegetables",
      items: ["Onion", "Potato", "Garlic", "Tomato"]
    },
    {
      category: "Spices",
      image:"https://www.kanakkupillai.com/learn/wp-content/uploads/2024/12/How-to-Start-a-SpicesMasala-Business-in-India.jpg",
      items: ["Turmeric", "Cardamom", "Cumin", "Coriander"]
    },
    {
      category: "Oil Seeds & Pulses",
      image:"https://www.kanakkupillai.com/learn/wp-content/uploads/2024/12/How-to-Start-a-SpicesMasala-Business-in-India.jpg",
      items: ["Groundnut", "Sesame", "Chickpeas", "Lentils"]
    },
    {
      category: "Processed Agro Products",
      image:"https://www.kanakkupillai.com/learn/wp-content/uploads/2024/12/How-to-Start-a-SpicesMasala-Business-in-India.jpg",
      items: ["Flour", "Oil", "Pickles", "Dried Fruits"]
    }
  ];

  const strengths = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Direct Sourcing",
      description: "We work directly with trusted farmers ensuring quality at the source"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Government Certified",
      description: "All products meet international quality and safety standards"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Global Logistics",
      description: "Timely delivery with comprehensive shipping support worldwide"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Inspection",
      description: "Strict quality control at every stage of the supply chain"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Transparent Pricing",
      description: "Fair and competitive pricing with no hidden costs"
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Export Documentation",
      description: "Complete support with all export paperwork and compliance"
    }
  ];

  const certifications = [
    "FSSAI - Food Safety Standards",
    "APEDA RCMAC - Agricultural Export Authority",
    
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
<section
  className="relative py-16 sm:py-20 md:py-28 lg:py-32 text-white bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://user-gen-media-assets.s3.amazonaws.com/gemini_images/da35811c-a5da-49dd-9526-8d4376bebc20.png')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
    <TextType
      className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white"
      text={["About AK Agriculture Export"]}
      typingSpeed={75}
      pauseDuration={1500}
      showCursor={true}
      cursorCharacter="|"
    />

    <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
      We are a global agricultural export company delivering high-quality,
      certified farm products to international markets. Our mission is to
      connect farmers to the world with trust, transparency, and timely delivery.
    </p>
  </div>
</section>


{/* Who We Are Section */}

<section className="w-full bg-[#f9f9f4] font-serif">
  <div className="max-w-6xl mx-auto my-8 sm:my-10 px-4 sm:px-6 md:px-8 py-10 sm:py-14 lg:py-20">
    <h2 className="text-green-900 text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-12">
      Who We Are
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Text Side */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
      <div className="space-y-3 sm:space-y-4 text-[#5f5f5f]">
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          Founded with a vision to deliver premium Indian agricultural products worldwide, AK Agriculture Export
          works directly with trusted farmers, cooperatives, and manufacturers across India. We bridge the gap
          between local farmers and international markets, ensuring fair trade practices and sustainable farming.
        </p>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          Our company follows strict quality standards to ensure every shipment meets international expectations.
          We serve markets across Asia, Europe, the Middle East, and North America, building long-term
          relationships based on reliability and excellence.
        </p>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          At the core of our values are integrity, quality, sustainability, and customer satisfaction. We believe
          in empowering farmers while delivering the finest products to our global partners.
        </p>
      </div>
      </motion.div>

      {/* Image Side */}
      <div className="flex justify-center">
        <img
          src="https://res.cloudinary.com/dycjjaxsk/image/upload/v1763717262/Screenshot_2025-11-21_145721_ijaebq.png"
          alt="Agriculture"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-56 sm:h-64 md:h-72 lg:h-80 object-contain p-2 sm:p-4"
        />
      </div>
    </div>
  </div>
</section>



      {/* What We Export Section */}

<section
  className="relative bg-gray-50 bg-cover bg-center py-12 sm:py-16 lg:py-20"
  style={{
    backgroundImage:
      "url('https://res.cloudinary.com/dycjjaxsk/image/upload/v1763709499/generated-image_37_1_uuidki.png')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60" />

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 sm:mb-10 lg:mb-12 text-center">
      What We Export
    </h2>

    {/* 2 cards in a row on small screens, 3 on large */}
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {products.map((product, index) => (
        <motion.div
            className="space-y-3 sm:space-y-4 text-[#5f5f5f]"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
        <div
          key={index}
          className="bg-white/90 backdrop-blur-md rounded-lg shadow-md p-4 sm:p-5 lg:p-6 hover:shadow-xl transition duration-300"
        >
          <div className="flex items-start gap-3 sm:gap-4">
            {/* Left Side: Text */}
            <div className="flex-1">
              <h3 className="text-sm sm:text-base lg:text-xl font-bold text-green-700 mb-2 sm:mb-3 lg:mb-4">
                {product.category}
              </h3>

              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm lg:text-base">
                {product.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-700"
                  >
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side: Image */}
            <img
              src={product.image}
              alt={product.category}
              className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover rounded-lg border border-gray-200 flex-shrink-0"
            />
          </div>
        </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      <section className="w-full bg-[#f9f9f4]">
  <div className="max-w-6xl mx-auto my-8 sm:my-10 px-4 sm:px-6 md:px-8 py-10 sm:py-14 lg:py-20">
    <motion.div
        className="space-y-3 sm:space-y-4 text-[#5f5f5f]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-900 mb-6 sm:mb-8 lg:mb-12">
      Mission & Vision
    </h2>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Text Side */}
      <motion.div
        className="space-y-3 sm:space-y-4 text-[#5f5f5f]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
      <div className="space-y-3 sm:space-y-4 text-[#5f5f5f]">
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          Founded with a vision to deliver premium Indian agricultural products worldwide, AK Agriculture Export
          works directly with trusted farmers, cooperatives, and manufacturers across India. We bridge the gap
          between local farmers and international markets, ensuring fair trade practices and sustainable farming.
        </p>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          Our company follows strict quality standards to ensure every shipment meets international expectations.
          We serve markets across Asia, Europe, the Middle East, and North America, building long-term
          relationships based on reliability and excellence.
        </p>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          At the core of our values are integrity, quality, sustainability, and customer satisfaction. We believe
          in empowering farmers while delivering the finest products to our global partners.
        </p>
      </div>
      </motion.div>

      {/* Image Side */}
      <div className="flex justify-center">
        <img
          src="https://res.cloudinary.com/dycjjaxsk/image/upload/v1763721406/Screenshot_2025-11-21_160624_eall0j.png"
          alt="Agriculture"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-56 sm:h-64 md:h-72 lg:h-80 object-contain p-2 sm:p-4"
        />
      </div>
    </div>
  </div>
</section>


      {/* Why We Stand Out Section */}
        <section className="w-full bg-[#f9f9f4] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 font-serif">
          <div className="max-w-6xl mx-auto">
            {/* Section Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#3d3d3d] mb-8 sm:mb-10 lg:mb-12 text-center">
              Why We Stand Out
            </h2>

            {/* Cards: 2 per row on small+, 3 on large */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
              {strengths.map((strength, index) => (
                <motion.div
                  className="space-y-3 sm:space-y-4 text-[#5f5f5f]"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.4 }}
                >
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-md hover:shadow-2xl transition-all duration-300"
                >
                  {/* Icon & Title */}
                  <div className="flex items-center mb-3 sm:mb-4 lg:mb-5">
                    <div className="bg-green-100 text-green-700 rounded-full p-2.5 sm:p-3.5 lg:p-4 mr-3 sm:mr-4 shadow-sm">
                      {strength.icon}
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-[#3d3d3d]">
                      {strength.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm lg:text-lg text-[#5f5f5f] leading-relaxed">
                    {strength.description}
                  </p>
                </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

    
      {/* Certifications Section */}
<section className="w-full bg-[#f9f9f4] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 font-serif">

  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <motion.div
                  className="space-y-3 sm:space-y-4 text-[#5f5f5f]"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.4 }}
                >
    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#3d3d3d] mb-8 sm:mb-10 lg:mb-12 text-center">
      Certifications & Compliance
    </h2>

    {/* Card Wrapper */}
    
    <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-green-100">
      {/* Sub Text */}
      <p className="text-sm sm:text-base lg:text-lg text-[#5f5f5f] mb-6 sm:mb-8 lg:mb-10 text-center max-w-3xl mx-auto leading-relaxed">
        We strictly adhere to global export regulations and ensure every shipment
        meets the highest international quality standards.
      </p>

      {/* Certifications List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="relative flex items-center bg-white rounded-lg p-3 sm:p-4 shadow-sm"
          >
            {/* Tick on Top-Right */}
            <div className="absolute top-2 right-2 bg-green-600 text-white p-1 rounded-full shadow">
              <Check className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>

            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-2 sm:mr-3 flex-shrink-0" />
            <span className="text-sm sm:text-base text-gray-800 font-medium">
              {cert}
            </span>
          </div>
        ))}
      </div>
    </div>
    </motion.div>
  </div>
</section>


      
    </div>
  );
};

export default AboutUs;
