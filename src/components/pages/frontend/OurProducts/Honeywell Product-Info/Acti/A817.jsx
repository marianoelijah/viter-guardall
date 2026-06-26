import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';
import React from 'react';



const A817 = () => {
  const specs = [
    { type: 'header', label: 'KEY SPECS' },
    { label: "Product Type", value: "Speed dome"},
    { label: "Maximum Resolution", value: "4 MP" },
    { label: "Environment", value: "Outdoor" },
    { label: "Image Sensor", value: "Progressive scan CMOS" },
    { label: "Sensor Size", value: "1/2.8″″" },
    { label: "Effective Pixels", value: "1945 x 1097 / 2.13 MP" },
    { label: "Day & Night", value: "Yes" },
    
    { type: 'header', label: 'IMAGING' },
    { label: "Low Light Sensitivity", value: "Extreme" },
    { label: "Minimum Illumination", value: "Color: 0.003 lux at F1.6 (AGC on); B/W: 0 (IR LED on)" },
    { label: "D/N Switch", value: "ISP-based switch, configurable" },
    { label: "Mechanical IR Cut Filter", value: "Yes" },
    { label: "IR Sensitivity Range", value: "700 to 1100 nm" },
    { label: "IR Wavelength", value: "850 nm" },

    { type: 'header', label: 'EXPOSURE CONTROL' },
    { label: "Minimum Illumination", value: "0.05 Lux (Color)0.005 Lux (Black and White)" },

    { type: 'header', label: 'LENS' },
    { label: "Focal Length", value: "4.6 to 165.6mm" },
    { label: "Optical Zoom Ratio", value: "36x" },
    { label: "Field of View", value: "Horizontal: 64.3 to 2.04°Vertical: 39.62 to 1.62°" },
    
    { type: 'header', label: 'VIDEO' },
    { label: "Automatic Gain Control", value: "Yes" },
    { label: "Max IP Streaming", value: "via RJ452592 x 1944 up to 30.00 fps" },
    { label: "Multi-View Streaming", value: "Yes, 3 Streams" },

    { type: 'header', label: 'CONTROL' },
    { label: "Pan/Tilt", value: "ProgrammedPan: 360° (-180 to 180°) at 300°/s Tilt: 220° at 150°/s " },

    { type: 'header', label: 'NETWORKING' },
    { label: "Security", value: "Anonymous Authentication, HTTPS, IEEE 802.1X, IP Address Filtering, Password Protection" },
    { label: "Supported Protocols", value: "ARP, DDNS, FTP, HTTP, ICMP, IPv4/v6, NTP, ONVIF Profile G, PPPoE, QoS Layer 3 DiffServ, RTP, RTSP, SMTP, SNMP v1/v2c/v3 (MIB-II), TCP, UDP, UPnP" },

    { type: 'header', label: 'INTERFACE' },
    { label: "Media/Memory Card Slot", value: "Single Slot: microSD/microSDHC/microSDXC [64 GB Maximum]" },
    { label: "Audio I/O", value: "Two-Way" },
    { label: "Audio Formats", value: "G.711" },
    { label: "Built-In Mic", value: "No" },
    { label: "Built-In Speaker", value: "No" },

    { type: 'header', label: 'SENSORS & ALARMS' },
    { label: "Event Trigger", value: "Yes" },
    { label: "Event Action", value: "Notification, Alarm" },

    { type: 'header', label: 'GENERAL' },
    { label: "Impact Resistance", value: "Impact-Resistant (IK10)" },
    { label: "Operating Conditions", value: "-40 to 131°F / -40 to 55°C at 10 to 85% Humidity" },
    { label: "Startup Temperature", value: "-40 to 131°F / -40 to 55°C " },
    { label: "Illumination", value: "IR LEDs up to 98.4′ / 30 m" },

  ];

  const productFeatures = [
    "Built-in tampering detection",
    "Privacy masking for up to four configurable regions",
    "2000 TVL resolution",
    "Mechanical IR cut filter enables day and night functionality",
    "Adaptive iris",
    "Auto focus",
    "4.3x optical zoom",
    "Three-axis angle adjustments",
    "H.265, H.264, and MJPEG video codecs",
    "Simultaneous triple streaming",
    "CBR and VBR",
    "Flip, rotation (corridor mode), and mirror image orientation",
    "GPS positioning",
    "Image enhancements include; white balance, brightness, backlight compensation, contrast, saturation, sharpness, automatic gain control, flickerless, digital image stabilizer (DIS, EIS), and defogging",
    "2D-DNR and 3D-DNR",
    "Fully compatible with ACTi software",
    "Text overlay",
    "130 dB wide dynamic range",
    "Event triggers include; video motion detection (3 regions), external device through digital input, sound detection, and tampering detection",
    "Event responses include; notify control center, change camera settings, command other devices, email notification with snapshots, play the audio file, push notification to mobile device, save video to local storage, upload video to NVR server, upload video or snapshot to FTP server, and activate external device through digital output",
    "Fully compatible with ACTi software",
    "Audio input and output",
    "RJ45 Ethernet port",
    "Terminal block for digital input and output",
    "Compatible with Internet Explorer 11",
    "Automatic firmware upgrades",
    "Real-time clock",
    "Reset button",
    "CE and FCC certified"
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          A817 8MP Outdoor Network Dome Camera
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
            Designed both for indoor and outdoor use, this surveillance camera has a high resolution to clearly capture images even at night. 
            </p>

            <h2 className="font-bold text-xl mb-2  text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
                Monitor an indoor or outdoor area with the white A817 8MP Network Dome Camera from ACTi. This unit uses a 1/2.8″ progressive scan CMOS image sensor to capture 3840 x 2160 resolution video at 30 fps. An adaptive IR LED provides up to 98′ of illumination in low-light conditions. The camera’s 2.8-12mm varifocal lens delivers a 103.6 to 31.1° horizontal field of view. Two-way audio is possible thanks to an audio input and output. A built-in memory card slot accepts microSD/SDHC/SDXC cards up to 256GB (available separately). Integrated PoE technology simplifies connectivity by transferring data and power through a single cable.
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

export default   A817;