import { CheckCircle } from "lucide-react";
import Masonry from "../Compo/Masonry";
import CircularGallery from "../Compo/CicularGallery";
export default function WhyChooseUs() {
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose Us
          </h2>
          <p className="text-gray-600 mt-3">
            Delivering quality and trust across global markets.
          </p>
        </div>
       

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-sm p-6 rounded-2xl border hover:shadow-md transition-all"
            >
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
