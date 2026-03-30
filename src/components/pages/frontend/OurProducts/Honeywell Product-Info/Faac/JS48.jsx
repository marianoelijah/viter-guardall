import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const JS48 = () => {
  const productData = {
    title: "JS48 High Security Bollards",
    subtitle: "Made of high-strength steel certified to stop cars and trucks.",
    description: "JS bollards are provided with protective covers mDure® which, unlike other bollards on the market, allows the bollard to be reconditioned avoiding high disassembly and reassembly costs. Innovative use of Rilsan® anticorrosive polyamide resin which guarantees protection from corrosion/deterioration, weather and chemical agents.", 
    features: [
      "Corrosion resistance",
      "Easy maintenance",
      "Simplified installation",
      "Suitable to every architectural context",
      "The FAAC JS48 bollards are certified to stop a 7,500 kg truck driven at 50 km/h, with certified operation even after impact. Safety standards complied with: PAS 68, IWA 14-1, ASTM F2656. "
    ],
    moreByBrand: [
      "Onity DirectKey with Serene",
      "MAD-401 and MAD-402 Series Addressable Modules",
      "INR 415 256-Channel 12 Bay RAID",
      "GNR 340 100-Channel Tower Standalone",
      "ENR 130 16-Channel Desktop Standalone NVR",
      "Z86 Outdoor Network Dome Camera"
    ]
  };

  return (
    <>
      <Header />
      <div className="bg-gray-300 min-h-screen font-sans text-slate-800">
        <header className="bg-[#7f95b8] text-white py-14 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold max-w-5xl mx-auto uppercase tracking-wider">
            {productData.title}
          </h1>
        </header>

        <main className="max-w-6xl mx-auto bg-gray-200 shadow-xl my-10 p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-3">
              <p className="text-[15px] text-black mb-6">{productData.subtitle}</p>
              
              <section className="mb-8">
                <h2 className="font-bold text-xl text-black mb-2 border-b-2 border-gray-100 pb-1 inline-block">Product Description:</h2>
                <p className="text-base text-black leading-relaxed mt-2">{productData.description}</p>
              </section>

              <section className="mb-10">
                <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 list-disc text-black ml-5 text-[15px]">
                  {productData.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </section>

                {/* Technical Spec Table */}
              <section className="overflow-x-auto">
                <h2 className="font-bold text-xl mb-4">Technical Specification:</h2>
                <table className="w-full text-[15px] text-black border-collapse border border-black">
                  
                   <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Diameter
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       275mm
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Height
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       1,000mm
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Oil type
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       Biodegradable
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Protective cover
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       mDure® + Aisi 316L protective sleeve
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Ambient operating temperature
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       -15°C / +80°C
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Ambient operating temp. with heater
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       -40°C / +80°C
                      </td>
                    </tr>
                    
                   
                </table>
              </section>

              {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10 border-b py-5 border-b-gray-400">
              <span className="bg-red-500 text-white px-2 py-1 rounded">
               FAAC
              </span>
            </div>

            {/* SHARE SECTION */}
             <SocialShare title="Check out this product!" />

            </div>

            {/* Right Column: Sidebar */}
                     <div className="lg:col-span-1 space-y-8">
                         <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                       <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By FAAC</h3>
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
                     </div>

          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default JS48;