import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';


const DS7608NXI = () => {
  const productFeatures = [
    "H.265+/H.265/H.264+/H.264 video formats",
    "Intelligent analytics based on deep learning algorithms",
    "Up to 4-ch perimeter protection",
    "Up to 1-ch facial recognition for video stream",
    "Up to 4-ch facial recognition for face picture",
    "Up to 8-ch IP camera inputs",
    "Up to 16-ch 1080p decoding capability"
  ];

  // Helper to render table headers for the hardware sections
  const renderHardwareHeader = (models) => (
    <thead>
      <tr className="bg-gray-100 font-bold text-[10px]">
        <th className="border border-black p-2 text-left w-1/4"></th>
        {models.map((model, idx) => (
          <th key={idx} className="border border-black p-2 text-center">{model}</th>
        ))}
      </tr>
    </thead>
  );

  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-black pb-12">
      {/* Blue Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-4 text-center">
        <h1 className="text-5xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto text-center">
              DS-7608NXI-I2/8P/S AcuSense Series NVR
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
          <p className="text-[17px] leading-relaxed mb-6">
           A network video-recorder with AI functionality and can offer up to 8 channel input.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
            <div className="text-[17px] leading-relaxed space-y-4 mb-6">
              <p>
              With built-in analytics, Hikvision’s Network Video Recorders (NVRs) provide advanced artificial intelligence capabilities for any connected data stream, even those from conventional security cameras. Empowered by AI chips and high-precision algorithms, Hikvision NVRs combine high-efficiency video recording with abundant options for data analytics. These advanced NVRs bring powerful applications to a variety of users with diverse requirements.
              </p>
            </div>

            <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1 mb-8">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          <h2 className="font-bold text-xl text-black mb-4 uppercase">Technical Specification:</h2>

          
          <div className="mb-8">
             
             <table className="w-full border-collapse border border-black text-[10px]">

                {/* <thead>
                    <tr>
                      <td colSpan="5" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-50 text-center">
                       FACIAL RECOGNITION
                      </td>
                   </tr>
                   <tr className="bg-gray-100 font-bold">
                      <th colSpan="2" className="border border-black p-2 text-[17px] text-black w-1/4">
                        Facial detection andanalytics
                      </th>
                      <th colSpan="3" className="border border-black p-2 text-[17px] text-black">
                       Face picture comparison, human face capture, face picture search
                      </th>
                   </tr>
                </thead> */}

                <tbody>
                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-50 text-center">
                        MOTION DETECTION 2.0
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-50 text-center">
                        IP video input
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                         16-ch
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                          32-ch
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-50 text-center">
                        Incoming bandwidth
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                         160 Mbps
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                         256 Mbps
                      </td>
                   </tr>
                 <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-center">
                    Outgoing bandwidth
                  </td>
                  <td colSpan="4" className="border border-black p-2  text-[15px] text-black">
                    256 Mbps
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-center">
                    HDMI 1 output
                  </td>
                  <td colSpan="4" className="border border-black p-2  text-[15px] text-black">
                     4K (3840 × 2160)/60Hz, 4K (3840 × 2160)/30Hz, 1920 × 1080/60Hz, 1600 × 1200/60Hz, 1280 × 1024/60Hz, 1280 × 720/60Hz, 1024 × 768/60Hz
                  </td>
                </tr>
                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-50 text-center">
                       HDMI 2 output
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                      1920 × 1080/60Hz, 1280 × 1024/60Hz, 1280 × 720/60Hz, 1024 × 768/60Hz
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-50 text-center">
                        VGA output
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        1920 × 1080/60Hz, 1280 × 1024/60Hz, 1280 × 720/60Hz, 1024 × 768/60Hz
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-50 text-center">
                        Video output mode
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        HDMI1/VGA simultaneous output, HDMI2/VGA independent output
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-50 text-center">
                        CVBS output
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        1-ch, BNC (1.0 Vp-p, 75 Ω), resolution: PAL: 704 × 576, NTSC: 704 × 480
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-50 text-center">
                        Audio output
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        1-ch, RCA (Linear, 1 KΩ)
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-50 text-center">
                        Two-way audio input
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                       1-ch, RCA (2.0 Vp-p, 1 KΩ, using the audio input)
                      </td>
                   </tr>
                   
                    <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-50 text-center">
                          DECODING
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black"></td>
                   </tr>

                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-50 text-center">
                       Decoding format
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        H.265+/H.265/H.264+/H.264/MPEG4
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black  text-[17px] text-black font-bold bg-gray-50 text-center">
                        Recording resolution
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        32 MP/24 MP/12 MP/8 MP/6 MP/5 MP/4 MP/3 MP /1080p/UXGA/720p/VGA/4CIF/DCIF/2CIF/CIF/QCIF*: After ultra HD resolution mode is enabled, the NVR supports up to 4-ch 32 MP/24 MP IP video inputs.
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-50 text-center">
                        Synchronous playback
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        16-ch
                      </td>
                   </tr>
                  
                    <tr>
                      <td className="border border-black text-[17px] text-black font-bold bg-gray-50 text-center">
                       Capability
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        1-ch@32 MP (30 fps)/2-ch@12 MP (20 fps)/4-ch@8 MP (25 fps)/8-ch@4 MP (30 fps)/16-ch@1080p (30 fps)
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black text-[17px] text-black font-bold bg-gray-50 text-center">
                        Dual stream recording
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                         Support
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-black text-[17px] text-black font-bold bg-gray-50 text-center">
                        Audio compression
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        G.711ulaw/G.711alaw/G.722/G.726
                      </td>
                   </tr>

                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-50 text-center">
                       NETWORK
                      </td>
                   </tr>

                   <tr>
                      <td className="border border-black text-[17px] text-black font-bold bg-gray-50 text-center">
                         Remote connections
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                         128
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black text-[17px] text-black font-bold bg-gray-50 text-center">
                         Network protocol
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                         TCP/IP, DHCP, IPv4, IPv6, DNS, DDNS, NTP, RTSP, SADP, SMTP, SNMP, NFS, iSCSI, ISUP, UPnP, HTTP, HTTPS
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black text-[17px] text-black font-bold bg-gray-50 text-center">
                         Network interface
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                         2, RJ-45 10/100/1000 Mbps self-adaptive Ethernet interface
                      </td>
                   </tr>

                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-50 text-center">
                       AUXILIARY INTERFACE
                      </td>
                   </tr>

                    <tr>
                      <td className="border border-black text-[17px] text-black font-bold bg-gray-50 text-center">
                         Serial Port
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        1 RS-485 (half-duplex), 1 RS-232
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black text-[17px] text-black font-bold bg-gray-50 text-center">
                        SATA
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        4 SATA interfaces
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black text-[17px] text-black font-bold bg-gray-50 text-center">
                        eSATA (optional)
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        1 eSATA interface
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black text-[17px] text-black font-bold bg-gray-50 text-center">
                        Capacity
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        Up to 10 TB capacity for each disk
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black text-[17px] text-black font-bold bg-gray-50 text-center">
                        Alarm in/out
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        16/4 (16/8 optional)
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black text-[17px] text-black font-bold bg-gray-50 text-center">
                        USB interface
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        Front panel: 2 × USB 2.0; Rear panel: 1 × USB 3.0
                      </td>
                   </tr>

                   <tr>
                      <td colSpan="5" className="border p-2 border-black text-[17px] text-black font-bold bg-gray-50 text-center">
                         GENERAL
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black text-[17px] text-black font-bold bg-gray-50 text-center">
                       Power supply
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        100 to 240 VAC, 50 to 60 Hz
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-black text-[17px] text-black font-bold bg-gray-50 text-center">
                        Consumption (without HDD)
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                         20 W
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black text-[17px] text-black font-bold bg-gray-50 text-center">
                       Working temperature
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        -10 °C to 55 °C (14 °F to 131 °F)
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-black text-[17px] text-black font-bold bg-gray-50 text-center">
                        Working humidity
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                         10% to 90%
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-black text-[17px] text-black font-bold bg-gray-50 text-center">
                       Chassis
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        19-inch rack-mounted 1.5U chassis
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-black text-[17px] text-black font-bold bg-gray-50 text-center">
                        Dimension (W × D × H)
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                         445 × 400 × 75 mm ( 17.5″× 15.7″ × 3.0″)
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-black text-[17px] text-black font-bold bg-gray-50 text-center">
                       Weight (without HDD)
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                       5 kg (11 lb)
                      </td>
                   </tr>

                    <tr>
                      <td colSpan="5" className="border border-black text-[17px] text-black font-bold bg-gray-50 text-center p-2">
                        Certification
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black text-[17px] text-black font-bold bg-gray-50 text-center">
                        FCC
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        Part 15 Subpart B, ANSI C63.4-2014
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-black text-[17px] text-black font-bold bg-gray-50 text-center">
                       CE
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                       EN 55032:2015, EN 61000-3-2, EN 61000-3-3, EN 50130-4
                      </td>
                   </tr>
                </tbody>
             </table>
          </div>

         

          {/* Tags */}
            <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="text-lg text-white border bg-red-500 px-2">HIKVISION</p>
            <p className="text-lg text-white border bg-red-500 px-2">CCTVs</p>
           </div> 

          {/* Share Section */}
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
           <div className="bg-gray-300 p-4 border border-black mb-6">
            <h3 className="text-xl font-bold text-black mb-4 border-b pb-1">More By HIKVISION</h3>
            <ul className="text-xl space-y-4 text-gray-500 transition-colors">
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

export default DS7608NXI;