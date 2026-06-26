import React from 'react';
import { Share2, Facebook, Linkedin, Mail, Twitter } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';
import React from 'react';

const Msdi = () => {
  const specData = [
    {
      category: "Controls and indicators",
      details: [
        "Programming of operational parameters and downloading of data logger by smartphone or portable PC",
        "SECURITY: Password protected programming at User and Supervisor level",
        "MULTI-COLOR STATUS AND ALARM WARNING LIGHTGREEN LIGHT: Normal operation, no alarm",
        "YELLOW LIGHT: Detection of ferromagnetic object below alarm threshold",
        "RED LIGHT: Detection of ferromagnetic object above alarm threshold:",
        "BLINKING LIGHT: diagnostics alarm",
        "BLUE LIGHT: Connecting BT device in progress",
        "ALARM SOUNDERAlarm indication for target over the alarm threshold: Fixed tone; Tone proportional to signal intensity; Single pulse for pinpointing targetAlarm tone can be selected, continuous and intermittentSelf-diagnostics signal: intermittent tome",
        "BT HEADSET (ACCESSORY): Copies all acoustic indications, with the addition of checking BT connection",
      ]
    },
    {
      category: "Power Supply",
      details: [
        "Via Ethernet port, PoE Class 0 compliant to IEEE 802.3af/IEEE 802.3at Type 1Via connecting cable to external 24Vdc supplyVia external AC/DC power adapter [ACCESSORY]",
      ]
    },
    {
      category: "Input/ Output",
      details: [
        "LAN port. Ethernet port, PoE Class 0 compliant to IEEE 802.3af/IEEE 802.3at Type 1",
        "IN/OUT port. General purpose connector. Type: 8-pole M12 male. It supports the following connections:Power supply input. Voltage: 24Vdc ±10%, 0.25A maxRS-232 serial communication linesRelay output, activated in case of alarm or diagnosis alert. Selectable in normally open or normally closed operation. Rating: 0.4A max, 30Vdc.Inhibition input. Galvanically isolated 2-pole connection. Rating: + 5 ÷ 12 Vdc.GREEN: OK, ReadyRED: Alarm, Self-diagnosisBLUE: Wireless connection in progressYELLOW: Battery level indication Acoustic Internal buzzer",
      ]
    },
    {
      category: "Environmental Conditions",
      details: [
        "Working temperature: -10°C to +65°CStorage temperature: -37°C to +70°CRelative humidity: 0 to 95%, non-condensing",
      ]
    },
     {
      category: "Detector Weight",
      details: [
        "3,5 kg",
      ]
    },
    {
      category: "Dimensions",
      details: [
        "90 mm x 73 mm x 1820 mm (WxDxH)",
      ]
    },
    {
      category: "Shipping information",
      details: [
        "Dimensions (WxDxH): 200 mm x 160 mm x 2170 mmWeight 10 Kg",
      ]
    },
     {
      category: "Degree of protection",
      details: [
        "IP55",
      ]
    },
     {
      category: "Available accessories",
      details: [
        "BT audio function activation, headset and charger – code 88919External AC/DC adapter – code 91553App CEIA FMD: the application allows monitoring of the device, adjustment of the settings and downloading of data logger. Available on Google Play Store. REQUIREMENTS: Android 7.0 or later, BT interface availableService cable for RS-232 connection – code 91556",
      ]
    },
     {
      category: "Certification and compliance",
      details: [
        "Safe for use for pacemakers and other medical implantsCompliant with the applicable electromagnetic Standards on Human Exposure and pacemaker safetyCompliant with and certified to the applicable International Standards for electrical safety and EMC",
      ]
    }
  ];

  return (
    <>
    <Header />

    <div className="bg-gray-200 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          MSDi High-Performance Ferromagnetic Weapons Detector
        </h1>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 items-start">
      {/* Main Content Container */}
      <main className="w-full lg:w-2/3 bg-gray-300 p-6 md:p-10 shadow-sm rounded-lg">
        
          
          {/* Left Column: Content */}
          <div className="md:w-3/4">
            <p className="mb-6 text-black text-[17px]">
              This device can be easily concealed to covertly detect weapons.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Description:</h2>
              <p className="text-sm leading-relaxed text-black text-[17px]">
               MSDi has been specifically designed for easy integration of Ferromagnetic Weapons Detection in Covert Access Control. The MSDi’s very small footprint allows Ferromagnetic Detection Technology to be concealed inside ornamental structures and combines the features of MSD™ and MSD EVO™in a single and compact device.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-sm space-y-1 text-black text-[17px]">
                <li>IDEAL for COVERT ACCESS CONTROL</li>
                <li>Very small footprint</li>
                <li>Easily concealed inside ornamental structures</li>
                <li>HIGH and UNIFORM SENSITIVITY to FERROMAGNETIC ITEMS</li>
                <li>Accurate localization with MULTI-ZONE ACOUSTIC and OPTICAL ALARM SIGNALING</li>
                <li>EXTREMELY DURABLE DESIGN including stainless steel and high impact reinforced plastics</li>
                <li>UP TO 70,000 EVENTS CAN BE RECORDED locally (FIFO LOGGER) with traceability of the alarms, programming modifications and diagnostics</li>
                <li>PROGRAMMING of operational parameters and DOWNLOADING OF DATA LOGGER by smartphone or portable PC</li>
                <li>Powered through PoE Ethernet or with 24Vdc external adapter</li>
                <li>Large number of CEIA MSD ferromagnetic detectors installed</li>
              </ul>
            </section>
        </div>

            {/* Technical Specifications Table */}
        <div className='bg-gray-300 mt-5 px-10 py-5'>
            <section>
              <h2 className="font-bold text-xl text-black mb-4 pt-5">Technical Specifications:</h2>
              <div className="border border-black">
                {specData.map((spec, index) => (
                  <div key={index} className="flex border-b border-black last:border-0">
                    <div className="w-1/2 p-3 bg-gray-200 font-bold text-[17px] text-black border-r border-black">
                      {spec.category}
                    </div>
                    <div className="w-2/3 p-3 text-[17px] text-black">
                      <ul className="space-y-2">
                        {spec.details.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

              {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#3ff5f31] text-white px-2 py-1 rounded">
                CEIA
              </span>
              
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                Detection Systems
              </span>
            </div>

              {/* SHARE SECTION */}
              <SocialShare title="Check out this product!" />

        </div>
        
      </main>

              {/* Sidebar */}
                    <aside className="w-full lg:w-1/3 space-y-6"> 
                           <div className="bg-gray-300 p-5 border border-gray-500 mb-6">
                              <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1 p">
                                More By CEIA
                                </h3>
                             <ul className="space-y-4 text-gray-800 font-medium">
                                  <NavLink to="/our-products/onity/directkey-with-serene" className='block'>
                                    <li className='cursor-pointer hover:text-[#ff5f31] transition-colors break-words'>Onity DirectKey with Serene</li>
                                  </NavLink>
                                  <NavLink to="/our-products/detnov/addressable-sounder" className='block'>
                                    <li className='cursor-pointer hover:text-[#ff5f31] transition-colors break-words'>MAD-401 and MAD-402 Series Modules</li>
                                  </NavLink>
                                  <NavLink to="/our-products/acti/bay-raid-backmount-standalone" className='block'>
                                    <li className='cursor-pointer hover:text-[#ff5f31] transition-colors break-words'>INR 415 256-Channel RAID Standalone</li>
                                  </NavLink>
                                  <NavLink to="/our-products/acti/channel-tower-strandalone" className='block'>
                                    <li className='cursor-pointer hover:text-[#ff5f31] transition-colors break-words'>GNR 340 100-Channel Tower NVR</li>
                                  </NavLink>
                                  <NavLink to="/our-products/acti/bay-raid-backmount-standalone" className='block'>
                                    <li className='cursor-pointer hover:text-[#ff5f31] transition-colors break-words'>INR 415 256-Channel RAID Standalone</li>
                                  </NavLink>
                                  <NavLink to="/our-products/acti/channel-tower-strandalone" className='block'>
                                    <li className='cursor-pointer hover:text-[#ff5f31] transition-colors break-words'>GNR 340 100-Channel Tower NVR</li>
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

export default Msdi;