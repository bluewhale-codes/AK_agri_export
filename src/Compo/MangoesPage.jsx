import React from 'react';
import MangoSection from './MangoSection';


const MangoesPage = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Alphonso Section */}
      <MangoSection
        title="Global Quality Standards"
        highlight="Our products meet international export standards"
        description="Orchard Fresh and Organic Aamrai mangoes delivered straight from healthy organic orchards..."
        image="https://res.cloudinary.com/dycjjaxsk/image/upload/v1763706893/Screenshot_2025-11-21_120435_ng3owi.png"
      />

      {/* Ratnagiri Section (image on left, text right) */}
      <MangoSection
        title="Reliable Export & Logistics Support"
        highlight="Timely delivery."
        description="Renowned for their sweetness, creamy texture, flavour and aroma..."
        image="https://res.cloudinary.com/dycjjaxsk/image/upload/v1763707333/Screenshot_2025-11-21_121152_gyfz7n.png"
        reverse={true}
      />
      <MangoSection
        title="Direct Sourcing From Farmers"
        highlight="builds trust and assures quality."
        description="Renowned for their sweetness, creamy texture, flavour and aroma..."
        image="https://res.cloudinary.com/dycjjaxsk/image/upload/v1763707622/Screenshot_2025-11-21_121641_bpnu5p.png"
        
      />
      <MangoSection
        title="Quick Communication & Support"
        highlight="Clear communication during shipment"
        description="Renowned for their sweetness, creamy texture, flavour and aroma..."
        image="https://www.zigpac.com/media/magefan_blog/2025/01/quick_supplier_communication.jpg"
        reverse={true}
      />
      

    </div>
  );
};

export default MangoesPage;
    