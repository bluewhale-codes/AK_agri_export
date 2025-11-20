import React, { useState } from 'react';
import { ArrowLeft, Leaf, Globe, Box, CheckCircle, ChevronRight } from 'lucide-react';

// --- Sample Data (Agro Export Context) ---
const SAMPLE_PRODUCTS  = [
  // 1. Jaggery Cube
  {
    id: 1,
    name: "Organic Jaggery Cubes",
    category: "Jaggery",
    price: "$650 / Ton",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/2/SY/OP/JM/182960890/jaggery-cubes-1000x1000.jpeg",
    shortDesc: "Natural jaggery cubes made from pure sugarcane juice.",
    description:
      "Our Organic Jaggery Cubes are made from fresh sugarcane juice without any chemicals, preservatives, or artificial colors. Known for their rich aroma and sweetness, these cubes are widely used in sweets, beverages, and traditional recipes.",
    specs: {
      origin: "Kolhapur, Maharashtra, India",
      grade: "Chemical-Free, Sulphur-Free",
      packaging: "1kg / 5kg / 25kg Bags",
      moq: "1 Metric Ton",
      shelfLife: "12 Months"
    }
  },

  // 2. Jaggery Powder
  {
    id: 2,
    name: "Natural Jaggery Powder",
    category: "Jaggery",
    price: "$600 / Ton",
    image: "https://shreejifoods.in/cdn/shop/files/jaggery-powder.webp?v=1749031746",
    shortDesc: "Fine, unrefined jaggery powder with natural minerals.",
    description:
      "Our Jaggery Powder is produced from premium-quality sugarcane and processed naturally without chemicals. It dissolves easily, making it ideal for beverages, sweets, and cooking. Rich in iron and antioxidants.",
    specs: {
      origin: "Uttar Pradesh, India",
      grade: "Sulphur-Free, Export Grade",
      packaging: "1kg / 5kg / 25kg Bags",
      moq: "1 Metric Ton",
      shelfLife: "12 Months"
    }
  },

  // 3. Fresh Mango (Kesar / Alphonso)
  {
    id: 3,
    name: "Fresh Kesar Mango",
    category: "Fruits",
    price: "$900 / Ton",
    image: "https://aamrai.com/wp-content/uploads/2023/12/KESAR-scaled.jpg",
    shortDesc: "Naturally ripened Kesar mangoes with rich aroma & sweetness.",
    description:
      "Handpicked from the farms of Gujarat, our Kesar Mangoes are known for their bright saffron color, juicy pulp, and premium taste. Naturally ripened without harmful chemicals, making them perfect for exports.",
    specs: {
      origin: "Gir, Gujarat, India",
      grade: "Export Grade A",
      packaging: "3kg / 5kg Carton Boxes",
      moq: "500 Kg",
      shelfLife: "7–10 Days"
    }
  },

  // 4. Basmati Rice
  {
    id: 4,
    name: "Premium Basmati Rice",
    category: "Rice",
    price: "$750 / Ton",
    image:
      "https://media.istockphoto.com/id/519309790/photo/pile-of-raw-basmati-rice-with-a-spoon.jpg?s=612x612&w=0&k=20&c=A9A87HykypkOo5qLMQm6bZjBQn83NE1NHMppw8-6Tnc=",
    shortDesc: "Long-grain aromatic rice with excellent cooking length.",
    description:
      "Our Basmati Rice is aged for 1–2 years to enhance aroma and grain length. Ideal for biryani, pulao, and international cuisines. Each grain is slender, aromatic, and non-sticky.",
    specs: {
      origin: "Haryana & Punjab, India",
      grade: "1121 Steam / Sella / Raw",
      packaging: "25kg / 50kg PP Bags",
      moq: "1 Metric Ton",
      shelfLife: "24 Months"
    }
  },

  // 5. Lokwan Wheat
  {
    id: 5,
    name: "Organic Lokwan Wheat",
    category: "Grains",
    price: "$450 / Ton",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
    shortDesc: "High-quality golden grains, rich in protein and fiber.",
    description:
      "Lokwan wheat is a premium variety known for its bold, golden grains and high nutritional value. Ideal for making soft chapatis and breads. Our wheat is cleaned, sorted, and packed hygienically to ensure zero impurities.",
    specs: {
      origin: "Madhya Pradesh, India",
      grade: "Premium Sortex Cleaned",
      packaging: "50kg PP Bags",
      moq: "1 Metric Ton",
      shelfLife: "12 Months"
    }
  },

  // 6. Onion
  {
    id: 6,
    name: "Fresh Red Onion",
    category: "Vegetables",
    price: "$300 / Ton",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/6/515703495/OY/NS/FH/246311548/onion-1000x1000.jpg",
    shortDesc: "Export-quality onions with long shelf life.",
    description:
      "Our fresh red onions are sourced directly from farms in Maharashtra. They are known for their strong flavor, long shelf life, and firm quality. Perfect for export with sorted sizes and minimal moisture.",
    specs: {
      origin: "Nashik, Maharashtra, India",
      grade: "Export Grade (45mm+)",
      packaging: "5kg / 10kg / 20kg Mesh Bags",
      moq: "1 Metric Ton",
      shelfLife: "30–45 Days"
    }
  }
];

// --- Component 1: The Product Card ---
const ProductCard = ({ product, onClick }) => {
  return (
    <div 
      className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-full transform hover:-translate-y-1"
      onClick={() => onClick(product)}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold tracking-wider text-[#3e2b26] rounded-full shadow-sm">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#cba156] transition-colors">
            {product.name}
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
          {product.shortDesc}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        
          <button className="flex items-center gap-1 text-sm font-semibold text-[#cba156] group-hover:translate-x-1 transition-transform">
            View Details <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Component 2: The Detailed View Page ---
const ProductDetailView = ({ product, onBack }) => {
  return (
    <div className="animate-fade-in pb-20">
      {/* Back Navigation */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 hover:text-[#cba156] font-medium mb-8 transition-colors"
      >
        <ArrowLeft size={20} /> Back to Products
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left: Image Gallery */}
        <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover max-h-[600px]" 
          />
        </div>

        {/* Right: Product Info */}
        <div className="space-y-8">
          <div>
            <span className="text-[#cba156] font-bold tracking-wider text-sm uppercase">
              {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#3e2b26] mt-2 mb-4">
              {product.name}
            </h1>
            <p className="text-2xl text-gray-900 font-medium">{product.price}</p>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            {product.description}
          </p>

          {/* Specifications Grid */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-[#3e2b26] mb-6 border-b pb-4">
              Export Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
              <SpecItem icon={<Globe />} label="Origin" value={product.specs.origin} />
              <SpecItem icon={<CheckCircle />} label="Grade" value={product.specs.grade} />
              <SpecItem icon={<Box />} label="Packaging" value={product.specs.packaging} />
              <SpecItem icon={<Leaf />} label="Shelf Life" value={product.specs.shelfLife} />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="flex-1 bg-[#3e2b26] text-white py-4 px-8 rounded-lg font-semibold hover:bg-[#2c1e1b] transition-colors shadow-lg">
              Request Quotation
            </button>
            <button className="flex-1 border-2 border-[#3e2b26] text-[#3e2b26] py-4 px-8 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Component for Specs
const SpecItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="text-[#cba156] p-1 bg-[#fff9ec] rounded-md">
      {React.cloneElement(icon, { size: 20 })}
    </div>
    <div>
      <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide">{label}</p>
      <p className="text-gray-900 font-medium">{value}</p>
    </div>
  </div>
);

// --- Main Parent Component ---
const ProductShowcaseApp = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen bg-[#fcfcfc] py-12 px-6 md:px-12 lg:px-24">
      {selectedProduct ? (
        // Show Details View if a product is selected
        <ProductDetailView 
          product={selectedProduct} 
          onBack={() => setSelectedProduct(null)} 
        />
      ) : (
        // Show Grid View otherwise
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3e2b26]">
              Our Global <span className="text-[#cba156]">Exports</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our range of premium agricultural products sourced directly from certified Indian farms for the global market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SAMPLE_PRODUCTS.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={setSelectedProduct} 
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductShowcaseApp;
