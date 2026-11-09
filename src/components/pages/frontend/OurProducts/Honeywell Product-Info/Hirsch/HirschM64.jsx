import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';

// Shared Layout Component to maintain design consistency across all products
const ProductLayout = ({ title, subtitle, description, features, specs, sidebarItems }) => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 dark:bg-[#121214] min-h-screen font-sans text-slate-800 dark:text-gray-200 transition-colors duration-300">
        {/* Banner Header */}
        <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-4 text-center transition-colors duration-300">
          <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
            {title}
          </h1>
        </header>

        {/* Content Container */}
        <main className="max-w-6xl mx-auto bg-gray-200 dark:bg-[#1e1e22] shadow-xl my-10 p-6 md:p-12 rounded-sm border border-transparent dark:border-gray-800 transition-colors duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Main Product Info */}
            <div className="lg:col-span-3">
              <p className="text-[17px] text-gray-800 dark:text-gray-300 mb-6 font-medium">{subtitle}</p>

              <section className="mb-8">
                <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Description:</h2>
                <p className="text-[17px] text-gray-800 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {description}
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Features:</h2>
                <ul className="list-disc ml-5 text-[17px] text-gray-800 dark:text-gray-300 space-y-1">
                  {features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </section>

              {/* Technical Specifications Table */}
              <section>
                <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-4 transition-colors">Technical Specification:</h2>
                <div className="border border-gray-500 dark:border-gray-700 overflow-hidden rounded-sm">
                  <table className="w-full text-left text-xs border-collapse">
                    <tbody>
                      {specs.map((item, idx) => (
                        <React.Fragment key={idx}>
                          {item.type === 'header' ? (
                            <tr className="bg-gray-200 dark:bg-gray-800">
                              <th colSpan="2" className="p-2 border-b border-gray-500 dark:border-gray-700 text-[15px] text-black dark:text-blue-400 font-bold uppercase tracking-wider">
                                {item.label}
                              </th>
                            </tr>
                          ) : (
                            <tr className={idx % 2 === 0 ? 'bg-gray-100 dark:bg-[#1e1e22]' : 'bg-gray-50 dark:bg-gray-800/40'}>
                              <td className="p-3 border-b border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-50/50 dark:bg-gray-800/80">
                                {item.label}
                              </td>
                              <td className="p-3 border-b border-gray-500 dark:border-gray-700 text-gray-800 dark:text-gray-300 whitespace-pre-line text-[15px] hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
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
                <span className="bg-[#ff5f31] text-white text-sm px-2 py-1 rounded shadow-sm font-medium">
                  HIRSCH
                </span>
                
                <span className="bg-[#ff5f31] text-white text-sm px-2 py-1 rounded shadow-sm font-medium">
                  Access Control System
                </span>
              </div>

              {/* SHARE SECTION */}
              <SocialShare title="Check out this product!" />

            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
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

              {/* Blue CTA Card */}
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