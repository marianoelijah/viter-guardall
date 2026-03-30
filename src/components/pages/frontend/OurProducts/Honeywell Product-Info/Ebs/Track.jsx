import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const Track = () => {
  const productData = {
    title: "EBS: ACTIVE TRACK",
    subtitle: "An easy-to-carry device that combines GPS, RFID, and 4G for remote employee monitoring. ",
    description: "ACTIVE TRACK 2 devices are a traditional solution for remote employee monitoring. It is equipped with a GPS and RFID receiver designed to work on the frequencies of the 2G and 4G telecommunications network",
    features: [
      "Two-way voice communication. ActiveTrack can be used as a mobile phone. It is possible to connect to 4 numbers;",
      "Reading tags (checkpoints): the device sends the “Checkpoint” event to the server (depending on the Active Track model, in real time or periodically);",
      "Panic button: calling for help in emergency situations;",
      "MAN-DOWN: function of detecting employee’s immobility;",
      "A-GPS: technology supporting GPS, enabling faster location;",
      "Tamper alarm: SHOCK function informing about hitting the device;",
      "TILT: function of detecting the device’s deviation from the programmed position,Time trackingIntuitive user friendly interface",
      "Ability to send SMS directly from the device to a mobile phone;",
      "Increased durability casing;",
      "Vibration when transmitting signals;",
      "Waterproofness of the device;",
      "Operating time on main battery up to 44 hours",
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
          <h1 className="text-4xl md:text-5xl font-bold max-w-5xl mx-auto uppercase tracking-wider">
            {productData.title}
          </h1>
        </header>

        <main className="max-w-6xl mx-auto bg-gray-200 shadow-xl my-10 p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-3">
              <p className="text-[15px] text-black mb-6">{productData.subtitle}</p>
              
              <section className="mb-8">
                <h2 className="font-bold text-xl text-black mb-2 border-b-2 border-gray-100 pb-1 inline-block">Product Description:</h2>
                <p className="text-base text-black leading-relaxed mt-2">{productData.description}</p>
              </section>

              <section className="mb-10">
                <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 list-disc text-black ml-5 text-[15px]">
                  {productData.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </section>

                {/* Technical Spec Table */}
              <section className="overflow-x-auto">
                <h2 className="font-bold text-xl mb-4">Technical and System Specification:</h2>
                <table className="w-full text-[15px] text-black border-collapse border border-black">
                  
                   <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Reader type
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Proximity RFID
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Frequency and standard
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        125kHz, unique
                      </td>
                    </tr>
                     <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        RFID read-out distance
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       3-4cm (depends on transponder type)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       GSM module
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        U-Blox Leon G-100 (850/900/1800/1900 MHz)
                      </td>
                    </tr>

                     <tr>
                      <td colSpan="5" className="border border-black p-3 font-bold w-1/2">
                       GPS module
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Channels
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        50 channel u-blox 6 engine
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       A-GPS online/offline support
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        YES
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Position accuracy
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        2,5 m
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       TTFF hot start acquisition time
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        1 s average
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        TTFF cold start acquisition time
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        27 s average
                      </td>
                    </tr>

                     <tr>
                      <td colSpan="5" className="border border-black p-3 font-bold w-1/2">
                         Electrical characteristics
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Power supply
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        5V/1A
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Power socket
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Standardised Micro USB type B plug
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Battery
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Li-Polymer, 2400 mAh
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       Battery working time after charging
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        24 hours
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Casing protection rating
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        IP67
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="5" className="border border-black p-3 font-bold w-1/2">
                         Physical characteristics
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Dimensions (HxWxT)
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        121x60x30 mm
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Housing
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        The waterproof and shock-resistant housing
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Weight
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        150g (GPS device) 30g (charger)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       Motion sensor
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        3-axis motion sensor (accelerometer)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       Interfaces & general features
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       Internal speaker and microphone4 buttons for easy operatingAmbient operating temperature: -20°C to +60°CBased on durability-assumptions for Active GuardData transmission via GPRS (TCP, IP), SMS to OSM.2007Voice callSilent callRemote administration & firmware update
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       Configuration
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Local: PC through RS232 link (LX cable and AGP3 programmer required)Remote: via GPRS, SMS, CSD
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Alarm events buffer size
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        1000
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       Quantity of system events stored in history
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        2000
                      </td>
                    </tr>
                </table>
              </section>

              {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10 border-b py-5 border-b-gray-400">
              <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
               EBS
              </span>
              
              <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
                Guard Tour Systems
              </span>
            </div>

            {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

            </div>

            {/* Right Column: Sidebar */}
                     <div className="lg:col-span-1 space-y-8">
                         <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                       <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By EBS</h3>
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

export default Track;