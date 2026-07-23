import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';


const ScrambleFactor = () => {
  const productFeatures = [
    "Supports comprehensive multi-factor authentication for enhanced security policies",
    "Compatible with OSDP and FICAM modes, continues to provide the industry's fastest credential processing performance",
    "Easily retrofitted into existing Hirsch mounting boxes or wall mounted, ensuring a smooth upgrade path",
    "Requires Hirsch Velocity security management system"
  ];

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800 pb-12">
      {/* Header Banner */}
      <header className="bg-[#8ba4ca] text-white py-12 px-4 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          Hirsch Scramble Factor: High-Assurance Biometrics and Multi-Factor Authentication Reader
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <main className="lg:w-3/4 bg-white p-8 shadow-sm">
          <p className="text-[13px] leading-relaxed mb-6 italic">
            An advanced fingerprint biometrics with LCD touchscreen keypad designed for high-security areas.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-[14px] mb-2 uppercase">Product Description:</h2>
            <div className="text-[13px] leading-relaxed space-y-4 mb-6">
              <p>
                ScrambleFactor reimagines secure entry for the federal market with a fingerprint sensor, LCD touchscreen, virtual keypad, and contactless credential modes. The ScrambleFactor enables multiple authentication methods to deliver unparalleled security, speed, and functionality. ScrambleFactor offers federal users up to three-factor authentication suitable for the most secure areas.
              </p>
            </div>

            <h2 className="font-bold text-[14px] mb-2 uppercase">Product Features:</h2>
            <ul className="list-disc ml-5 text-[13px] space-y-1 mb-8">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          <h2 className="font-bold text-[14px] mb-4 uppercase">Technical Specification:</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-[10px]">
              <thead>
                <tr className="bg-gray-100 font-bold">
                  <th className="border border-gray-300 p-2 text-left w-1/4"></th>
                  <th className="border border-gray-300 p-2 text-center">SF.3 HF</th>
                  <th className="border border-gray-300 p-2 text-center">SF.3 HF/LF</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Part Number</td>
                  <td className="border border-gray-300 p-2 text-center">8413ABTM000</td>
                  <td className="border border-gray-300 p-2 text-center">8413ABTM000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Keypad</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center">12-character</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Carrier Frequencies</td>
                  <td className="border border-gray-300 p-2 text-center">13.56 MHz</td>
                  <td className="border border-gray-300 p-2 text-center">13.56 MHz and 125 kHz</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Biometric</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center">
                    Fingerprint: Optical, FBI certified (FIPS 201, PIV, and Mobile ID FAP 10 compliant) and STQC certified
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Screen</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center">ANSI INCITS 378-2004 and ISO/IEC 19794-2</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Environmental Rating</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center">IP55</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Operating Temp.</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center">-4 to 149°F (-20 to 65°C)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Mounting Accessories</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center">MB2, MB2S, MB2SL, MB3, MB4, MB5, MB5-S</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Warranty</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center">2 year limited warranty</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tags */}
          <div className="flex gap-2 mt-8">
            <span className="bg-[#ff5f31] text-white px-2 py-1 tracking-wider">Hirsch</span>
            <span className="bg-[#ff5f31] text-white px-2 py-1 tracking-wider">Access Control System</span>
          </div>

          {/* Share Section */}
          <div className="mt-8 pt-4 border-t border-gray-200 flex items-center gap-3">
            <span className="text-xs text-gray-500">Share:</span>
            <div className="flex gap-1">
              {[Facebook, Linkedin, Mail, MessageCircle, Share2].map((Icon, i) => (
                <button key={i} className="bg-[#1e4e8c] p-1.5 text-white hover:bg-blue-800 transition-colors">
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>
        </main>

        {/* Sidebar */}
         <aside className="lg:w-1/4 space-y-6">
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
        </aside>
        
      </div>
    </div>
  );
};

export default ScrambleFactor;