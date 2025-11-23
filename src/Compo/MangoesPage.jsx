import React from 'react';
import MangoSection from './MangoSection';
const Prodctdetails = [
    {
        title:"Global Quality Standards",
        highlight:"Our products meet international export standards",
        descriptions:["ISO / APEDA / HACCP certificates","Strict quality inspection & grading","Fresh, natural, chemical-free sourcing"],
        image:"https://res.cloudinary.com/dycjjaxsk/image/upload/v1763706893/Screenshot_2025-11-21_120435_ng3owi.png",
        reverse:false
    },
    {
        title:"Reliable Export & Logistics Support",
        highlight:"Timely delivery.",
        descriptions:["Fast, safe, and efficient shipping","End-to-end logistics handling","Real-time shipment tracking","Experience in exporting to multiple countries"],
        image:"https://res.cloudinary.com/dycjjaxsk/image/upload/v1763707333/Screenshot_2025-11-21_121152_gyfz7n.png",
        reverse:true
    },
    {
       title:"Direct Sourcing From Farmers",
        highlight:"builds trust and assures quality.",
        descriptions:["Partnerships with trusted farmers","Fair-trade and sustainable agriculture","Fresh harvest → minimal middlemen"],
        image:"https://res.cloudinary.com/dycjjaxsk/image/upload/v1763707622/Screenshot_2025-11-21_121641_bpnu5p.png",
        reverse:false
    },
    {
         title:"Quick Communication & Support",
        highlight:"Clear communication during shipment",
        descriptions:["24/7 customer support","Dedicated export manager","Fast quotation response","Clear communication during shipment"],
        image:"https://www.zigpac.com/media/magefan_blog/2025/01/quick_supplier_communication.jpg",
        reverse:true
    },
    
  ];

const MangoesPage = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Alphonso Section */}
      

      {Prodctdetails.map((Prodctdetail,key) => (
                  <MangoSection key={key} Prodctdetail={Prodctdetail}/>
                ))}
      

    </div>
  );
};

export default MangoesPage;
    