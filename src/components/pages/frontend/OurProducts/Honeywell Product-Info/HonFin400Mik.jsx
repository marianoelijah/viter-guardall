import React from "react";
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";

const HonFin400Mik = () => {
  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen">

      {/* HERO SECTION */}
      <div className="bg-[#7f95b8] py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
                    HON-FIN400MIK-100K: Compact <br/>
                       Fingerprint Device
          </h1>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="container mx-auto px-6 py-16">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8">

              <p className="text-black text-lg mb-6">
              A standard fingerprint device with touch keypads and color LCD displays. It can accurately identify wet and dry fingerprints. 
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
                  HONEYWELL
                </span>
                <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
                   READERS
                </span>
                <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
                  Access Control System
                </span>
              </div>

              <hr className="mb-6" />

              {/* SHARE SECTION */}
             <div className="mt-8">
              <p className="font-medium text-black mb-3">Share:</p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-blue-400 transition-colors duration-200">
                    <img src="/src/assets/image/social-logo/facebook.png" alt="Facebook" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded hover:bg-blue-300 transition-colors duration-200">
                    <img src="/src/assets/image/social-logo/gmail.png" alt="Gmail" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded hover:bg-gray-600 transition-colors duration-200">
                    <img src="/src/assets/image/social-logo/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-green-500 rounded hover:bg-green-400 transition-colors duration-200">
                    <img src="/src/assets/image/social-logo/telegram.png" alt="Telegram" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-green-500 rounded hover:bg-green-400 transition-colors duration-200">
                    <img src="/src/assets/image/social-logo/viber.png" alt="Viber" className="w-full h-full object-contain p-1" />
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">

            {/* MORE BY SECTION */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-black font-semibold mb-4">
                More By HONEYWELL
              </h3>

              <ul className="text-gray-700 text-sm space-y-3">
                <li>Onity DirectKey with Serene</li>
                <li>MAD-401 and MAD-402 Series Addressable Modules I & 2 Technical Inputs</li>
                <li>INR 415 256-Channel 12 Bay RAID Backmount Standalone</li>
                <li>GNR 340 100-Channel Tower Standalone</li>
                <li>ENR 130 16-Channel Desktop Standalone NVR- No HDD Included</li>
                <li>Z86 Outdoor Network Dome Camera with Night Vision</li>
              </ul>
            </div>

            {/* CTA CARD */}
             <div
              className="bg-blue-600 text-white p-6 rounded shadow-md overflow-hidden relative min-h-[200px]"
              style={{
                backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(30, 64, 175, 0.8)), url('/src/assets/image/Our Products/quickalert.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              >
              <div className="relative z-10 px-4 max-w-3xl">
                 <h3 className="text-xl font-semibold mb-3">
                   Secure Your Piece Of Mind Today
                 </h3>
                 <p className="text-lg mb-4">
                   Contact Guard-All now for a customized security solution
                   that protects what matters most.
                 </p>
              <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded w-full">
                CONTACT US TODAY
              </button>
             </div>
            </div>

          </div>

        </div>
      </div>

    </div>
    <Footer />
    </>
    
  );
};

export default HonFin400Mik;