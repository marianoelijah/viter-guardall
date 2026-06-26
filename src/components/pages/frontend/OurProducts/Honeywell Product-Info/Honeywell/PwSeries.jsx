import React from 'react';
import { Share2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react'; // Optional for icons
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';


const PwSeries = () => {
  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      {/* Blue Header Section */}
      <header className="bg-[#7f95b8] py-10 px-6 md:px-20 text-white shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center align-middle">
          PW-Series Access Modules
        </h1>
      </header>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row gap-8 ">
        
        {/* Left Column: Descriptions & Tables */}
        <main className="lg:w-3/4 space-y-8 bg-gray-200 p-4 md:p-0 px-5">
          <section className="space-y-4 text-[17px] leading-relaxed px-6 py-8 rounded-xl">
            <p>
              Designed to work without a PC, the PW3000 series is a customizable access control that provides real-time processing for connected I/O interfaces.
            </p>

            <h2 className="font-bold text-black text-lg mt-6">Product Description:</h2>
            <p>
              The PW-Series family of access control modules are controlled by and connected to the intelligent control module, PW5000 or PW6000, through a supervised RS485 bus at 38,400 bps. Hardware interface configuration options are stored in the intelligent control module and may be directly controlled via operator intervention, time schedules, or event-based procedures.
            </p>

            <h2 className="font-bold text-black text-lg mt-6">Product Features:</h2>
            <ul className="list-disc text-black ml-5 space-y-1">
              <li>Modular design fits a wide variety of applications</li>
              <li>User programmable relay outputs allow for specific control needs</li>
              <li>Dedicated cabinet tamper and power monitor inputs</li>
              <li>Supports a wide range of reader technologies including Wiegand, magnetic stripe, proximity, and keypad</li>
              <li>Up to nine modules, power supply and battery can be accommodated by the PW32ENCL1, PW32ENCL2, and PW32ENCL5 enclosure</li>
              <li>Supports multiple reader and card formats for maximum flexibility and security options</li>
              <li>UL 294 / UL 1076 and CUL Listed</li>
            </ul>
          </section>

          {/* Technical Specifications Table */}
          <section className="px-6 py-8">
  <h2 className="font-bold text-xl text-black mb-4">Technical specification:</h2>
  <div className="overflow-x-auto rounded-xl bg-gray-200 p-1"> {/* Subtle border container */}
    <table className="w-full text-left border-collapse border border-black">
      <thead className="bg-gray-300 border-b border-black">
        <tr>
          <th className="p-4 border-r border-black text-black text-[17px] w-1/4 uppercase font-bold">
            Models
          </th>
          <th className="p-4 uppercase text-black text-[17px] font-bold">
            Module Specifications
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-black">
        {/* Row 1 */}
        <tr>
          <td className="p-4 border-r border-black text-black text-[17px] font-bold bg-gray-100 align-top">
            PW-Series Single Reader Module (PW5K1R1)
          </td>
          <td className="p-4 text-[17px] text-black bg-white leading-relaxed">
            <ul className="list-disc ml-5 space-y-1">
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
          <td className="p-4 border-r border-black text-black text-[17px] font-bold bg-gray-100 align-top">
            PW-Series Dual Reader Module (PW6K1R2)
          </td>
          <td className="p-4 text-[17px] text-black bg-white leading-relaxed">
            <ul className="list-disc ml-5 space-y-1">
              <li>2 reader ports – 12 VDC at 50 mA, clock/data or data0/data1</li>
              <li>Keypad multiplexed with card data</li>
              <li>Two-wire or one-wire bi-color LED support</li>
              <li>Buzzer support only with one-wire LED control</li>
              <li>8 supervised, general purpose alarm inputs (6 available with PW5K2ENC1/2)</li>
              <li>2 dedicated alarm inputs for tamper detection and power loss</li>
              <li>2 general purpose output relay, form-C, 5 A 28 VDC</li>
              <li>4 general purpose output relay, form-C, 2 A 28 VDC (2 available with PW5K2ENC1/2)</li>
            </ul>
          </td>
        </tr>
        {/* Row 3 */}
        <tr>
          <td className="p-4 border-r border-black text-black text-[17px] font-bold bg-gray-100 align-top">
            PW-Series Sixteen Input Module (PW6K1IN)
          </td>
          <td className="p-4 text-[17px] text-black bg-white leading-relaxed">
            <ul className="list-disc ml-5 space-y-1">
              <li>2 dedicated alarm inputs for tamper detection and power loss</li>
              <li>16 general purpose inputs with programmable circuit type</li>
              <li>2 general purpose, form-C, 2 A 30 VDC relays (1 available with PW5K2ENC1/2)</li>
            </ul>
          </td>
        </tr>
        {/* Row 4 */}
        <tr>
          <td className="p-4 border-r border-black text-black text-[17px] font-bold bg-gray-100 align-top">
            PW-Series Sixteen Output Module (PW6K1OUT)
          </td>
          <td className="p-4 text-[17px] text-black bg-white leading-relaxed">
            <ul className="list-disc ml-5 space-y-1">
              <li>2 dedicated alarm inputs for tamper detection and power loss</li>
              <li>16 general purpose output relay, form-C, 2 A 28 VDC (12 available with PW5K2ENC1/2)</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
         </section>

          {/* Common Specifications Table */}
          <section className='px-6 py-8 rounded-xl bg-gray-200'>
            <h2 className="font-bold text-xl px-5 text-black mb-2 border">Common Specifications:</h2>
            <div className=" overflow-hidden px-6 text-black">
              <div className="bg-gray-200 p-2 font-bold text-[15px] uppercase border-b border-gray-300">Enclosure Dimensions</div>
              <table className="w-full text-xs text-left divide-y divide-gray-300">
                <thead>
                    <tr className="bg-gray-200 text-black border border-black">
                        <th className="p-4 uppercase text-[17px] font-semibold w-1/3 border-r border-black">Board</th>
                        <th className="p-4 uppercase text-sm font-semibold">9.0″ H x 5.5″ W x 1.0″ D(228.6 mm H x 139.7 mm W x 25.4 mm D)</th>
                    </tr>
                     <tr className="bg-gray-200 text-black border border-black ">
                        <th className="p-4 uppercase text-[17px] font-semibold w-1/3 border-r border-black">PW5K2ENC1:</th>
                        <th className="p-4 uppercase text-sm font-semibold">13.9″ H x 17.0″ W x 9.0″ D(353.0 mm H x 431.8 mm W x 228.6 mm D)</th>
                    </tr>
                     <tr className="bg-gray-200 text-black border border-black">
                        <th className="p-4 uppercase text-[17px] font-semibold w-1/3 border-r border-black">PW5K2ENC2:</th>
                        <th className="p-4 uppercase text-sm font-semibold">3.9″ H x 18.9″ W x 9″ D(353.0 mm H x 480.0 mm W x 228.6 mm D)</th>
                    </tr>
                     <tr className="bg-gray-200 text-black border border-black">
                        <th className="p-4 uppercase text-[17px] font-semibold w-1/3 border-r border-black">PW5K1ENC3:</th>
                        <th className="p-4 uppercase text-[15px] font-semibold">14.0″ H x 16.0″ W x 4.5″ D(355.6 mm H x 406.4 mm W x 114.3 mm D)</th>
                    </tr>
                     <tr className="bg-gray-200 text-black border border-black">
                        <th className="p-4 uppercase text-[17px] font-semibold w-1/3 border-r border-black">PW5K1ENC4:</th>
                        <th className="p-4 uppercase text-[15px] font-semibold">8.375″ H x 7.625″ W x 7.625″ D(21.275 mm H x 19.4 mm W x 19.4 mm D)</th>
                    </tr>
                    <tr className="bg-gray-200 text-black border border-black">
                        <th className="p-4 text-[17px] font-semibold w-1/3 border-r border-black">Communication Features:</th>
                    </tr>
                    <tr className="bg-gray-200 text-black border border-black">
                        <th className="p-4 text-[15px] font-semibold w-1/3 border-r border-black">• RS485 port, 4000’ (1,250m) total bus length</th>
                    </tr>
                     <tr className="bg-gray-200 text-black border border-black">
                        <th className="p-4 text-[15px] font-semibold w-1/3 border-r border-black">• Standard speed is 38,400 bps</th>
                    </tr>
                     <tr className="bg-gray-200 text-black border border-black">
                        <th className="p-4 text-[15px] font-semibold w-1/3 border-r border-black">Environment</th>
                    </tr>
                    <tr className="bg-gray-200 text-black border border-black">
                        <th className="p-4 text-[17px] font-semibold w-1/3 border-r border-black">Temperature</th>
                        <th className="p-4 text-[15px] font-semibold">0 to 70°C operational; -55 to 85°C storage</th>
                    </tr>
                     <tr className="bg-gray-200 text-black border border-black">
                        <th className="p-4 text-[17px] font-semibold w-1/3 border-r border-black">Humidity</th>
                        <th className="p-4 text-[15px] font-semibold">0 to 95% RHNC</th>
                    </tr>
                     <tr className="bg-gray-200 text-black border border-black">
                        <th className="p-4 text-[15px] font-semibold w-1/3 border-r border-black">Wire Requirements:</th>
                    </tr>
                    <tr className="bg-gray-200 text-black border border-black">
                        <th className="p-4 text-[17px] font-semibold w-1/3 border-r border-black">Reader</th>
                        <th className="p-4 text-[15px] font-semibold">24 AWG, 4,000′ (1,200m) max., 2 twisted pairs with shield (120 W, 23 pF, Belden 9842or equiv.)</th>
                    </tr>
                    <tr className="bg-gray-200 text-black border border-black">
                        <th className="p-4 text-[17px] font-semibold w-1/3 border-r border-black">Power</th>
                        <th className="p-4 text-[15px] font-semibold">24 AWG, 25′ (7.6m) max</th>
                    </tr>
                    <tr className="bg-gray-200 text-black border border-black">
                        <th className="p-4 text-[17px] font-semibold w-1/3 border-r border-black">Alarm input</th>
                        <th className="p-4 text-[15px] font-semibold">twisted pair, 30 ohms max</th>
                    </tr>
                </thead>
              </table>
            </div>
          </section>

          {/* Breadcrumbs/Tags */}
          <div className="flex gap-2 text-white font-bold">
            <span className="bg-[#ff5f31] px-2 py-1 mb-5 rounded">Honeywell</span>
            <span className="bg-[#ff5f31] px-2 py-1 mb-5 rounded">Controllers</span>
            <span className="bg-[#ff5f31] px-2 py-1 mb-5 rounded">Access Control System</span>
          </div>

          {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />
            
        </main>

        {/* Right Sidebar */}
        <aside className="lg:w-1/4 space-y-6">
         
             <div className="bg-gray-300 p-6 rounded shadow-sm border border-gray-400">
                <h3 className="font-bold text-black text-xl mb-4 border-b border-black pb-2 uppercase">More By Honeywell</h3>
                <ul className="space-y-4 text-gray-700">
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
                  className="inline-block w-full rounded-xl bg-[#0f3e90] px-6 py-3 text-center text-sm font-semibold tracking-wider text-white transition-colors hover:bg-[#ff5f31] sm:w-auto"
                >
                  CONTACT US TODAY
                </NavLink>
              </div>s
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

export default PwSeries;