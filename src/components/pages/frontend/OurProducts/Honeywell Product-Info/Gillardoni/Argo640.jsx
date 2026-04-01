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
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
           ARGO 640: Single View Hand Baggage X-Ray Scanner
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
              Offers high-performance security screening using advanced algorithms to generate detailed images for accurate threat detection.
            </p>

            <h2 className="font-bold text-xl mb-2  text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
                 ARGO 640 is designed to examine baggage, mails and parcels at the entrance to delimited areas, ensuring high levels of security. The system complies with the highest quality standards in the industry to guarantee fully safety in use and high reliability. Advanced algorithms generate a detailed image on the large monitor for a complete view of the scanned item and an incredible detection capability. ARGO can be implemented with additional accessories and software for a wide spectrum of use.
               </p>

            <section className="mb-8 mt-3">
               <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1 text-black">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            </section>

            {/* Technical Specifications Table */}
                       <section>
                         <h2 className="font-bold text-xl text-black mb-4">Technical Specification:</h2>
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
                                     <tr className={idx % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'}>
                                       <td className="p-3 border-b border-r border-gray-500 font-bold w-1/2 text-[15px] text-black bg-gray-50/50">
                                         {item.label}
                                       </td>
                                       <td className="p-3 border-b border-gray-500 text-gray-800 w-1/2 whitespace-pre-line text-[15px] hover:bg-slate-50/50 transition-colors">
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
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                GILARDONI
              </span>
              
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                Detection Systems
              </span>
            </div>

            {/* SHARE SECTION */}
           <SocialShare title="Check out this product!" />

        </main>

          {/* Sidebar */}
              <aside className="lg:w-1/4 space-y-6"> 
                     <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                        <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">
                          More By GILARDONI
                          </h3>
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
    </div>
    <Footer />
    </>
   
  );
};

export default   Argo640;