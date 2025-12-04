import React from "react";
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle, Tag, Heart } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="text-emerald-400 text-xs sm:text-sm tracking-widest uppercase mb-2 font-medium">
            Get In Touch
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            A.K Agriculture Exports
          </h2>
          <p className="text-gray-300 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Premium Agricultural Products from India to the World
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {/* Location Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300">
            {/* Image Area */}
            <div className="h-32 sm:h-36 md:h-44 bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
              <div className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                <MapPin className="text-white" size={28} />
              </div>
            </div>
            {/* Content */}
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
                Our Location
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">
                Visit our office
              </p>
              <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                <Tag size={14} className="text-emerald-600 flex-shrink-0" />
                <span className="truncate">Saharanpur, UP India</span>
              </div>
              <div className="flex items-center">
                <button className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-emerald-500 hover:text-emerald-500 transition">
                  <Heart size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300">
            <div className="h-32 sm:h-36 md:h-44 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
              <div className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                <Phone className="text-white" size={28} />
              </div>
            </div>
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
                Phone
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">
                Call us anytime
              </p>
              <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                <Tag size={14} className="text-blue-600 flex-shrink-0" />
                <a href="tel:+918960000295" className="truncate hover:text-blue-600 transition">
                  +91 8960000295
                </a>
              </div>
              <div className="flex items-center">
                <button className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition">
                  <Heart size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300">
            <div className="h-32 sm:h-36 md:h-44 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <div className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                <Mail className="text-white" size={28} />
              </div>
            </div>
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
                Email
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">
                Write to us
              </p>
              <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                <Tag size={14} className="text-orange-500 flex-shrink-0" />
                <a href="mailto:info@akagriculture.com" className="truncate hover:text-orange-500 transition">
                  info@akagriculture.com
                </a>
              </div>
              <div className="flex items-center">
                <button className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition">
                  <Heart size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Working Hours Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300">
            <div className="h-32 sm:h-36 md:h-44 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
              <div className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                <Clock className="text-white" size={28} />
              </div>
            </div>
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
                Working Hours
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">
                We're available
              </p>
              <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                <Tag size={14} className="text-purple-500 flex-shrink-0" />
                <span className="truncate">Mon – Sat: 9 AM – 6 PM</span>
              </div>
              <div className="flex items-center">
                <button className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-purple-500 hover:text-purple-500 transition">
                  <Heart size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5">
          <a
            href="https://wa.me/918960000295"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-3 sm:gap-4 bg-white hover:bg-gray-50 px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="text-white" size={20} />
            </div>
            <span className="text-sm sm:text-base font-bold text-gray-800">
              Chat on WhatsApp
            </span>
          </a>

          <a
            href="https://www.instagram.com/ak.agri.group_of_company/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-3 sm:gap-4 bg-white hover:bg-gray-50 px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0">
              <Instagram className="text-white" size={20} />
            </div>
            <span className="text-sm sm:text-base font-bold text-gray-800 truncate">
              @ak.agri.group_of_company
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
