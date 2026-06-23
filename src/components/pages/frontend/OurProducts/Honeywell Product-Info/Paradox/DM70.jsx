import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const DM70 = () => {
  const productData = {
    title: "DM70 High-Security Motion Detector Module with Pet Immunity",
    subtitle: "A high-security detector that offers protection against intruders while ignoring pets up to 40kg. ",
    description: "Paradox DM70 is a high-security dual optic motion detector module compatible with Paradox Digiplex EVO panels. It is immune to pets weighing up to 40kg (90lbs). It connects to the EVO combus, and features 2 dual opposed element sensors, and Paradox’s Digital Shield algorithm software to improve reliability and reduce false alarms.",
    features: [
      "Dual optics (2 dual opposed element sensors)",
      "Provides superior pet immunity using a patented combination of advanced optics and digital processing technologies",
      "Immune to pets weighing up to 40kg (90lbs)",
      "Patented Digital Motion Detection (no analogue circuitry)",
      "Digital Auto Pulse Signal Processing",
      "Digital Shield algorithm software",
      "Metal shield maximizes protection from EMI and RFI signals",
      "Optical and digital range adjustments",
      "Dual LED and buzzer indicators",
      "10.5m (35ft) X 10.5m (35ft) range with 90° viewing angle"
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
                          Infrared Sensor type
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          2 Dual elements
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Sensor geometry
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Rectangular
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Detection speed
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          0.2m to 3.5 m/s (0.6 ft to 11.5 ft/s)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Operating temperature
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          -20°C to +50°C(-4°F to +122°F)
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Voltage input
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         9-16 Vdc.
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Current Consumption
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          16 mA (typical); 30 mA (maximum)
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          RFI/EMI rejection
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          10 V/m
                      </td>
                    </tr>
                     <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Lens
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          2nd Generation Fresnel lens*
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                        Coverage – 90° viewing angle
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                         11m X 11m (35ft X 35ft)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Installation height
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          2m to 2.7m (7ft to 9ft)
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Alarm indication
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Red LED, constant light for 5 sec.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                         Movement signal indication
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Red LED, 0.25 sec.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Non-movement signal indication
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Green LED, 0.25 sec. (lights when RFI / EMI rejected)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold w-1/2">
                          Alarm output/ Tamper switch
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Via Communication Network
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

export default DM70;