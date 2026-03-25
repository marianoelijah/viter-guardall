import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';

const TsScramblePad = () => {
  const productFeatures = [
    "Industry's most versatile, highly secure intelligent door reader endpoint",
    "Extends the ScramblePad family with a contact smart card reader for FICAM two-factor authentication for high-security zones",
    "Supports PIV, PIV-I, CIV, CAC, PLAID, legacy credentials (DESFire, MIFARE, UID) and proximity, reading both contactless and contact interfaces",
    "Versatile platform transitions seamlessly and simultaneously for certified validation systems",
    "Wiegand, RS-485/OSDP, Ethernet (PoE)",
    "Download firmware and feature updates and changes over RS-485/OSDP link"
  ];

  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800 pb-12">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-4">
        <h1 className="text-5xl md:text-5xl font-bold tracking-tight max-w-5xl mx-auto text-center ">
                 Hirsch TS ScramblePad SC: <br/>
            FICAM-Capable TS ScramblePad with Contact Smart Card Reader
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
          <p className="text-[15px] leading-relaxed mb-6">
            A high-security keypad that features a patented scrambling function, it can also be used for contactless and contact smart card.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
            <div className="text-[15px] leading-relaxed space-y-4 mb-6">
              <p>
                Hirsch TS ScramblePad SC provides high-security keypad functionality, a contactless interface, and a contact reader for two-factor authentication. The ScramblePad design is specified in many of the world’s most secure locations due to its high-security scramble feature that randomly orders the digits each time the "START" button is pressed or a card requiring a PIN is presented.
              </p>
              <p>
                The random scrambling prevents the acquisition of a user code via pattern recognition and also prevents keypad wear leaving a tell-tale impression of the numbers used in a valid PIN. This feature is further enhanced by the use of viewing restrictors narrowing the field of vision; only the person directly facing the ScramblePad can see the presented digits.
              </p>
            </div>

            <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[15px] space-y-1 mb-8">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          {/*  Technical Specification */}
          <h2 className="font-bold text-xl text-black mb-4">Technical Specification:</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-black text-[10px]">
              <thead>
                <tr className="bg-gray-100 font-bold">
                  <th className="border border-black p-2 text-left w-1/4"></th>
                  <th className="border border-black p-2 text-[17px] text-black ">TS ScramblePad SC Wiegand</th>
                  <th className="border border-black p-2 text-[17px] text-black">TS ScramblePad SC RS-485/OSDP</th>
                  <th className="border border-black p-2 text-[17px] text-black">TS ScramblePad SC SCFICAM</th>
                  <th className="border border-black p-2 text-[17px] text-black">TS ScramblePad SC FICAM-Strict</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black">Part Numbers</td>
                  <td className="border border-black bg-gray-200 p-2 text-[17px]">8336ABT0000</td>
                  <td className="border border-black bg-gray-200 p-2 text-[17px]">8336ABTR000</td>
                  <td className="border border-black bg-gray-200 p-2 text-[17px]">8336ABTF000</td>
                  <td className="border border-black bg-gray-200 p-2 text-[17px]">8336ABTFF00</td>
                </tr>

                <tr>
                  <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100">
                    Carrier Frequencies
                  </td>
                  <td colSpan="3" className="border border-black bg-gray-200  text-[15px] text-gray-800 p-2">
                    125 kHz / 13.56 MHz
                  </td>
                  <td className="border border-black p-2 text-[15px] bg-gray-200 text-gray-800">
                    13.56 MHz
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100">Reader Output</td>
                  <td className="border border-black text-[15px] text-gray-800 bg-gray-200 p-2">Wiegand</td>
                  <td colSpan="3" className="border border-black p-2 text-[15px] bg-gray-200 text-gray-800">RS-485 (2 Wire)</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100">Current Consumption (@ 12 V)</td>
                  <td colSpan="2" className="border border-black text-[15px] text-gray-800 p-2 bg-gray-200">270 mA typical; 300 mA Peak</td>
                  <td colSpan="2" className="border border-black p-2 text-[15px] text-gray-800 bg-gray-200">@ 48V: 68 mA typical; 82 mA Peak</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100">
                    Power Supply
                  </td>
                  <td colSpan="4" className="border border-black p-2 text-[15px] bg-gray-200 text-gray-800">
                    12 VDC or PoE (802.3af)
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100">
                    Product Weight
                  </td>
                  <td colSpan="4" className="border border-black p-2 text-[15px] bg-gray-200 text-gray-800">
                    445 g (15.69 oz)
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100">
                    Dimensions
                  </td>
                  <td colSpan="4" className="border border-black p-2 text-[15px] bg-gray-200 text-gray-800">
                    Face: 5.75 (H) x 4.37 (W) in (14.6 x 11.1 cm)<br/>
                    Body: 5.0 (H) x 3.5 (W) x 2.75 (D) in (12.7 x 8.89 x 7.0 cm)
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100">
                    Color
                  </td>
                  <td colSpan="4" className="border border-black bg-gray-200 p-2 text-[15px] text-gray-800">
                    Black
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100">
                   Operating Temperature
                  </td>
                  <td colSpan="4" className="border border-black bg-gray-200 p-2 text-[15px] text-gray-800">
                    0° to 49° C (32° to 120° F)
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100">
                    Storage Temperature
                  </td>
                  <td colSpan="4" className="border border-black bg-gray-200 p-2 text-[15px] text-gray-800">
                    -35 to 85° C (-31 to 185° F)
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100">
                    High Frequency Compatibility
                  </td>
                  <td colSpan="3" className="border border-black text-[15px] text-gray-800 bg-gray-200 p-2">
                    PIV, PIV-I, CAC, MIFARE, DESFire, PLAID, ISO15693, ISO14443A
                  </td>
                  <td className="border border-black p-2 text-[15px] bg-gray-200 text-gray-800">
                    PIV, PIV-1, CAC, CAK & PAK
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100">
                    Low Frequency Compatibility
                  </td>
                  <td colSpan="3" className="border border-black p-2 text-[15px] bg-gray-200 text-gray-80">
                    HID Prox, Indala, Casi Rusco, AWID, Farpointe, and others
                  </td>
                  <td className="border border-black p-2 text-[15px] bg-gray-200 text-gray-800">
                    None
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100">
                    Operating Humidity
                  </td>
                  <td colSpan="4" className="border border-black p-2 text-[15px] bg-gray-200 text-gray-800">
                    5% to 95% relative humidity (non-condensing)
                  </td>
                </tr>
                 <tr>
                  <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100">
                    Connection
                  </td>
                  <td colSpan="4" className="border border-black p-2 text-[15px] bg-gray-200 text-gray-800">
                    Structure Cabling (RJ45) for Ethernet and Terminal Strip for Wiegand and 
                    RS485RGB LED, Ethernet link activity LED, Buzzer
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100">
                    Certifications
                  </td>
                  <td colSpan="4" className="border border-black bg-gray-200 p-2 text-[15px] text-gray-800">
                    FCC, UL, CE, IC, RCM, RoHS2, REACH
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100">
                    FICAM Certifications
                  </td>
                  <td className="border border-black p-2 text-[15px] text-gray-800 bg-gray-200 ">
                    No
                  </td>
                  <td className="border border-black p-2 text-[15px] text-gray-800 bg-gray-200">
                    Upgradable
                  </td>
                  <td colSpan="2" className="border border-black p-2 text-[15px] text-gray-800">
                    Yes
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100">
                    Warranty
                  </td>
                  <td colSpan="4" className="border border-black p-2 text-[15px] text-gray-800 bg-gray-200">
                    Two (2) years
                  </td>
                </tr>
                 <tr>
                  <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100">
                    Mounting Boxes
                  </td>
                  <td colSpan="4" className="border border-black p-2 text-[15px] text-gray-800 bg-gray-200">
                    Dimensions and mounting points are identical to other ScramblePads, <br/>
                    enablinng compatibility with a range of mounting boxes. The contact snart <br/>
                    card reader occupies the volume below the reader. It fits in a standard <br/>
                    MB2 OR MB2/UMK as long asthat volume is not obstructed. Other boxes may <br/>
                    require an extender or an alternate faceplate.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tags */}
         <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="text-white border bg-red-500 px-2">Hirsch</p>
            <p className="text-white border bg-red-500 px-2">Access Control System</p>
           </div> 

          {/* Share Section */}
          <div className="mt-8">
              <p className="font-medium text-black mb-3">Share:</p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/assets/image/social-logo/facebook.png" alt="Facebook" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/assets/image/social-logo/gmail.png" alt="Gmail" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/assets/image/social-logo/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/assets/image/social-logo/telegram.png" alt="Telegram" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/assets/image/social-logo/viber.png" alt="Viber" className="w-full h-full object-contain p-1" />
                </div>
              </div>
            </div>
        </main>

        {/* Sidebar */}
        <aside className="lg:w-1/4 space-y-6">
         <div className="bg-gray-300 p-4 border border-black mb-6">
            <h3 className="text-xl font-bold text-black mb-4 border-b pb-1">More By HIRSCH</h3>
            <ul className="text-xs space-y-4 text-gray-500 transition-colors">
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

export default TsScramblePad;