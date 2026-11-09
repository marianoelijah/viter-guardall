import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';

const TsCards = () => {
  const productFeatures = [
    "Priced significantly below equivalent competitive HF and LF offerings",
    "Even the most sophisticated uTrust TS Card is less expensive that a standard proximity card from a 3rd party supplier",
    "Versatile platform transitions seamlessly to certified certificate-based validation systems",
    "Based on industry-standard MIFARE DESFire EV1/EV2 technology (evaluated to Common Criteria EAL4+ or higher), provides a high level of security assurance",
    "Can be programmed with a variety of different card data formats to match existing infrastructure, including 26, 35, 37, and 48 bit, with others available on request",
    "Migration cards incorporate 125 kHz proximity technology (ensuring compatibility with existing readers), are available with different card number programming between the HF and LF interface, and can support 26-bit encoding on the LF interface",
  ];

  return (
    <>
      <Header />
      <div className="bg-slate-50 dark:bg-[#121214] min-h-screen font-sans text-slate-900 dark:text-gray-200 transition-colors duration-300 pb-12">
        {/* Blue Header Banner */}
        <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-6 text-center shadow-inner transition-colors duration-300">
          <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
            uTrust TS Cards
          </h1>
        </header>

        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-12">
          
          {/* Main Content Area */}
          <main className="lg:col-span-9 bg-gray-200 dark:bg-[#1e1e22] p-8 rounded shadow-sm border border-transparent dark:border-gray-800 transition-colors duration-300">
            <p className="text-[17px] text-gray-800 dark:text-gray-300 mb-8 border-l-4 border-[#8ba4cc] dark:border-blue-500 pl-4 font-medium italic">
              A high-frequency smart card designed for contactless access to offices and similar properties.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-3 text-black dark:text-blue-400 uppercase transition-colors">Product Description:</h2>
              <div className="text-[17px] leading-relaxed text-slate-700 dark:text-gray-300 space-y-4 mb-6">
                <p>
                  Identiv’s uTrust TS Cards are modern, secure credentials for physical access control, based on NXP® ‘s MIFARE DESFire high-frequency (HF) 13.56 MHz technology, and are compatible with 125 kHz LF proximity card systems. Standards-based card technology (MIFARE DESFire EV1 or EV2), combined with a published encoding profile, enables easy integration into third-party products (e.g., other OEM reader products, printers, etc.). uTrust TS Cards may be used with the uTrust TS Universal Enroller, an integrated enrollment reader that simplifies the daily process of enrolling new cards. uTrust TS Cards come with a limited lifetime warranty against material defects and workmanship.
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
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-left">
                      uTrust TS Standard 256B ISO Card
                      <br/>
                      uTrust TS Standard 2K/4K/8K ISO Card
                    </th>
                    <th className="border-b border-gray-500 dark:border-gray-700 p-2 text-left">
                      uTrust TS Migration 256B Plus Prox ISO Card
                      <br/>
                      uTrust TS Migration 2K/4K/8K Plus Prox ISO Card
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Supported Application</td>
                    <td colSpan="2" className="p-2 text-center">Physical Access Control</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">RFID Interface</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700">13.56 MHz only (HF, ISO/IEC 14443A)</td>
                    <td className="p-2">13.56 MHz (HF, ISO/IEC 14443A) and 125 KHz (LF)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Chip Technology</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700">NXP MIFARE DESFire EV1 256B or EV2 2K/4K or 8K Bytes</td>
                    <td className="p-2">NXP MIFARE DESFire EV1 256B or EV2 2K/4K or 8K Bytes and Atmel T5577</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Cryptographic Algorithms</td>
                    <td colSpan="2" className="p-2">AES-128 with key diversification and CMAC protection for card commands</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Cryptographic Key Management</td>
                    <td colSpan="2" className="p-2">Identiv Key Set (NextUp Secure) or customer-specified keys (NextUp VIP)*</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Card Format Encoding</td>
                    <td colSpan="2" className="p-2">Managed formats to ensure that uniqueness of numbers is guaranteed. See uTrust TS Card Ordering Guide for details.</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Security Certification</td>
                    <td colSpan="2" className="p-2">Common Criteria EAL4+ for DESFire EV1 and EAL5+ for DESFire EV2</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Credential Form Factor</td>
                    <td colSpan="2" className="p-2">ISO Card (ID1 format), ISO/IEC 7810</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Dimensions</td>
                    <td colSpan="2" className="p-2">-50° to 160° F (-45° to 70° C)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Weight</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700">0.212 oz (6 g)</td>
                    <td className="p-2">0.15 oz (4.3 g)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Read Range**</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700">Up to 1.5 in (38 mm) using the HF interface</td>
                    <td className="p-2">Up to 2.5 in (63.5 mm) using the LF interface</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Slot Punch</td>
                    <td colSpan="2" className="p-2">Vertical or horizontal slot punch marks (punching of the cards can be done by Identiv at extra charge)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Operating Temperature</td>
                    <td colSpan="2" className="p-2">-49 ̊ to 158 ̊ F (-45 ̊ to 70 ̊ C)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Material</td>
                    <td colSpan="2" className="p-2">Durable using composite with a mix of PVC (60%) and PET (40%)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Identiv Part Numbers</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 break-all">5020-SDXXX (XXX is variable based on card configuration ordered)</td>
                    <td className="p-2 break-all">5020-MDXXX (XXX is variable based on card configuration ordered)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Compatible Readers</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700">
                      • Identiv’s uTrust Readers (Advanced, Migration, and ScramblePad)<br/>
                      • uTrust TS Universal Card Enroller<br/>
                      • All ISO 14443 UID readers
                    </td>
                    <td className="p-2">
                      • Identiv’s uTrust Readers (Advanced, Migration, and ScramblePad)<br/>
                      • uTrust TS Universal Card Enroller<br/>
                      • All ISO 14443 UID readers<br/>
                      • All HID proximity compatible 125kHz LF readers
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

export default TsCards;