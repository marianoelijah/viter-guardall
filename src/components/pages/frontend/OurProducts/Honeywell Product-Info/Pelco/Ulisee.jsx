import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';



const Ulisee = () => {
  const specs = [
    { label: "Resolution (MP)", value: "2 MP"},
    { label: "Image Sensor", value: "1/2.8″ progressive scan CMOS"},
    { label: "Optical Zoom", value: "Up to 40x"},
    { label: "Max. Dynamic Range (dB)", value: "120 dB" },
    { label: "Image Rate", value: "Up to 60 fps" },
    { label: "Environmental", value: "IEC 60529 IP66, IP67 ratingIEC/EN 62262 Impact IK10 (Enclosure), IK09 (Bubble)IEC/EN 60068-2-6 Product VibrationIEC/EN 60068-2-27 Product ShockType 4X" },

    { type: 'header', label: 'AUDIO, POWER, STORAGE' },
    { label: "Image Compression Method", value: "H.264 and H.265 Pelco Smart Compression, Motion JPEG" },
    { label: "Audio Input/Output", value: "None" },
    { label: "External I/O Terminals", value: "4 Alarm In, 2 Alarm Out" },
    { label: "Onboard Storage", value: "MicroSD/microSDHC/microSDXC slot – video speed class card required. Class V10 or better recommended." },
    { type: 'header', label: 'Learn more at www.pelcom.com' },
  ];

  const productFeatures = [
    "Heavy-duty housing",
    "Long-range IR illumination",
    "Deterring white light",
    "Flexible mounting options",
    "Rated from ‑40° to 65°C (-40° to 149°F)",
    "Wiper and sun shield for added protection"
  ];

  return (
    <>
    <Header />
     <div className="bg-gray-200 dark:bg-[#121214] min-h-screen font-sans text-[#333] dark:text-gray-200 transition-colors duration-300">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-centerbg-[#7f95b8] dark:bg-blue-950/70 text-center transition-colors duration-300">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          Ulisee Enhanced PTZ 2 Series
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 lg:col-span-8 bg-gray-100 dark:bg-[#1e1e22] p-6 md:p-8 rounded-xl border border-transparent dark:border-gray-800 shadow-md transition-colors duration-300">
            <p className="text-5xl md:text-[17px]  max-w-4xl mx-auto leading-tight mb-5">
              A high-security camera built for outdoor environments while still providing high-resolution video. 
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Description:</h2>
              <p className="text-5xl md:text-[17px]  max-w-4xl mx-auto leading-tight mb-5">
               The Ulisse Enhanced PTZ 2 is a PTZ camera for mission-critical applications. 
               This security camera is built to withstand outdoor environments while maintaining 
               continuous clear, high-resolution live and recorded video, with up to 2 MP and 40x zoom. 
               Its flexible illumination options provide outstanding image clarity in any lighting 
               condition, delivering exceptional forensic detail and powerful deterrent capabilities. 
               Ulisse Enhanced PTZ 2 is built with Smart Analytics equipped with ONVIF Profile S, G, T 
               and M, and is NDAA- compliant, allowing for open connectivity with leading video 
               management systems. Built for industrial applications, the Ulisse Enhanced PTZ 2 is the 
               perfect solution for monitoring cities, ports, manufacturing plants and enterprise 
               facilities.
              </p>

               <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] text-gray-800 dark:text-gray-300 space-y-1 transition-colors">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            </section>

            {/* Technical Specifications Table */}
                       <section>
                         <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Technical Specification:</h2>
                         <div className="border border-gray-500 overflow-hidden">
                           <table className="w-full text-left text-xs border-collapse">
                             <tbody>
                               {specs.map((item, idx) => (
                                 <React.Fragment key={idx}>
                                   {item.type === 'header' ? (
                                     <tr className="bg-gray-200">
                                       <th colSpan="2" className="p-2 border-b border-gray-500 text-[15px] text-black font-bold uppercase tracking-wider">
                                         {item.label}
                                       </th>
                                     </tr>
                                   ) : (
                                     <tr className={idx % 2 === 0 ? 'bg-gray-600' : 'bg-gray-80s0'}>
                                       <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                                         {item.label}
                                       </td>
                                       <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                                         {item.value}
                                       </td>
                                     </tr>
                                   )}
                                 </React.Fragment>
                               ))}
                             </tbody>
                           </table>
                         </div>
                       </section>
                       
            {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
                PELCO
              </span>
              
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
                CCTVs
              </span>
            </div>

            {/* SHARE SECTION */}
             <SocialShare title="Check out this product!" />

        </main>

          {/* Sidebar */}
              <aside className="lg:w-1/4 space-y-6"> 
                     <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded-xl shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
                        <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By PELCO</h3>
                        <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                          <NavLink to="/our-products/onity/directkey-with-serene" className='block'>
                            <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>Onity DirectKey with Serene</li>
                          </NavLink>
                          <NavLink to="/our-products/detnov/addressable-sounder" className='block'>
                            <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>MAD-401 and MAD-402 Series Modules</li>
                          </NavLink>
                          <NavLink to="/our-products/acti/bay-raid-backmount-standalone" className='block'>
                            <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>INR 415 256-Channel RAID Standalone</li>
                          </NavLink>
                          <NavLink to="/our-products/acti/channel-tower-strandalone" className='block'>
                            <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>GNR 340 100-Channel Tower NVR</li>
                          </NavLink>
                          <NavLink to="/our-products/acti/bay-raid-backmount-standalone" className='block'>
                            <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>INR 415 256-Channel RAID Standalone</li>
                          </NavLink>
                          <NavLink to="/our-products/acti/channel-tower-strandalone" className='block'>
                            <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>GNR 340 100-Channel Tower NVR</li>
                          </NavLink>
                       </ul>
                      </div>
                      
            
            
                      {/* Contact Card */}
                       <div 
              className="relative min-h-[240px] overflow-hidden rounded-2xl p-8 text-white shadow-md bg-cover bg-center bg-blend-multiply bg-blue-900/85"
              style={{ backgroundImage: "url('/assets/image/Our%20Products/quickalert.jpg')" }}
            >
              <div className="relative z-10 max-w-3xl">
                <h3 className="mb-4 text-2xl font-bold leading-tight tracking-wide">
                  Secure Your Peace Of Mind Today
                </h3>
                
                <p className="mb-6 text-sm md:text-base text-gray-200 font-medium leading-relaxed">
                  Contact Guard-All now for a customized security solution that protects what matters most.
                </p>

                <NavLink 
                  to="/contacts" 
                  className="inline-block w-full rounded-xl bg-[#0f3e90] px-6 py-3 text-center text-sm font-semibold tracking-wider text-white transition-colors hover:bg-[#ff5f31] sm:w-auto"
                >
                  CONTACT US TODAY
                </NavLink>
              </div>
            </div>
            
                </aside>

         

        </div>
    </div>
    <Footer />
    </>
   
  );
};

export default   Ulisee;