import React from "react";
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import { NavLink } from "react-router-dom";
import SocialShare from "../../Reusable/SocialShare";

const OmniProx = () => {
  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen">

      {/* HERO SECTION */}
      <div className="bg-[#7f95b8] py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
                    OmniProx™ Credentials: <br/>
                      Proximity Card Reader
          </h1>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="container mx-auto px-6 py-16">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">
            <div className="bg-gray-300 border border-gray-300   rounded-xl shadow-sm p-8">

              <p className="text-black text-lg mb-6">
              A sleek, compact proximity reader that has a reliable and consistent read range. It has added security to avoid tampering and system compromise
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-red-500 border text-white px-2 py-1 rounded">
                  Honeywell
                </span>
                <span className="bg-red-500 border text-white px-2 py-1 rounded">
                   Readers
                </span>
                <span className="bg-red-500 border text-white px-2 py-1 rounded">
                  Access Control System
                </span>
              </div>

              <hr className="mb-6" />

              {/* SHARE SECTION */}
             <SocialShare title="Check out this product!" />
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">

            {/* MORE BY SECTION */}
            <div className="bg-gray-300 p-6 rounded shadow-sm">
              <h3 className="font-semibold text-black text-lg mb-4">
                More By HONEYWELL
              </h3>

             <ul className="text-xs space-y-4 text-gray-500 transition-colors">
              <li className='cursor-pointer hover:text-[#f08c09]'>Onity DirectKey with Serene</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>INR 415 256-Channel 12 Bay RAID Rackmount Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>GNR 340 100-Channel Tower Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>ENR 130 16-Channel Desktop Standalone NVR - No HDD Included</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>Z86 Outdoor Network Dome Camera with Night Vision</li>
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
              <button className="bg-blue-700 hover:bg-blue-400 text-white font-semibold px-4 py-2 rounded w-full ">
                <NavLink to="/contacts" className="w-full h-full block">
                CONTACT US TODAY
                </NavLink>
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

export default OmniProx;