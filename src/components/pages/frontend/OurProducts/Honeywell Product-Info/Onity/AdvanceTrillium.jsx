import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';

const AdvanceTrillium = () => {
  const productData = {
    title: "Advance Trillium RFID",
    subtitle: "A hotel lock designed with a slim two-piece module that can be unlocked with RFID and DirectKey mobile access. ",
    description: "Designed for today’s modern aesthetics, Onity’s ADVANCE lock is available in a slim two-piece module design with a low profile reader, RFID and optional Bluetooth® Low Energy (BLE) configurations. ADVANCE locks can be operated using Onity’s DirectKeyTM technology enabling guests to use an approved smartphone app to securely download their assigned key for easy access to controlled areas.",
    features: [
      "Simple to use",
      "Ideal for retrofit and new installation applications",
      "Compatible with Onity OnPortalTM system software",
      "Lock LEDs indicate lock status, including low battery level",
      "Powered by four AA batteries with a two year normal life",
      "Mobile access compatible",
      "Provides a wide range of design options for finish and levers",
      "DirectKey-ready: Optional on-board DirectKey module provides secure wireless communication of credentials from a user’s smartphone to a locking device via Bluetooth Smart communications",
      "Supports MIFARE Classic®, MIFARE Plus®, MIFARE Ultralight®, and MIFARE Ultralight C cards",
      "Reading technology: contactless RFID (ISO14443A, NFC)",
      "Multiple opening devices available: cards, wristbands, keychains, etc.",
      "Non-volatile memory: records last 500 openings including date, time and card used",
      "Programmable to customer needs (meeting rooms, offices, housekeeping, etc.)",
      "Corrosion-treated for normal atmospheric conditions",
      "NXP CRYPTO1 or AES-128 card encryption"
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
                  
                  {/* <tr>
                      <td colSpan="5" className="border border-black p-3 font-bold w-1/2">
                       POWER
                      </td>
                    </tr> */}
                  <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Lockcase
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        ANSI Standard, Auto Dead-bolt, Latch Only, EURO, DIN, CIT (H-LOCK), BLA (CYLINDRICAL)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Panic Release
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Yes
                      </td>
                    </tr>
                     
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Reader
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       MIFARE Classic®, MIFARE Plus®, MIFARE Ultralight® and MIFARE Ultralight C Supports keycards, wristbands and keyfobs.
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Mobile Access
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        DirectKey Mobile Access – upgrade/optional
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Encryption
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        128-AES
                      </td>
                    </tr>
                     <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Programming
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       PPCOM (Wired)
                      </td>
                    </tr>
                  <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       System Software Capability
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        OnPortalTM Portable Programmer Required (Wired)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Encoder
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       Compact RFID
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       Audit Trail
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        500, includes date, time and credential used
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Guest Privacy Function
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Yes
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       Reader Color
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Black
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Metal Finishes
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Satin Nickel, Satin Chrome, Polished Chrome, Flat Black, Satin Brass, Polished Brass, Antique Brass
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       Lever Options
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       Wing, Granada, Toledo, Jerez, Barcelona, Sevilla*
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Approved Outdoor Finish
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         Not approved for outdoor installation
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Supported Door Types
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Metal or wood doors. Cover plates available.
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       Door Requirements
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Door Stile: 5” minimum Door Thickness: 1 3/8” narrow (35mm), 1-3/4” standard (45mm)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        ADA Compliant
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Yes
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       Power
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        1.5 VDC 4x AA alkaline batteries
                      </td>
                    </tr>
                     <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Battery location
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Inside the room, uncontrolled side of door
                      </td>
                    </tr>
                      <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Battery life
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        2 years
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Low Battery Indicator
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        LED at lock
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Certifications
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       FCC, CE, NOM, ANATEL, RoHS, REACH, ISO 14443 A, NFC
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       Warranty
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        2-year
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                      Extended Warranty Available
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       Yes
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       UL
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       UL10C, 3 hours
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       Storage Temperature
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       -40°F to 185°F (-40°C to 85°C)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       Operating Temperature
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       Alkaline batteries: 0° F to 130° F (-18° C to 55° C),Lithium batteries: -40° F to 167° F (-40° C to 75° C)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       Humidity
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       0% to 95% non-condensing humidity at 140° F (60° C)

                      </td>
                    </tr>
                   
                </table>
              </section>

              {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10 border-b py-5 border-b-gray-400">
              <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
               ONITY
              </span>
              
              <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
                Hotel Locking Systems and Hotel Safes
              </span>
            </div>

            {/* SHARE SECTION */}
            <div className="mt-8">
              <p className="font-medium text-black mb-3">Share:</p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/facebook.png" alt="Facebook" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/gmail.png" alt="Gmail" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/telegram.png" alt="Telegram" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/viber.png" alt="Viber" className="w-full h-full object-contain p-1" />
                </div>
              </div>
            </div>

            </div>

            {/* Right Column: Sidebar */}
                     <div className="lg:col-span-1 space-y-8">
                         <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                       <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By ONITY</h3>
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

export default AdvanceTrillium;