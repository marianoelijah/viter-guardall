import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';

// Shared Layout Component to maintain design consistency across all products
const ProductLayout = ({ title, subtitle, description, features, specs, sidebarItems }) => {
  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-slate-800">
      {/* Banner Header */}
      <header className="bg-[#7f95b8] text-white py-14 px-4 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          {title}
        </h1>
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-xl my-10 p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Product Info */}
          <div className="lg:col-span-3">
            <p className="text-[15px]  text-black mb-6">{subtitle}</p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
              <p className="text-[15px] text-black leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-[15px] text-black space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>

             {/* Technical Specifications Table */}
              <div className="bg-gray-300 p-6 shadow rounded border border-r divine-y">
            <h2 className="font-semibold text-black text-xl mb-4">Technical Specification</h2>

            <table className="border text-[15px] w-full">
              <tbody> 
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                   Passage Width
                  </td>
                  <td colSpan="5" className="border border-r border-black p-2 text-black">
                    max. 1800 mm with barrier tubes, max. 926 mm with glass wing
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Opening/ Closing time
                  </td>
                  <td colSpan="5" className="border border-r border-black p-2 text-black">
                    1.5–4 s, depending on dimensions of barrier element
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Opening angle
                  </td>
                  <td colSpan="5" className="border border-r border-black p-2 text-black">
                    Adjustable from 0 to 300*
                  </td>
                </tr> 
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Drive technology
                  </td>
                  <td colSpan="5" className="border border-r border-black p-2 text-black">
                    MHTM
                  </td>
                </tr> 
               
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Voltage
                  </td>
                  <td colSpan="5" className="border-black  p-2 border text-black">
                    110-240 VAC, 50/60 Hz
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Power Consumption
                  </td>
                  <td colSpan="5" className="border-black  p-2 border text-black">
                    max. 45 W
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Duty cycle
                  </td>
                  <td colSpan="5" className="border-black  p-2 border text-black">
                    100 %
                  </td>
                </tr>
                 <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Housing material
                  </td>
                  <td colSpan="5" className="border-black  p-2 border text-black">
                     Stainless steel 1.4301/SS304
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Housing height
                  </td>
                  <td colSpan="5" className="border-black  p-2 border text-black">
                     1000 mm
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Housing diameter
                  </td>
                  <td colSpan="5" className="border-black  p-2 border text-black">
                     159 mm
                  </td>
                </tr>

                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Enclosure rating
                  </td>
                  <td colSpan="5" className="border-black  p-2 border text-black">
                    IP 44
                  </td>
                </tr>

                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                     Temperature range
                  </td>
                  <td colSpan="5" className="border-black  p-2 border text-black">
                    	-25 to +45 °C (with activated static heating system)
                  </td>
                </tr>

              </tbody>
            </table>
                </div>
            

            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                MAGNETIC
              </span>
            </div>

               {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 p-4 border border-black  border-r mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By MAGNETIC</h3>
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
          </aside>
        </div>
      </main>
    </div>
    <Footer />
    </>
    
  );
};

// Example Usage for the Hirsch M64 Controller
const WingGate = () => {
  const data = {
    title: "MPS Wing Gate",
    subtitle: "Swing door in timeless design for use in high-quality environments with low to medium visitor frequencies.",
    description: "The visible elements of the MPS are reduced to a minimum. Because the control system and drive are fully integrated, users only see the movable stainless steel cylinder and the barrier element. As a result, the MPS is the ideal choice for sophisticated settings with low to medium visitor frequencies – for museums, exhibition rooms and modern offices. Despite its minimalist design, the MPS offers extremely flexible use. Its wide opening angle of 300°and bidirectional operation enable the implementation of access and exit control with a single barrier. The combination of two MPS units also allows a wider passage to be set up for wheelchair users and the transport of materials. The sensitive impact detection of the innovative MHTM™ drive always ensures maximum personal safety. The opening and closing speeds can be adapted to the particular intended purpose. The barrier itself can consist of stainless steel tubing, a safety glass wing or customer-specific materials.",
    features: [
      "Compact accommodation of drive and control system in stainless steel cylinder",
      "Low impact forces for maximum personal safety",
      "Freely rotating in case of power failure",
      "As a double door, suitable for wheelchairs, bicycles and the transport of materials",
      "Designed for 10 million opening and closing cycles"
    ],

    sidebarItems: [
      "Onity DirectKey with Serene",
      "MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs",
      "INR 415 256-Channel 12 Bay RAID Backmount Standalone",
      "GNR 340 100-Channel Tower Standalone",
      "ENR 130 16-Channel Desktop Standalone NVR- No HDD Included",
      "Z86 Outdoor Network Dome Camera with Night Vision"
    ]
  };

  return <ProductLayout {...data} />;
};

export default WingGate;