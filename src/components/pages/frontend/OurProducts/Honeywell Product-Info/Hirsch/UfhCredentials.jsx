import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';

const UfhCredentials = () => {
  const productFeatures = [
    "Wall Mount SC provides an alternate high-security interface for contact smart card reads",
    "Wall Mount Keypad SC supports full FICAM two-factor authentication for high-security zones",
    "Versatile platform transitions seamlessly to certified certificate-based validation systems",
    "Supports compliance with FIPS 201, FIPS 140-2, and NIST SP800-116",
    "Supports PIV, PIV-I, CIV, CAC, PLAID, DESFire, MIFARE, ISO UID, and proximity",
    "Reads both contactless and contact interfaces in standard gang box housing",
    "Supports Wiegand and RS-485/OSDP data protocols",
    "RS-485/OSDP enables remote firmware flashing and feature and configuration updates"
  ];

  return (
    <>
      <Header />
      <div className="bg-slate-50 dark:bg-[#121214] min-h-screen font-sans text-slate-900 dark:text-gray-200 transition-colors duration-300 pb-12">
        {/* Blue Header Banner */}
        <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-6 text-center shadow-inner transition-colors duration-300">
          <h1 className="text-4xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
            uTrust UHF Credentials
          </h1>
        </header>

        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-12">
          
          {/* Main Content Area */}
          <main className="lg:col-span-9 bg-gray-200 dark:bg-[#1e1e22] p-8 rounded shadow-sm border border-transparent dark:border-gray-800 transition-colors duration-300">
            <p className="text-[17px] text-gray-800 dark:text-gray-300 mb-8 border-l-4 border-[#8ba4cc] dark:border-blue-500 pl-4 font-medium italic">
              An ultra high frequency smart card designed for long distance reading.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-3 text-black dark:text-blue-400 uppercase transition-colors">Product Description:</h2>
              <div className="text-[17px] leading-relaxed text-slate-700 dark:text-gray-300 space-y-4 mb-6">
                <p>
                  uTrust UHF Credentials provide multiple options for durable, interoperable radio frequency identification (RFID) cards. Ultra high frequency (UHF) technology (operating in the 860 – 960 MHz frequency range) delivers outstanding performance for long-distance, multiple, reliable readings of credentials, including cards and tags. Leveraging the short wavelength of UHF technology, they are the ideal solution for reading people or items from a significant distance, more than 18 – 21 feet.
                </p>
              </div>

              <h2 className="font-bold text-xl mb-3 text-black dark:text-blue-400 uppercase transition-colors">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] text-gray-800 dark:text-gray-300 space-y-1 mb-8">
                {productFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            {/* Technical Specifications Table */}
            <h2 className="font-bold text-xl mb-4 text-black dark:text-blue-400 uppercase transition-colors">Technical Specification:</h2>
            <div className="border border-gray-500 dark:border-gray-700 rounded-sm overflow-x-auto mb-8">
              <table className="w-full text-[15px] text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800 font-bold uppercase text-black dark:text-blue-400">
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-left w-1/4"></th>
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-left">ISO PVC UHF LF Card</th>
                    <th className="border-b border-gray-500 dark:border-gray-700 p-2 text-left">ISO PVC UHF DESFire EV2 2K Card</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">RFID Interface</td>
                    <td colSpan="2" className="p-2">
                      • Broadband support for contactless frequency range around the world (860 – 960 MHz)<br/>
                      • Programmable with different PACS formats (e.g., 26, 35, 37 bits, etc.)
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">UHF Chip and Memory</td>
                    <td colSpan="2" className="p-2">
                      • Alien H3 (other chips may also be used)<br/>
                      • 800 bits of memory, 96 EPC bits extensible to 480 bits, 512 user bits, 64-bit unique TID (unalterable serial number)<br/>
                      • 32-bit access and 32-bit kill passwords<br/>
                      • User memory can be block perma-locked or read-password protected in 64 bit blocks
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Credential Form Factor and Dimensions</td>
                    <td colSpan="2" className="p-2">
                      • ISO Card (ID1 Format) and ISO7810 format<br/>
                      • 3.37 x 2.125 x 0.030 in (85.6 x 54 x 0.84 mm)<br/>
                      • Thickness 30 mm +/- 3 mm
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Weight</td>
                    <td colSpan="2" className="p-2">0.15 oz (4.3 g)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Read Range (with UHF Reader 2 Watts)</td>
                    <td colSpan="2" className="p-2">18 – 21 ft (6 – 7 meters)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Slot Punch</td>
                    <td colSpan="2" className="p-2">Not supported</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Operating Temperatures</td>
                    <td colSpan="2" className="p-2">-50° to 160° F (-45° to 70° C)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Material</td>
                    <td colSpan="2" className="p-2">PVC with quality surface for use with most card printers on the market</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Options</td>
                    <td colSpan="2" className="p-2">
                      • Magnetic stripe three tracks (HICO123)<br/>
                      • Black, pre-printing CMYK, or Pantone colors<br/>
                      • Special encoding available on demand for compatibility with UHF readers
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">LF/HF Specifics</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 break-all">
                      LF 125 KHz with capabilities identical to uTrust Proximity Credentials
                    </td>
                    <td className="p-2 break-all">
                      • HF 13.56 MHz with NXP DESFire EV2 2K (non-programmed by default)<br/>
                      • Configuration with uTrust TS Card encoding on DESFire (available by request)
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Part Numbers</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 break-all">99-017-UHF-LF</td>
                    <td className="p-2 break-all">99-090-UHF-HF-DFEV2-2K</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Supported UHF Readers</td>
                    <td colSpan="2" className="p-2">
                      • Wiegand interface (i.e., NEDAP uPASS Access Reader, IDTek RF900, FEIG ID LRU500i-BD-FCC UHF Compact Reader with integrated antenna, and TRES Reader Family 9v00)<br/>
                      • Other brands (i.e., TRES Reader Family 900)<br/>
                      • ASReader for iOS and Android mobile devices (i.e., ASR-0230D (FCC/US) 902.75~927.25 MHz) or desktop readers (i.e., ASR-P30U)<br/>
                      • Thinkify (i.e., TR-265 USB Desktop RFID Reader)
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Lifetime Warranty</td>
                    <td colSpan="2" className="p-2">For material defects and workmanship under normal wear and tear</td>
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

export default UfhCredentials;