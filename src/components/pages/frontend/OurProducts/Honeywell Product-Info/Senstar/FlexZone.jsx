import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';



const FlexZone = () => {
  
  const productFeatures = [
    "Enhance your Existing Fence",
    "Reduced Infrastructure Costs",
    "Common Platform",
    "Environmentally Derived Adaptive Processing Technology (EDAPT)",
    "Networking and Integration",
    "Gate Protection",
    "Sensor Fusion Ready",
    "Certification from the UK's National Protective Security Authority (NPSA)"

  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          FlexZone
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
               Locating Fence-Mounted Intrusion Detection Sensor
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
                FlexZone detects and locates any attempt to cut, climb or otherwiaw break through the fence.
                It accurately locates intrusions even when there are multiple simultaneous intrusions and
                in the presence of background environmental noise.
              </p>

               <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1 text-black">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            </section>

            {/* Technical Specifications*/}
                  <div className="bg-gray-300 p-6 shadow rounded border border-r divine-y">
            <h2 className="font-semibold text-black text-xl mb-4">Technical Specification</h2>

            <table className="border text-[15px] w-full">
              <tbody>
                <tr className="bg-gray-300 font-bold w-1/2">
                  <td colSpan="5" className="border-r border-black border p-2 text-black">
                   
                  </td>
                  
                </tr> 
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="5" className="border border-r border-black p-2 ">
                    
                  </td>
                </tr>
                
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="5" className="border border-r border-black p-2 ">
                   
                  </td>
                </tr> 
                 <tr className="bg-gray-300 font-bold">
                  <td colSpan="5" className="border border-r border-black p-2 ">
                   
                  </td>
                </tr> 
              </tbody>
            </table>

             </div>     
                       

            {/* SHARE SECTION */}
             <SocialShare title="Check out this product!" />

        </main>

           {/* Sidebar */}
              <aside className="lg:w-1/4 space-y-6"> 
                     <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                        <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By SENSTAR</h3>
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
            
              </aside>

        </div>
    </div>
    <Footer />
    </>
   
  );
};

export default FlexZone;