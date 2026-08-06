import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../../partials/Header';
import Footer from '../../../../partials/Footer';
import SocialShare from '../../../Reusable/SocialShare';


const SenstarLM100 = () => {
  

  const productFeatures = [
    "Actively Deter Intrusions",
    "Lower Electricity and Maintenance Costs",
    "Minimize Light Pollution",
    "Networking and Integration",
    "Works with Any Fence",
    "Gate Protection",
    "Common Platform"
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          Senstar LM100 
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
               Senstar LM100  is a perimeter intrusion detection system that can be fence-mounted, 
               buried, or deployed in a wall-top configuration. It can also be used to protect data 
               conduits and buried pipelines. Advanced adaptive signal processing along with certified 
               SMS/VMS integration options ensure the highest level of security and performance.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
                Senstar LM100  builds upon Senstar’s 40 years of perimeter intrusion detection experience 
                to offer a system that detects and reports both common and sophisticated intrusion attempts 
                almost instantly. Unlike generic AI systems that require extensive training and may fail when 
                presented with unseen intrusion data, SenstarLM100 is designed with intelligence built-in, 
                works out of the box, and offers the highest levels of performance and system confidence.
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
            <h2 className="font-bold text-black text-xl mb-4">Reliable Performance:</h2>

            <table className="w-full border text-[17px]">
              <tbody>
                {/* HEADER*/}
                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold w-1/2 uppercase text-black">
                    Intrusion Detection
                  </td>
                </tr>

                <tr className="bg-gray-200 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold text-gray-700">
                   Built-in accelerometer detects attempts to cut, climb or lift the fence fabric
                  </td>
                </tr>
                <tr className="bg-gray-200 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold text-gray-700">
                    Reports intrusion attempt location to the site's security system
                  </td>
                </tr>
                <tr className="bg-gray-200 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold text-gray-700">
                    Can activate other detergent systems like intercoms or other security lights
                  </td>
                </tr>
               

                {/* HEADER*/}
                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold uppercase text-black">
                     High Performance Lightning
                  </td>
                </tr>
                <tr className="bg-gray-200 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold text-gray-700">
                     53 lux per luminaire (163 lumens) with 50,000 hour minimum life expectancy
                  </td>
                </tr>
                <tr className="bg-gray-200 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold text-gray-700">
                     Instant-on or strobe lighting at intrusion attempt location can deter potential intruders
                  </td>
                </tr>

                {/* HEADER*/}
                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold uppercase text-black">
                    Environmentally Friendly
                  </td>
                </tr>

                <tr className="bg-gray-200 ">
                   <td colSpan="5" className="border-r border-black border p-2 font-bold text-gray-700">
                     Directed illumination minimizes light pollution
                  </td>
                </tr>
                <tr className="bg-gray-200 ">
                   <td colSpan="5" className="border-r border-black border p-2 font-bold text-gray-700">
                     Ultra-low power LEDs reduce power consumption by up 95%
                  </td>
                </tr>
                <tr className="bg-gray-200 ">
                   <td colSpan="5" className="border-r border-black border p-2 font-bold text-gray-700">
                     International Dark Sky Association (IDA) approved option with warm-white LEDs
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

export default SenstarLM100;