import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';


const J200 = () => {
  const productData = {
    title: "J200 Automatic Traffic Bollards",
    subtitle: "A series of bollards designed to help regulate vehicle access to residential areas",
    description: "The Automatic retractable traffic bollard FAAC J200 HA is particularly suitable to regulate vehicle traffic in residential areas, ensuring an intelligent control, while maintaining the aesthetic appearance.", 
    features: [
      "Easy to transport, store and install, thanks to the self-supporting structure and to the limited weight of the product",
      "Easy underground pit laying and limited excavation",
      "A streamlined product, configurable by selecting the desired installation accessories",
      "Easy maintenance (can be performed by a single person)",
      "Perfect interchangeability with first generation bollards",
      "Integrated hydraulic unit"
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
             <div className="mb-8">
             <h2 className="font-bold text-xl mb-4">Technical Specification:</h2>
             <table className="w-full border-collapse border border-gray-500 text-[10px]">
                <thead>
                   <tr className="bg-gray-100 font-bold">
                      <th className="border border-gray-500 p-2 text-left w-1/4"></th>
                      <th className="border border-gray-500 p-2 text-[15px] text-gray-800">J275 HA V2 H600</th>
                      <th className="border border-gray-500 p-2 text-[15px] text-gray-800">J275 HA V2 H800</th>
                      <th className="border border-gray-500 p-2 text-[15px] text-gray-800">J275 HA V2 H600INOX</th>
                      <th className="border border-gray-500 p-2 text-[15px] text-gray-800">J275 HA V2 H800INOX</th>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 font-bold bg-gray-50">
                         Type of operator
                      </td>
                      <td colSpan="5" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                         Hydraulic Actuator
                      </td>
                   </tr>
                  <tr>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 font-bold bg-gray-50">
                        Cylinder height from ground
                      </td>
                      <td colSpan="1" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        600 mm
                      </td>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        800 mm
                      </td>
                       <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        600 mm
                      </td>
                       <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        800 mm
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 font-bold bg-gray-50">
                         Cylinder diameter
                      </td>
                      <td colSpan="5" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                         275 mm
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 font-bold bg-gray-50">
                          Cylinder material
                      </td>
                      <td colSpan="2" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                          Steel S235JR EN 10219 (7mm thick)
                      </td>
                      <td colSpan="3" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                          Satin-finished AISI 316L (6mm thick)
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 font-bold bg-gray-50">
                          Cylinder treatment
                      </td>
                      <td colSpan="2" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                          Cataphoresis and polyesterpowder paint, dark greymetallised RAL 7021
                      </td>
                      <td colSpan="3" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                          Satin finish
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 font-bold bg-gray-50">
                        Rising time
                      </td>
                      <td colSpan="1" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        ~5 s (*)
                      </td>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        ~7 s (*)
                      </td>
                       <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        ~5 s (*)
                      </td>
                       <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        ~7 s (*)
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 font-bold bg-gray-50">
                        Descent time
                      </td>
                      <td colSpan="1" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        ~3.5 s (*)
                      </td>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        ~4.5 s (*)
                      </td>
                       <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        ~3.5 s (*)
                      </td>
                       <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        ~4.5 s (*)
                      </td>
                   </tr>

                   <tr>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 font-bold bg-gray-50">
                        Emergency descent device
                      </td>
                      <td colSpan="5" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                         YES (excludable)
                      </td>
                   </tr>

                   <tr>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 font-bold bg-gray-50">
                        Emergency descent time
                      </td>
                      <td colSpan="1" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        ~1.2 s (*)
                      </td>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                       ~1.5 s (*)
                      </td>
                       <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                       ~1.2 s (*)
                      </td>
                       <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        ~1.5 s (*)
                      </td>
                   </tr>

                   <tr>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 font-bold bg-gray-50">
                        Rising obstacle detection device
                      </td>
                      <td colSpan="5" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                         YES 
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 font-bold bg-gray-50">
                        Release device
                      </td>
                      <td colSpan="4" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                         YES 
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 font-bold bg-gray-50">
                        Power supply voltage
                      </td>
                      <td colSpan="4" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        220-240V ~ 50/60Hz
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 font-bold bg-gray-50">
                        Max. power
                      </td>
                      <td colSpan="4" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        575 W (*)
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 font-bold bg-gray-50">
                        Hydraulic pump unit protection class
                      </td>
                      <td colSpan="4" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        IP67
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 font-bold bg-gray-50">
                        Type of use
                      </td>
                      <td colSpan="4" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        Intensive use (Traffic)
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 font-bold bg-gray-50">
                       Impact resistance
                      </td>
                      <td colSpan="2" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                         38,000 J
                      </td>
                      <td colSpan="3" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                         67,000 J
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 font-bold bg-gray-50">
                       Break in resistance
                      </td>
                      <td colSpan="2" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        128,000 J
                      </td>
                      <td colSpan="3" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        207,000 J
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 font-bold bg-gray-50">
                        Pit weight
                      </td>
                      <td colSpan="1" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        55 Kg
                      </td>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        65 Kg
                      </td>
                       <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        55 Kg
                      </td>
                       <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        65 Kg
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 font-bold bg-gray-50">
                        Traffic bollard weight
                      </td>
                      <td colSpan="1" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        112 Kg
                      </td>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        130 Kg
                      </td>
                       <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        112 Kg
                      </td>
                       <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        130 Kg
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 font-bold bg-gray-50">
                        Operating ambient temperature
                      </td>
                      <td colSpan="4" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        -15 °C / +55 °C
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 font-bold bg-gray-50">
                        Operating ambient temperature with heater
                      </td>
                      <td colSpan="4" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        -25 °C / +55 °C
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 font-bold bg-gray-50">
                        Slow lowering
                      </td>
                      <td colSpan="4" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        YES
                      </td>
                   </tr>
                </tbody>
             </table>
          </div>

              {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10 border-b py-5 border-b-gray-400">
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
               FAAC
              </span>
            </div>

            {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

            </div>

            {/* Right Column: Sidebar */}
                     <div className="lg:col-span-1 space-y-8">
                         <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                       <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By FAAC</h3>
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

export default J200;