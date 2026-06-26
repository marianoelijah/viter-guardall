import React from 'react';
import { Share2, Facebook, Linkedin, Mail, Twitter } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';
import React from 'react';
const Ema = () => {
  const specData = [
    {
      category: "Key features",
      details: [
        "Integrated Type B and Type A Standard 3 certified SystemAutomatic inspection of any type of containersInspection time in ~ 5 seconds (type B) and ~ 4 seconds (type A)Multiple simultaneous sensing technologiesMinimum installation spaceMinimum operator training requiredAll solid stateNo mechanical parts in movementsNo-ionizing or laser sourcesNo maintenance required",
      ]
    },
    {
      category: "Multiple sensing technology",
      details: [
        "Wideband Radio Frequency (R.F.)Infrared (IR)Magnetic InductiveGravimetric opening: 450 mm x 75 mmDegree of protection: IP40",
      ]
    },
    {
      category: "Inspection Characteristics",
      details: [
        "Commercial Bottles of any shape and materials including plastic, glass, metal with capacity ranging from 100 ml to 2000 mlType A sample cups volume: 10 mlInitial Start-up time: 15 sec. maxAnalysis type: automaticAnalysis time: 5 sec. typical (type B) and 4 sec. typical (type A)",
      ]
    },
    {
      category: "Detectable substances",
      details: [
        "Explosive precursors and explosive liquids",
      ]
    },
    {
      category: "Alarm Signaling",
      details: [
        "Voltage: 100-277 V~±10%, 47-63Hz with external AC/DC adapter Current: 1.3 A max Battery operation (optional): 6 x 1.2V NiMH size DBattery life: 12 hoursBattery-charger incorporated: recharging time 6 h",
      ]
    },
    {
      category: "Acoustic alarmThreat classification availableOperator interface",
      details: [
        "Easy to read high-contrast graphic displayHigh durability stainless steel function keysProgrammability of all the parameters protected by passwords",
      ]
    },
     {
      category: "Function and calibration control",
      details: [
        "Automatic calibration, continuously runningManual verification of calibration, performed by the operator through Pass/No-Pass reference test pieces (according to the operational procedures)",
      ]
    },
     {
      category: "Communication capability",
      details: [
        "RS-232 serial interfaceEthernet network interface",
      ]
    },
     {
      category: "Remote control and Ethernet Networking Functions",
      details: [
        "Available through the CEIA NetID Management softwareProgrammingStatistical Data CollectionMaintenanceFirmware upgrade",
      ]
    },
     {
      category: "Degree of protection",
      details: [
        "IP 20 (IEC 60529)",
      ]
    },
     {
      category: "Weight",
      details: [
        "17 kg (type B only)17.5 kg (type B and type A)",
      ]
    },
      {
      category: "Main Electronics Features",
      details: [
        "High integration SMT32-bit flash-based microcontrollers32-bit DSPLow power and high reliabilityVery low power inspection field, confined in the analysis compartment, completely safe for both the operator and the liquidNo ionizing radiation or radioactive sourcesNo laser sources",
      ]
    },
     {
      category: "Main Mechanical Features",
      details: [
        "Constructed entirely in AISI304 Stainless SteelAnti-fingerprint surface treatmentRugged and DurableCompact and Aesthetically pleasing",
      ]
    },
     {
      category: "Installation and Maintenance",
      details: [
        "Automatic adjustment to environmental conditionsNo initial or periodic calibrations requiredFirmware upgradeable via RS232 or Ethernet interfaceNo periodical maintenance or consumables requiredBuilt-in automatic calibration and self-diagnosis system",
      ]
    },
     {
      category: "Certification and conformity",
      details: [
        "Standard 3 Certified according to ECAC performance requirements for Type B Liquid Explosive Detection SystemsStandard 3 Certified according to ECAC performance requirements for Type A Liquid Explosive Detection SystemsConforms to the currently applicable International Standards for Electrical Safety and EMC",
      ]
    },
     {
      category: "Power Supply",
      details: [
        "115/230V~ ±15%, 50/60 Hz ±10%, 15W",
      ]
    },
    {
      category: "Environmental conditions",
      details: [
        "Operating temperature: 0°C to +40°CStorage temperature: -10°C to +60°COperating Relative humidity: 0 to 95% (without condensation)Storage Relative humidity: 0-98%, without condensation",
      ]
    },
    {
      category: "NATO Stock Number",
      details: [
        "6665-1518052356665-151805236",
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
          EMA Liquid Explosive Detector
        </h1>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 items-start">
      {/* Main Content Container */}
      <main className="w-full lg:w-2/3 bg-gray-300 p-6 md:p-10 shadow-sm rounded-lg">
        
          
          {/* Left Column: Content */}
          <div className="md:w-3/4">
            <p className="mb-6 text-black text-[17px]">
             A compact liquid detection device, scanning for possible presence of explosive precursors and exclusive liquids. 
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Description:</h2>
              <p className="text-sm leading-relaxed text-black text-[17px]">
               The EMA is a compact device designed for the analysis of liquid containers and their contents with the goal of detecting the possible presence of explosive precursors and explosive liquids. The content of the bottles is analyzed without the need to open the container as the detection uses simultaneous multiple sensing technologies. The housing of the analyser, which is extremely robust, durable and easy to clean, is made of AISI 304 Stainless Steel and anti-friction plastic.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-sm space-y-1 text-black text-[17px]">
                <li>Accurate automatic inspection of sealed and unsealed LAGs (Liquids, Aerosols and Gels) in ~ 5 sec. (Type B) and ~ 4 sec. (Type A*)</li>
                <li>Compact size and ergonomic design</li>
                <li>Very low combined Nuisance Alarm Rate: 0.4%</li>
                <li>No-ionizing source or part in movements</li>
                <li>Certified to screen liquids in clear, colored and opaque plastic and glass, metal and metallized containers</li>
                <li>No maintenance required</li>
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

export default Ema;