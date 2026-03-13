import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';


const Z86 = () => {
  const specs = [
    { type: 'header', label: 'KEY SPECS' },
    { label: "Image Sensor", value: "1/3″-Type CMOS"},
    { label: "Focal Length", value: "2.8 to 12mm" },
    { label: "Field of View", value: "Horizontal: 102.1 to 30.7°Vertical: 54.5 to 16.9°" },
    { label: "Pan/Tilt", value: "No" },
    { label: "Built In Microphone", value: "Yes" },
    { label: "Power I/O", value: "1x DC1x RJ45" },
    
    { type: 'header', label: 'IMAGING' },
    { label: "Number of Lenses", value: "1" },
    { label: "Image Sensor", value: "1.3”-Type CMOS" },
    { label: "Sensor Resolution", value: "Effective: 4 Megapixels" },
    { label: "IR Cut Filter", value: "Yes Mechanical" },
    { label: "Day/Night", value: "Yes" },

    { type: 'header', label: 'EXPOSURE CONTROL' },
    { label: "Minimum Illumination", value: "0.003 Lux (Color)0 Lux (Black and White)" },

    { type: 'header', label: 'LENS' },
    { label: "Focal Lenght", value: "2.8 to 12mm" },
    { label: "Optical Zoom Ratio", value: "4.3x" },
    { label: "Field of View", value: "Horizontal: 102.1 to 30.7°Vertical: 54.5 to 16.9°" },
    { label: "Maximum Aperture", value: "f/1.6" },

    { type: 'header', label: 'VIDEO' },
    { label: "Automatic Gain Control", value: "Yes" },
    { label: "Max IP Streaming", value: "via RJ452688 x 1520 up to 25 fps2304 x 1296 up to 30.00 fps" },
    { label: "Multi-View Streaming", value: "Yes, 2 Streams" },

    { type: 'header', label: 'CONTROL' },
    { label: "Camera Angle Adjustment", value: "Horizontal: 3 to 360°Vertical: 0 to 70°" },
    { label: "Pan/Tilt", value: "No" },
    
    { type: 'header', label: 'NETWORKING' },
    { label: "Security", value: "HTTPS, IP Address Filtering, Password Protection" },
    { label: "Supported Protocols", value: "ARP, DDNS, FTP, HTTP, ICMP, IPv4/v6, NTP, ONVIF Profile G, PPPoE, QoS Layer 3 DiffServ, RTP, RTSP, SMTP, SNMP v1/v2c/v3 (MIB-II), TCP, UDP, UPnP, ONVIF Profile G, ONVIF Profile S, ONVIF Profile T" },
    
    { type: 'header', label: 'INTERFACE' },
    { label: "Media/Memory Card Slot", value: "Single Slot: microSD/microSDHC/microSDXC [256 GB Maximum]" },
    { label: "Other I/O", value: "1x RJ45" },
    { label: "1- or 2-Way Audio", value: "One-Way" },
    { label: "Audio Formats", value: "G.711" },
    { label: "Built-In Speaker", value: "Yes" },
    
    { type: 'header', label: 'SYSTEM INTEGRATION' },
    { label: "Analytics", value: "Camera Sabotage/Tampering, Virtual-Line Crossing Detection, Intrusion Detection, Motion Detection (4-Zones), Audio Detection" },
    
    { type: 'header', label: 'SENSORS & ALARMS' },
    { label: "Event Trigger", value: "Yes" },
    { label: "Event Action", value: "Recording, Notification, Alarm" },
    { label: "Alarm I/O", value: "No" },

    { type: 'header', label: 'POWER' },
    { label: "Power I/O", value: "1x DC1x RJ45" },
    { label: "Power Consumption", value: "PoE: 7.5 W" },

    { type: 'header', label: 'GENERAL' },
    { label: "Material Construction", value: "Metal, Plastic" },
    { label: "Environmental Resistance", value: "Dust/Water-Resistant (IP68)" },
    { label: "Impact Resistance", value: "Impact-Resistant (IK10)" },
    { label: "Operating Conditions", value: "-22 to 140°F / -30 to 60°C at 10 to 95% Humidity" },
    { label: "Illumination", value: "2x 850 nm IR LEDs up to 131.2′ / 40 m" },
    { label: "Mobile App Compatible", value: "No" },
    { label: "Dimensions (W x H x D)", value: "5 x 3.9″ / 128 x 100 mm" },
    { label: "Weight", value: "1.7 lb / 775 g (Body Only)" },
  ];

  const productFeatures = [
    "Day and night switching",
    "H.265, H.264, and MJPEG video compressions",
    "Simultaneous dual streaming",
    "Three-axis angle adjustment (3 to 360° horizontal pivot, 0 to 70° vertical pivot, and 3 to 360° rotation)",
    "Flip, mirror, and rotation (corridor mode) image orientation",
    "Image enhancements include: wide dynamic range (120 dB), backlight compensation, brightness, contrast, sharpness, automatic gain control, and defogging",
    "Analytics include: tampering detection, object line crossing detection, intrusion detection (forbidden area detection), video motion detection (four regions), sound detection, and intelligent event detection",
    "Additional features include: 2D-DNR/3D-DNR, 56 dB S/N ratio, text overlay, reset button, and privacy masking for up to four configurable regions",
    "CE and FCC certified"
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          Z86 Outdoor Network Dome Camera with Night Vision
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
                Designed both for indoor and outdoor use, this surveillance camera has a wide area 
                coverage and two-way audio. 
            </p>

            <h2 className="font-bold text-xl mb-2  text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
                Monitor an indoor or outdoor area with the Z86 4MP Network Dome Camera from ACTi. 
                This unit uses a 1/3″ progressive scan CMOS image sensor to capture 2688 x 1520 
                resolution video at 25 fps. Two adaptive IR LEDs provide up to 131′ of night vision. 
                The camera’s 2.8-12mm varifocal lens delivers a 102.1 to 30.7° horizontal field of view. 
                A built-in microphone enables the camera to pick up audio. An onboard memory card slot 
                accepts microSD/SDHC/SDXC cards up to 256GB (available separately). Integrated PoE 
                technology simplifies connectivity by transferring data and power through a single cable.
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

export default   Z86;