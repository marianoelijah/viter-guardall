import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';




const RelayExpansion = () => {
  // Structured technical data matching the detailed specification table
  const technicalData = [
    { type: 'header', label: 'COMMUNICATIONS' },
    { label: 'Wiring from Controller', value: 'EBIC5' },
    { label: 'Supervision', value: 'RREB is a passive communications board; reader tamper and communication supervision is handled by SNIB3' },
    { label: 'Wiring to Reader', value: 'Two pair, stranded, twisted, overall shield 18 AWG' },
    { label: 'Communication Protocol', value: 'Half-duplex RS-485 plus power' },
    
    { type: 'header', label: 'ELECTRICAL' },
    { label: 'Operating Power', value: '900mA at 28VDC' },
    { label: 'Reader Power', value: '• Eight terminals, two readers maximum per terminal, • 500mA at 12VDC each' },
    
    { type: 'header', label: 'PHYSICAL' },
    { label: 'Alarm', value: 'Physical tamper on panel enclosure' },
    { label: 'Dimensions', value: '6.85 x 4.05 x .52 in (17.4 x 10.3 x 1.32 cm)' },
    { label: 'Shipping Weight', value: '1 lb (0.45 kg)' },
    { label: 'Operating Temperature Range', value: '32° to 140°F (0° to 60°C)' },
    { label: 'Relative Humidity', value: '0 to 90%, non-condensing' },
    { label: 'Listings and Approvals', value: '• UL 294: Access Control Systems Units• UL 1076: Proprietary Burglar Alarm Systems• CE and UKCA' },
    
  ];

  return (
    <>
    <Header />
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      {/* Product Banner */}
      <header className="bg-[#7f95b8] text-white py-14 px-6 text-center shadow-inner">
        <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          RS-485 Relay Expansion Board
        </h1>
      </header>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-12">
        
        {/* Left Column: Product Info & Specs */}
        <main className="lg:col-span-9 bg-gray-200 p-8 rounded shadow-sm">
          <p className="text-[17px] text-gray-800 mb-8 border-l-4 border-[#8ba4cc] pl-4">
           Provides fast, two-way OSDP communication and processing for PIV Certificates.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-xl mb-3">Product Description:</h2>
            <p className="text-[17px] leading-relaxed text-slate-700">
             Identiv’s RS-485 Reader Expansion Board (RREB) is a unique reader communication device that installs onto the expansion cable of Hirsch Mx and DIGI*TRAC Controllers. The RREB makes it possible to have extremely high data rates with up to 16 FICAM PACS PIV smart card readers while using Open Supervised Device Protocol (OSDP).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-bold text-xl mb-3">Product Features:</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 list-disc ml-5 text-[17px] text-gray-800">
              <li>OSDP: Brings OSDP to the Hirsch PACS Platform</li>
              <li>FICAM Compliant: Developed to implement a FICAM-compliant solution simply and with optimal performance.</li>
              <li>Performance: Isolated drivers for each door enables fast processing of credentials at all readers</li>
              <li>Simple:</li>
              <li>Uses EBIC5 ribbon cable, minimizing technician time and training</li>
              <li>Readers can use existing Wiegand wiring</li>
             
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
              <h3 className="font-bold text-black text-xl mb-4 border-b border-black pb-2 uppercase">More By HIRSCH</h3>
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

export default RelayExpansion;