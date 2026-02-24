import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';

const GovernmentReader = () => {
  const productFeatures = [
    "Versatile platform with full range of FIPS 201 approved products",
    "Supports PIV, PIV-I, CIV, CAC, with optional support for legacy proximity",
    "Fast, usable, FICAM-compliant card authentication key (CAK) validation",
    "FICAM certified for CAK validation systems; enables compliance with FIPS 201, FIPS 140-2, and NIST SP800-116 publications"
  ];

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800 pb-12">
      {/* Blue Header Banner */}
      <header className="bg-[#8ba4ca] text-white py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight max-w-4xl mx-auto">
          uTrust TS Government Readers: Mullion, Wall Mount, and Wall Mount Keypad
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <main className="lg:w-3/4 bg-white p-8 shadow-sm">
          <p className="text-[13px] leading-relaxed mb-6">
            Provides cost-effective, highly secure, and compliant FICAM-certified solutions for federal agencies and contractors.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-[14px] mb-2">Product Description:</h2>
            <div className="text-[13px] leading-relaxed space-y-4 mb-6">
              <p>
                Identiv's uTrust TS Government Readers offer an extensive product line that encompasses both single and dual-factor authentication configurations.
              </p>
              <p>
                uTrust TS Government Readers are the industry's most flexible and highly secure intelligent door reader endpoint. They enable agencies to deploy a highly secure U.S. government FICAM card authentication key (CAK) at a fraction of the cost of competing solutions.
              </p>
            </div>

            <h2 className="font-bold text-[14px] mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[13px] space-y-1">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          <h2 className="font-bold text-[14px] mb-4 uppercase">Technical Specification:</h2>
          
          {/* 1. Mullion Reader Specifications */}
          <div className="mb-8">
             <h3 className="font-bold text-[12px] bg-gray-50 p-2 border border-b-0 border-gray-300">uTrust TS Mullion Government Reader Specifications</h3>
             <table className="w-full border-collapse border border-gray-300 text-[10px]">
                <thead>
                   <tr className="bg-gray-100 font-bold">
                      <th className="border border-gray-300 p-2 text-left w-1/4"></th>
                      <th className="border border-gray-300 p-2">TS Mullion HF</th>
                      <th className="border border-gray-300 p-2">TS Mullion HF/LF</th>
                      <th className="border border-gray-300 p-2">TS Mullion HF PoC</th>
                      <th className="border border-gray-300 p-2">TS Mullion HF PoC</th>
                   </tr>
                </thead>
                <tbody>
                   <tr>
                      <td className="border border-gray-300 p-2 font-bold bg-gray-50">Current Consumption (@12V)</td>
                      <td colSpan="2" className="border border-gray-300 p-2 text-center">100 mA average/ 120 mA Peak</td>
                      <td colSpan="2" className="border border-gray-300 p-2 text-center">107 mA average; 211 mA Peak (PoE @48V In)</td>
                   </tr>
                   <tr>
                      <td className="border border-gray-300 p-2 font-bold bg-gray-50">Dimensions</td>
                      <td colSpan="4" className="border border-gray-300 p-2 text-center">Body: 4.6 in (11.7 cm) H x 1.7 in (4.3 cm) W x 1.1 in (2.8 cm) D</td>
                   </tr>
                </tbody>
             </table>
          </div>

          {/* 2. Common Specifications (Bottom Table) */}
          <div>
            <h3 className="font-bold text-[12px] bg-gray-50 p-2 border border-b-0 border-gray-300">Common Specifications</h3>
            <table className="w-full border-collapse border border-gray-300 text-[10px]">
              <thead>
                <tr className="bg-gray-100 font-bold">
                  <th className="border border-gray-300 p-2 text-left w-1/4"></th>
                  <th className="border border-gray-300 p-2">HF</th>
                  <th className="border border-gray-300 p-2">HF/LF</th>
                  <th className="border border-gray-300 p-2">HF/LF PoE</th>
                  <th className="border border-gray-300 p-2">HF PoE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Carrier Frequencies</td>
                  <td className="border border-gray-300 p-2">13.56 MHz</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center">13.56 MHz and 125 kHz</td>
                  <td className="border border-gray-300 p-2">13.56 MHz</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Operating Temp.</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center">-31 to 150°F (-35 to 66°C)</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center">32 to 120°F (0 to 49°C)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Environmental Rating</td>
                  <td colSpan="4" className="border border-gray-300 p-2 text-center">Pigtail versions: IP67; Terminal versions: IP65; PoE versions: IP55</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Warranty</td>
                  <td colSpan="4" className="border border-gray-300 p-2 text-center">Limited Lifetime</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tags */}
          <div className="flex gap-2 mt-8">
            <span className="bg-[#ff6b35] text-white text-[10px] px-2 py-1 font-bold uppercase tracking-wider">Hirsch</span>
            <span className="bg-[#ff6b35] text-white text-[10px] px-2 py-1 font-bold uppercase tracking-wider">Access Control System</span>
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

          <div className="bg-[#1e4e8c] text-white p-6 relative overflow-hidden">
            <h3 className="text-xl font-bold mb-4 leading-tight relative z-10">Secure Your Piece Of Mind Today</h3>
            <p className="text-xs mb-6 opacity-90 leading-relaxed relative z-10">
              Contact Guard-All now for a customized security solution that protects what matters most.
            </p>
            <button className="border-2 border-white px-4 py-2 text-xs font-bold uppercase hover:bg-white hover:text-[#1e4e8c] transition-all relative z-10">
              Contact Us Today
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default GovernmentReader;