import { motion } from "framer-motion";
import BounceCards from "../Compo/BounceCards";
import HeroBanner from "./HeroBanner";
import ProductShowcaseApp from "./ProductShowcaseApp";


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
      
       <div>
        <HeroBanner/>
       </div>
       <div>
       <ProductShowcaseApp/>
       </div>
    
    </div>

    
    
    </>
  );
}
