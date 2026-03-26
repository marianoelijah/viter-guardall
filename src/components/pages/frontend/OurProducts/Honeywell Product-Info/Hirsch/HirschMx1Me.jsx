import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';

const HirschMx1Me = () => {
  // Structured technical data matching the detailed specification table
  const technicalData = [
    { type: 'header', label: 'COMMUNICATIONS' },
    { label: 'Serial Interface Ports', value: 'Controller to controller: RS-485 multi-drop protocol (X-NET2, X-NET3)• Up to 4,000 ft (1,200 m) with 22 gauge, 2 pair, stranded, twisted, and shielded' },
    { label: 'OSDP Protocol', value: 'Controller to reader: Buzzer, LED, and optional secure OSDP• Single port for entry and exit readers• Up to 4,000 ft (1,200 m) with 18 gauge, 2 pair, stranded, twisted, and shielded' },
    { label: 'Wiegand Protocol', value: 'Onboard Wiegand: Industry standard Wiegand• Reader ports: 2 (1 entry port and 1 exit port)• Maximum wiring run: 500 ft (150 m) with 18 gauge, 2 pair, stranded, twisted, overall shield' },
    
    { type: 'header', label: 'FIRMWARE' },
    { label: 'Command and Control Module (CCMx)', value: 'Flash upgradeable• Time zones: 150+ Door groups: 128• Control zones: 256• Holiday schedules: 4 (366 days x 2 years)• Daylight savings time adjustment' },
    { label: 'SNIB3', value: 'Flash upgradeable with signed and encrypted firmware• FIPS AES 256 encryption• TLS 1.2 Encryption (Requires Velocity 3.7 SP2 or later)• 10/100/1000 Ethernet (TCP/IPv4 or v6)' },
    
    { type: 'header', label: 'MEMORY' },
    { label: 'Buffers', value: 'Standard: 1,500 events and 1,500 alarms' },
    { label: 'Credentials', value: 'Up to 500,000' },
    
    { type: 'header', label: 'PHYSICAL' },
    { label: 'Security', value: 'Cover opening tamper switch' },
    { label: 'Dimensions', value: '14 x 14 x 3.5 in' },
    { label: 'Weight', value: '24 lbs (11 kg) w/ battery' },
    
    { type: 'header', label: 'ELECTRICAL' },
    { label: 'Power Supply', value: 'AC INPUT 110 - 200V, 50-60 Hz, fused. Built-in PSU module generates 5A @ 30V DC for the controller and connected devices' },
    { label: 'Door Relay', value: 'Dry 2A at 30V, Form C Wet 250mA @ 24V / 500mA @ 12V' }
  ];

  return (
    <>
    <Header />
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      {/* Product Banner */}
      <header className="bg-[#7f95b8] text-white py-14 px-6 text-center shadow-inner">
        <h1 className="text-3xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          Hirsch Mx-1-ME Controller: High-Security Access Control
        </h1>
      </header>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-12">
        
        {/* Left Column: Product Info & Specs */}
        <main className="lg:col-span-9 bg-gray-200 p-8 rounded shadow-sm">
          <p className="text-[17px] text-gray-800 mb-8 border-l-4 border-[#8ba4cc] pl-4">
            A fully supervised one-door access control with integrated and secure network communication.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-xl mb-3">Product Description:</h2>
            <p className="text-[17px] leading-relaxed text-slate-700">
              With firmware, functionality, and communication protocols compatible with the Identiv DIGI*TRAC and Mx Controllers, 
              the Mx-1-ME seamlessly integrates with existing systems. Designed for use with uTrust TS readers and secure keypads, 
              it adds network edge capability to the Identiv enterprise security management ecosystem.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-bold text-xl mb-3">Product Features:</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 list-disc ml-5 text-[17px] text-gray-800">
              <li>Fully supervised one-door model with integrated communication</li>
              <li>Scalable from a single controller to networked multi-site installations</li>
              <li>Connectivity to OSDP (RS-485) or Wiegand readers</li>
              <li>Integrated network communication with onboard 10/100/1000 Ethernet IP port</li>
              <li>Firmware upgrade via Velocity</li>
              <li>Wet or dry relay hardware setting</li>
            </ul>
          </section>

          {/* Detailed Specifications Table */}
          <section>
            <h2 className="font-bold text-xl mb-4">Technical Specification:</h2>
            <div className="border border-gray-500 rounded-sm overflow-hidden">
              <table className="w-full text-[11px] text-left border-collapse">
                <tbody>
                  {technicalData.map((row, idx) => (
                    row.type === 'header' ? (
                      <tr key={idx} className="bg-gray-100">
                        <th colSpan="2" className="p-2.5 font-bold uppercase tracking-widest text-gray-800 text-[17px] border-b border-gray-500">
                          {row.label}
                        </th>
                      </tr>
                    ) : (
                      <tr key={idx} className="border-b border-gray-200 last:border-0 hover:bg-slate-50/50 transition-colors">
                        <td className="p-3 font-bold w-1/3 border-r text-[17px] text-black border-gray-200 bg-gray-50">{row.label}</td>
                        <td className="p-3 text-gray-800 text-[15px] leading-normal">{row.value}</td>
                      </tr>
                    )
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Tags & Branding */}
         <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                HIRSCH
              </span>
              
              <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                Access Control System
              </span>
            </div>
        </main>

        {/* Right Column: Sidebar */}
        <aside className="lg:col-span-3 space-y-6">
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
    </div>
    <Footer />
    </>
  );
};

export default HirschMx1Me;