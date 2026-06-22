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

    <div className="bg-gray-200 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          EMIS-MAIL Mail Scanner
        </h1>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 items-start">
      {/* Main Content Container */}
      <main className="w-full lg:w-2/3 bg-gray-300 p-6 md:p-10 shadow-sm rounded-lg">
        
          
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
                                       className="relative min-h-[240px] overflow-hidden rounded-xl p-8 text-white shadow-md bg-cover bg-center bg-blend-multiply bg-blue-900/85"
                                       style={{ backgroundImage: "url('/dist/assets/image/Our Products/quickalert.jpg')" }}
                                     >
                                       <div className="relative z-10">
                                         <h3 className="mb-4 text-2xl font-bold leading-tight tracking-wide">
                                           Secure Your Peace Of Mind Today
                                         </h3>
                                         
                                         <p className="mb-6 text-sm text-gray-200 font-medium leading-relaxed">
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