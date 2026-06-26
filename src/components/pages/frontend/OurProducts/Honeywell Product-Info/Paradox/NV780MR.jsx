import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';
import React from 'react';

const NV780MR = () => {
  const productData = {
    title: "NV780MR Digital Outdoor Dual Side-View Detector",
    subtitle: "A comprehensive perimeter protection that detects breaches before it occurs with its dual side-view protection.",
    description: "The NV780M detector is designed to provide a pre-entry protection solution, while keeping the perimeter free from movement, designed to protect exterior/interior walls and doors or windows. The NV780M rugged indoor/outdoor detector incorporates two double passive infrared side-by-side detectors (right and left view), independent of each other with separate anti-mask detection for each side. The optics are specially designed to provide multiple narrow beams for excellent detection covering up to 12m (40 ft) for each side.",
    features: [
      "Dual side anti-masking detection – Active IR detection, fast 20 seconds detection designed for outdoor detecting sprayed liquids and blocking items up to 25 cm (10 in.)",
      "Pet Immunity capability, up to 40 kg (90 lb)",
      "4 dual element sensors arrangement",
      "High efficiency long focal point (1.77 in.) LoDiff lens",
      "Combination optics – mirror and Fresnel Lens for optimal sharp detection",
      "Wireless frequency selection NV780MR support two internally selectable frequencies",
      "Single or Dual operation modes",
      "Optical and digital range adjustments",
      "Dual LED and buzzer indicators",
      "Wall-mount, with built-in level tool"
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
                          Sensor
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          4 x dual low noise rectangular elements
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Lens
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          2nd gen., flat 2x dual beam, 1.7 in. focal point, narrow beam long-range Fresnel lens
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Processing
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Digital APSP / Digital temperature compensation
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Anti-Mask
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Dual Active IR left / right with accelerated fast respond processing detecting blocking objects, sprayed materials and degradation
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Startup time
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         25 sec, with anti-mask calibration
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Detection speed
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          0.2m/sec – 4m/sec (0.6 ft/sec – 13.1 ft/sec)
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Power input
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          NV780MX 9 Vdc to 15 Vdc NV780MR 3x AA alkaline battery
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                        Current consumption
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          NV780MX Typical / Standby: 37 mA Max: 80 mA NV780MR 3 year battery life
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                        Coverage
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         Bi-directional, independent, 2 x 3m to 12m (9.8 ft to 39 ft) at 2.5m height
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          PET Immunity
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Up to 40 kg (90 lb) – requires min.1.5m (4.9 ft) installation height
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Installation height
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          1.5m and above
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Alarm indicator
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Red LED flashes for 3 sec., audible buzzer
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Anti-Mask indicator
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Orange LED flashes for 6 seconds, repeats every 60 sec.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Alarm output
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          NV780MX 2 Solid State, N.C., 150 mA Dual mode, in Single mode the relays operate together
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Anti-tamper switch
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          NV780MX N.C. 28 Vdc, 0.15A NV780MR Box and wall tamper detection
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          RF Frequency
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          NV780MR 433 MHz or 868 MHz, internally selectable.
                      </td>
                    </tr>
                   <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          RF Immunity
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Complies with EN 50130-4: 10V/m 80 MHz to 2.7 GHz
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Operating Temperature
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          -35°C to +50°C (-31°F to +122°F)
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Humidity
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          95% max.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Dimensions
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          L8.2 in. x W4.3 in. x D2.7 in. (21 cm x 11 cm x 7 cm)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Standards
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          EN 50131-2-2, Security Grade 2, EN 50130-5 Environmental Class IVA
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

export default NV780MR;