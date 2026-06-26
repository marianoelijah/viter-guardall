import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';
import React from 'react';

const CardSafe = () => {
  const productData = {
    title: "OS700 Contactless RFID Card Safe",
    subtitle: "A high-end safe that utilizes contactless RFID technology to unlock",
    description: "The Onity OS700 RFID guestroom safe is designed to efficiently utilize space and securely store laptops, tablets, purses or other valuables. It comes in the traditional front opening drawer (right or left hand options), and is available in black or white. All models are fully motorized with two solid steel, anti-drill rotating bolts and feature low battery warning, and audit trail.", 
    features: [
      "Sleek modern design",
      "User friendly, works approaching card to reader",
      "Reading technology: contactless RFID (ISO14443A, 14443B part 4, NFC)",
      "Supports MIFARE® Classic/EV1, Plus, Ultralight and MIFARE Ultralight C cards",
      "Multiple opening devices available: cards, wristbands, keychains, etc.",
      "Non-volatile memory: records last 500 operations, including date, time and user",
      "Each new guest card overrides any previous ones",
      "Compatible with Onity OnPortalTM"
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
                <h2 className="font-bold text-xl mb-4">Technical Specification:</h2>
                <table className="w-full text-[15px] text-black border-collapse border border-black">
                  
                  <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                      </td>
                      <td colSpan="3" className="border border-black p-2 font-bold">
                         Laptop 15IN
                      </td>
                    </tr>
                  <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       External Dimensions(H x W x D)
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       204 x 508 x 370mm(7.87 x 20 x 14.57 in)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Door Opening (H x W)
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          160 x 415mm(6.30 x 16.34 in)
                      </td>
                    </tr>
                     
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Interior Volume (cubic feet)
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          1.09
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Weight (lbs)
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          32
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Interior Shelf
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          N/A
                      </td>
                    </tr>
                     <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Interior Carpet
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Yes
                      </td>
                    </tr>
                  <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                           Color
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                           Black or White
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Hand
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Left or Right
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Audit Trail
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          500 operations; Date, Time, User
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Warranty
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          1 year
                      </td>
                    </tr>
                     <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Environmental
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Indoor Use Only
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Compliance
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          FCC, IC, CE
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Battery
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          4AA, Low power consumption, Low battery LED
                      </td>
                    </tr>
                </table>
              </section>

              {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10 border-b py-5 border-b-gray-400">
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
               ONITY
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
                       <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By ONITY</h3>
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

export default CardSafe;