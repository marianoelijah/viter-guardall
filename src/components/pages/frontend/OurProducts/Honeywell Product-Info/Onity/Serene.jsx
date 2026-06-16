import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const Serene = () => {
  const productData = {
    title: "Onity DirectKey with Serene",
    subtitle: "Designed for luxury hotels, this sleek all-in-one lock allows guests to unlock with the DirectKey mobile access technology. ",
    description: "Serene, from Onity, is a sleek all-in-one lock designed both inside and out for luxury hotels. Its small glowing halo of light symbolizes both timeless design and leading-edge DirectKey mobile access technology that allows guests to unlock their room with ease as they approach the door. And, with a range of lever styles and finishes, Serene can be customized to fit the look of any property. This is a lock both technology specialists and designers can easily and securely, totally love.",
    features: [
      "Soft LED light halo indicates the status of the lock to provide a visual indicator to hotel guests",
      "Ideal for new construction",
      "Suits a wide range of designs with finish and lever options",
      "Upgradable lock firmware",
      "ADA Compliant",
      "Lock programming and audit records retained during battery replacement",
      "Supported by OnPortal enterprise lock management system",
      "Supports RFID and Bluetooth communications",
      "Detailed audit trail: 3000 events"
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
                      <td colSpan="5" className="border border-black p-3 font-bold w-1/2">
                       POWER
                      </td>
                    </tr>
                  <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Power supply
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        1.5 VDC (4x AA alkaline batteries)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Battery Life
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        2 years normal life
                      </td>
                    </tr>
                     <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Battery Location
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       Inside of the door in electronics module
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       Lock programming and audit records retained during batteryreplacement
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="5" className="border border-black p-3 font-bold w-1/2">
                       GENERAL
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Door Thickness
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        ANSI – 1.57” – 2.16” (40-55 mm); EURO – 1.38” -3.74” (35-95 mm)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Minimum Door Stile
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        6” (152.4 mm) / 2” Solid vertical edge
                      </td>
                    </tr>
                     <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Distance Requirement between strike and face plate: 1/8” to 3/16”
                      </td>
                    </tr>
                  <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       ADA Compliant
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Yes (ANSI, EURO)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        System Software Compatibility
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Onity OnPortal
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       BLE Enabled
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        BLE 5 module included, no further upgrade required
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Supported RFID Standards
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        ISO 14443 A (MIFARE Plus® and MIFARE Ultralight C)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       User Interface
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Multi colored light pipe around reader indicates lock status and communication
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Panic Release Function
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Inside lever automatically retracts the deadbolt and latch in emergency situations
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Audit Log
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       Stores last 3000 events
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Upgradeable Firmware
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Yes
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Online Compatibility
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        RMS capable (1-way or 2-way communication)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       Construction
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Steel latch construction with an anti-friction mechanism
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Mechanical Key Override
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        EURO only (key cylinder)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Finishes
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Satin Nickel, Satin Chrome, Polished Chrome, BlackChrome, Satin Brass, Polished Brass, Antique Brass, Dark Bronze
                      </td>
                    </tr>
                     <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Levers
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Granada, Toledo, Wing. Supports designer levers with8mm square interface.
                      </td>
                    </tr>
                      <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Warranty
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        2 years
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="5" className="border border-black p-3 font-bold w-1/2">
                        ENVIRONMENTAL
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Operating Temperature
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        -30C to +75C (-22F to +167F)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        With Alkaline Battery:
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       -10C to +55C (14F to +131F)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       Storage Temperature
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        -40C to +85C (-40F to +185F)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       Humidity:
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        +60C/ 95%RH
                      </td>
                    </tr>
                   
                </table>
              </section>

              {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10 border-b py-5 border-b-gray-400">
              <span className="bg-red-500 text-white  px-2 py-1 rounded">
               ONITY
              </span>
              
              <span className="bg-red-500 text-white  px-2 py-1 rounded">
                Hotel Locking Systems and Hotel Safes
              </span>
            </div>

            {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

            </div>

            {/* Right Column: Sidebar */}
                     <div className="lg:col-span-1 space-y-8">
                         <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                       <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By ONITY</h3>
                       <ul className="text-xs space-y-4 text-gray-500 transition-colors">
                         <li className='cursor-pointer hover:text-[#ff5f31]'>Onity DirectKey with Serene</li>
                         <li className='cursor-pointer hover:text-[#ff5f31]'>MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs</li>
                         <li className='cursor-pointer hover:text-[#ff5f31]'>INR 415 256-Channel 12 Bay RAID Rackmount Standalone</li>
                         <li className='cursor-pointer hover:text-[#ff5f31]'>GNR 340 100-Channel Tower Standalone</li>
                         <li className='cursor-pointer hover:text-[#ff5f31]'>ENR 130 16-Channel Desktop Standalone NVR - No HDD Included</li>
                         <li className='cursor-pointer hover:text-[#ff5f31]'>Z86 Outdoor Network Dome Camera with Night Vision</li>
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

export default Serene;