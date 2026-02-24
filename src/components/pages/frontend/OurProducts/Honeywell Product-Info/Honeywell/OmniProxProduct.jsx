import React from "react";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";

const OmniProxProduct = () => {
  return (
    <>
   <Header />
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <div className="bg-[#7f95b8] py-16 text-center">
        <h1 className="text-4xl font-bold text-white tracking-wide">
          OMNIPROX: PROXIMITY CARD READER
        </h1>
      </div>

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* WRAPPER */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SECTION */}
          <div className="lg:col-span-2 bg-white p-8 rounded shadow-sm">

            <p className="text-black  mb-6">
              A sleek, compact proximity reader that has a reliable and consistent
              read range. It has added security to avoid tampering and system compromise.
            </p>

            <h2 className="font-semibold text-black text-lg mb-3">Product Description:</h2>
            <p className="text-black leading-relaxed mb-6">
              Honeywell’s OmniProx™ family is a complete line of 125 kHz HID
              compatible proximity readers that deliver outstanding and consistent
              performance in a small package with attractive styling and colors.
              It combines unique functionality, high-quality engineering and design
              for a variety of applications in the electronic access control market.
            </p>

            <h2 className="font-semibold text-lg text-black mb-3">Product Features:</h2>

            <ul className="list-disc pl-6 text-black space-y-2 mb-8">
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
            <h2 className="font-semibold text-black  text-lg mb-4">
              Technical Specification:
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-3 text-left text-black ">Model</th>
                    <th className="border p-3">OP10</th>
                    <th className="border p-3">OP30</th>
                    <th className="border p-3">OP40</th>
                    <th className="border p-3">OP45</th>
                    <th className="border p-3">OP90</th>
                    <th className="border p-3">OP95</th>
                  </tr>
                </thead>
                <tbody>

                  <tr>
                    <td className="border p-3 font-medium text-black  bg-gray-50">Description</td>
                    <td className="border p-3">Mini mullion reader</td>
                    <td className="border p-3">Large mullion reader</td>
                    <td className="border p-3">Switch plate gang box</td>
                    <td className="border p-3">European box</td>
                    <td className="border p-3">Vandal resistant</td>
                    <td className="border p-3">Vandal resistant w/ keypad</td>
                  </tr>

                  <tr>
                    <td className="border p-3 font-medium text-black  bg-gray-50">Max Read Range</td>
                    <td className="border p-3">3.0” (7.6cm)</td>
                    <td className="border p-3">3.5” (8.9cm)</td>
                    <td className="border p-3">4.13” (10.5cm)</td>
                    <td className="border p-3">3.75” (9.5cm)</td>
                    <td className="border p-3">1.5” (3.8cm)</td>
                    <td className="border p-3">1.5” (3.8cm)</td>
                  </tr>

                  <tr>
                    <td className="border p-3 font-medium text-black  bg-gray-50">Environment</td>
                    <td colSpan="6" className="border p-3">
                      Indoor/Outdoor weather resistant, IP65 rated
                    </td>
                  </tr>

                  <tr>
                    <td className="border p-3 text-black font-medium bg-gray-50">Operating Voltage</td>
                    <td colSpan="6" className="border p-3">
                      5.0 – 16 VDC
                    </td>
                  </tr>

                  <tr>
                    <td className="border p-3 font-medium text-black  bg-gray-50">Humidity</td>
                    <td colSpan="6" className="border p-3">
                      0 – 95%, non-condensing
                    </td>
                  </tr>

                  <tr>
                    <td className="border p-3 font-medium text-black  bg-gray-50">Temperature</td>
                    <td colSpan="6" className="border p-3">
                      -35°C – 66°C (-31°F – 150°F)
                    </td>
                  </tr>

                  <tr>
                    <td className="border p-3 font-medium text-black  bg-gray-50">Warranty</td>
                    <td colSpan="6" className="border p-3">
                      Lifetime
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

              {/* TAGS */}
              <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="text-lg text-white border bg-red-500 px-2">Honeywell</p>
            <p className="text-lg text-white border bg-red-500 px-2">Access Control System</p>
             </div> 

             {/* SHARE SOCIAL */}
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

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">

            <div className="bg-white p-6 rounded shadow-sm">
              <h3 className="font-semibold text-black mb-4">More By Honeywell</h3>
              <ul className="text-sm text-black space-y-2">
                <li>Onity DirectKey with Serene</li>
                <li>MAD-401 and MAD-402 Series</li>
                <li>INR 415 256-Channel RAID</li>
                <li>GNR 340 100-Channel Tower</li>
                <li>ENR 130 Desktop NVR</li>
                <li>Z86 Outdoor Network Dome</li>
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

export default OmniProxProduct;