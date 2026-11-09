import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const MemoryExpansion = () => {
  const specs = [
    { label: "Alarm", value: "Physical tamper on panel enclosure" },
    { label: "Dimensions", value: "6.00 x 4.05 x .38 in (15.24 x 10.3 x .95 cm)" },
    { label: "Shipping Weight", value: "1 lb (0.45 kg)" },
    { label: "Operating Temperature Range", value: "32° to 140°F (0° to 60°C)" },
    { label: "Relative Humidity", value: "0 to 90%, non-condensing" },
    { label: "Listings and Approvals", value: "UL-294, UL-1076, CE" },
  ];

  return (
    <>
      <Header />
      <div className="bg-gray-200 dark:bg-[#121214] min-h-screen font-sans text-slate-800 dark:text-gray-200 transition-colors duration-300">
        {/* Header Banner */}
        <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-12 px-6 text-center transition-colors duration-300">
          <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
            MEB / CB Memory Expansion Board / Code Buffering Board
          </h1>
        </header>

        {/* Main Content Container */}
        <main className="max-w-6xl mx-auto bg-gray-100 dark:bg-[#1e1e22] shadow-lg my-10 p-8 md:p-12 rounded-sm border border-transparent dark:border-gray-800 transition-colors duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Left Column: Product Info */}
            <div className="lg:col-span-3">
              <p className="text-gray-800 dark:text-gray-300 text-[17px] mb-6 font-medium">
                Helps expand the memory capacity of controllers.
              </p>

              <section className="mb-8">
                <h2 className="font-bold text-xl mb-2 text-black dark:text-blue-400 transition-colors">Product Description:</h2>
                <p className="text-gray-800 dark:text-gray-300 text-[17px] leading-relaxed">
                  Identiv's MEB/CB Boards bring an option for expanded memory to the Hirsch PACS offering. 
                  The MEB/CB64 supports up to 64,000 user records, expands the alarm and event buffers, or provides a combination of both records and buffers.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-bold text-xl mb-2 text-black dark:text-blue-400 transition-colors">Product Features:</h2>
                <ul className="list-disc ml-5 text-gray-800 dark:text-gray-300 text-[17px] space-y-1">
                  <li>Allows for additional users and/or events and alarm codes to be stored on Hirsch Controllers</li>
                  <li>Add memory to Hirsch Mx series controllers with little effort or configuration</li>
                </ul>
              </section>

              {/* Technical Specifications Table */}
              <section>
                <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-4 transition-colors">Technical Specification:</h2>
                <div className="overflow-x-auto border border-gray-500 dark:border-gray-700 rounded-sm">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-gray-200 dark:bg-gray-800">
                        <th colSpan="2" className="p-2 border-b border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-blue-400 uppercase tracking-wider">
                          PHYSICAL
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {specs.map((spec, index) => (
                        <tr 
                          key={index} 
                          className={index % 2 === 0 ? 'bg-white dark:bg-[#1e1e22]' : 'bg-gray-50 dark:bg-gray-800/40'}
                        >
                          <td className="p-3 border-b border-r border-gray-500 dark:border-gray-700 text-[15px] font-bold w-1/3 text-gray-700 dark:text-gray-200 bg-gray-50/50 dark:bg-gray-800/80">
                            {spec.label}
                          </td>
                          <td className="p-3 border-b border-gray-500 dark:border-gray-700 text-[15px] text-gray-600 dark:text-gray-300">
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
                <span className="bg-[#ff5f31] text-white px-2 py-1 rounded shadow-sm font-medium text-sm">
                  HIRSCH
                </span>
                
                <span className="bg-[#ff5f31] text-white px-2 py-1 rounded shadow-sm font-medium text-sm">
                  Access Control System
                </span>
              </div>

              {/* SHARE SECTION */}
              <SocialShare title="Check out this product!" />

            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-1 space-y-8">
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
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default MemoryExpansion;