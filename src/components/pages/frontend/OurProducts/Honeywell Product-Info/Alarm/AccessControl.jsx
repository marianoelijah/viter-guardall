import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';


const AccessControl = () => {
  const specs = [
    { label: "RF Technologies", value: "125 KHz, 13.56 MHz, NFC,Bluetooth Low Energy" },
    { label: "Reads", value: "MIFARE DESFire® EV1 & EV2, LEAF, FSK and ASK proximity" },
    { label: "Input power", value: "5-16 VDC, 144 mA max (ET10),169 mA max (ET20), 193 mA max (ET25)" },
    { label: "Output", value: "OSDP, Wiegand, accelerometer-based tamper detection" },
    { label: "Read ranges", value: "EV1: 1.2”, EV2: 2.2”, 125 kHz up to 4”" },
    { label: "Temperature", value: "-31°F – 151°F (-35°C – 66°C)" },
    { label: "Dimensions", value: "5.1 x 1.7 x 0.7” (13.0 x 4.3 x 1.8cm) (ET10), 5.1 x 3.3 x 0.7” (13.0 x 8.4 x 1.8cm) (ET20 & ET25)" },
    { label: "Baud Rate", value: "5 – 95% (non-condensing) RH" },
    { label: "Operating Humidity", value: "-7 oz (ET10), 10 oz (ET20), 11.3 oz (ET25)" },
    { label: "Weight", value: "USA" },
    { label: "Country of Origin", value: "Weight: 7 oz (ET10), 10 oz (ET20), 11.3 oz (ET25)" },
    { label: "Weight", value: "ON/OFF, 0.1-600 Sec." },
    { label: "Certifications", value: "FCC, IC, CE, UL 294,EN 302291, EN 301489, EN 300330,EN 50130-4, IP55, BIS IS 13252" },
  ];

  const productFeatures = [
    "Multiple technologies in a single reader: Proximity, MIFARE DESFire, NFC & BLE",
    "Mobile Credentials support enables phones to unlock doors, eliminating badges",
    "OSDP Auto-Detect",
    "OSDP Secure Channel and remote firmware upgradability",
    "MIFARE DESFire® EV1 & EV2 support",
    "LEAF credential support for secure, open, interoperability",
    "FSK and ASK legacy proximity credentials support for seamless transitions",
    "Accelerometer-based tamper detection Tri-state LED light bar (red, green, amber) and audible beeper",
    "Accommodates indoor, outdoor installation environments",
  ];

  return (
    <>
    <Header />
     <div className="bg-gray-100 dark:bg-[#121214] min-h-screen font-sans text-slate-800 dark:text-gray-200 transition-colors duration-300">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-4 text-center transition-colors duration-300">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          ADC-AC-ET Access Control Readers
        </h1>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 dark:bg-[#1e1e22] border border-transparent dark:border-gray-800 transition-colors shadow-lg my-10 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Left Column: Product Info */}
          <div className="lg:col-span-3">
            <p className="text-[17px] leading-relaxed space-y-4 mb-6">
             A series of multi-technology, contactless access control to properly secure your properties or business.
            </p>

            <section className="mb-8">
              <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Description:</h2>
              <p className="text-[17px] leading-relaxed space-y-4 mb-6">
               Alarm.com’s Smarter Access Control is a powerful, easy-to-use solution for commercial 
               properties that seamlessly integrates with the Alarm.com for Business platform. 
               This platform enables intelligent automation and features, such as disarming when badging 
               in, locking doors when arming, and tagging access events on the video timeline. 
              </p>
              <p className="text-[17px] leading-relaxed space-y-4 mb-6">
                These three multi-technology contactless access control readers offer a modern aesthetic
                and a state-of-the-art feature set, including Proximity (125 kHz), MIFARE DESFire (13.56
                MHz), NFC, and Bluetooth®. All readers are fully OSDPTM compliant and are enabled for OSDP Secure Channel.
              </p>

               <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            </section>


            {/* Technical Specifications Table */}
            <section>
              <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Technical Specification:</h2>
              <div className="border border-gray-500 dark:border-gray-700 overflow-hidden rounded-sm">
                <table className="w-full border-collapse border border-gray-500 text-[11px]">
                 
                  <tbody className="divide-y divide-gray-800 p-2.5 font-bold  tracking-widest text-gray-800 dark:text-blue-400 text-[17px] border-b border-gray-500 dark:border-gray-700">
                    {specs.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-00' : 'dark:bg-gray-800'}>
                        <td className="p-2 border-r border-black font-semibold text-[17px] uppercase text-gray-800 dark:text-gray-200 leading-normal">
                          {spec.label}
                        </td>
                        <td className="p-2 border-r border-black font-semibold text-[17px] uppercase text-gray-800 dark:text-gray-200 leading-normal">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            
            
             
            {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                ALARMCOM
              </span>
              
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                Access Control System
              </span>
            </div>

            {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded-xl shadow-sm  mb-6">
            <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By MAG</h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <NavLink to="/our-products/onity/directkey-with-serene" className='block'>
                  <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>Onity DirectKey with Serene</li>
                </NavLink>
                <NavLink to="/our-products/detnov/addressable-sounder" className='block'>
                  <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>MAD-401 and MAD-402 Series Modules</li>
                </NavLink>
                <NavLink to="/our-products/acti/bay-raid-backmount-standalone" className='block'>
                  <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>INR 415 256-Channel RAID Standalone</li>
                </NavLink>
                <NavLink to="/our-products/acti/channel-tower-strandalone" className='block'>
                  <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>GNR 340 100-Channel Tower NVR</li>
                </NavLink>
                <NavLink to="/our-products/acti/bay-raid-backmount-standalone" className='block'>
                  <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>INR 415 256-Channel RAID Standalone</li>
                </NavLink>
                <NavLink to="/our-products/acti/channel-tower-strandalone" className='block'>
                  <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>GNR 340 100-Channel Tower NVR</li>
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

export default AccessControl;