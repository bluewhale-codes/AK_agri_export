import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    product: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f4] font-serif">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Ready to bring premium Indian agricultural products to your market? We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Information Cards */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#3d3d3d] mb-6">Contact Information</h2>
            
            {/* Email */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Mail className="text-green-700" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#4a4a4a] mb-2">Email Us</h3>
                  <p className="text-[#5f5f5f]">info@akagriexport.com</p>
                  <p className="text-[#5f5f5f]">sales@akagriexport.com</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Phone className="text-green-700" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#4a4a4a] mb-2">Call Us</h3>
                  <p className="text-[#5f5f5f]">+91 98765 43210</p>
                  <p className="text-[#5f5f5f]">+91 98765 43211</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <MapPin className="text-green-700" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#4a4a4a] mb-2">Visit Us</h3>
                  <p className="text-[#5f5f5f]">
                    AK Agriculture Export<br />
                    123 Export Plaza, Main Road<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Clock className="text-green-700" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#4a4a4a] mb-2">Business Hours</h3>
                  <p className="text-[#5f5f5f]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-[#5f5f5f]">Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-[#5f5f5f]">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#3d3d3d] mb-2">Send Us A Message</h2>
              <p className="text-[#6c6c6c] mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#4a4a4a] font-semibold mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[#4a4a4a] font-semibold mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone and Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#4a4a4a] font-semibold mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                  <div>
                    <label className="block text-[#4a4a4a] font-semibold mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                {/* Country and Product Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#4a4a4a] font-semibold mb-2">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                      placeholder="Your Country"
                    />
                  </div>
                  <div>
                    <label className="block text-[#4a4a4a] font-semibold mb-2">
                      Product Interest
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                    >
                      <option value="">Select a product</option>
                      <option value="jaggery">Jaggery</option>
                      <option value="mangoes">Mangoes</option>
                      <option value="basmati">Basmati Rice</option>
                      <option value="wheat">Wheat</option>
                      <option value="onions">Onions</option>
                      <option value="spices">Spices</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[#4a4a4a] font-semibold mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition resize-none"
                    placeholder="Tell us about your requirements, quantity, delivery location, or any questions you have..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition duration-300 shadow-md hover:shadow-xl"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="container mx-auto px-6 pb-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.71637076862644!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AK Agriculture Export Location"
          ></iframe>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <Globe className="mx-auto mb-4" size={48} />
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Start Your Export Journey?
          </h2>
          <p className="text-lg mb-6">
            We're committed to responding to all inquiries within 24 hours
          </p>
        </div>
      </section>
    </div>
  );
}
