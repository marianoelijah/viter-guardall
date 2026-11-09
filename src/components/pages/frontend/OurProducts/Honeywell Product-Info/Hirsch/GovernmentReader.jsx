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
      <div className="bg-gray-100 dark:bg-[#121214] min-h-screen font-sans text-black dark:text-gray-200 pb-12 transition-colors duration-300">
        {/* Blue Header Banner */}
        <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-12 px-4 text-center transition-colors duration-300">
          <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
            uTrust TS Government Readers: <br/>
            Mullion, Wall Mount, and Wall Mount Keypad
          </h1>
        </header>

        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="lg:w-3/4 bg-gray-300 dark:bg-[#1e1e22] p-8 shadow-sm rounded-sm border border-transparent dark:border-gray-800 transition-colors duration-300">
            <p className="text-[15px] leading-relaxed mb-6 text-gray-800 dark:text-gray-300 font-medium">
              Provides cost-effective, highly secure, and compliant FICAM-certified solutions for federal agencies and contractors.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
                Product Description:
              </h2>
              <div className="text-[15px] leading-relaxed space-y-4 mb-6 text-gray-800 dark:text-gray-300">
                <p>
                  Identiv's uTrust TS Government Readers offer an extensive product line that encompasses both single and dual-factor authentication configurations.
                </p>
                <p>
                  uTrust TS Government Readers are the industry's most flexible and highly secure intelligent door reader endpoint. They enable agencies to deploy a highly secure U.S. government FICAM card authentication key (CAK) at a fraction of the cost of competing solutions.
                </p>
              </div>

              <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
                Product Features:
              </h2>
              <ul className="list-disc ml-5 text-[15px] text-gray-800 dark:text-gray-300 space-y-1">
                {productFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-4 uppercase transition-colors">
              Technical Specification:
            </h2>
            
            {/* 1. uTrust TS Mullion Government Reader Specifications */}
            <div className="mb-8">
              <h3 className="font-bold text-[17px] text-black dark:text-blue-400 bg-gray-200 dark:bg-gray-800 p-2 border border-b-0 border-gray-500 dark:border-gray-700">
                uTrust TS Mullion Government Reader Specifications
              </h3>
              <table className="w-full border-collapse border border-gray-500 dark:border-gray-700 text-[10px]">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800 font-bold">
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-left w-1/4"></th>
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200">TS Mullion HF</th>
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200">TS Mullion HF/LF</th>
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200">TS Mullion HF PoC</th>
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200">TS Mullion HF PoC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">Port Numbers</td>
                    <td colSpan="1" className="border border-gray-500 dark:border-gray-700 p-2 text-[15px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      8102ABP0000810 <br/>
                      2ABT00008102AB <br/>
                      PF0008102ABTF0 <br/>
                      008102ABPR0008 <br/>
                      102ABTR000
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[15px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      8112ABP00008112ABT <br/>
                      00008112ABPF000811 <br/>
                      2ABTF0008112ABPR00 <br/>
                      08112ABTR000
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[15px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      8132ABP00008132ABT <br/>
                      00008132ABPF000813 <br/>
                      2ABTF0008132ABPR00 <br/>
                      08132ABTR000
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[15px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      8152ABP00008152ABT <br/>
                      00008152ABPF000815 <br/>
                      2ABTF0008152ABPR00 <br/>
                      08152ABTR000
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Current Consumption (@12V)
                    </td>
                    <td colSpan="2" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      100 mA Average 133 mA Peak
                    </td>
                    <td colSpan="2" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      167 mA Average; 211 mA Peak; PoE: @48V
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Dimensions
                    </td>
                    <td colSpan="4" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      Body: 4.6 in (11.7 cm) H x 1.7 in (4.3 cm) W x 1.1 in (2.8 cm) D
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Product Weight
                    </td>
                    <td colSpan="4" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      5 oz. (142 g)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Connection
                    </td>
                    <td colSpan="4" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      Pigtail or Terminal Strip
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 2. uTrust TS Wall Mount Government Reader Specifications */}
            <div className="mb-8">
              <h3 className="font-bold text-[17px] text-black dark:text-blue-400 bg-gray-200 dark:bg-gray-800 p-2 border border-b-0 border-gray-500 dark:border-gray-700">
                uTrust TS Wall Mount Government Reader Specifications
              </h3>
              <table className="w-full border-collapse border border-gray-500 dark:border-gray-700 text-[10px]">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800 font-bold">
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-left w-1/4"></th>
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200">TS Mullion HF</th>
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200">TS Mullion HF/LF</th>
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200">TS Mullion HF PoC</th>
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200">TS Mullion HF PoC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">Port Numbers</td>
                    <td colSpan="1" className="border border-gray-500 dark:border-gray-700 p-2 text-[15px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      8102ABP00008102 <br/>
                      ABT00008102ABPF <br/>
                      0008102ABTF0008 <br/>
                      102ABPR0008102A <br/>
                      BTR000
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[15px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      8112ABP00008112ABT <br/>
                      00008112ABPF000811 <br/>
                      2ABTF0008112ABPR00 <br/>
                      08112ABTR000
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[15px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      8132ABP00008132ABT <br/>
                      00008132ABPF000813 <br/>
                      2ABTF0008132ABPR00 <br/>
                      08132ABTR000
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[15px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      8152ABP00008152ABT <br/>
                      00008152ABPF000815 <br/>
                      2ABTF0008152ABPR00 <br/>
                      08152ABTR000
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Current Consumption (@12V)
                    </td>
                    <td colSpan="2" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      97 mA Average 114 mA Peak
                    </td>
                    <td colSpan="2" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      172 mA Average; 202 mA Peak; PoE: @48V 50
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Dimensions
                    </td>
                    <td colSpan="4" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      Body: 4.6 in (11.7 cm) H x 3.1 in (7.8 cm) W x 1.1 in (2.8 cm) D
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Product Weight
                    </td>
                    <td colSpan="4" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      10.25 oz (290 g)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Connection
                    </td>
                    <td colSpan="4" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      Pigtail or Terminal Strip
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 3. uTrust TS Wall Mount Keypad Government Reader Specifications */}
            <div className="mb-8">
              <h3 className="font-bold text-[17px] text-black dark:text-blue-400 bg-gray-200 dark:bg-gray-800 p-2 border border-b-0 border-gray-500 dark:border-gray-700">
                uTrust TS Wall Mount Government Reader Specifications
              </h3>
              <table className="w-full border-collapse border border-gray-500 dark:border-gray-700 text-[10px]">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800 font-bold">
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-left w-1/4"></th>
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200">TS Mullion HF</th>
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200">TS Mullion HF/LF</th>
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200">TS Mullion HF PoC</th>
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200">TS Mullion HF PoC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">Port Numbers</td>
                    <td colSpan="1" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      8202ABP00008202AB <br/>
                      T00008202ABPF0008 <br/>
                      202ABTF0008202ABP <br/>
                      R0008202ABTR000
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      8212ABP00008212ABT <br/>
                      00008212ABPF000821 <br/>
                      2ABTF0008212ABPR00 <br/>
                      08212ABTR000
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      8232ABT00 <br/>
                      008232ABT <br/>
                      F0008232A <br/>
                      BTR000
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      8252ABT00 <br/>
                      008252ABT <br/>
                      F0008252A <br/>
                      BTR000
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Current Consumption (@12V)
                    </td>
                    <td colSpan="2" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      110 mA Average 155 mA Peak
                    </td>
                    <td colSpan="2" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      180 mA Average; 255 mA Peak; PoE: @48V 80 mA Peak
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Dimensions
                    </td>
                    <td colSpan="4" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      Body: 4.6 in (11.7 cm) H x 3.1 in (7.8 cm) W x 1.1 in (2.8 cm) D
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Product Weight
                    </td>
                    <td colSpan="4" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      10.93 oz (310 g)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Connection
                    </td>
                    <td colSpan="4" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      Pigtail or Terminal Strip
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 4. Common Specifications (Bottom Table) */}
            <div>
              <h3 className="font-bold text-[17px] text-black dark:text-blue-400 bg-gray-200 dark:bg-gray-800 p-2 border border-b-0 border-gray-500 dark:border-gray-700">
                Common Specifications
              </h3>
              <table className="w-full border-collapse border border-gray-500 dark:border-gray-700 text-[10px]">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800 font-bold">
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 text-left w-1/4"></th>
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200">HF</th>
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200">HF/LF</th>
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200">HF/LF PoE</th>
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200">HF PoE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Carrier Frequencies</td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 bg-white dark:bg-[#1e1e22]">
                      13.56 MHz</td>
                    <td colSpan="2" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      13.56 MHz and 125 kHz</td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 bg-white dark:bg-[#1e1e22]">
                      13.56 MHz</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Low Frequency(125kHz) Compatibility
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 bg-white dark:bg-[#1e1e22]">
                      N/A
                    </td>
                    <td colSpan="2" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      HID ® Prox, Indala ®, CASI-RUSCO®, AWID and others
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 bg-white dark:bg-[#1e1e22]">
                      N/A
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      High Frequency(13.56MHz)Compatibility
                    </td>
                    <td colSpan="4" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      uTrust TS, MIFARE Classic, MIFARE DESFireEVx, ISO15693 UID, ISO14443A UID
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Data Protocol
                    </td>
                    <td colSpan="4" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      Wiegand or RS-485/OSDP (2 Wire – Half Duplex) FICAM Ready
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Power Supply
                    </td>
                    <td colSpan="4" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      12 VDC or PoE (802.3af)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Housing Material
                    </td>
                    <td colSpan="4" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      UL 94 Polycarbonate, Black
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Operating Temperature
                    </td>
                    <td colSpan="2" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      -31 to 150°F (-35 to 66°C)</td>
                    <td colSpan="2" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      32 to 120°F (0 to 49°C)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Storage Temperature
                    </td>
                    <td colSpan="4" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      -31 to 185° F (-35 to 85° C)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Operating Humidity
                    </td>
                    <td colSpan="4" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      5% to 95% relative humidity (non-condensing)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Status Indicator
                    </td>
                    <td colSpan="4" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      RGB LED, Buzzer
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Cable Distance
                    </td>
                    <td colSpan="4" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      Wiegand 500 ft (152 m) 18 AWG wire, RS-485 4000 ft (1200 m) 18 AWG shielded twisted pair
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Certifications
                    </td>
                    <td colSpan="4" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      FCC, UL 294, CE, IC, RCM, RoHS2, REACH
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Environmental Rating</td>
                    <td colSpan="4" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      Pigtail versions: IP67; Terminal versions: IP65; PoE versions: IP55</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Warranty</td>
                    <td colSpan="4" className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-black dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      Limited Lifetime</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tags */}
            <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
              <p className="text-white border-0 bg-[#ff5f31] px-2 py-1 rounded shadow-sm">Hirsch</p>
              <p className="text-white border-0 bg-[#ff5f31] px-2 py-1 rounded shadow-sm">Access Control System</p>
            </div> 

            {/* Share Section */}
            <SocialShare title="Check out this product!" />
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/4 space-y-6">
            <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
              <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">
                More By HIRSCH
              </h3>
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

export default GovernmentReader;