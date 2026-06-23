import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const TM50 = () => {
  const productData = {
    title: "TM50 Touch Intuitive Touchscreen",
    subtitle: "Designed with a large, 5-inch touchscreen display to conveniently control Paradox panels.",
    description: "The Paradox TM50 is a sleek 5” touchscreen keypad that brings intuitive control and a vivid display to your Paradox security system, offering customizable features, remote upgrades, and multi-partition control in a compact design.",
    features: [
      "Thin, sleek design",
      "5.0 in. / 12.7 cm vivid color display (480 x 272 pixels)",
      "Intuitive, icon-based menus – no manual needed",
      "Control up to 8 PGM outputs",
      "In-field firmware upgradable via micro SD card",
      "Powerful advanced processor",
      "1x Zone/temperature input to connect a detection device or any external Temperature Sensor (10K OHM Thermistor)",
      "Customized translation via web application",
      "Surface-mount installation only; dimensions 14.4 x 9.6 x 1.4 cm (5.7 x 3.8 x 0.6 in.)"
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
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-9 gap-y-1 list-disc text-black ml-5 text-[15px]">
                  {productData.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </section>

                {/* Technical Spec Table */}
              <section className="overflow-x-auto">
                <h2 className="font-bold text-xl mb-4">Technical Specification:</h2>
                <table className="w-full text-[15px] text-black border-collapse border border-black">
                  
                   <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Power Input
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          9 to 15 VDC
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Consumption
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          150 mA at max brightness + 80 mA sounder
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Wire Connection
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          22 Gauge, 18 Gauge recommended
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Display
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          5” 480 x 272
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Dimensions
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          14.2 x 9.5 x 1.4 cm(5.6 x 3.75 x 0.56 in.)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Humidity
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          5-90%
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Indoor Temperature
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Yes
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          SD Card
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          4 GB; 2 GB free
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Input
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         Zone, configurable
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Tamper
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Built-in, cover and wall
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Compatibility
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Swan, EVO, Spectra, Magellan
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Remote Upgrade
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         Swan only
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Jpeg Download
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Swan via Bus, EVO / Spectra SD Card
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Auto Dim
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         Yes
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Chime
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Yes
                      </td>
                    </tr>
                    
                </table>
              </section>

              {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10 border-b py-5 border-b-gray-400">
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                PARADOX
              </span>
              
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                Intrusion/ Burglary Alarm Systems
              </span>
            </div>

            {/* SHARE SECTION */}
             <SocialShare title="Check out this product!" />

            </div>

            {/* Right Column: Sidebar */}
                     <div className="lg:col-span-1 space-y-8">
                         <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                       <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By PARADOX</h3>
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

export default TM50;