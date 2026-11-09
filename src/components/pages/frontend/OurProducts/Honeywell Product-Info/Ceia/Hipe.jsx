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

    <div className="bg-gray-100 dark:bg-[#121214] min-h-screen font-sans text-slate-800 dark:text-gray-200 transition-colors duration-300">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-4 text-center transition-colors duration-300">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          HI-PE Plus: Enhanced Walkthrough Multi-Zone Metal Detector
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Main Content Container */}
      <main className="max-w-6xl bg-gray-200 p-8 rounded-lg shadow-sm dark:bg-[#1e1e22] border border-gray-400 dark:border-gray-800 transition-colors duration-300">
        
          
          {/* Left Column: Content */}
          <div className="md:w-3/4">
            <p className="text-[15px] text-gray-800 dark:text-gray-300 mb-4 border-l-4 border-[#8ba4cc] dark:border-blue-500 pl-4 font-medium">
               A walk-through detection system that provides accurate detection of all metals and has an exceptional immunity to external interferences.            </p>

            <section className="mb-4">
              <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
                ProductDescription:
              </h2>
              <p className="text-[15px] text-gray-800 dark:text-gray-300 mb-4 border-l-4 border-[#8ba4cc] dark:border-blue-500 pl-4 font-medium">
               The HI-PE Plus Multi-Zone Metal Detector provides accurate detection of all metals, high level of discrimination of non-threat items, full compliance with the latest Security Standards and exceptional immunity to external interferences.
              </p>
            </section>

            <section className="mb-5">
              <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
                Product Features:
              </h2>
              <ul className="list-disc ml-5 text-sm space-y-1 text-gray-800 dark:text-gray-300">
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
        <div className='mt-5 px-10 py-5'>
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
              <span className="bg-[#ff5f31] text-white text-sm px-4 py-2 rounded">
                CEIA
              </span>
              
              <span className="bg-[#ff5f31] text-white text-sm px-4 py-2 rounded">
                Detection Systems
              </span>
            </div>

              {/* SHARE SECTION */}
               <SocialShare title="Check out this product!" />

        </div>
        
      </main>

      {/* Sidebar */}
    <aside className="lg:w-1/2 space-y-6 mt-7"> 
        <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded-xl shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
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

export default Hipe;