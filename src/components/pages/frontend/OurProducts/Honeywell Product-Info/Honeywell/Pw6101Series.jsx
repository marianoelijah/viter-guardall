import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';

const Pw6101Series = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen py-10 px-4 md:px-0">
        {/* Main Wrapper: Constraints the width and provides the white card aesthetic */}
        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200">
          
          {/* Header Section */}
          <header className="bg-[#5C7CB0] text-white p-10 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              PW6101 Series
            </h1>
            <p className="mt-2 text-xl opacity-90 font-light italic">
              Single Door PoE Intelligent Controller and Reader Module
            </p>
          </header>

          <div className="p-6 md:p-10 flex flex-col lg:flex-row gap-12">
            
            {/* Main Content Column */}
            <div className="lg:w-2/3">
              <section className="mb-10">
                <p className="mb-6 text-xl text-gray-700 leading-relaxed font-medium border-l-4 border-blue-500 pl-4">
                  A high-performance and cost-effective controller-reader module capable of securing single door access; configurable for either Wiegand or OSDP.
                </p>

                <h2 className="font-bold text-2xl text-gray-900 mb-4 flex items-center">
                   Product Description
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  The PW6101 series controller and reader module is a high performance, Ethernet ready, cost effective system capable of controlling a single opening. The controller and reader module are configurable for either Wiegand or OSDP. PW6K1ICE is a full featured PoE single door access controller designed for high-end security performance.
                </p>

                <h2 className="font-bold text-2xl text-gray-900 mb-6">Product Features</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="font-bold text-[#5C7CB0] text-lg mb-3 uppercase tracking-wide">PW6K1ICE Controller</h3>
                    <ul className="list-disc ml-5 space-y-2 text-gray-700">
                      <li>Powered via PoE or standalone supply</li>
                      <li>Supports IN and OUT readers</li>
                      <li>Door-mount ready enclosure size</li>
                      <li>Up to 32 time zones per panel</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="font-bold text-[#5C7CB0] text-lg mb-3 uppercase tracking-wide">PW6K1RIE Reader Module</h3>
                    <ul className="list-disc ml-5 space-y-2 text-gray-700">
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
                <h2 className="font-bold mb-6 uppercase text-gray-900 text-xl tracking-wider">Technical Specifications</h2>
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="bg-gray-800 text-white">
                        <th className="p-4 uppercase text-sm font-semibold w-1/3">Specifications</th>
                        <th className="p-4 uppercase text-sm font-semibold">Details</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 divide-y divide-gray-200">
                      <tr>
                        <td className="p-4 font-bold bg-gray-50">Power Input</td>
                        <td className="p-4 text-sm leading-relaxed">
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
                        <td className="p-4 text-sm font-medium">UL294, CE, ROHS, FCC Part 15, NIST Certified</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>

            {/* Sidebar Section */}
            <aside className="lg:w-1/3 space-y-8">
              <div className="bg-white p-6 border rounded-xl shadow-sm">
                <h4 className="font-bold text-sm mb-4 border-b pb-2 text-gray-400 uppercase tracking-widest">More By HONEYWELL</h4>
                <ul className="space-y-4">
                  {['Unity Directory with Serene', 'MAD-401/402 Modules', 'INR 415 256-Channel RAID', 'GNR 340 Tower Standalone', 'Z86 Outdoor Network Camera'].map((item, idx) => (
                    <li key={idx} className="group flex items-start cursor-pointer">
                      <span className="text-blue-500 mr-2 group-hover:translate-x-1 transition-transform">→</span>
                      <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">{item}</span>
                    </li>
                  ))}
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
                  <p className="text-blue-100 mb-6 text-sm">
                    Contact Guard-All now for a customized security solution that protects what matters most.
                  </p>
                  <button className="bg-white text-blue-700 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-md uppercase tracking-wider text-sm">
                    Contact Us Today
                  </button>
                </div>
              </div>

              {/* TAGS moved to Sidebar for better balance */}
              <div className="flex flex-wrap gap-2 pt-4">
                {['HONEYWELL', 'READERS', 'ACCESS CONTROL'].map(tag => (
                   <span key={tag} className="bg-gray-100 text-gray-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter border border-gray-200">
                    {tag}
                  </span>
                ))}
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