import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';



const Pro3200 = () => {
  return (
    <>
    <Header />
    <div className="bg-gray-100 dark:bg-[#121214] min-h-screen font-sans text-slate-800 dark:text-gray-200 transition-colors duration-300">
      {/* Blue Header Section */}
      <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-4 text-center transition-colors duration-300">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center align-middle">
            PRO3200 Professional Series Access <br/>
                         Modules 
        </h1>
      </header>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col lg:flex-row gap-8 ">
        
        {/* Left Column: Descriptions & Tables */}
        <main className="lg:w-3/4 lg:col-span-2 max-w-6xl mx-auto bg-gray-200 p-8 shadow-sm dark:bg-[#1e1e22]">
          <section className="space-y-4 text-[15px] leading-relaxed px-6 py-8 rounded-xl">
            <p>
              Designed to work without a PC, the PRO3200 series is a customizable access control that provides real-time processing for connected I/O interfaces.
            </p>

            <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Description:</h2>
            <p>
              The PRO3200 professional series family of access control modules is designed for high density installations. Supporting up to 16 readers per enclosure and 32 readers per intelligent controller along with up to 100,000 card capacity provides a combination of small installation footprint and superior cost per door ratio.
            </p>

            <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Features:</h2>
            <ul className="list-disc ml-5 text-[15px] space-y-1">
              <li>Modular design fits a wide variety of applications</li>
              <li>Up to 9 modules, power-supply and battery can be accommodated by the PRO22ENC1, PRO22ENC2 and PRO22ENC5 (no battery) enclosures</li>
              <li>User programmable relay outputs allow for specific control needs</li>
              <li>User programmable alarm inputs offer flexible system configuration and control</li>
              <li>RS485 communication to all modules</li>
              <li>Analog to digital converter technology provides digital filtering and input conditionings</li>
              <li>Dedicated cabinet tamper and power monitor inputs</li>
              <li>Supports the choice of normally open, normally closed, supervised, and non-supervised circuits</li>
              <li>Supports a wide range of reader technologies including Wiegand, magnetic stripe, proximity, and keypad</li>
              <li>System off-line modes customizable per reader include facility code access, locked (no access),</li>
              <li>Supports multiple reader and card formats for maximum flexibility and security options</li>
              <li>Operating modes include locked, unlocked, facility code, card only, card and PIN, card or PIN and PIN only</li>
              <li>Communication to the host is via either 10/100 Ethernet or RS-232(both are standard)</li>
              <li>Alarm circuit type – normally open, normally closed, non-supervised, supervised (with correct EOL). Meets requirements for UL294 and CUL</li>
              <li>Any combination of 16 I/0 or readers modules may be connected to the PRO32IC RS485 ports. 4,000 ft (1,250 m) total bus length per port</li>
              <li>Supports over 50,000 cards and 50,000 transactions</li>

            </ul>
          </section>

          {/* Technical Specifications Table */}
        <section className="px-6 py-8">
  <h2 className="font-bold text-xl mb-4 text-black dark:text-blue-400 uppercase transition-colors">Technical specification:</h2>
  <div className="border border-gray-500 dark:border-gray-700 rounded-sm overflow-x-auto mb-8">
    <table className="w-full text-[15px] text-left border-collapse">
      <thead className="bg-gray-300 border-b border-black">
        <tr>
          <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
            Models
          </th>
          <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
            Module Specifications
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-black">
        {/* Row 1 */}
        <tr>
          <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
            PW-Series Single Reader Module (PW5K1R1)
          </td>
          <td className="text-[15px] leading-relaxed space-y-4 p-4">
            <ul className="list-disc ml-5 text-[15px] space-y-1">
              <li>1 reader port – 5 VDC or 12 VDC at 150 mA, clock / data or data0 / data1</li>
              <li>Keypad multiplexed with card data</li>
              <li>Two-wire or one-wire bi-color LED support</li>
              <li>Buzzer support only with one-wire LED control</li>
              <li>2 supervised, general purpose alarm inputs with programmable circuit type</li>
              <li>1 dedicated alarm input for tamper detection</li>
              <li>1 general purpose output relay, form-C, 5 A 28 VDC</li>
              <li>1 general purpose output relay, form-C, 1 A 28 VDC</li>
              <li>To be used only with the PW5K1ENC4 tile-mount enclosure</li>
            </ul>
          </td>
        </tr>
        {/* Row 2 */}
        <tr>
          <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
            PW-Series Dual Reader Module (PW6K1R2)
          </td>
          <td className="text-[15px] leading-relaxed space-y-4 p-4">
            <ul className="list-disc ml-5 space-y-2">
              <li>2 reader ports – 12 VDC at 50 mA, clock/data or data0/data1</li>
              <li>Keypad multiplexed with card data</li>
              <li>Two-wire or one-wire bi-color LED support</li>
              <li>Buzzer support only with one-wire LED control</li>
              <li>8 supervised, general purpose alarm inputs (6 available when using PW5K2ENC1/2)</li>
              <li>2 dedicated alarm inputs for tamper detection and power loss</li>
              <li>2 general purpose output relay, form-C, 5 A 28 VDC</li>
              <li>4 general purpose output relay, form-C, 2 A 28 VDC (2 available when using PW5K2ENC1/2)</li>
            </ul>
          </td>
        </tr>
        {/* Row 3 */}
        <tr>
          <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
            PW-Series Sixteen Input Module (PW6K1IN)
          </td>
          <td className="text-[15px] leading-relaxed space-y-4 p-4">
            <ul className="list-disc ml-5 space-y-2">
              <li>2 dedicated alarm inputs for tamper detection and power loss</li>
              <li>16 general purpose inputs with programmable circuit type</li>
              <li>2 general purpose, form-C, 2 A 30 VDC relays (1 available when using PW5K2ENC1/2)</li>
            </ul>
          </td>
        </tr>
        {/* Row 4 */}
        <tr>
          <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
            PW-Series Sixteen Output Module (PW6K1OUT)
          </td>
          <td className="text-[15px] leading-relaxed space-y-4 p-4">
            <ul className="list-disc ml-5 space-y-2">
              <li>2 dedicated alarm inputs for tamper detection and power loss</li>
              <li>16 general purpose output relay, form-C, 2 A 28 VDC (12 available when using PW5K2ENC1/2)</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
         </section>

          {/* Common Specifications Table */}
          <section className='px-6 py-8 rounded-xl bg-gray-200 '>
            <h2 className="font-bold text-xl mb-4 text-black dark:text-blue-400 uppercase transition-colors">Common Specifications:</h2>
            <div className="border border-gray-500 dark:border-gray-700 rounded-sm overflow-x-auto mb-8">
              <div className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-black">
                 Enclosure Dimensions
              </div>
              <table className="w-full text-[15px] text-left border-collapse ">
                <thead>
                    <tr className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">Board</th>
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">9.0″ H x 5.5″ W x 1.0″ D(228.6 mm H x 139.7 mm W x 25.4 mm D)</th>
                    </tr>
                     <tr className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">PW5K2ENC1:</th>
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">13.9″ H x 17.0″ W x 9.0″ D(353.0 mm H x 431.8 mm W x 228.6 mm D)</th>
                    </tr>
                     <tr className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">PW5K2ENC2:</th>
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">3.9″ H x 18.9″ W x 9″ D(353.0 mm H x 480.0 mm W x 228.6 mm D)</th>
                    </tr>
                     <tr className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">PW5K1ENC3:</th>
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">14.0″ H x 16.0″ W x 4.5″ D(355.6 mm H x 406.4 mm W x 114.3 mm D)</th>
                    </tr>
                     <tr className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">PW5K1ENC4:</th>
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">8.375″ H x 7.625″ W x 7.625″ D(21.275 mm H x 19.4 mm W x 19.4 mm D)</th>
                    </tr>
                    <tr className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">Communication Features:</th>
                    </tr>
                    <tr className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">• RS485 port, 4000’ (1,250m) total bus length</th>
                    </tr>
                     <tr className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">• Standard speed is 38,400 bps</th>
                    </tr>
                     <tr className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">Environment</th>
                    </tr>
                    <tr className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">Temperature</th>
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">0 to 70°C operational; -55 to 85°C storage</th>
                    </tr>
                     <tr className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">Humidity</th>
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">0 to 95% RHNC</th>
                    </tr>
                     <tr className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">Wire Requirements:</th>
                    </tr>
                    <tr className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">Reader</th>
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">24 AWG, 4,000′ (1,200m) max., 2 twisted pairs with shield (120 W, 23 pF, Belden 9842or equiv.)</th>
                    </tr>
                    <tr className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">Power</th>
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">24 AWG, 25′ (7.6m) max</th>
                    </tr>
                    <tr className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">Alarm input</th>
                        <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">twisted pair, 30 ohms max</th>
                    </tr>
                </thead>
              </table>
            </div>
          </section>

          {/* Breadcrumbs/Tags */}
          <div className="flex gap-2 text-[15px] text-white font-bold">
            <span className="bg-[#ff5f31] px-2 py-1">Honeywell</span>
            <span className="bg-[#ff5f31] px-2 py-1">Controllers</span>
            <span className="bg-[#ff5f31] px-2 py-1">Access Control System</span>
          </div>

            {/* SHARE SECTION */}
           <SocialShare title="Check out this product!" />

            
        </main>

        {/* Right Sidebar */}
        <aside className="lg:w-1/4 space-y-6">
          
          <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
                <h3 className="font-bold text-black dark:text-blue-400 text-x mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By HONEYWELL</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <NavLink to="/our-products/onity/directkey-with-serene" className='block'>
                  <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>Onity DirectKey with Serene </li>
                  </NavLink>
                  <NavLink to="/our-products/detnov/addressable-sounder" className='block'>
                    <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>MAD-401 and MAD-402 Series Modules</li>
                  </NavLink>
                  <NavLink to="/our-products/acti/bay-raid-backmount-standalone" className='block'>
                    <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>INR 415 256-Channel RAID Standalone</li>
                  </NavLink>
                  <NavLink to="/our-products/acti/channel-tower-strandalone" className='block'>
                    <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>GNR 340 100-Channel Tower NVR</li>
                  </NavLink>
                  <NavLink to="/our-products/acti/bay-raid-backmount-standalone" className='block'>
                  <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>INR 415 256-Channel RAID Standalone</li>
                  </NavLink>
                  <NavLink to="/our-products/acti/channel-tower-strandalone" className='block'>
                    <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>GNR 340 100-Channel Tower NVR</li>
                  </NavLink>
                </ul>
              </div>


          {/* Secure CTA Card */}
          <div 
              className="relative min-h-[240px] overflow-hidden rounded-2xl p-8 text-white shadow-md bg-cover bg-center bg-blend-multiply bg-blue-900/85"
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
                  className="inline-block w-full rounded-xl bg-[#0f3e90] px-2 py-3 text-center text-sm font-semibold tracking-wider text-white transition-colors hover:bg-[#ff5f31] sm:w-auto"
                >
                  CONTACT US TODAY
                </NavLink>
              </div>
            </div>
                     

          {/* Share Section */}
           <SocialShare title="Check out this product!" />
        </aside>
      </div>
    </div>
    <Footer />
    </>
    
  );
};

export default Pro3200;