import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';



const Pw6101Series = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 px-4">
        
        <div className="max-w-6xl mx-auto bg-gray-300 shadow-xl rounded-lg overflow-hidden border">
          
          {/* Header Section */}
          <div className="bg-[#7f95b8] py-20">
            <div className="container mx-auto px-6">
               <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
              PW6101 Series
            </h1>
            <p className="mt-2 text-xl opacity-90 font-light italic">
              Single Door PoE Intelligent Controller and Reader Module
            </p>
            </div>
          </div>

          <div className="p-6 md:p-10 flex flex-col lg:flex-row gap-12">
            
            {/* Main Content Column */}
            <div className="lg:w-2/3">
              <section className="mb-10">
                <p className="mb-6 text-[15px] text-black leading-relaxed font-medium border-l-4 border-blue-500 pl-4">
                  A high-performance and cost-effective controller-reader module capable of securing single door access; configurable for either Wiegand or OSDP.
                </p>

                <h2 className="font-bold text-xl text-black mb-4 flex items-center">
                   Product Description
                </h2>
                <p className="text-black leading-relaxed mb-8 text-[15px]">
                  The PW6101 series controller and reader module is a high performance, Ethernet ready, cost effective system capable of controlling a single opening. The controller and reader module are configurable for either Wiegand or OSDP. PW6K1ICE is a full featured PoE single door access controller designed for high-end security performance.
                </p>

                <h2 className="font-bold text-xl text-black mb-6">Product Features</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="font-bold text-black text-lg mb-3 uppercase tracking-wide">PW6K1ICE Controller</h3>
                    <ul className="list-disc ml-5 space-y-2 text-black">
                      <li>Powered via PoE or standalone supply</li>
                      <li>Supports IN and OUT readers</li>
                      <li>Door-mount ready enclosure size</li>
                      <li>Up to 32 time zones per panel</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="font-bold text-black text-lg mb-3 uppercase tracking-wide">PW6K1RIE Reader Module</h3>
                    <ul className="list-disc ml-5 space-y-2 text-black">
                      <li>Network powered via PoE</li>
                      <li>Supports one door of I/O</li>
                      <li>Linkable to PW6K1ICE or PW6K1IC</li>
                      <li>Cost-effective expansion</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Technical Specifications Table */}
              <section>
                <h2 className="font-bold mb-6 uppercase text-black text-xl tracking-wider">Technical Specifications</h2>
                <div className="overflow-x-auto rounded-lg border border-black">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="bg-gray-500 text-white">
                        <th className="p-4 uppercase text-[15px] font-semibold w-1/3">Specifications</th>
                        <th className="p-4 uppercase text-[15px] font-semibold">Details</th>
                      </tr>
                    </thead>
                    <tbody className="text-black divide-y divide-gray-200">
                      <tr>
                        <td className="p-4 font-bold bg-gray-50">Power Input</td>
                        <td className="p-4 text-[15px] leading-relaxed">
                          PoE (IEEE 802.3af) or 12 VDC ±10%. <br/>
                          <span className="text-red-600 text-xs italic font-medium mt-1 block">Note: For UL installations, use UL294 listed power source only.</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold bg-gray-50">Power Output</td>
                        <td className="p-4">12 VDC @ 650mA (Reader & AUX)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold bg-gray-50">Inputs/Outputs</td>
                        <td className="p-4">2 Programmable Inputs, 2 Form C Relays (2A)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold bg-gray-50">Access Control</td>
                        <td className="p-4">240,000 Cardholders / 50,000 Events</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold bg-gray-50">Environment</td>
                        <td className="p-4">
                          Op: 0° to 77°C (32° to 171°F) <br/>
                          Humidity: 10-95% RHNC
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold bg-gray-50">Standards</td>
                        <td className="p-4 text-[15px] font-medium">UL294, CE, ROHS, FCC Part 15, NIST Certified</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SHARE SECTION */}
              <SocialShare title="Check out this product!" />
            </div>

            {/* Sidebar Section */}
            <aside className="lg:w-1/3 space-y-8">
            
              <div className="space-y-6">
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
            </div>

              
              {/* CTA CARD */}
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
              </div>
            </div>
                          

              {/* TAGS moved to Sidebar for better balance */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-[#ff5f31] text-white text-sm px-2 py-1 rounded">
                  HONEYWELL
                </span>
                <span className="bg-[#ff5f31] text-white text-sm px-2 py-1 rounded">
                   READERS
                </span>
                <span className="bg-[#ff5f31] text-white text-sm px-2 py-1 rounded">
                  Access Control System
                </span>
              </div>

            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pw6101Series;