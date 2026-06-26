import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';


const AuditTrail = () => {
  const productData = {
    title: "OS500 In-Room Safe with Keypad and Audit Trail",
    subtitle: "This sleek, solid steel safe is designed to be mounted on shelfs, cabinets, and walls",
    description: "The Onity OS500 in-room safe is an excellent choice for hotels looking for a reliable safe designed to securely store laptops, tablets, purses or other valuables. A backlit LED button push is guest friendly, with 3, 4, 5, or 6-digit PIN code options. The OS500 safe comes in traditional design with a front-opening door and is available in black. It comes with two solid steel, anti-drill rotating bolts to mount to a shelf, cabinet, wall, desk or floor and features an on-screen low battery warning and audit tracking.", 
    features: [
      "User friendly",
      "Sleek modern design",
      "6-digit blue LED display",
      "3, 4, 5 or 6-digit PIN code options",
      "ADA compliant keypad",
      "“Code to Close” technology",
      "On hold / shut down time after 4 wrong consecutive attempts (programmable)",
      "Audit trail records the last 1000 operations",
      "2 solid steel, anti-drill bolts",
      "Fixing points",
      "Works with 4 AA standard batteries",
      "Low consumption motor",
      "Power status display on screen",
      "Interior carpet",
      "Interior light"
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
                        190 x 435 x 370 mm(7.48 x 17.12 x 14.57 in)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Door Opening (H x W)
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          186 x 431 mm(7.32 x 16.97 in)
                      </td>
                    </tr>
                     
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Interior Volume (cubic feet)
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          32.5 lt (8.6 gal)
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Weight (lbs)
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          35
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Interior Shelf
                      </td>
                      <td colSpan="3" className="border border-black p-2">
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
                      <td colSpan="3" className="border border-black p-2">
                           Black
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
                </table>
              </section>

              {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10 border-b py-5 border-b-gray-400">
              <span className="bg-[#ff5531] text-white px-2 py-1 rounded">
               ONITY
              </span>
              
              <span className="bg-[#ff5531] text-white px-2 py-1 rounded">
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

export default AuditTrail;