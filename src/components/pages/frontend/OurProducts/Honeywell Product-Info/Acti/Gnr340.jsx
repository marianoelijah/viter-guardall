import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';


const Gnr340 = () => {
  const specs = [
    { label: "Model", value: "GNR-340"},
    { label: "Maximum Number of Cameras", value: "100" },
    { label: "Maximum Number of Clients", value: "Local: 1, Remote: 4" },
    { label: "Free License", value: "32 (32 channels for ACTi and 1 channel for third-party video device)" },
    { label: "Video Resolution", value: "Support all ACTi cameras in all resolutions" },
    
    { label: "Compression", value: "H.265, H.264, MPEG-4, MJPEG" },
    { label: "Scheduled Recording", value: "Yes" },
    { label: "Event Recording", value: "Yes" },
    { label: "Manual Recording", value: "Yes" },
    { label: "Speed Up", value: "Yes" },
    { label: "Dual Stream Management", value: "Yes" },
    { label: "Recording Throughput", value: "180 Mbps" },
    { label: "HDD Interface", value: "Maximum 2 SATA disks; Options to have empty bays, one 2TB or one4TB storage disk included" },
    { label: "External Storage Interface", value: "iSCSI, USB" },

    // { type: 'header', label: 'LENS' },
    { label: "RAID Level", value: "No" },
    { label: "Digital Zoom", value: "Yes" },
    { label: "Event Status", value: "Display event status upon alarm or upon connection loss or recovery between server and client or when the allocated disk space is full" },
    { label: "Instant Playback", value: "Instant Playback in live view window" },
    { label: "e-Map", value: "Yes" },
    { label: "PTZ Control", value: "Yes" },
    
    { label: "Playback Control", value: "Continuous forward and backward playback with speeds (1/64, 1/32, 1/16, 1/8, 1/4, 1/2, 1, 2, 4, 8, 16, 32, 64, 128, 256) or frame-by-frame, pause, stop" },
    { label: "Synchronized Playback", value: "up to 225 layout grids**" },
    { label: "Local Access", value: "USB joystick, keyboard & mouse" },
    { label: "Remote Access", value: "Workstation, Web Client, Mobile Client" },
    { label: "Event Trigger", value: "[Video Device]: Video motion detection, Passive IR sensor, External device through digital input, Sound detection, Intelligent event detection, Video Push start and stop, Video loss and recovery, Disk Write Failure and Available. [Extended Device]: Point-of-sale (POS) status, Network I/O status, Access Control status" },
    { label: "Event Response", value: "Pop-up window with live video and event confirmation activation, Switch to hotspot window, Switch to customize view, Command a PTZ device to go to a preset point, Play alert sound, Activate external device through digital output, Execute system command to activate other programs, Upload video or snapshot to FTP server, E-mail notification with snapshots, Push notification, Send Snapshot to Line Messenger" },
    { label: "Permission Control", value: "Unlimited number of users, Active Directory, Customizable permissions for user groups, Account lockout, Automatic logout after idle, Playback password protected, Password validity period, Password Expiration Notification" },
    
    { label: "Video Export", value: "RAW, AVI, MP4, EXE, GPU Hardware accelerated video export supported with AVI format" },
    { label: "Server Operating System", value: "Windows 10 IoT" },
    { label: "ONVIF Compliant", value: "Yes, Profile S (contains the officially ONVIF conformant software NVR 3 Corporate)" },
    { label: "Operating Temperature", value: "0°C ~ 40°C (32°F ~ 104°F)" },
    { label: "Approvals", value: "CE, FCC, UL (for built-in power adapter)" },
    // { type: 'header', label: 'PTZ' },
   
  ];

  const productFeatures = [
    "5-bay Tower Standalone NVR",
    "Maximum Number of Video Devices: 100 (Free License: 32)",
    "Multi-Browser Support for Lite Web Client",
    "System Monitoring and Notifications",
    "Location-based management with e-Map & Google Map",
    "Workstation, Web Client, Mobile Client",
    "Event Trigger, Response, Notification and Snapshot to Line Messenger",
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          GNR 340 100-Channel Tower Strandalone
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
               A network video recorder that can manage up to 72 channels and can be expanded to host 5 HDDs.
            </p>

            <h2 className="font-bold text-xl mb-2  text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
                Record from and manage up to 100 cameras with the GNR-340 72-Channel Tower Standalone NVR 
                (No HDD) from ACTi. This recorder can be expanded to host five HDDs up to 18TB each for a 
                maximum internal capacity of 90TB. Compliance with ONVIF profile S ensures interoperability 
                with ONVIF IP cameras.
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
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                ACTI
              </span>
              
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                CCTVs
              </span>
            </div>

            {/* SHARE SECTION */}
             <SocialShare title="Check out this product!" />

        </main>

          {/* Sidebar */}
              <aside className="lg:w-1/4 space-y-6"> 
                     <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                        <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">
                          More By ACTI
                          </h3>
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

export default   Gnr340;