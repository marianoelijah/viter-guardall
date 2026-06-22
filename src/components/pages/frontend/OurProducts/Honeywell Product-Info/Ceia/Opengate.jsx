import React from 'react';
import { Share2, Facebook, Linkedin, Mail, Twitter } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const Opengate = () => {
  const specData = [
    {
      category: "General Features",
      details: [
        "Detection of assault rifles, guns and improvised explosive devices (IEDs)Extremely high throughputQuick setup, immediate useNo external mechanical or electrical connectionsFields of application: all places open to the public characterized by large crowds where it is necessary to carry out an inspection of the individuals without undressingOperational transit width: 680 mm – 1000 mm",
      ]
    },
    {
      category: "Power Supply",
      details: [
        "Batteries: 18V – 12Ah lithium ion Operating time (4 batteries):  Up to 14 hrs (with operational battery management)",
        "Dual Bay simultaneous fast battery charger: Power supply voltage: 220 – 240 VCharging time (2 batteries): 130 minDimensions: 275 mm x 184 mm x 92 mmWeight: 1.6 kg Standard Wall Outlet:100…277V~ ±10%, 47…63Hz,40 VA typical consumption",
      ]
    },
    {
      category: "Alarm Signal",
      details: [
        "Optical Indicator: lights displayed at the top of the column",
        "GREEN: OK, ReadyRED: Alarm, Self-diagnosisBLUE: Wireless connection in progressYELLOW: Battery level indication Acoustic Internal buzzer",
      ]
    },
    {
      category: "Programming",
      details: [
        "Available through the CEIA OPENGATE FREE App – iOS or Android",
      ]
    },
     {
      category: "Weight",
      details: [
        "Including batteries 15.2 kg",
        "Without batteries 12 kgSecondary column",
        "Including batteries 13.7 kg- Without batteries 10.5 kg"
      ]
    },
    {
      category: "Certificates and Compliance",
      details: [
        "Compliant with applicable regulations on human exposure to electromagnetic fields and safety for pacemaker wearers",
        "Compliant with EU regulations and international standards for Electrical Safety and Electromagnetic",
        "Compatibility (EMC) Harmless to magnetic media",
      ]
    },
    {
      category: "Ambient Conditions",
      details: [
        "Operating temperatureOPENGATE: from -18°C to +50°CBattery charger and battery being charged: from + 5°C to + 40°C Storage temperature: from -37°C to +50°C",
        "Relative humidity:  0 to 95%, without condensation",
        "Altitude: up to 3,000 m",
        "Installation category: II (IEC61010-1)Pollution rating:  2 (IEC61010-1)Maximum intensity of emitted magnetic field:  < 40 db uA/m @ 10 m"
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
          OPENGATE®  Weapons Detection System
        </h1>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 items-start">
      {/* Main Content Container */}
      <main className="w-full lg:w-2/3 bg-gray-300 p-6 md:p-10 shadow-sm rounded-lg">
        
          
          {/* Left Column: Content */}
          <div className="md:w-3/4">
            <p className="mb-6 text-black text-[17px]">
               An active walk-through detection system designed for faster screening of backpacks, purses, and bags.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Description:</h2>
              <p className="text-sm leading-relaxed text-black text-[17px]">
               OPENGATE is the first and only fully open, active walk-through detection system, composed of two free standing pillars. Contrary to Metal Detector Gates, OPENGATE does not require any mechanical or electrical connection between the two pillars that define the passageway. It is  the most portable, elegant, easy to position and ready to use weapons detection system. No installation, adjustment or assembly procedures.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-sm space-y-1 text-black text-[17px]">
                <li>MULTI-CALIBER WEAPONS DETECTION</li>
                <li>HIGHEST THROUGHPUT with near zero nuisance alarms</li>
                <li>NO DIVESTING REQUIRED with backpacks, purses and bags</li>
                <li>HIGHLY PORTABLE – Weighs only 11 kg</li>
                <li>QUICK TO SETUP AND INSTALL – Requires less than 1 minute. Simply set up, switch on and go. No technician requiredy</li>
                <li>VERSATILE USE – Indoor or outdoor use, with no overhead cover required</li>
                <li>EASY TO OPERATE – Clear GO/NO GO signaling and operation requires limited training</li>
                <li>STANDARDS-BASED PERFORMANCE – Meets recognized international and federal security standards</li>
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

export default Opengate;