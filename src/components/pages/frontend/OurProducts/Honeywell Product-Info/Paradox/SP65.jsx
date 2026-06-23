import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const SP65 = () => {
  const productData = {
    title: "SP65  | Expandable to 32-Zone Control Panel",
    subtitle: "A reliable and expandable control panel that forms the core of a robust and customizable Paradox security system ",
    description: "The Paradox PDX-SP65 offers a combination of innovative features and an advanced communication bus for a unique expandable security system. Through its communication bus, The PDX-SP65 can be expanded via wireless and hardwired expansion modules and a variety of accessory modules. With its reliable communication technology, flexible expansion, and great-looking keypads, the PDX-SP65 is an ideal security system for any residential or commercial installations that require up to 32 zones of protection.",
    features: [
      "StayD Mode",
      "32 zones (4 on-board, 8 with ATZ) either wireless (using RX1), or hardwired (using ZX82 / ZX8SP / ZX8)",
      "16 PGMs (3 on-board and using PGM4)",
      "2 partitions",
      "32 user codes",
      "4-wire expansion bus (connects up to 15 keypads)",
      "Supports wired sirens",
      "Supports PCS Series",
      "Supports IP150 Internet Module",
      "Supports VDMP3 Plug-In Voice Dialer",
      "Supports PMC5 USB Memory Key",
      "App-based system control via Insite GOLD",
      "Menu-driven programming for the Installer, Master and Maintenance codes",
      "Multiple phone numbers: 3 for monitoring station, 5 for personal dialing and 1 for pager reporting",
      "Patented 2 opto coupler dialer circuit – the most reliable dialer in the industry",
      "Automatic Daylight Savings Time feature",
      "Push button software reset (reset to default values and restart)",
      "Compatible with RAC1, REM1, REM15 and REM101 remote controls (requires RX1)",
      "In-field firmware upgrade via BabyWare"
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
                          Supply Power
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          16VAC – 1.5A
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Output Power
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          12VDC @ 500mA
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Zones
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          9 doubled to 18 and expandable to 32
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          PGM
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          3 expandable to 16
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          User codes
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          32
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Partitions
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          2
                      </td>
                    </tr>
                   
                </table>
              </section>

              {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10 border-b py-5 border-b-gray-400">
              <span className="bg-[#ff5f31] text-white px-4 py-2 rounded">
                PARADOX
              </span>
              
              <span className="bg-[#ff5f31] text-white px-4 py-2 rounded">
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

export default SP65;