import React from "react";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";

const Fin4000ac = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <div className="bg-[#7f95b8] py-16 text-center mb-5">
        <h1 className="text-5xl font-bold text-white tracking-wide">
          HON-FIN4000AC-100K: COMPACT <br />
          FINGERPRINT DEVICE
        </h1>
      </div>

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* WRAPPER */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 bg-gray-300 p-8 rounded shadow-sm">

            <p className="text-black font-oswald text-bold mb-6">
              A slender, compact fingerprint device that can provide a high level of
              security for your property and can effectively identify fake fingerprints.
            </p>

            <h2 className="font-semibold text-black text-lg mb-3">Product Description:</h2>
            <p className="text-black mb-6 leading-relaxed">
              Equipped with advanced fingerprint recognition technology and top
              hardware configuration, Honeywell HON-FIN4000 Series compact
              fingerprint device provides class-leading performance and high
              security level of protection.
            </p>

            <h2 className="font-semibold text-black text-lg mb-3">Product Features:</h2>
            <ul className="list-disc pl-6 text-black space-y-2 mb-8">
              <li>Slender and compact design. Brushed Metal Panel.</li>
              <li>1.2GHz quad-core CPU with large capacity memory</li>
              <li>High sensitivity optical sensor</li>
              <li>Advanced fingerprint recognition algorithm</li>
              <li>Fake finger detection (Rubber, paper, glue, clay)</li>
              <li>Multi-card identification</li>
              <li>RS-485 / TTL / Relay / Wiegand</li>
              <li>IP67 Protection</li>
            </ul>

            {/* TECHNICAL SPECIFICATION TABLE */}
            <h2 className="font-semibold text-black text-lg mb-4">Technical Specification:</h2>

            <div className="overflow-x-auto">
              <table className="w-full border bg-gray-200 text-xl text-black border-black  ">
                <tbody className="divide-y divide-gray-300 border border-black border-r">

                  {[
                    ["Model", "HON-FIN4000AC-100K"],
                    ["CPU", "1.2G Quad Core"],
                    ["Memory", "2GB Flash + 256MB RAM"],
                    ["Fingerprint Sensor", "Optical Sensor"],
                    ["Matching Speed", "Max. 1:150,000 match/sec"],
                    ["Max. User", "100,000"],
                    ["Max. FP Template", "200,000"],
                    ["Logs", "1,000,000"],
                    ["Ethernet", "10/100 Mbps"],
                    ["RS-485", "OSDP Supported"],
                    ["Wiegand", "Supported"],
                    ["Relay", "1 door relay"],
                    ["LED", "Multi-Color"],
                    ["Sound", "Multi-tone Buzzer"],
                    ["Tamper", "Supported"],
                    ["Power", "12V DC (Max.600mA)"],
                    ["Operating Temperature", "-20°C ~ 50°C"],
                    ["Operating Humidity", "0% ~ 80%"],
                    ["Ingress Protection", "IP67"],
                    ["Dimensions", "50 x 172 x 43.5 mm"],
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-gray-300 text-[15px]">
                      <td className="p-3 font-medium bg-gray-50 w-1/3 text-[17px]">
                        {row[0]}
                      </td>
                      <td className="p-3">{row[1]}</td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>

            {/* TAGS */}
              <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="rounded text-white border bg-red-500 px-2 py-1">Honeywell</p>
            <p className="rounded text-white border bg-red-500 px-2 py-1">Access Control System</p>
             </div> 
            

            {/* SHARE SOCIAL */}
            <div className="mt-8">
              <p className="font-medium text-black mb-3">Share:</p>  
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/facebook.png" alt="Facebook" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/gmail.png" alt="Gmail" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/telegram.png" alt="Telegram" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/viber.png" alt="Viber" className="w-full h-full object-contain p-1" />
                </div>
              </div>
            </div>
            
            
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">

            {/* Sidebar */}
            <div className="bg-gray-300 p-6 rounded shadow-sm">
              <h3 className="font-semibold text-black text-xl mb-4">More By Honeywell</h3>
             <ul className="text-xs space-y-4 text-gray-500 transition-colors">
              <li className='cursor-pointer hover:text-[#f08c09]'>Onity DirectKey with Serene</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>INR 415 256-Channel 12 Bay RAID Rackmount Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>GNR 340 100-Channel Tower Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>ENR 130 16-Channel Desktop Standalone NVR - No HDD Included</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>Z86 Outdoor Network Dome Camera with Night Vision</li>
            </ul>
            </div>

            {/* Contact Card */}
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

export default Fin4000ac;