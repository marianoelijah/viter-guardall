import React from 'react';
import { Share2, Facebook, Linkedin, Mail, Twitter } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';


const Emis = () => {
  const specData = [
    {
      category: "Key features",
      details: [
        "High inspection speedNo alarm on metal staples, paper-clips and metal binding spiralsDigital programming with high-resolution OLED graphic displayVisual and audible alarm signalingBuilt-in Self-Test SystemPermanent memory storage of operating parameters without back-up batteriesIndependent operation, with mains power supply or batteries (opt.)Specific Settings available for Prison parcels inspection (Dept. of Justice requirements)Compliant with NIJ-0602.02 Dept. of Justice Detection requirements",
      ]
    },
    {
      category: "Structures",
      details: [
        "Transit opening: 450 mm x 75 mmDegree of protection: IP40",
      ]
    },
    {
      category: "Dimensions",
      details: [
        "450 mm x 565 mm x 250 mm (WxDxH)",
      ]
    },
    {
      category: "Weight",
      details: [
        "16kg ",
      ]
    },
    {
      category: "Power Supply",
      details: [
        "Voltage: 100-277 V~±10%, 47-63Hz with external AC/DC adapter Current: 1.3 A max Battery operation (optional): 6 x 1.2V NiMH size DBattery life: 12 hoursBattery-charger incorporated: recharging time 6 h",
      ]
    },
    {
      category: "Programming",
      details: [
        "Type Local: via integrated keypadRemote: via Bluetooth, RS232Data Logger Memory capacity: 10.000 events",
      ]
    },
     {
      category: "Signaling",
      details: [
        "Audible: Internal buzzer",
        "Visual: High-contrast OLED graphic display with bar-graph indication/zone location (pinpointing)",
        "LED indicators on the control panel:WHITE: Power supplyGREEN: OKRED: Alarm, Auto DiagnosisBLUE: Alarm, detection of radioactive substances",
      ]
    },
     {
      category: "Security/Safety",
      details: [
        "Access to programming protected by passwordGalvanic isolation: operates on Low DC voltage",
      ]
    },
     {
      category: "Communication ",
      details: [
        "Incorporated Bluetooth (FCC ID: QOQWT12 – IC:5123A-BGTWT12A) interface, RS232",
      ]
    },
     {
      category: "Environmental Data",
      details: [
        "TemperatureOperating: -10 to +50 °CStorage:  -25 to +60 °CRelative humidity 5 to 90 %, without condensation",
      ]
    },
     {
      category: "Conformity",
      details: [
        "SAFETY:EN61010-1ACGIH, 2014 Threshold Limit Value (TLV)IEEE C95.1-2005EC-Rec. 1999/519/ECEN 50364:2010",
        "EMC:EN61000-6-1EN61000-6-3 RED:EN300330: Short Range Devices (SRD)",
      ]
    },
  ];
  

  return (
    <>
    <Header />

    <div className="bg-gray-100 dark:bg-[#121214] min-h-screen font-sans text-slate-800 dark:text-gray-200 transition-colors duration-300">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-4 text-center transition-colors duration-300">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          EMIS-MAIL Mail Scanner
        </h1>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 items-start">
      {/* Main Content Container */}
      <main className="w-full lg:w-2/3 bg-gray-200 p-8 rounded-lg shadow-sm dark:bg-[#1e1e22] border border-gray-400 dark:border-gray-800 transition-colors duration-300">
        
          
          {/* Left Column: Content */}
          <div>
            <p className="text-[15px] text-gray-800 dark:text-gray-300 mb-4 border-l-4 border-[#8ba4cc] dark:border-blue-500 font-medium pl-3">
             Mail scanner for the detection of letter bombs and IEDs in small parcels.
            </p>

            <section className="mb-8">
              <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
                Description:
              </h2>
              <p className="text-[15px] text-gray-800 dark:text-gray-300 mb-4 border-l-4 border-[#8ba4cc] dark:border-blue-500 font-medium pl-3">
               The EMIS®-MAIL is designed to detect a wide variety of metal threat items including detonators, batteries, trigger circuits and other metal components of parcel bombs without false alarms for non-threat items such as metal staples, paper clips and metal binding spirals.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
                Product Features:
              </h2>
              <ul className="list-disc ml-5 text-sm space-y-1 text-gray-800 dark:text-gray-300">
                <li>Automatic inspection of parcels and letters up to 45 cm in width and 7.5 cm thickness</li>
                <li>Detection of detonators, batteries, trigger circuits and other metallic components of letter bombs</li>
                <li>No alarm on metal staples, paper-clips and metal binding spirals</li>
                <li>Ergonomic, compact design</li>
                <li>Confirmation of signal (OK/ALARM) for each package inspected</li>
                <li>Operates on mains power supply and with NiMH rechargeable batteries (opt.)</li>
                <li>No calibration or periodic maintenance required</li>
                <li>Integrated battery charger</li>
                <li>Optional embedded radioactive material detector</li>
              </ul>
            </section>
        </div>

            {/* Technical Specifications Table */}
        <div>
            <section>
              <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
                Technical Specifications:
              </h2>
              <div className="border border-black">
                {specData.map((spec, index) => (
                  <div key={index} className="flex border-b border-black last:border-0">
                    <div className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 bg-gray-200 dark:bg-gray-800/80 text-[15px] text-black dark:text-gray-200">
                      {spec.category}
                    </div>
                    <div className="w-2/3 p-3 text-[15px] text-black border-gray-500 dark:border-gray-700 font-bold bg-gray-200 dark:bg-gray-800/80  dark:text-gray-200">
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
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
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
                           <div className="bg-gray-300 dark:bg-[#1e1e22] p-5 rounded-xl shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
                              <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">
                                More By CEIA
                                </h3>
                              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
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

export default Emis;