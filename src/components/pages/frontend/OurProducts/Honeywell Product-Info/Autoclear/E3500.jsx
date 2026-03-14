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
              <p className="text-[17px] text-gray-680 leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] text-gray-680 space-y-1">
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
                    PHYSICAL DETAILS
                  </td>
                </tr> */}
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Detector
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Chemiluminescence 
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Analysis Time 
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    16 seconds 
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Explosives Detected
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    PETN, RDX, TNT, dynamite, Semtex, C-4, black powder, ammonium and urea nitrates, NG, ICAO taggants, EGDN and DMNB, TATP, peroxides, chlorates
                  </td>
                </tr>
                
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Sensitivity
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   Nanogram 
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Sample Collection
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Particulates and vapors 
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Warm-up Time
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    None, after one minute start
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Alarms
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    LED indicator lights and audible alarm 
                  </td>
                </tr>

                {/* <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold">
                    X-RAY GENERATOR
                  </td>
                </tr> */}

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Power Supply
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    12 V DC rechargeable four hour battery pack
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Input Voltage
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    90-264 VAC, 50-60 Hz universal switching 
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Unit Weight
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    3.0 kg (6.6 lbs.) with battery 
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Unit Dimensions
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     50.0 x 14.0 x 11.0 cm (L x W x H)       20.0 x 5.5 x 4.3 in. 
                  </td>
                </tr>
                
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Operating Temp
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   0o to 55oC (32o to 131oF)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Storage Temp
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   	-5o to 65oC (23o to 149oF) 
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Communication
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                  RS-232 serial output port
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Data Storage
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                  1,000 retrievable data records 
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Options
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                  12 V AC battery, external battery, printer
                  </td>
                </tr>
              </tbody>
            </table>
                </div>
            

            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
                AUTOCLEAR
              </span>
              
              <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
                Detection Systems
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
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By AUTOCLEAR</h3>
            <ul className="text-lg space-y-4 text-gray-500 transition-colors">
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
          </aside>
        </div>
      </main>
    </div>
    <Footer />
    </>
    
  );
};

// Example Usage for the Hirsch M64 Controller
const E3500 = () => {
  const data = {
    title: "E3500 Trace Detector",
    subtitle: "This device uses chemiluminescent to detect homemade, military, and commercial explosives.",
    description: "The E3500 explosives trace detector uses chemiluminescence to detect homemade, military and commercial explosives, including ICAO taggants, plastics, ammonium nitrate, black powder, other nitrates and TATP. Built to withstand rough handling and tough environments, the E3500 packs potent detection capability into a lightweight, durable thermoplastic housing. The handheld E3500 analyzes both particulate and vapor samples in seconds, without the need for radioactive isotopes or carrier gasses.",
    features: [
      "Resists contamination from weather, terrain, humidity, dirt and dust",
      "Identifies both particulates and vapors in seconds",
      "No radioactive isotopes or carrier gasses needed"
    ],

    sidebarItems: [
      "Onity DirectKey with Serene",
      "MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs",
      "INR 415 256-Channel 12 Bay RAID Backmount Standalone",
      "GNR 340 100-Channel Tower Standalone",
      "ENR 130 16-Channel Desktop Standalone NVR- No HDD Included",
      "Z86 Outdoor Network Dome Camera with Night Vision"
    ]
  };

  return <ProductLayout {...data} />;
};

export default E3500;