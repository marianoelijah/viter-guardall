import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';

const TsScramblePad = () => {
  const productFeatures = [
    "Industry's most versatile, highly secure intelligent door reader endpoint",
    "Extends the ScramblePad family with a contact smart card reader for FICAM two-factor authentication for high-security zones",
    "Supports PIV, PIV-I, CIV, CAC, PLAID, legacy credentials (DESFire, MIFARE, UID) and proximity, reading both contactless and contact interfaces",
    "Versatile platform transitions seamlessly and simultaneously for certified validation systems",
    "Wiegand, RS-485/OSDP, Ethernet (PoE)",
    "Download firmware and feature updates and changes over RS-485/OSDP link"
  ];

  return (
    <>
      <Header />
      <div className="bg-slate-50 dark:bg-[#121214] min-h-screen font-sans text-slate-900 dark:text-gray-200 transition-colors duration-300 pb-12">
        {/* Header Banner */}
        <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-6 text-center shadow-inner transition-colors duration-300">
          <h1 className="text-4xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
            Hirsch TS ScramblePad SC: <br/>
            FICAM-Capable TS ScramblePad with Contact Smart Card Reader
          </h1>
        </header>

        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-12">
          
          {/* Main Content Area */}
          <main className="lg:col-span-9 bg-gray-200 dark:bg-[#1e1e22] p-8 rounded shadow-sm border border-transparent dark:border-gray-800 transition-colors duration-300">
            <p className="text-[17px] text-gray-800 dark:text-gray-300 mb-8 border-l-4 border-[#8ba4cc] dark:border-blue-500 pl-4 font-medium italic">
              A high-security keypad that features a patented scrambling function, it can also be used for contactless and contact smart cards.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-3 text-black dark:text-blue-400 uppercase transition-colors">Product Description:</h2>
              <div className="text-[17px] leading-relaxed text-slate-700 dark:text-gray-300 space-y-4 mb-6">
                <p>
                  Hirsch TS ScramblePad SC provides high-security keypad functionality, a contactless interface, and a contact reader for two-factor authentication. The ScramblePad design is specified in many of the world’s most secure locations due to its high-security scramble feature that randomly orders the digits each time the "START" button is pressed or a card requiring a PIN is presented.
                </p>
                <p>
                  The random scrambling prevents the acquisition of a user code via pattern recognition and also prevents keypad wear leaving a tell-tale impression of the numbers used in a valid PIN. This feature is further enhanced by the use of viewing restrictors narrowing the field of vision; only the person directly facing the ScramblePad can see the presented digits.
                </p>
              </div>

              <h2 className="font-bold text-xl mb-3 text-black dark:text-blue-400 uppercase transition-colors">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] text-gray-800 dark:text-gray-300 space-y-1 mb-8">
                {productFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            {/* Technical Specification Table */}
            <h2 className="font-bold text-xl mb-4 text-black dark:text-blue-400 uppercase transition-colors">Technical Specification:</h2>
            <div className="border border-gray-500 dark:border-gray-700 rounded-sm overflow-x-auto mb-8">
              <table className="w-full text-[15px] text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800 font-bold uppercase text-black dark:text-blue-400">
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-left w-1/4"></th>
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-center">TS ScramblePad SC Wiegand</th>
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-center">TS ScramblePad SC RS-485/OSDP</th>
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-center">TS ScramblePad SC SCFICAM</th>
                    <th className="border-b border-gray-500 dark:border-gray-700 p-2 text-center">TS ScramblePad SC FICAM-Strict</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Part Numbers</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 text-center">8336ABT0000</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 text-center">8336ABTR000</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 text-center">8336ABTF000</td>
                    <td className="p-2 text-center">8336ABTFF00</td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Carrier Frequencies</td>
                    <td colSpan="3" className="p-2 border-r border-gray-500 dark:border-gray-700 text-center">125 kHz / 13.56 MHz</td>
                    <td className="p-2 text-center">13.56 MHz</td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Reader Output</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 text-center">Wiegand</td>
                    <td colSpan="3" className="p-2 text-center">RS-485 (2 Wire)</td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Current Consumption (@ 12 V)</td>
                    <td colSpan="2" className="p-2 border-r border-gray-500 dark:border-gray-700 text-center">270 mA typical; 300 mA Peak</td>
                    <td colSpan="2" className="p-2 text-center">@ 48V: 68 mA typical; 82 mA Peak</td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Power Supply</td>
                    <td colSpan="4" className="p-2 text-center">12 VDC or PoE (802.3af)</td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Product Weight</td>
                    <td colSpan="4" className="p-2 text-center">445 g (15.69 oz)</td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Dimensions</td>
                    <td colSpan="4" className="p-2 text-center">
                      Face: 5.75 (H) x 4.37 (W) in (14.6 x 11.1 cm)<br/>
                      Body: 5.0 (H) x 3.5 (W) x 2.75 (D) in (12.7 x 8.89 x 7.0 cm)
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Color</td>
                    <td colSpan="4" className="p-2 text-center">Black</td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Operating Temperature</td>
                    <td colSpan="4" className="p-2 text-center">0° to 49° C (32° to 120° F)</td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Storage Temperature</td>
                    <td colSpan="4" className="p-2 text-center">-35 to 85° C (-31 to 185° F)</td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">High Frequency Compatibility</td>
                    <td colSpan="3" className="p-2 border-r border-gray-500 dark:border-gray-700 text-center">PIV, PIV-I, CAC, MIFARE, DESFire, PLAID, ISO15693, ISO14443A</td>
                    <td className="p-2 text-center">PIV, PIV-I, CAC, CAK & PAK</td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Low Frequency Compatibility</td>
                    <td colSpan="3" className="p-2 border-r border-gray-500 dark:border-gray-700 text-center">HID Prox, Indala, Casi Rusco, AWID, Farpointe, and others</td>
                    <td className="p-2 text-center">None</td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Operating Humidity</td>
                    <td colSpan="4" className="p-2 text-center">5% to 95% relative humidity (non-condensing)</td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Connection</td>
                    <td colSpan="4" className="p-2 text-center">Structured Cabling (RJ45) for Ethernet and Terminal Strip for Wiegand and RS485; RGB LED, Ethernet link activity LED, Buzzer</td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Certifications</td>
                    <td colSpan="4" className="p-2 text-center">FCC, UL, CE, IC, RCM, RoHS2, REACH</td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">FICAM Certifications</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 text-center">No</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 text-center">Upgradable</td>
                    <td colSpan="2" className="p-2 text-center">Yes</td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Warranty</td>
                    <td colSpan="4" className="p-2 text-center">Two (2) years</td>
                  </tr>

                  <tr className="hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Mounting Boxes</td>
                    <td colSpan="4" className="p-2 text-center">
                      Dimensions and mounting points are identical to other ScramblePads, enabling compatibility with a range of mounting boxes. The contact smart card reader occupies the volume below the reader. It fits in a standard MB2 or MB2/UMK as long as that volume is not obstructed. Other boxes may require an extender or an alternate faceplate.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#ff5f31] text-white text-sm px-2 py-1 rounded shadow-sm font-medium">Hirsch</span>
              <span className="bg-[#ff5f31] text-white text-sm px-2 py-1 rounded shadow-sm font-medium">Access Control System</span>
            </div> 

            {/* Share Section */}
            <SocialShare title="Check out this product!" />
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
              <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By HIRSCH</h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <NavLink to="/our-products/onity/directkey-with-serene" className="block">
                  <li className="cursor-pointer hover:text-[#ff5f31] dark:hover:text-[#ff5f31] transition-colors">Onity DirectKey with Serene</li>
                </NavLink>
                <NavLink to="/our-products/detnov/addressable-sounder" className="block">
                  <li className="cursor-pointer hover:text-[#ff5f31] dark:hover:text-[#ff5f31] transition-colors">MAD-401 and MAD-402 Series Modules</li>
                </NavLink>
                <NavLink to="/our-products/acti/bay-raid-backmount-standalone" className="block">
                  <li className="cursor-pointer hover:text-[#ff5f31] dark:hover:text-[#ff5f31] transition-colors">INR 415 256-Channel RAID Standalone</li>
                </NavLink>
                <NavLink to="/our-products/acti/channel-tower-strandalone" className="block">
                  <li className="cursor-pointer hover:text-[#ff5f31] dark:hover:text-[#ff5f31] transition-colors">GNR 340 100-Channel Tower NVR</li>
                </NavLink>
              </ul>
            </div>

            {/* Contact Card */}
            <div 
              className="relative min-h-[240px] overflow-hidden rounded-2xl p-8 text-white shadow-md bg-cover bg-center bg-blend-multiply bg-blue-900/85 dark:bg-blue-950/90"
              style={{ backgroundImage: "url('/assets/image/Our%20Products/quickalert.jpg')" }}
            >
              <div className="relative z-10 max-w-3xl">
                <h3 className="mb-4 text-2xl font-bold leading-tight tracking-wide">
                  Secure Your Peace Of Mind Today
                </h3>
                
                <p className="mb-6 text-sm md:text-base text-gray-200 font-medium leading-relaxed">
                  Contact Guard-All now for a customized security solution that protects what matters most.
                </p>

                <NavLink 
                  to="/contacts" 
                  className="inline-block w-full rounded-xl bg-[#0f3e90] dark:bg-blue-600 px-6 py-3 text-center text-sm font-semibold tracking-wider text-white transition-colors hover:bg-[#ff5f31] dark:hover:bg-[#ff5f31] sm:w-auto"
                >
                  CONTACT US TODAY
                </NavLink>
              </div>
            </div>
          </aside>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TsScramblePad;