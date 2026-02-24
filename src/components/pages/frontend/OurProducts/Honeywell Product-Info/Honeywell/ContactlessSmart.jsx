import React from 'react';
import { Facebook, Linkedin, Mail, Send, Share2 } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';

const ContactlessSmart = () => {
  const productFeatures = [
    "Multi-technology card configurations and migrations",
    "Available in 2k-bit and 16k-bit sizes",
    "Program credentials in the factory or field",
    "Store biometric templates and protect privacy",
    "Customizable options: custom artwork, UV ink, surface or embedded hologram"
  ];

  // Helper for the complex 7-column table
  const models = [
    "OmniClass 2k & 16k Bits PVC Cards", "OmniClass + HID Prox Cards", 
    "OmniClass Embeddable", "OmniClass Embeddable +", 
    "OmniClass + Wiegand Cards", "OmniClass Key Fobs", "OmniClass Stickers"
  ];

  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      {/* Blue Header Banner */}
      <header className="bg-[#8ba4ca] text-white py-12 px-4 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          OmniClass™ Credentials: Contactless Smart Card
        </h1>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <main className="lg:w-3/4 bg-gray-300 p-8 shadow-sm">
          <p className="text-[15px] text-black mb-6">
            A laminated PVC card that utilizes RFID technology and has an excellent contactless range. It is designed to work with OmniClass™ readers.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
            <p className="text-[15px] text-black leading-relaxed mb-4">
              Honeywell OmniClass™ credentials are built on 13.56MHz technology, are RFID based, provide excellent contactless range (up to 4.5"), and are designed to work with OmniClass readers. It's available in card, key fobs, and sticker formats.
            </p>

            <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[15px] text-black space-y-1">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          {/* Large Technical Specification Table */}
          <section className="mt-10 overflow-x-auto">
            <h2 className="font-bold text-xl text-black mb-4">Technical Specification:</h2>
            <table className="w-full border-collapse border border-gray-500 text-[15px]">
              <thead>
                <tr className="bg-gray-200 uppercase font-bold">
                  <th className="border border-gray-500 p-2 text-left w-32 text-[15px] text-black">Models</th>
                  {models.map((m, i) => (
                    <th key={i} className="border border-gray-500 p-1 text-left align-top">{m}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200">Dimensions</td>
                  <td className="border border-gray-500 p-2" colSpan="4">2.125" W x 3.370" H x 0.030" T (5.4cm W x 8.6cm H x 0.076cm T)</td>
                  <td className="border border-gray-500 p-2">2.125" W x 3.370" H x 0.037" T</td>
                  <td className="border border-gray-500 p-2">1.25" W x 1.35" H</td>
                  <td className="border border-gray-500 p-2">1.285" D x 0.070" T</td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200">Finish</td>
                  <td className="border border-gray-500 p-2" colSpan="5">Gloss White</td>
                  <td className="border border-gray-500 p-2">Black</td>
                  <td className="border border-gray-500 p-2">White</td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200">Credential Construction</td>
                </tr>
                  <tr className="bg-gray-100 font-bold"><td colSpan="8" className="border divine-y border-gray-500 p-2 text-black">Max Read Range^3</td></tr>
                <tr className="bg-gray-100 font-bold"><td colSpan="8" className="border border-gray-500 p-2 text-black">ISO Standards</td></tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200 text-gray-500">ISO 7810</td>
                  <td className="border border-gray-500 p-2"></td>
                  <td className="border border-gray-500 p-2"></td>
                  <td className="border border-gray-500 p-2"></td>
                  {Array(4).fill("Yes").map((v, i) => (
                    <td key={i} className="border border-gray-500 p-2">{v}</td>
                  ))}
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200 text-gray-500">ISO 7811-2,4,5</td>
                  {Array(5).fill("Yes").map((v, i) => (
                    <td key={i} className="border border-gray-500 p-2">{v}</td>
                  ))}
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200 text-gray-500">ISO 7816-1,2</td>
                  {Array(4).fill("Yes").map((v, i) => (
                    <td key={i} className="border border-gray-500 p-2">{v}</td>
                  ))}
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200 text-black">ISO 10373-1</td>
                  {Array(5).fill("Yes").map((v, i) => (
                    <td key={i} className="border border-gray-500 p-2">{v}</td>
                  ))}
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200 text-gray-500">ISO 14443B^4</td>
                  {Array(7).fill("Yes").map((v, i) => (
                    <td key={i} className="border border-gray-500 p-2">{v}</td>
                  ))}
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold text-gray-500 bg-gray-200">ISO 15693</td>
                  {Array(7).fill("Yes").map((v, i) => (
                    <td key={i} className="border border-gray-500 p-2">{v}</td>
                  ))}
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200 text-black">Operating Temperature</td>
                  <td className="border border-gray-500 p-2" colSpan="7">-40° – 158°F (-40° – 70°C)</td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200 text-black">Operating Humidity.</td>
                  <td className="border border-gray-500 p-2" colSpan="7">5-95%, non-condensing</td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-200 text-black">Warranty</td>
                  <td className="border border-gray-500 p-2" colSpan="7">Limited lifetime warranty</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Footer Tags */}
           <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="text-lg text-white border bg-red-500 px-2">Honeywell</p>
            <p className="text-lg text-white border bg-red-500 px-2">Cards</p>
            <p className="text-lg text-white border bg-red-500 px-2">Access Control System</p>
           </div> 

          {/* Share Section */}
          <div className="mt-8">
              <p className="font-medium text-black mb-3">Share:</p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/src/assets/image/social-logo/facebook.png" alt="Facebook" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/src/assets/image/social-logo/gmail.png" alt="Gmail" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/src/assets/image/social-logo/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/src/assets/image/social-logo/telegram.png" alt="Telegram" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/src/assets/image/social-logo/viber.png" alt="Viber" className="w-full h-full object-contain p-1" />
                </div>
              </div>
            </div>
        </main>

        {/* Sidebar */}
        <aside className="lg:w-1/4 space-y-6">
           <div className="bg-gray-200 p-4 border border-gray-500 mb-6">
            <h3 className="text-xl font-bold text-black mb-4 border-b pb-1">More By HONEYWELL</h3>
            <ul className="text-[15px] space-y-4 text-gray-500 transition-colors">
              <li className='cursor-pointer hover:text-[#f08c09]'>Onity DirectKey with Serene</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>INR 415 256-Channel 12 Bay RAID Rackmount Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>GNR 340 100-Channel Tower Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>ENR 130 16-Channel Desktop Standalone NVR - No HDD Included</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>Z86 Outdoor Network Dome Camera with Night Vision</li>
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
        </aside>
      </div>
    </div>
    <Footer />
    </>
    
  );
};

export default ContactlessSmart;