import React from "react";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import SocialShare from "../../Reusable/SocialShare";
import { NavLink } from "react-router-dom";

const OmniProxProduct = () => {
  return (
    <>
   <Header />
    <div className="bg-gray-100 dark:bg-[#121214] min-h-screen font-sans text-slate-800 dark:text-gray-200 transition-colors duration-300">

      {/* HEADER */}
      <div className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-4 text-center transition-colors duration-300">
        <h1 className="text-4xl font-bold text-white tracking-wide">
          OMNIPROX: PROXIMITY CARD READER
        </h1>
      </div>

      {/* CONTAINER */}
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* WRAPPER */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SECTION */}
          <div className="lg:col-span-2 max-w-6xl mx-auto bg-gray-200 p-8 shadow-sm dark:bg-[#1e1e22]">

            <p className="-text-[17px] leading-relaxed space-y-4 mb-6">
              A sleek, compact proximity reader that has a reliable and consistent
              read range. It has added security to avoid tampering and system compromise.
            </p>

            <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Description:</h2>
            <p className="text-[17px] leading-relaxed space-y-4 mb-6">
              Honeywell’s OmniProx™ family is a complete line of 125 kHz HID
              compatible proximity readers that deliver outstanding and consistent
              performance in a small package with attractive styling and colors.
              It combines unique functionality, high-quality engineering and design
              for a variety of applications in the electronic access control market.
            </p>

            <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Features:</h2>

            <ul className="list-disc ml-5 text-[17px] space-y-1">
              <li>Variety of sizes to choose from</li>
              <li>Host LED control and optical tamper output</li>
              <li>Hidden mounting screws deter vandalism</li>
              <li>Potted for superior weather-resistance</li>
              <li>Wiegand or Clock & Data output</li>
              <li>Includes vandal-resistant security tool</li>
              <li>Adhesive-backed mounting template reduces installation time</li>
              <li>Three bezels included (black, charcoal gray & ivory)</li>
              <li>Lifetime warranty</li>
              <li>CE, RoHS and RED certified</li>
            </ul>

            {/* TECHNICAL SPECIFICATION TABLE */}
            <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-5 mt-5 transition-colors">
              Technical Specification:
            </h2>

            <div className="border border-gray-500 dark:border-gray-700 rounded-sm overflow-x-auto mb-8">
              <table className="w-full text-[15px] text-left border-collapse">
                <thead>
                  <tr className="border p-2 font-semibold text-[15px] border-r border-black">
                    <th className="border p-2 font-semibold text-[15px] border-r border-black">Model</th>
                    <th className="border p-3 border-black border-r">OP10</th>
                    <th className="border p-3 border-black border-r">OP30</th>
                    <th className="border p-3 border-black border-r">OP40</th>
                    <th className="border p-3 border-black border-r">OP45</th>
                    <th className="border p-3 border-black border-r">OP90</th>
                    <th className="border p-3 border-black border-r">OP95</th>
                  </tr>
                </thead>
                <tbody>

                  <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">Description</td>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">Mini mullion reader</td>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">Large mullion reader</td>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">Switch plate gang box</td>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">European box</td>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">Vandal resistant</td>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">Vandal resistant w/ keypad</td>
                  </tr>

                  <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">Max Read Range</td>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">3.0” (7.6cm)</td>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">3.5” (8.9cm)</td>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">4.13” (10.5cm)</td>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">3.75” (9.5cm)</td>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">1.5” (3.8cm)</td>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">1.5” (3.8cm)</td>
                  </tr>

                  <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">Environment</td>
                    <td colSpan="6" className="border p-2 font-semibold text-[15px] border-r border-black">
                      Indoor/Outdoor weather resistant, IP65 rated
                    </td>
                  </tr>

                  <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">Operating Voltage</td>
                    <td colSpan="6" className="border p-2 font-semibold text-[15px] border-r border-black">
                      5.0 – 16 VDC
                    </td>
                  </tr>

                  <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">Humidity</td>
                    <td colSpan="6" className="border p-2 font-semibold text-[15px] border-r border-black">
                      0 – 95%, non-condensing
                    </td>
                  </tr>

                  <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">Temperature</td>
                    <td colSpan="6" className="border p-2 font-semibold text-[15px] border-r border-black">
                      -35°C – 66°C (-31°F – 150°F)
                    </td>
                  </tr>

                  <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">Warranty</td>
                    <td colSpan="6" className="border p-2 font-semibold text-[15px] border-r border-black">
                      Lifetime
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

              {/* TAGS */}
              <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="rounded text-white border bg-[#ff5f31] px-2">Honeywell</p>
            <p className="rounded text-white border bg-[#ff5f31] px-2">Access Control System</p>
             </div> 

             {/* SHARE SOCIAL */}
            <SocialShare title="Check out this product!" />

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">

             <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
                <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By Honeywell</h3>
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
    <Footer />
    </>
  );
};

export default OmniProxProduct;