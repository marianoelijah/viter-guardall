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
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          OPENGATE®  Weapons Detection System
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-300 mt-8 p-6 md:p-12 shadow-sm">
        
          
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
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                CEIA
              </span>
              
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                Detection Systems
              </span>
            </div>

              {/* SHARE SECTION */}
               <SocialShare title="Check out this product!" />

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

export default Opengate;