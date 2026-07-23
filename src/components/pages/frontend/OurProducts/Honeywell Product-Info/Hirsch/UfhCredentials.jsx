import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';


const UfhCredentials = () => {
  const productFeatures = [
    "Wall Mount SC provides an alternate high-security interface for contact smart card reads",
    "Wall Mount Keypad SC supports full FICAM two-factor authentication for high-security zones",
    "Versatile platform transitions seamlessly to certified certificate-based validation systems",
    "Supports compliance with FIPS 201, FIPS 140-2, and NIST SP800-116",
    "Supports PIV, PIV-I, CIV, CAC, PLAID, DESFire, MIFARE, ISO UID, and proximity",
    "Reads both contactless and contact interfaces in standard gang box housing",
    "Supports Wiegand and RS-485/OSDP data protocols",
    "RS-485/OSDP enables remote firmware flashing and feature and configuration updates"
  ];

  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      {/* Blue Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-4 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          uTrust UHF Credentials
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
          <p className="text-[17px] leading-relaxed mb-6">
           An ultra high frequency smart card designed for long distance reading.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
            <div className="text-[17px] leading-relaxed space-y-4 mb-6">
              <p>
                uTrust UHF Credentials provide multiple options for durable,interoperable radio frequency identification (RFID) cards. Ultra high frequency (UHF) technology (operating in the 860 – 960 MHz frequency range) delivers outstanding performance for long-distance, multiple, reliable readings of credentials, including cards and tags. Leveraging the short wavelength of UHF technology, they are the ideal solution for reading people or items from a significant distance, more than 18 – 21 feet.
              </p>
            </div>

            <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          {/* Technical Specifications Table */}
          <section className="mt-10 overflow-x-auto">
            <h2 className="font-bold text-xl text-black mb-4">Technical Specification:</h2>
            <table className="w-full border-collapse border border-gray-500 text-[11px]">
              <thead>
                <tr className="bg-gray-100 uppercase font-bold text-[17px]">
                  <th className="border border-gray-500 p-2 text-left w-1/4"></th>
                  <th className="border border-gray-500 p-2 text-left">ISO PVC UHF LF Card</th>
                  <th className="border border-gray-500 p-2 text-left">ISO PVC UHF DESFire EV2 2K Card</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">RFID Interface</td>
                  <td colSpan="2" className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">• Broadband support for contactless frequency range around the world (860 – 960 MHz) • Programmable with different PACS formats (ie., 26, 35, 37 bits, etc.)</td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">UHF Chip and Memory</td>
                  <td colSpan="2" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                   • Alien H3 (other chips may also be used)• 800 bits of memory, 96 EPC bits extensible to 480 bits, 512 user bits, 64-bit unique TID (unalterable serial number)• 32-bit access and 32-bit kill passwords• User memory can be block perma-locked or read-password protected in 64 bit blocks
                 </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">Credential Form Factorand Dimensions</td>
                  <td colSpan="2" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                   • ISO Card (ID1 Format) and ISO7810 format• 3.37 x 2.125 x 0.030 in (85.6 x 54 x 0.84 mm)• Thickness 30 mm +/- 3 mml
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">Weight</td>
                  <td colSpan="2" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                   0.15 oz (4.3 g)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">Read Range(with UHF Reader 2 Watts)</td>
                  <td colSpan="2" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                   18 – 21 ft (6 – 7 meters)
                 </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">Slot Punch</td>
                  <td colSpan="2" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                    Not supported
                 </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">Operating Temperatures</td>
                  <td colSpan="2" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                    -50° to 160° F (-45° to 70° C)
                 </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">Material</td>
                  <td colSpan="2" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                    PVC with quality surface for use with most card printers on the market
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">Options</td>
                  <td colSpan="2" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                    • Magnetic stripe three tracks (HICO123)• Black, pre-printing CMYK, or Pantone colors• Special encoding available on demand for compatibility with UHF readers
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">LF/HF Specifics</td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    LF 125 KHz with capabilities identical to uTrust Proximity Credentials
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    • HF 13.56 MHz with NXP DESFire EV2 2K (non-programmed by default)
                    • Configuration with uTrust TS Card encoding on DESFire (available by request)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">Part Numbers</td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    99-017-UHF-LF
                </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    99-090-UHF-HF-DFEV2-2K
                </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">Supported UHF Readers</td>
                  <td colSpan="2" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                    • Wiegand interface (i.e., NEDAP uPASS Access Reader, IDTek RF900, FEIG ID LRU500i-BD-FCC UHF Compact Reader with integrated antenna, and TRES Reader Family 9v00)
                    • Other brands (i.e., TRES Reader Family 900)
                    • ASReader for iOS and Android mobile devices (i.e., ASR-0230D (FCC/US) 902.75~927.25 MHz) or desktop readers (i.e., ASR-P30U)
                    • Thinkify (i.e., TR-265 USB Desktop RFID Reader)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">Lifetime Warranty</td>
                  <td colSpan="2" className="border border-gray-500 p-2  text-[15px] text-gray-700">For material defects and workmanship under normal wear and tear</td>
                </tr>
              </tbody>
            </table>
          </section>

        {/* Tags */}
           <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="text-white border bg-[#ff5f31] px-2 py-1">Hirsch</p>
            <p className="text-white border bg-[#ff5f31] px-2 py-1">Access Control System</p>
           </div> 

          {/* Share Section */}
            <SocialShare title="Check out this product!" />
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
    <Footer />
    </>
    
  );
};

export default UfhCredentials;