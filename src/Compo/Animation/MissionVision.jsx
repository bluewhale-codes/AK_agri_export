import React from "react";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="w-full bg-[#f9f9f4] py-16 px-6 md:px-16 font-serif">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        {/* Mission Card */}
        <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-green-700 hover:shadow-xl transition duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Target className="text-green-700" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-[#4a4a4a]">
              Our Mission
            </h3>
          </div>
          <p className="text-[#5f5f5f] leading-relaxed">
            To deliver high-quality agricultural products globally while supporting sustainable farming and fair trade practices. We aim to create value for farmers, partners, and customers through excellence in every shipment.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-amber-600 hover:shadow-xl transition duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-amber-100 p-3 rounded-full">
              <Eye className="text-amber-600" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-[#4a4a4a]">
              Our Vision
            </h3>
          </div>
          <p className="text-[#5f5f5f] leading-relaxed">
            To be a globally trusted name in agricultural exports known for reliability, transparency, and exceptional service. We envision a future where Indian agriculture reaches every corner of the world.
          </p>
        </div>

      </div>
    </section>
  );
}
