import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react'; // Optional: for the share icons
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';




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
            An easy-to-carry proximity card that utilizes RFID technology. It has a high contactless 
            range and is designed to work with OmniProx™ readers.
          </p>

          <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
          <p className="text-[15px] text-black leading-relaxed mb-6">
            Honeywell OmniClass credentials are designed to work with OmniClass readers. 
            Built on 13.56MHz technology, the OmniClass product line is RFID based and provides 
            excellent contactless sensing range (up to 4.5"). The OmniClass cards are laminated PVC 
            cards that can be printed on both sides using a dye-sublimation or thermal transfer card 
            printer.
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
            <p className=" text-white border bg-[#ff5f31] px-2 py-1 rounded">Honeywell</p>
            <p className=" text-white border bg-[#ff5f31] px-2 py-1 rounded">Cards</p>
            <p className=" text-white border bg-[#ff5f31] px-2 py-1 rounded">Access Control System</p>
           </div> 

          {/* Social Share Mockup */}
           <SocialShare title="Check out this product!" />
           
        </main>

        {/* Right Sidebar */}
        <aside className="md:w-[28%]">
          <div className="bg-gray-300 p-6 rounded shadow-sm border border-gray-400 mb-5">
                <h3 className="font-bold text-black text-xl mb-4 border-b border-black pb-2">More By Honeywell</h3>
                <ul className="space-y-4 text-gray-700">
                  <NavLink to="/our-products/onity/directkey-with-serene" className='block'>
                  <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>Onity DirectKey with Serene </li>
                  </NavLink>
                  <NavLink to="/our-products/detnov/addressable-sounder" className='block'>
                    <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>MAD-401 and MAD-402 Series Modules</li>
                  </NavLink>
                  <NavLink to="/our-products/acti/bay-raid-backmount-standalone" className='block'>
                    <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>INR 415 256-Channel RAID Standalone</li>
                  </NavLink>
                  <NavLink to="/our-products/acti/channel-tower-strandalone" className='block'>
                    <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>GNR 340 100-Channel Tower NVR</li>
                  </NavLink>
                  <NavLink to="/our-products/acti/bay-raid-backmount-standalone" className='block'>
                  <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>INR 415 256-Channel RAID Standalone</li>
                  </NavLink>
                  <NavLink to="/our-products/acti/channel-tower-strandalone" className='block'>
                    <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>GNR 340 100-Channel Tower NVR</li>
                  </NavLink>
                </ul>
              </div>

    {/* Contact Card */}
          <div 
              className="relative min-h-[240px] overflow-hidden rounded-2xl p-8 text-white shadow-md bg-cover bg-center bg-blend-multiply bg-blue-900/85"
              style={{ backgroundImage: "url('/assets/image/Our%20Products/quickalert.jpg')" }}
            >
              <div className="relative z-10 max-w-3xl">
                <h3 className="mb-4 text-2xl font-bold leading-tight tracking-wide">
                  Secure Your Peace Of Mind Today
                </h3>
                
                <p className="mb-6 text-sm md:text-base text-gray-200 font-medium leading-relaxed">
                  Contact Guard-All now for a customized security solution that protects what matters most.
                </p>

                <NavLink 
                  to="/contacts" 
                  className="inline-block w-full rounded-xl bg-[#0f3e90] px-6 py-3 text-center text-sm font-semibold tracking-wider text-white transition-colors hover:bg-[#ff5f31] sm:w-auto"
                >
                  CONTACT US TODAY
                </NavLink>
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