import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaFacebookF, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import SocialShare from "../OurProducts/Reusable/SocialShare";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 font-poppins">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Main Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10">
          
          {/* Logo & Description - Centered on mobile */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
            <img src="/assets/image/Client Logo/logo.png" alt="Guard-All Logo" className="h-12 w-auto" />
            <p className="text-gray-600 leading-relaxed text-lg max-w-sm">
              Guard-All is a leading electronic security systems integrator in the Philippines, 
              providing world-class, cost-effective solutions for commercial, industrial, governmental, 
              and residential clients.
            </p>
          </div>

          {/* Company Links - Centered on mobile */}
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

          {/* Contact Info - Centered on mobile */}
          <div className="text-center sm:text-left">
            <h3 className="text-blue-800 font-bold uppercase tracking-wider mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-4 text-gray-600 inline-block sm:block text-left">
              <li className="flex items-center gap-3">
                <FaPhone className="text-blue-800 shrink-0" /> 
                <span className="text-lg md:text-base">(02) 8817 4132</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-blue-800 shrink-0" />
                <span className="text-lg md:text-base">(02) 8840 5673 to 76</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-blue-800 shrink-0" /> 
                <span className="text-lg md:text-base">(+63) 998 843 9711</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-800 shrink-0" />
                <span className="text-lg md:text-base">info@guardall.com.ph</span>
              </li>
            </ul>
          </div>

          {/* Offices & Social - Centered on mobile */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-6">
            <div>
              <h3 className="text-blue-800 font-bold uppercase tracking-wider mb-4 text-lg">Offices</h3>
              <div className="space-y-4 text-sm text-gray-600 inline-block sm:block text-left">
                <div className="flex gap-3">
                  <FaMapMarkerAlt className="text-blue-800 shrink-0 mt-1 text-lg" />
                  <p><strong>Makati:</strong> Unit 708 Cattleya Bldg, 235 Salcedo St.</p>
                </div>
                <div className="flex gap-3">
                  <FaMapMarkerAlt className="text-blue-800 shrink-0 mt-1 text-lg" />
                  <p><strong>Cebu:</strong> Unit 306 Cebu Holdings Bldg, Business Park</p>
                </div>
              </div>
            </div>
            
            {/* Social Icons Container */}
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