import BounceCards from "../Compo/BounceCards";
import SplitText from "../Compo/Animation/SplitText";
import TextType from "../Compo/Animation/TextType";
export default function HeroBanner() {
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

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  return (
   <section 
  className="w-full h-[60vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 relative bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://user-gen-media-assets.s3.amazonaws.com/gemini_images/beb06e69-a523-48d6-88c3-5cec79efec7b.png')"
  }}
>
  {/* Background Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content Wrapper (keeps content above overlay) */}
  <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-between">
    
    {/* Left Section */}
    <div className="w-full md:w-1/2 h-full flex items-center justify-center p-6">
      <TextType
        className="text-4xl md:text-6xl font-bold text-white"
        text={[
          "Delivering India's Finest Agro Products Worldwide",
          "Trusted exporter of Jaggery, Mangoes, Basmati Rice, Wheat, and Onions"
        ]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
        cursorClassName="text-white"
      />
      
    </div>

    {/* Right Section */}
    <div className="w-full md:w-1/2 h-full flex items-center justify-center p-6">
      <div className="relative z-10 bg-white/20 backdrop-blur-md p-4 rounded-2xl">
        <BounceCards
          className="custom-bounceCards"
          images={images}
          containerWidth={500}
          containerHeight={250}
          animationDelay={1}
          animationStagger={0.08}
          easeType="elastic.out(1, 0.5)"
          transformStyles={transformStyles}
          enableHover={false}
        />
        <div>
            <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-300">
             Explore more..
            </button>
        </div>
      </div>
    </div>

  </div>
</section>
  );
}
