import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';


const ProjectorSpeaker = () => {
  const specs = [
    { label: "IP rating", value: "15 W, 4 Ω"},
    { label: "Mechanical impact resistance", value: "70 Hz to 19 kHz (−10 dB)" },
    { label: "Housing", value: "max. 102 dB (1 m/3.3 ft)" },
    { label: "Loudspeaker", value: "16 kHz" },
    { label: "Sound pressure level", value: "7 kHz" },
    { label: "Loudspeaker frequency range", value: "180°" },
    { label: "IoIP transmission bandwidth", value: "ONVIF Profile S for unidirectional audio" },
    { label: "SIP transmission bandwidth", value: "internal microphone: electret condenser microphonepolar pattern: omnidirectional" },
    { label: "Loudspeaker transmission angle", value: "integrated class-D amplifier with 10 W" },
    { label: "ONVIF specification", value: "2 inputs for floating contacts(IoIP: detection of 5 input states)" },
    { label: "Microphone", value: "2 relay outputs max. 60 W (DC)/37.5 VA (AC),max. 2 A,max. 60 VDC/30 VACexpected life: min. 5 x 104 (2 A), 105 (1 A)" },
    { label: "Amplifier", value: "spring clamp terminalsIP uplink: shielded RJ45 modular jack" },
    { label: "Inputs", value: "PoE (Power over Ethernet): IEEE 802.3af standardpower consumption: Class 0 (0.44 W to 12.96 W)" },
    { label: "Output", value: "min Cat 5" },
    { label: "Connections", value: "EN 55032 Class A, EN 55024EN 60950-1, EN 62368-1 Clause 8FCC Part 15 Class A, ICES-003 Class A" },
    { label: "Power supply", value: "IPv4, UDP, DHCP, RTP, RTCP, SNMPv2c, SNTPv4" },
    { label: "Cabling", value: "IPv6, IPv4, TCP, UDP, HTTP (RFC 2617, RFC 3310),RTP (RFC 3550), TLS, SRTP, RTCP, DHCP, STUN,TFTP, SDP (RFC 2327), SIP (RFC 3261), SNMPv2,URI (RFC 2396), DTMF Decoding (RFC 2876,RFC 2833), SIP User Agent (UDP RFC 3261),SIP Refer Method (RFC 3515)" },
    { label: "Approvals and compliances", value: "G.711 a-Law, G.711 μ-Law, G.722" },
    { label: "Protocols (IoIP)", value: "10/100 MBit/s (Full/Half Duplex) Auto MDIX" },

    { label: "Audio codecs (SIP)", value: "G.711 a-Law, G.711 μ-Law, G.722" },
    { label: "Data rate", value: "10/100 MBit/s (Full/Half Duplex) Auto MDIX" },
    { label: "Operating temperature range", value: "−40 °C to +70 °C (−40 °F to +158 °F)" },
    { label: "Storage temperature range", value: "	−40 °C to +70 °C (−40 °F to +158 °F)" },
    { label: "Relative humidity", value: "up to 90%, non-condensing" },
    { label: "Colour", value: "white (RAL 9010)" },
    { label: "Dimensions (Ø x D):", value: "145 x 210 mm (5.71 x 8.27 in)" },
    { label: "Weight incl. package:", value: "approx. 1,850 g (4.08 lbs)" },

  ];

  const productFeatures = [
    "Loudspeaker with built-in Intercom module, individually addressable and configurable",
    "Microphone for duplex and call-back functionality",
    "OpenDuplex® and IVC for natural, hands-free communication at high volume levels",
    "Continuous line and function self-checking",
    "Easy adding of new functions via software update",
    "Different designs for indoor, outdoor and industrial applications",
    "No need for central amplifiers – ideal for small-sized and remote PA zones."
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          AFLS 10H PW: IP Projector Speaker
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
              IP projector loudspeaker, designed specifically for Public Address in buildings and halls.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
                 The IP projector loudspeaker AFLS 10H PW is designed specifically to provide reliable voice signal transmission under rough indoor conditions (e.g. car parks, exhibition halls and event halls). Thanks to the built-in microphone and the IVC feature (Intelligent Volume Control), it is possible to adjust the volume automatically to the ambient noise – even during playback.
              </p>

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
              <div className="overflow-x-auto border border-gray-500">
                <table className="w-full text-left text-xs border-collapse border border-black">
                 
                  <tbody>
                    {specs.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                        <td className="p-3 border-b border-r border-black text-black text-[17px] font-bold w-1/3">
                          {spec.label}
                        </td>
                        <td className="p-3 border-b border-r border-black text-[16px] text-gray-800">
                          {spec.value}
                        </td>
                        {/* <td className="p-3 border-b border-r border-black text-[17px] text-black">
                          {spec.valu}
                        </td>
                        <td className="p-3 border-b border-r border-black text-[17px] text-black">
                          {spec.vale}
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* <img src="" alt="" /> */}
            
             
            {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
                COMMEND
              </span>
              
              <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
                Audio-Video Intercom & PA-BGM
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
                        <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By COMMEND</h3>
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

export default ProjectorSpeaker;