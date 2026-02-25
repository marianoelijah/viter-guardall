import React from 'react';

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
    <div className="bg-white min-h-screen font-sans text-[#333]">
      {/* Blue Header Banner */}
      <header className="bg-[#8ba4cc] text-white py-14 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          AEB8 Alarm Expansion Board with 8 Additional Line Model Inputs
        </h1>
      </header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Left Column (8/12 width) */}
          <main className="lg:col-span-8">
            <p className="text-sm text-gray-700 mb-6">
              Used for a variety of security monitoring, this device provides an additional 8 line module inputs per board.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-base mb-2">Product Description:</h2>
              <p className="text-[13px] text-gray-600 leading-relaxed">
                The Alarm Expansion line module inputs are used for a variety of security monitoring functions in an access control application. 
                The AEB8 has four (4) address jumpers, and a range of eight (8) addresses. 
                This addressing scheme enables up to four (4) AEB8s to reside on one controller.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-bold text-base mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-[13px] text-gray-600 space-y-1">
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
              <h2 className="font-bold text-base mb-4">Technical Specification:</h2>
              <div className="border border-gray-400">
                <table className="w-full text-left text-[12px] border-collapse">
                  <tbody>
                    {/* Communications Section */}
                    <tr className="bg-gray-200">
                      <th colSpan="2" className="p-2 border-b border-gray-400 font-bold uppercase tracking-wide">Communications</th>
                    </tr>
                    {technicalSpecs.communications.map((spec, i) => (
                      <tr key={`comm-${i}`} className="border-b border-gray-400">
                        <td className="p-2 border-r border-gray-400 font-bold w-1/3 bg-gray-50">{spec.label}</td>
                        <td className="p-2 text-gray-600">{spec.value}</td>
                      </tr>
                    ))}

                    {/* Physical Section */}
                    <tr className="bg-gray-200">
                      <th colSpan="2" className="p-2 border-b border-gray-400 font-bold uppercase tracking-wide">Physical</th>
                    </tr>
                    {technicalSpecs.physical.map((spec, i) => (
                      <tr key={`phys-${i}`} className="border-b border-gray-400 last:border-b-0">
                        <td className="p-2 border-r border-gray-400 font-bold w-1/3 bg-gray-50">{spec.label}</td>
                        <td className="p-2 text-gray-600">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Footer Tags & Share */}
            <div className="mt-12">
              <div className="flex gap-2 mb-8">
                <span className="bg-[#ff6b35] text-white text-[10px] px-2 py-1 font-bold uppercase">Hirsch</span>
                <span className="bg-[#ff6b35] text-white text-[10px] px-2 py-1 font-bold uppercase">Access Control System</span>
              </div>
              <div className="flex items-center gap-4 py-4 border-t border-gray-200">
                <span className="text-gray-500 text-xs italic">Share:</span>
                <div className="flex gap-1.5">
                  {/* Mock Social Icons */}
                  {[0,1,2,3,4].map((i) => (
                    <div key={i} className="w-7 h-7 bg-[#2b5495] flex items-center justify-center rounded-sm">
                      <div className="w-3 h-3 bg-white opacity-80 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>

          {/* Sidebar (4/12 width) */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-gray-50 p-6 border-l border-gray-200">
              <h3 className="text-xs font-bold border-b border-gray-300 pb-2 mb-4 uppercase text-gray-500">More By HIRSCH</h3>
              <ul className="text-[11px] space-y-4 text-gray-500">
                <li className="hover:text-blue-800 cursor-pointer transition-colors">Onity DirectKey with Serene</li>
                <li className="hover:text-blue-800 cursor-pointer transition-colors leading-tight italic">MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs</li>
                <li className="hover:text-blue-800 cursor-pointer transition-colors leading-tight">INR 415 256-Channel 12 Bay RAID Backmount Standalone</li>
                <li className="hover:text-blue-800 cursor-pointer transition-colors">GNR 340 100-Channel Tower Standalone</li>
                <li className="hover:text-blue-800 cursor-pointer transition-colors italic">ENR 130 16-Channel Desktop Standalone NVR- No HDD Included</li>
                <li className="hover:text-blue-800 cursor-pointer transition-colors">Z86 Outdoor Network Dome Camera with Night Vision</li>
              </ul>
            </div>

            {/* Blue CTA Card */}
            <div className="bg-[#1e4484] text-white p-8 rounded-sm shadow-xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 leading-tight">Secure Your Piece Of Mind Today</h3>
                <p className="text-xs mb-8 opacity-90 leading-relaxed">
                  Contact Guard-All now for a customized security solution that protects what matters most.
                </p>
                <button className="w-full border-2 border-white/40 hover:border-white py-2.5 text-[11px] font-bold uppercase tracking-widest transition-all">
                  Contact Us Today
                </button>
              </div>
              {/* Subtle background image effect */}
              <div className="absolute top-0 right-0 w-full h-full opacity-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400')] bg-cover mix-blend-overlay"></div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default AlarmExpansion;