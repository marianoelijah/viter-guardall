import React from 'react';
import { Share2, Facebook, Linkedin, Mail, Twitter } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const Pd140n = () => {
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
        "Carry Bag: part # 64081",
        "Belt Holster: part # 64614",
        "NIJ 0602.02 Test Pieces Kit: part # NIJ-HHMD-0602.02(includes 11 test objects for LO, MO, SO, VSO security levels)",
        "HHMD Configuration tool: part # 63537 (includes special USBadapter with cable, GUI application software)",
        "Cigarette lighter cable for battery charger: part # 64436"
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
          PD140N Compact Hand-Held Metal Detection Set
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-300 mt-8 p-6 md:p-12 shadow-sm">
        
          
          {/* Left Column: Content */}
          <div className="md:w-3/4">
            <p className="mb-6 text-black text-[17px]">
              A highly reliable metal detection device with ergonomic design.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Description:</h2>
              <p className="text-sm leading-relaxed text-black text-[17px]">
               The PD140N is a Hand Held Metal Detector that combines high reliability and ergonomics with advanced detection and operator signaling features. Effective sensitivity to all metals, full compliance with the latest Security Standards and high immunity to external metal masses are among the main peculiarities of this new device.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-sm space-y-1 text-black text-[17px]">
                <li>NIJ Standard – 0602.02 Compliant</li>
                <li>Compact, Elegant, Robust and Ergonomic</li>
                <li>Uniform Detection of Magnetic and non-Magnetic Targets</li>
                <li>Full Digital Design: Consistent Performance and Calibration-Free Operations</li>
                <li>Detection of radioactive substances and materials (option)</li>
                <li>Extended Continuous Operation Time</li>
                <li>Advanced Configuration Capability</li>
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

export default Pd140n;