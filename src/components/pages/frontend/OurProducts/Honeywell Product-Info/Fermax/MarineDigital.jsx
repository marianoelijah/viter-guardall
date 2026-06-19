import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';


const MarineDigital = () => {
  const specs = [
    { label: "System", value: "CPU: Quad-core Cortex™-A7 1.5GHz GPU: Mali400MP2 FLASH: 4GB SDRAM: 1GB DDR3L"},
    { label: "Screen", value: "• 4.3” Color TFT• Resolution 480 x 272 pixel• View angle: 110º H, 90º V• Contrast: 400/1• Brightness: 200cd/m2" },
    { label: "Audio Features", value: "• G.711 codec• Audio OLR> 15dB" },
    { label: "Camera", value: "• 1/3” CMOS Color• Horizontal 128º, Vertical 70º• 1.3 Mega Pixels• Minimum Illumination 0.5 LUX. Automaticwhite led activation• AWB" },
    { label: "Built-in MIFARE Classic reader", value: "4-bytes cards only (see ref. 52740/52750)" },
    { label: "Power Consumption", value: "• On standby: 250 mA• Working: 500 mA• Heater enabled: additional 170mA" },
    { label: "Working voltage", value: "• PoE• 12 Vdc" },
    { label: "Connectivity", value: "• Ethernet RJ-45 Connector• RS485 connection port for lift control andaux relays module.• Secondary access control readerconnection (Wiegand 26)• Built in web server for configuration andremote management" },
    { label: "Working Environment", value: "• Temperature: -25ºC to +70ºC• Humidity: 10 – 90% (non-condensing)• IP 54• IK 09" },
    { label: "Technology", value: "MEET" },
    { label: "Measures of the product", value: "410 x 159 x 49 mm" },
    { label: "Weight", value: "2.5 kg" },
    { label: "Measures of the packed product", value: "46,8x10x21 cm" },
    { label: "EAN 13", value: "8424299014555" },
  ];

  const productFeatures = [
    "3mm 316L Stainless steel profile",
    "Backlit metal keys and braille engraving",
    "IP54 weatherproof and IK09 resistance.",
    "Hands Free Audio Communication",
    "1.3 Mpx High-Definition Colour Camera.",
    "4.3” Colour TFT Screen",
    "Electronic Directory with 1 customised image.",
    "Face recognition (up 6000 users).",
    "RTSP Camera Video Streaming",
    "Wiegand input/output for third party integration",
    "Access Control Integrated for 100.000 Cards",
    "Fire alarm with door unblocking and message toguard unit and MMS.",
    "Door forced and door left open alarms.",
    "Voice Synthesizer",
    "Available in 12 languages",
    "PoE Powered",
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
         MARINE DIGITAL VIDEO PANEL MEET
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
               This vandal-proof door and video entry system has a stainless steel finish to withstand harsh weather conditions.  
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
                 The MARINE MEET panel is FERMAX’s vandal-proof door entry and video door entry panel. 
                 Made of 316L stainless steel, it is 3mm thick. It is a very resistant plate due to 
                 its high quality, both in materials and in production and assembly processes. 
                 Its compact and sealed design guarantees protection against external agents IP54 and 
                 a degree of resistance against impacts of IK09.
              </p>

               <h2 className="font-bold text-xl text-black mb-2">Product Features / Specifications:</h2>
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
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                FERMAX
              </span>
              
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                Audio-Video Intercom & PA-BGM
              </span>
            </div>

            {/* SHARE SECTION */}
             <SocialShare title="Check out this product!" />

        </main>

          {/* Sidebar */}
              <aside className="lg:w-1/4 space-y-6"> 
                     <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                        <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By FERMAX</h3>
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

export default MarineDigital;