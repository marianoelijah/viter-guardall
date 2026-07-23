import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';


const MxController = () => {
  // Structured technical data matching the detailed specification table
const technicalData = [
    { type: 'header', label: 'COMMUNICATIONS' },
    { label: 'Serial Interface Ports', value: 'Controller to controller:RS-485 multi-drop protocol (X*NET2/X*NET3)Optically isolated portUp to 4,000 ft (1,200 m) with 22 gauge, 2 pair, stranded, twisted, and shielded\nController to server:10/100 Ethernet (TCP/IP)Encrypted communication' },
    { label: 'MATCH Protocol', value: '24V DC nominal' },
    { label: 'Reader Support', value: 'MATCH2:MATCH protocolKeypad/reader ports: 8 with 16 device addresses (8 entry and 8 exit)Maximum wiring run: 750 ft (230 m) with 22 gauge or 1,800 ft (550 m) with 18 gauge, 2 pair, stranded, twisted, overall shield Onboard Wiegand:Industry standard WiegandKeypad/reader port: 8 using Mx device address 1 – 8Maximum wiring run: 500 ft (150 m) with 18 gauge, 2 pair, stranded, twisted, overall shield' },
    { label: 'Command and Control Module (CCMx)', value: '• Removable and upgradeable• CCM updates all microprocessors (including onboard MATCH)• Time zones: 150• Door groups: 128• Control zones: 256• Holiday schedules: 4 (366 days x 2 years)• Daylight savings time adjustment' },
    { label: 'Public Private Key Processor and SecureDigital Key Vault', value: 'Global platform compatible and secure storage of key material' },
    { label: 'Buffers', value: '• Standard: 1,500 events and 1,500 alarms• MEB/CB128 (reduces users by 20%) or MEB/BE: 20,000 events and 2,000 alarms• If buffer is full, oldest information is discarded first' },
    { label: 'Users', value: '• Standard: 2000 – 4000 (Access Policy Dependent (1))• Memory Expansion Board MEB/CB64: Up to 68,000• Memory Expansion Board MEB/CB128: Up to 132,000' },
    { label: 'Memory Protection Battery', value: '30 days for code, setups, clock, and buffers' },
    { label: 'Security', value: '• Enclosure door tamper switch• Key lock' },
    { label: 'Enclosure', value: 'NEMA type with conduit knockouts and removable door' },
    { label: 'Dimensions', value: '18 x 15.25 x 5.5 in (457 x 387 x 140 mm)' },
    { label: 'Weight', value: '6 x 4.25 x 0.75 in (152 x 108 x 19 mm) and 1.0 lb (0.45 kg)' },
    { label: 'Expansion Boards', value: '6 x 4.25 x 0.75 in (152 x 108 x 19 mm) and 1.0 lb (0.45 kg)' },
    { label: 'Operating Temperature Range', value: '32° to 140°F (0° to 60°C)' }, 
    { label: 'Relative Humidity', value: '0 to 90%, non-condensing' }, 
    { label: 'Keypad/Reader Power (8 Terminals)', value: '• 1.0 Amp at 24VDC each, fused and resettable• 2.9 Amp at 24VDC each• Powers MATCH2' }, 
    { label: 'Wiegand Keypad/Reader (8 Terminals)', value: '• 500 mA at 12VDC each, fused and resettable• 2.0 Amp at 12VDc total• Powers standard readers' },
    { label: 'Power Supply', value: 'AC INPUT 110 - 200V, 50-60 Hz, fused. Built-in PSU module generates 5A @ 30V DC for the controller and connected devices' },
    { label: 'Standby Batteries', value: '7 AH included' },
    { label: 'Door Relay', value: 'Dry 2A at 30V, Form C Wet 250mA @ 24V / 500mA @ 12V' },
    { label: 'Alarm Relay', value: '• Dry 1A at 30V• Wet 750mA at 24V' },
    { label: 'Listings and Approvals', value: '• UL 294: Access Control Systems Units• UL 1076: Proprietary Burglar Alarm Systems• CE and UKCA' },
  ];

  return (
    <>
    <Header />
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      {/* Product Banner */}
      <header className="bg-[#7f95b8] text-white py-14 px-6 text-center shadow-inner">
        <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          Hirsch Mx Controller: High-Security Access Control
        </h1>
      </header>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-12">
        
        {/* Left Column: Product Info & Specs */}
        <main className="lg:col-span-9 bg-gray-200 p-8 rounded shadow-sm">
          <p className="text-[17px] text-gray-800 mb-8 border-l-4 border-[#8ba4cc] pl-4">
           An access control available in 4 and 8-door models. It is designed for use with the Identiv Connected Physical Access Manager (ICPAM).
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-xl mb-3">Product Description:</h2>
            <p className="text-[17px] leading-relaxed text-slate-700">
             Identiv’s Hirsch Mx Controller is available in four (4) and eight (8) door models with each
              door fully supervised. The modular design and the scalable architecture of the controller
               enables an installation to start small and expand as needed, from a single controller
                system to a larger, multi-site enterprise. Mx Controllers are the core of Identiv’s 
                physical access control solutions. These controllers are designed for use with the Identiv
                 Connected Physical Access Manager (ICPAM) solution and uTrust TS Readers. A range of 
                 models and expansion options in the Mx product line provide a variety of access control,
                  high-security alarm monitoring, and relay control outputs.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-bold text-xl mb-3">Product Features:</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 list-disc ml-5 text-[17px] text-gray-800">
              <li>Controls 4 or 8 fully supervised doors with entry and optional exit keypads/readers and is field upgradeable</li>
              <li>Multi-microprocessor architecture with dedicated crypto-processor</li>
              <li>Integrated network communication with onboard Ethernet IP port</li>
              <li>Dedicated alarm relay outputs</li>
              <li>Integrated hardware encryption with enabled devices</li>
              <li>High security supervised alarm inputs</li>
              <li>Configurable relay outputs (door or general purpose in ICPAM)</li>
              <li>Bay for up to 4 expansion boards:</li>
              <li>Memory (up to 132,000 users)</li>
              <li>Relays expansion (maximum 5)</li>
              <li>256 bit encryption and TCP/IP version 6 support for the network communication board</li>
              <li>MATCH protocol, allowing for an added 1,800 ft of wiring from the panel to the MATCH Board, plus entry and exit readers:</li>
              <li>MATCH2 interfaces</li>
              <li>Extended reader cable runs</li>
              <li>Entry/exit readers operate over the same data cable, minimizing installation costs</li>
              <li>MATCH encodes card number data for enhanced security over Wiegand messaging</li>
              <li>Wiegand setup and entry reader connectivity for each door</li>
              <li>Controller peer-to-peer device I/O using RS485</li>
              <li>Available with either Match or Wiegand port</li>
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
                      <tr key={idx} className="bg-gray-200">
                        <th colSpan="2" className="p-2.5 font-bold uppercase tracking-widest text-gray-800 text-[17px] border-b border-gray-500">
                          {row.label}
                        </th>
                      </tr>
                    ) : (
                      <tr key={idx} className="border-b border-gray-800 last:border-0 hover:bg-slate-50/50 transition-colors">
                        <td className="p-3 font-bold w-1/3 border-r text-[17px] text-black border-gray-200 bg-gray-100">{row.label}</td>
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
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                HIRSCH
              </span>
              
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                Access Control System
              </span>
            </div>

             {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />
        </main>

        {/* Right Column: Sidebar */}
        <aside className="lg:col-span-3 space-y-6">
                                 <div className="bg-gray-300 p-6 rounded shadow-sm border border-gray-400">
                                    <h3 className="font-bold text-black text-xl mb-4 border-b border-black pb-2">More By HIRSCH</h3>
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

            {/* Blue CTA Card */}
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
        </aside>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default MxController;