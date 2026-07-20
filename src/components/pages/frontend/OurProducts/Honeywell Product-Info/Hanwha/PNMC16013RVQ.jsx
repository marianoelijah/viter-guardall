import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';



// Shared Layout Component to maintain design consistency across all products
const ProductLayout = ({ title, subtitle, description, features }) => {
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
              <p className="text-[17px] text-gray-680 leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] text-gray-680 space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>

             {/* Technical Specifications Table */}
          <div className="bg-gray-300 p-6 shadow rounded border border-r divine-y">
            <h2 className="font-bold text-black text-xl mb-4">Technical Specification</h2>

            <table className="w-full border text-[15px] text-black border-black">
              <tbody>

            <tr>
              <td colSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                VIDEO
              </td>
            </tr>    

          {/* Imaging Device */}
            <tr>
              <td rowSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Imaging Device
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Size
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                1/2.8"
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Type
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                CMOS
              </td>
            </tr>

          
            <tr>
              <td className="bg-gray-50 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Resolution
              </td>
              <td colSpan={2} className="p-4 text-black border-black border align-middle border-b  leading-relaxed ">
                2592x1520, 1920x1080, 640x360
              </td>
            </tr>

           
            <tr>
              <td rowSpan={2} className="bg-gray-200 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Max. Framerate
              </td>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                 H.265/H.264
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                15fps/15fps(60Hz/50Hz)
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                MJPEG
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                15fps(@4MP Max. 5fps)
              </td>
            </tr>

            <tr>
              <td rowSpan={2} className="bg-gray-200 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Min. Illumination (Lux)
              </td>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                 Color(1/30sec, 30IRE)
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                 0.05
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                BW(1/30sec, 30IRE)
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                0.005
              </td>
            </tr>

            <tr>
              <td className="bg-gray-50 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Video Out
              </td>
              <td colSpan={2} className="p-4 text-black border-black border align-middle border-b  leading-relaxed ">
                USB: Micro USB Type B. Preview and installation ONLY. Requires WiFi dongle.
              </td>
            </tr>

            {/* LENS */}

            <tr>
              <td colSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                LENS
              </td>
            </tr>   

             <tr>
              <td colSpan={2} className="bg-gray-300 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Focal Length (mm)
              </td>
              <td colSpan={3} className="p-4 text-black border-black border align-middle border-b  leading-relaxed ">
                3.19
              </td>
            </tr>
             <tr>
              <td rowSpan={1} className="bg-gray-100 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Max Aperture Ratio (F number)
              </td>
              <td className="p-4 text-black border-black border align-middle border-b  leading-relaxed ">
                Wide
              </td>
              <td className="p-4 text-black border-black border align-middle border-b  leading-relaxed">
               1.2
              </td>
            </tr>

             {/*  Angular Field of View */}
            <tr>
              <td rowSpan={2} className="bg-gray-50 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Angular Field of View
              </td>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Horizontal
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                97°
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Vertical
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                54°
              </td>
            </tr>

            <tr>
              <td colSpan={2} className="p-4 text-gray-600  align-middle border-b border-r border-black">
                Min. Object Distance
              </td>
              <td colSpan={3} className="p-4 text-black border-black border align-middle border-b ">
                2m(6.56ft)
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="p-4 bg-gray-50 text-gray-600 align-middle border-b border-r border-black">
                Focus Control
              </td>
              <td colSpan={3} className="p-4 text-black border-black border align-middle border-b ">
                Manual
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Lens Type
              </td>
              <td colSpan={3} className="p-4 text-black border-black border align-middle border-b ">
                Fixed iris
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Mount Type
              </td>
              <td colSpan={3} className="p-4 text-black border-black border align-middle border-b ">
                M12
              </td>
            </tr>

            <tr>
              <td colSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                ENVIRONMENTAL & ELECTRICAL
              </td>
            </tr>

               {/*  OPERATING CONDITION */}
            <tr>
              <td rowSpan={2} className="bg-gray-50 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Operating Condition
              </td>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Temperature
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
               -40°C~+55°C(-40°F~+131°F)
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Humidity
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                0~90% RH(non-condensing)
              </td>
            </tr>

             <tr>
              <td rowSpan={2} className="bg-gray-50 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Storage Condition
              </td>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Temperature
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                -50°C~+60°C(-58°F~+140°F)
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Humidity
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                0~90% RH(non-condensing)
              </td>
            </tr>

             <tr>
              <td colSpan={2} className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Input Voltage
              </td>
              <td colSpan={3} className="p-4 text-black border-black border align-middle border-b ">
                PoE+(IEEE802.3at, Class4)
              </td>
            </tr>

            <tr>
              <td rowSpan={2} className="bg-gray-50 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Power Consumption
              </td>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                PoE
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
               Max. 23.5W, typical 13W
              </td>
            </tr>
           
              </tbody>
            </table>
          </div>
            

            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
                HANWHA VISION
              </span>
              
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
                CCTVs
              </span>
            </div>

               {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 p-4 border border-black  border-r mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By HANWHA</h3>
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
const PNMC16013RVQ = () => {
  const data = {
    title: "PNM-C16013RVQ",
    subtitle: "4CH mini AI Camera / 4MP x 4 AI IR Mini Multi-directional Dome Camera",
    description: "The PNM-C16013RVQ is an extremely compact, lightweight, and high-performance multi-directional AI network dome camera designed for comprehensive 360° surveillance in both indoor and outdoor environments. Equipped with four independent 4MP image sensors, it allows operators to securely monitor four different directions simultaneously from a single IP address.",
    features: [
      "4CH AI based Analytics events - classified object (Person/Face/Vehicle/License plate)",
      "AI based loitering detection and line crossing detection",
      "AI based WiseNRII, Auto prefer shutter control, WiseStream111",
      "IR viewable lenght 20m (65.6 ft)",
      "Supports hallway mode",
      "15fps@4MP",
      "3.19MM Fixed lens",
      "Next level cybersecurity (TPM 2.0, FIPS 140-2 certified)",
      "Reinforced duravility (IP66, NEMA4X, IK09)",
    ],



  };

  return <ProductLayout {...data} />;
};

export default PNMC16013RVQ;