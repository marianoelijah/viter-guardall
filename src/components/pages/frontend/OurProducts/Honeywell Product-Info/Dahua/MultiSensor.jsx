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
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                      Model
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    DH-IPC-PFW83242-A180-S2
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Innovative Features
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     UltraSeries, WizMind
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Image Sensor
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                      Four (4) 1/1.8-in. 8MP CMOS Sensors(4 sensors total)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Lens
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     2.8 mm
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Minimum Illumination
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Enhanced StarlightColor: 0.005 lux at F1.60 lux to F1.6 (IR on)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Maximum IR Distance
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     98 ft (30 m)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Video Compression (Main Stream)
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Smart H.265+, H.265, Smart H.264+,H.264, H.264H, H.264B, (MJPEGsubstream)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Maximum Resolution
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     8MP per Sensor (4 sensors total)
                  </td>
                </tr>

                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Pan/Tilt/Zoom
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Pan: 0 ̊ to 355 ̊Tilt: 0 ̊ to 90 ̊Rotation: 0 ̊ to 360 ̊
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Preset Speed
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    -
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Intelligent Video
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Premium IVS, Analytics+ Functions —Crowd Density and Vehicle Density
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Audio In/Out
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                      1/1
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Memory Slot
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     	Micro SD,Max 256GB
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Alarm In/Out
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                      2/2
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Environmental Protection
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     IP67, IK10
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Working Temperature
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     -40° F to 140° F(-40° C to 60° C)
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Power
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    12 VDC, 24 VAC or PoE+ (802.3at, Class 4), Max 10.6 W (12 VDC); 11.9 W (24VAC);11.9 W (PoE)
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
const MultiSensor = () => {
  const data = {
    title: "DH-IPC-PFW83242-A180-S2 4 x 8MP Multi-Sensor Panoramic Bullet WizMind Network Camera",
    subtitle: "A panoramic surveillance camera that accurately detects human and vehicles and can provide perimeter protection.",
    description: "The splicing camera supports a 180° panoramic view and 4-channel hardware splicing to realize HD panoramic surveillance. The camera supports crowd situation analysis, vehicle situation analysis, and perimeter protection. It is widely applied in various scenes such as squares, airports and traffic.",
    features: [
      "4 × 8MP, 1/1.8″ CMOS image sensor, low illuminance, high image definition",
      "Outputs max. 32MP (8192 × 3840) @25/30 fps; with intelligent functions enabled, it can output 32MP (8192 × 3840) @20 fps",
      "Built-in IR LED, and the max. illumination distance is 30 m.",
      "Intelligent functions: Crowd Distribution Map, Vehicle Density, Perimeter Protection, EPTZ.",
      "Support image correction.",
      "Alarm: 2 in, 2 out; audio: 1 in, 1 out; supports max. 256 G Micro SD card; built-in dual-array Mic and speaker.",
      "12 VDC/24 VAC/PoE power supply; easy for installation",
      "IP67 and IK10 protection.",
      "AR panorama technology; various AR tags can be overlaid."
    ],

  };

  return <ProductLayout {...data} />;
};

export default MultiSensor;