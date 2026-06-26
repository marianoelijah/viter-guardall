import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';


const TsCards = () => {
  const productFeatures = [
    "Priced significantly below equivalent competitive HF and LF offerings",
    "Even the most sophisticated uTrust TS Card is less expensive that a standard proximity card from a 3rd party supplier",
    "Versatile platform transitions seamlessly to certified certificate-based validation systems",
    "Based on industry-standard MIFARE DESFire EV1/EV2 technology (evaluated to Common Criteria EAL4+ or higher), provides a high level of security assurance",
    "Can be programmed with a variety of different card data formats to match existing infrastructure, including 26, 35, 37, and 48 bit, with others available on request",
    "Migration cards incorporate 125 kHz proximity technology (ensuring compatibility with existing readers), are available with different card number programming between the HF and LF interface, and can support 26-bit encoding on the LF interface",
  ];

  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      {/* Blue Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-4 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          uTrust TS Cards
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
          <p className="text-[15px] leading-relaxed mb-6">
          A high-frequency smart card designed for contactless access to offices and similar properties. 
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
            <div className="text-[15px] leading-relaxed space-y-4 mb-6">
              <p>
               Identiv’s uTrust TS Cards are modern, secure credentials for physical access control, based 
               on NXP® ‘s MIFARE DESFire high-frequency (HF) 13.56 MHz technology, and are compatible with 
               125 kHz LF proximity card systems. Standards-based card technology (MIFARE DESFire EV1 or EV2), 
               combined with a published encoding profile, enables easy integration into third-party products 
               (e.g., other OEM reader products, printers, etc.). uTrust TS Cards may be used with the uTrust 
               TS Universal Enroller, an integrated enrollment reader that simplifies the daily process of 
               enrolling new cards. uTrust TS Cards come with a limited lifetime warranty against material 
               defects and workmanship.
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
            <table className="w-full border-collapse border border-gray-500 text-[11px]">
              <thead>
                <tr className="bg-gray-100 font-bold text-[17px]">
                  <th className="border border-gray-500 p-2 text-left w-1/4"></th>
                  <th className="border border-gray-500 p-2 text-left">
                   uTrust TS Standard 256BISO Card
                   <br/>
                   uTrust TS Standard 2K/4K/8KISO Card
                 </th>
                  <th className="border border-gray-500 p-2 text-left">
                   uTrust TS Migration 256BPlus <br/>
                   Prox ISO Card
                  <br/>
                   uTrust TS Migration 2K/4K/8K <br/>
                   Plus Prox ISO Card
                 </th>
                </tr>
              </thead>
              <tbody>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    SupportedApplication
                  </td>
                  <td colSpan="2" className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    Physical Access Control
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                   RFID Interface
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    13.56 MHz only (HF, ISO/IEC 14443A)
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                   13.56 MHz (HF, ISO/IEC 14443A) and 125 KHz (LF)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Chip Technology
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    NXP MIFARE DESFire EV1 256B or EV2 2K/4Kor 8K Bytes
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                     NXP MIFARE DESFire EV1 256B or EV2 2K/4Kor 8K Bytes and Atmel T5577
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                   CryptographicAlgorithms
                  </td>
                  <td colSpan="2" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                  AES-128 with key diversification and CMAC protection for card commands
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                   Cryptographic KeyManagement
                  </td>
                  <td colSpan="2" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                   Identiv Key Set (NextUp Secure) or customer-specified keys (NextUp VIP)*
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Card FormatEncoding
                 </td>
                  <td colSpan="2" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                     Managed formats to ensure that uniqueness of numbers is guaranteed.See uTrust TS Card Ordering Guide for details.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Security Certification
                  </td>
                  <td colSpan="2" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                  Common Criteria EAL4+ for DESFire EV1 and EAL5+ for DESFire EV2
                 </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                   CredentialForm Factor
                  </td>
                  <td colSpan="2" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                   ISO Card (ID1 format), ISO/IEC 7810
                 </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                   Dimensions
                   </td>
                  <td colSpan="2" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                    -50° to 160° F (-45° to 70° C)
                 </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Weight
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    0.212 oz (6 g)
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    0.15 oz (4.3 g)
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                   Read Range**
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    Up to 1.5 in (38 mm) using the HF interface
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    Up to 2.5 in (63.5 mm) using the LF interface
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Slot Punch
                  </td>
                  <td colSpan="2" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                    Vertical or horizontal slot punch marks (punching of the cards can be done by Identiv at extra charge)
                 </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                   OperatingTemperature
                  </td>
                  <td colSpan="2" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                    -49 ̊ to 158 ̊ F (-45 ̊ to 70 ̊ C)
                 </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     Material
                  </td>
                  <td colSpan="2" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                    Durable using composite with a mix of PVC (60%) and PET (40%)
                 </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     IdentivPart Numbers
                   </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    5020-SDXXX(XXX is variable based on card configurationordered, refer to the TS Card Ordering Guide formore information)
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    5020-MDXXX(XXX is variable based on card configurationordered, refer to the TS Card Ordering Guide for more information)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     Compatible Readers
                   </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    • Identiv’s uTrust Readers (Advanced, Migration,and ScramblePad)• uTrust TS Universal Card Enroller• All ISO 14443 UID readers
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    • Identiv’s uTrust Readers(Advanced, Migration, and ScramblePad)• uTrust TS Universal Card Enroller• All ISO 14443 UID readers• All HID proximity compatible 125kHz LF readers
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

        {/* Tags */}
           <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="text-white rounded border bg-[#ff5f31] px-2">Hirsch</p>
            <p className="text-white rounded border bg-[#ff5f31] px-2">Access Control System</p>
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

export default TsCards;