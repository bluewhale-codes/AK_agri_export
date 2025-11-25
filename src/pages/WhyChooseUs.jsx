
import CircularGallery from "../Compo/CicularGallery";
import MangoesPage from "../Compo/MangoesPage";
import TextType from "../Compo/Animation/TextType";
import "./whychooseus.css"
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
export default function WhyChooseUs() {
  const productImages = [
  {
    image: "https://res.cloudinary.com/dycjjaxsk/image/upload/v1763702045/Screenshot_2025-11-21_104345_hqvvke.png",
    text: "Jaggery Cube"
  },
  {
    image: "https://res.cloudinary.com/dycjjaxsk/image/upload/v1763702262/Screenshot_2025-11-21_104604_bfnfqa.png",
    text: "Jaggery Powder"
  },
  {
    image: "https://res.cloudinary.com/dycjjaxsk/image/upload/v1763702262/Screenshot_2025-11-21_104622_b8licp.png",
    text: "Fresh Mango"
  },
  {
    image: "https://res.cloudinary.com/dycjjaxsk/image/upload/v1763702261/Screenshot_2025-11-21_104657_wzmzh2.png",
    text: "Basmati Rice"
  },
  {
    image: "https://res.cloudinary.com/dycjjaxsk/image/upload/v1763702259/Screenshot_2025-11-21_104713_xammxm.png",
    text: "Wheat"
  },
  {
    image: "https://res.cloudinary.com/dycjjaxsk/image/upload/v1763702261/Screenshot_2025-11-21_104638_v3a6js.png",
    text: "Wheat"
  }
  
];

  const features = [
    { title: "100% Natural & Fresh", desc: "We deliver farm-fresh and naturally grown products." },
    { title: "Verified Export Quality", desc: "Every product goes through strict export-grade checks." },
    { title: "Global Delivery", desc: "We supply worldwide with fast & reliable logistics." },
    { title: "Government Certified", desc: "All products comply with government and international standards." },
    { title: "Competitive Pricing", desc: "Premium quality at honest and affordable prices." },
    { title: "Trusted by International Clients", desc: "We proudly serve clients across multiple countries." },
  ];
  const items = [
    {
      id: "1",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "3",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    // ... more items
];

  return (
    <section className=" bg-gray-50">
      <div 
  className="relative max-w-full px-6 py-16 bg-cover bg-center bg-no-repeat"
  style={{ 
    backgroundImage: "url('https://res.cloudinary.com/dycjjaxsk/image/upload/v1763709499/generated-image_37_1_uuidki.png')"  // <-- change this
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Actual Content */}
  <div className="relative max-w-7xl mx-auto">
        
    <div className="text-center mb-12">
      
      <TextType
        className="text-4xl md:text-4xl font-bold text-white"
        text={[
          "Why Choose Us",
          
        ]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
        cursorClassName="text-white"
      />
      <p className="text-gray-200 mt-3">
        Delivering quality and trust across global markets.
      </p>
    </div>

    <div className="circluar-gallery"
  
  
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


      <MangoesPage/>
    </section>
  );
}
