import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';

// Shared Layout Component to maintain design consistency across all products
const ProductLayout = ({ title, subtitle, description, features, specs, sidebarItems }) => {
  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-slate-800">
      {/* Banner Header */}
      <header className="bg-[#7f95b8] text-white py-14 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          {title}
        </h1>
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-xl my-10 p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Product Info */}
          <div className="lg:col-span-3">
            <p className="text-[17px]  text-gray-800 mb-6">{subtitle}</p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
              <p className="text-[17px] text-gray-680 leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] text-gray-680 space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>

            {/* Technical Specifications Table */}
            <section>
              <h2 className="font-bold text-xl text-black mb-4">Technical Specification:</h2>
              <div className="border border-gray-500 overflow-hidden">
                <table className="w-full text-left text-xs border-collapse">
                  <tbody>
                    {specs.map((item, idx) => (
                      <React.Fragment key={idx}>
                        {item.type === 'header' ? (
                          <tr className="bg-gray-200">
                            <th colSpan="2" className="p-2 border-b border-gray-500 text-[15px] text-black font-bold uppercase tracking-wider">
                              {item.label}
                            </th>
                          </tr>
                        ) : (
                          <tr className={idx % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'}>
                            <td className="p-3 border-b border-r border-gray-500 font-bold w-1/3 text-[15px] text-black bg-gray-50/50">
                              {item.label}
                            </td>
                            <td className="p-3 border-b border-gray-500 text-gray-800 whitespace-pre-line text-[15px] hover:bg-slate-50/50 transition-colors">
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
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                HIRSCH
              </span>
              
              <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                Access Control System
              </span>
            </div>

               {/* SHARE SECTION */}
            <div className="mt-8">
              <p className="font-medium text-black mb-3">Share:</p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/facebook.png" alt="Facebook" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/gmail.png" alt="Gmail" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/telegram.png" alt="Telegram" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/viber.png" alt="Viber" className="w-full h-full object-contain p-1" />
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By HIRSCH</h3>
            <ul className="text-xs space-y-4 text-gray-500 transition-colors">
              <li className='cursor-pointer hover:text-[#f08c09]'>Onity DirectKey with Serene</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>INR 415 256-Channel 12 Bay RAID Rackmount Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>GNR 340 100-Channel Tower Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>ENR 130 16-Channel Desktop Standalone NVR - No HDD Included</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>Z86 Outdoor Network Dome Camera with Night Vision</li>
            </ul>
          </div>

            {/* Blue CTA Card */}
             <div
              className="bg-blue-600 text-white p-6 rounded shadow-md overflow-hidden relative min-h-[200px]"
              style={{
                backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(30, 64, 175, 0.8)), url('/src/assets/image/Our Products/quickalert.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="relative z-10 px-4 max-w-3xl">
                 <h3 className="text-xl font-semibold mb-3">
                   Secure Your Piece Of Mind Today
                 </h3>
                 <p className="text-lg mb-4">
                   Contact Guard-All now for a customized security solution
                   that protects what matters most.
                 </p>
              <button className="bg-blue-700 hover:bg-blue-400 text-white font-semibold px-4 py-2 rounded w-full">
                <NavLink to="/contacts" className="w-full h-full block">
                CONTACT US TODAY
                </NavLink>
              </button>
            </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
    <Footer />
    </>
    
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
      { label: 'Command and Programming', value: 'Any address' },
      { label: 'Wiring', value: '750 ft (160 m) with 22 gauge, 1800 ft (550 m) with 18 gauge. 2 pair, stranded, twisted, overall shield' },
      { type: 'header', label: 'Firmware' },
      { label: 'Command and Control Module (CCM)', value: '• Removable and upgradable• Time zones: 150• Control zones: 256• Holidays: Four 366 Day x 2 years• Daylight Savings Time adjustment' },
      { type: 'header', label: 'Memory' },
      { label: 'Buffers', value: '• 1500 events, 1500 alarms standard• 20,000 events, 2,000 alarms with MEB/BE• 20,000 events, 2,000 alarms with MEB/CB (reduces users by 20%)• Oldest discarded first, if full' },
      { label: 'Users', value: '• 4000 standard• 132,000 with MEB/CB128' },
      { label: 'Battery Backup', value: '• 30 days for code, setups, clock, and buffer' },
      { type: 'header', label: 'Electrical' },
      { label: 'Keypad/Reader Power', value: '• 1.0 Amp @24VDC each terminal, fused• MSP-64R: 2.15 Amp @24VDC, 6 terminals total• Powers ScramblePad and MATCH' },
      { label: 'Primary and Standby Power', value: '• 90 – 130VAC, 50/60 Hz, fused• 180 – 260VAC, 50/60 Hz, fused ' },
      { label: 'Power Supply', value: 'Uninterruptible' },
      { label: 'Standby Batteries', value: 'MSP-64R: 7 AH Included' },
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