import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';

const AlarmExpansion = () => {
  // Data structure for the multi-section Technical Specifications table
  const technicalSpecs = {
    communications: [
      { label: "Wiring from Controller", value: "EBIC5" },
      { label: "Supervision", value: "± 2% with MELM 3" },
    ],
    physical: [
      { label: "Alarm", value: "Physical tamper on panel enclosure" },
      { label: "Dimensions", value: "6.85 x 4.05 x .52 in (17.4 x 10.3 x 1.32 cm)" },
      { label: "Shipping Weight", value: "1 lb (0.45 kg)" },
      { label: "Operating Temperature Range", value: "32° to 140°F (0° to 60°C)" },
      { label: "Relative Humidity", value: "0 to 90%, non-condensing" },
      { label: "Listings and Approvals", value: "• UL-294, UL-1076• CE" },
    ]
  };

  return (
    <>
      <Header />
      <div className="bg-gray-200 dark:bg-[#121214] min-h-screen font-sans text-[#333] dark:text-gray-200 transition-colors duration-300">
        {/* Blue Header Banner */}
        <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-6 text-center transition-colors duration-300">
          <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
            AEB8 Alarm Expansion Board with 8 Additional Line Model Inputs
          </h1>
        </header>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Left Column (8/12 width) */}
            <main className="lg:col-span-8 bg-gray-100 dark:bg-[#1e1e22] p-6 md:p-8 rounded-xl border border-transparent dark:border-gray-800 shadow-md transition-colors duration-300">
              <p className="text-[17px] text-gray-800 dark:text-gray-300 mb-6 font-medium transition-colors">
                Used for a variety of security monitoring, this device provides an additional 8 line module inputs per board.
              </p>

              <section className="mb-8">
                <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
                  Product Description:
                </h2>
                <p className="text-[17px] text-gray-800 dark:text-gray-300 leading-relaxed transition-colors">
                  The Alarm Expansion line module inputs are used for a variety of security monitoring functions in an access control application. 
                  The AEB8 has four (4) address jumpers, and a range of eight (8) addresses. 
                  This addressing scheme enables up to four (4) AEB8s to reside on one controller.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
                  Product Features:
                </h2>
                <ul className="list-disc ml-5 text-[17px] text-gray-800 dark:text-gray-300 space-y-1 transition-colors">
                  <li>Up to 32 expansion inputs (intrusion detection, fire doors, windows)</li>
                  <li>Add up to 4 AEB8 per controller</li>
                  <li>Less than two (2) second response time with contact, tamper, motion, and line supervision</li>
                  <li>Use with any Hirsch end-of-line module (MELM 1, 2, or 3)</li>
                  <li>Attach to interior motion detectors, perimeter doors and windows</li>
                  <li>Request to exit</li>
                  <li>Tamper inputs</li>
                </ul>
              </section>

              {/* Technical Specification Table */}
              <section className="mt-10">
                <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-4 transition-colors">
                  Technical Specification:
                </h2>
                <div className="border border-gray-500 dark:border-gray-700 rounded-lg overflow-hidden transition-colors">
                  <table className="w-full text-left text-[12px] border-collapse">
                    <tbody>
                      {/* Communications Section */}
                      <tr className="bg-gray-300 dark:bg-gray-800">
                        <th colSpan="2" className="p-3 border-b border-gray-500 dark:border-gray-700 text-[17px] text-black dark:text-blue-400 font-bold uppercase tracking-wide">
                          Communications
                        </th>
                      </tr>
                      {technicalSpecs.communications.map((spec, i) => (
                        <tr key={`comm-${i}`} className="border-b border-gray-500 dark:border-gray-700">
                          <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                            {spec.label}
                          </td>
                          <td className="p-3 text-gray-800 dark:text-gray-300 text-[15px] bg-white dark:bg-[#1e1e22]">
                            {spec.value}
                          </td>
                        </tr>
                      ))}

                      {/* Physical Section */}
                      <tr className="bg-gray-300 dark:bg-gray-800">
                        <th colSpan="2" className="p-3 border-b border-gray-500 dark:border-gray-700 font-bold uppercase text-[17px] text-black dark:text-blue-400 tracking-wide">
                          Physical
                        </th>
                      </tr>
                      {technicalSpecs.physical.map((spec, i) => (
                        <tr key={`phys-${i}`} className="border-b border-gray-500 dark:border-gray-700 last:border-b-0">
                          <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 bg-gray-200 dark:bg-gray-800/80 text-[17px] text-black dark:text-gray-200">
                            {spec.label}
                          </td>
                          <td className="p-3 text-gray-800 dark:text-gray-300 text-[15px] bg-white dark:bg-[#1e1e22]">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Tags & Social */}
              <div className="flex flex-wrap gap-3 mb-8 mt-10">
                <span className="bg-[#ff5f31] text-white px-2 py-1 rounded shadow-sm">
                  HIRSCH
                </span>
                
                <span className="bg-[#ff5f31] text-white px-2 py-1 rounded shadow-sm">
                  Access Control System
                </span>
              </div>

              {/* SHARE SECTION */}
              <SocialShare title="Check out this product!" />

            </main>

            {/* Sidebar (4/12 width) */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded-xl shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
                <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">
                  More By HIRSCH
                </h3>
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

              {/* Blue CTA Card */}
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
      </div>
      <Footer />
    </>
  );
};

export default AlarmExpansion;