import React from 'react';
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
     <div className="bg-gray-100 dark:bg-[#121214] min-h-screen font-sans text-slate-800 dark:text-gray-200 transition-colors duration-300">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-4 text-center transition-colors duration-300">
        <h1 className="text-5xl font-semibold tracking-tight">
           OmniProx™ Credentials: <br/>
           Contactless Proximinity Card
        </h1>
      </header>

      <div className="max-w-6xl mx-auto bg-gray-200 mt-8 p-8 shadow-sm flex flex-col md:flex-row gap-8 dark:bg-[#1e1e22]">
        
        {/* Left Content Area */}
        <main className="md:w-[72%] lg:w-3/4 max-w-6xl mx-auto bg-gray-200 dark:bg-[#1e1e22] border border-transparent dark:border-gray-800 transition-colors shadow-lg p-8 md:p-12">
          <p className="text-[17px] leading-relaxed space-y-4 mb-6">
            An easy-to-carry proximity card that utilizes RFID technology. It has a high contactless 
            range and is designed to work with OmniProx™ readers.
          </p>

          <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
            Product Description:
          </h2>
          <p className="text-[17px] leading-relaxed space-y-4 mb-6">
            Honeywell OmniClass credentials are designed to work with OmniClass readers. 
            Built on 13.56MHz technology, the OmniClass product line is RFID based and provides 
            excellent contactless sensing range (up to 4.5"). The OmniClass cards are laminated PVC 
            cards that can be printed on both sides using a dye-sublimation or thermal transfer card 
            printer.
          </p>

          <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
            Product Features:
          </h2>
          <ul className="list-disc ml-5 text-[17px] space-y-1 mb-4">
            {productFeatures.map((f, i) => <li key={i}>{f}</li>)}
          </ul>

          <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
            Technical Specification:
          </h2>
          <table className="w-full border-collapse border border-gray-500 text-[11px]">
            <thead className="divide-y divide-gray-800 p-2.5 font-bold  tracking-widest text-gray-800 dark:text-blue-400 text-[17px] border-b border-gray-500 dark:border-gray-700">
              <tr className="font-bold bg-gray-700 dark-gray-800 uppercase">
                <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80"></th>
                <th colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                  Models
                </th>
              </tr>
              <tr className="font-bold bg-gray-400">
                <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border"></th>
                <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                   OmniProx ISOCard (PVC4)
                </th>
                <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                  OmniProx ISO Card with Magnetic Stripe (PVC5
                </th>
                <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                  OmniProx Clamshell Card (PX4)
                </th>
              </tr>
            </thead>
            <tbody>
              {specData.map((row, idx) => (
                <tr key={idx}>
                  <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold  text-[14px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">{row.label}</td>
                  {row.isFullWidth ? (
                    <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">{row.col1}</td>
                  ) : (
                    <>
                      <td colSpan={row.label === "Dimensions" ? 2 : 1} className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">{row.col1}</td>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">{row.col2}</td>
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
          <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded-xl shadow-sm  mb-6">
                <h3 className="font-bold text-black dark:text-blue-400 text-x mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">
                  More By HONEYWELL
                </h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
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