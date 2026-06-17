import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';


const AR721H = () => {
  const techSpecs = [
    { label: "Built-In Operation Mode", m4: "M4", m6: "M6", m8: "M8" },
    { label: "Card User", m4: "1024", m6: "65,536", m8: "1024" },
    { label: "Event Memory", m4: "1200", m6: "NONE", m8: "1200" },
    { label: "Time Zone/ Holiday", m4: "11/120", m6: "NONE", m8: "11/120" },
    { label: "Anti-passback", m4: "YES", m6: "NONE", m8: "YES" },
    { label: "Alarm (tamper, force entry & door open too long)", m4: "YES", m6: "NONE", m8: "YES" },
    { label: "Elevator Control", m4: "1024 users, 32 floors", m6: "NONE", m8: "1024 users, 32 floors" },
    { label: "Direct PC Software", m4: "YES", m6: "NONE", m8: "YES" },
    { label: "Multi reader networking with AR716E", m4: "YES", m6: "NONE", m8: "YES" },
    
  ];

  const productFeatures = [
    "Low budget economical solution",
    "Compact modern design",
    "Easy to use software",
    "Time attendance",
    "Built-in alarm function",
    "CCTV integration",
    
   
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
           AR721H Basic Controller with <br/>
                 Built-In Reader
        </h1>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-lg my-10 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Left Column: Product Info */}
          <div className="lg:col-span-3">
            <p className="text-gray-800 text-[17px] mb-6">
             A cost-effective and compact door access with manual keypad.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
                SOYAL Basic system is efficiently optimized for low budget door, turnstile,
                 parking and elevator access control systems. Effectively control who (card user) 
                 can enter where (door group) at what time (time zone) using what method (card and/or pin).
              </p>

               <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1 text-black">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            </section>


            {/* Technical Specifications Table */}
            <section>
            <h2 className="font-bold text-xl text-black mb-4">Technical Specification:</h2>
            <div className="overflow-x-auto border border-black">
              <table className="w-full text-xs text-left">
                <thead className="bg-gray-100 border-b border-black">
                  <tr>
                    <th className="p-2 border-r text-black text-[17px] border-black w-1/4">Built-In Operation Mode</th>
                    <th className="p-2 border-r border-black text-gray-700 text-[17px]">M4</th>
                    <th className="p-2 border-r border-black text-gray-700 text-[17px]">M6</th>
                    <th className="p-2 text-gray-700 text-[17px]">M8</th>
                  </tr>
                </thead>
                <tbody>
                  {techSpecs.map((spec, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-50'}>
                      <td className="p-2 border-r border-black text-black font-semibold text-[17px]">{spec.label}</td>
                      <td className="p-2 border-r border-black text-gray-700 text-[17px]">{spec.m4}</td>
                      <td className="p-2 border-r border-black text-gray-700 text-[17px]">{spec.m6}</td>
                      <td className="p-2 text-gray-700 text-[17px]">{spec.m8}</td>
                    </tr>
                  ))}
                  {/* Static rows for long values */}
                  <tr className="bg-gray-200 border-t border-black">
                    <td className="p-2 border-r border-black font-semibold border text-black text-[17px]">
                        Access Mode
                    </td>
                    <td colSpan="3" className="p-2 text-center text-black text-[17px]">
                        Card only, card or pin, card and pin
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-t border-black">
                    <td className="p-2 border-r border-black font-semibold text-black text-[17px]">
                        Access Pin Number Format
                    </td>
                    <td colSpan="1" className="p-2 text-center border border-black text-black text-[17px]">
                        5 digit user num + 4 digit pin
                    </td>
                    <td colSpan="1" className="p-2 text-center border border-black text-black text-[17px]">
                        Public pin 4 digit
                    </td>
                    <td colSpan="1" className="p-2 text-center border border-black text-black text-[17px]">
                         User pin 4 digit
                    </td>
                  </tr>
                  <tr className="bg-gray-200 border-t border-black">
                    <td className="p-2 border-r border-black font-semibold text-black text-[17px]">
                       Wiegand Port
                    </td>
                    <td colSpan="3" className="p-2 text-center text-black text-[17px]">
                      1 input port (selectable WG26 or 34)
                    </td>
                  </tr>
                  <tr className="bg-gray-200 border-t border-black">
                    <td className="p-2 border-r border-black font-semibold text-black text-[17px]">
                      Push Button Input
                    </td>
                    <td colSpan="3" className="p-2 text-center text-black text-[17px]">
                      1 negative trigger input
                    </td>
                  </tr>
                  <tr className="bg-gray-200 border-t border-black">
                    <td className="p-2 border-r border-black font-semibold text-black text-[17px]">
                      Alarm Sensor Input
                    </td>
                    <td colSpan="3" className="p-2 text-center text-black text-[17px]">
                      1 negative trigger input
                    </td>
                  </tr>
                   <tr className="bg-gray-200 border-t border-black">
                    <td className="p-2 border-r border-black font-semibold text-black text-[17px]">
                     Door Output (Dry Contact)
                    </td>
                    <td colSpan="3" className="p-2 text-center text-black text-[17px]">
                     0.1-600 sec N.O/N.C, max 24V-1A
                    </td>
                  </tr>
                   <tr className="bg-gray-200 border-t border-black">
                    <td className="p-2 border-r border-black font-semibold text-black text-[17px]">
                     Alarm Output (Open Collector)
                    </td>
                    <td colSpan="3" className="p-2 text-center text-black text-[17px]">
                    0.1-600 sec, active low output
                    </td>
                  </tr>
                  <tr className="bg-gray-200 border-t border-black">
                    <td className="p-2 border-r border-black font-semibold text-black text-[17px]">
                       Reader RF Frequency
                    </td>
                    <td colSpan="3" className="p-2 text-center text-black text-[17px]">
                      125KHz or Mifare 13.56MHz
                    </td>
                  </tr>
                  <tr className="bg-gray-200 border-t border-black">
                    <td className="p-2 border-r border-black font-semibold text-black text-[17px]">
                       Reading Range
                    </td>
                    <td colSpan="3" className="p-2 text-center text-black text-[17px]">
                       Approx 10cm (4 inch)
                    </td>
                  </tr>
                  <tr className="bg-gray-200 border-t border-black">
                    <td className="p-2 border-r border-black font-semibold text-black text-[17px]">
                       Data Communication
                    </td>
                    <td colSpan="3" className="p-2 text-center text-black text-[17px]">
                      RS485-9600bps (N, 8, 1)
                    </td>
                  </tr>
                  <tr className="bg-gray-200 border-t border-black">
                    <td className="p-2 border-r border-black font-semibold text-black text-[17px]">
                     Power Consumption
                    </td>
                    <td colSpan="3" className="p-2 text-center text-black text-[17px]">
                      9-16V, less than 3W
                    </td>
                  </tr>
                  <tr className="bg-gray-200 border-t border-black">
                    <td className="p-2 border-r border-black font-semibold text-black text-[17px]">
                       Dimension, Weight
                    </td>
                    <td colSpan="3" className="p-2 text-center text-black text-[17px]">
                      111 (H) x 77 (W) X 26 (D) mm, 210 gram
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
            
            {/* AR721U Wiegand Specification */}
            <section>
              <h2 className="font-bold text-xl text-black mb-4 mt-5">AR721U Wiegand Specification</h2>
                  <div className="overflow-x-auto border border-black">
                   <table className="w-full text-xs text-left">
                     <thead className="bg-gray-100 border-b border-black">
                        <tr className="bg-gray-200 border-t border-black">
                          <td className="p-2 border-r border-black font-semibold text-black text-[17px]">
                             RF frequency
                          </td>
                          <td colSpan="3" className="p-2 text-center text-black text-[17px]">
                             125KHz or Mifare 13.56MHz
                          </td>
                        </tr>
                        <tr className="bg-gray-200 border-t border-black">
                          <td className="p-2 border-r border-black font-semibold text-black text-[17px]">
                             Reading range
                          </td>
                          <td colSpan="3" className="p-2 text-center text-black text-[17px]">
                              7cm
                          </td>
                        </tr>
                        <tr className="bg-gray-200 border-t border-black">
                          <td className="p-2 border-r border-black font-semibold text-black text-[17px]">
                             Power Consumption	
                          </td>
                          <td colSpan="3" className="p-2 text-center text-black text-[17px]">
                             9-16V, less than 0.7W
                          </td>
                        </tr>
                        <tr className="bg-gray-200 border-t border-black">
                          <td className="p-2 border-r border-black font-semibold text-black text-[17px]">
                             Dimension, Weight
                          </td>
                          <td colSpan="3" className="p-2 text-center text-black text-[17px]">
                            81 (H) x 43 (W) X 18 (D) mm, 45 gram
                          </td>
                        </tr>
                      </thead>
                    </table>
                  </div>
            </section>
             
            {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                MAG
              </span>
              
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                Access Control System
              </span>
            </div>

            {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By MAG</h3>
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

             {/* Contact Card */}
                                  <div 
                                    className="relative min-h-[240px] overflow-hidden rounded-2xl p-8 text-white shadow-md bg-cover bg-center bg-blend-multiply bg-blue-900/85"
                                    style={{ backgroundImage: "url('/dist/assets/image/Our Products/quickalert.jpg')" }}
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

export default AR721H;