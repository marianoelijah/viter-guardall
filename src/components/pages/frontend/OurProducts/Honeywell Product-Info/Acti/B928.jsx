import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';


const B928 = () => {
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
    "Image flip and mirror",
    "32 configurable 3D privacy masks",
    "Built-in dehumidifier",
    "Scratch-resistant and water-repellent lens glass",
    
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          B928 5MP Outdoor PTZ Network Speed Dome Camera with Night Vision
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
                A pan-tilt-zoom surveillance camera with 36x optical zoom and extreme Wide Dynamic Range for clearer imaging. .
            </p>

            <h2 className="font-bold text-xl mb-2  text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
                  The B928 5MP Outdoor PTZ Network Speed Dome Camera from ACTi features a 4.6-165.6mm varifocal lens for 36x optical zoom. Utilizing a 1/2.9″ progressive scan CMOS sensor, the camera captures images at a maximum resolution of 2592 x 1944. The camera uses H.264, H.265, and MJPEG compressions to maximize storage and bandwidth efficiency, and a memory card slot supports microSD cards for on-site recording and storage. It also features a mechanical IR cut filter and IR LEDs for night vision up to 492′. Image enhancements include extreme WDR, white balance, brightness, contrast, saturation, sharpness, AGC, 2D & 3D digital noise reduction, flickerless, defogging, and digital image stabilization.              </p>

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

export default   B928;