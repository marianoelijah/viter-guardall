import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';

const WristbandProximity = () => {
  const productFeatures = [
    "Includes a two-year warranty for material defects and workmanship",
    "Consistent read range and reliability",
    "Comfortable, light-weight, and hypoallergenic wristbands designed for active environments that require easy access in applications such as physical access control (i.e., attractions and amusement parks) or healthcare (i.e., patient monitoring, tracking, and assisted living facilities)",
    "Applicable to: Physical access, NFC, Games and toys, Electronics, Pharma and healthcare",
    "Built to perform in harsh environments and withstand exposure to the elements, including continuous immersion in water and constant motion",
    "Value-priced RFID credential in a reusable form factor",
    "Universal compatibility with most 125 kHz proximity readers (including Identiv’s uTrust TS Readers)",
    "Data format programmable to match existing infrastructure (i.e., 26 bits, 35 bits, 37 bits, and more available on demand); Refer to “Credentials Ordering Guide” for a complete list of all supported formats"
  ];

  return (
    <>
      <Header />
      <div className="bg-slate-50 dark:bg-[#121214] min-h-screen font-sans text-slate-900 dark:text-gray-200 transition-colors duration-300 pb-12">
        {/* Blue Header Banner */}
        <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-6 text-center shadow-inner transition-colors duration-300">
          <h1 className="text-4xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
            uTrust Wristband Proximity Central
          </h1>
        </header>

        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-12">
          
          {/* Main Content Area */}
          <main className="lg:col-span-9 bg-gray-200 dark:bg-[#1e1e22] p-8 rounded shadow-sm border border-transparent dark:border-gray-800 transition-colors duration-300">
            <p className="text-[17px] text-gray-800 dark:text-gray-300 mb-8 border-l-4 border-[#8ba4cc] dark:border-blue-500 pl-4 font-medium italic">
              Allows for seamless access and management of amusement parks, gyms, and other active facilities.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-3 text-black dark:text-blue-400 uppercase transition-colors">Product Description:</h2>
              <div className="text-[17px] leading-relaxed text-slate-700 dark:text-gray-300 space-y-4 mb-6">
                <p>
                  Identiv’s 125 kHz Wristband Proximity Credential is the perfect access control solution for active environments. The wristband allows for convenient access to facilities, attractions, and services for temporary or long-term use. This credential delivers a seamless experience for managing access in amusement and water parks, summer camps, sport (i.e., student athletics) and fitness centers, and healthcare environments. As it is waterproof, this wristband is the ideal companion product for Identiv credentials, enabling support for additional use cases in many deployments, including physical access control.
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
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-left w-1/4">Operating Frequency</th>
                    <th className="border-b border-gray-500 dark:border-gray-700 p-2 text-left">125 kHz</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Dimensions</td>
                    <td className="p-2">
                      • Standard inner diameter: 70 mm (2.76 in), 60 mm (2.36 in), and 55 mm (2.17 in)<br/>
                      • Semi circle top head size: 25 mm height (0.98 in) and 50 mm long (1.97 in)<br/>
                      • Custom: Other sizes available on demand
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Weight</td>
                    <td className="p-2">14 – 15 g (0.49 – 0.52 oz)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Typical Read Range</td>
                    <td className="p-2">Up to 61 mm (2.4 in)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Transaction Time</td>
                    <td className="p-2">100 ms</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Programming</td>
                    <td className="p-2">All standard PACS formats, including Identiv proprietary formats; By default, programmed number shows on the back of the wristband</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Slot Punch</td>
                    <td className="p-2">None</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Operating Temperature</td>
                    <td className="p-2">-30° to 220°C (-22° to 428°F)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Housing Material</td>
                    <td className="p-2">Silicon rubber (similar to the material of medical gloves)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Part Numbers</td>
                    <td className="p-2">
                      • 4096: White, 70 mm (2.76 in), no logo<br/>
                      • 4096-BLACK-001: Black, 70 mm (2.76 in), no logo<br/>
                      • 4097: White, 60 mm (2.36 in), no logo<br/>
                      • 4097-BLACK-001: Black, 60 mm (2.36 in), no logo<br/>
                      • 4098: White, 55 mm (2.17 in), no logo<br/>
                      • 4098-BLACK-001: Black, 55 mm (2.17 in), no logo<br/>
                      Please contact your Identiv representative for more options
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Color Options</td>
                    <td className="p-2">
                      • Standard: White and black<br/>
                      • Custom (Special Order): Yellow, orange, green, red, or blue
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Minimum Order Quantity</td>
                    <td className="p-2">
                      • Standard: 100 units (each size)<br/>
                      • Custom: 1,000
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Water Resistance</td>
                    <td className="p-2">Internal Protection Rating: IP68, 2 m (6.6 ft) for 24 hours</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Options</td>
                    <td className="p-2">
                      • Screen printing (with logo or text) on top semi-circle head of wristband and/or on the band itself<br/>
                      • Laser engraving (available on demand)<br/>
                      • Alternative RFID chips<br/>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Note: Maximum logo size on semi-circle area is about 20 mm height (0.79 in) x 30 mm long (1.18 in).</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Accreditation</td>
                    <td className="p-2">FDA (Food and Drug Administration) and RoHS</td>
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

export default WristbandProximity;