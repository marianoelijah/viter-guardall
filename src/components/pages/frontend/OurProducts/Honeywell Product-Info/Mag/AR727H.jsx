import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';

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
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
         AR727H Standard Controller with Built-In Reader
        </h1>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-lg my-10 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Left Column: Product Info */}
          <div className="lg:col-span-3">
            <p className="text-gray-800 text-[17px] mb-6">
              A cost-effective door access with manual keypad, LCD screen, and easy to use software. 
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
               SOYAL Standard system is the most affordable, best value PC based door, turnstile, 
               parking and elevator access control system in the market. Effectively control who 
               (card user) can enter where (door group) at what time (time zone) using what method
               (card and/or pin).
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
                        Access Mode</td>
                    <td colSpan="3" className="p-2 text-center text-black text-[17px]">Card only, card or pin, card and pin</td>
                  </tr>
                  <tr className="bg-gray-50 border-t border-black">
                    <td className="p-2 border-r border-black font-semibold text-black text-[17px]">
                        Access Pin Number Format</td>
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
                  <tr className="bg-gray-50 border-t border-black">
                    <td className="p-2 border-r border-black font-semibold text-black text-[17px]">
                        Big LCD Screen</td>
                    <td colSpan="3" className="p-2 text-center text-black text-[17px]">Resolution 128 x 64 | 4 text lines with 16 characters each line</td>
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
                      10-24V, less than 3W
                    </td>
                  </tr>
                  <tr className="bg-gray-200 border-t border-black">
                    <td className="p-2 border-r border-black font-semibold text-black text-[17px]">
                       Dimension, Weight
                    </td>
                    <td colSpan="3" className="p-2 text-center text-black text-[17px]">
                       126 (H) x 91 (W) X 46 (D) mm, 210 gram
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
                              5cm
                          </td>
                        </tr>
                        <tr className="bg-gray-200 border-t border-black">
                          <td className="p-2 border-r border-black font-semibold text-black text-[17px]">
                             Power Consumption	
                          </td>
                          <td colSpan="3" className="p-2 text-center text-black text-[17px]">
                             9-16V, less than 1.5W
                          </td>
                        </tr>
                        <tr className="bg-gray-200 border-t border-black">
                          <td className="p-2 border-r border-black font-semibold text-black text-[17px]">
                             Dimension, Weight
                          </td>
                          <td colSpan="3" className="p-2 text-center text-black text-[17px]">
                             113 (H) x 71 (W) X 36 (D) mm, 90 gram
                          </td>
                        </tr>
                      </thead>
                    </table>
                  </div>
            </section>
             
            {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-red-500 text-white  px-2 py-1 rounded">
                MAG
              </span>
              
              <span className="bg-red-500 text-white  px-2 py-1 rounded">
                Access Control System
              </span>
            </div>

            {/* SHARE SECTION */}
            <div className="mt-8">
              <p className="font-medium text-black mb-3">Share:</p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/facebook.png" alt="Facebook" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/gmail.png" alt="Gmail" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/telegram.png" alt="Telegram" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/viber.png" alt="Viber" className="w-full h-full object-contain p-1" />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
            <h3 className="text-xl font-bold text-black mb-4 border-b pb-1">More By MAG</h3>
            <ul className="text-xs space-y-4 text-gray-500 transition-colors">
              <li className='cursor-pointer hover:text-[#f08c09]'>Onity DirectKey with Serene</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>INR 415 256-Channel 12 Bay RAID Rackmount Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>GNR 340 100-Channel Tower Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>ENR 130 16-Channel Desktop Standalone NVR - No HDD Included</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>Z86 Outdoor Network Dome Camera with Night Vision</li>
            </ul>
          </div>

             {/* Contact Card */}
            <div
              className="bg-blue-600 text-white p-6 rounded shadow-md overflow-hidden relative min-h-[200px]"
              style={{
                backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(30, 64, 175, 0.8)), url('/src/assets/image/Our Products/quickalert.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="relative z-10 px-4 max-w-3xl">
                 <h3 className="text-xl font-semibold mb-3">
                   Secure Your Piece Of Mind Today
                 </h3>
                 <p className="text-lg mb-4">
                   Contact Guard-All now for a customized security solution
                   that protects what matters most.
                 </p>
              <button className="bg-blue-700 hover:bg-blue-400 text-white font-semibold px-4 py-2 rounded w-full">
                <NavLink to="/contacts" className="w-full h-full block">
                CONTACT US TODAY
                </NavLink>
              </button>
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