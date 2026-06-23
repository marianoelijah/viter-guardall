import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';


const P8030 = () => {
  const productData = {
    title: "P8030 Fully Automatic Smart Lock",
    subtitle: "A sleek and high-end door handle and lock combined. It can recognize fingerprints, passwords, etc.",
    features: [
      "Waterproof Material and operating temperature from -20℃ to 60℃",
      "Fully automatic unlocking and Doorbell allowing",
      "Multiply unlock ways and safely Tested by Tesla Circle",
      "Door applications: Wooden/security/ copper/stainless steel doors ect",
      "Deadbolt for preventing children mis-unlock doors",
      "Voice navigation optional",

      "Mortise Interchange easily and Supporting Hooks",
      "Easily resetting",
      "Easily installing",
      "Apply any kind of 13.56mhz cards setting to be users."
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
      <div className="bg-gray-300 min-h-screen font-sans text-slate-800">
        <header className="bg-[#7f95b8] text-white py-14 px-4 text-center">
          <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
            {productData.title}
          </h1>
        </header>

        <main className="max-w-6xl mx-auto bg-gray-200 shadow-xl my-10 p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-3">
              <p className="text-[15px] text-black mb-6">{productData.subtitle}</p>

              <section className="mb-10">
                <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 list-disc text-black ml-5 text-[15px]">
                  {productData.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </section>

                {/* Technical Spec Table */}
              <section className="overflow-x-auto">
                <h2 className="font-bold text-xl mb-4">Technical Specification:</h2>
                <table className="w-full text-[15px] text-black border-collapse border border-black">
                  
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Material
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          High strength zinc alloy + 304 grade stainless steel
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Working Current
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          8.4V lithium battery that allowing cycle charging and USB emergency charging
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Unlock Ways
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Fingerprint, password,card,key + WECHAT Password+ WIFI Phone APP (optional)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Fingerprint Sensor
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         Sweden FPC technology biometric fingerprint recognize, reactive time less than 0.5s
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Virtual Password
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          16-digital anti-peeping password, Scramble PIN Code to protect password peeping
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Misunlocking Alarm
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         Auto-lock 2 mins after 5 times wrong unlocking
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                        Records
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         There are 300pcs latest unlocking records storages and allow to be checked via Phone APP
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Low Voltage Alarm
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Unlocking alarming when voltage lower than 7.2V, there are 200 times left to reminding recharging
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Combination unlock
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Support single unlock way and combination unlock ways
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Capacity
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        fingerprints +passwords +cards  ≤ 200pcs, Administration for 9pcs; Normal users for 181 pcs; Temporary User for 10 pcs
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Mechanical keys
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          2 pieces
                      </td>
                    </tr>
                   
                </table>
              </section>

              {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10 border-b py-5 border-b-gray-400">
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
               ORBITA
              </span>
              
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
                Hotel Locking Systems and Hotel Safes
              </span>
            </div>

            {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

            </div>

            {/* Right Column: Sidebar */}
                     <div className="lg:col-span-1 space-y-8">
                         <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                       <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By ORBITA</h3>
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

export default P8030;