import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';


const Clampbell = () => {
  // 1. Centralized Data Object
  const productData = {
    title: "Clampbell Fire Alarm Bells",
    subtitle: "An audible alarm that notifies people in case of fire.",
    description: `Manufactured by Vimpex in the UK, the ClamBell® EN54-3 approved fire bell incorporates traditional and innovative design. The hinged design of ClamBell® means installers benefit from reduced installation time. Once fitted to the wall and wired to the circuit, ClamBell® clicks shut. Low power consumption and good sonorous tone result from use of an aluminum gong which also significantly reduces weight.`,
    features: [
      "Permanently fitted gong",
      "Specifically designed weatherproof back box",
      "Mounting options for European, Asian and US style installations",
      "Slick and modern looking",
      "Fully customized pad printed branding",
      "Strobell EN-23 VAD option which integrates ClamBell and VAD for unique combined unit will be available soon"
    ],
    specs: [
      { label: "Rated Voltage (V)", values: ["20.4 - 27.6", "9.6 - 13.2", "207 - 253", "114 - 126"] },
      { label: "Rated Current @24 V (mA)", values: ["12", "12", "TBC", ""] },
      { label: "Starting Voltage (V)", values: ["11", "5.5", "TBC", ""] },
      { label: "Sound Output dB(A) @1m (max)", values: ["96.0", "TBC", "96.0", ""] },

      { label: "Temperature Range (C°):", values: ["-10 – +50 - 27.6", "9.6 - 13.2", "207 - 253", "114 - 126"] },
      { label: "Humidity Range (%):", values: ["12", "12", "TBC", ""] },
      { label: "Weight (g):", values: ["11", "5.5", "TBC", ""] },
      { label: "Gong Colour:", values: ["Red/White/Grey"] },

      { label: "Gong Construction:", values: ["Aluminum"] },
      { label: "IP Rating:", values: ["11", "5.5", "TBC", ""] },
    ],
    moreByDetnov: [
      "Onity DirectKey with Serene",
      "MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs",
      "INR 415 256-Channel 12 Bay RAID Rackmount Standalone",
      "GNR 340 100-Channel Tower Standalone",
      "ENR 130 16-Channel Desktop Standalone NVR - No HDD Included",
      "Z86 Outdoor Network Dome Camera with Night Vision"
    ],
   
  };

  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen font-sans text-slate-800">
        
        {/* Banner */}
        <header className="bg-[#7f95b8] text-white py-14 px-4 text-center">
          <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
            {productData.title}
          </h1>
        </header>

        <main className="max-w-6xl mx-auto bg-white shadow-xl my-10 p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

            {/* Left Column: Product Info */}
            <div className="lg:col-span-3">
              <p className="text-[15px] text-black mb-6">{productData.subtitle}</p>
              
              <section className="mb-8">
                <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
                <p className="text-base text-black leading-relaxed whitespace-pre-line">
                  {productData.description}
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
                <ul className="list-disc ml-5 text-base text-black space-y-2">
                  {productData.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </section>

              {/* Table */}
              <section className="overflow-x-auto border border-black border-r text-black text-[15px] rounded-sm">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-gray-100 text-black">
                      <th rowSpan="2" className="border border-black border-r text-black text-[15px] p-3 text-left"></th>
                      <th colSpan="3" className="border border-black border-r text-black text-[15px] p-2">6" (150mm) Internal - 24V dc</th>
                      <th colSpan="3" className="border border-black border-r text-black text-[15px] p-2">6" (150mm) Internal - 12V dc</th>
                      <th colSpan="2" className="border border-black border-r text-black text-[15px] p-2">6” (150 mm)Internal – 230 V ac</th>
                      <th colSpan="2" className="border border-black border-r text-black text-[15px] p-2">6” (150 mm)Internal – 120 V ac</th>
                    </tr>
                    <tr className="bg-gray-50 text-[10px] text-gray-500">
                      {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                          <th className="border border-black border-r text-black text-[15px] p-1">Shallow</th>
                          <th className="border border-black border-r text-black text-[15px] p-1">Deep</th>
                          <th className="border border-black border-r text-black text-[15px] p-1">W/P</th>
                        </React.Fragment>
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i + 2}>
                          <th className="border border-black border-r text-black text-[15px] p-1">Deep</th>
                          <th className="border border-black border-r text-black text-[15px] p-1">W/P</th>
                        </React.Fragment>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {productData.specs.map((spec, index) => (
                      <tr key={index} className="hover:bg-blue-50 transition-colors">
                        <td className="border border-black border-r text-black text-[15px] p-3 font-semibold bg-gray-50">{spec.label}</td>
                        {spec.values.map((val, i) => (
                          <td key={i} colSpan={i < 2 ? 3 : 2} className="border border-black border-r text-black text-[15px] p-2 text-center">
                            {val || ""}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>

           {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                DETNOV
              </span>
              
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                Fire Alarm
              </span>
            </div>

               {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
                       <div className="bg-gray-300 p-4 border border-black  border-r mb-6">
                      <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By DETNOV</h3>
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
          
                      {/* Blue CTA Card */}
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
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Clampbell;