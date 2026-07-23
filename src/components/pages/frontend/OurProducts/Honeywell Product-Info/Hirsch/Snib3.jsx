import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';



const Snib3 = () => {
  const specs = [
    { label: "Encrypted CommunicationOptions", value: "• TLS v1.2 (FIPS 140-2)• AES 256 (FIPS 140-2)• AES 128 (FIPS 197)" },
    { label: "Communication Options", value: "• 10/100/1000 Base-T Ethernet• IPv4 addressing• IPV6 addressing" },
    { label: "FICAM", value: "• GSA APL Approved• Card Auth, PIV Auth, and PIV Auth + Biometric reader support" },
    { label: "Globalization/ Gateway", value: "• SNIB3 master with downstream SNIB3 and SNIB2- All SNIB3s are required for TLS v1.2• Anti-passback• Occupancy counting• Limit/Day Usage• Absentee tracking• If/Then Programming" },
    { label: "Communications", value: "• Serial Interface ports:RS-485: Multi-drop up to 16 controllers maximum (without NET*MUX4)RS-485 XNET2/3 baud rate: 9600, 38.4K, 57.6K, 115.2KRS-485: 4000 ft (1220 m) to the last controller on a cable run with 22 gauge, two-pair, stranded, twisted overall shield. •  Ethernet Ports:TCP/IP 10/100BASE-T (SNIB2)TCP/IP 10/100/1000BASE-T (SNIB3)" },
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          SNIB3 Secure Network Interface Board
        </h1>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-lg my-10 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Left Column: Product Info */}
          <div className="lg:col-span-3">
            <p className="text-gray-800 text-[17px] mb-6">
             A leading edge communication device that provides TCP/IP version 6, Gigabit Ethernet, and AES 256 bit encryption.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
                The SNIB3 is a leading edge communication device that provides IPv4 or IPv6, Gigabit Ethernet, and FIPS 140-2 certified cryptography, including AES 256 bit encryption. If you already have controllers from Identiv, the SNIB3 is a drop-in replacement for the SNIB2 and SNIB communications boards, allowing for easy upgrades.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl mb-2 text-black">Product Features:</h2>
              <ul className="list-disc ml-5 text-gray-800 text-[17px] space-y-1">
                <li>Advanced Communication: IPv4 or IPv6, Gigabit Ethernet, FIPS 140-2, AES 256 bit encryption, TLS 1.2</li>
                <li>Easy Upgrades: Simply drop into an installation</li>
                <li>Upgraded Functionality: ● Anti-Passback, Occupancy Counting, Limit/Day Usage, Absentee Tracking, Up to 500,000 Credentials</li>
                <li>FICAM Support: GSA APL Approved, Supports Card Auth, PIV Auth, and PIV Auth + Biometric</li>
              </ul>
            </section>

            {/* Technical Specifications Table */}
            <section>
              <h2 className="font-bold text-xl text-black mb-4">Technical Specification:</h2>
              <div className="overflow-x-auto border border-gray-500">
                <table className="w-full text-left text-xs border-collapse">
                 
                  <tbody>
                    {specs.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                        <td className="p-3 border-b border-r border-gray-500 text-[15px] font-bold w-1/3 text-gray-700">
                          {spec.label}
                        </td>
                        <td className="p-3 border-b border-gray-500 text-[15px] text-gray-600">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            
             
            {/* Tags & Social */}
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

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-8">
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

             {/* Contact Card */}
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
          </div>
        </div>
      </main>
    </div>
    <Footer />
    </>
   
  );
};

export default Snib3;