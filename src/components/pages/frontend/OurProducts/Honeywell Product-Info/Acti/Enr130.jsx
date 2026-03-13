import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';


const Enr130 = () => {
  const specs = [
    // { type: 'header', label: 'CAMERA MODULE' },
    { label: "Model", value: "ENR-130"},
    { label: "Maximum Number of Cameras", value: "16" },
    { label: "Maximum Number of Clients", value: "Local: 1, Remote: 2" },
    { label: "Free License", value: "16" },
    { label: "Video Resolution", value: "Up to 4-Megapixel (Local display),Up to 10-Megapixel (Remote display)" },
    
    { label: "Compression", value: "H.264" },
    { label: "Scheduled Recording", value: "Yes" },
    { label: "Event Recording", value: "Yes" },
    { label: "Manual Recording", value: "Yes" },
    { label: "Speed Up", value: "Yes" },
    { label: "Dual Stream Management", value: "Yes" },
    { label: "Recording Throughput", value: "48 Mbps" },
    { label: "HDD Interface", value: "Maximum 2 SATA disks; Options to have empty bays, one 2TB or one4TB storage disk included" },
    { label: "External Storage Interface", value: "No" },

    // { type: 'header', label: 'LENS' },
    { label: "RAID Level", value: "No" },
    { label: "Digital Zoom", value: "Yes" },
    { label: "Event Status", value: "Display event status upon alarm or upon connection loss or recovery between server and client or when the allocated disk space is full" },
    { label: "Instant Playback", value: "Instant Playback in live view window" },
    { label: "e-Map", value: "No" },
    { label: "PTZ Control", value: "Yes" },
    
    { label: "Playback Control", value: "Continuous forward and backward playback with speeds (1/64, 1/32, 1/16, 1/8, 1/4, 1/2, 1, 2, 4, 8, 16, 32, 64, 128, 256) or frame-by-frame, pause, stop" },
    { label: "Synchronized Playback", value: "16 channels" },
    { label: "Local Access", value: "HDMI monitor, USB keyboard & mouse" },
    { label: "Remote Access", value: "Web Client (IE),Mobile Client (iOS & Android)" },
    { label: "Event Trigger", value: "Video motion detection; External device through digital input; Network loss and recovery" },
    { label: "Event Response", value: "Record video; Beep; Digital output;E-mail with snapshots; Event logging;Go to PTZ preset point" },
    { label: "Permission Control", value: "Unlimited number of users,Customizable permissions for usergroups" },
    
    { label: "Video Export", value: "USB" },
    { label: "Server Operating System", value: "Embedded Linux" },
    { label: "Client PC Operating System", value: "Windows 8, Windows 7" },
    { label: "PC Web Browser", value: "IE 9, IE 10, IE 11" },
    { label: "ONVIF Compliant", value: "Yes" },
    // { type: 'header', label: 'PTZ' },
    { label: "Operating Temperature", value: "I0°C ~ 40°C (32°F ~ 104°F)" },
    { label: "Approvals", value: "CE, FCC" },
   
  ];

  const productFeatures = [
    "Export video with raw and AVI formats",
    "Event trigger, response, and notification",
    "Remote access via mobile and web clients"
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
         ENR 130 16-Channel Desktop Standalone NVR- No HDD Included
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
                high-performance network video recorder that can accommodate up to 16 channels.


            </p>

            <h2 className="font-bold text-xl mb-2  text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
                Stream and record up to 16 channels of video with this ACTi ENR-130 4MP/10MP Standalone 
                NVR. The recorder allows simultaneous access to one local client and two remote clients, 
                supporting up to 4MP on a local display and up to 10MP on a remote display. When viewing 
                live video you can choose among a variety of display modes to monitor some or all of the 
                connected cameras at the same time. Pan, tilt, and zoom controls with speed settings offer
                remote control of PTZ cameras, joystick control being supported via the recorder’s dual 
                USB 2.0 interface. Two HDD bays, each with a 10TB capacity, provide the NVR with a total 
                storage capacity of 20TB (HDDs available separately). H.264 formatting optimizes bandwidth
                and storage usage.
              </p>

            <section className="mb-8 mt-3">
               <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1 text-black">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            </section>

            {/* Technical Specifications Table */}
                       <section>
                         <h2 className="font-bold text-xl text-black mb-4">Technical Specification:</h2>
                         <div className="border border-gray-500 overflow-hidden">
                           <table className="w-full text-left text-xs border-collapse">
                             <tbody>
                               {specs.map((item, idx) => (
                                 <React.Fragment key={idx}>
                                   {item.type === 'header' ? (
                                     <tr className="bg-gray-200">
                                       <th colSpan="2" className="p-2 border-b border-gray-500 text-[15px] text-black font-bold uppercase tracking-wider">
                                         {item.label}
                                       </th>
                                     </tr>
                                   ) : (
                                     <tr className={idx % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'}>
                                       <td className="p-3 border-b border-r border-gray-500 font-bold w-1/2 text-[15px] text-black bg-gray-50/50">
                                         {item.label}
                                       </td>
                                       <td className="p-3 border-b border-gray-500 text-gray-800 w-1/2 whitespace-pre-line text-[15px] hover:bg-slate-50/50 transition-colors">
                                         {item.value}
                                       </td>
                                     </tr>
                                   )}
                                 </React.Fragment>
                               ))}
                             </tbody>
                           </table>
                         </div>
                       </section>
            
             
            {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
                ACTI
              </span>
              
              <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
                CCTVs
              </span>
            </div>

            {/* SHARE SECTION */}
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
                     <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                        <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">
                          More By ACTI
                          </h3>
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
};

export default   Enr130;