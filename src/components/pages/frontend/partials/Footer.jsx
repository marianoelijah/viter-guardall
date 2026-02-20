import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaFacebookF, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 font-poppins">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo & Description */}
          <div className="flex flex-col space-y-4">
            <img src="/src/assets/image/Client Logo/logo.png" alt="Guard-All Logo" className="h-10 w-fit" />
            <p className="text-gray-600 leading-relaxed text-base">
              Guard-All is a leading electronic security systems integrator in the Philippines, 
              providing world-class, cost-effective solutions for commercial and residential clients.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-blue-800 font-bold uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-3 text-gray-600">
              <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link to="/who-we-are" className="hover:text-blue-600 transition-colors">Who We Are</Link></li>
              <li><Link to="/products" className="hover:text-blue-600 transition-colors">Our Products</Link></li>
              <li><Link to="/clients" className="hover:text-blue-600 transition-colors">Our Clients</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-blue-800 font-bold uppercase tracking-wider mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-600">
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

          {/* Offices & Social */}
          <div className="flex flex-col space-y-6">
            <div>
              <h3 className="text-blue-800 font-bold uppercase tracking-wider mb-4">Offices</h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex gap-3">
                  <FaMapMarkerAlt className="text-blue-800 shrink-0 mt-1" />
                  <p><strong>Makati:</strong> Unit 708 Cattleya Bldg, 235 Salcedo St. Legaspi Village</p>
                </div>
                <div className="flex gap-3">
                  <FaMapMarkerAlt className="text-blue-800 shrink-0 mt-1" />
                  <p><strong>Cebu:</strong> Unit 306 Cebu Holdings Bldg, Cebu Business Park</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-blue-50 text-blue-800 rounded-full hover:bg-blue-800 hover:text-white transition-all">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="p-2 bg-blue-50 text-blue-800 rounded-full hover:bg-blue-800 hover:text-white transition-all">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-100 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-blue-800">Guard-All Security Systems Inc.</span> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;