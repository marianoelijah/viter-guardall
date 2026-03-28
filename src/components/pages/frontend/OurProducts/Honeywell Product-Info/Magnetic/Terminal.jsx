import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const Terminal = () => {
  const specs = [
    { label: "", value: "Terminal-MS", valu: "Terminal-MH", vale: "Terminal-ML" },
    { label: "Application", value: "Cars", valu: "Cars", vale: "Cars and Trucks" },
    { label: "Housing Dimension (W x H x D)", value: "296 x 1202 x 266 mm", valu: "296 x 1202 x 266 mm", vale: "296 x 1202 x 266 mm	" },
    { label: "Installation Space (W x H)", value: "209 x 337mm", valu: "209 x 337mm", vale: "209 x 337mm" },

    { label: "Weight", value: "15 kg", valu: "15 kg", vale: "15 kg13.56 MHz" },
    { label: "Front Cover Design", value: "Slide out on telescopic rails", valu: "Slide out on telescopic rails", vale: "Slide out on telescopic rails" },
    { label: "Housing Design", value: "Powder-coated aluminum", valu: "Powder-coated aluminum", vale: "Powder-coated aluminum" },
    { label: "Base Design", value: "Stainless Steel", valu: "Stainless Steel", vale: "Stainless Steel" },
    { label: "Enclosure Rating", value: "IP 54", valu: "IP 54", vale: "IP 54" },
    
  ];

  const productFeatures = [
    "Large barrier width of up to 10.0 m",
    "High security with optional barrier boom skirt",
    "Ease-of-use and optimum accessibility thanks to well thought-out design",
    "Legal security with Declarations of Conformity and Performance",
    "Designed for 2 million opening and closing actions",

  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
           Terminal-MS, -MH -ML
        </h1>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-lg my-10 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Left Column: Product Info */}
          <div className="lg:col-span-3">
            <p className="text-gray-800 text-[17px] mb-6">
               Secure your properties or business through smart cards and keyfobs designed to work with Alarm.com readers.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
              MS, MH and ML Terminals are the optimum functional and de- sign supplements for all Magnetic barriers. They offer a universal platform for customer-specific equipment – for intercom systems and video monitoring or for complex access and exit control systems. The Terminals are made of aluminum and stainless steel, and are thus designed for long service lives. The front con- sists of a front cover that can be slid out on telescope rails and a slot-in door which can only be opened with a single key.
              </p>

               <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[15px] space-y-1 text-black">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            </section>

            {/* Technical Specifications Table */}
            <section>
              <h2 className="font-bold text-xl text-black mb-4">Technical Specification:</h2>
              <div className="overflow-x-auto border border-gray-500">
                <table className="w-full text-left text-xs border-collapse border border-black">
                 
                  <tbody>
                    {specs.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                        <td className="p-3 border-b border-r border-black text-black text-[17px] font-bold w-1/3">
                          {spec.label}
                        </td>
                        <td className="p-3 border-b border-r border-black text-[17px] text-black">
                          {spec.value}
                        </td>
                        <td className="p-3 border-b border-r border-black text-[17px] text-black">
                          {spec.valu}
                        </td>
                        <td className="p-3 border-b border-r border-black text-[17px] text-black">
                          {spec.vale}
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
               MAGNETIC
              </span>
            </div>

            {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
            <h3 className="text-lg font-semibold text-black mb-4 border-b pb-1">More By MAGNETIC</h3>
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
          </div>
        </div>
      </main>
    </div>
    <Footer />
    </>
   
  );
};

export default Terminal;