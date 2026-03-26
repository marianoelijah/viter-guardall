import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';

const SentinelBollard = () => {
  const productData = {
    title: "SecuraPost Sentinel Bollard",
    subtitle: "A removable and lockable bollard designed to protect factories, warehouses, and shopfronts from ram-raid style attacks.",
    description: "Securapost Sentinel locking and removable bollard provides roller door security for factories and warehouses. It’s also a great way to protect shop fronts including glass and doors from ram raid style attacks. The bollards are used extensively for vehicle protection (against theft)  panel beaters, auto workshops, driveways and to prevent unauthorized parking on public or private property.", 
    features: [
      "Impact tested and rated",
      "High impact and anti-cutting models",
      "Provide protection from ram raids to vehicular-borne terrorist attacks",
      "Available in Locking & Removable, Fixed In Site,Retractable",
      "Lifting handle for easy removal",
      "Patented locking system",
      "Heavy duty galvanized steel electrostatically powder coated, in an optional range of colors",
      "Easy, economical installation by concrete core drilling",
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
                       Sentinel 80N
                      </td>
                      <td className="border border-black p-2">
                        <span className="font-bold">Material: </span>
                        80NB (88.9) x 3.0mm medium duty galvanized pipe                
                        80NB (88.9) x 5.9mm extra heavy duty galvanized pipe<br/>
                        <span className="font-bold">Finish:</span>
                        Electrostatically powder coated in black or industrial yellow.             
                        Optional range of colors available on request.<br/>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       Sentinel 150NB
                      </td>
                      <td className="border border-black p-2">
                        <span className="font-bold">
                            Material: 
                        </span>
                        150NB (165.1) x 5.4mm HD galvanized or 11.0mm structural pipe<br/>
                        <span className="font-bold">
                            Finish:
                        </span>
                        Electrostatically powder coated in black or industrial yellow. 
                        Optional range of colors available on request.<br/>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                         Sentinel XP
                      </td>
                      <td className="border border-black p-2">
                        <span className="font-bold">
                            Material: 
                        </span>
                         80NB (88.9) x 10.4mm extra heavy duty galvanized pipe<br/>
                        <span className="font-bold">
                            Finish:
                        </span>
                        Electrostatically powder coated in black or industrial yellow.
                        Optional range of colors available on request.   <br/>
                      </td>
                    </tr>
                    
                </table>
              </section>

              {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10 border-b py-5 border-b-gray-400">
              <span className="bg-red-500 text-white px-2 py-1 rounded">
               LEDA
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

            {/* Right Column: Sidebar */}
                     <div className="lg:col-span-1 space-y-8">
                         <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                       <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By LEDA</h3>
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

export default SentinelBollard;