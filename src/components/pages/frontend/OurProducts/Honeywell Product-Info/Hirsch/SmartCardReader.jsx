import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';
import React from 'react';


const SmartCardReader = () => {
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
          uTrust TS Contact Smart Card Readers
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
          <p className="text-[15px] leading-relaxed mb-6">
            Deliver unparalleled security and flexibility for government PACS, combining high-assurance smart card technology with FICAM compliance and versatile authentication options.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
            <div className="text-[15px] leading-relaxed space-y-4 mb-6">
              <p>
                Designed specifically with high-security government applications in mind, Identiv's uTrust TS Contact Smart Card (SC) Readers offer an excellent balance of compliance, interoperability, and security for federal agencies, government contractors, and other mission-critical facilities.
              </p>
              <p>
                In addition to proximity and smart cards, uTrust TS Readers support TS Cards, highly secure standards-based credentials. Strong authentication ensures that information is transferred only after the system has determined that both parties in the system are trustworthy and has validated that the data can be transferred securely.
              </p>
            </div>

            <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[15px] space-y-1">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          {/* Technical Specifications Table */}
          <section className="mt-10 overflow-x-auto">
            <h2 className="font-bold text-xl text-black mb-4">Technical Specification:</h2>
            <table className="w-full border-collapse border border-black text-[11px]">
              <thead>
                <tr className="bg-gray-100 uppercase font-bold text-[17px]">
                  <th className="border border-black p-2 text-left w-1/4"></th>
                  <th className="border border-black p-2 text-left text-black">TS Wall Mount SC</th>
                  <th className="border border-black p-2 text-left text-black">TS Wall Mount Keypad SC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black ">Part Numbers</td>
                  <td className="border border-black text-gray-700 text-[15px] p-2 break-all">8105ABP0000|8105ABF000|8105ABPR0008105ABTF0008105ABTF0008105ABTR000</td>
                  <td className="border border-black text-gray-700 text-[15px] p-2 break-all">8205ABP0000|8205ABPF0008205ABP R0008205ABTF0008205ABTF000820 5ABTR000</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black">Description</td>
                  <td className="border border-black p-2 text-[15px] text-gray-700">TS Wall Mount with Contact Smart Card Reader</td>
                  <td className="border border-black p-2 text-[15px] text-gray-700">TS Wall Mount Keypad with Contact Smart Card Reader</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black">Carrier Frequencies</td>
                  <td colSpan="2" className="border border-black p-2 text-center text-[15px] text-gray-700">13.56 MHz only or 13.56 MHz and 125 KHz</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black">Current Consumption (@ 12V)</td>
                  <td className="border border-black p-2 text-[15px] text-gray-700">95mA Average / 125mA Peak</td>
                  <td className="border border-black p-2 text-[15px] text-gray-700">110mA Average / 150mA Peak</td>
                </tr>
                 <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black">Power Supply</td>
                  <td colSpan="2" className="border border-black p-2  text-[15px] text-gray-700">12 VDC</td>
                </tr>
                 <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black">Dimensions</td>
                  <td colSpan="2" className="border border-black p-2  text-[15px] text-gray-700">5.0 x 3.4 x 1.3 in(12.7 x 8.6 x 3.3 cm)</td>
                </tr>
                 <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black">Product Weight</td>
                  <td colSpan="2" className="border border-black p-2  text-[15px] text-gray-700">9.6 oz (272g)</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black">Housing Material</td>
                  <td colSpan="2" className="border border-black p-2  text-[15px] text-gray-700">UL94 Polycarbonate</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black">Operating Temperature</td>
                  <td colSpan="2" className="border border-black p-2  text-[15px] text-gray-700">32 to 120°F (0 to 49°C)</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black">Storage Temperature</td>
                  <td colSpan="2" className="border border-black p-2  text-[15px] text-gray-700">32 to 140°F (0 to 60°C)</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black">Operating Humidity</td>
                  <td colSpan="2" className="border border-black p-2  text-[15px] text-gray-700">5% to 85% relative humidity (non-condensing)</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black">Dimensions</td>
                  <td colSpan="2" className="border border-black p-2  text-[15px] text-gray-700">5.0 x 3.4 x 1.3 in (12.7 x 8.6 x 3.3 cm)</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black">Connection</td>
                  <td colSpan="2" className="border border-black p-2  text-[15px] text-gray-700">Pigtail or Terminal</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black">Status Indicator</td>
                  <td colSpan="2" className="border border-black p-2  text-[15px] text-gray-700">RGB LED, Buzzer</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black">Cable Distance</td>
                  <td colSpan="2" className="border border-black p-2  text-[15px] text-gray-700">Wiegand 500 ft/152 m (18 AWG wire), RS-485 4000 ft/1200 m (18 AWG shielded twisted pair)</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black">Low Frequency (125 kHz) Compatibility</td>
                  <td colSpan="2" className="border border-black p-2  text-[15px] text-gray-700">HID® Prox, Indala®, Casi Rusco®, AWID, and others</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black">High Frequency (13.56 MHz) Compatibility</td>
                  <td colSpan="2" className="border border-black p-2  text-[15px] text-gray-700">PIV, PIV-I, CIV, CAC, TWIC, uTrust TS, MIFARE Classic, MIFARE DESFire EVx, ISO15693 UID, ISO14443A UID</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black">Certifications</td>
                  <td colSpan="2" className="border border-black p-2  text-[15px] text-gray-700">FCC, UL 294, UL1076, CE, IC, RoHS2, REACH, GSA</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black">Warranty</td>
                  <td colSpan="2" className="border border-black p-2  text-[15px] text-gray-700">Two (2) Years</td>
                </tr>
              </tbody>
            </table>
          </section>

        {/* Tags */}
           <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="text-lg text-white border bg-[#ff5f31] px-2 rounded">Hirsch</p>
            <p className="text-lg text-white border bg-[#ff5f31] px-2 rounded">Access Control System</p>
           </div> 

          {/* Share Section */}
            <SocialShare title="Check out this product!" />
        </main>

        {/* Sidebar */}
        <aside className="lg:w-1/4 space-y-6">
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

export default SmartCardReader;