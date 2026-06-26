import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';
import React from 'react';


const CargoDv = () => {
  const specs = [
    { type: 'header', label: 'PHYSICAL PROPERTIES' },
    { label: "Dimensions [Mm]", value: "840 (L) x 308 (W) x 315 (H)"},
    { label: "Weight [Kg]", value: "5500" },
    { label: "Number Of Views", value: "2" },
    { label: "Number Of X-Ray Generators", value: "2" },
    { label: "Number Of Arrays", value: "2" },
    { label: "Tunnel Dimensions [Mm]", value: "1800 (W) x 1800 (H)" },
    { label: "Max Load On Conveyor [Kg]", value: "3000" },
    
    // { type: 'header', label: 'IMAGING' },
    { label: "Belt Height [Mm]", value: "330" },
    { label: "Belt Speed [M/S]", value: "0,2 m/s" },
    { label: "Monitor [Nr]", value: "2" },
    { label: "Power Supply", value: "380Vac ± 10% 50/60Hz" },
    { label: "Consumption [Kw]", value: "5" },

    // { type: 'header', label: 'EXPOSURE CONTROL' },
    { label: "Operating Temperature", value: "0 ÷ 40 °C" },

    // { type: 'header', label: 'LENS' },
    { label: "Storage Temperature", value: "-20 ÷ 60 °C" },
    { label: "Operating Humidity", value: "0 ÷ 95 %" },
    
    { type: 'header', label: 'IMAGING PROPERTIES' },
    { label: "Tube Voltage", value: "200 kV " },
    { label: "Tube Current", value: "1.5 mA" },
    { label: "Cooling", value: "Oil bath" },

    { label: "Resolution", value: "38 AWG guaranteed, 40 AWG typical" },
    { label: "Penetration", value: "45 mm steel guaranteed, 50 mm steel typical" },
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
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          FEP CARGO DV
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
           Designed for cargo and large object screening, this x-ray inspection system provides dual view images.            </p>

            <h2 className="font-bold text-xl mb-2  text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
            The new FEP ME CARGO DV is a multi-energy X-ray system suitable for the screening of goods on pallets up to 3000 kg. It has one 200 kV X-ray source and a large inspection tunnel opening of 180 cm x 180 cm. The FEP ME CARGO DV allows the detection of organic materials (including explosives and drugs), and the detection of weapons, detonators and dangerous objects representing threats to security. The multi energy technology allows to display on the screen the nature of the different materials contained in the inspected objects, according to a chromatic code.                </p>
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
                     <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                        <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">
                          More By GILARDONI
                          </h3>
                       <ul className="space-y-4 text-gray-700">
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

export default   CargoDv;