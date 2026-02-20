import React, { useState } from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

// Header and Footer are provided by OurContacts wrapper; remove duplicate imports

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-poppins selection:bg-blue-100">
      {/* Header Section */}
      <section className="pt-20 pb-12 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-[#1e3a8a] mb-4">
          Contact Us
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-[#2257a0] mb-4">
          Secure Your Life Today!
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Tell us what your home or property needs. Our team is ready to help you!
        </p>
        <button className="mt-8 bg-[#2257a0] text-white px-10 py-3 rounded-md font-semibold hover:bg-red-500 transition-all active:scale-95 shadow-lg">
          GET IN TOUCH
        </button>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Phone Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2257a0] transition-colors">
              <Phone className="text-[#2257a0] group-hover:text-white" size={32} />
            </div>
            <div className="space-y-2 text-gray-700 font-medium">
              <p className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 bg-[#2257a0] rounded-full"></span>
                (02) 8817 4132
              </p>
              <p className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 bg-[#2257a0] rounded-full"></span>
                (02) 8840 5673 to 76
              </p>
              <p className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 bg-[#2257a0] rounded-full"></span>
                (+63) 998 843 9711
              </p>
            </div>
          </div>

          {/* Email/Web Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2257a0] transition-colors">
              <Globe className="text-[#2257a0] group-hover:text-white" size={32} />
            </div>
            <div className="space-y-4">
              <a href="mailto:info@guardall.com.ph" className="block text-gray-700 font-medium hover:text-[#2257a0] transition-colors">
                info@guardall.com.ph
              </a>
              <a href="https://www.guardall.com.ph" target="_blank" rel="noreferrer" className="block text-gray-700 font-medium hover:text-[#2257a0] transition-colors">
                www.guardall.com.ph
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2257a0] transition-colors">
              <MapPin className="text-[#2257a0] group-hover:text-white" size={32} />
            </div>
            <div className="space-y-4 text-sm text-gray-700 text-left w-full">
              <div className="flex gap-3">
                <span className="w-2 h-2 bg-[#2257a0] rounded-full mt-1.5 shrink-0"></span>
                <p><strong>Makati</strong> | Unit 708 Cattleya Building, 235 Salcedo St. Legaspi Village, Makati City, Philippines 1223</p>
              </div>
              <div className="flex gap-3">
                <span className="w-2 h-2 bg-[#2257a0] rounded-full mt-1.5 shrink-0"></span>
                <p><strong>Cebu</strong> | Unit 306 Cebu Holdings Building, Cebu Business Park, Cebu City, Philippines 6000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto relative">
          {/* Blue Shadow Accent */}
          <div className="absolute inset-0 bg-[#0097b2] translate-x-4 translate-y-4 rounded-3xl -z-10"></div>
          
          {/* Text Input */}
          <div className="bg-gray-300 p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2257a0] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2257a0] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              <div>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2257a0] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  placeholder="Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2257a0] focus:border-transparent outline-none transition-all resize-none"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="bg-[#1e40af] text-white px-12 py-4 rounded-lg font-bold hover:bg-blue-800 transition-all active:scale-95 shadow-md"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
      
      
    </div>
  
  );
};


export default Contacts;