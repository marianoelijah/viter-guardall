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
                     K4/L3
                  </td>
                </tr> 
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                     Foundation Depth
                  </td>
                  <td colSpan="5" className="border border-r border-black p-2 ">
                     48"
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
                    2.0 Seconds
                  </td>
                </tr> 
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Height
                  </td>
                  <td colSpan="5" className="border border-r border-black p-2 ">
                    30”
                  </td>
                </tr> 
               
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Widths
                  </td>
                  <td colSpan="5" className="border-black  p-2 border ">
                    Unlimited
                  </td>
                </tr>

                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Configurations
                  </td>
                  <td colSpan="5" className="border-black  p-2 border">
                     Hydraulic, Pneumatic, Manual, Fixed
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
             <SocialShare title="Check out this product!" />

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
const DSC800 = () => {
  const data = {
    title: "DSC 800 High Security Bollard",
    subtitle: "Suitable for high-security areas, this bollard can help control vehicles while also having a design to fit its environment. ",
    description: 
    "The DSC800 crash rated bollards can be a hydraulic, pneumatic, manual operation or fixed post bollard. Its height is 30 inches and its diameter is 6.63 inches. Applications include lower threat or low speed areas for Federal applications, residential, universities, walkways, cargo depots and rental car agencies. Retractable bollard speed of operation can be adjusted from 3 to 10 seconds. These high security bollards can look utilitarian or elegant, as the application requires. They can be used with or without a decorative aluminum casting. The castings can be powder-coated and available in a variety of styles. The architect can design a location specific version to match the architecture of the facility including emblems or logos. Decorative bollards protect pedestrian walkways from errant vehicles while enhancing the aesthetics of the area.",

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

export default DSC800;