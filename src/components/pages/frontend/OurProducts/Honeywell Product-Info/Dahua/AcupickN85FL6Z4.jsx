import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';


// Shared Layout Component to maintain design consistency across all products
const ProductLayout = ({ title, subtitle, description, features, specs, sidebarItems }) => {
  return (
    <>
    <Header />
    <div className="bg-gray-200 dark:bg-[#121214] min-h-screen font-sans text-[#333] dark:text-gray-200 transition-colors duration-300">
      {/* Banner Header */}
      <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-6 text-center transition-colors duration-300">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          {title}
        </h1>
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto shadow-xl my-10 p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Product Info */}
          <div className="lg:col-span-3 dark:bg-[#1e1e22] p-6 md:p-8 rounded-xl border border-transparent dark:border-gray-800 shadow-md transition-colors duration-300">
            <p className="text-[17px] text-gray-680 leading-relaxed whitespace-pre-line mb-3">{subtitle}</p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Description:</h2>
              <p className="text-[17px] text-gray-680 leading-relaxed whitespace-pre-line mb-3">
                {description}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] text-gray-800 dark:text-gray-300 space-y-1 transition-colors">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>

             {/* Technical Specifications Table */}
              <div className="p-6 shadow rounded border border-r divine-y">
            <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Technical Specification</h2>

            <table className="w-full border text-[15px] text-black">
              <tbody>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                      Model
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                      N85FL64Z
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Innovative Features
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    ProSeries, WizMind, AcuPick
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Image Sensor
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   1/1.8 -in. 4K (8MP) CMOS
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Lens
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    2.7 mm to 12 mm, MotorizedN85FB6Z4 Bullet: 8 mm-32 mm
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Minimum Illumination
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Starlight+Color: 0.0008 lux at F1.80 lux at F1.8 (IR on)F1.6: N85FB6Z4
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Maximum IR Distance
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    197 ft (60 m): Bullet N85FB7Z, 393.70 ft(120 m): Bullet N85FB6Z4, 131 ft (40 m):Dome, Eyeball
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Video Compression (Main Stream)
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    AI Coding, Smart H.265+, H.265, SmartH.264+, H.264, H.264B, H.264H (MJPEGsubstream)
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Maximum Resolution
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     8MP (3840 x 2160)
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Intelligent Video
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Premium IVS, Analytics+ Functions— Perimeter Protection, PeopleCounting, Face Detection, Smart MotionDetection+
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Audio In/Out
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    1/1 + Built-in Microphone: Bullet, DomeMicrophone Only: Eyeball
                  </td>
                </tr>
                 <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Memory Slot
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     	Micro SD,
                        Max 256GB
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Alarm In/Out
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    1/1: Bullet, DomeN/A: Eyeball
                  </td>
                </tr>
                 <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Environmental Protection
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     IP67, (IK10 Bullet, Dome)
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Working Temperature
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    -40° F to 140° F(-40° C to 60° C)
                  </td>
                </tr>
                 <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Power
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    12 VDC ±30%, PoE (802.3af, Class 0),or ePoEPoE Max: 9.4 W: Bullet; 10.5 W: Eyeball
                  </td>
                </tr>
               
              </tbody>
            </table>
                </div>
            

            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                DAHUA
              </span>
              
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                CCTVs
              </span>
            </div>

               {/* SHARE SECTION */}
             <SocialShare title="Check out this product!" />

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="font-bold text-l text-black dark:text-blue-400 mb-2 transition-colors">
            <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By DAHUA</h3>
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

            {/* Blue CTA Card */}
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
      </main>
    </div>
    <Footer />
    </>
    
  );
};

// Example Usage for the Hirsch M64 Controller
const AcupickN85FL6Z4 = () => {
  const data = {
    title: "AcuPick N85FL6Z4 8MP Outdoor Network ePoE Dome Camera",
    subtitle: "With built-in integrated ePoE, this cost-effective camera has a varifocal lens for a wide, horizontal field of view. ",
    description: "Monitor your surroundings with the AcuPick N85FL6Z4 8MP Outdoor Network ePoE Dome Camera from Dahua Technology. This unit uses a 1/1.8″ progressive scan CMOS sensor to capture 3840 x 2160 resolution video at 30 fps. Three IR LEDs provide up to 262′ of night vision. The camera’s 8-32mm motorized varifocal lens delivers a 42 to 15° horizontal field of view. Two-way audio is possible thanks to a built-in microphone, along with an audio input and output. A memory card slot supports microSD cards up to 512GB (available separately). Integrated ePoE technology offers a cost-effective solution for transmitting power and data over long distances via Ethernet or coaxial cables when compared to running separate wires.",
    features: [
      "3840 x 2160 Resolution at 30 fps",
      "IR LEDs for Night Vision up to 262′",
      "8-32mm Motorized Varifocal Lens",
      "42 to 15° Horizontal Field of View",

      "Two-Way Audio",
      "Supports microSD Cards up to 256GB",
      "RJ45 with Enhanced Power over Ethernet",
      "Complies with ONVIF Profiles G, S & T",
      "IP67 Rated for Outdoor Use",
      "IK10-Rated Vandal Resistance"
    ],

  };

  return <ProductLayout {...data} />;
};

export default AcupickN85FL6Z4;