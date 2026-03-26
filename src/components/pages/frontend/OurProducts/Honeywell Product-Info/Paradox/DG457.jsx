import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';

const DG457 = () => {
  const productData = {
    title: "DG457 Glassbreak Detector",
    subtitle: "Designed to be installed on the wall or ceiling near the windows in need of protection.This compact, motion detector is best for high-ceiling installation and has a 360-degree range. ",
    description: "GlassTrek delivers effective coverage of plate, tempered, and laminated glass without the need for complicated sensitivity adjustments. GlassTrek can be used in most protected areas, including rooms with blinds, curtains, or multiple windows as long as careful coverage tests are conducted using TestTrek. Breakage in panes of glass 40.6 cm x 61 cm (16 in. x 24 in.) or larger will be detected, for every standard thickness of plate (0.3 cm x 0.6 cm or 1/8 in. x 1/4 in.). ",
    features: [
      "Two operational modes (addressable for the Digiplex and Digiplex EVO series or conventional relay operation)",
      "Remote test mode when used with Test Trek V2",
      "Full audio and infrasonic spectrum analysis",
      "7 frequency digital filters, digital amplifier gain and frequency fluctuation assessment",
      "Impact and shock wave analysis",
      "High-immunity to RFI and EMI signals",
      "Adjustable sensitivity: covers up to 9m (30ft) when set to high and up to 4.5m (15ft) when set to low",
      "TestTrek (459) used for testing available separately",
      "Anti-tamper switch"
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

              <section className="mb-10">
                <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-9 gap-y-1 list-disc text-black ml-5 text-[15px]">
                  {productData.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </section>

                {/* Technical Spec Table */}
              <section className="overflow-x-auto">
                <h2 className="font-bold text-xl mb-4">Technical Specification:</h2>
                <table className="w-full text-[15px] text-black border-collapse border border-black">
                  
                   <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Voltage
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                           9 – 16Vdc FOR DG457 ONLY: Used for trouble-shooting, the voltage meter indicates the GlassTrek’s input voltage. Enter section [900]. The 3-digit number that appears on the screen represents input voltage x 10 (e.g. [133] = 13.3V).
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Current
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          DG457 (35mA)   457(25mA)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Coverage
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          High: 9m (30ft) / Low: 4.5m (15ft)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Size
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          9cm (3.5 in) x 6.6cm (2.6 in) x 2.5 (1in)
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Weight
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        100g (4oz)
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                        Alarm output
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         150mA, 28VDC, Form A (N.C.) / via combus
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Anti-tamper output
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          150mA, 28VDC, Form A (N.C.) / via combus
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Operating temp.
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          -20°C to 50°C (4°F to 122°F)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                        Processing
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         1. Attack rise time 2. Attack sound pressure level 3. 7-band audio spectrum analysis 4. Envelope duration 5. Infra-sound
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Microprocessor type
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          	12/8-bits
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Compatibility
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          All Digiplex series (DGP/DGPNE) and all EVO series control panels.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Testing tool
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          TestTrek (DG459)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Certification (i.e. CE, UL)
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         For updated information, visit www.paradox.com
                      </td>
                    </tr>
                </table>
              </section>

              {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10 border-b py-5 border-b-gray-400">
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                PARADOX
              </span>
              
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                Intrusion/ Burglary Alarm Systems
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
                       <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By PARADOX</h3>
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

export default DG457;