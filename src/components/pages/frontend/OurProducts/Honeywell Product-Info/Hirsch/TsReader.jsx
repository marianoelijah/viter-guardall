import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';


const TsReader = () => {
  const productFeatures = [
    "Styles, configurations, and functionalities to support all major credentials from proximity to secure smart card",
    "Multiple layers of security based on a certified hardware security element",
    "Supports Wiegand or RS-485/OSDP data protocols; RS-485/OSDP enables remote firmware flashing",
    "Based on strong security without compromising interoperability"
  ];

  // Helper to render table headers for the hardware sections
  const renderHardwareHeader = (models) => (
    <thead>
      <tr className="bg-gray-100 font-bold text-[10px]">
        <th className="border border-gray-500 p-2 text-left w-1/4"></th>
        {models.map((model, idx) => (
          <th key={idx} className="border border-gray-500 p-2 text-center">{model}</th>
        ))}
      </tr>
    </thead>
  );

  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800 pb-12">
      {/* Blue Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-4 text-center">
        <h1 className="text-5xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto text-center">
              uTrust TS Readers: <br/> 
          Mullion, Wall Mount, and Wall Mount Keypad
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
          <p className="text-[17px] leading-relaxed mb-6">
            Delivers robust performance and maximum flexibility for diverse access control needs.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
            <div className="text-[17px] leading-relaxed space-y-4 mb-6">
              <p>
                uTrust TS Readers work with system changes and alterations, such as expansion, corporate mergers, or simply the desire to expand and increase a facility's security. From corporate campuses or universities to complex environments, they fully support entire populations of access control users.
              </p>
              <p>
                In addition to proximity and smart cards, uTrust TS Readers support TS Cards, highly secure standards-based credentials. Strong authentication ensures that information is transferred only after the system has determined that both parties in the system are trustworthy and has validated that the data can be transferred securely.
              </p>
            </div>

            <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1 mb-8">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          <h2 className="font-bold text-xl text-black mb-4 uppercase">Technical Specification:</h2>

          {/* 1. uTrust TS Mullion Reader Specifications */}
          <div className="mb-8">
             <h3 className="font-bold text-xl bg-gray-200 p-2 border border-b-0 border-gray-500">
              uTrust TS Mullion Reader Specifications
             </h3>
             <table className="w-full border-collapse border border-gray-500 text-[10px]">
                <thead>
                   <tr className="bg-gray-100 font-bold">
                      <th className="border border-gray-500 p-2 text-left w-1/4"></th>
                      <th className="border border-gray-500 p-2 text-[17px] text-gray-800">TS Mullion HF</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-gray-800">TS Mullion HF/LF</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-gray-800">TS Mullion LF</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-gray-800">TS Mullion HF/LF PoE</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-gray-800">TS Mullion HF PoE</th>
                   </tr>
                </thead>
                <tbody>
                  <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 font-bold bg-gray-50">Port Numbers</td>
                      <td colSpan="1" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                         8000ABP00 <br/>
                         008000ABT <br/>
                         00008000ABPR0008 <br/>
                         0ABTR000
                      </td>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                         8010ABP0000 <br/>
                         8010ABT0000 <br/>
                         8010ABPR000 <br/>
                         8010ABTR000
                      </td>
                       <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                         8020ABP0000 <br/>
                         8020ABT0000 <br/>
                         8020ABPR000 <br/>
                         8020ABTR000
                      </td>
                       <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                         8030ABP0000 <br/>
                         8030ABT0000 <br/>
                         8030ABPR000 <br/>
                         8030ABTR000
                      </td>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                         8050ABP0000 <br/>
                         8050ABT0000 <br/>
                         8050ABPR000 <br/>
                         8050ABTR000
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 font-bold bg-gray-50">
                        Current Consumption (@12V)
                      </td>
                      <td colSpan="2" className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                          100 mA Average 133 mA Peak
                      </td>
                      <td colSpan="3" className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                          167 mA Average; 211 mA Peak; PoE: @48V
                      </td>
                   </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Dimensions
                  </td>
                  <td colSpan="5" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                    Body: 4.6 in (11.7 cm) H x 1.7 in (4.3 cm) W x 1.1 in (2.8 cm) D
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Product Weight
                  </td>
                  <td colSpan="5" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                    5 oz. (142 g)
                  </td>
                </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 font-bold bg-gray-50">
                        Connection
                      </td>
                      <td colSpan="5" className="border border-gray-500 p-2 text-[17px] text-gray-800">
                       Pigtail or Terminal Strip
                      </td>
                   </tr>
                </tbody>
             </table>
          </div>

           {/* 2. uTrust TS Wall Mount Reader Specifications */}
          <div className="mb-8">
             <h3 className="font-bold text-xl bg-gray-200 p-2 border border-b-0 border-gray-500">
              uTrust TS Wall Mount Reader Specifications
             </h3>
             <table className="w-full border-collapse border border-gray-500 text-[10px]">
                <thead>
                   <tr className="bg-gray-100 font-bold">
                      <th className="border border-gray-500 p-2 text-left w-1/4"></th>
                      <th className="border border-gray-500 p-2 text-[17px] text-gray-800">TS Mullion HF</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-gray-800">TS Mullion HF/LF</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-gray-800">TS Mullion LF</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-gray-800">TS Mullion HF/LF PoE</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-gray-800">TS Mullion HF PoE</th>
                   </tr>
                </thead>
                <tbody>
                  <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 font-bold bg-gray-50">Port Numbers</td>
                      <td colSpan="1" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        8100ABP000 <br/>
                        08100ABT00 <br/>
                        008100ABPR <br/>
                        0008100ABT <br/>
                        R000
                      </td>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        8110ABP00008 <br/>
                        8110ABT00008 <br/>
                        8110ABPR0008 <br/>
                        110ABT000081 <br/>
                        10ABPR000811 <br/>
                        0ABTR000
                      </td>
                       <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                         8120ABP00008 <br/>
                         120ABT000081 <br/>
                         20ABPR000812 <br/>
                         0ABTR000
                      </td>
                       <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        8130ABP000081 <br/>
                        30ABT00008130 <br/>
                        ABPR0008130AB <br/>
                        TR000
                      </td>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        8150ABP000081 <br/>
                        50ABT00008150 <br/>
                        ABPR0008150AB <br/>
                        TR000
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 font-bold bg-gray-50">
                        Current Consumption (@12V)
                      </td>
                      <td colSpan="2" className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                          97 mA Average 114 mA Peak
                      </td>
                      <td colSpan="3" className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                          172 mA Average; 202 mA Peak; PoE: @48V 50mA Average; 55 mA Peak
                      </td>
                   </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Dimensions
                  </td>
                  <td colSpan="5" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                    Body: 4.6 in (11.7 cm) H x 3.1 in (7.8 cm) W x 1.1 in (2.8 cm) D
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Product Weight
                  </td>
                  <td colSpan="5" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                    10.25 oz (290 g)
                  </td>
                </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 font-bold bg-gray-50">
                        Connection
                      </td>
                      <td colSpan="5" className="border border-gray-500 p-2 text-[17px] text-gray-800">
                       Pigtail or Terminal Strip
                      </td>
                   </tr>
                </tbody>
             </table>
          </div>

          {/* 3. uTrust TS Wall Mount Keypad Reader Specifications */}
          <div className="mb-8">
             <h3 className="font-bold text-xl bg-gray-200 p-2 border border-b-0 border-gray-500">
              uTrust TS Wall Mount Keypad Reader Specifications
             </h3>
             <table className="w-full border-collapse border border-gray-500 text-[10px]">
                <thead>
                   <tr className="bg-gray-100 font-bold">
                      <th className="border border-gray-500 p-2 text-left w-1/4"></th>
                      <th className="border border-gray-500 p-2 text-[17px] text-gray-800">TS Mullion HF</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-gray-800">TS Mullion HF/LF</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-gray-800">TS Mullion LF</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-gray-800">TS Mullion HF/LF PoE</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-gray-800">TS Mullion HF PoE</th>
                   </tr>
                </thead>
                <tbody>
                  <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 font-bold bg-gray-50">Port Numbers</td>
                      <td colSpan="1" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        8100ABP000 <br/>
                        08100ABT00 <br/>
                        008100ABPR <br/>
                        0008100ABT <br/>
                        R000
                      </td>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        8110ABP00008 <br/>
                        8110ABT00008 <br/>
                        8110ABPR0008 <br/>
                        110ABT000081 <br/>
                        10ABPR000811 <br/>
                        0ABTR000
                      </td>
                       <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        8220ABT0000 <br/>
                        8220ABTR000
                      </td>
                       <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        8230ABT0000 <br/>
                        8230ABTR000
                      </td>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                       8250ABT00008 <br/>
                       250ABTR000
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 font-bold bg-gray-50">
                        Current Consumption (@12V)
                      </td>
                      <td colSpan="2" className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                          97 mA Average 114 mA Peak
                      </td>
                      <td colSpan="3" className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                          172 mA Average; 202 mA Peak; PoE: @48V 50mA Average; 55 mA Peak
                      </td>
                   </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Dimensions
                  </td>
                  <td colSpan="5" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                    Body: 4.6 in (11.7 cm) H x 3.1 in (7.8 cm) W x 1.1 in (2.8 cm) D
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Product Weight
                  </td>
                  <td colSpan="5" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                    10.25 oz (290 g)
                  </td>
                </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 font-bold bg-gray-50">
                        Connection
                      </td>
                      <td colSpan="5" className="border border-gray-500 p-2 text-[17px] text-gray-800">
                       Pigtail or Terminal Strip
                      </td>
                   </tr>
                </tbody>
             </table>
          </div>

          {/* 4. Common Specifications Section */}
          <div className="mb-8 overflow-x-auto">
            <h3 className="font-bold text-xl bg-gray-50 p-2 border border-b-0 border-gray-500">Common Specifications</h3>
            <table className="w-full border-collapse border border-gray-500 text-[10px]">
              <thead>
                <tr className="bg-gray-100 font-bold">
                  <th className="border border-gray-500 p-2 text-left w-1/4"></th>
                  <th className="border border-gray-500 p-2 text-[17px]">HF</th>
                  <th className="border border-gray-500 p-2 text-[17px]">HF/LF</th>
                  <th className="border border-gray-500 p-2 text-[17px]">LF</th>
                  <th className="border border-gray-500 p-2 text-[17px]">HF/LF PoE</th>
                  <th className="border border-gray-500 p-2 text-[17px]">HF PoE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">Carrier Frequencies</td>
                  <td className="border border-gray-500 p-2 text-center text-[15px]">13.56 MHz</td>
                  <td className="border border-gray-500 p-2 text-center text-[15px]">13.56 MHz and 125 kHz</td>
                  <td className="border border-gray-500 p-2 text-center text-[15px]">125 kHz</td>
                  <td className="border border-gray-500 p-2 text-center text-[15px]">13.56 MHz and 125 kHz</td>
                  <td className="border border-gray-500 p-2 text-center text-[15px]">13.56 MHz</td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">Low Frequency(125kHz) Compatibility</td>
                  <td className="border border-gray-500 p-2 text-center text-[15px]">N/A</td>
                  <td colSpan="3" className="border border-gray-500 p-2 text-center text-[15px]">HID ® Prox, Indala ®, CASI-RUSCO®, AWID and others</td>
                  <td className="border border-gray-500 p-2 text-center text-[15px]">N/A</td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">High Frequency(13.56MHz)Compatibility</td>
                  <td className="border border-gray-500 p-2 text-center text-[15px]">uTrust TS, MIFARE Classic, MIFARE DESFireEVx, ISO15693 UID, ISO14443A UID</td>
                  <td colSpan="3" className="border border-gray-500 p-2 text-center text-[15px]">N/A</td>
                  <td className="border border-gray-500 p-2 text-center text-[15px]">uTrust TS, MIFARE Classic, MIFARE DESFire EVx,ISO15693 UID, ISO14443A UID</td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Data Protocols
                  </td>
                  <td colSpan="5" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                    Wiegand or RS-485/OSDP (2 Wire – Half Duplex) FICAM Ready
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Power Supply
                  </td>
                  <td colSpan="5" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                    12 VDC or PoE (802.3af)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Housing Material
                  </td>
                  <td colSpan="5" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                    UL 94 Polycarbonate, Black
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Operating Temperature
                  </td>
                  <td colSpan="3" className="border border-gray-500 p-2 text-center text-[15px]">
                    -31 to 150°F (-35 to 66°C)
                  </td>
                  <td colSpan="2" className="border border-gray-500 p-2 text-center text-[15px]">
                    32 to 120°F (0 to 49°C)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Storage Temperature
                  </td>
                  <td colSpan="5" className="border border-gray-500 p-2 text-[15px]">
                    -31 to 150°F (-35 to 66°C)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Operating Humidity
                  </td>
                  <td colSpan="5" className="border border-gray-500 p-2 text-[15px]">
                    5% to 95% relative humidity (non-condensing)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Status Indicator
                  </td>
                  <td colSpan="5" className="border border-gray-500 p-2 text-[15px]">
                    RGB LED, Buzzer
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Cable Distance
                  </td>
                  <td colSpan="5" className="border border-gray-500 p-2 text-[15px]">
                   Wiegand 500 ft (152 m) 18 AWG wire, RS-485 4000 ft (1200 m) 18 AWG shielded twisted pair
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                   Certifications
                  </td>
                  <td colSpan="5" className="border border-gray-500 p-2 text-[15px]">
                    FCC, UL 294, CE, IC, RCM, RoHS2, REACH
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Environmental Rating
                  </td>
                  <td colSpan="5" className="border border-gray-500 p-2 text-[15px]">
                    Pigtail versions: IP67; Terminal versions IP65; PoE versions: IP55
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Warranty
                  </td>
                  <td colSpan="5" className="border border-gray-500 p-2 text-[15px]">
                    Limited Lifetime
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tags */}
            <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="text-lg text-white border bg-red-500 px-2">Hirsch</p>
            <p className="text-lg text-white border bg-red-500 px-2">Access Control System</p>
           </div> 

          {/* Share Section */}
          <div className="mt-8">
              <p className="font-medium text-black mb-3">Share:</p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/src/assets/image/social-logo/facebook.png" alt="Facebook" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/src/assets/image/social-logo/gmail.png" alt="Gmail" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/src/assets/image/social-logo/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/src/assets/image/social-logo/telegram.png" alt="Telegram" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/src/assets/image/social-logo/viber.png" alt="Viber" className="w-full h-full object-contain p-1" />
                </div>
              </div>
            </div>
        </main>

        {/* Sidebar */}
        <aside className="lg:w-1/4 space-y-6">
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

export default TsReader;