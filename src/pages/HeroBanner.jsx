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
    console.log("All letters have animated!");
  };

  return (
    <section
      className="
        w-full
        min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]
        flex flex-col md:flex-row
        items-center justify-center
        px-4 sm:px-6 md:px-12 lg:px-20
        py-8 md:py-12 lg:py-16
        relative bg-cover bg-center bg-no-repeat
      "
      style={{
        backgroundImage:
          "url('https://user-gen-media-assets.s3.amazonaws.com/gemini_images/da35811c-a5da-49dd-9526-8d4376bebc20.png')"
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Wrapper */}
      <div className="relative w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-16">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center text-center md:text-left">
          <TextType
            className="
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
              font-bold text-white leading-snug sm:leading-snug md:leading-tight
            "
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
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="
              relative z-10
              bg-white/15 backdrop-blur-md
              p-4 sm:p-5 md:p-6 lg:p-8
              rounded-2xl
              max-w-full
            "
          >
            <BounceCards
              className="custom-bounceCards"
              images={images}
              containerWidth={320}
              containerHeight={280}
              animationDelay={1}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={transformStyles}
              enableHover={false}
            />

            <div className="mt-4 flex justify-center md:justify-start">
                <a href="/products">
                  <button
                    className="
                      px-4 sm:px-6 md:px-8
                      py-2 sm:py-2.5 md:py-3
                      bg-red-600 text-white
                      text-xs sm:text-sm md:text-base lg:text-lg
                      font-semibold rounded-full shadow-md
                      hover:bg-red-700 hover:shadow-lg
                      focus:outline-none focus:ring-2 focus:ring-red-400
                      transition-all duration-300
                    "
                  >
                    Explore more..
                  </button>
                </a>
              </div>

          </div>
        </div>
      </div>
    </section>
  );
}
