import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const ScrambleFactor = () => {
  const productFeatures = [
    "Supports comprehensive multi-factor authentication for enhanced security policies",
    "Compatible with OSDP and FICAM modes, continues to provide the industry's fastest credential processing performance",
    "Easily retrofitted into existing Hirsch mounting boxes or wall mounted, ensuring a smooth upgrade path",
    "Requires Hirsch Velocity security management system"
  ];

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800 pb-12">
      {/* Header Banner */}
      <header className="bg-[#8ba4ca] text-white py-12 px-4 text-center">
        <h1 className="text-4xl md:text-4xl font-bold tracking-tight max-w-5xl mx-auto uppercase">
          Hirsch Scramble Factor: High-Assurance Biometrics and Multi-Factor Authentication Reader
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <main className="lg:w-3/4 bg-white p-8 shadow-sm">
          <p className="text-[13px] leading-relaxed mb-6 italic">
            An advanced fingerprint biometrics with LCD touchscreen keypad designed for high-security areas.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-[14px] mb-2 uppercase">Product Description:</h2>
            <div className="text-[13px] leading-relaxed space-y-4 mb-6">
              <p>
                ScrambleFactor reimagines secure entry for the federal market with a fingerprint sensor, LCD touchscreen, virtual keypad, and contactless credential modes. The ScrambleFactor enables multiple authentication methods to deliver unparalleled security, speed, and functionality. ScrambleFactor offers federal users up to three-factor authentication suitable for the most secure areas.
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
                  <th className="border border-gray-300 p-2 text-center">SF.3 HF</th>
                  <th className="border border-gray-300 p-2 text-center">SF.3 HF/LF</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Part Number</td>
                  <td className="border border-gray-300 p-2 text-center">8413ABTM000</td>
                  <td className="border border-gray-300 p-2 text-center">8413ABTM000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Keypad</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center">12-character</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Carrier Frequencies</td>
                  <td className="border border-gray-300 p-2 text-center">13.56 MHz</td>
                  <td className="border border-gray-300 p-2 text-center">13.56 MHz and 125 kHz</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Biometric</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center">
                    Fingerprint: Optical, FBI certified (FIPS 201, PIV, and Mobile ID FAP 10 compliant) and STQC certified
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Screen</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center">ANSI INCITS 378-2004 and ISO/IEC 19794-2</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Environmental Rating</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center">IP55</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Operating Temp.</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center">-4 to 149°F (-20 to 65°C)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Mounting Accessories</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center">MB2, MB2S, MB2SL, MB3, MB4, MB5, MB5-S</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold bg-gray-50">Warranty</td>
                  <td colSpan="2" className="border border-gray-300 p-2 text-center">2 year limited warranty</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tags */}
          <div className="flex gap-2 mt-8">
            <span className="bg-[#ff6b35] text-white px-2 py-1 tracking-wider">Hirsch</span>
            <span className="bg-[#ff6b35] text-white px-2 py-1 tracking-wider">Access Control System</span>
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
            <h3 className="text-[11px] font-semibold text-gray-400 uppercase mb-4 border-b pb-1">More By HIRSCH</h3>
            <ul className="text-xs space-y-4 text-gray-400">
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
           <button className="bg-blue-700 hover:bg-blue-400 text-white font-semibold rounded transition-all duration-300 w-full md:w-auto px-4 py-3 md:px-6 md:py-2 lg:px-8 lg:py-3 lg:text-lg">
              <NavLink to="/contacts" className="w-full h-full flex items-center justify-center">
                CONTACT US TODAY
              </NavLink>
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ScrambleFactor;