import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';


const Enr130 = () => {
  const specs = [
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
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
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
              style={{ backgroundImage: "url('/dist/assets/image/Our Products/quickalert.jpg')" }}
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

export default   Enr130;