import React from 'react';
import { Share2, Facebook, Linkedin, Mail, Twitter } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';


const Smd600 = () => {
  const specData = [
    {
      category: "Gate Structure",
      details: [
        "Useful transit area (W x H): – 720 mm x 2050 mm (standard configuration)- 820 mm x 2050 mm (wider passage width)",
        "Antivandalic and anti tampering IP66 control unit",
        "Embedded high precision transit counters (2-beam photocells)",
        "Antitampering ON/OFF switch",
        "State-of-the-art, robust and washable panels",
        "Protected against aging, weather and wear"
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
  ];

  return (
    <>
    <Header />

    <div className="bg-gray-200 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
         SMD600 Plus:  Enhanced Walkthrough and Metal Detector
        </h1>
      </header>

      {/* Main Layout Grid Wrap */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Main Content Container (Takes up 2/3 width on large screens) */}
        <main className="w-full lg:w-2/3 bg-gray-300 p-6 md:p-10 shadow-sm rounded-lg">
          
          {/* Top Info */}
          <div className="w-full">
            <p className="mb-6 text-black text-[17px] font-medium">
               A two-in-one metal detector that has high sensitivity and high throughput.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Description:</h2>
              <p className="leading-relaxed text-black text-[17px]">
               The SMD®600 Plus is a very high sensitivity Metal Detector that also offers characteristics of high discrimination and high detection uniformity. The SMD600 Plus is the first Metal Detector in the market fully compliant with the NIJ-0601.02 Standard, as required in very high sensitivity applications, which also allows very high throughput in high security public screening checkpoints.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 space-y-1 text-black text-[17px]">
                <li>High Sensitivity</li>
                <li>High Throughput</li>
                <li>New certified IP66 control unit</li>
                <li>Unique alarm signaling</li>
                <li>Most powerful and versatile security features</li>
                <li>MI2 sensor</li>
                <li>TDU Thermal Detection Unit</li>
                <li>Integrated web-server & logger</li>
              </ul>
            </section>
          </div>

          {/* Technical Specifications Table */}
          <div className='bg-gray-300 mt-5 pt-5'>
            <section>
              <h2 className="font-bold text-xl text-black mb-4">Technical Specifications:</h2>
              <div className="border border-black overflow-x-auto">
                {specData.map((spec, index) => (
                  <div key={index} className="flex min-w-[600px] border-b border-black last:border-0">
                    <div className="w-1/3 p-3 bg-gray-200 font-bold text-[17px] text-black border-r border-black">
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
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded text-sm font-semibold">
                CEIA
              </span>
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded text-sm font-semibold">
                Detection Systems
              </span>
            </div>

            {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />
          </div>
        </main>

        {/* Sidebar Container (Takes up 1/3 width on large screens) */}
        <aside className="w-full lg:w-1/3 space-y-6"> 
          
          {/* More By CEIA Box */}
          <div className="bg-gray-300 p-6 border border-gray-400 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-black mb-4 border-b border-gray-400 pb-2">
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

export default Smd600;