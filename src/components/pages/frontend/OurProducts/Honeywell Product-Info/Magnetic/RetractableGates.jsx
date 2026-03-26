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

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-[15px] text-black space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>

             {/* Technical Specifications Table */}
              <div className="bg-gray-300 p-6 shadow rounded border border-r divine-y">
            <h2 className="font-semibold text-black text-xl mb-4">Technical Specification</h2>

            <table className="border text-[15px] w-full">
              <tbody> 
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                  </td>
                  <td colSpan="2" className="border border-r border-black p-2 text-black">
                    MPR 112 (Standard)
                  </td>
                  <td colSpan="2" className="border border-r border-black p-2 text-black">
                    MPR 112 (Wide Lane)
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Passage width
                  </td>
                  <td colSpan="2" className="border border-r border-black p-2 text-gray-700">
                    520 mm
                  </td>
                  <td colSpan="3" className="border border-r border-black p-2 text-gray-700">
                    960 - 990 mm
                  </td>
                </tr>
             
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Opening/closing time with PU foam
                  </td>
                  <td colSpan="2" className="border-black  p-2 border text-gray-700">
                    0.3 s
                  </td>
                  <td colSpan="3" className="border-black  p-2 border text-gray-700">
                    0.6 s
                  </td>
                </tr>

                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Opening/closing time with acrylic glass
                  </td>
                  <td colSpan="2" className="border-black  p-2 border text-gray-700">
                    0.35 s
                  </td>
                  <td colSpan="3" className="border-black  p-2 border text-gray-700">
                    –
                  </td>
                </tr>

                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Drive technology
                  </td>
                  <td colSpan="5" className="border-black  p-2 border text-gray-700">
                    MHTM
                  </td>
                </tr>
                
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Voltage
                  </td>
                  <td colSpan="5" className="border-black  p-2 border text-gray-700">
                    110 – 240 VAC, 50/60 Hz
                  </td>
                </tr>

                 <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Power Consumption
                  </td>
                  <td colSpan="2" className="border-black  p-2 border text-gray-700">
                     Maximum 35 W
                  </td>
                  <td colSpan="3" className="border-black  p-2 border text-gray-700">
                     Maximum 117 W
                  </td>
                </tr>

                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Duty cycle
                  </td>
                  <td colSpan="5" className="border-black  p-2 border text-gray-700">
                     100 %
                  </td>
                </tr>

                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                      Housing dimensions (L x W x H)
                  </td>
                  <td colSpan="2" className="border-black  p-2 border text-gray-700">
                     1300 x 250 x 1035 mm
                  </td>
                  <td colSpan="3" className="border-black  p-2 border text-gray-700">
                     1300 x 250 x 1035 mm
                  </td>
                </tr>

                 <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                      Enclosure rating
                  </td>
                  <td colSpan="5" className="border-black  p-2 border text-gray-700">
                    	IP32
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                     Temperature range
                  </td>
                  <td colSpan="5" className="border-black  p-2 border text-gray-700">
                    	0 to +45° C
                  </td>
                </tr>

                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                     Warranty
                  </td>
                  <td colSpan="5" className="border-black  p-2 border text-gray-700">
                      3 years*
                  </td>
                </tr>
              </tbody>
            </table>
                </div>
            

            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                MAGNETIC
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
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By MAGNETIC</h3>
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
const RetractableGates = () => {
  const data = {
    title: "MPR Retractable Gates",
    subtitle: "Designed for multiple entries and rapid separation of visitors in low-to-medium security areas.",
    description: "For access control, steering visitors, and passage into secured areas – MPR retractable gates are the ideal solution for the rapid separation of persons when low-to-medium security is required. Variants with enlarged passage widths also make the MPR suitable for wheelchairs, prams, and the transport of materials. The variety of modules allows rapid adaptation to spatial conditions, user numbers and many other requirements. Passage takes place without contact. Photoelectric switches detect users and open the wings before they come into contact with them. The barriers close automatically after passage.",
    features: [
      "Short opening times of 0.6 seconds for a high throughflow frequency",
      "Comfortable non-contact passage",
      "Space-saving installation of multiple applications",
      "Simple integration of all common access control systems",
      "Automatic opening if power fails",
      "Wide variants suitable for wheelchairs, prams, and material transport",
      "Designed for 10 million opening and closing actions"
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

export default RetractableGates;