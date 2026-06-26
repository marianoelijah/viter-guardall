import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import SocialShare from "../../Reusable/SocialShare";
import React from "react";


const AR331U = () => {
  return (
    <>
    <Header />
     <div className="bg-gray-100 min-h-screen">
      
      {/* Hero Section */}
      <div className="bg-[#7f95b8] py-16 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          AR331U Weather Proof Illuminated <br/>
           Touch-Panel Keypad
        </h1>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 bg-gray-200 p-8 rounded-lg shadow-sm">

          <p className="text-gray-800 text-[17px] mb-6">
             With a sleek design and  silverblack color, this contactless door access can read EM or Mifare proximity cards. 
          </p>

          {/* Product Description */}
          <h2 className="text-xl text-black font-semibold mb-2">Product Description:</h2>
          <p className="text-gray-800 text-[17px] mb-4">
            Metallic SilverBlack color concept further enhance modern contemporary
          </p>
          <p className="text-gray-800 text-[17px] mb-4">
            impression of your office. Slim shape easy to fit into a narrow door frame with limited space.
          </p>
          <p className="text-gray-800 text-[17px] mb-4">
            Weatherproof IP56 case design allows it to be installed in an outdoor environment. 
            Illuminated touch keypad looks cool and allows you to still see the keypad at night.
          </p> 
          
          {/* Product Features */}
          <h2 className="text-xl text-black font-semibold mb-2">Product Features:</h2>
          <ul className="list-disc pl-6 text-gray-800 text-[17px] space-y-1 mb-8">
            <li>Output format: WG 26 / 34, ABA II, ASYNC 9600, N, 8, 1</li>
            <li>Support standard 125Khz EM card</li>
            <li>Built-in Watchdog to prevent system from hanging</li>
            <li>Built-in Anti-Tamper functions</li>
            <li>Metal Housing, fashion and the safety design</li>
            <li>Narrow body design, suitable for installation in space limited areas</li>
          </ul>

          {/* Technical Specification */}
          <h2 className="text-xl text-black font-semibold mb-4">Technical Specification:</h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-800 text-gray-800 divine-x border-r text-[17px]">
              <tbody className="divide-y divide-gray-800">

                {[
                  ["Model", "AR331HSAR331HT", "AR331HS_MAR331HT_M"],
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
            <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
              <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By MAG</h3>
               <ul className="space-y-4 text-gray-700">
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
                  className="inline-block w-full rounded-xl bg-[#0f3e90] px-6 py-3 text-center text-sm font-semibold tracking-wider text-white transition-colors hover:bg-[#ff5f31] sm:w-auto"
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

export default AR331U;