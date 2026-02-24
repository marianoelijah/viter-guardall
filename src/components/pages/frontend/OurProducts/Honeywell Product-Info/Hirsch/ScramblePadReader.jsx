import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';

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
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800 pb-12">
      {/* Blue Header Banner */}
      <header className="bg-[#8ba4ca] text-white py-12 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight uppercase">
          Hirsch Scramble Pad Readers
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <main className="lg:w-3/4 bg-white p-8 shadow-sm">
          <p className="text-[13px] leading-relaxed mb-6 italic">
            A high-security keypad with patented scrambling function to avoid pattern recognition.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-[14px] mb-2 uppercase">Product Description:</h2>
            <div className="text-[13px] leading-relaxed space-y-4 mb-6">
              <p>
                Identiv's ScramblePad design is specified in many of the world's most secure locations due to its high-security scramble feature that randomly orders the digits each time the "START" button is pressed or a card requiring a PIN is presented.
              </p>
              <p>
                The random scrambling prevents the acquisition of a user code via pattern recognition and also prevents keypad wear that leaves a tell-tale impression of the numbers used in a valid PIN. This feature is further enhanced by the use of viewing restrictors that narrow the field of vision; only the person directly facing the ScramblePad can see the presented digits.
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
                  <th className="border border-gray-300 p-2">TS ScramblePad HF/LF</th>
                  <th className="border border-gray-300 p-2">TS ScramblePad HF</th>
                  <th className="border border-gray-300 p-2">TS ScramblePad HF/LF Commercial (No FICAM)</th>
                  <th className="border border-gray-300 p-2">TS ScramblePad HF Commercial (No FICAM)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Part Numbers</td>
                  <td className="border border-gray-300 p-2">8332ABT0000 | 8332ABTF000 | 8332ABTR000</td>
                  <td className="border border-gray-300 p-2">8352ABT0000 | 8352ABTF000 | 8352ABTR000</td>
                  <td className="border border-gray-300 p-2">8330ABT0000 | 8330ABTR000</td>
                  <td className="border border-gray-300 p-2">8350ABT0000 | 8350ABTR000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Carrier Frequencies</td>
                  <td className="border border-gray-300 p-2 text-center">13.56MHz and 125 kHz</td>
                  <td className="border border-gray-300 p-2 text-center">13.56MHz</td>
                  <td className="border border-gray-300 p-2 text-center">13.56MHz and 125 kHz</td>
                  <td className="border border-gray-300 p-2 text-center">13.56MHz</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Current Consumption (@12V)</td>
                  <td colSpan="4" className="border border-gray-300 p-2 text-center">
                    335 mA Average; 425 mA Peak; PoE @ 55V 80 mA Peak
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Dimensions</td>
                  <td colSpan="4" className="border border-gray-300 p-2 text-center">
                    Face: 5.75 in (14.6 cm) H x 4.5 in (11.4 cm) W x .625 in (1.6 cm) D<br/>
                    Body: 4.5 in (11.4 cm) H x 3.5 in (8.9 cm) W x 1.75 in (4.4 cm)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">OSDP Baud Rate/Address</td>
                  <td colSpan="4" className="border border-gray-300 p-2 text-center">
                    115,200 kbps; Address 0, Address 1 (P1,1 to P1,4 jumper)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Mounting Accessories</td>
                  <td colSpan="4" className="border border-gray-300 p-2 text-center">
                    MB1, MB2, MB2S, MB2SL2, MB3, MB4, MB5, MB5-S, MB8, MB9, UMK, MBX
                  </td>
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
            <span className="bg-[#ff6b35] text-white text-[10px] px-2 py-1 font-bold uppercase">Hirsch</span>
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
              <li>MAD-401 and MAD-402 Series Addressable Modules</li>
              <li>INR 415 256-Channel 12 Bay RAID Rackmount</li>
              <li>GNR 340 100-Channel Tower Standalone</li>
              <li>ENR 130 16-Channel Desktop Standalone NVR</li>
              <li>Z86 Outdoor Network Dome Camera</li>
            </ul>
          </div>

          <div className="bg-[#1e4e8c] text-white p-6">
            <h3 className="text-xl font-bold mb-4 leading-tight">Secure Your Peace Of Mind Today</h3>
            <p className="text-xs mb-6 opacity-90">
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

export default ScramblePadReader;