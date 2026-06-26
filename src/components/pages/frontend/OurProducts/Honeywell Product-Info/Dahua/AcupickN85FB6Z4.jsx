import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';
import React from 'react';


// Shared Layout Component to maintain design consistency across all products
const ProductLayout = ({ title, subtitle, description, features, specs, sidebarItems }) => {
  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-slate-800">
      {/* Banner Header */}
      <header className="bg-[#7f95b8] text-white py-14 px-4 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          {title}
        </h1>
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-xl my-10 p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Product Info */}
          <div className="lg:col-span-3">
            <p className="text-[17px]  text-black mb-6">{subtitle}</p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
              <p className="text-[17px] text-black leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] text-black space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>

             {/* Technical Specifications Table */}
              <div className="bg-gray-300 p-6 shadow rounded border border-r divine-y">
            <h2 className="font-bold text-black text-xl mb-4">Technical Specification</h2>

            <table className="w-full border text-[15px] text-black">
              <tbody>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                      Model
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     N85FB6Z4
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Innovative Features
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                      ProSeries, WizMind, AcuPick
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Image Sensor
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     1/1.8 -in. 4K (8MP) CMOS
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Lens
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     2.7 mm to 12 mm, MotorizedN85FB6Z4 Bullet: 8 mm-32 mm
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Minimum Illumination
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Starlight+Color: 0.0008 lux at F1.80 lux at F1.8 (IR on)F1.6: N85FB6Z4
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Maximum IR Distance
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     197 ft (60 m): Bullet N85FB7Z, 393.70 ft(120 m): Bullet N85FB6Z4, 131 ft (40 m):Dome, Eyeball
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Video Compression (Main Stream)
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                      AI Coding, Smart H.265+, H.265, SmartH.264+, H.264, H.264B, H.264H (MJPEGsubstream)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Maximum Resolution
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     8MP (3840 x 2160)
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Intelligent Video
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Premium IVS, Analytics+ Functions — AcuPick,EPTZ, Perimeter Protection, Smart PlanSchedule, People Counting, Face Detection,SMD+, AI SSA, Queue Mgt
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                   Audio In/Out
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    1/1 + Built-in Microphone: Bullet, DomeMicrophone Only: Eyeball
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                      Memory Slot
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                      Micro SD,Max 256GB
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                   Alarm In/Out
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    2/1: Dome, Bullet
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                      Environmental Protection
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     IP67, (IK10 Bullet, Dome)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Working Temperature
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    -40°F to 140°F (-40°C to 60°C): N85FB7ZBullet, Dome; -22°F to 140°F (-30°C to60°C) Eyeball, N85FB6Z4 Bullet
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Power
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   12 VDC, PoE (802.3af, Class 0), ePoEMax PoE: 12.2 W: Dome; 9.0 W:Eyeball; 12.8 W: Bullet
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
             <div className="bg-gray-300 p-4 border border-black  border-r mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By DAHUA</h3>
           <ul className="space-y-4 text-gray-700">
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
const AcupickN85FB6Z4 = () => {
  const data = {
    title: "AcuPick N85FB6Z4 8MP Outdoor Network ePoE Bullet Camera",
    subtitle: "With a varifocal lens for a wider field of view, this surveillance camera also has two-way audio thanks to its built-in microphone.",
    description: "Monitor an indoor or outdoor area with the N85EFN2 8MP ePoE Night Color 2.0 Network Bullet Camera from Dahua Technology. This unit uses a 1/1.2″ progressive scan CMOS sensor to capture 4K UHD resolution video at 30 fps. Four white-light LEDs provide up to 131′ of illumination to record full color video in low-light conditions. The camera’s 2.8mm fixed lens delivers a 112° horizontal field of view. Two-way audio is possible thanks to a built-in speaker and microphone, along with an RCA audio input and output. A memory card slot supports microSD cards up to 256GB (available separately). Integrated ePoE technology offers a cost-effective solution for transmitting power and data over long distances via Ethernet or coaxial cables when compared to running separate wires.",
    features: [
      "3840 x 2160 Resolution at 30 fps",
      "4 White LEDs for Illumination up to 131′",
      "2.8mm Fixed Lens",
      "112° Horizontal Field of View",

      "Two-Way Audio",
      "Supports microSD Cards up to 256GB",
      "RJ45 with Enhanced Power over Ethernet",
      "Complies with ONVIF Profiles G, S & T",
      "IP67 Rated for Outdoor Use"
    ],

  };

  return <ProductLayout {...data} />;
};

export default AcupickN85FB6Z4;