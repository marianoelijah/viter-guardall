import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';




const Wit7 = () => {
  const specs = [
    { label: "System", value: "CPU: Quad-coreFLASH: 4GBSDRAM: 1 GBS.O. Android 10"},
    { label: "Screen", value: "7- and 10-inch formatCapacitive touch screenFormat: 16:9Resolution: 1024x600Brightness: 7” 200cd/m2; 10” 220cd/m2Contrast: 7” 400/1; 10” 450/1View Angle: 7” 160º Horizontal, 130º vertical; 10” 120º Horizontal, 110º Vertical" },
    { label: "Audio/Video Features", value: "G.711 audio codecH.264 video codecRTSP compatible for CCTV IP camerasAudio level adjustable on conversation and muteHands-free operationPrivate communicationSelectable call melodies based on call origin" },
    { label: "Power Consumption", value: "On standby: 200 mA (7”) / 210 mA (10”)• Conversation: 500 mA (7”) / 600 mA (10”)" },
    { label: "Working voltage", value: "PoE12 Vdc" },
    { label: "Connectivity", value: "1 x Ethernet RJ-45 (WIT 7”)2 x Ethernet RJ-45 (WIT 10”) for building and apartment network isolation.Doorbell input (1 alarm zone input)Panic button input (1 alarm zone input)Built in web server for configuration and remote management" },
    { label: "Working Environment", value: "Temperature: -10oC + 55oCHumidity: 10 – 90% (non-condensing)IP: 30; IK: 04" },
    { label: "Technology", value: "MEET" },
    { label: "Measures of the product", value: "130 X 210 X 20 mm" },
    { label: "Weight", value: "0.663 kg" },
    { label: "Measures of the packed product", value: "6,8x31x21,5 cm" },
    { label: "EAN 13", value: "88424299147239" },
  ];

  const productFeatures = [
    "Capacitive Touch Screen (7” / 10”)",
    "Hands Free Audio Communication",
    "High-definition color TFT",
    "Different ringtones depending on call source",
    "2 Different color options (White and black)",
    "Network firmware upgrade",
    "Based on Android 10",
    "Available in 11 languages (English, Spanish, German,",
    "Polish, French, Chinese, Russian, Turkish, Hebrew,",
    "Portuguese & Vietnamese)",
    "Apartment internal intercom",
    "Apartment to apartment external intercom",
    "Device identification by means of TAGS",
    "Doorbell connection with IP camera visualization",
    "IP CCTV visualization (up to 8)",
    "Aux IP CCTV camera visualization and aux relay operation during call (up to 4 relays from Module Ref. 1491 connected to a MILO DIGITAL, KIN or MARINE panel).",
    "Relay activation (up to 8 using relay module)",
    "Home Automation Ready through Apps (in 7” and 10”)",
    "Automatic and Manual Picture Capture",
    "Integrated 7 zones alarm + tamper",
    "SIP compatible",
    "Lift control with feedback"
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
           WIT 7”  MONITOR POE BLACK MEET
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
             A functional video door entry solution with Power over Ethernet (POE). 
             It has a sleek black design, a 7-inch touch display, and clear video communication. 
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
                 WIT is a monitor with a 7” or 10” capacitive screen. WIT’s graphical interface creates 
                 a truly intuitive user experience thanks to its focus on residential intercom.
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
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
                FERMAX
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

export default Wit7;