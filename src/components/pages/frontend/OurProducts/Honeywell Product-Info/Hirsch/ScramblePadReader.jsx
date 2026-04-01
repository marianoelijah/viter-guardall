import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const ScramblePadReader = () => {
  const productFeatures = [
    "Industry's most versatile, highly secure intelligent door reader endpoint",
    "Combines the world's most secure PIN code entry device with the world's most flexible card reader",
    "Supports PIV, PIV-I, CIV, CAC, PLAID, legacy credentials (DESFire, MIFARE, UID)",
    "Proximity and Contact smart card support",
    "Versatile platform that transitions seamlessly and simultaneously for certified validation systems",
    "Enables agencies to migrate to U.S. government FICAM PIV authentication (PAK) and card authentication (CAK) validation at a fraction of the cost",
    "Download firmware and feature updates and changes over the OSDP connection"
  ];

  return (
    <>
    <Header />
     <div className="bg-gray-100 min-h-screen font-sans text-gray-800 pb-12">
      {/* Blue Header Banner */}
      <header className="bg-[#8ba4ca] text-white py-12 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight uppercase">
          Hirsch Scramble Pad Readers
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <main className="lg:w-3/4 bg-gray-300 p-8 shadow-sm">
          <p className="text-[17px] leading-relaxed mb-6">
            A high-security keypad with patented scrambling function to avoid pattern recognition.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-xl mb-2 uppercase">Product Description:</h2>
            <div className="text-[17px] leading-relaxed space-y-4 mb-6">
              <p>
                Identiv's ScramblePad design is specified in many of the world's most secure locations due to its high-security scramble feature that randomly orders the digits each time the "START" button is pressed or a card requiring a PIN is presented.
              </p>
              <p>
                The random scrambling prevents the acquisition of a user code via pattern recognition and also prevents keypad wear that leaves a tell-tale impression of the numbers used in a valid PIN. This feature is further enhanced by the use of viewing restrictors that narrow the field of vision; only the person directly facing the ScramblePad can see the presented digits.
              </p>
            </div>

            <h2 className="font-bold text-xl mb-2 uppercase">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1 mb-8">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          { /* Technical Specification Table */}
          <h2 className="font-bold text-xl mb-4 uppercase">Technical Specification:</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-500 text-[17px]">
              <thead>
                <tr className="bg-gray-200 font-bold">
                  <th className="border border-gray-500 p-2 text-left w-1/4"></th>
                  <th className="border border-gray-500 p-2">TS ScramblePad HF/LF</th>
                  <th className="border border-gray-500 p-2">TS ScramblePad HF</th>
                  <th className="border border-gray-500 p-2">TS ScramblePad HF/LF Commercial (No FICAM)</th>
                  <th className="border border-gray-500 p-2">TS ScramblePad HF Commercial (No FICAM)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200">Part Numbers</td>
                  <td className="border border-gray-500 p-2 bg-gray-100 text-[15px] text-gray-800">8332ABT0000 | 8332ABTF000 | 8332ABTR000</td>
                  <td className="border border-gray-500 p-2 bg-gray-100 text-[15px] text-gray-800">8352ABT0000 | 8352ABTF000 | 8352ABTR000</td>
                  <td className="border border-gray-500 p-2 bg-gray-100 text-[15px] text-gray-800">8330ABT0000 | 8330ABTR000</td>
                  <td className="border border-gray-500 p-2 bg-gray-100 text-[15px] text-gray-800">8350ABT0000 | 8350ABTR000</td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200">
                    Carrier Frequencies
                  </td>
                  <td className="border border-gray-500 p-2 text-center bg-gray-100 text-[15px] text-gray-800">
                    13.56MHz and 125 kHz
                  </td>
                  <td className="border border-gray-500 p-2 text-center bg-gray-100 text-[15px] text-gray-800">
                    13.56MHz
                  </td>
                  <td className="border border-gray-500 p-2 text-center bg-gray-100 text-[15px] text-gray-800">
                    13.56MHz and 125 kHz
                  </td>
                  <td className="border border-gray-500 p-2 text-center bg-gray-100 text-[15px] text-gray-800">
                    13.56MHz
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200">
                    Low Frequency (125kHz) Compatibility
                  </td>
                  <td className="border border-gray-500 p-2 text-center bg-gray-100 text-[15px] text-gray-800">
                    HID® Prox, Indala®, CASI-RUSCO®, AWID, and others
                  </td>
                  <td className="border border-gray-500 p-2 text-center bg-gray-100 text-[15px] text-gray-800">
                    N/A
                  </td>
                  <td className="border border-gray-500 p-2 text-center bg-gray-100 text-[15px] text-gray-800">
                    HID® Prox, Indala®, CASI-RUSCO®, AWID, and others
                  </td>
                  <td className="border border-gray-500 p-2 text-center bg-gray-100 text-[15px] text-gray-800">
                   N/A
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200">
                    High Frequency (13.56MHz) Compatibility
                  </td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-center text-[15px] text-gray-800 bg-gray-100">
                    PIV, PIV-I, CIV, CAC, TWIC, uTrust TS, MIFARE Classic, DESFire EVx, ISO15693 UID, ISO14443 UID
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200">
                    Current Consumption (@12V)
                 </td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-center text-[15px] text-gray-800 bg-gray-100">
                    335 mA Average; 425 mA Peak; PoE @ 55V 80 mA Peak
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200">Power Supply</td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-center text-[15px] text-gray-800 bg-gray-100">
                      12 VDC or PoE (802.3af)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200">Dimensions</td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-center text-[15px] text-gray-800 bg-gray-100">
                    Face: 5.75 in (14.6 cm) H x 4.5 in (11.4 cm) W x .625 in (1.6 cm) D<br/>
                    Body: 4.5 in (11.4 cm) H x 3.5 in (8.9 cm) W x 1.75 in (4.4 cm)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200">
                    Weight
                  </td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-center text-[15px] text-gray-800 bg-gray-100">
                     2 lbs (907 g)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200">
                    Housing Material
                  </td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-center text-[15px] text-gray-800 bg-gray-100">
                    UL 94 Polycarbonate, Black
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200">
                    Operating Temperature
                  </td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-center text-[15px] text-gray-800 bg-gray-100">
                    32° to 120° F (0° to 49° C)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200">
                    Storage Temperature
                  </td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-center text-[15px] text-gray-800 bg-gray-100">
                    -31° to 185° F (-35° to 85° C)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200">
                    Operating Humidity
                  </td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-center text-[15px] text-gray-800 bg-gray-100">
                    5% to 95% relative humidity (non-condensing)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200">
                    Connection
                  </td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-center text-[15px] text-gray-800 bg-gray-100">
                    Terminal Strip
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200">
                    Status Indicator
                  </td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-center text-[15px] text-gray-800 bg-gray-100">
                   RGB LED, Buzzer
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200">
                    Data Protocols
                  </td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-center text-[15px] text-gray-800 bg-gray-100">
                    Wiegand RS-485/OSDP (2 Wire – Half Duplex)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200">
                    OSDP Baud Rate/Address
                  </td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-center text-[15px] text-gray-800 bg-gray-100">
                    115,200 kbps; Address 0, Address 1 (P1,1 to P1,4 jumper)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200">
                    Mounting Accessories
                  </td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-center bg-gray-100">
                    MB1, MB2, MB2S, MB2SL2, MB3, MB4, MB5, MB5-S, MB8, MB9, UMK, MBX
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200">
                    Certifications
                  </td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-center bg-gray-100">
                    FCC, UL 294, CE, IC, RCM, RoHS2, REACH, UKCA, GSA APL
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200">
                    Warranty
                </td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-center bg-gray-100">
                    Two (2) years
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tags */}
         <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className=" text-white border bg-red-500 px-2 py-1">Hirsch</p>
            <p className=" text-white border bg-red-500 px-2 py-1">Access Control System</p>
           </div> 

          {/* Share Section */}
             <SocialShare title="Check out this product!" />
        </main>

        {/* Sidebar */}
        <aside className="lg:w-1/4 space-y-6">
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
        </aside>
      </div>
    </div>
    <Footer />
    </>
   
  );
};

export default ScramblePadReader;