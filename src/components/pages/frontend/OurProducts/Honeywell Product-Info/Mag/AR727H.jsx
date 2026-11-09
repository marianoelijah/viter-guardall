import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';



const AR727H = () => {

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
     <div className="bg-gray-100 dark:bg-[#121214] min-h-screen font-sans text-slate-800 dark:text-gray-200 transition-colors duration-300">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-4 text-center transition-colors duration-300">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
         AR727H Standard Controller <br/> with Built-In Reader
        </h1>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 dark:bg-[#1e1e22] border border-transparent dark:border-gray-800 transition-colors shadow-lg my-10 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Left Column: Product Info */}
          <div className="lg:col-span-3">
            <p className="text-[17px] text-gray-800 dark:text-gray-300 mb-8 border-l-4 border-[#8ba4cc] dark:border-blue-500 pl-4 font-medium">
              A cost-effective door access with manual keypad, LCD screen, and easy to use software. 
            </p>

            <section className="mb-8">
              <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold dark:text-blue-400 transition-colorsfont-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-[17px] text-gray-800 dark:text-gray-300 leading-relaxed whitespace-pre-line">
               SOYAL Standard system is the most affordable, best value PC based door, turnstile, 
               parking and elevator access control system in the market. Effectively control who 
               (card user) can enter where (door group) at what time (time zone) using what method
               (card and/or pin).
              </p>

               <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl mb-3 text-black dark:text-blue-400 transition-colors">Product Features:</h2>
            <ul className="list-disc pl-6 text-gray-800 dark:text-gray-300 text-[17px] space-y-1 mb-8">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            </section>


            {/* Technical Specifications Table */}
          <section>
            <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-4 transition-colors">Technical Specification:</h2>
            <div className="border border-gray-500 dark:border-gray-700 overflow-hidden rounded-sm">
              <table className="w-full border border-gray-800 text-gray-800 divine-x border-r text-[17px]">
                <thead className="divide-y divide-gray-800 p-2.5 font-bold uppercase tracking-widest text-gray-800 dark:text-blue-400 text-[17px] border-b border-gray-500 dark:border-gray-700">
                  <tr>
                    <th className="dark:text-blue-400 p-2 border-r text-black text-[17px] border-black w-1/4">
                    Built-In Operation Mode
                    </th>
                    <th className="dark:text-blue-400 p-2 border-r text-black text-[17px] border-black w-1/4">
                      M4
                    </th>
                    <th className="dark:text-blue-400 p-2 border-r text-black text-[17px] border-black w-1/4">
                      M6
                    </th>
                    <th className="dark:text-blue-400 p-2 border-r text-black text-[17px] border-black w-1/4">
                      M8
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {techSpecs.map((spec, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'dark:bg-gray-700' : 'bg-gray-00'}>
                      <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">{spec.label}</td>
                      <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">{spec.m4}</td>
                      <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">{spec.m6}</td>
                      <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">{spec.m8}</td>
                    </tr>
                  ))}
                  {/* Static rows for long values */}
                  <tr className="bg-gray-200 dark:bg-gray-800">
                    <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                        Access Mode</td>
                    <td colSpan="3" className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">Card only, card or pin, card and pin</td>
                  </tr>
                  <tr className="bg-gray-200 dark:bg-gray-800">
                    <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                        Access Pin Number Format</td>
                    <td colSpan="1" className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                        5 digit user num + 4 digit pin
                    </td>
                    <td colSpan="1" className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                        Public pin 4 digit
                    </td>
                    <td colSpan="1" className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                         User pin 4 digit
                    </td>
                  </tr>
                  <tr className="bg-gray-200 dark:bg-gray-800">
                    <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                        Big LCD Screen</td>
                    <td colSpan="3" className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">Resolution 128 x 64 | 4 text lines with 16 characters each line</td>
                  </tr>
                  <tr className="bg-gray-200 dark:bg-gray-800">
                    <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                       Wiegand Port
                    </td>
                    <td colSpan="3" className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                      1 input port (selectable WG26 or 34)
                    </td>
                  </tr>
                  <tr className="bg-gray-200 dark:bg-gray-800">
                    <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                      Push Button Input
                    </td>
                    <td colSpan="3" className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                      1 negative trigger input
                    </td>
                  </tr>
                  <tr className="bg-gray-200 dark:bg-gray-800">
                    <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                      Alarm Sensor Input
                    </td>
                    <td colSpan="3" className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                      1 negative trigger input
                    </td>
                  </tr>
                   <tr className="bg-gray-200 dark:bg-gray-800">
                    <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     Door Output (Dry Contact)
                    </td>
                    <td colSpan="3" className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     0.1-600 sec N.O/N.C, max 24V-1A
                    </td>
                  </tr>
                   <tr className="bg-gray-200 dark:bg-gray-800">
                    <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     Alarm Output (Open Collector)
                    </td>
                    <td colSpan="3" className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    0.1-600 sec, active low output
                    </td>
                  </tr>
                  <tr className="bg-gray-200 dark:bg-gray-800">
                    <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                       Reader RF Frequency
                    </td>
                    <td colSpan="3" className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                      125KHz or Mifare 13.56MHz
                    </td>
                  </tr>
                  <tr className="bg-gray-200 dark:bg-gray-800">
                    <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                       Reading Range
                    </td>
                    <td colSpan="3" className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                       Approx 10cm (4 inch)
                    </td>
                  </tr>
                  <tr className="bg-gray-200 dark:bg-gray-800">
                    <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                       Data Communication
                    </td>
                    <td colSpan="3" className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                      RS485-9600bps (N, 8, 1)
                    </td>
                  </tr>
                  <tr className="bg-gray-200 dark:bg-gray-800">
                    <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     Power Consumption
                    </td>
                    <td colSpan="3" className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                      10-24V, less than 3W
                    </td>
                  </tr>
                  <tr className="bg-gray-200 dark:bg-gray-800">
                    <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                       Dimension, Weight
                    </td>
                    <td colSpan="3" className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                       126 (H) x 91 (W) X 46 (D) mm, 210 gram
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            </section>
            
            {/* AR721U Wiegand Specification */}
            <section>
              <h2 className="dark:text-blue-400 font-bold text-xl text-black mb-4 mt-5">AR721U Wiegand Specification</h2>
                  <div className="overflow-x-auto border border-black">
                   <table className="w-full text-xs text-left">
                     <thead className="bg-gray-100 border-b border-black">
                        <tr className="bg-gray-200 dark:bg-gray-800">
                          <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                             RF frequency
                          </td>
                          <td colSpan="3" className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                             125KHz or Mifare 13.56MHz
                          </td>
                        </tr>
                        <tr className="bg-gray-200 dark:bg-gray-800">
                          <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                             Reading range
                          </td>
                          <td colSpan="3" className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                              5cm
                          </td>
                        </tr>
                        <tr className="bg-gray-200 dark:bg-gray-800">
                          <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                             Power Consumption	
                          </td>
                          <td colSpan="3" className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                             9-16V, less than 1.5W
                          </td>
                        </tr>
                        <tr className="bg-gray-200 dark:bg-gray-800">
                          <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                             Dimension, Weight
                          </td>
                          <td colSpan="3" className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                             113 (H) x 71 (W) X 36 (D) mm, 90 gram
                          </td>
                        </tr>
                      </thead>
                    </table>
                  </div>
            </section>
             
            {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#ff5f31] text-white  px-2 py-1 rounded">
                MAG
              </span>
              
              <span className="bg-[#ff5f31] text-white  px-2 py-1 rounded">
                Access Control System
              </span>
            </div>

            {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
            <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By MAG</h3>
             <ul className="space-y-4 text-gray-700 dark:text-gray-300">
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

export default AR727H;