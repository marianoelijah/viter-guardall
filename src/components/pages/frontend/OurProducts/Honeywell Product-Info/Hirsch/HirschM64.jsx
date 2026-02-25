import React from 'react';

// Shared Layout Component to maintain design consistency across all products
const ProductLayout = ({ title, subtitle, description, features, specs, sidebarItems }) => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans text-slate-800">
      {/* Banner Header */}
      <header className="bg-[#8ba4cc] text-white py-14 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          {title}
        </h1>
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto bg-white shadow-xl my-10 p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Product Info */}
          <div className="lg:col-span-3">
            <p className="text-sm italic text-gray-600 mb-6">{subtitle}</p>

            <section className="mb-8">
              <h2 className="font-bold text-lg mb-2">Product Description:</h2>
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-lg mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>

            {/* Technical Specifications Table */}
            <section>
              <h2 className="font-bold text-lg mb-4">Technical Specification:</h2>
              <div className="border border-gray-300 overflow-hidden">
                <table className="w-full text-left text-xs border-collapse">
                  <tbody>
                    {specs.map((item, idx) => (
                      <React.Fragment key={idx}>
                        {item.type === 'header' ? (
                          <tr className="bg-gray-200">
                            <th colSpan="2" className="p-2 border-b border-gray-300 font-bold uppercase tracking-wider">
                              {item.label}
                            </th>
                          </tr>
                        ) : (
                          <tr className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="p-3 border-b border-r border-gray-300 font-bold w-1/3 text-gray-700 bg-gray-50/50">
                              {item.label}
                            </td>
                            <td className="p-3 border-b border-gray-300 text-gray-600 whitespace-pre-line">
                              {item.value}
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Footer Tags & Socials */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex gap-2 mb-6">
                <span className="bg-[#ff6b35] text-white text-[10px] px-2 py-1 font-bold uppercase">HIRSCH</span>
                <span className="bg-[#ff6b35] text-white text-[10px] px-2 py-1 font-bold uppercase">Access Control System</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-xs italic">Share:</span>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-7 h-7 bg-[#1e4484] rounded-sm flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                      <div className="w-3 h-3 border border-white/50 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 p-6 border-l-2 border-gray-200">
              <h3 className="text-[10px] font-bold border-b pb-2 mb-4 uppercase tracking-widest text-gray-400">More By HIRSCH</h3>
              <ul className="text-[11px] space-y-4 text-gray-500 leading-tight">
                {sidebarItems.map((item, idx) => (
                  <li key={idx} className="hover:text-[#1e4484] cursor-pointer transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1e4484] text-white p-8 rounded-sm shadow-lg">
              <h3 className="text-xl font-bold leading-tight mb-4">Secure Your Piece Of Mind Today</h3>
              <p className="text-[11px] mb-8 opacity-80">
                Contact Guard-All now for a customized security solution that protects what matters most.
              </p>
              <button className="w-full bg-transparent border border-white py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1e4484] transition-all">
                Contact Us Today
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

// Example Usage for the Hirsch M64 Controller
const HirschM64 = () => {
  const data = {
    title: "Hirsch M64 Controller: Standalone Access Control System with ScramblePad",
    subtitle: "Provide a variety of access control, high-security alarm monitoring, relay control outputs, and programmable logic configurations.",
    description: "Identiv's Hirsch M64 Controllers have the same firmware functionality as Hirsch Mx Controllers. Each unit can be a complete standalone system or a distributed controller in a larger, multi-site enterprise system.",
    features: [
      "Controls up to 64 outputs via programmable logic",
      "Modular use of expansion boards",
      "High-security supervised alarm inputs (2% supervision)",
      "Standalone or networked, microprocessor-based general purpose relay outputs",
      "MATCH encryption algorithm eliminates facility codes",
      "Downloadable firmware via flash memory",
      "Printer port and multiple reader technologies"
    ],
    specs: [
      { type: 'header', label: 'Connections' },
      { label: 'Parallel PrinterPort', value: 'Standard' },
      { label: 'Keypad/Reader Port', value: '16 device addresses' },
      { label: 'Wiring', value: '750 ft (160 m) with 22 gauge, 1800 ft (550 m) with 18 gauge.' },
      { type: 'header', label: 'Firmware' },
      { label: 'Command and Control Module (CCM)', value: 'Removable and upgradeable. Time zones: 150+ Control zones: 256. Holidays: Four 366 Day x 2 years.' },
      { type: 'header', label: 'Memory' },
      { label: 'Buffers', value: '1500 events, 1500 alarms standard. 20,000 events, 2,000 alarms with MEB/BE.' },
      { type: 'header', label: 'Electrical' },
      { label: 'Power Supply', value: 'Uninterruptible' },
      { label: 'Control Relays', value: '2 Amp, Form C (MSP-8R requires REB8)' }
    ],
    sidebarItems: [
      "Onity DirectKey with Serene",
      "MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs",
      "INR 415 256-Channel 12 Bay RAID Backmount Standalone",
      "GNR 340 100-Channel Tower Standalone",
      "ENR 130 16-Channel Desktop Standalone NVR- No HDD Included",
      "Z86 Outdoor Network Dome Camera with Night Vision"
    ]
  };

  return <ProductLayout {...data} />;
};

export default HirschM64;