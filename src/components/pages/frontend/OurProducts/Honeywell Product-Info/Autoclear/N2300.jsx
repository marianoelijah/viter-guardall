import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';

// Shared Layout Component to maintain design consistency across all products
const ProductLayout = ({ title, subtitle, description, features, specs, sidebarItems }) => {
  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-slate-800">
      {/* Banner Header */}
      <header className="bg-[#7f95b8] text-white py-14 px-4 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          {title}
        </h1>
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-xl my-10 p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Product Info */}
          <div className="lg:col-span-3">
            <p className="text-[17px]  text-black mb-6">{subtitle}</p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
              <p className="text-[17px] text-gray-680 leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] text-gray-680 space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>

             {/* Technical Specifications Table */}
              <div className="bg-gray-300 p-6 shadow rounded border border-r divine-y">
            <h2 className="font-bold text-black text-xl mb-4">Technical Specification</h2>

            <table className="w-full border text-[15px] text-black">
              <tbody>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Detector
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Gas chromatography-surface ionisation detection
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Analysis Time 
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    55 Seconds
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Detectable compounds
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Methamphetamine, Amphetamine, Ketamine, MDA, MDMA, Cocaine, CBD, THC, Hydrocodone, Codeine, Morphine, Heroin & Fentanyl. New detectable compounds can be added to the detection library. These chemicals are grouped into 5 different narcotic families due to their close proximity in gas chromatography retention time:MethamphetamineCocaineTHCHeroinFentanyl
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Sensitivity
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Explosives: picogramNarcotics: nanogram
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Display Monitor
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   LCD 2.7 inch for status messages
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Sample Collection
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Particulates
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Warm-up Time
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                  20 minutes maximum from a cold start
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Alarms
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                  LED indicator lights and audible alarm
                  </td>
                </tr>

                {/* <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold">
                    X-RAY GENERATOR
                  </td>
                </tr> */}

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Power Supply
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    12 V DC rechargeable battery (for 3 hours operation);12 V AC adapter
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Input Voltage
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    90-264 VAC, 50-60 Hz universal switching
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Unit Weight
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    3.2 kg
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Unit Dimensions
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   L44.9cm x W15.8cm x H18.9 cm
                  </td>
                </tr>
              </tbody>
            </table>
                </div>
            

            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                AUTOCLEAR
              </span>
              
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                Detection Systems
              </span>
            </div>

               {/* SHARE SECTION */}
             <SocialShare title="Check out this product!" />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 p-4 border border-black  border-r mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By AUTOCLEAR</h3>
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
      </main>
    </div>
    <Footer />
    </>
    
  );
};

// Example Usage for the Hirsch M64 Controller
const N2300 = () => {
  const data = {
    title: "N2300 Trace Detector",
    subtitle: "A high sensitivity detector that pinpoints minute traces of illegal drugs and other amphetamine-type stimulants.",
    description: "The N2300 narcotics trace detector pinpoints minute traces of cocaine, opiates, cannabis, hashish, methamphetamine, and other amphetamine-type stimulants. Fast, accurate and easy to use, the N2300’s automatic sampling and go/no go readouts are ideal for non-technical staff. The lightweight, built-to-last N2300 easily processes dirty street drugs, and delivers consistent, dependable performance. Featuring a robust, reusable sampling screen and an easy-to-read display, this versatile unit is convenient to set up, operate and maintain.",
    features: [
      "Delivers laboratory-grade accuracy to the field",
      "Rapid, accurate and easy to read results in seconds",
      "Detects dirty street drugs",
      "No radioactive source",
      "Low maintenance and consumable costs"
    ],

    sidebarItems: [
      "Onity DirectKey with Serene",
      "MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs",
      "INR 415 256-Channel 12 Bay RAID Backmount Standalone",
      "GNR 340 100-Channel Tower Standalone",
      "ENR 130 16-Channel Desktop Standalone NVR- No HDD Included",
      "Z86 Outdoor Network Dome Camera with Night Vision"
    ]
  };

  return <ProductLayout {...data} />;
};

export default N2300;