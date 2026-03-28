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
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
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
                  {/* <thead>
                    <tr className="bg-gray-200">
                      <th colSpan="2" className="p-2 border-b border-gray-500 font-bold text-[15px] text-black uppercase tracking-wider">PHYSICAL</th>
                    </tr>
                  </thead> */}
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
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                HIRSCH
              </span>
              
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                Access Control System
              </span>
            </div>

            {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
            <h3 className="text-xl font-bold text-black mb-4 border-b pb-1">More By HIRSCH</h3>
            <ul className="text-xl space-y-4 text-gray-500 transition-colors">
              <li className='cursor-pointer hover:text-[#f08c09]'>Onity DirectKey with Serene</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>INR 415 256-Channel 12 Bay RAID Rackmount Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>GNR 340 100-Channel Tower Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>ENR 130 16-Channel Desktop Standalone NVR - No HDD Included</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>Z86 Outdoor Network Dome Camera with Night Vision</li>
            </ul>
          </div>

             {/* Contact Card */}
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
              <button className="bg-blue-700 hover:bg-blue-400 text-white font-semibold rounded transition-all duration-300 w-full md:w-auto px-4 py-3 md:px-6 md:py-2 lg:px-8 lg:py-3 lg:text-lg">
            <NavLink to="/contacts" className="w-full h-full flex items-center justify-center">
              CONTACT US TODAY
            </NavLink>
              </button>
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