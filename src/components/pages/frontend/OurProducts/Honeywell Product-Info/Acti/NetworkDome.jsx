import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';


const NetworkDome = () => {
  const specs = [
    { type: 'header', label: 'DEVICE' },
    { label: "Product Type", value: "Speed dome"},
    { label: "Maximum Resolution", value: "4 MP" },
    { label: "Environment", value: "Outdoor" },
    { label: "Image Sensor", value: "Progressive scan CMOS" },
    { label: "Sensor Size", value: "1/2.8″″" },
    { label: "Effective Pixels", value: "1945 x 1097 / 2.13 MP" },
    { label: "Day & Night", value: "Yes" },
    { label: "Low Light Sensitivity", value: "Extreme" },
    { label: "Minimum Illumination", value: "Color: 0.003 lux at F1.6 (AGC on); B/W: 0 (IR LED on)" },
    { label: "D/N Switch", value: "ISP-based switch, configurable" },
    { label: "Mechanical IR Cut Filter", value: "Yes" },
    { label: "IR Sensitivity Range", value: "700 to 1100 nm" },
    { label: "IR Wavelength", value: "850 nm" },

    { label: "Number of IR Leds", value: "6 x adaptive IR LEDs" },
    { label: "IR Working Distance", value: "492′ / 150 m" },
    { label: "Electronic Shutter", value: "Manual Mode: 1/32,000 to 1/5 secondsAuto Mode: 1/32,000 to 1/5 seconds" },
    { label: "Horizontal Resolution (TV Lines)", value: "1800 TVL" },
    { label: "S/N Ratio", value: "56 dB" },
  ];

  const productFeatures = [
    "Captures 1080p video at up to 60 fps",
    "62.7-2.7° horizontal field of view",
    "PoE or AC power",
    "Equipped with a heater, fan, and dehumidifier",
    "PTZ controls such as remote manual control, 256 preset points, 10 preset tours, and auto scan",
    "Supported PTZ protocols include Visca, Pelco D, Pelco P, and ACTi URL command",
    "H.264 and MJPEG video compression",
    "Simultaneous triple streams based on three configurations",
    "CBR and VBR",
    "Mechanical IR cut filter enables day and night functionality",
    "Image enhancements include white balance, brightness, contrast, sharpness, automatic gain control, flickerless, digital image stabilizer, and defogging",
    "145 dB wide dynamic range",
    "2D-DNR and 3D-DNR",
    "Auto focus",
    "Text overlay",
    "Image flip and mirror",
    "20 configurable 3D privacy masks for areas you don’t want recorded",
    "Built-in analytics include face detection, object based motion detection, tampering detection, shock detection, PTZ auto tracking, object line crossing detection, object enter area detection, missing object detection, unattended object detection, and object loitering detection",
    "VMS-based analytics include object line counting, people counting, face detection, object based motion detection, tamper, object line crossing detection, object enter area detection, missing object detection, unattended object detection, smoke detection, heat map, dwell time, direction detection, automatic license plate recognition, and people queue detection",
    "Fully compatible with ACTi software",
    "Supports IVS (intelligent video)",
    "Network security includes IP address filtering, HTTPS encryption, password protected user level, anonymous login, and IEEE 802.1X network access control",
    "Manual GPS setting",
    "Cable with terminal block for digital inputs and outputs",
    "High PoE injector included",
    "IP66-, NEMA 4X-, and IK10-rated metal enclosure that is suitable for use in outdoor areas at risk of vandalism ",
    "Scratch-resistant and water-repellent lens glass",
  ];

  return (
    <>
    <Header />
     <div className="bg-gray-200 dark:bg-[#121214] min-h-screen font-sans text-[#333] dark:text-gray-200 transition-colors duration-300">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-6 text-center transition-colors duration-300">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          I915 2MP Outdoor PTZ Network Dome Camera with Night Vision and Heater
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 lg:col-span-8 bg-gray-100 dark:bg-[#1e1e22] p-6 md:p-8 rounded-xl border border-transparent dark:border-gray-800 shadow-md transition-colors duration-300">
            <p className="text-[15px] text-gray-800 dark:text-gray-300 mb-6 font-medium transition-colors">
                A pan-tilt-zoom surveillance camera that can capture videos up to 60fps.
            </p>

            <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Description:</h2>
              <p className="text-[15px] text-gray-800 dark:text-gray-300 mb-6 font-medium transition-colors">
                The I915 2MP Outdoor PTZ Network Dome Camera with Night Vision & Heaterfrom ACTi has a 1/2.8″ progressive scan CMOS sensor to capture 1920 x 1080 resolution video at up to 60 fps. Its 4.6-165.6mm varifocal lens delivers a 62.7-2.7° horizontal field of view. Additionally, PTZ functionality delivers 360° endless panning, a -20-200° tilting range, and 36x optical zoom. Two-way audio communication is possible thanks to a line input and output. A built-in card slot supports microSDHC/SDXC cards. microSDHC/SDXC are available separately. Integrated PoE technology simplifies connectivity by transferring data and power over one cable.
              </p>

            <section className="mb-8 mt-3">
               <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] text-gray-800 dark:text-gray-300 space-y-1 transition-colors">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            </section>

            {/* Technical Specifications Table */}
                       <section>
                         <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Technical Specification:</h2>
                         <div className="border border-gray-500 overflow-hidden">
                           <table className="w-full text-left text-xs border-collapse">
                             <tbody>
                               {specs.map((item, idx) => (
                                 <React.Fragment key={idx}>
                                   {item.type === 'header' ? (
                                     <tr className="bg-gray-200">
                                       <th colSpan="2" className="p-2 border-b border-gray-500 text-[15px] text-black font-bold uppercase tracking-wider">
                                         {item.label}
                                       </th>
                                     </tr>
                                   ) : (
                                     <tr className={idx % 2 === 0 ? 'bg-gray-600' : 'bg-gray-800'}>
                                       <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                                         {item.label}
                                       </td>
                                       <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                                         {item.value}
                                       </td>
                                     </tr>
                                   )}
                                 </React.Fragment>
                               ))}
                             </tbody>
                           </table>
                         </div>
                       </section>
            
             
            {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                ACTI
              </span>
              
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                CCTVs
              </span>
            </div>

            {/* SHARE SECTION */}
             <SocialShare title="Check out this product!" />

        </main>

          {/* Sidebar */}
              <aside className="lg:w-1/4 space-y-6"> 
                     <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded-xl shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
                        <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">
                          More By ACTI
                          </h3>
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
            
                </aside>
        </div>
    </div>
    <Footer />
    </>
   
  );
};

export default   NetworkDome;