import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const Snib3 = () => {
  const specs = [
    { label: "Encrypted Communication Options", value: "• TLS v1.2 (FIPS 140-2)• AES 256 (FIPS 140-2)• AES 128 (FIPS 197)" },
    { label: "Communication Options", value: "• 10/100/1000 Base-T Ethernet• IPv4 addressing• IPV6 addressing" },
    { label: "FICAM", value: "• GSA APL Approved• Card Auth, PIV Auth, and PIV Auth + Biometric reader support" },
    { label: "Globalization/ Gateway", value: "• SNIB3 master with downstream SNIB3 and SNIB2- All SNIB3s are required for TLS v1.2• Anti-passback• Occupancy counting• Limit/Day Usage• Absentee tracking• If/Then Programming" },
    { label: "Communications", value: "• Serial Interface ports:RS-485: Multi-drop up to 16 controllers maximum (without NET*MUX4)RS-485 XNET2/3 baud rate: 9600, 38.4K, 57.6K, 115.2KRS-485: 4000 ft (1220 m) to the last controller on a cable run with 22 gauge, two-pair, stranded, twisted overall shield. • Ethernet Ports:TCP/IP 10/100BASE-T (SNIB2)TCP/IP 10/100/1000BASE-T (SNIB3)" },
  ];

  return (
    <>
      <Header />
      <div className="bg-slate-50 dark:bg-[#121214] min-h-screen font-sans text-slate-900 dark:text-gray-200 transition-colors duration-300 pb-12">
        {/* Header Banner */}
        <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-6 text-center shadow-inner transition-colors duration-300">
          <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
            SNIB3 Secure Network Interface Board
          </h1>
        </header>

        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-12">
          
          {/* Main Content Area */}
          <main className="lg:col-span-9 bg-gray-200 dark:bg-[#1e1e22] p-8 rounded shadow-sm border border-transparent dark:border-gray-800 transition-colors duration-300">
            <p className="text-[17px] text-gray-800 dark:text-gray-300 mb-8 border-l-4 border-[#8ba4cc] dark:border-blue-500 pl-4 font-medium italic">
              A leading edge communication device that provides TCP/IP version 6, Gigabit Ethernet, and AES 256 bit encryption.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-3 text-black dark:text-blue-400 uppercase transition-colors">Product Description:</h2>
              <p className="text-[17px] leading-relaxed text-slate-700 dark:text-gray-300">
                The SNIB3 is a leading edge communication device that provides IPv4 or IPv6, Gigabit Ethernet, and FIPS 140-2 certified cryptography, including AES 256 bit encryption. If you already have controllers from Identiv, the SNIB3 is a drop-in replacement for the SNIB2 and SNIB communications boards, allowing for easy upgrades.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl mb-3 text-black dark:text-blue-400 uppercase transition-colors">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] text-gray-800 dark:text-gray-300 space-y-1 mb-8">
                <li>Advanced Communication: IPv4 or IPv6, Gigabit Ethernet, FIPS 140-2, AES 256 bit encryption, TLS 1.2</li>
                <li>Easy Upgrades: Simply drop into an installation</li>
                <li>Upgraded Functionality: Anti-Passback, Occupancy Counting, Limit/Day Usage, Absentee Tracking, Up to 500,000 Credentials</li>
                <li>FICAM Support: GSA APL Approved, Supports Card Auth, PIV Auth, and PIV Auth + Biometric</li>
              </ul>
            </section>

            {/* Technical Specifications Table */}
            <h2 className="font-bold text-xl mb-4 text-black dark:text-blue-400 uppercase transition-colors">Technical Specification:</h2>
            <div className="border border-gray-500 dark:border-gray-700 rounded-sm overflow-x-auto mb-8">
              <table className="w-full text-[15px] text-left border-collapse">
                <tbody className="text-gray-800 dark:text-gray-300">
                  {specs.map((spec, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-gray-200 dark:border-gray-700/60 last:border-0 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors"
                    >
                      <td className="p-3 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200 w-1/3">
                        {spec.label}
                      </td>
                      <td className="p-3">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#ff5f31] text-white text-sm px-2 py-1 rounded shadow-sm font-medium">HIRSCH</span>
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

export default Snib3;