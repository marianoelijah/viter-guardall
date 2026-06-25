import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import SocialShare from "../OurProducts/Reusable/SocialShare";

// Dynamically reference your base environment endpoint
const IMAGE_BASE_URL = import.meta.env.VITE_API_URL; 

const Footer = () => {
 const [contactInfo, setContactInfo] = useState([]);
  const [offices, setOffices] = useState([]);

  // Fetch dynamic footer elements from your Express backend
  useEffect(() => {
  // Pulling contact records
  fetch(`${IMAGE_BASE_URL}/api/footer-contact`)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP Error Status: ${res.status}`);
      return res.json();
    })
    .then((data) => setContactInfo(Array.isArray(data) ? data : []))
    .catch((err) => {
      console.error("❌ Footer contact error detail:", err);
      setContactInfo([]);
    });

  // Pulling office records
  fetch(`${IMAGE_BASE_URL}/api/footer-offices`)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP Error Status: ${res.status}`);
      return res.json();
    })
    .then((data) => setOffices(Array.isArray(data) ? data : []))
    .catch((err) => {
      console.error("❌ Footer office error detail:", err);
      setOffices([]);
    });
}, []);


  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 font-poppins">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10">
          
          {/* Logo & Description */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
            <img src="/assets/image/Client Logo/logo.png" alt="Guard-All Logo" className="h-12 w-auto" />
            <p className="text-gray-600 leading-relaxed text-lg max-w-sm">
              Guard-All is a leading electronic security systems integrator in the Philippines, 
              providing world-class, cost-effective solutions for commercial, industrial, governmental, 
              and residential clients.
            </p>
          </div>

          {/* Company Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-blue-800 font-bold uppercase tracking-wider mb-6 text-lg">Company</h3>
            <ul className="space-y-3 text-gray-600">
              <li><Link to="/" className="hover:text-blue-600 transition-colors block py-1 sm:py-0 text-lg">Home</Link></li>
              <li><Link to="/who-we-are" className="hover:text-blue-600 transition-colors block py-1 sm:py-0 text-lg">Who We Are</Link></li>
              <li><Link to="/products" className="hover:text-blue-600 transition-colors block py-1 sm:py-0 text-lg">Our Products</Link></li>
              <li><Link to="/clients" className="hover:text-blue-600 transition-colors block py-1 sm:py-0 text-lg">Our Clients</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors block py-1 sm:py-0 text-lg">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info - Live & Clickable */}
          <div className="text-center sm:text-left">
            <h3 className="text-blue-800 font-bold uppercase tracking-wider mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-4 text-gray-600 inline-block sm:block text-left">
              {contactInfo.map((info) => {
                const isPhone = info.type === "phone";
                const href = isPhone 
                  ? `tel:${info.value.replace(/\s+/g, "")}` 
                  : `mailto:${info.value}`;

                return (
                  <li key={info.id} className="flex items-center gap-3">
                    {isPhone ? (
                      <FaPhone className="text-blue-800 shrink-0" />
                    ) : (
                      <FaEnvelope className="text-blue-800 shrink-0" />
                    )}
                    <a 
                      href={href} 
                      className="text-lg md:text-base hover:text-blue-600 transition-colors"
                    >
                      {info.value}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Offices & Social - External Geolocation Hyperlinks */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-6">
            <div>
              <h3 className="text-blue-800 font-bold uppercase tracking-wider mb-4 text-lg">Offices</h3>
              <div className="space-y-4 text-sm text-gray-600 inline-block sm:block text-left">
                {offices.map((office) => (
                  <div key={office.id} className="flex gap-3">
                    <FaMapMarkerAlt className="text-blue-800 shrink-0 mt-1 text-lg" />
                    <p>
                      <strong className="text-gray-800">{office.city}:</strong> |{" "}
                      <a 
                        href={office.map_link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-blue-600 hover:underline transition-colors"
                      >
                        {office.address}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-100 mt-12 pt-8 text-center px-4">
          <p className="text-xs sm:text-sm text-gray-500 leading-loose">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-blue-800">Guard-All Security Systems Inc.</span><br className="sm:hidden" /> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;