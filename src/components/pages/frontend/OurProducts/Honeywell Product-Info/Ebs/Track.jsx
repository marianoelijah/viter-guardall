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
      <div className="bg-gray-200 dark:bg-[#121214] min-h-screen font-sans text-[#333] dark:text-gray-200 transition-colors duration-300">
        <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-6 text-center transition-colors duration-300">
          <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
            {productData.title}
          </h1>
        </header>

        <main className="max-w-6xl mx-auto shadow-xl my-10 p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-3 bg-gray-100 dark:bg-[#1e1e22] p-6 md:p-8 rounded-xl border border-transparent dark:border-gray-800 shadow-md transition-colors duration-300">
              <p className="text-[17px] text-gray-800 dark:text-gray-300 mb-6 font-medium transition-colors">
                {productData.subtitle}
              </p>
              
              <section className="mb-8">
                <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
                  Product Description:
                </h2>
                <p className="text-[17px] text-gray-800 dark:text-gray-300 mb-6 font-medium transition-colors">
                  {productData.description}
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
                  Product Features:
                </h2>
                <ul className="list-disc ml-5 text-[17px] text-gray-800 dark:text-gray-300 space-y-1 transition-colors">
                  {productData.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </section>

                {/* Technical Spec Table */}
              <section className="overflow-x-auto">
                <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
                  Technical and System Specification:
                </h2>
                <table className="w-full text-[15px] text-black border-collapse border border-black">
                  
                   <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        Reader type
                      </td>
                      <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        Proximity RFID
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        Frequency and standard
                      </td>
                      <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        125kHz, unique
                      </td>
                    </tr>
                     <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        RFID read-out distance
                      </td>
                      <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                       3-4cm (depends on transponder type)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                       GSM module
                      </td>
                      <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        U-Blox Leon G-100 (850/900/1800/1900 MHz)
                      </td>
                    </tr>

                     <tr className="bg-gray-200">
                      <td colSpan="5" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                       GPS MODULE
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        Channels
                      </td>
                      <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        50 channel u-blox 6 engine
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                       A-GPS online/offline support
                      </td>
                      <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        YES
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        Position accuracy
                      </td>
                      <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        2,5 m
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                       TTFF hot start acquisition time
                      </td>
                      <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        1 s average
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        TTFF cold start acquisition time
                      </td>
                      <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        27 s average
                      </td>
                    </tr>

                     <tr className="bg-gray-200">
                      <td colSpan="5" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                         ELECTRICAL CHARACTERISTICS
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        Power supply
                      </td>
                      <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        5V/1A
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        Power socket
                      </td>
                      <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        Standardised Micro USB type B plug
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        Battery
                      </td>
                      <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        Li-Polymer, 2400 mAh
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                       Battery working time after charging
                      </td>
                      <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        24 hours
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        Casing protection rating
                      </td>
                      <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        IP67
                      </td>
                    </tr>

                    <tr className="bg-gray-200">
                      <td colSpan="5" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                         PHYSICAL CHARACTERISTICS
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        Dimensions (HxWxT)
                      </td>
                      <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        121x60x30 mm
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        Housing
                      </td>
                      <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        The waterproof and shock-resistant housing
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        Weight
                      </td>
                      <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        150g (GPS device) 30g (charger)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                       Motion sensor
                      </td>
                      <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        3-axis motion sensor (accelerometer)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                       Interfaces & general features
                      </td>
                      <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                       Internal speaker and microphone4 buttons for easy operatingAmbient operating temperature: -20°C to +60°CBased on durability-assumptions for Active GuardData transmission via GPRS (TCP, IP), SMS to OSM.2007Voice callSilent callRemote administration & firmware update
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                       Configuration
                      </td>
                      <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        Local: PC through RS232 link (LX cable and AGP3 programmer required)Remote: via GPRS, SMS, CSD
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        Alarm events buffer size
                      </td>
                      <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        1000
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                       Quantity of system events stored in history
                      </td>
                      <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        2000
                      </td>
                    </tr>
                </table>
              </section>

              {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10 border-b py-5 border-b-gray-400">
              <span className="bg-[#ff5f31] text-white text-sm px-4 py-2 rounded">
               EBS
              </span>
              
              <span className="bg-[#ff5f31] text-white text-sm px-4 py-2 rounded">
                Guard Tour Systems
              </span>
            </div>

            {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

            </div>

            {/* Right Column: Sidebar */}
                     <div className="lg:col-span-1 space-y-8">
                         <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded-xl shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
                       <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By EBS</h3>
                        <ul className="space-y-4 text-gray-700 dark:text-gray-300">
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
                  className="inline-block w-full rounded-xl bg-[#0f3e90] px-2 py-3 text-center text-sm font-semibold tracking-wider text-white transition-colors hover:bg-[#ff5f31] sm:w-auto"
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

export default Track;