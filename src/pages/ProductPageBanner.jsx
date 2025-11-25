import BounceCards from "../Compo/BounceCards";
import SplitText from "../Compo/Animation/SplitText";
import TextType from "../Compo/Animation/TextType";
import CircularGallery from "../Compo/CicularGallery";

const productImages = [
  { image: "https://5.imimg.com/data5/SELLER/Default/2023/2/SY/OP/JM/182960890/jaggery-cubes-1000x1000.jpeg", text: "Jaggery Cube" },
  { image: "https://5.imimg.com/data5/SELLER/Default/2025/6/515703495/OY/NS/FH/246311548/onion-1000x1000.jpg", text: "Jaggery Powder" },
  { image: "https://5.imimg.com/data5/SELLER/Default/2023/2/SY/OP/JM/182960890/jaggery-cubes-1000x1000.jpeg", text: "Fresh Mango" },
  { image: "https://5.imimg.com/data5/ANDROID/Default/2025/7/525381928/RZ/DP/GG/9580208/product-jpeg-1000x1000.jpg", text: "Basmati Rice" },
  { image: "https://media.istockphoto.com/id/519309790/photo/pile-of-raw-basmati-rice-with-a-spoon.jpg?s=612x612&w=0&k=20&c=A9A87HykypkOo5qLMQm6bZjBQn83NE1NHMppw8-6Tnc=", text: "Wheat" },
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)",
];

export default function ProductPageBanner() {
  return (
    <section
      className="
        w-full
        min-h-[15vh] md:min-h-[20vh] lg:min-h-[25vh]
        flex flex-col md:flex-row
        items-center justify-center
        px-4 sm:px-6 md:px-12 lg:px-16
        py-4 md:py-6 lg:py-8
        relative bg-cover bg-center bg-no-repeat
      "
      style={{
        backgroundImage:
          "url('https://user-gen-media-assets.s3.amazonaws.com/gemini_images/beb06e69-a523-48d6-88c3-5cec79efec7b.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
        {/* Left: Heading */}
        <div className="w-full md:w-1/2 flex items-center justify-center text-center md:text-left">
          <TextType
            className="
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              font-bold text-white leading-snug md:leading-tight
            "
            text={[
              "Our Products!",
              "Jaggery, Mangoes, Basmati Rice, Wheat, and Onions",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            cursorClassName="text-white"
          />
        </div>

        {/* Right: Circular gallery */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div
            
          >
            <CircularGallery
              items={productImages}
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
            />
          
          </div>
        </div>
      </div>
    </section>
  );
}
