import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';


const NE5100VDSIR2 = () => {
  const specs = [
    { type: 'header', label: 'CAMERA MODULE' },
    { label: "Image Sensor", value: "1/2.7′′ progressive scan CMOS"},
    { label: "Mini. Illumination", value: "Color:0.005Lux @ (F1.5,AGC ON)B/W:0.001Lux @ (F1.5,AGC ON)0 Lux with IR" },
    { label: "Image setting", value: "Flip, Mirror, Saturation, Brightness, Contrast, Sharpness, AGC, and AWB adjusted by client software / browser" },
    { label: "Shutter Speed", value: "1/1 s – 1/100,000 s" },
    { label: "White Balance", value: "Auto / Manual / Indoor / Outdoor" },
    { label: "Gain", value: "Auto / Manual" },
    { label: "Day & Night", value: "IR Cut filter" },
    { label: "3D DNR", value: "Auto / Manual" },
    { label: "Image Enhancement", value: "BLC, HLC, WDR(120 dB)" },
    { label: "Privacy Mask", value: "4 Programmable privacy masks" },
    { label: "Defog", value: "Electronic" },
    { label: "EIS", value: "YES" },
    { label: "Regional Exposure", value: "No" },
    { label: "Picture overlay", value: "Logo picture could be overlaid on video with128×128pixels, 24bits jpg format" },

    { type: 'header', label: 'LENS' },
    { label: "Focus length", value: "F=5.6-208mm lens, 37x optical zoom" },
    { label: "Zoom Speed", value: "Approx. 4.4s (optical zoom, wide-tele)" },
    { label: "Field of View", value: "Horizontal:59.8° to 2.0°(wide-tele)Vertical: 33.6°to 1.1°(wide-tele)Diagonal: 68.6° to 2.3°(wide-tele)" },
    { label: "Working distance", value: "wide: 1.0m ~ INF; tele: 1.5m ~ INF" },
    { label: "Aperture Range", value: "F1.55 ~ F4.5 (wide-tele)" },
    { type: 'header', label: 'PTZ' },
   
    { label: "Pan Range", value: "360°endless" },
    { label: "Pan Speed", value: "Configurable, from 0.1~180°/sMax Preset speed: 180°/s" },
    { label: "Tilt Range", value: "From -20°to 90° (auto-flip at 90°)" },
    { label: "Tilt Speed", value: "Configurable, from 0.1°~ 150°/s,Max Preset speed: 150°/s" },
    { label: "Proportional Zoom", value: "Yes" },
    { label: "Preset", value: "360" },
    { label: "Cruise", value: "8 cruises, up to 16 presets for each cruises" },
    { label: "Track", value: "4 tracks, record time over 3 minutes for each track" },
    { label: "Power off memory", value: "Support" },
    { label: "Action mode", value: "Preset / Cruise / Track / Auto Scan / Random Scan" },
    { label: "3D Positioning", value: "Support" },
    { label: "PTZ Position Display", value: "Support" },
    { label: "Scheduled Task", value: "Preset / Cruise / Track / Auto Scan / Random Scan /Dome reboot" },

    { type: 'header', label: 'IR' },
    { label: "IR Distance", value: "500m" },
    { label: "Smart IR", value: "Yes" },

    { type: 'header', label: 'NETWORK' },
    { label: "Max Resolution", value: "Yes (by OSD menu) + Red led indication" },
    { label: "Main Stream", value: "Yes (10 levels by OSD menu)" },
    { label: "Sub Stream", value: "Yes (by OSD menu)" },
    { label: "Third Stream", value: "Yes (by OSD menu) + Red led indication" },
    { label: "SVC", value: "Yes (10 levels by OSD menu)" },
    { label: "Video Compression", value: "Yes (by OSD menu)" },
    { label: "Protocols", value: "HTTP, HTTPS, IPv4/IPv6, 802.1x, QoS, FTP, SMTP, UPnP, SNMP,DNS, DDNS, NTP, RTSP, RTCP, RTP, TCP/IP, UDP, IGMP, ICMP,DHCP, PPPoE" },
    { label: "Simultaneous Live View", value: "Up to 10 channels" },
    { label: "User/Host", value: "Up to 16 users, 3 levels: Administrator, Advanced User and Normal User" },
    { label: "Security Measures", value: "User authentication (ID and PW), Host authentication (MAC address)HTTPS encryption, IEEE802.1x port-based networkaccess control; IP address filtering" },

    { type: 'header', label: 'SMART FEATURES' },
    { label: "Basic Event", value: "Motion detection, video tampering alarm, exception(network disconnected, IP address conflict, SD full, SD error)" },
    { label: "Face Detection", value: "Default off, max 30 human faces per second" },
    { label: "People Density", value: "Not support by this product" },
    { label: "Smart Detection", value: "Intrusion detection, Line crossing detection, Regionentrance detection, Region exiting detection, Unattended baggage detection, Object removal detection, Scene change detection, Support alarm triggering by human or vehicle, filtering flag/animal." },
    { label: "Smart Tracking", value: "Manual Tracking, Auto Tracking(human or vehicle by software setting)" },

    { type: 'header', label: 'SYSTEM INTEGRATION' },
    { label: "Alarm Interface", value: "7CH alarm input, 2CH alarm output" },
    { label: "Audio Interface", value: "1CH audio input, 2 to 2.4v[p-p] 1kΩ±10%1CH audio output (line out), impedance 600Ω" },
    { label: "Alarm Linkage", value: "Alarm actions, such as Preset, Cruise, Track, Memory Card Video Record, Trigger Recording, Notify Surveillance Center, Upload to FTP/Memory Card, Send Email, etc." },
    { label: "Network Interface", value: "1 RJ45 10M/100M Ethernet (Hi-PoE optional)" },
    { label: "CVBS", value: "Yes, 1 BNC Connector" },
    { label: "RS 485", value: "Pelco-D / P protocol, custom protocols available" },
    { label: "Storage ", value: "On-Body memory card slot, support microSD/SDHC/SDXC, up to 256G" },
    { label: "API", value: "ONVIF" },
    { label: "Web Browser", value: "IE 8-11, Chrome 31.0-44, Firefox 30.0-51,Not support Safari" },

    { type: 'header', label: 'GENERAL' },
    { label: "Power", value: "AC24V/DC24V 5A (Max.75W, including max.18w forlaser and max.12w for heater)Hi-PoE (Max.60W, including max.18w for laser andmax.12w for heater)" },
    { label: "Working Condition", value: "-50°C~65°C(-40°F~149°F), 90%RH less(non-condensing), Cold start at -40°C" },
    { label: "Storage Condition", value: "-40°C ~ 70°C ; ≤ 95% RH" },
    { label: "Protection", value: "IP67 Level, IK10, 6000V Lightning Protection,Surge Protection and Voltage Transient Protection" },
    { label: "Material", value: "Aluminum Alloy" },
    { label: "Dimensions", value: "Φ 278mm × 435mm (Φ10.94′ × 17.12′)" },
    { label: "Weight", value: "Approx. 8.8 Kg (19.4 lb.)" },
    { label: "Certification", value: "KC, CE, FCC" },
    

  ];

  const productFeatures = [
    "5MP(2880×1620) H.265 coding",
    "Max. resolution 2880×1620",
    "2.8mm~12mm Motorized lens",
    "Support three streams",
    "Built-in micro SD card slot, up to 256GB",
    "ICR auto switch, True Day & Night, ROI",
    "3D DNR, WDR (120dB), HLC, BLC, smart IR",
    "DC12V/PoE Power supply",
    "50m IR night view distance",
    "IP 67 & IK10 Level Protection against Dust and Water",
    "Intelligent analytics",
    "Made in Korea"

  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          NE5100VD-SIR2-AF Network Camera
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
              A 5MP surveillance system with motorized lens and basic video analytics. 
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
                                       <td className="p-3 border-b border-r border-gray-500 font-bold w-1/3 text-[15px] text-black bg-gray-50/50">
                                         {item.label}
                                       </td>
                                       <td className="p-3 border-b border-gray-500 text-gray-800 whitespace-pre-line text-[15px] hover:bg-slate-50/50 transition-colors">
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
                WEBGATE
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
                         More By WEBGATE
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

export default   NE5100VDSIR2;