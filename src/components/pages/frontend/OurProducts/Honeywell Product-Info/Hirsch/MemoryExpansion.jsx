import React from 'react';

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
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#8ba4cc] text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          MEB/CB Memory Expansion Board/Code Buffering Board
        </h1>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-white shadow-lg my-10 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Left Column: Product Info */}
          <div className="lg:col-span-3">
            <p className="text-gray-700 italic mb-6">
              Helps expand the memory capacity of controllers.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-lg mb-2">Product Description:</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Identiv's MEB/CB Boards bring an option for expanded memory to the Hirsch PACS offering. 
                The MEB/CB64 supports up to 64,000 user records, expands the alarm and event buffers, or provides a combination of both records and buffers.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-lg mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
                <li>Allows for additional users and/or events and alarm codes to be stored on Hirsch Controllers</li>
                <li>Add memory to Hirsch Mx series controllers with little effort or configuration</li>
              </ul>
            </section>

            {/* Technical Specifications Table */}
            <section>
              <h2 className="font-bold text-lg mb-4">Technical Specification:</h2>
              <div className="overflow-x-auto border border-gray-300">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-gray-200">
                      <th colSpan="2" className="p-2 border-b border-gray-300 font-bold uppercase tracking-wider">PHYSICAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specs.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-3 border-b border-r border-gray-300 font-bold w-1/3 text-gray-700">
                          {spec.label}
                        </td>
                        <td className="p-3 border-b border-gray-300 text-gray-600">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* Tags & Footer Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
               <span className="bg-[#ff6b35] text-white text-[10px] px-2 py-1 rounded font-bold uppercase">HIRSCH</span>
               <span className="bg-[#ff6b35] text-white text-[10px] px-2 py-1 rounded font-bold uppercase">Access Control System</span>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 flex items-center gap-4">
              <span className="text-gray-500 text-xs font-medium italic">Share:</span>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-6 h-6 bg-[#1e4484] rounded-sm cursor-pointer hover:opacity-80 transition-opacity"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 p-6 border-l-2 border-gray-100">
              <h3 className="text-xs font-bold border-b border-gray-200 pb-2 mb-4 uppercase tracking-wider text-gray-400">More By HIRSCH</h3>
              <ul className="text-[11px] space-y-3 text-gray-500 leading-tight">
                <li className="hover:text-[#1e4484] cursor-pointer">Onity DirectKey with Serene</li>
                <li className="hover:text-[#1e4484] cursor-pointer font-medium italic">MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs</li>
                <li className="hover:text-[#1e4484] cursor-pointer">INR 415 256-Channel 12 Bay RAID Rackmount Standalone</li>
                <li className="hover:text-[#1e4484] cursor-pointer">GNR 340 100-Channel Tower Standalone</li>
                <li className="hover:text-[#1e4484] cursor-pointer font-medium italic">ENR 130 16-Channel Desktop Standalone NVR - No HDD Included</li>
                <li className="hover:text-[#1e4484] cursor-pointer">Z86 Outdoor Network Dome Camera with Night Vision</li>
              </ul>
            </div>

            {/* CTA Card */}
            <div className="bg-[#1e4484] text-white p-6 rounded-sm shadow-md">
              <h3 className="text-lg font-bold leading-tight mb-3">Secure Your Piece Of Mind Today</h3>
              <p className="text-[10px] mb-6 opacity-80 leading-relaxed">
                Contact Guard-All now for a customized security solution that protects what matters most.
              </p>
              <button className="w-full bg-[#1e4484] border border-white hover:bg-white hover:text-[#1e4484] transition-colors text-white font-bold text-[11px] py-2 px-4 uppercase tracking-wider">
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MemoryExpansion;