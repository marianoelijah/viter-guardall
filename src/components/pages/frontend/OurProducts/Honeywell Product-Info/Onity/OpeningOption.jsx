import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const OpeningOption = () => {
  const productData = {
    title: "OS200  In-Room Safe with Keypad and Top-Opening Option",
    subtitle: "A reliable safe designed to secure laptops, tablets, and other valuables.",
    description: "The Onity OS200 in-room safe is an excellent choice for hotels looking for a reliable safe designed to securely store laptops, tablets, purses or other valuables. A backlit LED button push is guest friendly, with 3, 4, 5, or 6-digit PIN code options. The OS200 safe comes with a front-opening door and a version is available large enough to accommodate 17” laptops. It is also available in a top-opening design which can be easily hidden in a desk or side table, or mounted on a pedestal for in-closet installations. The OS200 safe is available in white or black and features an on-screen low battery warning and audit tracking.", 
    features: [
      "Guest friendly",
      "6-digit green LED display",
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
          <h1 className="text-4xl md:text-5xl font-bold max-w-5xl mx-auto uppercase tracking-wider">
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
                      <td colSpan="1" className="border border-black p-2 font-bold">
                         Laptop 15IN
                      </td>
                      <td colSpan="1" className="border border-black p-2 font-bold">
                          Laptop 17IN
                      </td>
                      <td colSpan="1" className="border border-black p-2 font-bold">
                         Top Opening
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          External Dimensions(H x W x D)
                      </td>
                      <td colSpan="1" className="border border-black p-2">
                         200 x 420 x 369mm(7.87 x 16.54 x 14.53 in)
                      </td>
                      <td colSpan="1" className="border border-black p-2">
                          200 x 508 x 372mm(7.87 x 20.0 x 14.65 in)
                      </td>
                      <td colSpan="1" className="border border-black p-2">
                          180 x 400 x 350mm(7.1 x 15.75 x 13.78 in)
                      </td>
                    </tr>
                   <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Door Opening (H x W)	
                      </td>
                      <td colSpan="1" className="border border-black p-2">
                         172 x 415 x 300mm(6.77 x 16.34 x 11.81 in)
                      </td>
                      <td colSpan="1" className="border border-black p-2">
                         195 x 503 x 318mm(7.68 x 19.8 x 12.52 in)
                      </td>
                      <td colSpan="1" className="border border-black p-2">
                          130 x 366 x 346mm(5.12 x 14.4 x 13.62 in)
                      </td>
                    </tr>
                     <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                         Interior Volume (cubic feet)	
                      </td>
                      <td colSpan="1" className="border border-black p-2">
                         21 lt (6.6 gal)
                      </td>
                      <td colSpan="1" className="border border-black p-2">
                         26 lt (6.9 gal)
                      </td>
                      <td colSpan="1" className="border border-black p-2">
                      </td>
                    </tr>
                     <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                         Weight (lbs)
                      </td>
                      <td colSpan="1" className="border border-black p-2">
                         27.9
                      </td>
                      <td colSpan="1" className="border border-black p-2">
                         37.4
                      </td>
                      <td colSpan="1" className="border border-black p-2">
                         35.8
                      </td>
                    </tr>
                     <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                         Interior Light
                      </td>
                      <td colSpan="1" className="border border-black p-2">
                         No
                      </td>
                      <td colSpan="1" className="border border-black p-2">
                         Yes
                      </td>
                      <td colSpan="1" className="border border-black p-2">
                         No
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
                          Pedestal Mount
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Yes, 12” or 15” height
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                         Color
                      </td>
                      <td colSpan="1" className="border border-black p-2">
                         Black
                      </td>
                      <td colSpan="1" className="border border-black p-2">
                         Black or White
                      </td>
                      <td colSpan="1" className="border border-black p-2">
                         Black or White
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                         Hand 
                      </td>
                      <td colSpan="1" className="border border-black p-2">
                         Left or Right
                      </td>
                      <td colSpan="1" className="border border-black p-2">
                         Right
                      </td>
                      <td colSpan="1" className="border border-black p-2">
                         Top
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Audit Trail
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Yes, 100 operations
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Pin Code
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          3, 4, 5 or 6-digit, 4 digit default
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Screen LED
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Yes
                      </td>
                    </tr>
                     <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          ADA Compliant Keyboard
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Yes
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Battery
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          4AA, Low power consumption
                      </td>
                    </tr>
                  <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                           Power Status
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                           Display on screen
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
                          Indoor use only
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
                    
                </table>
              </section>

              {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10 border-b py-5 border-b-gray-400">
              <span className="bg-red-500 text-white px-2 py-1 rounded">
               ONITY
              </span>
              
              <span className="bg-red-500 text-white px-2 py-1 rounded">
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
                       <ul className="text-xs space-y-4 text-gray-500 transition-colors">
                         <li className='cursor-pointer hover:text-[#f08c09]'>Onity DirectKey with Serene</li>
                         <li className='cursor-pointer hover:text-[#f08c09]'>MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs</li>
                         <li className='cursor-pointer hover:text-[#f08c09]'>INR 415 256-Channel 12 Bay RAID Rackmount Standalone</li>
                         <li className='cursor-pointer hover:text-[#f08c09]'>GNR 340 100-Channel Tower Standalone</li>
                         <li className='cursor-pointer hover:text-[#f08c09]'>ENR 130 16-Channel Desktop Standalone NVR - No HDD Included</li>
                         <li className='cursor-pointer hover:text-[#f08c09]'>Z86 Outdoor Network Dome Camera with Night Vision</li>
                       </ul>
                     </div>
           
                        {/* Contact Card */}
                       <div
                         className="bg-blue-600 text-white p-6 rounded shadow-md overflow-hidden relative min-h-[200px]"
                         style={{
                           backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(30, 64, 175, 0.8)), url('/src/assets/image/Our Products/quickalert.jpg')`,
                           backgroundSize: 'cover',
                           backgroundPosition: 'center',
                         }}
                       >
                         <div className="relative z-10 px-4 max-w-3xl">
                            <h3 className="text-xl font-semibold mb-3">
                              Secure Your Piece Of Mind Today
                            </h3>
                            <p className="text-lg mb-4">
                              Contact Guard-All now for a customized security solution
                              that protects what matters most.
                            </p>
                         <button className="bg-blue-700 hover:bg-blue-400 text-white font-semibold px-4 py-2 rounded w-full">
                           <NavLink to="/contacts" className="w-full h-full block">
                           CONTACT US TODAY
                           </NavLink>
                         </button>
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

export default OpeningOption;