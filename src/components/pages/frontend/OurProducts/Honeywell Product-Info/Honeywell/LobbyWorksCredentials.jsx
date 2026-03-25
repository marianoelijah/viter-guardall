import React from "react";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import { NavLink } from "react-router-dom";

const LobbyWorksCredentials = () => {
  return (
    <>
    <Header/>
     <div className="bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="bg-[#7f95b8] py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-white text-6xl md:text-5xl font-bold text-center tracking-wide">
            LOBBYWORKS™ CREDENTIALS:
          </h1>
          <h2 className="text-white text-4xl md:text-4xl font-semibold text-center mt-4">
            CONTACTLESS SMART CARD
          </h2>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="container mx-auto px-6 py-12">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 bg-gray-300 p-8 rounded shadow">

            <p className="text-gray-700 mb-6">
              A platform that enhances your perimeter security by providing a simple and effective way to register, badge, and track visitors.
            </p>

            <h3 className="font-bold text-black font-poppins text-lg mb-2">Product Description:</h3>
            <p className="text-black mb-6">
              The LobbyWorks Visitor Management Suite enhances your investment in access control and perimeter security by providing a simple and effective way to register, badge and track visitors. It gives you the ability to generate detailed visitor traffic reports and enforce visitor/contractor security policies.
            </p>

            <h3 className="font-bold text-black text-lg mb-2">Product Features:</h3>

            <h3 className="font-bold text-black text-lg mt-4 mb-2">Pre-Registration</h3>
            <ul className="list-disc ml-6 text-black space-y-1">
              <li>Entry into system by lobby receptionist</li>
              <li>Outlook® Calendar integration via POP3</li>
              <li>Web Center add-on for pre-registration by hosts</li>
              <li>Barcode in email pre-registration notification</li>
            </ul>

            <h3 className="font-bold text-black text-lg mt-6 mb-2">Registration</h3>
            <ul className="list-disc ml-6 text-black space-y-1 mb-8">
              <li>Process most visitors in 20 seconds or less</li>
              <li>Capture visitor photo and/or signature</li>
              <li>Scan driver’s license or business card</li>
              <li>Print professional visitor passes</li>
              <li>Integration with Active Directory</li>
              <li>Integration with Pro-Watch</li>
            </ul>

            {/* FEATURES TABLE */}
            <h3 className="font-bold text-black text-lg mb-4">Edition Comparison</h3>

            <div className="overflow-x-auto mb-10 text-black border border-black">
              <table className="w-full border border-black text-sm">
                <thead className="bg-gray-300 text-black border-black">
                  <tr className="text-[17px] uppercase border-black">
                    <th className="border p-2 text-left">Features</th>
                    <th className="border p-2">Express Edition</th>
                    <th className="border p-2">Premier Edition</th>
                  </tr>
                </thead>
                <tbody className="text-[17px] uppercase font-bold">
                  {[
                    "Registration",
                    "Tracking",
                    "Badging/Photos",
                    "Watch List",
                    "Business Card & Driver License Scanners",
                    "Signature Image Capture",
                    "Group Registration",
                    "Badge Pre-Print",
                    "Multiple Workstations",
                    "Outlook or Active Directory Integration",
                    "Asset Tracking",
                    "Delivery Tracking",
                    "Pro-Watch Integration"
                  ].map((feature, index) => (
                    <tr key={index} className="text-center">
                      <td className="border p-2 text-left">{feature}</td>
                      <td className="border p-2 text-[15px]">X</td>
                      <td className="border p-2 text-[15px]">
                        {feature === "Pro-Watch Integration" ? "Optional" : "X"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* SYSTEM MINIMUM REQUIREMENTS */}
            {/* RECOMMENDED PROCESSOR */}
            <h3 className="font-bold text-lg text-black mb-4">System Minimum Requirements</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-black text-sm text-black">
                <tbody>
                  <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">Recommended Processor</td>
                    <td className="border p-2 text-[15px] border-r border-black">Intel Pentium IV or equivalent</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">PC MODEL USED FOR TESTING</td>
                    <td className="border p-2 text-[15px] border-r border-black">DELL Optiplex GX280</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">RECOMMENDED OPERATING SYSTEM3</td>
                    <td className="border p-2 text-[15px] border-r border-black">Windows server 2003 /20081 standard, Windows XP Editions, Windows 7 Editions.
                                   (32 and 64 bit), Windows 2012 Server OS 64 bit R2 edition</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">RECOMMENDED PC TYPE (SERVER ORWORKSTATION)</td>
                    <td className="border p-2 text-[15px] border-r border-black">Workstation or Server</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">RECOMMENDED SYSTEM MEMORY(RAM)2</td>
                    <td className="border p-2 text-[15px] border-r border-black">2 GB for Windows XP SP3, 4 GB for other OS</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">CD AND DVD DRIVE</td>
                    <td className="border p-2 text-[15px] border-r border-black">Yes</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">HARD DRIVES</td>
                    <td className="border p-2 text-[15px] border-r border-black">Capacity: 40 GB Software: Windows Operating System, Microsoft Office software</td>
                  </tr>
                   <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">USB CONNECTION</td>
                    <td className="border p-2 text-[15px] border-r border-black">2.0</td>
                  </tr>
                   <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">NETWORK CONNECTION</td>
                    <td className="border p-2 text-[15px] border-r border-black">100 Mbits/sec or greater</td>
                  </tr>
                   <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">VIDEO RESOLUTION</td>
                    <td className="border p-2 text-[15px] border-r border-black">1024×768 pixels; 24-bit color or higher</td>
                  </tr>
                   <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">MULTIMEDIA</td>
                    <td className="border p-2 text-[15px] border-r border-black">Standard VGA Graphics Adapter [Display adapter]</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-[15px] text-black mt-4 mb-4">
              1 Windows Server 2003/2008 is supported for Administrator and Scheduler only.
              <br />
              2 Includes RAM required by the client machine to run the Windows operating system.
              <br />
              3 Consult Microsoft® for operating system and database license terms.
            </div>

          {/* LOBBYWORKS SERVER 1,2 */}
             <div className="overflow-x-auto">
              <table className="w-full border border-black text-sm text-black">
                <tbody >
                  <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">LobbyWorks Server1, 2</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">FEATURE</td>
                    <td className="border p-2 text-[15px] border-r border-black">Small System Requirement</td>
                    <td className="border p-2 text-[15px] border-r border-black">Requirement</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">RECOMMENDED PROCESSOR</td>
                    <td className="border p-2 text-[15px] border-r border-black">Intel Pentium IV or equivalent</td>
                    <td className="border p-2 text-[15px] border-r border-black">Intel Pentium IV or equivalent</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">PC MODEL USED FOR TESTING</td>
                    <td className="border p-2 text-[15px] border-r border-black">DELL Optiplex GX280</td>
                    <td className="border p-2 text-[15px] border-r border-black">DELL Optiplex GX280</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">RECOMMENDED OPERATING SYSTEM3</td>
                    <td className="border p-2 text-[15px] border-r border-black">Windows server 2003/2008 standard, Windows XP Editions, Windows 7Editions. (32 and 64 bit), Windows 2012</td>
                    <td className="border p-2 text-[15px] border-r border-black">Windows server 2003/2008 1 standard, Windows XP Editions, Windows 7Editions. (32 and 64 bit), Windows 2012 Server OS 64 bit R2 edition</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">RECOMMENDED PC TYPE (SERVER OR WORKSTATION)</td>
                    <td className="border p-2 text-[15px] border-r border-black">Workstation or Server</td>
                    <td className="border p-2 text-[15px] border-r border-black">Workstation or Server</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">RECOMMENDED SYSTEM MEMORY (RAM)2</td>
                    <td className="border p-2 text-[15px] border-r border-black">Capacity: 40 GB Software: Windows Operating System, Microsoft Office software</td>
                    <td className="border p-2 text-[15px] border-r border-black">2.0</td>
                  </tr>
                   <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">CD AND DVD DRIVE</td>
                    <td className="border p-2 text-[15px] border-r border-black">Yes</td>
                    <td className="border p-2 text-[15px] border-r border-black">Yes</td>
                  </tr>
                   <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">HARD DRIVES</td>
                    <td className="border p-2 text-[15px] border-r border-black">Capacity: 40 GBSoftware: Windows Operating System, MicrosoftSQL 2005/2008 SQL ExpressSoftware Microsoft OfficeSoftware</td>
                    <td className="border p-2 text-[15px] border-r border-black">Disk Set 1Capacity: 40 GBSoftware: Windows operating system, MicrosoftSQL 2005/2008 (32 and 64 bit)/SQL Express Software, Microsoft Office(if needed)
                                   Disk Set 2Capacity: 220 GBSoftware: None</td>
                  </tr>
                    <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">NETWORK CONNECTION</td>
                    <td className="border p-2 text-[15px] border-r border-black">00 Mbits/sec or greater</td>
                    <td className="border p-2 text-[15px] border-r border-black">00 Mbits/sec or greater</td>
                  </tr>
                   <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">VIDEO RESOLUTION</td>
                    <td className="border p-2 text-[15px] border-r border-black">1024×768 pixels; 24-bit color or higher</td>
                    <td className="border p-2 text-[15px] border-r border-black">1024×768 pixels; 24-bit color or higher</td>
                  </tr>
                   <tr>
                    <td className="border p-2 font-semibold text-[15px] border-r border-black">MULTIMEDIA</td>
                    <td className="border p-2 text-[15px] border-r border-black">Standard VGA Graphics Adapter[Display adapter] SoundMAXIntegrated Digital Audio</td>
                    <td className="border p-2 text-[15px] border-r border-black">Standard VGA Graphics Adapter[Display adapter] SoundMAXIntegrated Digital Audio</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-[15px] text-black mt-4 mb-4"> 
              1. For a system to be considered small, the LobbyWorks system must have fewer than <br />
                 1,500 hosts, fewer than 5 clients, and fewer than 400 visitors per day.
              <br />
              2 To install LobbyWorks on a server with Pro-Watch®, you must add the LobbyWorks recommended memory and RAM requirements for the larger system server specification to those of Pro-Watch and MS-SQL.
              <br />
              3 RAID technology used for the larger system server – disk set 1 and 2. When several physical disks are set up to use RAID technology, the operating system will be installed as on a single disk.
              <br />
              4 Consult Microsoft® for operating system and database license terms.
            </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                  HONEYWELL
                </span>
                <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                  Access Control System
                </span>
              </div>

                 {/* SHARE SECTION */}
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

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">

            {/* More By Section */}
            <div className="bg-gray-300 p-6 rounded shadow">
              <h4 className="font-semibold text-black text-lg mb-4">More By Honeywell</h4>
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
    <Footer/>
    </>
   
  );
};

export default LobbyWorksCredentials;