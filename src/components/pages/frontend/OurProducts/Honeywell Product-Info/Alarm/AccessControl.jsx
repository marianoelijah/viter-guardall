import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';

const AccessControl = () => {
  const specs = [
    { label: "RF Technologies", value: "125 KHz, 13.56 MHz, NFC,Bluetooth Low Energy" },
    { label: "Reads", value: "MIFARE DESFire® EV1 & EV2, LEAF, FSK and ASK proximity" },
    { label: "Input power", value: "5-16 VDC, 144 mA max (ET10),169 mA max (ET20), 193 mA max (ET25)" },
    { label: "Output", value: "OSDP, Wiegand, accelerometer-based tamper detection" },
    { label: "Read ranges", value: "EV1: 1.2”, EV2: 2.2”, 125 kHz up to 4”" },
    { label: "Temperature", value: "-31°F – 151°F (-35°C – 66°C)" },
    { label: "Dimensions", value: "5.1 x 1.7 x 0.7” (13.0 x 4.3 x 1.8cm) (ET10), 5.1 x 3.3 x 0.7” (13.0 x 8.4 x 1.8cm) (ET20 & ET25)" },
    { label: "Baud Rate", value: "5 – 95% (non-condensing) RH" },
    { label: "Operating Humidity", value: "-7 oz (ET10), 10 oz (ET20), 11.3 oz (ET25)" },
    { label: "Weight", value: "USA" },
    { label: "Country of Origin", value: "Weight: 7 oz (ET10), 10 oz (ET20), 11.3 oz (ET25)" },
    { label: "Weight", value: "ON/OFF, 0.1-600 Sec." },
    { label: "Certifications", value: "FCC, IC, CE, UL 294,EN 302291, EN 301489, EN 300330,EN 50130-4, IP55, BIS IS 13252" },
  ];

  const productFeatures = [
    "Multiple technologies in a single reader: Proximity, MIFARE DESFire, NFC & BLE",
    "Mobile Credentials support enables phones to unlock doors, eliminating badges",
    "OSDP Auto-Detect",
    "OSDP Secure Channel and remote firmware upgradability",
    "MIFARE DESFire® EV1 & EV2 support",
    "LEAF credential support for secure, open, interoperability",
    "FSK and ASK legacy proximity credentials support for seamless transitions",
    "Accelerometer-based tamper detection Tri-state LED light bar (red, green, amber) and audible beeper",
    "Accommodates indoor, outdoor installation environments",
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          ADC-AC-ET Access Control Readers
        </h1>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-lg my-10 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Left Column: Product Info */}
          <div className="lg:col-span-3">
            <p className="text-gray-800 text-[17px] mb-6">
             A series of multi-technology, contactless access control to properly secure your properties or business.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
               Alarm.com’s Smarter Access Control is a powerful, easy-to-use solution for commercial 
               properties that seamlessly integrates with the Alarm.com for Business platform. 
               This platform enables intelligent automation and features, such as disarming when badging 
               in, locking doors when arming, and tagging access events on the video timeline. 
              </p>
              <p className="text-gray-800 text-[17px] leading-relaxed">
                These three multi-technology contactless access control readers offer a modern aesthetic
                and a state-of-the-art feature set, including Proximity (125 kHz), MIFARE DESFire (13.56
                MHz), NFC, and Bluetooth®. All readers are fully OSDPTM compliant and are enabled for OSDP Secure Channel.
              </p>

               <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1 text-black">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            </section>


            {/* Technical Specifications Table */}
            <section>
              <h2 className="font-bold text-xl text-black mb-4">Technical Specification:</h2>
              <div className="overflow-x-auto border border-black">
                <table className="w-full text-left text-xs border-collapse">
                 
                  <tbody>
                    {specs.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                        <td className="p-3 border-b border-r border-black text-black text-[17px] font-bold w-1/3">
                          {spec.label}
                        </td>
                        <td className="p-3 border-b border-black text-[17px] text-gray-800">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* <img src="" alt="" /> */}
            
             
            {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                ALARMCOM
              </span>
              
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                Access Control System
              </span>
            </div>

            {/* SHARE SECTION */}
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

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By MAG</h3>
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
              <button className="bg-blue-700 hover:bg-blue-400 text-white font-semibold px-4 py-2 rounded w-full">
                <NavLink to="/contacts" className="w-full h-full block">
                CONTACT US TODAY
                </NavLink>
              </button>
            </div>
          </div>
          </div>
        </div>
      </main>
    </div>
    <Footer />
    </>
   
  );
};

export default AccessControl;