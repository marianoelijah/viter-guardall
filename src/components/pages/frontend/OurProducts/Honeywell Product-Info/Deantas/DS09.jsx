import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';



// Shared Layout Component to maintain design consistency across all products
const ProductLayout = ({ title }) => {
  return (
    <>
    <Header />
    <div className="bg-gray-200 dark:bg-[#121214]  min-h-screen font-sans text-[#333] dark:text-gray-200 transition-colors duration-300">
      {/* Banner Header */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-centerbg-[#7f95b8] dark:bg-blue-950/70 text-center transition-colors duration-300">
        <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          {title}
        </h1>
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto shadow-xl p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Product Info */}
          <div className="lg:col-span-3 bg-gray-100 dark:bg-[#1e1e22] p-6 md:p-8 rounded-xl border border-transparent dark:border-gray-800 shadow-md transition-colors duration-300">
          
            {/* Technical Specifications Table */}
          <div className="p-6 shadow rounded border border-r divine-y ">
            <h2 className="font-bold text-2xl text-black dark:text-blue-400 transition-colors mb-8">
              Technical Specification:
            </h2>

            <table className="border text-[15px] w-full mb-10">
              <tbody>
                <tr>
                  <td colSpan="1" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center ">
                    Static Current
                  </td>
                  <td colSpan="5" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center ">
                     25μA
                  </td>
                </tr> 
                <tr>
                  <td colSpan="1" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center ">
                    Dynamic Current
                  </td>
                  <td colSpan="5" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center  ">
                     150mA
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center ">
                   Storage Temperature
                  </td>
                  <td colSpan="5" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center  ">
                    -25--+70°C
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center ">
                    Storage Humility
                  </td>
                  <td colSpan="5" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center  ">
                    10 -- 98%RH
                  </td>
                </tr> 
                <tr>
                  <td colSpan="1" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center ">
                    Operation Temperature
                  </td>
                  <td colSpan="5" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center  ">
                    -20 -- +70°C
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center ">
                    Operation Humidity
                  </td>
                  <td colSpan="5" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center  ">
                    15 -- 95%RH
                  </td>
                </tr> 
                <tr>
                  <td colSpan="1" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center ">
                    Swiping Range
                  </td>
                  <td colSpan="5" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center  ">
                    0--5cm
                  </td>
                </tr> 
                <tr>
                  <td colSpan="1" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center ">
                    Swiping Time
                  </td>
                  <td colSpan="5" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center  ">
                    0.1s
                  </td>
                </tr> 
                <tr>
                  <td colSpan="1" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center ">
                    Sensing Method
                  </td>
                  <td colSpan="5" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center  ">
                    RFID Contact-less Swipe
                  </td>
                </tr> 
                <tr>
                  <td colSpan="1" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center ">
                    Door Opening Time
                  </td>
                  <td colSpan="5" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center  ">
                    Swipe, press and hold handle to open, locks immediately after releasing. Locks also in 3-5s if no pressing.
                  </td>
                </tr>

                <tr>
                  <td colSpan="1" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center ">
                    Chip
                  </td>
                  <td colSpan="5" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center  ">
                    Mifare-1 Chip. With 2^32 (two to the power of 32) numbers of password combinations. Secure and reliable. Enable one-card-pass functionality.
                  </td>
                </tr> 
                <tr>
                  <td colSpan="1" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center ">
                    Power Source
                  </td>
                  <td colSpan="5" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center  ">
                    Four AA batteries are sufficient for more than 15,000 times of unlocking. When voltage is below 4.7V the lock will give sound and light warning after every swipe, and it is still fully functional for 100 unlocks.
                  </td>
                </tr> 
                <tr>
                  <td colSpan="1" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center ">
                    Opening Log
                  </td>
                  <td colSpan="5" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center  ">
                    Super large storage chip which can records the latest 900 unlocks 
                    (including mechanical key locks).
                  </td>
                </tr> 
                <tr>
                  <td colSpan="1" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center ">
                    Mechanical Key
                  </td>
                  <td colSpan="5" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center  ">
                    Spare mechanical Key as the back-up. Can be made as master key
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center ">
                    Door Ajar Warning
                  </td>
                  <td colSpan="5" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center  ">
                    If left the door ajar with latch pressed. The lock will give warning
                    sound for one minute.
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="border text-[15px] w-full">
              <tbody>
                <tr>
                  <td colSpan="5" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center ">
                    Standard Configuration Specifications:
                  </td>
                </tr> 
                <tr>
                  <td colSpan="1" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center ">
                     Handles
                  </td>
                  <td colSpan="5" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center  ">
                     Aluminium Alloy. Anti-Violence and pressure resistant structure, robust and durable 
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center ">
                    Handles Surface Treatment
                  </td>
                  <td colSpan="5" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center  ">
                    Enhanced by anodized oxidation to make it wear & corrosion resistant, resultin in a 
                    long usage life
                  </td>
                </tr> 
                <tr>
                  <td colSpan="1" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center ">
                    Motor
                  </td>
                  <td colSpan="5" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center  ">
                    Door lock specialized motor with reduction gearbox mechanism. Bringing high torque
                    output, fast reaction, stable transmission and long usage life
                  </td>
                </tr> 
                <tr>
                  <td colSpan="1" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center ">
                   Lock Body
                  </td>
                  <td colSpan="5" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center  ">
                    International Standard 625 and 70 lock body. Lock tongue and transmission parts are made of fine-casting 304 stainless steel
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center ">
                    Reader Panel
                  </td>
                  <td colSpan="5" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center  ">
                    Aluminium alloy frame with plastic cover
                  </td>
                </tr> 
                <tr>
                  <td colSpan="1" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center ">
                   Cylinder 
                  </td>
                  <td colSpan="5" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center  ">
                    Embedded 4-pinn cylinders
                  </td>
                </tr>
                 <tr>
                  <td colSpan="1" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center ">
                     Door Thickness
                  </td>
                  <td colSpan="5" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center  ">
                     35 - 70 mm Can be customized for other thicknesses
                  </td>
                </tr> 
              </tbody>
            </table>
          </div>
             
            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                DEANTAS
              </span>
            </div>

               {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
            <h3 className="font-bold text-black dark:text-blue-400 text-x mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">
              More By DEANTAS
            </h3>
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
                  className="inline-block w-full rounded-xl bg-[#0f3e90] px-2 py-3 text-center text-sm font-semibold tracking-wider text-white transition-colors hover:bg-[#ff5f31] sm:w-auto"
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
const DS09 = () => {
  const data = {
    title: "Deantas Smart Lock DS09 Model",
  };

  return <ProductLayout {...data}  />;
};

export default DS09;