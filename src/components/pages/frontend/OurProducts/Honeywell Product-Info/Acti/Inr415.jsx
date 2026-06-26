import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';
import React from 'react';


const Inr415 = () => {
  const specs = [
    { label: "Model", value: "INR-415"},
    { label: "Maximum Number of Cameras", value: "256" },
    { label: "Maximum Number of Clients", value: "Local: 1, Remote: 5" },
    { label: "Free License", value: "64 (64 channels for ACTi and 1 channel for third-party video device) " },
    { label: "Video Resolution", value: "Support all ACTi cameras in all resolutions" },
    { label: "Compression", value: "H.265, H.264, MPEG-4, MJPEG" },
    { label: "Scheduled Recording", value: "Yes" },
    { label: "Event Recording", value: "Yes" },
    { label: "Manual Recording", value: "Yes" },
    { label: "Speed Up", value: "Yes" },
    { label: "Dual Stream Management", value: "Yes" },
    { label: "Recording Throughput", value: "550 Mbps" },
    { label: "HDD Interface", value: "Maximum 2 SATA disks; Options to have empty bays, one 2TB or one4TB storage disk included" },
    { label: "External Storage Interface", value: "iSCSI" },
    { label: "RAID Level", value: "Hardware RAID 0, 1, 5, 6, 10, 50, 60" },
    { label: "Digital Zoom", value: "Yes" },
    { label: "Event Status", value: "Display event status upon alarm or upon connection loss or recovery between server and client or when the allocated disk space is full" },
    { label: "Instant Playback", value: "Instant Playback in live view window" },
    { label: "e-Map", value: "Yes" },
    { label: "PTZ Control", value: "Yes" },
    { label: "Playback Control", value: "Continuous forward and backward playback with speeds (1/64, 1/32, 1/16, 1/8, 1/4, 1/2, 1, 2, 4, 8, 16, 32, 64, 128, 256) or frame-by-frame, pause, stop" },
    { label: "Synchronized Playback", value: "9 channels (Local), 64 channels (Remote)" },
    { label: "Local Access", value: "USB joystick, keyboard & mouse" },
    { label: "Remote Access", value: "Workstation, Web Client, Mobile Client" },
    { label: "Event Trigger", value: "[NVR]: Disk full, Disk not found, Disk is available, S.M.A.R.T. Failure and Normal, Schedule service start and stop, Video Push start and stop, Time Backward, CPU limit exceeded for Server PC, CPU limit exceeded for NVR services, GPU Loading Detection for workstation only, Memory limit exceeded for Server PC and NVR services, Network Send/Receive Limit Exceeded for Server PC. [Video Device]: Video motion detection, Passive IR sensor, External device through digital input, Sound detection, Intelligent event detection, Video Push start and stop, Video loss and recovery, Disk Write Failure and Available. [Extended Device]: Point-of-sale (POS) status, Network I/O status, Access Control status" },
    { label: "Event Response", value: "Pop-up window with live video and event confirmation activation, Switch to hotspot window, Switch to customize view, Command a PTZ device to go to a preset point, Play alert sound, Activate external device through digital output, Execute system command to activate other programs, Upload video or snapshot to FTP server, E-mail notification with snapshots, Push notification, Send Snapshot to Line Messenger" },
    { label: "Permission Control", value: "Unlimited number of users, Active Directory, Customizable permissions for user groups, Account lockout, Automatic logout after idle, Playback password protected, Password validity period, Password Expiration Notification" },
    { label: "Video Export", value: "RAW, AVI, MP4, EXE, GPU Hardware accelerated video export supported with AVI format" },
    { label: "Server Operating System", value: "Windows 10 IoT" },
    { label: "ONVIF Compliant", value: "Yes, Profile S (contains the officially ONVIF conformant software NVR 3 Corporate)" },
    { label: "Operating Temperature", value: "" },
    { label: "Operating Temperature", value: "0°C ~ 40°C (32°F ~ 104°F)" },
    { label: "Approvals", value: "CE Class B, FCC Class B, BSMI" },
   
  ];

  const productFeatures = [
    "12-bay 2U Rackmount Standalone NVR",
    "Maximum Number of Video Devices: 256 (Free License: 64)",
    "Hardware RAID 0, 1, 5, 6, 10, 50, 60",
    "Multi-Browser Support for Lite Web Client (v.3.0.16)",
    "System Monitoring and Notifications (v.3.0.16)",
    "Location-based management with e-Map & Google Map",
    "Workstation, Web Client, Mobile Client",
    "Event Trigger, Response, Notification and Snapshot to Line Messenger (v.3.0.16)",
    "Intel Core i7-7700, 16GB",
    "Non-ACTi camera support via licensed Camera Device Pack"
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          INR 415 256-Channel 12 Bay RAID Backmount Standalone
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
               A network video recorder that can manage up to 256 channels.
            </p>

            <section className="mb-8">
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
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                ACTI
              </span>
              
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
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

export default   Inr415;