import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '@/components/pages/frontend/partials/Header';
import Footer from '@/components/pages/frontend/partials/Footer';
import SocialShare from '../../../Reusable/SocialShare';



const ElectricSmart = () => {
  const productFeatures = [
    "ElectricSmartd Panels",
    "Anti-Climb & Anti-Cut",
    "Architectural Harmony",
    "Weather Resistance",
    "Customization Options",
    "Secure Fixing",
    "Integration Ready"
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
         Electric Smart Coil
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
              The Electric Smart Coil delivers a non-lethal shock to stop trespassers in their tracks.
              the open architecture of our design allows the electric smart coil to be seamlessly
              integrated into your existing security apparatus.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
               Design as a covert detection system to be elavated on existing ClearVu security barrierss, the
               Electric Smart Coil barrier addition creates an electric fencing solution to protet key infrastructure,
               residential and commercial properties from unauthorised intrusion. It bears all the unique features
               of the Cochrane smart coil barbed wire fence design, but combined with the additional,
               'active' deterrent of an energiser delivering up to 7000 volts of electrical current.
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
            <h2 className="font-semibold text-black text-xl mb-4">Technical Specifications:</h2>

            <table className="border text-[17px] w-full">
              <tbody>
                <tr className="bg-gray-300 font-bold w-1/2">
                  <td colSpan="2" className="border-r border-black border p-2 text-black">
                    Voltage Output
                  </td>
                  <td colSpan="3" className="border-r border-black border p-2 text-black">
                    Up to 7,000 volts (non-lethal shock)
                  </td>
                </tr> 
                <tr className="bg-gray-300 font-bold w-1/2">
                  <td colSpan="2" className="border-r border-black border p-2 text-black">
                   Material
                  </td>
                  <td colSpan="3" className="border-r border-black border p-2 text-black">
                    Cochrane Ripper Blade razor wire
                  </td>
                </tr> 
                <tr className="bg-gray-300 font-bold">
                   <td colSpan="2" className="border-r border-black border p-2 text-black">
                    Detection
                  </td>
                  <td colSpan="3" className="border-r border-black border p-2 text-black">
                    Pre-intrusion detection (cutting/scalling attempts)
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                   <td colSpan="2" className="border-r border-black border p-2 text-black">
                    Integration
                  </td>
                  <td colSpan="3" className="border-r border-black border p-2 text-black">
                    ClearVu fences, Razor Barriers, alarm systems
                  </td>
                </tr> 
                

                <tr className="bg-gray-300 font-bold w-1/2">
                   <td colSpan="2" className="border-r border-black border p-2 text-black">
                    Power Options
                  </td>
                  <td colSpan="3" className="border-r border-black border p-2 text-black">
                    Standard energiser, solar energy
                  </td>
                </tr> 
                <tr className="bg-gray-300 font-bold">
                   <td colSpan="2" className="border-r border-black border p-2 text-black">
                    Compliance
                  </td>
                  <td colSpan="3" className="border-r border-black border p-2 text-black">
                    Meets international safety standards
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                   <td colSpan="2" className="border-r border-black border p-2 text-black">
                    Applications
                  </td>
                  <td colSpan="3" className="border-r border-black border p-2 text-black">
                    Critical Infrastructure, Industrial, Commercial, residential
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
                        <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By COCHRANE</h3>
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

export default ElectricSmart;