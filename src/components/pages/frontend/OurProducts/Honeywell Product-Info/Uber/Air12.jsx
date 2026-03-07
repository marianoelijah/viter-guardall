import React from "react";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import { NavLink } from "react-router-dom";

const Air12 = () => {
  
   return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      {/* Header */}
      <header className="bg-[#7f95b8] text-white py-12 px-4 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
           TBS AIR 12
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
         <p className="text-[17px] leading-relaxed mb-6">
            A touchless biometric scanner with 3D finger‑scanning.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
            <div className="text-[17px] leading-relaxed space-y-4 mb-6">
              <p className="text-[17px] leading-relaxed space-y-4 mb-6">
                3D AIR is a unique touchless biometric terminal and was the world’s first to introduce 
                3D finger-scanning. Touchless fingerprint yielding the highest security level!
              </p>
            </div>

            <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1">
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
              <li>User-friendly operation and configuration</li>
              <li>Flush mount for indoor and outdoor installations</li>
            </ul>
          </section>
          
          
             {/* Technical Specification Table */}
              <div className="bg-gray-200 p-6 shadow rounded border border-r divine-y">
            <h2 className="font-semibold text-xl mb-4">Technical Specification</h2>

            <table className="w-full border text-sm">
              <tbody>
                <tr className="bg-gray-100 font-bold">
                  <td className="border-r border-black border  p-2">APPLICATIONS</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr> 
                <tr>
                  <td className="border border-r border-black p-2">Access Control</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr> 
                <tr>
                  <td className="border border-r border-black p-2">Time & Attendance, Workforce Management</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr> 

                <tr className="bg-gray-100 font-bold">
                  <td className="border border-r border-black p-2">SENSORS</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr> 
                <tr>
                  <td className="border border-r border-black p-2">Touchless Hand Scanner</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr> 
                <tr>
                  <td className="border border-r border-black p-2">Touchless 3D Finger Scanner</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr>
                <tr>
                  <td className="border border-r border-black p-2">Touchless Face Scanner</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr>
                <tr>
                  <td className="border border-r border-black p-2">Touchless Iris Scanner</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr>
                <tr>
                  <td className="border border-r border-black p-2">Finger optical multispectral</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr>
                <tr>
                  <td className="border border-r border-black p-2">Finger optical (ot, optional) / capacitive (ct)</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr>
                <tr>
                  <td className="border border-r border-black p-2">Thermal camera</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr>

                <tr className="bg-gray-100 font-bold">
                  <td className="border border-r border-black p-2">IDENTIFICATION FACTORS</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr> 
                <tr>
                  <td className="border border-r border-black p-2">PIN</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr>
                <tr>
                  <td className="border border-r border-black p-2">RFID</td>
                  <td className="border border-r border-black  p-2">Optional, accessory or license needed</td>
                </tr> 
                <tr>
                  <td className="border border-r border-black p-2">TBS MobileID (Bluetooth)</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr>
                <tr>
                  <td className="border border-r border-black p-2">QR Code</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr> 

                <tr className="bg-gray-100 font-bold">
                  <td className="border border-r border-black p-2">USER INTERFACE</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr> 
                <tr>
                  <td className="border border-r border-black p-2">Touchscreen size (inch)</td>
                  <td className="border border-r border-black  p-2">5.0</td>
                </tr>
                <tr>
                  <td className="border border-r border-black p-2">Loudspeaker</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr> 
                <tr>
                  <td className="border border-r border-black p-2">Beeper</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr> 

                <tr className="bg-gray-100 font-bold">
                  <td className="border border-r border-black p-2">BIOMETRICS</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr>
                <tr>
                  <td className="border border-r border-black p-2">Identification (1:N) database limit, default</td>
                  <td className="border border-r border-black  p-2">10’000</td>
                </tr> 
                <tr>
                  <td className="border border-r border-black p-2">Identification (1:N) database limit, PREMIUM</td>
                  <td className="border border-r border-black  p-2">100’000</td>
                </tr> 
                <tr>
                  <td className="border border-r border-black p-2">FRR at FAR 1:100`000</td>
                  <td className="border border-r border-black  p-2">0.5%</td>
                </tr> 

                <tr className="bg-gray-100 font-bold">
                  <td className="border border-r border-black p-2">COMMUNICATION</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr> 
                <tr className="bg-gray-100 ">
                  <td className="border border-r border-black p-2 font-bold">LAN</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr>
                <tr className="bg-gray-100 ">
                  <td className="border border-r border-black p-2 font-bold">WIFI</td>
                  <td className="border border-r border-black  p-2">Optional, accessory or license needed</td>
                </tr> 

                <tr className="bg-gray-100 font-bold">
                  <td className="border border-r border-black p-2">Mobile 4G</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr>
                <tr className="bg-gray-100 font-bold">
                  <td className="border border-r border-black p-2">INTERFACES</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr> 
                <tr className="bg-gray-100 ">
                  <td className="border border-r border-black p-2 font-bold">RS-232 and RS-485</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr> 
                 <tr className="bg-gray-100 ">
                  <td className="border border-r border-black p-2 font-bold">Wiegand Out</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr>
                 <tr className="bg-gray-100">
                  <td className="border border-r border-black p-2 font-bold">Number of RElais (NO/NC.COM)</td>
                  <td className="border border-r border-black  p-2">
                    Requires internal RelayBoard
                  </td>
                </tr> 
                <tr className="bg-gray-100 ">
                  <td className="border border-r border-black p-2 font-bold">GPIN/GPOUT</td>
                  <td className="border border-r border-black  p-2">Extendable by license. Figure indicatessingle fingerprints, iris pairs or hands</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-r border-black p-2 font-bold">SECURITY</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr> 
                
                <tr>
                  <td className="border border-r border-black p-2 font-bold">Liveness Detections</td>
                  <td className="border border-r border-black  p-2">Optional, accessory or license needed</td>
                </tr>
                <tr>
                  <td className="border border-r border-black p-2 font-bold">Multi-Level Data Encryption</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr> 
                <tr>
                  <td className="border border-r border-black p-2 font-bold">Template on Card</td>
                  <td className="border border-r border-black  p-2">Optional, accessory or license needed</td>
                </tr> 
                <tr>
                  <td className="border border-r border-black p-2 font-bold">Tamper Switch</td>
                  <td className="border border-r border-black  p-2">Optional, accessory or license needed</td>
                </tr> 

                <tr className="bg-gray-100 font-bold">
                  <td className="border border-r border-black p-2">INSTALLATION</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr> 
                <tr>
                  <td className="border border-r border-black p-2 font-bold">Input supply voltage DC</td>
                  <td className="border border-r border-black  p-2">12‑24</td>
                </tr>
                 <tr>
                  <td className="border border-r border-black p-2 font-bold">Max. power rating in W</td>
                  <td className="border border-r border-black  p-2">18</td>
                </tr> 
                <tr>
                  <td className="border border-r border-black p-2 font-bold">Power over Ethernet</td>
                  <td className="border border-r border-black  p-2">(PoE+)</td>
                </tr>
                <tr>
                  <td className="border border-r border-black p-2 font-bold">Operating temperature in °C 6</td>
                  <td className="border border-r border-black  p-2">-20 to 60</td>
                </tr>
                <tr className="bg-gray-100 font-bold">
                  <td className="border border-r border-black p-2">MOUNTING</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr>
                 <tr>
                  <td className="border border-r border-black p-2 font-bold">Wall mount</td>
                  <td className="border border-r border-black  p-2">Indoor use only</td>
                </tr>
                 <tr>
                  <td className="border border-r border-black p-2 font-bold">Flush mount</td>
                  <td className="border border-r border-black  p-2">Optional, accessory or license needed</td>
                </tr>
                 <tr>
                  <td className="border border-r border-black p-2 font-bold">Outdoor protection kit</td>
                  <td className="border border-r border-black  p-2">Required if not sheltered</td>
                </tr>

                <tr className="bg-gray-100 font-bold">
                  <td className="border border-r border-black p-2">CERTIFICATIONS</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr> 
                <tr>
                  <td className="border border-r border-black p-2 font-bold">CE</td>
                  <td className="border border-r border-black  p-2">Yes</td>
                </tr> 
                <tr>
                  <td className="border border-r border-black p-2 font-bold">FCC/IC</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr>
                  <tr>
                  <td className="border border-r border-black p-2 font-bold">UL 294</td>
                  <td className="border border-r border-black  p-2"></td>
                </tr> 
              </tbody>
            </table>
                </div>

                {/* Tags */}
              <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
                <p className="text-lg text-white border bg-red-500 px-2">
                  UBERGARD
                </p>
                <p className="text-lg text-white border bg-red-500 px-2">
                  Access Control System
                </p>
              </div> 


              {/* Share Section */}
              <div className="mt-2">
                <p className="font-medium text-black mb-4">Share:</p>
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
            
                     <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                        <h3 className="text-xl font-bold text-black mb-4 border-b pb-1">More By UberGard</h3>
                        <ul className="text-[17px] space-y-4 text-gray-500 transition-colors">
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
                          <button className="bg-blue-700 hover:bg-blue-400 text-white font-semibold px-4 py-2 rounded w-full">
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

 
}

export default Air12;
