import { motion } from "framer-motion";
import BounceCards from "../Compo/BounceCards";
import HeroBanner from "./HeroBanner";



export default function Home() {

    const images = [
  "https://aamrai.com/wp-content/uploads/2023/12/KESAR-scaled.jpg",
  "https://5.imimg.com/data5/SELLER/Default/2023/2/SY/OP/JM/182960890/jaggery-cubes-1000x1000.jpeg",
  "https://5.imimg.com/data5/SELLER/Default/2025/6/515703495/OY/NS/FH/246311548/onion-1000x1000.jpg",
  "https://5.imimg.com/data5/ANDROID/Default/2025/7/525381928/RZ/DP/GG/9580208/product-jpeg-1000x1000.jpg",
  "https://media.istockphoto.com/id/519309790/photo/pile-of-raw-basmati-rice-with-a-spoon.jpg?s=612x612&w=0&k=20&c=A9A87HykypkOo5qLMQm6bZjBQn83NE1NHMppw8-6Tnc="
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)"
];

  return (
    <>
       <div className="w-full min-h-screen bg-white text-gray-800">
      
       <HeroBanner/>
      {/* Products Preview */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Jaggery Cube", img: "https://images.unsplash.com/photo-1603894584373-5a3d3bdc5c61" },
            { name: "Jaggery Powder", img: "https://images.unsplash.com/photo-1622206151223-14e94a3c2f42" },
            { name: "Fresh Mango", img: "https://images.unsplash.com/photo-1553279768-865429fa0078" },
            { name: "Basmati Rice", img: "https://images.unsplash.com/photo-1603898037225-787bed90f5e9" },
            { name: "Wheat", img: "https://images.unsplash.com/photo-1506617420156-8e4536971650" },
            { name: "Onion", img: "https://images.unsplash.com/photo-1603048297172-c92544798e87" },
          ].map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer"
            >
              <img src={product.img} alt={product.name} className="h-48 w-full object-cover" />

              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">View Details</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <div>
    
      </div>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "100% Natural & Fresh",
            "Government Certified Products",
            "Trusted by Global Clients",
            "Competitive Export Pricing",
            "Secure Packaging",
            "Worldwide Delivery",
          ].map((point, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow rounded-2xl text-center border">
              <p className="font-semibold text-lg">{point}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-green-600 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Looking for Premium Export Quality Products?</h2>
        <p className="text-lg mb-6">Contact us today for pricing, shipping and export details.</p>
        <button className="px-6 py-3 bg-white text-green-700 font-semibold rounded-xl hover:bg-gray-200 text-lg">Contact Us</button>
      </section>
    </div>


    
    </>
  );
}
