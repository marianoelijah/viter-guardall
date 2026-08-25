import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';


const DSCHD300 = () => {
  const productFeatures = [
    "Certified M50/P1 - stops a 15,000 IB (=66.7 kN) vehicle at 50 mph (-80 kph)",
    "Shallow-foundation design - foundation depth of only -24 inches (=610 mm), making it easier to install in constrained sites and around buried utilities.",
    "Multiple-hit capable - after full scale impact test the barrier remained in its foundation, blocking second strikes.",
    "Available in either fully electric or hydraulic control units - giving flexibility for high-throughput or power-sensitive installations",
    "Built for demanding security environments including high water tables or corosive soils, thanks to its robust design and accessible service components."
  ];

  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-slate-800">
      {/* Banner Header */}
      <header className="bg-[#7f95b8] text-white py-14 px-4 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          DSC HD300 Wedge Barricade
        </h1>
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-xl my-10 p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Product Info */}
          <div className="lg:col-span-3">
            <p className="text-[15px]  text-black mb-6">
              Designed to stop large vehicles at a high-speed, this barrier can be installed with a fully electronic or hydraulic control unit.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
              <p className="text-[15px] text-black leading-relaxed whitespace-pre-line">
               The HD300 barrier, available with either a fully electric or hydraulic control unit, will stop a 15,000 pound (66.7 Km) vehicle 
               traveling 50 mph (80 kpm). Upon impact, the barrier remains in its foundation and the opening stays blocked, providing a multiple 
               hit capability. In its M50 crash test, the HD300 completely disabled the test vehicle, causing severe damage to the occupant 
               department and power train. The maximum penetration recorded was an outstanding -1.8 m on the passenger’s side. The P1 penetration 
               rating was given because the penetration beyond the protected side of the barrier was less than 1.0 m at the lower leading edge of 
               the test vehicle’s cargo bed. With its 24-inch (61 cm) shallow foundation and aesthetic design, the HD300 obviates the concerns of 
               interference with buried pipes, power lines and fiber optic communication lines. The shallow foundation also reduces installation 
               complexity, time, materials and corresponding costs. The HD300 is perfect for high water table locations and areas with corrosive 
               soils. It provides low maintenance as all components are accessible from the sides or top of the barrier.
              </p>
            </section>

            <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1 text-black">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

             {/* Technical Specifications Table */}
              <div className="bg-gray-300 p-6 shadow rounded border border-r divine-y">
            <h2 className="font-semibold text-black text-xl mb-4">Technical Specification</h2>

            <table className="border text-[15px] w-full">
              <tbody>
                <tr className="bg-gray-300 font-bold w-1/2">
                  <td colSpan="1" className="border-r border-black border p-2 text-black">
                    Crash Rating
                  </td>
                  <td colSpan="5" className="border border-r border-black p-2">
                    M50/P1
                  </td>
                </tr> 
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                     Foundation Depth
                  </td>
                  <td colSpan="5" className="border border-r border-black p-2 ">
                     24”
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Normal Operating Speed
                  </td>
                  <td colSpan="5" className="border border-r border-black p-2 ">
                    3-5 Seconds
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Emergency Operating Speed
                  </td>
                  <td colSpan="5" className="border border-r border-black p-2 ">
                    1.5 Seconds
                  </td>
                </tr> 
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Height
                  </td>
                  <td colSpan="5" className="border border-r border-black p-2 ">
                    39.4”
                  </td>
                </tr> 
               
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Widths
                  </td>
                  <td colSpan="5" className="border-black  p-2 border ">
                    9’ – 16’
                  </td>
                </tr>

                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Configurations
                  </td>
                  <td colSpan="5" className="border-black  p-2 border">
                    Hydraulic or Electric
                  </td>
                </tr>

                
                
              </tbody>
            </table>
                </div>
            

            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                DELTA
              </span>
            </div>

               {/* SHARE SECTION */}
             <SocialShare title="Check out this product!" />

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 p-4 border border-black  border-r mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By DELTA</h3>
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

export default DSCHD300;