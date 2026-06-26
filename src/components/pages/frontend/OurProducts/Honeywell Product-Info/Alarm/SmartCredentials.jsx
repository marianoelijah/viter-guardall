import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';


const SmartCredentials = () => {
  const specs = [
    { label: "Features", value: "Smart Card", valu: "Smart+ Proximity Card", vale: "Smart Key Fob" },
    { label: "SKU", value: "ADC-AC-CARD-50H4", valu: "ADC-AC-CARD-50D4", vale: "ADC-AC-FOB-60H8" },
    { label: "Security Level", value: "EAL 5+", valu: "EAL 5+", vale: "EAL 5+" },
    { label: "Memory Size", value: "4K", valu: "4K", vale: "8K" },
    { label: "Frequency", value: "13.56 MHz", valu: "125 kHz + 13.56 MHz", vale: "13.56 MHz" },
    { label: "Technology", value: "MIFARE DESFire EV2", valu: "MIFARE DESFire EV2 + Proximity", vale: "MIFARE DESFire EV2" },
    { label: "Dimensions", value: "3.4 x 2.1 x 0.03”(8.7 x 5.4 x 0.08 cm)", valu: "3.4 x 2.1 x 0.03”(8.7 x 5.4 x 0.08 cm)", vale: "1.6 x 1.2 x 0.2”(4.0 x 3.1 x 0.5 cm)" },
    { label: "Road Range", value: "Up to 3” (7.6 cm)", valu: "Up to 3” (7.6 cm)", vale: "Up to 3” (7.6 cm)" },
    { label: "Slot Punch", value: "Vertical or Horizontal", valu: "Vertical or Horizontal", vale: "N/A" },
    { label: "Storage & Operating Temperatures", value: "-50°F – 160°F (10°C – 71°C)", valu: "-50°F – 160°F (10°C – 71°C)", vale: "-13°F – 176°F (-25°C –80°C)" },
    { label: "Material", value: "PVC + PET", valu: "PVC + PET", vale: "Polycarbonate" },
    { label: "LEAF Compatibility", value: "LEAF enabled", valu: "LEAF enabled", vale: "LEAF enabled" },
    { label: "Color", value: "White", valu: "White", vale: "Black with White Center" },
    { label: "Country of Origin", value: "USA", valu: "USA", vale: "USA" },
    
  ];

  const productFeatures = [
    "MIFARE® DESFire® EV2 smart credentials",
    "Additional Proximity support with Smart + Proximity Card",
    "LEAF credential support for secure interoperability",
    "Scan-to-add card format and serial detection",
    "User-friendly, flexible scheduling",

  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
           ADC-AC-CARD and ADC-AC-FOB Smart Credentials
        </h1>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-lg my-10 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Left Column: Product Info */}
          <div className="lg:col-span-3">
            <p className="text-gray-800 text-[17px] mb-6">
               Secure your properties or business through smart cards and keyfobs designed to work with Alarm.com readers.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
              Alarm.com’s Smarter Access Control is a powerful, easy-to-use solution for commercial 
              properties that seamlessly integrates with the Alarm.com for Business platform. 
              This platform enables intelligent automation and features, such as disarming 
              when badging in, locking doors when arming, and tagging access events on the 
              video timeline. 
              </p>
              <p className="text-gray-800 text-[17px] leading-relaxed">
               Alarm.com Smart Credentials provide secure access control authentication, in addition to
               data storage for biometrics, user privileges, or other custom applications. Each Smart Card
               and Smart Key Fob is equipped with an Alarm.com-specific encryption key which can only 
               be read using Alarm.com readers, providing an additional layer of security. 
               The Smart + Proximity Card allows businesses to continue supporting older credentials
               while transitioning to new smart credentials.
              </p>

               <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1 text-black">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            </section>

            {/* Technical Specifications Table */}
            <section>
              <h2 className="font-bold text-xl text-black mb-4">Technical Specification:</h2>
              <div className="overflow-x-auto border border-gray-500">
                <table className="w-full text-left text-xs border-collapse border border-black">
                 
                  <tbody>
                    {specs.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                        <td className="p-3 border-b border-r border-black text-black text-[17px] font-bold w-1/3">
                          {spec.label}
                        </td>
                        <td className="p-3 border-b border-r border-black text-[17px] text-black">
                          {spec.value}
                        </td>
                        <td className="p-3 border-b border-r border-black text-[17px] text-black">
                          {spec.valu}
                        </td>
                        <td className="p-3 border-b border-r border-black text-[17px] text-black">
                          {spec.vale}
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
              <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By ALARM.COM</h3>
             <ul className="space-y-4 text-gray-700">
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

export default SmartCredentials;