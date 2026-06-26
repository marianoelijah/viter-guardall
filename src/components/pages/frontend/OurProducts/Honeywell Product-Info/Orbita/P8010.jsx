import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';
import React from 'react';

const P8010 = () => {
  const productData = {
    title: "P8010 Fingerprint Smart Lock",
    subtitle: "This high-end device can recognize fingerprints for efficient locking or unlocking of doors. ",
    features: [
      "Hardware material all for Pure 304 stainless steel",
      "Classic style and simple design",
      "Passed Tesla Coil testing,secure and reliable",
      "Sweden FPC biometric fingerprint sensor.",
      "Past Tesla Coil testing.Security.",
      "Voice Navigation.",

      "Up handle could lock.Mortise Interchange easily and Supporting Hooks",
      "16 digital anti-peeping password.",
      "Easily installing",
      "Apply any kind of 13.56mhz cards setting to be users.",
      "LCD showing screen allowing clear operations"
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
                          304 stainless steel
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Static current
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          50μA
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Dynamic current
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          250mA
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Refusal Rate
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         0.15%
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          False Rate
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          ≤0.001%
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Working Temperature
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         -10℃~60℃
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                        Working humidity
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         20%~93%
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Working Current
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        4 AA Alkaline batteries
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Emergency Charge
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        External charging with standard MINI interface USB 
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                        Unlock Ways
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Fingerprint, password,card,key , wechat +wifi (optional)
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
                         Mis-unlocking Alarm
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Auto-lock 2 mins after 5 times wrong unlocking
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                        Low Voltage Alarm
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Unlocking alarming when voltage lower than 4.8V, there are 200 times left to reminding recharging
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
                         fingerprints +passwords +cards  ≤ 200pcs, Administration for 9pcs; Normal users for 181 pcs; Temporary User for 10pcs
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Mechanical keys
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         2 piecess
                      </td>
                    </tr>
                   
                </table>
              </section>

              {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10 border-b py-5 border-b-gray-400">
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
               ORBITA
              </span>
              
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
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
                     </div>

          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default P8010;