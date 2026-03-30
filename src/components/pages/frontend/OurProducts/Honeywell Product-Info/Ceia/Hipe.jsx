import React from 'react';
import { Share2, Facebook, Linkedin, Mail, Twitter } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const Hipe = () => {
  const specData = [
    {
      category: "Gate Structure",
      details: [
        "State-of-the-art, robust and washable compact elliptical columns ",
        "Protected against aging, weather and wear",
      ]
    },
    {
      category: "Operational Features",
      details: [
        "High discrimination and transit flow rates five or more times greater than other metal detection systems",
        "Quick reset time as short as 0.2 seconds for high through put rate",
        "Very high detection speed (up to 15 m/sec.)",
        "Built-in operational functional verification (OFV)",
        "One-touch key reading of Inbound, outbound and Security Level Data"
      ]
    },
    {
      category: "Quality",
      details: [
        "Continuous self diagnostic system",
        "Proven reliability",
        "No periodic re-calibration and preventive maintenance required",
        "No scheduled maintenance",
        "Fully digital design"
      ]
    },
    {
      category: "Alarm Signaling",
      details: [
        "Multi-zone display bar for 'height on person' localization",
        "20 vertical localization zones",
        "2 display bars programmable as zone indicators and/or pacing lights",
        "Specific shoe alarm color indication",
        "Green and red metering signals proportional to the mass of the detected target"
      ]
    },
     {
      category: "Type of Signaling",
      details: [
        "Fixed or proportional to the mass in transit – visible from 6m under lighting of 4000lux",
        "20 x 4 distinct zones (20×2 entry side and 20×2 exit side)"
      ]
    },
    {
      category: "Programming",
      details: [
        "Up to 50 built-in Security Programs Remote via Infrared Remote Control Unit, BT or Ethernet 10/100 base T (option) interface",
        "Security level: International Standard (IS) command / Chip card",
        "Local by Control Unit alphanumeric display and keyboard",
        "Programming and chip card access protected by user and super-user passwords"
      ]
    },
    {
      category: "Environmental Data",
      details: [
        "Up to 50 built-in Security Programs Remote via Infrared Remote Control Unit, BT or Ethernet 10/100 base T (option) interface",
        "Security level: International Standard (IS) command / Chip card",
        "Local by Control Unit alphanumeric display and keyboard",
        "Programming and chip card access protected by user and super-user passwords"
      ]
    },
     {
      category: "Installation Data",
      details: [
        "Automatic synchronization between two or more metal detectors with distance of down to 5 cm without the use of external cables",
        "Automatic Installation function (OTS)",
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
          HI-PE Plus: Enhanced Walkthrough Multi-Zone Metal Detector
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-300 mt-8 p-6 md:p-12 shadow-sm">
        
          
          {/* Left Column: Content */}
          <div className="md:w-3/4">
            <p className="mb-6 text-black text-[17px]">
               A walk-through detection system that provides accurate detection of all metals and has an exceptional immunity to external interferences.            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Description:</h2>
              <p className="text-sm leading-relaxed text-black text-[17px]">
               The HI-PE Plus Multi-Zone Metal Detector provides accurate detection of all metals, high level of discrimination of non-threat items, full compliance with the latest Security Standards and exceptional immunity to external interferences.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-sm space-y-1 text-black text-[17px]">
                <li>Accurate Detection of all Metallic Threat Items</li>
                <li>High Discrimination and Throughput</li>
                <li>Exceptional Immunity to external interferences</li>
                <li>Compliant with and Certified to the Strictest Security Standards for weapons detection</li>
                <li>Unmatched Reliability</li>
                <li>Rapid Installation</li>
                <li>Panel Design</li>
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

export default Hipe;