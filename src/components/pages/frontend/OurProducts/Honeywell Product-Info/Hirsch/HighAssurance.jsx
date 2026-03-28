import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';

const HighAssurance = () => {
 const specs = [
    { label: "Part Number", v1: "8403ABTM000", v2: "8413ABTM000" },
    { label: "Description", v1: "TS ScrambleFactor SF.3 HF, SC, Fingerprint RS485/OSDP Reader", v2: "TS ScrambleFactor SF.3 HF/LF, SC, Fingerprint RS485/OSDP Reader" },
    { label: "Keypad", v1: "12-character", v2: "12-character", span: true },
    { label: "Carrier Frequencies", v1: "13.56 MHz", v2: "13.56 MHz and 125 kHz" },
    { label: "13.56 MHz Compatibility", v1: "PIV, PIV-I, CAC, TWIC, uTrust TS, MIFARE Classic, DESFire EVx, ISO15693 UID, ISO14443 UID", v2: "PIV, PIV-I, CAC, TWIC, uTrust TS, MIFARE Classic, DESFire EVx, ISO15693 UID, ISO14443 UID", span: true },
    { label: "125 kHz Compatibility", v1: "N/A", v2: "HID® Prox, Indala®, CASI-RUSCO®, AWID and others" },
    { label: "Contact Smartcard", v1: "Conforming to ISO-7816 in the ID-1 form factor", span: true },
    { label: "Biometric", v1: "Fingerprint: Optical, FBI certified (FIPS 201, PIV, and Mobile ID FAP 10 compliant) and STQC certified", span: true },
    { label: "Multimodal", v1: "Multimodal assurance level support in Velocity 3.8.6", span: true },
    { label: "Data Protocol", v1: "RS-485/OSDP (2 wire – half duplex)", span: true },
    { label: "Current @12V", v1: "260mA Average, 320mA Max", span: true },
    { label: "Power Supply", v1: "12VDC", span: true },
    { label: "Dimensions", v1: "H 6.14 in. (15.6 cm) x W 4.45 in. (11.30 cm) x D 1.93 in. (4.90 cm)", span: true },
    { label: "Screen", v1: "ANSI INCITS 378-2004 and ISO/IEC 19794-2", span: true },
    { label: "Fingerprint Template Format	", v1: "32 to 120F (0 to 49C)", span: true },
    { label: "Operating Temperature", v1: "-4 to 149 F (-20 to 65C)", span: true },
    { label: "Operating Humidity", v1: "-5% to 95% relative humidity (non-condensing)", span: true },
    { label: "Environmental Rating", v1: "IP55", span: true },
    { label: "Status Indicator", v1: "Red/Green LED, Buzzer", span: true },
    { label: "Data Cable Distance", v1: "RS-485 4000 ft. (1200 m) minimum 22 AWG shielded twisted pair. Refer to Hirsch public documentation for wiring recommendations.", span: true },
    
    { label: "Certifications", v1: "FCC, UL 294, CE, IC, RCM, RoHS2, REACH, UKCA", span: true },
    { label: "Warranty", v1: "2 year limited warranty", span: true },
    { label: "Mounting Accessories", v1: "MB2, MB2S, MB2SL, MB3, MB4, MB5, MB5-S", span: true },
  ];

  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          Hirsch Scramble Factor: High-Assurance Biometrics and Multi-Factor Authentication Reader
        </h1>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-lg my-10 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Left Column: Product Info */}
          <div className="lg:col-span-3">
            <p className="text-gray-800 text-[17px] mb-6">
              An advanced fingerprint biometrics with LCD touchscreen keypad designed for high-security areas.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
              <p className="text-[17px] text-gray-800 leading-relaxed">
                ScrambleFactor reimagines secure entry for the federal market with a fingerprint sensor, LCD touchscreen, virtual keypad, contact and contactless credential modes. The ScrambleFactor enables multiple authentication methods to deliver unparalleled security, speed, and functionality.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] text-gray-800 space-y-1">
                <li>Supports comprehensive multi-factor authentication for enhanced security policies</li>
                <li>Compatible with OSDP and FICAM modes</li>
                <li>Easily retrofitted into existing Hirsch mounting boxes</li>
                <li>Requires Hirsch Velocity security management system</li>
              </ul>
            </section>

            {/* Technical Specifications Table */}
            <section>
              <h2 className="font-bold text-xl text-black mb-4">Technical Specification:</h2>
              <div className="overflow-x-auto border border-gray-500">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 border-b border-r border-gray-500 w-1/4"></th>
                      <th className="p-2 border-b border-r border-gray-500 w-1/3 font-bold text-[15px] text-gray-600 ">SF.3 HF</th>
                      <th className="p-2 border-b border-gray-500 w-1/3 font-bold text-[15px] text-gray-900">SF.3 HF/LF</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specs.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}>
                        <td className="p-2 border-b border-r border-gray-500 font-bold bg-gray-200 text-[15px] text-black">{spec.label}</td>
                        {spec.span ? (
                          <td colSpan="2" className="p-2 border-b border-gray-500 text-[15px] text-black">{spec.v1}</td>
                        ) : (
                          <>
                            <td className="p-2 border-b border-r border-gray-500 text-[15px] text-black">{spec.v1}</td>
                            <td className="p-2 border-b border-gray-500 text-[15px] text-black">{spec.v2}</td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* Tags & Social */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                HIRSCH
              </span>
              
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                Access Control System
              </span>
            </div>

            <hr className="mb-5 border-b" />

            {/* SHARE SECTION */}
           <SocialShare title="Check out this product!" />
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By HIRSCH</h3>
            <ul className="text-xs space-y-4 text-gray-500 transition-colors">
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
              <button className="bg-blue-700 hover:bg-blue-400 text-white font-semibold rounded transition-all duration-300 w-full md:w-auto px-4 py-3 md:px-6 md:py-2 lg:px-8 lg:py-3 lg:text-lg">
  <NavLink to="/contacts" className="w-full h-full flex items-center justify-center">
    CONTACT US TODAY
  </NavLink>
</button>
            </div>
          </div>
          </div>
        </div>
      </main>
    </div>
    <Footer />
    </>
    
  );
};

export default HighAssurance;