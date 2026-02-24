import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';

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
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      {/* Blue Header Banner */}
      <header className="bg-[#8ba4ca] text-white py-12 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          uTrust TS Contact Smart Card Readers
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <main className="lg:w-3/4 bg-white p-8 shadow-sm">
          <p className="text-[13px] leading-relaxed mb-6">
            Deliver unparalleled security and flexibility for government PACS, combining high-assurance smart card technology with FICAM compliance and versatile authentication options.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-[14px] mb-2">Product Description:</h2>
            <div className="text-[13px] leading-relaxed space-y-4 mb-6">
              <p>
                Designed specifically with high-security government applications in mind, Identiv's uTrust TS Contact Smart Card (SC) Readers offer an excellent balance of compliance, interoperability, and security for federal agencies, government contractors, and other mission-critical facilities.
              </p>
              <p>
                In addition to proximity and smart cards, uTrust TS Readers support TS Cards, highly secure standards-based credentials. Strong authentication ensures that information is transferred only after the system has determined that both parties in the system are trustworthy and has validated that the data can be transferred securely.
              </p>
            </div>

            <h2 className="font-bold text-[14px] mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[13px] space-y-1">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          {/* Technical Specifications Table */}
          <section className="mt-10 overflow-x-auto">
            <h2 className="font-bold text-[14px] mb-4">Technical Specification:</h2>
            <table className="w-full border-collapse border border-gray-300 text-[11px]">
              <thead>
                <tr className="bg-gray-50 uppercase font-bold text-[10px]">
                  <th className="border border-gray-300 p-2 text-left w-1/4"></th>
                  <th className="border border-gray-300 p-2 text-left">TS Wall Mount SC</th>
                  <th className="border border-gray-300 p-2 text-left">TS Wall Mount Keypad SC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Part Numbers</td>
                  <td className="border border-gray-300 p-2 break-all">8105ABP0000|8105ABF000|8105ABPR0008105ABTF0008105ABTF0008105ABTR000</td>
                  <td className="border border-gray-300 p-2 break-all">8205ABP0000|8205ABPF0008205ABP R0008205ABTF0008205ABTF000820 5ABTR000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Description</td>
                  <td className="border border-gray-300 p-2">TS Wall Mount with Contact Smart Card Reader</td>
                  <td className="border border-gray-300 p-2">TS Wall Mount Keypad with Contact Smart Card Reader</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Carrier Frequencies</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center">13.56 MHz only or 13.56 MHz and 125 KHz</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Current Consumption (@ 12V)</td>
                  <td className="border border-gray-300 p-2">95mA Average / 125mA Peak</td>
                  <td className="border border-gray-300 p-2">110mA Average / 150mA Peak</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Dimensions</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center">5.0 x 3.4 x 1.3 in (12.7 x 8.6 x 3.3 cm)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Low Frequency (125 kHz) Compatibility</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center">HID® Prox, Indala®, Casi Rusco®, AWID, and others</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">High Frequency (13.56 MHz) Compatibility</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center text-[10px]">PIV, PIV-I, CIV, CAC, TWIC, uTrust TS, MIFARE Classic, MIFARE DESFire EVx, ISO15693 UID, ISO14443A UID</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Warranty</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center">Two (2) Years</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Tags */}
          <div className="flex gap-2 mt-8">
            <span className="bg-[#ff6b35] text-white text-[10px] px-2 py-1 font-bold uppercase">HIRSCH</span>
            <span className="bg-[#ff6b35] text-white text-[10px] px-2 py-1 font-bold uppercase">Access Control System</span>
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
          <div className="bg-gray-50 p-4 border border-gray-200">
            <h3 className="text-[11px] font-bold text-gray-400 uppercase mb-4 border-b pb-1">More By HIRSCH</h3>
            <ul className="text-[10px] space-y-4 text-gray-400">
              <li>Onity DirectKey with Serene</li>
              <li>MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs</li>
              <li>INR 415 256-Channel 12 Bay RAID Rackmount Standalone</li>
              <li>GNR 340 100-Channel Tower Standalone</li>
              <li>ENR 130 16-Channel Desktop Standalone NVR - No HDD Included</li>
              <li>Z86 Outdoor Network Dome Camera with Night Vision</li>
            </ul>
          </div>

          <div className="bg-[#1e4e8c] text-white p-6">
            <h3 className="text-xl font-bold mb-4 leading-tight">Secure Your Piece Of Mind Today</h3>
            <p className="text-xs mb-6 opacity-90 leading-relaxed">
              Contact Guard-All now for a customized security solution that protects what matters most.
            </p>
            <button className="border-2 border-white px-4 py-2 text-xs font-bold uppercase hover:bg-white hover:text-[#1e4e8c] transition-all">
              Contact Us Today
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SmartCardReader;