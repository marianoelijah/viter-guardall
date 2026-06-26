import React from 'react';
import { Share2, Facebook, Linkedin, Mail, Twitter } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';


const Pd240 = () => {
  const specData = [
    {
      category: "Power Supply",
      details: [
        "2x AA size NiMH, rechargeable batteries",
      ]
    },
    {
      category: "Fully Customizable Control Panel",
      details: [
        "Optical, acoustic and vibration alarm modes3-level sensitivity selection buttons",
      ]
    },
    {
      category: "Detection and Operational Functions",
      details: [
        "Customizable via HHMD Configuration tool",
      ]
    },
    {
      category: "Battery",
      details: [
        "Battery life:50 + hours continuous service(AA NiMH batteries 2500 mAh);up to 100 hours with automatic sleep mode",
        "Low battery indicator",
        "Built-in fast battery charger in combination with the HHDS Docking station"
      ]
    },
    {
      category: "Operating Temperature",
      details: [
        "-40°C to 70°C",
      ]
    },
    {
      category: "Storage Temperature",
      details: [
        "-40°C to 80°C",
      ]
    },
     {
      category: "Relative Humidity",
      details: [
        "0 to 98% (without condensation)",
      ]
    },
     {
      category: "Dimensions",
      details: [
        "PD240: 405 mm x 120 mm x 40 mm HHDS Docking station: 175 mm x 115 mm x 85 mm",
        "CARRY BAG: 430 mm x 340 mm x 105 mm",
      ]
    },
     {
      category: "Weight",
      details: [
        "PD240 (with battery): 480 g HHDS Docking station (whit power adapter): 755 g CARRY BAG: 1.3 kg",
      ]
    },
     {
      category: "Color",
      details: [
        "PD240 (with battery): 480 g HHDS Docking station (whit power adapter): 755 g CARRY BAG: 1.3 kg",
      ]
    },
     {
      category: "Compliance",
      details: [
        "Conforms to the NIJ 0602.02 and the new NIJ 0602.03 Standards for metal detection",
        "Conforms to the international standards currently applicable for safety, EMC and to the applicable CE regulations",
      ]
    },
     {
      category: "Accessories",
      details: [
        "Carry Bag: part # 64082 NIJ 0602.02 Test Pieces Kit: part # NIJ-HHMD-0602.02 (includes 11 test objects for LO, MO, SO, VSO security levels)",
        "HHMD Configuration tool: part # 63537 (includes special USB adapter with cable, GUI application software)",
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
          PD240 Wide Search Area Hand-Held Metal Detection Set
        </h1>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 items-start">
      {/* Main Content Container */}
      <main className="w-full lg:w-2/3 bg-gray-300 p-6 md:p-10 shadow-sm rounded-lg">
        
          
          {/* Left Column: Content */}
          <div className="md:w-3/4">
            <p className="mb-6 text-black text-[17px]">
              This hand-held metal detection device consists of an offset hand grip for a wider search area.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Description:</h2>
              <p className="text-[17px] leading-relaxed text-black">
               The PD240 is a Hand Held Metal Detector that combines high reliability and ergonomics with advanced detection and operator signaling features. Effective sensitivity to all metals, full compliance with the latest Security Standards and high immunity to external metal masses are among the main peculiarities of this new device.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 space-y-1 text-black text-[17px]">
                <li>Wide Search Area for Faster and Accurate Screening Operations</li>
                <li>Elegant, Robust and Ergonomic</li>
                <li>High Immunity to Floor Rebars allows Lower-Body Screening without Sensitivity Reduction</li>
                <li>Uniform Detection of Magnetic and Non-Magnetic Targets</li>
                <li>Full Digital Design: Consistent Performance and Calibration-Free Operations</li>
                <li>Detection of radioactive substances and materials (option)</li>
                <li>Indoor and Outdoor Operations</li>
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

export default Pd240;