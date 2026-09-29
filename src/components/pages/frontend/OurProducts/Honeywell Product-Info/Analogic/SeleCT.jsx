import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';


const SeleCT = () => {
  const productFeatures = [
    "Next generation 3D image quality for greater levels of detection, lower false alarms, and faster on screen resolution",
    "SeleCT-able algorithms enable risk-based screening for enhanced security",
    "SeleCT-able belt speeds enable intelligent load balancing and reduced energy consumption",
    "Futureproof platform with in-situ upgrades to provide enhanced capabilities for a 20-year lifecycle.",
    "Shares platform-based design with the ConneCT, providing common user interfaces, network, training, service, software, APIs, and parts.",
  ]
     

   return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-slate-800">
      {/* Banner Header */}
      <header className="bg-[#7f95b8] text-white py-14 px-4 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          SeleCT Hold Baggage & Air Cargo Security System
        </h1>
        
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-xl my-10 p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Product Info */}
          <div className="lg:col-span-3">
            <p className="text-[17px]  text-black mb-6">
                SeleCT is an advanced aviation security EDS engineered to deliver superior threat detection and 
                low total cost of ownership. It features a tunnel Computed Tomography (CT) design that supports
                selectable threat detection algorithms
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
              <p className="text-[17px] text-gray-680 leading-relaxed whitespace-pre-line">
                SeleCT redefines CT by offering superior image quality and eliminating the risk of catastrophic
                bearing failures. Building on the ConneCT, the SeleCT offers best in class operational availability,
                low power consumption, open architecture capabilities, and third-party algorithms.
              </p>

               <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1 text-black">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            </section>

            

             {/* Technical Specifications Table */}
        <div className="bg-gray-300 p-6 shadow rounded border border-r divine-y">
            <h2 className="font-bold text-black text-xl mb-4"> Technical Specifications</h2>

    <table className="w-full border text-[15px] text-black">
        <tbody>
            <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold w-1/2 text-center">
                    PHYSICAL SPECIFICATIONS
                  </td>
            </tr>
            <tr>
              <td rowSpan={2} className=" font-bold border-r border-black border p-4 text-black align-middle">
                Dimensions
              </td>
              <td  className=" w-1/5 p-4 text-black align-middle border-b border-r border-black ">
                L
              </td>
              <td colSpan="2" className="p-4 text-black border-black border align-middle border-b ">
                W
              </td>
            </tr>
            <tr>
              <td className="p-4 text-black align-middle border-b border-r border-black">
                5,143 mm (202.5 in)
              </td>
              <td colSpan="2" className="border-r border-black border p-4 text-black align-middle">
                2,200 mm (86.6 in)
              </td>
            </tr>

            <tr>
              <td rowSpan={2} className=" font-bold border-r border-black border p-4 text-black align-middle">
                Tunnel Size
              </td>
              <td  className="w-1/5 p-4 text-black align-middle border-b border-r border-black ">
                H
              </td>
              <td colSpan="2" className="p-4 text-black border-black border align-middle border-b ">
                W
              </td>
            </tr>
            <tr>
              <td className="p-4 text-black align-middle border-b border-r border-black">
                2,260 mm (89.0 in)
              </td>
              <td colSpan="2" className="p-4 text-black border align-middle border-b border-black">
                1020 mm (40.2 in)
              </td>
            </tr>

            <tr>
              <td rowSpan={2} className=" font-bold border-r border-black border p-4 text-black align-middle">
                Weight
              </td>
              <td  className="border-r border-black border p-4 text-black align-middle">
              </td>
              <td colSpan="2" className="border-r border-black border p-4 text-black align-middle">
              </td>
            </tr>
            <tr>
              <td className="border-r border-black border p-4 text-black align-middle">
                810 mm (31.9 in)
              </td>
              <td colSpan="2" className="border-r border-black border p-4 text-black align-middle">
                6,000 kg (13,228 lbs)
              </td>
            </tr>

               <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold w-1/2 text-center">
                     ENVIRONMENT & POWER    
                   </td>
               </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Operating Temp
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   0 to 40 C (32-104 F)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Operating Humidity
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    10 to 90%, non-condensing
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Storage Temp
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    -20 to 50 C (0-120 F)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Power Consumption
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    13 kVA (11kVA typical)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Lower Power Mode
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    4 kVA
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Input Voltage
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    400/480 VAC
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    X-ray Power
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    180 kV, 15mA
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Operating Noise Level
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    78dB
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Computer OS
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Linux
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold w-1/2 text-center">
                    PERFORMANCE
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Conveyor Speed
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    0.5 m/s and /or 0.3 m/s
                  </td>
                </tr>
               
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Max Conveyor Load
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    200 kg (441 lbs)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="1" className="border-r border-black border p-2 font-bold">
                   Operational Throughput
                  </td>
                  <td colSpan="2" className="border border-r border-black  p-2">
                   1,800 BPH (high-speed)
                  </td>
                  <td colSpan="2" className="border border-r border-black  p-2">
                   1,000 BPH (performance model)
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
            

            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
                ANALOGIC
              </span>
                
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
                Detection Systems
              </span>
            </div>

               {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 p-4 border border-black  border-r mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By HIKVISION</h3>
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

            {/* Blue CTA Card */}
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
          </aside>
        </div>
      </main>
    </div>
    <Footer />
    </>
    
  );
};

export default SeleCT;