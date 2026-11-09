import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';



const Argo640 = () => {
  const specs = [
    { type: 'header', label: 'GENERAL' },
    { label: "Dimensions [Mm]", value: "2025 (L) x 950 (W) x 1277,5 (H) mm"},
    { label: "Weight (standard module)", value: "370 kg" },
    { label: "Tunnel size", value: "620 (W) x 420 (H) mm" },
    { label: "Conveyor belt height", value: "712,5mm, adjustable" },
    { label: "Belt speed", value: "0,2 – 0,3 m/s" },
    { label: "Maximum bag weight", value: "205 kg" },
    { label: "Power supply", value: "230 Vac ± 10% 50/60 Hz" },
    { label: "Power consumption", value: "1 kW (max)" },
    { label: "Duty cycle", value: "100%" },
    
    { type: 'header', label: 'X-RAY GENERATOR' },
    { label: "Tube voltage", value: "160 kV" },
    { label: "Tube current", value: "0,5 mA" },
    { label: "Beam orientation", value: "Diagonal upwards" },
    { label: "Cooling", value: "Oil bath and air" },

    { type: 'header', label: 'ENVIRONMENT AND SAFETY' },
    { label: "Storage temperature", value: "-20° ÷ 60 °C" },
    { label: "Operational temperature", value: "0° ÷ 40 °C" },
    { label: "Humidity", value: "95% without condensation" },
    { label: "Leakage dose at 5 cm", value: " < 1 μSv/h (0,1 mR/h)" },

    { type: 'header', label: 'PERFORMANCE AND IMAGING' },
    { label: "Resolution", value: "42 AWG" },
    { label: "Penetration", value: "40 mm steel" },
    { label: "Monitor", value: "LED 27” 1920 x 1080 pixel" },
  ];

  const productFeatures = [
    "Lowest weight in the market",
    "Design for prompt maintenance",
    "BEST image function",
    "Higher steel penetration",
    "Multiplexing ready",
    "Tray Return System compatible",
    "Variable conveyor speed"
  ];

  return (
    <>
    <Header />
     <div className="bg-gray-100 dark:bg-[#121214] min-h-screen font-sans text-slate-800 dark:text-gray-200 transition-colors duration-300">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-4 text-center transition-colors duration-300 ">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight uppercase">
           ARGO 640: Single View Hand Baggage X-Ray Scanner
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 rounded-lg shadow-sm dark:bg-[#1e1e22] border border-gray-400 dark:border-gray-800 transition-colors duration-300">
            <p className="text-[15px] text-gray-800 dark:text-gray-300 mb-4 border-l-4 border-[#8ba4cc] dark:border-blue-500 pl-4 font-medium">
              Offers high-performance security screening using advanced algorithms to generate detailed images for accurate threat detection.
            </p>

            <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
              Product Description:
              </h2>
              <p className="text-[15px] text-gray-800 dark:text-gray-300 mb-4 border-l-4 border-[#8ba4cc] dark:border-blue-500 pl-4 font-medium">
                 ARGO 640 is designed to examine baggage, mails and parcels at the entrance to delimited areas, ensuring high levels of security. 
                 The system complies with the highest quality standards in the industry to guarantee fully safety in use and high reliability. 
                 Advanced algorithms generate a detailed image on the large monitor for a complete view of the scanned item and an incredible 
                 detection capability. ARGO can be implemented with additional accessories and software for a wide spectrum of use.
               </p>

            <section className="mb-8 mt-3">
               <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
                Product Features:
                </h2>
            <ul className="list-disc ml-5 text-[15px] text-gray-800 dark:text-gray-300 space-y-1 transition-colors">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            </section>

            {/* Technical Specifications Table */}
                       <section>
                         <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
                          Technical Specification:
                          </h2>
                         <div className="border border-gray-500 overflow-hidden">
                           <table className="w-full text-left text-xs border-collapse">
                             <tbody>
                               {specs.map((item, idx) => (
                                 <React.Fragment key={idx}>
                                   {item.type === 'header' ? (
                                     <tr className="bg-gray-300">
                                       <th colSpan="2" className="p-2 border-b border-gray-500 text-[15px] text-black font-bold uppercase tracking-wider">
                                         {item.label}
                                       </th>
                                     </tr>
                                   ) : (
                                     <tr className={idx % 2 === 0 ? 'bg-gray-300' : 'bg-gray-900'}>
                                       <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 bg-gray-200 dark:bg-gray-800/80 text-[15px] text-black dark:text-gray-200">
                                         {item.label}
                                       </td>
                                       <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 bg-gray-200 dark:bg-gray-800/80 text-[15px] text-black dark:text-gray-200">
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
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                GILARDONI
              </span>
              
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                Detection Systems
              </span>
            </div>

            {/* SHARE SECTION */}
           <SocialShare title="Check out this product!" />

        </main>

          {/* Sidebar */}
              <aside className="lg:w-1/4 space-y-6"> 
                     <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded-xl shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
                        <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">
                          More By GILARDONI
                          </h3>
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

export default   Argo640;