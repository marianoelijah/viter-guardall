// Footer.jsx
import { FaPhone, FaEnvelope, FaFacebookF, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
         <img src="/src/assets/image/logo.png" alt="Guard-All Logo" className="h-10 w-auto" />
          <p className="text-sm font-poppins mt-4">
            Guard-All is a leading electronic security systems integrator in the Philippines, providing world-class, cost-effective solutions for commercial, industrial, governmental, and residential clients.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-blue-800 font-semibold font-poppins mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><a href="/who-we-are" className="hover:text-blue-600">Who We Are</a></li>
            <li><a href="/products" className="hover:text-blue-600">Our Products</a></li>
            <li><a href="/clients" className="hover:text-blue-600">Our Clients</a></li>
            <li><a href="/contact" className="hover:text-blue-600">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-blue-800 font-semibold font-poppins mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhone /> <span>(02) 8817 4132</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> <span>(02) 8840 5673 to 76</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> <span>(+63) 998 843 9711</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> <span>info@guardall.com.ph</span>
            </li>
          </ul>
        </div>

        {/* Offices & Social */}
        <div>
          <h3 className="text-blue-800 font-semibold font-poppins mb-4">Offices</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                Makati | Unit 708 Cattleya Building, 235 Salcedo St. Legaspi Village, Makati City, Philippines 1223
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                Cebu | Unit 306 Cebu Holdings Building, Cebu Business Park, Cebu City, Philippines 6000
              </span>
            </li>
          </ul>
          <div className="mt-4 flex gap-4">
            <a href="#" className="text-blue-800 hover:text-blue-600"><FaFacebookF /></a>
            <a href="#" className="text-blue-800 hover:text-blue-600"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 mt-6 py-4 text-center text-sm text-gray-500">
        &copy; 2024 <a href="#" className="text-blue-800 hover:text-blue-600">Guard-All Security Systems Inc.</a> All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
