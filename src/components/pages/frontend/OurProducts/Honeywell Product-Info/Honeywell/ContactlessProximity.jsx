import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react'; // Optional: for the share icons
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';

const ContactlessProximity = () => {
 
  const productFeatures = [
    "OmniProx 125 kHz compatible proximity credentials",
    "External numbering for easy identification and control",
    "Available with high coercivity magnetic stripe (4000 Oe – un-encoded, ISO only) for added capability",
    "Individually wrapped and labeled packs of 25 cards for added flexibility and convenience for resellers",
    "PVC construction (ISO) or ABS shell with PVC insert (Clamshell) that resists cracking and breaking while delivering fast read times",
    "Available in standard 26 bit or Honeywell 34 bit formats",
    "Special order cards with custom range and site codes",
    "Includes a limited lifetime warranty against manufacturer defects"
  ];

  const specData = [
    { label: "Dimensions", col1: "2.125\" width x 3.370\" height x 0.03\" thickness (5.4 cm W x 8.56 cm H x 0.076 cm T)", col2: "Gloss White", isTriple: false },
    { label: "Finish", col1: "Gloss White", col2: "Gloss White", isTriple: false },
    { label: "Direct Print/ Thermal Transfer Compatible", col1: "Yes", col2: "No", isTriple: false },
    { label: "Credential Construction", col1: "PVC", col2: "ABS Shell, PVC Insert", isTriple: false },
    { label: "Max Read Range", col1: "2.5\" to 4\" (6.35 cm to 10.2 cm)", isFullWidth: true },
    { label: "ISO 7810", col1: "Yes", col2: "No", isTriple: false },
    { label: "Operating Temperature", col1: "-35° – 140°F (-35° – 60°C)", isFullWidth: true },
    { label: "Operating Humidity", col1: "5–95%, non-condensing", isFullWidth: true },
    { label: "Warranty", col1: "Limited lifetime warranty!", isFullWidth: true },
  ];

  return (
    <>
    <Header />
     <div className="bg-[#f3f4f6] min-h-screen font-sans text-gray-700 pb-12">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 text-center">
        <h1 className="text-5xl font-semibold tracking-tight">
          OmniProx™ Credentials: Contactless Proximity Card
        </h1>
      </header>

      <div className="max-w-6xl mx-auto bg-gray-200 mt-8 p-8 shadow-sm flex flex-col md:flex-row gap-8">
        
        {/* Left Content Area */}
        <main className="md:w-[72%]">
          <p className="text-[15px] mb-6 text-black">
            An easy-to-carry proximity card that utilizes RFID technology. It has a high contactless range and is designed to work with OmniProx™ readers.
          </p>

          <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
          <p className="text-[15px] text-black leading-relaxed mb-6">
            Honeywell OmniClass credentials are designed to work with OmniClass readers. Built on 13.56MHz technology, the OmniClass product line is RFID based and provides excellent contactless sensing range (up to 4.5"). The OmniClass cards are laminated PVC cards that can be printed on both sides using a dye-sublimation or thermal transfer card printer.
          </p>

          <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
          <ul className="list-disc ml-5 text-[15px] text-black space-y-1 mb-8">
            {productFeatures.map((f, i) => <li key={i}>{f}</li>)}
          </ul>

          <h2 className="font-bold text-xl text-black mb-4 uppercase">Technical Specification:</h2>
          <table className="w-full border-collapse border border-black text-[11px]">
            <thead className="bg-gray-200">
              <tr className="font-bold uppercase">
                <th className="border border-black p-2 text-left w-1/4"></th>
                <th colSpan="3" className="border border-black p-2 text-left text-[15px] text-black bg-gray-200">Models</th>
              </tr>
              <tr className="font-bold">
                <th className="border border-black p-2"></th>
                <th className="border border-black p-2 text-left text-[17px] text-black">OmniProx ISOCard (PVC4)</th>
                <th className="border border-black p-2 text-left text-[17px] text-black">OmniProx ISO Card with Magnetic Stripe (PVC5)</th>
                <th className="border border-black p-2 text-left text-[17px] text-black">OmniProx Clamshell Card (PX4)</th>
              </tr>
            </thead>
            <tbody>
              {specData.map((row, idx) => (
                <tr key={idx}>
                  <td className="border border-black p-2 font-bold bg-gray-200 text-black text-[15px]">{row.label}</td>
                  {row.isFullWidth ? (
                    <td colSpan="3" className="border border-black p-2 text-[15px]">{row.col1}</td>
                  ) : (
                    <>
                      <td colSpan={row.label === "Dimensions" ? 2 : 1} className="border border-black p-2 text-[15px]">{row.col1}</td>
                      <td className="border border-black p-2 text-[15px]">{row.col2}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Tags */}
           <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="text-lg text-white border bg-red-500 px-2 py-1 rounded">Honeywell</p>
            <p className="text-lg text-white border bg-red-500 px-2 py-1 rounded">Cards</p>
            <p className="text-lg text-white border bg-red-500 px-2 py-1 rounded">Access Control System</p>
           </div> 

          {/* Social Share Mockup */}
           <div className="mt-8">
              <p className="font-medium text-black mb-3">Share:</p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/assets/image/social-logo/facebook.png" alt="Facebook" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/assets/image/social-logo/gmail.png" alt="Gmail" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/assets/image/social-logo/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/assets/image/social-logo/telegram.png" alt="Telegram" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/assets/image/social-logo/viber.png" alt="Viber" className="w-full h-full object-contain p-1" />
                </div>
              </div>
            </div>



        </main>

        {/* Right Sidebar */}
        <aside className="md:w-[28%]">
          <div className="bg-gray-300 p-4 mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By HONEYWELL</h3>
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
              <button className="bg-blue-700 hover:bg-blue-400 text-white font-semibold px-4 py-2 rounded w-full ">
                <NavLink to="/contacts" className="w-full h-full block">
                CONTACT US TODAY
                </NavLink>
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

export default ContactlessProximity;