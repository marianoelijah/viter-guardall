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
            <p className="text-[15px]  text-black mb-6">{subtitle}</p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
              <p className="text-[15px] text-black leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </section>

             {/* Technical Specifications Table */}
              <div className="bg-gray-300 p-6 shadow rounded border border-r divine-y">
            <h2 className="font-semibold text-black text-xl mb-4">Technical Specification</h2>

            <table className="border text-[15px] w-full">
              <tbody>
                <tr className="bg-gray-300 font-bold w-1/2">
                  <td colSpan="1" className="border-r border-black border p-2 text-black">
                    Crash Rating
                  </td>
                  <td colSpan="5" className="border border-r border-black p-2">
                    K12/L3
                  </td>
                </tr> 
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                     Foundation Depth
                  </td>
                  <td colSpan="5" className="border border-r border-black p-2 ">
                     11”
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Normal Operating Speed
                  </td>
                  <td colSpan="5" className="border border-r border-black p-2 ">
                    3-5 Seconds
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Emergency Operating Speed
                  </td>
                  <td colSpan="5" className="border border-r border-black p-2 ">
                    0.5 Seconds
                  </td>
                </tr> 
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Height
                  </td>
                  <td colSpan="5" className="border border-r border-black p-2 ">
                    36”
                  </td>
                </tr> 
               
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Widths
                  </td>
                  <td colSpan="5" className="border-black  p-2 border ">
                    Modular 9’ – 36’
                  </td>
                </tr>

                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Configurations
                  </td>
                  <td colSpan="5" className="border-black  p-2 border">
                    Hydraulic
                  </td>
                </tr>

                
                
              </tbody>
            </table>
                </div>
            

            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                DELTA
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
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By DELTA</h3>
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
const DSC2000 = () => {
  const data = {
    title: "DSC 2000 Modular Wedge Barricade",
    subtitle: "Designed for remote locations, this barricade can be easily transported while still protecting areas.",
    description: 
    "Because each module weighs only 1100 pounds (500 kg) and is easy to install, the DSC2000 barricade is perfect for remote locations and developing country installations. It fits in a small shipping package or air cargo container for convenient air transport. Modules can even be carried in the back of a pick-up truck. With its extremely shallow foundation and aesthetic design, the DSC2000 is a major breakthrough in high duty, anti-terrorist barricades. It obviates the concerns of interference with buried pipes, power lines and fiber optic communication lines. The DSC2000 is perfect for high water table locations and areas with corrosive soils. The ten-inch shallow foundation also reduces installation complexity, time, materials and corresponding costs. Delta’s fastest, smallest and shallowest foundation barricade was created especially for high speed applications and ease of installation. It is K12 crash certified with no penetration, meaning it will stop a 15,000 pound (66.7kN) vehicle traveling 50 mph (80 kph) dead in its tracks.",
    
    // features: [
    //   "Very low operating costs thanks to efficient and long-lived MHTM drive",
    //   "High level of functionality for numerous applications",
    //   "Ease-of-use and optimum accessibility thanks to well thought-out design",
    //   "Legal security with Declarations of Conformity and Performance",
    //   "Acclaimed design: German Design Award 2014 and Red Dot Design Award 2012",
    //   "Designed for 10 million opening and closing actions"
    // ],

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

export default DSC2000;