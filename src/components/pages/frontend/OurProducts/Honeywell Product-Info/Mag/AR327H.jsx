import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import SocialShare from "../../Reusable/SocialShare";




const AR327H = () => {
  return (
    <>
    <Header />
     <div className="bg-gray-100 dark:bg-[#121214] min-h-screen font-sans text-slate-800 dark:text-gray-200 transition-colors duration-300">
      
      {/* Hero Section */}
      <div className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-4 text-center transition-colors duration-300">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          AR327H Vandal Resistant Illuminated <br />
          Touch-Panel Keypad
        </h1>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 py-12 bg-gray-200 dark:bg-[#1e1e22] shadow-xl my-10 p-6 md:p-12 rounded-sm border border-transparent dark:border-gray-800 transition-colors grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 bg-gray-200 p-8 rounded-lg shadow-sm dark:bg-[#1e1e22] border border-gray-400 dark:border-gray-800 transition-colors duration-300">

          <p className="text-[17px] text-gray-800 dark:text-gray-300 mb-8 border-l-4 border-[#8ba4cc] dark:border-blue-500 pl-4 font-medium">
            A water and vandal-resistant door access that has a built-in touchpad 
            and can even read proximity cards.
          </p>

          {/* Product Description */}
          <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Description:</h2>
          <p className="text-[17px] text-gray-800 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            AR327H is a card access reader typically installed at the door to 
            restrict unauthorized access. It reads EM or Mifare proximity cards. 
            It supports an RS485 connection, 3000 users and 1500 event memory. 
            It has a built-in illuminated touch panel keypad and LCD screen display.
          </p>

          {/* Product Features */}
          <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl mb-3 text-black dark:text-blue-400 transition-colors">Product Features:</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 list-disc ml-5 text-[17px] text-gray-800 dark:text-gray-300">
            <li>Water and vandal resistant</li>
            <li>Built-in tamper-proof function</li>
            <li>Dual door control</li>
            <li>Flexible connections</li>
            <li>Back up memory</li>
          </ul>

          {/* Technical Specification */}
          <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-4 transition-colors">Technical Specification:</h2>

          <div className="border border-gray-500 dark:border-gray-700 overflow-hidden rounded-sm">
            <table className="w-full border border-gray-800 text-gray-800 divine-x border-r text-[17px]">
              <tbody className="divide-y divide-gray-800 p-2.5 font-bold uppercase tracking-widest text-gray-800 dark:text-blue-400 text-[17px] border-b border-gray-500 dark:border-gray-700">

                {[
                  ["Model", "AR327H", "AR327H_M"],
                  ["Frequency", "125KHz", "13.56MHz"],
                  ["Standard", "EM Standard", "Mifare ISO14443A"],
                  ["Reading Range", "3-7cm", "1-3cm"],
                  ["Power Supply", "10-24VDC"],
                  ["Power Consumption", "<3W"],
                  ["Communication Interface", "RS-485"],
                  ["Baud Rate", "9600 bps (N,8,1)"],
                  ["Temperature", "-10°C to +60°C"],
                  
                  ["Digital Input", "Egress(R.T.E.) /Door contact/ Arming Switch"],
                  ["Relay Output", "Alarm Relay / Lock Relay"],
                  ["Lock Relay Time", "ON/OFF, 0.1-600 Sec."],
                  ["Alarm Time", "SToggle, 1-600 Seec."],
                  ["Tamper Switch", "Limit Switch (Form C)"],
                  ["User Capacity", "M4/M8 – 3,000 M6 – 65,000"],
                  ["Event Log", "M4/M8 – 1,500"],
                  ["External Reader", "1 Weigand Port"],
                  ["Anti-passback", "Yes (M4/M8 only)"],
                  ["Lift Control", "32 Floors, 3,000 Users"],
                  ["Serial Port", "Yes"],
                  ["LCD Panel", "128*64(4 Lines messages, 16 Characters each line)"],
                  ["Transistor Output", "Lock (or security trigger signal)/ Alarm Duress"],
                  ["Ingress Protection", "IP56"],
                  ["Indicator", "2 LED & 1 Beeper"],
                  ["Keypad Material ", "Illuminated Touch Panel"],
                  ["Housing Material", "Zinc Alloy"],
                  ["Time Zone", "11/63(Connect to Multi-Door Networking Controller)"],
                  ["Operation Mode", "Standalone/ Networking"],
                  ["Color", "Chrome"],
                  ["Dimensions (mm)", "140(L) x 92(W) x 40(H)"],
                  ["Weight (g)", "430 ±10"],
                ].map((row, index) => (
                  <tr key={index} className="bg-gray-200 dark:bg-gray-800">
                    <td className="p-3 text-gray-800 dark:text-gray-300 text-[15px] leading-normal">
                      {row[0]}
                    </td>
                    <td className="p-3">{row[1]}</td>
                    <td className="p-3">{row[2] || ""}</td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>

          {/* Tags */}
          <div className="mt-6 flex gap-3">
            <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
              MAG
            </span>
            <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
              Access Control System
            </span>
          </div>

          {/* Share */}
             <SocialShare title="Check out this product!" />

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          
          {/* More By MAG */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
              <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By MAG</h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <NavLink to="/our-products/onity/directkey-with-serene" className='block'>
                  <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>Onity DirectKey with Serene</li>
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

            {/* CTA Card */}
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
                  className="inline-block w-full rounded-xl bg-[#0f3e90] dark:bg-blue-600 px-6 py-3 text-center text-sm font-semibold tracking-wider text-white transition-colors hover:bg-[#ff5f31] dark:hover:bg-[#ff5f31] sm:w-auto"
                >
                  CONTACT US TODAY
                </NavLink>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </div>
    <Footer />
    </>
   
  );
}

export default AR327H;