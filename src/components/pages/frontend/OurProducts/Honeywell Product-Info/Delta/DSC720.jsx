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
                     K12/L3
                  </td>
                </tr> 
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                     Foundation Depth
                  </td>
                  <td colSpan="5" className="border border-r border-black p-2 ">
                     68"
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
                    2.0 Seconds
                  </td>
                </tr> 
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Height
                  </td>
                  <td colSpan="5" className="border border-r border-black p-2 ">
                    36”
                  </td>
                </tr> 
               
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Widths
                  </td>
                  <td colSpan="5" className="border-black  p-2 border ">
                    Unlimited
                  </td>
                </tr>

                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Configurations
                  </td>
                  <td colSpan="5" className="border-black  p-2 border">
                     Hydraulic, Pneumatic, Manual, Fixed
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
const DSC720 = () => {
  const data = {
    title: "DSC 720 High Security Bollard",
    subtitle: "Designed for high-security properties, this bollard can stop and destroy much larger vehicles at high velocities. ",
    description: 
    "The DSC720 is Delta’s highest crash rated bollard tested with a 15,000 lb vehicle at 50 mph and achieving K-12 bollards crash rating. This high security bollard will stop and destroy much larger vehicles than those tested at very high velocities. Applications include Federal and DOD facilities, embassies and high profile, high-risk clients. The DSC720 high security barricade bollards are 35 inches (89 CM) tall and 15.1 inches wide without the casting. The DSC720 series is available as a painted steel tube or supplied with a brushed stainless steel sleeve or decorative aluminum castings using Delta’s standard or custom design for a specific project. The DSC720 bollards are available with Hydraulic Power (HPU), Delta’s All Weather Pneumatic, Electromechanical,Manual and as Fixed Posts all with matching sleeves or covers. Consult Delta’s sales department for application recommendations.",

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

export default DSC720;