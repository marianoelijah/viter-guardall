import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import SocialShare from "../../Reusable/SocialShare";

const AR321H = () => {
  
  return (
    <>
    <Header />
     <div className="bg-gray-100 min-h-screen">
      
      {/* Hero Section */}
      <div className="bg-[#7f95b8] py-16 text-center">
        <h1 className="text-4xl font-bold text-white max-w-3xl mx-auto">
            AR321H Vandal Resistant Illuminated <br/>
                 Touch-Panel Keypad
        </h1>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 bg-gray-200 p-8 rounded-lg shadow-sm">

          <p className="text-gray-800 text-[17px] mb-6">
             A compact, touchpad door access with anti-vandalism design to prevent damage or tampering.
          </p>

          {/* Product Description */}
          <h2 className="text-xl text-black font-semibold mb-2">Product Description:</h2>
          <p className="text-gray-800 text-[17px] mb-4">
           AR321H is a card access reader typically installed at the door to restrict unauthorized access. 
           It reads EM or Mifare proximity cards. It supports an RS485 connection, 3000 users and 1500 
           event memory. It has a built-in illuminated touch panel keypad. 
          </p>
          
          {/* Product Features */}
          <h2 className="text-xl text-black font-semibold mb-2">Product Features:</h2>
          <ul className="list-disc pl-6 text-gray-800 text-[17px] space-y-1 mb-8">
            <li>Built-in hardware watchdog, real time clock, arming, force alarm, door close delay alarm, doorbell and duress code & output</li>
            <li>Built-in door auto open time zone, holiday edit, door group & time setting. With multi-door control panel, support more time and group sets</li>
            <li>Standalone / Networking / Support Cascade Structure</li>
            <li>Support RS485 communication encryption, SSC (Soyal Security Communication)</li>
            <li>In-field firmware upgrade</li>
            <li>Support DESFire tags (Crypto comply with EAL4+)</li>
            <li>Multiple access mode: card only, card or password, card and password</li>
            <li>Multi output: door lock output (0.1-600 sec. and toggle mode)& alarm output (1-600 sec.)</li>
            <li>Silent operation mode: push button mute and all mute</li>
            <li>Auto relock for anti-trailing and sneaking</li>
            <li>Access control, lift control, time attendance, payroll and SCADA: graphic monitoring & remote control function</li>
            <li>Can be an encrypted RS485 reader if utilized with other brand’s controller</li>
          </ul>

          {/* Technical Specification */}
          <h2 className="text-xl text-black font-semibold mb-4">Technical Specification:</h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-800 text-gray-800 divine-x border-r text-[17px]">
              <tbody className="divide-y divide-gray-800">

                {[
                  ["Model", "AR321H", "AR321H_M"],
                  ["Frequency", "125KHz", "13.56MHz"],
                  ["Standard", "Em Standard", "Mifare ISO14443A"],
                  ["Reading Range", "3-7cm", "1-3cm"],
                  ["Power Supply", "10-24VDC"],
                  ["Power Consumption", "<3W"],
                  
                  ["Baud Rate", "RS-485"],
                  ["Temperature", "9600 bps (N, 8, 1) "],
                  
                  ["Digital Input", "Egress(R.T.E.) /Door contact/ Arming Switch"],
                  ["Relay Output", "Lock Relay"],
                  ["Lock Relay Time", "ON/OFF, 0.1-600 Sec."],
                  ["Alarm Time", "Toggle, 1-600 Seec."],
                  ["Tamper Switch", "Limit Switch (Form C)"],
                  ["User Capacity", "M4/M8 – 3,000 M6 – 65,000"],
                  ["Event Log", "M4/M8 – 1,500"],
                  ["External Reader", "1 Weigand Port"],
                  ["Anti-passback", "Yes (M4/M8 only)"],
                  ["Lift Control", "32 Floors, 3,000 Users"],
                  ["Serial Port", "Yes"],
                  ["Real Time Clock", "No"],
                  ["Transistor Output", "Arming LED (or Security trigger signal) /Alarm / Duress"],
                  ["Ingress Protection", "IP56"],
                  ["Indicator", "3 LED & 1 Beeper"],
                  ["Keypad Material ", "Illuminated Touch Panel"],
                  ["Housing Material", "Zinc Alloy"],
                  ["Time Zone", "11/63(Connect to Multi-Door Networking Controller)"],
                  ["Operation Mode", "Standalone/ Networking"],
                  ["Color", "Chrome"],
                  ["Dimensions (mm)", "114(L)X78(W)X33(H)"],
                  ["Weight (g)", "290±10"],
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="p-3 font-medium bg-gray-100 w-1/3">
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
            <span className="bg-red-500 text-white px-2 py-1 rounded">
              MAG
            </span>
            <span className="bg-red-500 text-white px-2 py-1 rounded">
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
            <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
              <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By MAG</h3>
              <ul className="text-xs space-y-4 text-gray-500 transition-colors">
                <li className='cursor-pointer hover:text-[#f08c09]'>Onity DirectKey with Serene</li>
                <li className='cursor-pointer hover:text-[#f08c09]'>MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs</li>
                <li className='cursor-pointer hover:text-[#f08c09]'>INR 415 256-Channel 12 Bay RAID Rackmount Standalone</li>
                <li className='cursor-pointer hover:text-[#f08c09]'>GNR 340 100-Channel Tower Standalone</li>
                <li className='cursor-pointer hover:text-[#f08c09]'>ENR 130 16-Channel Desktop Standalone NVR - No HDD Included</li>
                <li className='cursor-pointer hover:text-[#f08c09]'>Z86 Outdoor Network Dome Camera with Night Vision</li>
              </ul>
            </div>

            {/* CTA Card */}
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
              <button className="bg-blue-700 hover:bg-blue-400 text-white font-semibold px-4 py-2 rounded w-full">
                <NavLink to="/contacts" className="w-full h-full block">
                CONTACT US TODAY
                </NavLink>
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
}

export default AR321H;