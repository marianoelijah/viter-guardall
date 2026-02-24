import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';

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
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800 pb-12">
      {/* Header Banner */}
      <header className="bg-[#8ba4ca] text-white py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight max-w-5xl mx-auto uppercase">
          Hirsch TS ScramblePad SC: FICAM-Capable TS ScramblePad with Contact Smart Card Reader
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <main className="lg:w-3/4 bg-white p-8 shadow-sm">
          <p className="text-[13px] leading-relaxed mb-6">
            A high-security keypad that features a patented scrambling function, it can also be used for contactless and contact smart card.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-[14px] mb-2 uppercase">Product Description:</h2>
            <div className="text-[13px] leading-relaxed space-y-4 mb-6">
              <p>
                Hirsch TS ScramblePad SC provides high-security keypad functionality, a contactless interface, and a contact reader for two-factor authentication. The ScramblePad design is specified in many of the world’s most secure locations due to its high-security scramble feature that randomly orders the digits each time the "START" button is pressed or a card requiring a PIN is presented.
              </p>
              <p>
                The random scrambling prevents the acquisition of a user code via pattern recognition and also prevents keypad wear leaving a tell-tale impression of the numbers used in a valid PIN. This feature is further enhanced by the use of viewing restrictors narrowing the field of vision; only the person directly facing the ScramblePad can see the presented digits.
              </p>
            </div>

            <h2 className="font-bold text-[14px] mb-2 uppercase">Product Features:</h2>
            <ul className="list-disc ml-5 text-[13px] space-y-1 mb-8">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          <h2 className="font-bold text-[14px] mb-4 uppercase">Technical Specification:</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-[10px]">
              <thead>
                <tr className="bg-gray-100 font-bold">
                  <th className="border border-gray-300 p-2 text-left w-1/4"></th>
                  <th className="border border-gray-300 p-2 text-center">TS ScramblePad SC Wiegand</th>
                  <th className="border border-gray-300 p-2 text-center">TS ScramblePad SC RS-485/OSDP</th>
                  <th className="border border-gray-300 p-2 text-center">TS ScramblePad SC SCFICAM</th>
                  <th className="border border-gray-300 p-2 text-center">TS ScramblePad SC FICAM-Strict</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Part Numbers</td>
                  <td className="border border-gray-300 p-2">8335ART0000</td>
                  <td className="border border-gray-300 p-2">8335ARTF000</td>
                  <td className="border border-gray-300 p-2">8335ARTF000</td>
                  <td className="border border-gray-300 p-2">8335ARTFF00</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Carrier Frequencies</td>
                  <td colSpan="3" className="border border-gray-300 p-2 text-center">125 kHz / 13.56 MHz</td>
                  <td className="border border-gray-300 p-2 text-center">13.56 MHz</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Current Consumption (@ 12 V)</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center">270 mA typical; 300 mA Peak</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center">@ 48V: 68 mA typical; 82 mA Peak</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Dimensions</td>
                  <td colSpan="4" className="border border-gray-300 p-2 text-center">
                    Face: 5.75 (H) x 4.37 (W) in (14.6 x 11.1 cm)<br/>
                    Body: 5.0 (H) x 3.5 (W) x 2.75 (D) in (12.7 x 8.89 x 7.0 cm)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Low Frequency Compatibility</td>
                  <td colSpan="3" className="border border-gray-300 p-2 text-center">HID Prox, Indala, Casi Rusco, AWID, Farpointe, and others</td>
                  <td className="border border-gray-300 p-2 text-center">None</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">FICAM Certifications</td>
                  <td className="border border-gray-300 p-2 text-center">No</td>
                  <td className="border border-gray-300 p-2 text-center">Upgradable</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Warranty</td>
                  <td colSpan="4" className="border border-gray-300 p-2 text-center">Two (2) years</td>
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
              <li>MAD-401 and MAD-402 Series Addressable Modules</li>
              <li>INR 415 256-Channel 12 Bay RAID Rackmount</li>
              <li>GNR 340 100-Channel Tower Standalone</li>
              <li>ENR 130 16-Channel Desktop Standalone NVR</li>
              <li>Z86 Outdoor Network Dome Camera</li>
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

export default TsScramblePad;