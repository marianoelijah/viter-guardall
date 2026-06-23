import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const AluminumBollard = () => {
  const productData = {
    title: "SecuraPost Ambassador Aluminum Bollard",
    subtitle: "Made with corrosion-resistant aluminum, these high-security bollards are ideal for traffic control.",
    description: "Leda’s Securapost aluminum bollards are suitable for casting into both traditional and modern shapes. Aluminum provides an excellent surface for electrostatic powder coated finishes. Aluminum is a strong, corrosion-resistant, lightweight material that is ideally suited for coating with electrostatically applied powder coated finishes.", 
    features: [
      "Elegant traditional designs",
      "Range of sizes",
      "Powder coated color finishes",
      "Choice of styles:",
      "– Fixed Insitu",
      "– Fixed Baseplate",
      "– Locking & Removable",
      "– Lighting (refer Lighting bollards)",
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
          <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
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
                       Ambassador
                      </td>
                      <td className="border border-black p-2">
                        <span className="font-bold">Material: </span>
                        150NB (165.1) x 5.0mm medium duty aluminum pipe  <br/>
                        <span className="font-bold">Finish:</span>
                        Electrostatically powder coated in a range of colors<br/>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       Parisian
                      </td>
                      <td className="border border-black p-2">
                        <span className="font-bold">
                            Material: 
                        </span>
                        80NB (88.9) x 3.25mm medium duty aluminum pipe 
                         100 x 100mm aluminum RHS  <br/>
                        <span className="font-bold">
                            Finish:
                        </span>
                        Electrostatically powder coated in a range of colors <br/>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       Commodore
                      </td>
                      <td className="border border-black p-2">
                        <span className="font-bold">
                            Material: 
                        </span>
                        80NB (88.9) x 3.25mm medium duty aluminum pipe  <br/>
                        <span className="font-bold">
                            Finish:
                        </span>
                        Electrostatically powder coated in a range of colors <br/>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       Victorian
                      </td>
                      <td className="border border-black p-2">
                        <span className="font-bold">
                            Material: 
                        </span>
                        Outer – 192mm cast aluminum Inner – 65NB (76.1) x 3.6mm medium duty galvanized pipe  <br/>
                        <span className="font-bold">
                            Finish:
                        </span>
                         Electrostatically powder coated in selected heritage colors <br/>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Aegis
                      </td>
                      <td className="border border-black p-2">
                        <span className="font-bold">
                            Material: 
                        </span>
                         150NB (165.1) x 5.0mm medium duty aluminum pipe <br/>
                        <span className="font-bold">
                            Finish:
                        </span>
                         2 pack wet spray in a range of colors <br/>
                      </td>
                    </tr>
                   
                </table>
              </section>

              {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10 border-b py-5 border-b-gray-400">
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
               LEDA
              </span>
            </div>

            {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

            </div>

            {/* Right Column: Sidebar */}
                     <div className="lg:col-span-1 space-y-8">
                         <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                       <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By LEDA</h3>
                       <ul className="space-y-4 text-gray-800 font-medium">
                 <NavLink to="/our-products/onity/directkey-with-serene" className='block'>
                    <li className='cursor-pointer hover:text-[#ff5f31] transition-colors break-words'>Onity DirectKey with Serene</li>
                </NavLink>
                 <NavLink to="/our-products/detnov/addressable-sounder" className='block'>
                    <li className='cursor-pointer hover:text-[#ff5f31] transition-colors break-words'>MAD-401 and MAD-402 Series Modules</li>
                </NavLink>
                 <NavLink to="/our-products/acti/bay-raid-backmount-standalone" className='block'>
                    <li className='cursor-pointer hover:text-[#ff5f31] transition-colors break-words'>INR 415 256-Channel RAID Standalone</li>
                </NavLink>
                 <NavLink to="/our-products/acti/channel-tower-strandalone" className='block'>
                    <li className='cursor-pointer hover:text-[#ff5f31] transition-colors break-words'>GNR 340 100-Channel Tower NVR</li>
                </NavLink>
                 <NavLink to="/our-products/acti/bay-raid-backmount-standalone" className='block'>
                    <li className='cursor-pointer hover:text-[#ff5f31] transition-colors break-words'>INR 415 256-Channel RAID Standalone</li>
                </NavLink>
                 <NavLink to="/our-products/acti/channel-tower-strandalone" className='block'>
                    <li className='cursor-pointer hover:text-[#ff5f31] transition-colors break-words'>GNR 340 100-Channel Tower NVR</li>
                </NavLink>
             </ul>
                     </div>
           
                        {/* Contact Card */}
                       <div
                            className="relative min-h-[240px] overflow-hidden rounded-xl p-8 text-white shadow-md bg-cover bg-center bg-blend-multiply bg-blue-900/85"
                             style={{ backgroundImage: "url('/dist/assets/image/Our Products/quickalert.jpg')" }}
                              >
                            <div className="relative z-10">
                                <h3 className="mb-4 text-2xl font-bold leading-tight tracking-wide">
                                  Secure Your Peace Of Mind Today
                                </h3>
                                                                                       
                                  <p className="mb-6 text-sm text-gray-200 font-medium leading-relaxed">
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
                     </div>

          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AluminumBollard;