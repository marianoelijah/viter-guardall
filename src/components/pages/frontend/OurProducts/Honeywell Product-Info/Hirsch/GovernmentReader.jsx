import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';

const GovernmentReader = () => {
  const productFeatures = [
    "Versatile platform with full range of FIPS 201 approved products",
    "Supports PIV, PIV-I, CIV, CAC, with optional support for legacy proximity",
    "Fast, usable, FICAM-compliant card authentication key (CAK) validation",
    "FICAM certified for CAK validation systems; enables compliance with FIPS 201, FIPS 140-2, and NIST SP800-116 publications"
  ];

  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-black pb-12">
      {/* Blue Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto">
            uTrust TS Government Readers: <br/>
          Mullion, Wall Mount, and Wall Mount Keypad
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <main className="lg:w-3/4 bg-gray-300 p-8 shadow-sm">
          <p className="text-[15px] leading-relaxed mb-6">
            Provides cost-effective, highly secure, and compliant FICAM-certified solutions for federal agencies and contractors.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
            <div className="text-[15px] leading-relaxed space-y-4 mb-6">
              <p>
                Identiv's uTrust TS Government Readers offer an extensive product line that encompasses both single and dual-factor authentication configurations.
              </p>
              <p>
                uTrust TS Government Readers are the industry's most flexible and highly secure intelligent door reader endpoint. They enable agencies to deploy a highly secure U.S. government FICAM card authentication key (CAK) at a fraction of the cost of competing solutions.
              </p>
            </div>

            <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[15px] space-y-1">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          <h2 className="font-bold text-xl text-black mb-4 uppercase">Technical Specification:</h2>
          
          {/* 1. uTrust TS Mullion Government Reader Specifications */}
          <div className="mb-8">
             <h3 className="font-bold text-[17px] text-black bg-gray-200 p-2 border border-b-0 border-gray-500">
              uTrust TS Mullion Government Reader Specifications
             </h3>
             <table className="w-full border-collapse border border-gray-500 text-[10px]">
                <thead>
                   <tr className="bg-gray-100 font-bold ">
                      <th className="border border-gray-500 p-2 text-left w-1/4"></th>
                      <th className="border border-gray-500 p-2 text-[17px] text-black ">TS Mullion HF</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-black">TS Mullion HF/LF</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-black">TS Mullion HF PoC</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-black">TS Mullion HF PoC</th>
                   </tr>
                </thead>
                <tbody>
                  <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">Port Numbers</td>
                      <td colSpan="1" className="border border-gray-500 p-2 text-[15px] text-black text-center">
                        8102ABP0000810 <br/>
                        2ABT00008102AB <br/>
                        PF0008102ABTF0 <br/>
                        008102ABPR0008 <br/>
                        102ABTR000
                      </td>
                      <td className="border border-gray-500 p-2 text-[15px] text-black text-center">
                        8112ABP00008112ABT <br/>
                        00008112ABPF000811 <br/>
                        2ABTF0008112ABPR00 <br/>
                        08112ABTR000
                      </td>
                       <td className="border border-gray-500 p-2 text-[15px] text-black text-center">
                        8132ABP00008132ABT <br/>
                        00008132ABPF000813 <br/>
                        2ABTF0008132ABPR00 <br/>
                        08132ABTR000
                      </td>
                       <td className="border border-gray-500 p-2 text-[15px] text-black text-center">
                        8152ABP00008152ABT <br/>
                        00008152ABPF000815 <br/>
                        2ABTF0008152ABPR00 <br/>
                        08152ABTR000
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                        Current Consumption (@12V)
                      </td>
                      <td colSpan="2" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                          100 mA Average 133 mA Peak
                      </td>
                      <td colSpan="2" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                          167 mA Average; 211 mA Peak; PoE: @48V
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                        Dimensions
                      </td>
                      <td colSpan="4" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                      Body: 4.6 in (11.7 cm) H x 1.7 in (4.3 cm) W x 1.1 in (2.8 cm) D
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                        Product Weight
                      </td>
                      <td colSpan="4" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                       5 oz. (142 g)
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                        Connection
                      </td>
                      <td colSpan="4" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                       Pigtail or Terminal Strip
                      </td>
                   </tr>
                </tbody>
             </table>
          </div>

           {/* 2. uTrust TS Wall Mount Government Reader Specifications */}
          <div className="mb-8">
             <h3 className="font-bold text-[17px] bg-gray-200 p-2 border border-b-0 border-gray-500">
              uTrust TS Wall Mount Government Reader Specifications
            </h3>
             <table className="w-full border-collapse border border-gray-500 text-[10px]">
                <thead>
                   <tr className="bg-gray-100 font-bold">
                      <th className="border border-gray-500 p-2 text-left w-1/4"></th>
                      <th className="border border-gray-500 p-2 text-[17px] text-black">TS Mullion HF</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-black">TS Mullion HF/LF</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-black">TS Mullion HF PoC</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-black">TS Mullion HF PoC</th>
                   </tr>
                </thead>
                <tbody>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">Port Numbers</td>
                      <td colSpan="1" className="border border-gray-500 p-2 text-[15px] text-black text-center">
                        8102ABP00008102 <br/>
                        ABT00008102ABPF <br/>
                        0008102ABTF0008 <br/>
                        102ABPR0008102A <br/>
                        BTR000
                      </td>
                      <td className="border border-gray-500 p-2 text-[15px] text-black text-center">
                        8112ABP00008112ABT <br/>
                        00008112ABPF000811 <br/>
                        2ABTF0008112ABPR00 <br/>
                        08112ABTR000
                      </td>
                       <td className="border border-gray-500 p-2 text-[15px] text-black text-center">
                        8132ABP00008132ABT <br/>
                        00008132ABPF000813 <br/>
                        2ABTF0008132ABPR00 <br/>
                        08132ABTR000
                      </td>
                       <td className="border border-gray-500 p-2 text-[15px] text-black text-center">
                        8152ABP00008152ABT <br/>
                        00008152ABPF000815 <br/>
                        2ABTF0008152ABPR00 <br/>
                        08152ABTR000
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                        Current Consumption (@12V)
                      </td>
                      <td colSpan="2" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                          97 mA Average 114 mA Peak
                      </td>
                      <td colSpan="2" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                       172 mA Average; 202 mA Peak; PoE: @48V 50
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                        Dimensions
                      </td>
                      <td colSpan="4" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                       Body: 4.6 in (11.7 cm) H x 3.1 in (7.8 cm) W x 1.1 in (2.8 cm) D
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                        Product Weight
                      </td>
                      <td colSpan="4" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                       10.25 oz (290 g)
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                        Connection
                      </td>
                      <td colSpan="4" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                       Pigtail or Terminal Strip
                      </td>
                   </tr>
                </tbody>
             </table>
          </div>

           {/* 3. uTrust TS Wall Mount Keypad Government Reader Specifications */}
           <div className="mb-8">
             <h3 className="font-bold text-[17px] bg-gray-200 p-2 border border-b-0 border-gray-500">
              uTrust TS Wall Mount Government Reader Specifications
            </h3>
             <table className="w-full border-collapse border border-gray-500 text-[10px]">
                <thead>
                   <tr className="bg-gray-100 font-bold">
                      <th className="border border-gray-500 p-2 text-left w-1/4"></th>
                      <th className="border border-gray-500 p-2 text-[17px] text-black">TS Mullion HF</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-black">TS Mullion HF/LF</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-black">TS Mullion HF PoC</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-black">TS Mullion HF PoC</th>
                   </tr>
                </thead>
                <tbody>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">Port Numbers</td>
                      <td colSpan="1" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                        8202ABP00008202AB <br/>
                        T00008202ABPF0008 <br/>
                        202ABTF0008202ABP <br/>
                        R0008202ABTR000
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-black text-center">
                        8212ABP00008212ABT <br/>
                        00008212ABPF000821 <br/>
                        2ABTF0008212ABPR00 <br/>
                        08212ABTR000
                      </td>
                       <td className="border border-gray-500 p-2 text-[17px] text-black text-center">
                       8232ABT00 <br/>
                       008232ABT <br/>
                       F0008232A <br/>
                       BTR000
                      </td>
                       <td className="border border-gray-500 p-2 text-[17px] text-black text-center">
                       8252ABT00 <br/>
                       008252ABT <br/>
                       F0008252A <br/>
                       BTR000
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                        Current Consumption (@12V)
                      </td>
                      <td colSpan="2" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                         110 mA Average 155 mA Peak
                      </td>
                      <td colSpan="2" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                      180 mA Average; 255 mA Peak; PoE: @48V 80 mA Peak
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                        Dimensions
                      </td>
                      <td colSpan="4" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                      Body: 4.6 in (11.7 cm) H x 3.1 in (7.8 cm) W x 1.1 in (2.8 cm) D
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                        Product Weight
                      </td>
                      <td colSpan="4" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                       10.93 oz (310 g)
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                        Connection
                      </td>
                      <td colSpan="4" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                       Pigtail or Terminal Strip
                      </td>
                   </tr>
                </tbody>
             </table>
          </div>

          {/* 4. Common Specifications (Bottom Table) */}
          <div>
            <h3 className="font-bold text-[17px] bg-gray-200 p-2 border border-b-0 border-gray-500">
              Common Specifications
            </h3>
            <table className="w-full border-collapse border border-gray-500 text-[10px]">
              <thead>
                <tr className="bg-gray-100 font-bold">
                  <th className="border border-gray-500 p-2 text-[17px] text-black text-left w-1/4"></th>
                  <th className="border border-gray-500 p-2 text-[17px] text-black">HF</th>
                  <th className="border border-gray-500 p-2 text-[17px] text-black">HF/LF</th>
                  <th className="border border-gray-500 p-2 text-[17px] text-black">HF/LF PoE</th>
                  <th className="border border-gray-500 p-2 text-[17px] text-black">HF PoE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                    Carrier Frequencies</td>
                  <td className="border border-gray-500 p-2 text-[17px] text-black">
                    13.56 MHz</td>
                  <td colSpan="2" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                    13.56 MHz and 125 kHz</td>
                  <td className="border border-gray-500 p-2 text-[17px] text-black">
                    13.56 MHz</td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                    Low Frequency(125kHz) Compatibility
                  </td>
                  <td className="border border-gray-500 p-2 text-[17px] text-black">
                     N/A
                  </td>
                  <td colSpan="2" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                    HID ® Prox, Indala ®, CASI-RUSCO®, AWID and others
                  </td>
                  <td className="border border-gray-500 p-2 text-[17px] text-black">
                   N/A
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                    High Frequency(13.56MHz)Compatibility
                  </td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                    uTrust TS, MIFARE Classic, MIFARE DESFireEVx, ISO15693 UID, ISO14443A UID
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                    Data Protocol
                  </td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                    Wiegand or RS-485/OSDP (2 Wire – Half Duplex) FICAM Ready
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                    Power Supply
                  </td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                    12 VDC or PoE (802.3af)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                    Housing Material
                  </td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                    UL 94 Polycarbonate, Black
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                    Operating Temperature
                  </td>
                  <td colSpan="2" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                    -31 to 150°F (-35 to 66°C)</td>
                  <td colSpan="2" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                    32 to 120°F (0 to 49°C)</td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                    Storage Temperature
                  </td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                   -31 to 185° F (-35 to 85° C)
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                    Operating Humidity
                  </td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                  5% to 95% relative humidity (non-condensing)
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                    Status Indicator
                  </td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                   RGB LED, Buzzer
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                    Cable Distance
                  </td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                   Wiegand 500 ft (152 m) 18 AWG wire, RS-485 4000 ft (1200 m) 18 AWG shielded twisted pair
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                    Certifications
                  </td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                   FCC, UL 294, CE, IC, RCM, RoHS2, REACH
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                    Environmental Rating</td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                    Pigtail versions: IP67; Terminal versions: IP65; PoE versions: IP55</td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 text-[17px] text-black font-bold bg-gray-50">
                    Warranty</td>
                  <td colSpan="4" className="border border-gray-500 p-2 text-[17px] text-black text-center">
                    Limited Lifetime</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tags */}
          <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="text-white border bg-red-500 px-2 py-1 rounded">Hirsch</p>
            <p className="text-white border bg-red-500 px-2 py-1 rounded">Access Control System</p>
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

export default GovernmentReader;