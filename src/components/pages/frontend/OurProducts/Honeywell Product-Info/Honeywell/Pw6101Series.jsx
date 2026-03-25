import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';

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
            </div>

            {/* Sidebar Section */}
            <aside className="lg:w-1/3 space-y-8">
              <div className="bg-gray-200 rounded-xl shadow-sm p-6">
              <h3 className="text-black text-lg font-semibold mb-4">
                More By HONEYWELL
              </h3>

            <ul className="text-xs space-y-4 text-gray-500 transition-colors">
              <li className='cursor-pointer hover:text-[#f08c09]'>Onity DirectKey with Serene</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>INR 415 256-Channel 12 Bay RAID Rackmount Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>GNR 340 100-Channel Tower Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>ENR 130 16-Channel Desktop Standalone NVR - No HDD Included</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>Z86 Outdoor Network Dome Camera with Night Vision</li>
            </ul>
            </div>

              
              {/* CTA CARD */}
              <div
                className="group overflow-hidden rounded-xl relative min-h-[300px] flex items-center shadow-lg"
                style={{
                  background: `linear-gradient(rgba(30, 64, 175, 0.85), rgba(30, 64, 175, 0.85)), url('https://images.unsplash.com/photo-1557597774-9d2739f85a76?q=80&w=800')`, // Placeholder for your image
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="relative z-10 p-8 text-center w-full">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Secure Your Peace Of Mind Today
                  </h3>
                  <p className="text-blue-100 mb-6 text-[15px]">
                    Contact Guard-All now for a customized security solution that protects what matters most.
                  </p>
                  <button className="bg-blue-700 hover:bg-blue-400 text-white font-semibold px-4 py-2 rounded w-full">
                <NavLink to="/contacts" className="w-full h-full block">
                CONTACT US TODAY
                </NavLink>
              </button>
                </div>
              </div>

              {/* TAGS moved to Sidebar for better balance */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                  HONEYWELL
                </span>
                <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                   READERS
                </span>
                <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
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