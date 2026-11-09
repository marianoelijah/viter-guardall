import React from "react";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import { NavLink } from "react-router-dom";
import SocialShare from "../../Reusable/SocialShare";



const HonFin400Mik = () => {
  return (
    <>
    <Header />
    <div className="bg-gray-100 dark:bg-[#121214] min-h-screen font-sans text-slate-800 dark:text-gray-200 transition-colors duration-300">

      {/* HERO SECTION */}
      <div className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-4 text-center transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
                    HON-FIN400MIK-100K: Compact <br/>
                       Fingerprint Device
          </h1>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="md:w-[72%] lg:w-3/4 max-w-6xl mx-auto bg-gray-200 dark:bg-[#1e1e22] border border-transparent dark:border-gray-800 transition-colors shadow-lg my-10 p-8 md:p-12">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">
            <div className="bg-gray-300 rounded-xl shadow-sm p-8 dark:bg-[#1e1e22]">

              <p className="text-[17px] leading-relaxed space-y-4 mb-6">
              A standard fingerprint device with touch keypads and color LCD displays. It can accurately identify wet and dry fingerprints. 
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                  HONEYWELL
                </span>
                <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                   READERS
                </span>
                <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
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
             <div className="space-y-6">
              <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded-xl shadow-sm  mb-6">
                <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By HONEYWELL</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <NavLink to="/our-products/onity/directkey-with-serene" className='block'>
                  <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>Onity DirectKey with Serene </li>
                  </NavLink>
                  <NavLink to="/our-products/detnov/addressable-sounder" className='block'>
                    <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>MAD-401 and MAD-402 Series Modules</li>
                  </NavLink>
                  <NavLink to="/our-products/acti/bay-raid-backmount-standalone" className='block'>
                    <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>INR 415 256-Channel RAID Standalone</li>
                  </NavLink>
                  <NavLink to="/our-products/acti/channel-tower-strandalone" className='block'>
                    <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>GNR 340 100-Channel Tower NVR</li>
                  </NavLink>
                  <NavLink to="/our-products/acti/bay-raid-backmount-standalone" className='block'>
                  <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>INR 415 256-Channel RAID Standalone</li>
                  </NavLink>
                  <NavLink to="/our-products/acti/channel-tower-strandalone" className='block'>
                    <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>GNR 340 100-Channel Tower NVR</li>
                  </NavLink>
                </ul>
              </div>

            {/* CTA CARD */}
               <div 
              className="relative min-h-[240px] overflow-hidden rounded-2xl p-8 text-white shadow-md bg-cover bg-center bg-blend-multiply bg-blue-900/85"
              style={{ backgroundImage: "url('/assets/image/Our%20Products/quickalert.jpg')" }}
            >
              <div className="relative z-10 max-w-3xl">
                <h3 className="mb-4 text-2xl font-bold leading-tight tracking-wide">
                  Secure Your Peace Of Mind Today
                </h3>
                
                <p className="mb-6 text-sm md:text-base text-gray-200 font-medium leading-relaxed">
                  Contact Guard-All now for a customized security solution that protects what matters most.
                </p>

                <NavLink 
                  to="/contacts" 
                  className="inline-block w-full rounded-xl bg-[#0f3e90] px-2 py-3 text-center text-sm font-semibold tracking-wider text-white transition-colors hover:bg-[#ff5f31] sm:w-auto"
                >
                  CONTACT US TODAY
                </NavLink>
              </div>
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