import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';


const WattAmplifier50 = () => {
  const specs = [
    { label: "IP rating", value: "IP20 (acc. EN 60529)"}, 
    { label: "Output power", value: "50 WRMS" },
    { label: "Loudspeaker output", value: "low-resistance (min. impedance: 4 Ω) or 70 V/100 V" },
    { label: "Microphone input", value: "nominal level: 14 mV at 3.3 kΩmicrophone supply voltage: 2.5 V" },
    { label: "Line output", value: "nominal level: 0 dBu (0.775 V)" },
    { label: "Inputs", value: "2 inputs for floating contacts(detection of 5 input states)" },
    { label: "Outputs", value: "relay output (changeover contact):max. 60 W (DC)/ 37.5 VA (AC),max. 2 A,max. 60 VDC/ 30 VAC effexpected life: min. 5 x 104 (2 A), 105 (1 A)" },
    { label: "Control input", value: "0–10 V (for remote volume control)" },
    { label: "Protocols (lolP)", value: "IoIP protocol based on UDP/IP" },
    { label: "Protocols (SIP)", value: "IPv6,IPv4, TCP, UDP, HTTP (RFC 2617, RFC 3310),RTP (RFC 3550), RTCP, DHCP, SDP (RFC 2327),SIP (RFC 3261), SNMPv2, STUN, TFTP, URI (RFC 2396),DTMF Decoding (RFC 2876, RFC 2833),SIP User Agent (UDP RFC 3261),SIP Refer Method (RFC 3515)" },
    { label: "Codecs (SIP)", value: " G.711 a-Law, G.711 μ-Law, G.722" },
    { label: "ONVIF specification", value: "ONVIF Profile S for unidirectional audio" },
    { label: "IoIP audio bandwidth:", value: "16 kHz" },
    { label: "SIP audio bandwidth:", value: "7 kHz" },
    { label: "Total harmonic distortion (THD+N):", value: "4 Ω, 8 Ω, 70 V/100 V: < 0.2%" },
    { label: "Operating temperature range:", value: "−25 °C to +55 °C (−13 °F to +131 °F)" },
    { label: "Storage temperature range:", value: "−25 °C to +70 °C (−13 °F to +158 °F)" },
    { label: "Relative humidity:", value: "up to 95%, not condensing" },
    { label: "Connections:", value: "2 RJ45 modular jacks with LEDs for connection tothe Intercom/SIP server (IP Uplink, IP Downlink)pluggable screw terminals (0.08 mm2– 1.5 mm2):power supply, outputs, microphone 1), inputs,line output, 70 V/100 V loudspeaker outputpluggable screw terminals (0.08 mm2– 2.5 mm2):low-resistance loudspeaker outputexpansion plug for e.g. EB2E2A" },
    { label: "Power supply:", value: "20 –26 VDC(max. 2.6 A at 4 Ω/50 W or max. 1.3 A at 8 Ω/25 W,max. 3 A at the 70 V/100 V loudspeaker output)or PoE" },
    { label: "PoE (Power over Ethernet) 3):", value: "IEEE 802.3af/Class 0, IEEE 802.3at/Type 1" },
    { label: "Cabling:", value: "min. Cat. 5" },
    { label: "Dimensions (W x H x D)", value: "201 x 44 x 255 mm (7.91 x 1.73 x 10.04 in)" },
    { label: "Weight incl. package", value: "approx. 1,600 g (3.53 lbs)" }
  ];

  const productFeatures = [
    "50 watts total output power",
    "Supports IoIP and SIP",
    "70 V/100 V audio output with loudspeaker line monitoring",
    "Class-D amplifier, optimized for high efficiency at low operating temperatures",
    "Short-circuit- and overload-proof",
    "Installation in a 19” rack or on-site",
    "Suitable for decentralized on-site use",
    "Rugged polycarbonate housing",
    "Line monitoring between amplifier and Intercom Server",
    "Suitable for decentralized on-site use",
    "Can be used as an interface to PA systems",
    "Low impedance audio output; min. impedance: 4 Ω"
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
            AF 50 – 50 Watt Amplifier
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
              A 50 Watt amplifier with polycarbonate housing.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
               The AF 50H provides a particularly high output range and various loudspeaker outputs. 
               The amplifier is universally suitable for any size of application up to complex public 
               address and Intercom solutions. It is specifically optimized for installation either 
               in a 19” rack or on site. This helps to save on cabling and any costs incurred.
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

export default WattAmplifier50;