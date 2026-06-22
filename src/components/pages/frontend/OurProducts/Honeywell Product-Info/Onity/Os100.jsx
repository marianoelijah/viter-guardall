import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';
import React from 'react';
import React from 'react';

const Os100 = () => {
  const productData = {
    title: "OS100 In-Room Safe with Keypad and Audit Trail",
    subtitle: "An economical and cost-effective safe to help secure key properties of hotel guests",
    description: "Safes have become an expected amenity for many travelers today. The OS100 is an economical safe making it cost effective for properties to provide this important offering to their guests. With a solid design, the OS100 offers many key features while protecting valuables. The OS100 safe comes in traditional design with front-opening door (right hand option only) and is available in black. It comes with two solid steel, anti-drill rotating bolts for mounting and features audit tracking.", 
    features: [
      "Easy to use",
      "Budget friendly",
      "6-digit red LED display",
      "3, 4, 5 or 6-digit PIN code options",
      "ADA compliant keypad",
      "“Code to Close” technology",
      "On hold / shut down time after 4 wrong consecutive attempts",
      "Audit trail records the last 100 operations",
      "2 solid steel, anti-drill bolts",
      "Fixing points",
      "Works with 4 AA standard batteries",
      "Low consumption motor",
      "Power status display on screen",
      "Interior carpet",
      "Hand: Right"
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
                      <td colSpan="1" className="border border-black p-3 font-bold w-1/2">
                      </td>
                      <td colSpan="2" className="border border-black p-2 font-bold">
                         Laptop 15IN
                      </td>
                      <td colSpan="2" className="border border-black p-2 font-bold">
                         Top Opening
                      </td>
                    </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-3 font-bold w-1/2">
                          External Dimensions(H x W x D)
                      </td>
                      <td colSpan="2" className="border border-black p-2">
                         200 x 420 x 370mm(7.87 x 16.54 x 14.57 in)
                      </td>
                      <td colSpan="2" className="border border-black p-2">
                         128 x 400 x 350mm(5.04 x 15.75 x 13.78 in)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-3 font-bold w-1/2">
                          Door Opening (H x W)	
                      </td>
                      <td colSpan="2" className="border border-black p-2">
                        178 x 415 x 315mm(7.0 x 16.34 x 12.40 in)
                      </td>
                      <td colSpan="2" className="border border-black p-2">
                         86 x 396mm(3.39 x 15.59 in)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-3 font-bold w-1/2">
                          Interior Volume (cubic feet)
                      </td>
                      <td colSpan="2" className="border border-black p-2">
                          22.71 L (6 gal)
                      </td>
                      <td colSpan="2" className="border border-black p-2">
                         1.7 L (3.09 gal)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-3 font-bold w-1/2">
                          Weight (lbs)
                      </td>
                      <td colSpan="2" className="border border-black p-2">
                          27.9
                      </td>
                      <td colSpan="2" className="border border-black p-2">
                          22
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-3 font-bold w-1/2">
                          Pedestal Mount
                      </td>
                      <td colSpan="5" className="border border-black p-2">
                          Yes, 12” or 15” height
                      </td>
                    </tr>
                     <tr>
                      <td colSpan="1" className="border border-black p-3 font-bold w-1/2">
                          Color
                      </td>
                      <td colSpan="5" className="border border-black p-2">
                          Black
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-3 font-bold w-1/2">
                          Hand
                      </td>
                      <td colSpan="2" className="border border-black p-2">
                          Right
                      </td>
                      <td colSpan="2" className="border border-black p-2">
                          Top
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-3 font-bold w-1/2">
                          Audit Trail
                      </td>
                      <td colSpan="5" className="border border-black p-2">
                          Yes, 100 operations
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-3 font-bold w-1/2">
                          Pin Code
                      </td>
                      <td colSpan="5" className="border border-black p-2">
                          3, 4, 5 or 6-digit, 4 digit default
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-3 font-bold w-1/2">
                          Screen LED
                      </td>
                      <td colSpan="5" className="border border-black p-2">
                          Yes
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-3 font-bold w-1/2">
                          ADA Compliant Keyboard
                      </td>
                      <td colSpan="5" className="border border-black p-2">
                          Yes
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-3 font-bold w-1/2">
                          Battery
                      </td>
                      <td colSpan="5" className="border border-black p-2">
                          4AA, Low power consumption
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-3 font-bold w-1/2">
                          Power Status
                      </td>
                      <td colSpan="5" className="border border-black p-2">
                          Display on screen
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-3 font-bold w-1/2">
                          Warranty
                      </td>
                      <td colSpan="5" className="border border-black p-2">
                          1 year
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-3 font-bold w-1/2">
                          Environmental
                      </td>
                      <td colSpan="5" className="border border-black p-2">
                          Indoor use only
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-3 font-bold w-1/2">
                          Environmental
                      </td>
                      <td colSpan="5" className="border border-black p-2">
                          Indoor use only
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-3 font-bold w-1/2">
                          Compliance
                      </td>
                      <td colSpan="5" className="border border-black p-2">
                          FCC, IC, CE
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

export default Os100;