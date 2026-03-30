import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';

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

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                      Model
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     DH-S4220-16GT-240
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Description
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                      16-port PoE 2.0 ManagedGigabit Switch
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Port Configuration
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     16 GbE PoE+2 GbE
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     SFP Optical Ports
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                      2 GbE SFP
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
                     240 W
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
                    56 Gbps
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                      Packet Forwarding Rate
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                      29.76 Mpps
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                   Packet Buffer Memory
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    4.1 Mb
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Mac Table Size
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     8K
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 text-black font-bold w-1/2">
                     VLAN
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Supported
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Link Aggregation
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Supported
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 text-black font-bold w-1/2">
                     Spanning Tree
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Supported
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Management
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   Web and SNMP
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Lightning Protection
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Common Mode 4 kVDifferential Mode 2 kV
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
                    440 mm × 300 mm × 44 mm(17.32 in. × 11.81 in. × 1.73 in.)
                  </td>
                </tr>
               
              </tbody>
            </table>
                </div>
            

            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                DAHUA
              </span>
              
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                CCTVs
              </span>
            </div>

               {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

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
const IndustrialSwitch = () => {
  const data = {
    title: "DH-IS4210-8GT-120 8-Port Gigabit PoE++ Compliant Managed industrial Switch",
    subtitle: "This industrial network switch is designed to withstand harsh environments to constantly power security cameras.",
    description: "Capable of operating in -40 to 167°F temperatures, the DH-IS4210-8GT-120 8-Port Gigabit PoE++ Compliant Managed Industrial Switch from Dahua Technologycan power advanced security cameras, access points, and other PoE devices in harsh environments. Two of the eight Gigabit-speed PoE compliant ports can provide up to 90W with a total budget of 120W.",
    features: [
      "2 x Gigabit Ethernet PoE++ Ports (90W)",
      "6 x Gigabit Ethernet PoE Ports",
      "2 x Gigabit SFP Ports",
      "120W Power Budget",

      "Operates in Extreme Temperatures",
      "Metal Enclosure",
      "Dual Power Input",
      "Layer 2 Features"
    ],

  };

  return <ProductLayout {...data} />;
};

export default IndustrialSwitch;