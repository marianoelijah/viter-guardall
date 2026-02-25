import React from 'react';

const HighAssurance = () => {
  const specs = [
    { label: "Part Number", v1: "8403ABTM000", v2: "8413ABTM000" },
    { label: "Description", v1: "TS ScrambleFactor SF.3 HF, SC, Fingerprint RS485/OSDP Reader", v2: "TS ScrambleFactor SF.3 HF/LF, SC, Fingerprint RS485/OSDP Reader" },
    { label: "Keypad", v1: "12-character", v2: "12-character" },
    { label: "Carrier Frequencies", v1: "13.56 MHz", v2: "13.56 MHz and 125 kHz" },
    { label: "Biometric", v1: "Fingerprint: Optical, FBI certified (FIPS 201, PIV, and Mobile ID FAP 10 compliant) and STQC certified", span: true },
    { label: "Current @ 12V", v1: "260mA Average, 320mA Max", span: true },
    { label: "Operating Temp", v1: "-4 to 149 F (-20 to 65C)", span: true },
    { label: "Environmental", v1: "IP55", span: true },
  ];

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#8ba4cc] text-white py-12 px-6 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          Hirsch Scramble Factor: High-Assurance Biometrics and Multi-Factor Authentication Reader
        </h1>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-white shadow-lg my-10 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Left Column: Product Info */}
          <div className="lg:col-span-3">
            <p className="text-gray-700 italic mb-6">
              An advanced fingerprint biometrics with LCD touchscreen keypad designed for high-security areas.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-lg mb-2">Product Description:</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                ScrambleFactor reimagines secure entry for the federal market with a fingerprint sensor, LCD touchscreen, virtual keypad, contact and contactless credential modes. The ScrambleFactor enables multiple authentication methods to deliver unparalleled security, speed, and functionality.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-lg mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
                <li>Supports comprehensive multi-factor authentication for enhanced security policies</li>
                <li>Compatible with OSDP and FICAM modes</li>
                <li>Easily retrofitted into existing Hirsch mounting boxes</li>
                <li>Requires Hirsch Velocity security management system</li>
              </ul>
            </section>

            {/* Technical Specifications Table */}
            <section>
              <h2 className="font-bold text-lg mb-4">Technical Specification:</h2>
              <div className="overflow-x-auto border border-gray-300">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 border-b border-r border-gray-300 w-1/4"></th>
                      <th className="p-2 border-b border-r border-gray-300 w-1/3 font-bold">SF.3 HF</th>
                      <th className="p-2 border-b border-gray-300 w-1/3 font-bold">SF.3 HF/LF</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specs.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-2 border-b border-r border-gray-300 font-bold bg-gray-50">{spec.label}</td>
                        {spec.span ? (
                          <td colSpan="2" className="p-2 border-b border-gray-300">{spec.v1}</td>
                        ) : (
                          <>
                            <td className="p-2 border-b border-r border-gray-300">{spec.v1}</td>
                            <td className="p-2 border-b border-gray-300">{spec.v2}</td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* Tags & Social */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
               <span className="bg-orange-500 text-white text-[10px] px-2 py-1 rounded">HIRSCH</span>
               <span className="bg-orange-500 text-white text-[10px] px-2 py-1 rounded">Access Control System</span>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 p-6 border-l-2 border-gray-200">
              <h3 className="text-sm font-bold border-b pb-2 mb-4 uppercase tracking-wider text-gray-500">More By HIRSCH</h3>
              <ul className="text-xs space-y-3 text-gray-600">
                <li className="hover:text-blue-600 cursor-pointer">Onity DirectKey with Serene</li>
                <li className="hover:text-blue-600 cursor-pointer">MAD-401 and MAD-402 Series</li>
                <li className="hover:text-blue-600 cursor-pointer">INR 415 256-Channel RAID</li>
                <li className="hover:text-blue-600 cursor-pointer">GNR 340 100-Channel Tower</li>
              </ul>
            </div>

            <div className="bg-[#1e4484] text-white p-6 rounded-sm relative overflow-hidden">
              <h3 className="text-xl font-bold leading-tight mb-4">Secure Your Piece Of Mind Today</h3>
              <p className="text-xs mb-6 opacity-90">Contact Guard-All now for a customized security solution.</p>
              <button className="bg-white text-[#1e4484] font-bold text-xs py-2 px-4 uppercase tracking-tighter">
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HighAssurance;