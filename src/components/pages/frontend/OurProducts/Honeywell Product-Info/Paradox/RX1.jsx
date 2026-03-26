import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';

const RX1 = () => {
  const productData = {
    title: "RX1 Wireless Receiver",
    subtitle: "Seamlessly integrates wireless devices with your Paradox security system, expanding its capabilities and offering flexible protection without the need for extensive wiring.",
    description: "The RX1 Wireless Receiver adds wireless receiving capability to the Spectra SP Series control panels (V4.5 and higher). Adding the RX1 to an installation allows for the use of one- way remotes as well as wireless one-way zone transmitters with the system.",
    features: [
      "Compatible with SP Series control panels (V4.54 and higher)",
      "32 wireless zones (SP Series only)",
      "Maximum number of remote controls: 32",
      "Remote control compatibility: REM1, RAC1",
      "Transmitter compatibility: DCT10, DCTXP2, DCT2, PMD1P, PMD75, PMD85, SD738 (SP only)",
      "In-field firmware upgradable via In-Field Firmware Upgrade software",
      "RF jamming supervision",
      "Low battery, tamper, and check-in supervision",
      "Transmitter signal strength display",
      "2 PGM outputs follow buttons 1 and 2 on REM1/RAC1 (also programmable through the panel)"
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
                         Power Input Voltage
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          12 Vdc
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Frequency
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          433 MHz or 868 MHz
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Sensitivity
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          -110 dBm (433 MHz) or -106 dBm (868 MHz)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Current Consumption
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          25 mA
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Dimensions (no antenna)
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         5.1 x 8.3 x 2 cm (2 x 3.25 x 0.78 in.)
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Operating Temperature
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         0ºC to 50ºC (32ºF to 122ºF)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         PGM Outputs
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          PGM1 and PGM2 – via PGM 13 and 14 of panel
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Antenna
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Monopole antenna; error correction algorithm
                      </td>
                    </tr>
                   <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Bus Supervision
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          AC, Battery, Aux Voltage Statusand Consumption, Tamper
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Dimensions(H x W x D)
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          25.4 x 27.3 x 8.9 cm(10 x 10.75 x 3.5 in.)
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Compatibility
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          EVO192, EVOHD all versions,MG5000, MG5050, SP5500,SP6000, SP7000 V6.80 and higher
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

export default RX1;