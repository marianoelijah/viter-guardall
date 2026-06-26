import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';
import React from 'react';


const S3076 = () => {
  const productData = {
    title: "S3076 Hotel RFID Lock",
    subtitle: "A fashionable and streamlined hotel lock with a hidden keyhole. It can be accessed with an RFID/keycard.",
    description: "The S3076 has a streamlined and fashionable design with a hidden keyhole. It is wholly made of high-strength zinc alloy + stainless steel with an acrylic inductor cover, making it strongly resistant to impact, corrosion and abrasion. This product is highly scalable. Its motherboard is highly integrated inside the lock body to facilitate installation. S3076 lock supports other management software, Fidelio/Opera, and ORBITA wireless handheld devices to realize data collection, door lock settings, data download and other functions. It adopts an American standard 5-point tongue lock body, with a combination of anti-insertion beveled latch bolt design and beveled latch bolt abnormality alarm design for double security, stability and reliability. It has functions such as door ajar alarm, low voltage alarm, channel function and all-in-one smart card.",
    features: [
      "Hidden keyhole with RFID access",
      "High-strength zinc alloy + stainless steel construction",
      "Supports Fidelio/Opera and ORBITA handheld devices",
      "Low voltage alarm and door ajar alarm",
      "Stores activity logs and supports mechanical key override"
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
                          Panel Dimensions
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          62 mm (L) x 62 mm (W) x 12 mm (H)
                      </td>
                    </tr>
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
                          Operating Voltage
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          DC 6V (4 AAdry batteries)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Operating Current
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Quiescent current:  30 pA; dynamic current: 200 mA
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Battery Life
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         Support about 15,000 cycles, and last over one year
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Working environment
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         Temperature: -20℃—60℃; Relative Humidity: 20% — 90%
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Card Type
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         Mifare 1 card
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Low Voltage Alarm
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         When the battery cottage is lower than 4.8V, a buzzer will beep. After that, the lock IasB about 100 cycles.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Activity Log
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         Stores up to 1,680 pieces of logs (depending on the configuration)
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Mechanical Key
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         Can be unlocked by mechanic keys
                      </td>
                    </tr>
                   
                </table>
              </section>

              {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10 border-b py-5 border-b-gray-400">
              <span className="bg-[#FF5F31] text-white text-sm px-4 py-2 rounded">
               ORBITA
              </span>
              
              <span className="bg-[#FF5F31] text-white text-sm px-4 py-2 rounded">
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

export default S3076;