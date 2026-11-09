import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';

const ScrambleFactor = () => {
  const productFeatures = [
    "Supports comprehensive multi-factor authentication for enhanced security policies",
    "Compatible with OSDP and FICAM modes, continues to provide the industry's fastest credential processing performance",
    "Easily retrofitted into existing Hirsch mounting boxes or wall mounted, ensuring a smooth upgrade path",
    "Requires Hirsch Velocity security management system"
  ];

  return (
    <>
      <Header />
      <div className="bg-slate-50 dark:bg-[#121214] min-h-screen font-sans text-slate-900 dark:text-gray-200 transition-colors duration-300 pb-12">
        {/* Header Banner */}
        <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-6 text-center shadow-inner transition-colors duration-300">
          <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
            Hirsch Scramble Factor: High-Assurance Biometrics and Multi-Factor Authentication Reader
          </h1>
        </header>

        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-12">
          
          {/* Main Content */}
          <main className="lg:col-span-9 bg-gray-200 dark:bg-[#1e1e22] p-8 rounded shadow-sm border border-transparent dark:border-gray-800 transition-colors duration-300">
            <p className="text-[17px] text-gray-800 dark:text-gray-300 mb-8 border-l-4 border-[#8ba4cc] dark:border-blue-500 pl-4 font-medium italic">
              An advanced fingerprint biometrics with LCD touchscreen keypad designed for high-security areas.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-3 text-black dark:text-blue-400 uppercase transition-colors">Product Description:</h2>
              <div className="text-[17px] leading-relaxed text-slate-700 dark:text-gray-300 space-y-4 mb-6">
                <p>
                  ScrambleFactor reimagines secure entry for the federal market with a fingerprint sensor, LCD touchscreen, virtual keypad, and contactless credential modes. The ScrambleFactor enables multiple authentication methods to deliver unparalleled security, speed, and functionality. ScrambleFactor offers federal users up to three-factor authentication suitable for the most secure areas.
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
            <div className="border border-gray-500 dark:border-gray-700 rounded-sm overflow-hidden mb-8">
              <table className="w-full text-[11px] text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800 font-bold text-gray-800 dark:text-blue-400 text-[15px]">
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-left w-1/4"></th>
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-center">SF.3 HF</th>
                    <th className="border-b border-gray-500 dark:border-gray-700 p-2 text-center">SF.3 HF/LF</th>
                  </tr>
                </thead>
                <tbody className="text-[15px] text-gray-800 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-3 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Part Number</td>
                    <td className="p-3 text-center border-r border-gray-500 dark:border-gray-700">8413ABTM000</td>
                    <td className="p-3 text-center">8413ABTM000</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-3 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Keypad</td>
                    <td colSpan="2" className="p-3 text-center">12-character</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-3 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Carrier Frequencies</td>
                    <td className="p-3 text-center border-r border-gray-500 dark:border-gray-700">13.56 MHz</td>
                    <td className="p-3 text-center">13.56 MHz and 125 kHz</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-3 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Biometric</td>
                    <td colSpan="2" className="p-3 text-center">
                      Fingerprint: Optical, FBI certified (FIPS 201, PIV, and Mobile ID FAP 10 compliant) and STQC certified
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-3 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Screen</td>
                    <td colSpan="2" className="p-3 text-center">ANSI INCITS 378-2004 and ISO/IEC 19794-2</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-3 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Environmental Rating</td>
                    <td colSpan="2" className="p-3 text-center">IP55</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-3 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Operating Temp.</td>
                    <td colSpan="2" className="p-3 text-center">-4 to 149°F (-20 to 65°C)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-3 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Mounting Accessories</td>
                    <td colSpan="2" className="p-3 text-center">MB2, MB2S, MB2SL, MB3, MB4, MB5, MB5-S</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-3 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Warranty</td>
                    <td colSpan="2" className="p-3 text-center">2 year limited warranty</td>
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

export default ScrambleFactor;