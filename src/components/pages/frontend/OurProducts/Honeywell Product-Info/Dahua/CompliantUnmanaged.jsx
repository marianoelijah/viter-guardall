import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';

// Shared Layout Component to maintain design consistency across all products
const ProductLayout = ({ title, subtitle, description, features, specs, sidebarItems }) => {
  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-slate-800">
      {/* Banner Header */}
      <header className="bg-[#7f95b8] text-white py-14 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          {title}
        </h1>
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-xl my-10 p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Product Info */}
          <div className="lg:col-span-3">
            <p className="text-[17px]  text-black mb-6">{subtitle}</p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
              <p className="text-[17px] text-black leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] text-black space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>

             {/* Technical Specifications Table */}
              <div className="bg-gray-300 p-6 shadow rounded border border-r divine-y">
            <h2 className="font-bold text-black text-xl mb-4">Technical Specification</h2>

            <table className="w-full border text-[15px] text-black">
              <tbody>

                {/* <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold">
                    DIMENSIONS
                  </td>
                </tr> */}

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                      Model
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     DH-PFS3010-8GT-96
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Description
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                      8-port PoE 2.0 Gigabit Switch
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Port Configuration
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     GbE PoE Ports + 2 GbE Combo (RJ45) Uplinks
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     SFP Optical Ports
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                      -
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    PoE Standard
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    PoE (802.3af),PoE+ (802.3at), Hi-PoE,PoE++ (802.3bt)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    PoE Budget
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     96 W
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    PoE Watchdog 
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                      Supported
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Long Distance PoE Transmission
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Yes (820 ft)
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Intelligent PoE Management
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Supported
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                   Switching Capacity
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    20 Gbps
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                      Packet Forwarding Rate
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                      14.88 Mpps
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                   Packet Buffer Memory
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    1.5 Mb
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Mac Table Size
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     4K
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 text-black font-bold w-1/2">
                     VLAN
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    -
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Link Aggregation
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    -
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 text-black font-bold w-1/2">
                     Spanning Tree
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    -
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Management
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    -
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Lightning Protection
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Common Mode 6 kVDifferential Mode 4 kV
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Working Temperature
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    14° F to 131° F(-10° C to 55° C)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Dimensions
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    190 mm × 100 mm × 30 mm(7.5 in. × 3.9 in. × 1.2 in.)
                  </td>
                </tr>
               
              </tbody>
            </table>
                </div>
            

            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
                DAHUA
              </span>
              
              <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
                CCTVs
              </span>
            </div>

               {/* SHARE SECTION */}
            <div className="mt-8">
              <p className="font-medium text-black mb-3">Share:</p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/facebook.png" alt="Facebook" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/gmail.png" alt="Gmail" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/telegram.png" alt="Telegram" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/viber.png" alt="Viber" className="w-full h-full object-contain p-1" />
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 p-4 border border-black  border-r mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By DAHUA</h3>
            <ul className="text-xs space-y-4 text-gray-500 transition-colors">
              <li className='cursor-pointer hover:text-[#f08c09]'>Onity DirectKey with Serene</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>INR 415 256-Channel 12 Bay RAID Rackmount Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>GNR 340 100-Channel Tower Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>ENR 130 16-Channel Desktop Standalone NVR - No HDD Included</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>Z86 Outdoor Network Dome Camera with Night Vision</li>
            </ul>
          </div>

            {/* Blue CTA Card */}
             <div
              className="bg-blue-600 text-white p-6 rounded shadow-md overflow-hidden relative min-h-[200px]"
              style={{
                backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(30, 64, 175, 0.8)), url('/src/assets/image/Our Products/quickalert.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="relative z-10 max-w-3xl">
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
          </aside>
        </div>
      </main>
    </div>
    <Footer />
    </>
    
  );
};

// Example Usage for the Hirsch M64 Controller
const CompliantUnmanaged = () => {
  const data = {
    title: "DH-PFS3010-8GT-96 8-Port Gigabit PoE-Compliant Unmanaged Network Switch",
    subtitle: "A budget-friendly network switch that has a plug-and-play feature for easier use. ",
    description: "Quickly expand your business’s network capacity to support powered devices, such as IP security cameras and access points, with the 8-Port Gigabit PoE-Compliant Unmanaged Network Switch from Dahua Technology. This budget-friendly network switch features eight PoE-complaint Gigabit Ethernet ports, one of which can supply up to 90W of power to advanced devices while the rest support 30W. Additionally, this plug-and-play desktop switch integrates into your network through its two RJ45/SFP Gigabit combo uplink ports without requiring complex configuration. Its 20 Gb/s switching capacity, a 14.88 forwarding rate, and 1.5 Mb packet buffer help to provide smooth and reliable data transfers and high-definition video.",
    features: [
      "8 x Gigabit Ethernet Ports",
      "7 x PoE+ Compliant Ports (30W)",
      "1 x PoE++ Compliant Port (90W)",
      "2 x Gigabit RJ45 / SFP Combo Uplinks",

      "20 Gb/s Switching Capacity",
      "14.88 Forwarding Rate",
      "Desktop Design",
      "Plug-and-Play"
    ],

  };

  return <ProductLayout {...data} />;
};

export default CompliantUnmanaged;