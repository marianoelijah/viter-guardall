import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';


const E3041 = () => {
  const productData = {
    title: "E3041 Hotel RFID Lock",
    subtitle: "A waterproof and stainless hotel lock that utilizes RFID/ keycards for room entry. ",
    description: "The Orbita Hotel Door Lock E3041 is made of grade 304 stainless steel with a PVC card reader cover, with strong resistance to impact, corrosion and abrasion. The door lock PCB is waterproof with stable and reliable quality. E3041 Door Lock can support other types of hotel management software, Fidelio/Opera, and Orbita wireless portable programmer for door lock setting, data collection and download functions. Certified by European CE and U.S. FCC, our products adopt the American standard 5-point tongue lock body with an anti-shim plunger design and an abnormal latch bolt alert for double security, stability and reliability. Functions such as door left open warning, low battery voltage warning, channel function and all-in-one function are available." , 
    features: [
      "Interface with most of the PMS system,Fidelio/Opera registered",
      "CE & FCC Certified",
      "Stainless steel color lasts more than 10 years",
      "ANSI Standard mortise",
      "Inside Deadbolt,Inside handle retracts latches and deadbolt",
      "Can be integrated with 16 public areas such as Lift/Parking/Swimming Pool/Sauna Room/Tennis Court/Gym…etc",
      "Mifare 1K card,compatible with Mifare Energy Saver",
      "Lost Guest Card suspension simply by issuing a new guest card with suspending function",
      "Low battery voltage warning (Lower than 4.8V).",
      "Self Error detecting by LED and “Beep”",
      "Passage Model function available"
    ],
    moreByBrand: [
      "Onity DirectKey with Serene",
      "MAD-401 and MAD-402 Series Addressable Modules",
      "INR 415 256-Channel 12 Bay RAID",
      "GNR 340 100-Channel Tower Standalone",
      "ENR 130 16-Channel Desktop Standalone NVR",
      "Z86 Outdoor Network Dome Camera"
    ]
  };

  return (
    <>
      <Header />
      <div className="bg-gray-300 min-h-screen font-sans text-slate-800">
        <header className="bg-[#7f95b8] text-white py-14 px-4 text-center">
          <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
            {productData.title}
          </h1>
        </header>

        <main className="max-w-6xl mx-auto bg-gray-200 shadow-xl my-10 p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-3">
              <p className="text-[15px] text-black mb-6">{productData.subtitle}</p>

              <section className="mb-10">
                <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 list-disc text-black ml-5 text-[15px]">
                  {productData.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </section>

                {/* Technical Spec Table */}
              <section className="overflow-x-auto">
                <h2 className="font-bold text-xl mb-4">Technical Specification:</h2>
                <table className="w-full text-[15px] text-black border-collapse border border-black">
                  
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Panel dimensions
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          L295*W76*D26 mm
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Material
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Grade 304 stainless steel
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Operating Voltage
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         DC 6V (4 AA dry batteries)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Operating Power
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Quiescent current: 30 μA; dynamic current: 200 mA
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Battery Life
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Provide up to 150,000 operations, and last over one year
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                        Working Environment
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         Temperature: -20 °C– 60°C; Relative Humidity: 20% – 90%
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                        Card Type
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         Mifare 1 card
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                        Low Voltage Warning
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        When the battery voltage is lower than 4.8V, a buzzer will beep.
                        After that, the lock lasts about 100 operations
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                        Activity Log
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Stores up to 1,680 pieces of logs (depending on the configuration)
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                        Mechanical Key
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Unlock by mechanic keys
                      </td>
                    </tr>
                    
                </table>
              </section>

              {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10 border-b py-5 border-b-gray-400">
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
               ORBITA
              </span>
              
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                Hotel Locking Systems and Hotel Safes
              </span>
            </div>

            {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

            </div>

            {/* Right Column: Sidebar */}
                     <div className="lg:col-span-1 space-y-8">
                         <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                       <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By ORBITA</h3>
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
                     </div>

          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default E3041;