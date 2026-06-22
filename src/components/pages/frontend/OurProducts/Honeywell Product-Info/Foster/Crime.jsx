import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const Crime = () => {
  const productData = {
    title: "CRIME-LITE X",
    subtitle: "A handheld, multi-spectral LED light source that helps examiners to seamlessly switch between various light options during an examination of a crime scene. ",
    description: "A complete ALS kit in a single light source, the Crime-lite X enables the examiner to seamlessly switch between White, UV, Violet, Blue, Blue/Green, Green, Orange, Red, and Infrared LEDs, to perform a comprehensive multi-spectral examination of a crime scene. Operated via a simple 3-button interface, the Crime-lite X provides new functionality, never seen before in a forensic light source, that will ensure that crime scene and laboratory examiners reveal the maximum amount of evidence in every examination.",
    features: [
      "Multi-spectral Illumination 10X LED wavelengths",
      "Cycle between wavelengths or combine LEDs to increase power",
      "Provides 100% performance regardless of battery drain",
      "Quickly cycle through illumination wavebands ",
      "Select multi-LED wavelength combinations",
      "Adjust illumination output intensity",
      "Self-test ISO standard performance check",
      "Integral dark adaptation checker",
      "Battery Status run time/power source",
      "1.25” Integrated Display",
      "370 Minutes Runtime",
      "Bluetooth Connectivity"
    ],
    moreByBrand: [
      "Onity DirectKey with Serene",
      "MAD-401 and MAD-402 Series Addressable Modules",
      "INR 415 256-Channel 12 Bay RAID",
      "GNR 340 100-Channel Tower Standalone",
      "ENR 130 16-Channel Desktop Standalone NVR",
      "Z86 Outdoor Network Dome Camera"
    ]
  };

  return (
    <>
      <Header />
      <div className="bg-gray-200 min-h-screen font-sans text-slate-800">
        <header className="bg-[#7f95b8] text-white py-14 px-4 text-center">
          <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
            {productData.title}
          </h1>
        </header>

        <main className="max-w-6xl mx-auto bg-gray-100 shadow-xl my-10 p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-3">
              <p className="text-[15px] text-black mb-6">{productData.subtitle}</p>
              
              <section className="mb-8">
                <h2 className="font-bold text-xl text-black mb-2 border-b-2 border-gray-100 pb-1 inline-block">Product Description:</h2>
                <p className="text-base text-black leading-relaxed mt-2">{productData.description}</p>
              </section>

              <section className="mb-10">
                <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 list-disc text-black ml-5 text-[15px]">
                  {productData.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </section>

              {/* Technical Spec Table */}
              <section className="overflow-x-auto">
                <h2 className="font-bold text-xl mb-4">Technical and System Specification:</h2>
                <table className="w-full text-[15px] text-black border-collapse border border-black">
                  
                   <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        HARDWARE FEATURES
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       • H 225mm x W 80mm x D 70mm• Weight (including battery) ~650g (approx.)• LED life up to 50,000 hours• 1/4-20 UNC tripod mounting thread• IP64 splash proof/dust tight• Supplied with wrist lanyard and protective end cap
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        INTERFACE
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        • Integrated 1.25” LCD display• Easy to use, push-button operation• Cycle through illumination wavelengths• Adjust LED brightness• Light source ‘Self-Test’ function• Dark adaptation checker• Battery charge status indicator
                      </td>
                    </tr>
                     <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        RECHARGEABLE BATTERY
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       • Supplied with 2x high quality 2.6Ah Li-Ion batteries• High energy efficiency with low self-discharge rate• Recharge up to 2000 times• Up to 420 minutes run time on a single battery charge
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       EXTERNAL BATTERY CHARGER
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       • Rapid charging of Crime-lite X Li-Ion batteries• Charge 1 or 2 batteries simultaneously• Charge status display• Includes micro USB cable• 120 minute typical charge time
                      </td>
                    </tr>
                     <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       AC MAINS POWER
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       • Versatile USB-Micro connector
                      </td>
                    </tr>
                </table>
              </section>

              {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
               FOSTER + FREEMAN
              </span>
              
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                Forensic Examination
              </span>
            </div>

            {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

            </div>

            {/* Right Column: Sidebar */}
                     <div className="lg:col-span-1 space-y-8">
                         <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                       <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By FOSTER + FREEMAN</h3>
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

          </div>

          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Crime;