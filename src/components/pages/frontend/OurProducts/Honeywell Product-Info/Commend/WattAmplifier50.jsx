import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';




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
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            
             
            {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
                COMMEND
              </span>
              
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
                Audio-Video Intercom & PA-BGM
              </span>
            </div>

            {/* SHARE SECTION */}
             <SocialShare title="Check out this product!" />

        </main>

          {/* Sidebar */}
                <aside className="lg:w-1/4 space-y-6"> 
                     <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                        <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By COMMEND</h3>
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

export default WattAmplifier50;