import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';

const TsReader = () => {
  const productFeatures = [
    "Styles, configurations, and functionalities to support all major credentials from proximity to secure smart card",
    "Multiple layers of security based on a certified hardware security element",
    "Supports Wiegand or RS-485/OSDP data protocols; RS-485/OSDP enables remote firmware flashing",
    "Based on strong security without compromising interoperability"
  ];

  return (
    <>
      <Header />
      <div className="bg-slate-50 dark:bg-[#121214] min-h-screen font-sans text-slate-900 dark:text-gray-200 transition-colors duration-300 pb-12">
        {/* Blue Header Banner */}
        <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-6 text-center shadow-inner transition-colors duration-300">
          <h1 className="text-4xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
            uTrust TS Readers: <br/> 
            Mullion, Wall Mount, and Wall Mount Keypad
          </h1>
        </header>

        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-12">
          
          {/* Main Content Area */}
          <main className="lg:col-span-9 bg-gray-200 dark:bg-[#1e1e22] p-8 rounded shadow-sm border border-transparent dark:border-gray-800 transition-colors duration-300">
            <p className="text-[17px] text-gray-800 dark:text-gray-300 mb-8 border-l-4 border-[#8ba4cc] dark:border-blue-500 pl-4 font-medium italic">
              Delivers robust performance and maximum flexibility for diverse access control needs.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-3 text-black dark:text-blue-400 uppercase transition-colors">Product Description:</h2>
              <div className="text-[17px] leading-relaxed text-slate-700 dark:text-gray-300 space-y-4 mb-6">
                <p>
                  uTrust TS Readers work with system changes and alterations, such as expansion, corporate mergers, or simply the desire to expand and increase a facility's security. From corporate campuses or universities to complex environments, they fully support entire populations of access control users.
                </p>
                <p>
                  In addition to proximity and smart cards, uTrust TS Readers support TS Cards, highly secure standards-based credentials. Strong authentication ensures that information is transferred only after the system has determined that both parties in the system are trustworthy and has validated that the data can be transferred securely.
                </p>
              </div>

              <h2 className="font-bold text-xl mb-3 text-black dark:text-blue-400 uppercase transition-colors">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] text-gray-800 dark:text-gray-300 space-y-1 mb-8">
                {productFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            <h2 className="font-bold text-xl mb-4 text-black dark:text-blue-400 uppercase transition-colors">Technical Specification:</h2>

            {/* 1. uTrust TS Mullion Reader Specifications */}
            <div className="mb-8 border border-gray-500 dark:border-gray-700 rounded-sm overflow-x-auto">
              <h3 className="font-bold text-[17px] text-black dark:text-blue-400 bg-gray-100 dark:bg-gray-800 p-3 border-b border-gray-500 dark:border-gray-700">
                uTrust TS Mullion Reader Specifications
              </h3>
              <table className="w-full text-[15px] text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800/60 font-bold uppercase text-black dark:text-blue-400">
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-left w-1/4"></th>
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-center">TS Mullion HF</th>
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-center">TS Mullion HF/LF</th>
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-center">TS Mullion LF</th>
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-center">TS Mullion HF/LF PoE</th>
                    <th className="border-b border-gray-500 dark:border-gray-700 p-2 text-center">TS Mullion HF PoE</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Part Numbers</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 text-center break-all">8000ABP0000 | 8000ABT0000 | 8000ABPR000 | 8000ABTR000</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 text-center break-all">8010ABP0000 | 8010ABT0000 | 8010ABPR000 | 8010ABTR000</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 text-center break-all">8020ABP0000 | 8020ABT0000 | 8020ABPR000 | 8020ABTR000</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 text-center break-all">8030ABP0000 | 8030ABT0000 | 8030ABPR000 | 8030ABTR000</td>
                    <td className="p-2 text-center break-all">8050ABP0000 | 8050ABT0000 | 8050ABPR000 | 8050ABTR000</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Current Consumption (@12V)</td>
                    <td colSpan="2" className="p-2 border-r border-gray-500 dark:border-gray-700 text-center">100 mA Average; 133 mA Peak</td>
                    <td colSpan="3" className="p-2 text-center">167 mA Average; 211 mA Peak; PoE: @48V</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Dimensions</td>
                    <td colSpan="5" className="p-2 text-center">Body: 4.6 in (11.7 cm) H x 1.7 in (4.3 cm) W x 1.1 in (2.8 cm) D</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Product Weight</td>
                    <td colSpan="5" className="p-2 text-center">5 oz. (142 g)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Connection</td>
                    <td colSpan="5" className="p-2 text-center">Pigtail or Terminal Strip</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 2. uTrust TS Wall Mount Reader Specifications */}
            <div className="mb-8 border border-gray-500 dark:border-gray-700 rounded-sm overflow-x-auto">
              <h3 className="font-bold text-[17px] text-black dark:text-blue-400 bg-gray-100 dark:bg-gray-800 p-3 border-b border-gray-500 dark:border-gray-700">
                uTrust TS Wall Mount Reader Specifications
              </h3>
              <table className="w-full text-[15px] text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800/60 font-bold uppercase text-black dark:text-blue-400">
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-left w-1/4"></th>
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-center">TS Wall Mount HF</th>
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-center">TS Wall Mount HF/LF</th>
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-center">TS Wall Mount LF</th>
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-center">TS Wall Mount HF/LF PoE</th>
                    <th className="border-b border-gray-500 dark:border-gray-700 p-2 text-center">TS Wall Mount HF PoE</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Part Numbers</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 text-center break-all">8100ABP0000 | 8100ABT0000 | 8100ABPR000 | 8100ABTR000</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 text-center break-all">8110ABP0000 | 8110ABT0000 | 8110ABPR000 | 8110ABTR000</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 text-center break-all">8120ABP0000 | 8120ABT0000 | 8120ABPR000 | 8120ABTR000</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 text-center break-all">8130ABP0000 | 8130ABT0000 | 8130ABPR000 | 8130ABTR000</td>
                    <td className="p-2 text-center break-all">8150ABP0000 | 8150ABT0000 | 8150ABPR000 | 8150ABTR000</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Current Consumption (@12V)</td>
                    <td colSpan="2" className="p-2 border-r border-gray-500 dark:border-gray-700 text-center">97 mA Average; 114 mA Peak</td>
                    <td colSpan="3" className="p-2 text-center">172 mA Average; 202 mA Peak; PoE: @48V 50mA Average; 55 mA Peak</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Dimensions</td>
                    <td colSpan="5" className="p-2 text-center">Body: 4.6 in (11.7 cm) H x 3.1 in (7.8 cm) W x 1.1 in (2.8 cm) D</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Product Weight</td>
                    <td colSpan="5" className="p-2 text-center">10.25 oz (290 g)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Connection</td>
                    <td colSpan="5" className="p-2 text-center">Pigtail or Terminal Strip</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 3. uTrust TS Wall Mount Keypad Reader Specifications */}
            <div className="mb-8 border border-gray-500 dark:border-gray-700 rounded-sm overflow-x-auto">
              <h3 className="font-bold text-[17px] text-black dark:text-blue-400 bg-gray-100 dark:bg-gray-800 p-3 border-b border-gray-500 dark:border-gray-700">
                uTrust TS Wall Mount Keypad Reader Specifications
              </h3>
              <table className="w-full text-[15px] text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800/60 font-bold uppercase text-black dark:text-blue-400">
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-left w-1/4"></th>
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-center">TS Keypad HF</th>
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-center">TS Keypad HF/LF</th>
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-center">TS Keypad LF</th>
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-center">TS Keypad HF/LF PoE</th>
                    <th className="border-b border-gray-500 dark:border-gray-700 p-2 text-center">TS Keypad HF PoE</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Part Numbers</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 text-center break-all">8200ABP0000 | 8200ABT0000 | 8200ABPR000 | 8200ABTR000</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 text-center break-all">8210ABP0000 | 8210ABT0000 | 8210ABPR000 | 8210ABTR000</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 text-center break-all">8220ABT0000 | 8220ABTR000</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 text-center break-all">8230ABT0000 | 8230ABTR000</td>
                    <td className="p-2 text-center break-all">8250ABT0000 | 8250ABTR000</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Current Consumption (@12V)</td>
                    <td colSpan="2" className="p-2 border-r border-gray-500 dark:border-gray-700 text-center">97 mA Average; 114 mA Peak</td>
                    <td colSpan="3" className="p-2 text-center">172 mA Average; 202 mA Peak; PoE: @48V 50mA Average; 55 mA Peak</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Dimensions</td>
                    <td colSpan="5" className="p-2 text-center">Body: 4.6 in (11.7 cm) H x 3.1 in (7.8 cm) W x 1.1 in (2.8 cm) D</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Product Weight</td>
                    <td colSpan="5" className="p-2 text-center">10.25 oz (290 g)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Connection</td>
                    <td colSpan="5" className="p-2 text-center">Pigtail or Terminal Strip</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 4. Common Specifications Section */}
            <div className="mb-8 border border-gray-500 dark:border-gray-700 rounded-sm overflow-x-auto">
              <h3 className="font-bold text-[17px] text-black dark:text-blue-400 bg-gray-100 dark:bg-gray-800 p-3 border-b border-gray-500 dark:border-gray-700">
                Common Specifications
              </h3>
              <table className="w-full text-[15px] text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800/60 font-bold uppercase text-black dark:text-blue-400">
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-left w-1/4"></th>
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-center">HF</th>
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-center">HF/LF</th>
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-center">LF</th>
                    <th className="border-b border-r border-gray-500 dark:border-gray-700 p-2 text-center">HF/LF PoE</th>
                    <th className="border-b border-gray-500 dark:border-gray-700 p-2 text-center">HF PoE</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Carrier Frequencies</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 text-center">13.56 MHz</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 text-center">13.56 MHz and 125 kHz</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 text-center">125 kHz</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 text-center">13.56 MHz and 125 kHz</td>
                    <td className="p-2 text-center">13.56 MHz</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Low Frequency (125kHz) Compatibility</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 text-center">N/A</td>
                    <td colSpan="3" className="p-2 border-r border-gray-500 dark:border-gray-700 text-center">HID® Prox, Indala®, CASI-RUSCO®, AWID and others</td>
                    <td className="p-2 text-center">N/A</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">High Frequency (13.56MHz) Compatibility</td>
                    <td className="p-2 border-r border-gray-500 dark:border-gray-700 text-center">uTrust TS, MIFARE Classic, MIFARE DESFire EVx, ISO15693 UID, ISO14443A UID</td>
                    <td colSpan="3" className="p-2 border-r border-gray-500 dark:border-gray-700 text-center">N/A</td>
                    <td className="p-2 text-center">uTrust TS, MIFARE Classic, MIFARE DESFire EVx, ISO15693 UID, ISO14443A UID</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Data Protocols</td>
                    <td colSpan="5" className="p-2 text-center">Wiegand or RS-485/OSDP (2 Wire – Half Duplex) FICAM Ready</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Power Supply</td>
                    <td colSpan="5" className="p-2 text-center">12 VDC or PoE (802.3af)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Housing Material</td>
                    <td colSpan="5" className="p-2 text-center">UL 94 Polycarbonate, Black</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Operating Temperature</td>
                    <td colSpan="3" className="p-2 border-r border-gray-500 dark:border-gray-700 text-center">-31 to 150°F (-35 to 66°C)</td>
                    <td colSpan="2" className="p-2 text-center">32 to 120°F (0 to 49°C)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Storage Temperature</td>
                    <td colSpan="5" className="p-2 text-center">-31 to 150°F (-35 to 66°C)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Operating Humidity</td>
                    <td colSpan="5" className="p-2 text-center">5% to 95% relative humidity (non-condensing)</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Status Indicator</td>
                    <td colSpan="5" className="p-2 text-center">RGB LED, Buzzer</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Cable Distance</td>
                    <td colSpan="5" className="p-2 text-center">Wiegand 500 ft (152 m) 18 AWG wire, RS-485 4000 ft (1200 m) 18 AWG shielded twisted pair</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Certifications</td>
                    <td colSpan="5" className="p-2 text-center">FCC, UL 294, CE, IC, RCM, RoHS2, REACH</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700/60 hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Environmental Rating</td>
                    <td colSpan="5" className="p-2 text-center">Pigtail versions: IP67; Terminal versions: IP65; PoE versions: IP55</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-2 font-bold border-r border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-black dark:text-gray-200">Warranty</td>
                    <td colSpan="5" className="p-2 text-center">Limited Lifetime</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#ff5f31] text-white text-sm px-2 py-1 rounded shadow-sm font-medium">Hirsch</span>
              <span className="bg-[#ff5f31] text-white text-sm px-2 py-1 rounded shadow-sm font-medium">Access Control System</span>
            </div> 

            {/* Share Section */}
            <SocialShare title="Check out this product!" />
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
              <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By HIRSCH</h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <NavLink to="/our-products/onity/directkey-with-serene" className="block">
                  <li className="cursor-pointer hover:text-[#ff5f31] dark:hover:text-[#ff5f31] transition-colors">Onity DirectKey with Serene</li>
                </NavLink>
                <NavLink to="/our-products/detnov/addressable-sounder" className="block">
                  <li className="cursor-pointer hover:text-[#ff5f31] dark:hover:text-[#ff5f31] transition-colors">MAD-401 and MAD-402 Series Modules</li>
                </NavLink>
                <NavLink to="/our-products/acti/bay-raid-backmount-standalone" className="block">
                  <li className="cursor-pointer hover:text-[#ff5f31] dark:hover:text-[#ff5f31] transition-colors">INR 415 256-Channel RAID Standalone</li>
                </NavLink>
                <NavLink to="/our-products/acti/channel-tower-strandalone" className="block">
                  <li className="cursor-pointer hover:text-[#ff5f31] dark:hover:text-[#ff5f31] transition-colors">GNR 340 100-Channel Tower NVR</li>
                </NavLink>
              </ul>
            </div>

            {/* Contact Card */}
            <div 
              className="relative min-h-[240px] overflow-hidden rounded-2xl p-8 text-white shadow-md bg-cover bg-center bg-blend-multiply bg-blue-900/85 dark:bg-blue-950/90"
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
                  className="inline-block w-full rounded-xl bg-[#0f3e90] dark:bg-blue-600 px-6 py-3 text-center text-sm font-semibold tracking-wider text-white transition-colors hover:bg-[#ff5f31] dark:hover:bg-[#ff5f31] sm:w-auto"
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

export default TsReader;