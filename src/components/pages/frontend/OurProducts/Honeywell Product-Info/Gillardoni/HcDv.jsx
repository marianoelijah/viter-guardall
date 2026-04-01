import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';


const HcDv = () => {
  const specs = [
    { type: 'header', label: 'PHYSICAL PROPERTIES' },
    { label: "Dimensions [Mm]", value: "338 (L) x 171,5 (W) x 197,5 (H)"},
    { label: "Weight [Kg]", value: "1510" },
    { label: "Number Of Views", value: "2" },
    { label: "Number Of X-Ray Generators", value: "2" },
    { label: "Number Of Arrays", value: "2" },
    { label: "Tunnel Dimensions [Mm]", value: "1006 (W) x 1010 (H)" },
    { label: "Max Load On Conveyor [Kg]", value: "200" },
    
    // { type: 'header', label: 'IMAGING' },
    { label: "Belt Height [Mm]", value: "790" },
    { label: "Belt Speed [M/S]", value: "0,2 " },
    { label: "Monitor [Nr]", value: "2" },
    { label: "Power Supply", value: "230Vac - 50Hz" },
    { label: "Consumption [Kw]", value: "1,5" },

    // { type: 'header', label: 'EXPOSURE CONTROL' },
    { label: "Operating Temperature", value: "0 ÷ 40 °C" },

    // { type: 'header', label: 'LENS' },
    { label: "Storage Temperature", value: "-20 ÷ 60 °C" },
    { label: "Operating Humidity", value: "0 ÷ 95 %" },
    
    { type: 'header', label: 'IMAGING PROPERTIES' },
    { label: "Tube Voltage", value: "160 kV " },
    { label: "Tube Current", value: "1,8 A" },
    { label: "Cooling", value: "Oil bath" },

    { label: "Resolution", value: "41 AWG" },
    { label: "Penetration", value: "37 mm" },
    { label: "High Density Alarm", value: "Yes" },

  ];

  const productFeatures = [
    "Automatic archiving of work sessions in raw format, to be able to review and rework them a second time.",
    "Image archive chosen by the operator on HDD (up to 100.000 images) in PNG format.",
    "Saving images and sessions to external USB storage media.",
    "Self-diagnosis system showing the screen fault.",
    "Rays emit light signals in progress placed at the ends of the tunnel.",
    "Man-machine interface with time, date, 2 luggage counters (1 resettable, 1 total), duration time of the work session and operator ID.",
    "Manuals in pdf format that can be viewed in the software of the machine and outside.",
    "Import / export data with USB key.",
    "Setting system uses parameters, even in remote mode.",
    "Export / import user database and export machine operation report.",
    "Possibility to change the sliding direction of the images",
    "Ready to use 16:9 monitors.",
    "Ready for connection to a printer.",
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          Fep 1000 HC DV
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
             This high-performance x-ray is designed for hold baggage screening, giving dual-view images for enhanced threat detection.         
            </p>

            <h2 className="font-bold text-xl mb-2  text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
                 New hold luggage inspection system for large baggage and medium to large parcels. New software interface, excellent performance and superior image quality. The ideal solution for aviation. Works in stand-alone or in BHS mode.
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

export default   HcDv;