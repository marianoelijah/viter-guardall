import React from 'react';
import { Share2, Facebook, Linkedin, Mail, Twitter } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';

const Msd = () => {
  const specData = [
    {
      category: "Controls and indicators",
      details: [
        "ON/OFF push-button4-key keypad, for programming and status readoutProgramming of operational parameters and downloading of data logger by smartphone or portable PC",
        "SECURITYPassword protected programming at User and Supervisor level",
        "MULTI-COLOR STATUS AND ALARM WARNING LIGHTGREEN LIGHTNormal operation, no alarm",
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
        "AC/DC external power adapter: 100 … 240 V~ , 47…63Hz, 40W",
        "Embedded rechargeable battery16h typical / 17h max. of continuous operation with 3 h battery charge24h typical / 26h max. of continuous operation with 4.5 h battery charge",
      ]
    },
    {
      category: "Detector environmental conditions",
      details: [
        "Working temperature: -10°C to +65°CStorage temperature: -37°C to +70°CRelative humidity: 0 to 95%, non-condensing",
      ]
    },
    {
      category: "Weight",
      details: [
        "MSD™: 9,5 kgAC/DC adapter: 0,7 KgBT wireless communication kit: 0,2 Kg (includes battery charger)Carrying case: 0,6 KgInstallation kit: 0,3 Kg",
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
        "Dimensions (WxDxH) 400 mm x 2000 mm x 480 mmWeight 24 Kg",
      ]
    },
     {
      category: "Degree of protection",
      details: [
        "Fully weather proof for outdoor use (IP65)",
      ]
    },
     {
      category: "Available accessories",
      details: [
        "EVO function activation; code 88918BT wireless audio function activation. Includes a headset with AC/DC charger; code 88919MSD™-RRU Remote Relay Unit; code MSD™-RRUApp CEIA FMD: the application allows monitoring of the device, adjustment of the settings and downloading of data logger. Available on Google Play Store. REQUIREMENTS: Android 7.0 or later, BT interface availableSolid rubber feet; code 88917MSD™ Demo Kit – Kit of demonstration objects, consisting of: BT wireless headset • Hair pins • Hospital pager • Magnet • Medical scissors • Micro cell phone • Micro smartphone • Needle • Razor blades • Transceiver • Voice recorder; code 89052MSD™ Maintenance Kit: Set of main spare parts and necessary tools; code 89051MSD™ Training Kit: Set of innocuous items tampered creating a concealed space for hiding small size threat objects; code 89054MSD EVO™ ConnectingCable Length 2.7 m; code 95376Length custom, up to 25 m code 95494Standing mat: self-adhesive mat with indication of position and rotation; code 94590",
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
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          MSD Highly Portable Cellphone, Ferrous Weapon, and Contraband Detector
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-300 mt-8 p-6 md:p-12 shadow-sm">
        
          
          {/* Left Column: Content */}
          <div className="md:w-3/4">
            <p className="mb-6 text-black text-[17px]">
              An easy-to-carry device designed to detect all cellphones and ferrous contraband, particularly in prisons.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Description:</h2>
              <p className="text-sm leading-relaxed text-black text-[17px]">
               The illegal use of cell phones is a growing and dangerous problem in correctional institutions worldwide. These devices are a significant threat to prison security and circumvent the monitoring processes in prisons, while allowing inmates to commit new crimes both inside and outside the facility. The MSD™ was specifically designed to detect all cell phones and ferrous contraband concealed on the person or in body cavities (including key fob cell phones, smart phones, radio transceivers, etc.) quickly and easily. The one-piece design allows the MSD™ to be easily transported and operational in 10 seconds.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-sm space-y-1 text-black text-[17px]">
                <li>Detection of all cell phones and ferrous contraband concealed on the person or in body cavities (including keyfob cellphones, smart phones, radio transceivers, etc.)</li>
                <li>Constant Sensitivity across the detection area in pass-through operations</li>
                <li>Multi-Zone targeting indication identifies location of contraband on the body</li>
                <li>Covert operation through use of BT wireless headset</li>
                <li>Fully weather proof for outdoor use (IP65 certified)</li>
                <li>26 hours continuous use on embedded battery operation</li>
                <li>Unmatched detection in all environments without adjustment</li>
                <li>Extremely durable design</li>
                <li>No assembly required: set-up in less than 10 seconds</li>
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
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                CEIA
              </span>
              
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                Detection Systems
              </span>
            </div>

              {/* SHARE SECTION */}
              <div className="mt-8">
              <p className="font-medium text-black mb-3">Share:</p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/facebook.png" alt="Facebook" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/gmail.png" alt="Gmail" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/telegram.png" alt="Telegram" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/viber.png" alt="Viber" className="w-full h-full object-contain p-1" />
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

export default Msd;