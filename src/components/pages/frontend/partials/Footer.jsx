import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaFacebookF, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 font-poppins">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Main Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10">
          
          {/* Logo & Description - Centered on mobile */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
            <img src="/assets/image/Client Logo/logo.png" alt="Guard-All Logo" className="h-12 w-auto" />
            <p className="text-gray-600 leading-relaxed text-base max-w-sm">
              Guard-All is a leading electronic security systems integrator in the Philippines, 
              providing world-class, cost-effective solutions.
            </p>
          </div>

          {/* Company Links - Centered on mobile */}
          <div className="text-center sm:text-left">
            <h3 className="text-blue-800 font-bold uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-3 text-gray-600">
              <li><Link to="/" className="hover:text-blue-600 transition-colors block py-1 sm:py-0">Home</Link></li>
              <li><Link to="/who-we-are" className="hover:text-blue-600 transition-colors block py-1 sm:py-0">Who We Are</Link></li>
              <li><Link to="/products" className="hover:text-blue-600 transition-colors block py-1 sm:py-0">Our Products</Link></li>
              <li><Link to="/clients" className="hover:text-blue-600 transition-colors block py-1 sm:py-0">Our Clients</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors block py-1 sm:py-0">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info - Centered on mobile */}
          <div className="text-center sm:text-left">
            <h3 className="text-blue-800 font-bold uppercase tracking-wider mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-600 inline-block sm:block text-left">
              <li className="flex items-center gap-3">
                <FaPhone className="text-blue-800 shrink-0" /> 
                <span className="text-sm md:text-base">(02) 8817 4132</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-blue-800 shrink-0" /> 
                <span className="text-sm md:text-base">(02) 8840 5673 to 76</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-800 shrink-0" /> 
                <span className="text-sm md:text-base">info@guardall.com.ph</span>
              </li>
            </ul>
          </div>

          {/* Offices & Social - Centered on mobile */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-6">
            <div>
              <h3 className="text-blue-800 font-bold uppercase tracking-wider mb-4">Offices</h3>
              <div className="space-y-4 text-sm text-gray-600 inline-block sm:block text-left">
                <div className="flex gap-3">
                  <FaMapMarkerAlt className="text-blue-800 shrink-0 mt-1" />
                  <p><strong>Makati:</strong> Unit 708 Cattleya Bldg, 235 Salcedo St.</p>
                </div>
                <div className="flex gap-3">
                  <FaMapMarkerAlt className="text-blue-800 shrink-0 mt-1" />
                  <p><strong>Cebu:</strong> Unit 306 Cebu Holdings Bldg, Business Park</p>
                </div>
              </div>
            </div>
            
            {/* Social Icons Container */}
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-3 bg-blue-50 text-blue-800 rounded-full hover:bg-blue-800 hover:text-white transition-all transform hover:-translate-y-1">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="p-3 bg-blue-50 text-blue-800 rounded-full hover:bg-blue-800 hover:text-white transition-all transform hover:-translate-y-1">
                <FaLinkedinIn size={20} />
              </a>
            </div>
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