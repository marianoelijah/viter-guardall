import React from "react";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import { NavLink } from "react-router-dom";
import SocialShare from "../../Reusable/SocialShare";



const Air22 = () => {
  
   return (
    <>
    <Header />
    <div className="bg-gray-100 dark:bg-[#121214] min-h-screen font-sans text-slate-800 dark:text-gray-200 transition-colors duration-300">
      {/* Header */}
      <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-4 text-center transition-colors duration-300">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          TBS 3D AIR 22
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <main className="max-w-6xl mx-auto bg-gray-200 dark:bg-[#1e1e22] border border-transparent dark:border-gray-800 transition-colors shadow-lg my-10 p-8 md:p-12">
            <p className="text-[17px] leading-relaxed mb-6">
              A touchless biometric scanner with 3D finger‑scanning. It also supports Power‑over‑Ethernet.
            </p>
          
          <section className="mb-8">
            <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Description:</h2>
            <div className="text-[17px] leading-relaxed space-y-4 mb-6">
              <p className="text-[17px] leading-relaxed space-y-4 mb-6">
                3D AIR is a unique touchless biometric terminal and was the world's first to introduce 3D finger‑scanning.
                Touchless fingerprint yielding the highest security level!
              </p>
            </div>

            <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Features:</h2>
            <ul className="list-disc ml-6 space-y-1 text-[17px]">
              <li>3D touchless technology with superior recognition</li>
              <li>Highest security level</li>
              <li>Hygienic for sensitive applications</li>
              <li>Superior identification performance</li>
              <li>No “Failure to Enroll”</li>
              <li>Identification or verification with PIN</li>
              <li>Access Control, Time and Attendance (T&amp;A)</li>
              <li>Optional RFID, liveness detection</li>
              <li>Personalizable touchscreen</li>
              <li>User‑friendly operation and configuration</li>
              <li>Wall mount with robust aluminum HD Box</li>
              <li>Indoor and outdoor installations</li>
              <li>Supports Power‑over‑Ethernet</li>
            </ul>
          </section>

          {/* Technical Specification Table */}
          <div className="border border-gray-500 dark:border-gray-700 overflow-hidden rounded-sm">
            <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Technical Specification:</h2>

            <table className="w-full border-collapse border border-gray-500 text-[17px]">
              <tbody className="divide-y divide-gray-800 p-2.5 font-bold  tracking-widest text-gray-800 dark:text-blue-400 text-[17px] border-b border-gray-500 dark:border-gray-700">
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">APPLICATIONS</td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal"></td>
                </tr> 
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">Access Control</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr> 
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">Time & Attendance, Workforce Management</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr> 

                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">SENSORS</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr> 
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">Touchless Hand Scanner</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr> 
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">Touchless 3D Finger Scanner</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">Touchless Face Scanner</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">Touchless Iris Scanner</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">Finger optical multispectral</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">Finger optical (ot, optional) / capacitive (ct)</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">Thermal camera</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr>

                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">IDENTIFICATION FACTORS</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr> 
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">PIN</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">RFID</td>
                  <td className="border border-r border-black  p-2">Optional, accessory or license needed</td>
                </tr> 
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">TBS MobileID (Bluetooth)</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">QR Code</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr> 

                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">USER INTERFACE</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr> 
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">Touchscreen size (inch)</td>
                  <td className="border border-r border-black  p-2">5.0</td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">Loudspeaker</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr> 
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">Beeper</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr> 

                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">BIOMETRICS</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">Identification (1:N) database limit, default</td>
                  <td className="border border-r border-black  p-2">10’000</td>
                </tr> 
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">Identification (1:N) database limit, PREMIUM</td>
                  <td className="border border-r border-black  p-2">100’000</td>
                </tr> 
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">FRR at FAR 1:100`000</td>
                  <td className="border border-r border-black  p-2">0.5%</td>
                </tr> 

                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">COMMUNICATION</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr> 
                <tr>
                  <td className="p-2 border-r border-black  text-[17px] text-gray-800 dark:text-gray-200 leading-normal font-bold">LAN</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black text-[17px] text-gray-800 dark:text-gray-200 leading-normal font-bold">WIFI</td>
                  <td className="border border-r border-black  p-2">Optional, accessory or license needed</td>
                </tr> 

                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">Mobile 4G</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">INTERFACES</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr> 
                <tr>
                  <td className="p-2 border-r border-black text-[17px] text-gray-800 dark:text-gray-200 leading-normal font-bold">RS-232 and RS-485</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr> 
                 <tr>
                  <td className="p-2 border-r border-black  text-[17px] text-gray-800 dark:text-gray-200 leading-normal font-bold">Wiegand Out</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr>
                 <tr>
                  <td className="p-2 border-r border-black  text-[17px] text-gray-800 dark:text-gray-200 leading-normal font-bold">Relay</td>
                  <td className="border border-r border-black  p-2">
                    Extendable by license. Figure indicatessingle fingerprints, iris pairs or hands
                  </td>
                </tr> 
                <tr>
                  <td className="p-2 border-r border-black text-[17px] text-gray-800 dark:text-gray-200 leading-normal font-bold">GPIN/GPOUT</td>
                  <td className="border border-r border-black  p-2">2/2</td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black text-[17px] text-gray-800 dark:text-gray-200 leading-normal font-bold">SECURITY</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr> 
                
                <tr>
                  <td className="p-2 border-r border-black text-[17px] text-gray-800 dark:text-gray-200 leading-normal font-bold">Liveness Detections</td>
                  <td className="border border-r border-black  p-2">Optional, accessory or license needed</td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black text-[17px] text-gray-800 dark:text-gray-200 leading-normal font-bold">Multi-Level Data Encryption</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr> 
                <tr>
                  <td className="p-2 border-r border-black text-[17px] text-gray-800 dark:text-gray-200 leading-normal font-bold">Template on Card</td>
                  <td className="border border-r border-black  p-2">Optional, accessory or license needed</td>
                </tr> 
                <tr>
                  <td className="p-2 border-r border-black text-[17px] text-gray-800 dark:text-gray-200 leading-normal font-bold">Anti-Tampering</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr> 

                <tr>
                  <td className="p-2 border-r border-black text-[17px] text-gray-800 dark:text-gray-200 leading-normal">INSTALLATION</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr> 
                <tr>
                  <td className="p-2 border-r border-black text-[17px] text-gray-800 dark:text-gray-200 leading-normal font-bold">Input supply voltage DC</td>
                  <td className="border border-r border-black  p-2">12‑24</td>
                </tr>
                 <tr>
                  <td className="p-2 border-r border-black text-[17px] text-gray-800 dark:text-gray-200 leading-normal font-bold">Max. power rating in W</td>
                  <td className="border border-r border-black  p-2">11</td>
                </tr> 
                <tr>
                  <td className="p-2 border-r border-black text-[17px] text-gray-800 dark:text-gray-200 leading-normal font-bold">Power over Ethernet</td>
                  <td className="border border-r border-black  p-2">PoE+</td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black text-[17px] text-gray-800 dark:text-gray-200 leading-normal font-bold">Operating temperature in °C 6</td>
                  <td className="border border-r border-black  p-2">-20 to 60</td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black text-[17px] text-gray-800 dark:text-gray-200 leading-normal">MOUNTING</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr>
                 <tr>
                  <td className="p-2 border-r border-black text-[17px] text-gray-800 dark:text-gray-200 leading-normal font-bold">Wall mount WM Box</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr>
                 <tr>
                  <td className="p-2 border-r border-black text-[17px] text-gray-800 dark:text-gray-200 leading-normal font-bold">Wall mount WM Box</td>
                  <td className="border border-r border-black  p-2">IP 54</td>
                </tr>
                 <tr>
                  <td className="p-2 border-r border-black text-[17px] text-gray-800 dark:text-gray-200 leading-normal font-bold">Flush mount</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr>
                 <tr>
                  <td className="p-2 border-r border-black text-[17px] text-gray-800 dark:text-gray-200 leading-normal font-bold">Outdoor protection kit</td>
                  <td className="border border-r border-black  p-2">Required if not sheltered</td>
                </tr>

                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">CERTIFICATIONS</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr> 
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">CE</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr> 
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">FCC/IC</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr> 
              </tbody>
            </table>
          </div>

         {/* Tags */}
           <div className="mt-8 flex gap-3 mb-1 border-b p-4 rounded">
              <p className="text-white border bg-[#ff5f31] px-2 py-1">UBERGARD</p>
              <p className="text-white border bg-[#ff5f31] px-2 py-1">Access Control System</p>
           </div> 

            {/* Share Section */}
            <SocialShare title="Check out this product!" />
         </main>

             {/* Sidebar */}
                  <aside className="lg:w-2/4 space-y-6">
                     <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
                        <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By UberGard</h3>
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

 
}

export default Air22;
