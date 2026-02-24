import React from "react";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";

const Fin4000mik = () => {
  return (
    <>
     <Header />
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <div className="bg-[#7f95b8] py-16 text-center">
        <h1 className="text-5xl font-bold text-white tracking-wide leading-snug">
          HON-FIN4000MIK-100K: COMPACT <br />
          FINGERPRINT DEVICE
        </h1>
      </div>

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* WRAPPER */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SECTION */}
          <div className="lg:col-span-2 bg-white p-8 rounded shadow-sm">

            <p className="text-black mb-6">
              A standard fingerprint device with touch keypads and color LCD displays.
              It can accurately identify wet and dry fingerprints.
            </p>

            <h2 className="font-semibold text-black text-lg mb-3">
              Product Description:
            </h2>

            <p className="text-black leading-relaxed mb-6">
              Equipped with powerful hardware and industry-leading algorithms,
              Honeywell HON-FIN4000 Series standard fingerprint device –
              HON-FIN4000MIK-100K provides instant comparison and authentication
              with speed up to 150,000 fingerprints per second that greatly improves
              the system efficiency. The product supports multiple authentication
              to meet diverse customer requirements.
            </p>

            <h2 className="font-semibold text-black text-lg mb-3">
              Product Features:
            </h2>

            <ul className="list-disc pl-6 text-black space-y-2 mb-8">
              <li>2-inch color LCD display, full capacitive touch keypads</li>
              <li>1.2GHz quad-core CPU with large capacity memory</li>
              <li>High sensitivity optical sensor</li>
              <li>Advanced fingerprint recognition algorithm, max. 1:150,000 match/sec</li>
              <li>Fake finger detection (Rubber, paper, glue, clay)</li>
              <li>Programmable function keys</li>
              <li>Multiple authentication</li>
              <li>Versatile Interfaces: RS-485 / TTL / Relay / Wiegand</li>
              <li>TCP/IP network connect</li>
              <li>16bit Hi-Fi</li>
            </ul>

            {/* TECHNICAL SPECIFICATION */}
            <h2 className="font-semibold text-black text-lg mb-4">
              Technical Specification:
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-black text-xl">
                <tbody className="divide-y divide-gray-300">
                  {[
                    ["Model", "HON-FIN4000MIK-100K"],
                    ["CPU", "1.2G Quad Core"],
                    ["Memory", "2GB Flash + 256 MB RAM"],
                    ["Fingerprint Sensor", "Optical Sensor"],
                    ["Matching Speed", "Max. 1:150,000 match/sec"],
                    ["Max. User", "100,000 (1 fingerprint per user)"],
                    ["Max. FP Template", "200,000 (Two templates per fingerprint)"],
                    ["Logs", "1,000,000 (text)"],
                    ["Live Fingerprint Detection (LFD)", "Supported"],
                    ["RF Option", "EM/HID_Prox/Mifare/DesFire_EV1/iClass_SE/Seos"],
                    ["Authentication Modes", "Finger only, Card only, Finger+Card"],
                    ["Ethernet", "10/100 Mbps"],
                    ["RS-485", "OSDP Supported"],
                    ["Wiegand", "Supported"],
                    ["TTL", "2 ch input (for LED/Buzzer control)"],
                    ["Relay", "1 door relay"],
                    ["LED", "Multi-Color"],
                    ["Sound", "Multi-tone Buzzer"],
                    ["Tamper", "Supported"],
                    ["Power", "12V DC (Max.600mA)"],
                    ["Operating Temperature", "-20°C ~ 50°C"],
                    ["Operating Humidity", "0% ~ 80% (Non condensing)"],
                    ["Ingress Protection", "IP67"],
                    ["Dimensions (WxHxD)", "50 x 172 x 43.5 mm"],
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-gray-300">
                      <td className="p-3 bg-gray-50 font-medium w-1/3">
                        {row[0]}
                      </td>
                      <td className="p-3">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

           {/* TAGS */}
              <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="text-lg text-white border bg-red-500 px-2">Honeywell</p>
            <p className="text-lg text-white border bg-red-500 px-2">Access Control System</p>
             </div> 

           {/* SHARE SOCIAL */}
            <div className="mt-8">
              <p className="font-medium text-black mb-3">Share:</p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-blue-400 transition-colors duration-200">
                    <img src="/src/assets/image/social-logo/facebook.png" alt="Facebook" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded hover:bg-blue-300 transition-colors duration-200">
                    <img src="/src/assets/image/social-logo/gmail.png" alt="Gmail" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded hover:bg-gray-600 transition-colors duration-200">
                    <img src="/src/assets/image/social-logo/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-green-500 rounded hover:bg-green-400 transition-colors duration-200">
                    <img src="/src/assets/image/social-logo/telegram.png" alt="Telegram" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-green-500 rounded hover:bg-green-400 transition-colors duration-200">
                    <img src="/src/assets/image/social-logo/viber.png" alt="Viber" className="w-full h-full object-contain p-1" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">

            <div className="bg-white p-6 rounded shadow-sm">
              <h3 className="font-semibold text-black text-xl mb-4">
               More By Honeywell
              </h3>
              <ul className="text-lg text-gray-600 space-y-2">
                <li>Onity DirectKey with Serene</li>
                <li>MAD-401 and MAD-402 Series</li>
                <li>INR 415 256-Channel 12 Bay RAID</li>
                <li>GNR 340 100-Channel Tower</li>
                <li>ENR 130 16-Channel Desktop</li>
                <li>Z86 Outdoor Network Dome Camera</li>
              </ul>
            </div>

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
              <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded w-full">
                CONTACT US TODAY
              </button>
            </div>

              </div>

          </div>

        </div>
      </div>

    </div>
    <Footer />
     </>
  );
};

export default Fin4000mik;