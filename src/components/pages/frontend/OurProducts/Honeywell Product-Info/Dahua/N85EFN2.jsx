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
                      N85EFN2
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Innovative Features
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                      ProSeries, WizMind
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Image Sensor
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     1/1.2 -in. 4K (8MP) CMOS
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
                    Color: 0.0005 lux at F1.0
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Maximum IR Distance
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Enhanced Night Color131 ft (40 m)White-light LEDs
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Video Compression (Main Stream)
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                      AI Coding, Smart H.265+, H.265, SmartH.264+, H.264, H.264B, H.264H (MJPEGsubstream)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Maximum Resolution
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     8MP (3840 x 2160)
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Intelligent Video
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Perimeter Protection,People Counting, Face Detection,Smart Motion Detection+
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                   Audio In/Out
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    1/1, Built-in Microphone;Speaker: Bullet only
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
                    1/1
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                      Environmental Protection
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     IP67
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
                   12 VDC ±30%, PoE (802.3af, Class 0),or ePoEPoE Max: 9.4 W: Bullet; 10.5 W: Eyeball
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
const N85EFN2 = () => {
  const data = {
    title: "N85EFN2 8MP Outdoor ePoE Night Color 2.0 Network Bullet Camera",
    subtitle: "Built for both indoor and outdoor use, this highly reliable camera can capture 4K UHD videos. ",
    description: "Monitor an indoor or outdoor area with the N85EFN2 8MP ePoE Night Color 2.0 Network Bullet Camera from Dahua Technology. This unit uses a 1/1.2″ progressive scan CMOS sensor to capture 4K UHD resolution video at 30 fps. Four white-light LEDs provide up to 131′ of illumination to record full color video in low-light conditions. The camera’s 2.8mm fixed lens delivers a 112° horizontal field of view. Two-way audio is possible thanks to a built-in speaker and microphone, along with an RCA audio input and output. A memory card slot supports microSD cards up to 256GB (available separately). Integrated ePoE technology offers a cost-effective solution for transmitting power and data over long distances via Ethernet or coaxial cables when compared to running separate wires.",
    features: [
      "3840 x 2160 Resolution at 15 fps",
      "4 White LEDs for Illumination up to 131′",
      "2.8mm Fixed Lens",
      "112° Horizontal Field of View",

      "Two-Way Audio",
      "Supports microSD Cards up to 256GB",
      "RJ45 with Enhanced Power over Ethernet",
      "Complies with ONVIF Profiles G, S & T",
      "IP67 Rated for Outdoor Use"
    ],

  };

  return <ProductLayout {...data} />;
};

export default N85EFN2;