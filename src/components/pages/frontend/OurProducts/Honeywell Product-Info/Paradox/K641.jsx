import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const K641 = () => {
  const productData = {
    title: " K641+  32- Character Blue LCD Keypad",
    subtitle: "A compact, 32-character keypad module that provides a user-friendly experience.",
    // description: "",
    features: [
      "Beautiful new design",
      "Zone alarm display: the zones in alarm are shown until the system is disarmed",
      "In-field firmware upgradeable via a CONV4USB",
      "Simplified end-user remote control programming",
      "Supports DGP-848, EVO96, EVO48 and EVO192",
      "32-character blue LCD with programmable labels (via Memory Key, NEware or Module Broadcast feature)",
      "Available in Bulgarian, Croatian, Czech, Dutch, English, French, German, Greek, Hebrew, Hungarian, Italian, Polish, Portuguese, Russian, Slovak, Slovenian, Spanish, Swedish, Turkish, Lithuanian, Finnish and Turkish",

      "Assign to one or more partitions",
      "1 addressable zone input and 1 PGM output",
      "Independently set chime zones",
      "14 one-touch action buttons",
      "Three keypad-activated panic alarms",
      "Adjustable backlight, contrast, and scroll speed",
      "Display time using the 12 or 24 hr. format"
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
                          Power Input
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          9 to 15 VDC
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Consumption
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          38 mA; max 76 mA
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Operating Temperature
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          0°C to 50°C (32°F to 122°F)
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Dimensions
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         15 x 8.5 x 2 cm (5.9 x 3.3 x 0.8 in.)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Compatibility
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          EVO control panels
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
             <SocialShare title="Check out this product!" />

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

export default K641;