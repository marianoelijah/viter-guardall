import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';

const SlimlineBollard = () => {
  const productData = {
    title: "SecuraPost Slimline Bollard",
    subtitle: "An aesthetically attractive removable bollard made with stainless steel.",
    description: "Leda stainless steel bollards are normally manufactured from Grade 304 material. Grade 316 is available if specified, and is recommended for installations within 2 kilometers of the coast. Discoloration or ‘tea staining’ of stainless steel is often seen around coastal locations and can get progressively worse closer to the ocean, in higher temperatures or with exposure to wind. For these aggressive environmental conditions, Leda recommends electropolishing(pickling) as an alternative treatment and finish.", 
    features: [
      "Classic, clean smooth lines",
      "Range of sizes",
      "Linished or electropolished finish",
      "Choice of styles:",
      "– Fixed Insitu",
      "– Fixed Baseplate",
      "– Locking & Removable",
      "– Lighting (refer Lighting bollards)",
      "Retractable (refer Retractable section).",
      "Maximises pedestrian flows",
      "Ideal for sporting venues and shopping centers",
      "Where high volumes of pedestrian traffic are possible.",
      "Best suited for installations on at pavement"
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
                       Oval Slimline
                      </td>
                      <td className="border border-black p-2">
                        <span className="font-bold">Material: </span>
                        Grade 316 stainless steel / galvanized pipe<br/>
                        <span className="font-bold">Finish:</span>
                        Linished or electro-polished<br/>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       Slimline 80NB
                      </td>
                      <td className="border border-black p-2">
                        <span className="font-bold">
                            Material: 
                        </span>
                       80NB (88.9) x 3.05 / 5.49 / 7.62mm Grade 304 stainless steel pipe<br/>
                        <span className="font-bold">
                            Finish:
                        </span>
                        Linished or electro-polished<br/>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                         Slimline 80/100NB
                      </td>
                      <td className="border border-black p-2">
                        <span className="font-bold">
                            Material: 
                        </span>
                         80NB (88.9) / 100NB (114.3) x 3.05mm Grade 304 s/steel pipe<br/>
                        <span className="font-bold">
                            Finish:
                        </span>
                        Linished or electro-polished<br/>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       Slimline 125NB
                      </td>
                      <td className="border border-black p-2">
                        <span className="font-bold">
                            Material: 
                        </span>
                        125NB (141.3) x 3.40mm Grade 304 s/steel pipe  <br/>
                        <span className="font-bold">
                            Finish:
                        </span>
                          Linished or electro-polished<br/>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                         Slimline 150NB 
                      </td>
                      <td className="border border-black p-2">
                        <span className="font-bold">
                            Material: 
                        </span>
                         50NB (168.3) x 3.40 / 7.11 / 10.97mm Grade 304 stainless steel pipe <br/>
                        <span className="font-bold">
                            Finish:
                        </span>
                          Linished or electro-polished <br/>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                         Slimline 200NB
                      </td>
                      <td className="border border-black p-2">
                        <span className="font-bold">
                            Material: 
                        </span>
                         200NB (219.0) x 3.76 / 8.18 / 12.70mm Grade 304 stainless steel pipe <br/>
                        <span className="font-bold">
                            Finish:
                        </span>
                          Linished or electro-polished <br/>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                         Slimline 300NB
                      </td>
                      <td className="border border-black p-2">
                        <span className="font-bold">
                            Material: 
                        </span>
                         300NB (323.4) x 4.57 / 9.53 / 12.70mm Grade 304 stainless steel pipe<br/>
                        <span className="font-bold">
                            Finish:
                        </span>
                          Linished or electro-polished <br/>
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

export default SlimlineBollard;