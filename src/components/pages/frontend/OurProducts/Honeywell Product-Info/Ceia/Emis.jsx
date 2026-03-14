import React from 'react';
import { Share2, Facebook, Linkedin, Mail, Twitter } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';

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

    <div className="bg-gray-200 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          EMIS-MAIL Mail Scanner
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-300 mt-8 p-6 md:p-12 shadow-sm">
        
          
          {/* Left Column: Content */}
          <div className="md:w-3/4">
            <p className="mb-6 text-black text-[17px]">
             Mail scanner for the detection of letter bombs and IEDs in small parcels.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Description:</h2>
              <p className="text-sm leading-relaxed text-black text-[17px]">
               The EMIS®-MAIL is designed to detect a wide variety of metal threat items including detonators, batteries, trigger circuits and other metal components of parcel bombs without false alarms for non-threat items such as metal staples, paper clips and metal binding spirals.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-sm space-y-1 text-black text-[17px]">
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
              <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
                CEIA
              </span>
              
              <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
                Detection Systems
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

        </div>
        
      </main>

              {/* Sidebar */}
                    <aside className="lg:w-1/2 space-y-6 mt-7"> 
                           <div className="bg-gray-300 p-5 border border-gray-500 mb-6">
                              <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1 p">
                                More By CEIA
                                </h3>
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

export default Emis;