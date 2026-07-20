import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const PNM9085RQZ1 = () => {
  const productFeatures = [
    "Motorized PTRZ Support",
    "Maximum 30fps@5MP (H.265, H.264)",
    "413 -9.4mm(2.3x) motorized varifocal lens",
    "IR viewable lenght : 30m (98.43ft)",
    "H.265, H.264, MJPEG codec, Multi streaming",
    "Video analytics, WiseStream111",
    "IP66, IK10, NEMA4X"
  ];

  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
        {/* Blue Header Banner */}
        <header className="bg-[#8ba4ca] text-white py-12 px-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            PNM-9085RQZ1
          </h1>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="lg:w-3/4 bg-gray-300 p-8 shadow-sm">
            <p className="text-[15px] text-black mb-6">
                
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
              <p className="text-[15px] text-black leading-relaxed mb-4">
                 The PNM-9085RQZ1 is a multi-technology credential that combines OmniClass® and HID Prox technologies in a single card. 
                 It is designed for use in access control systems, providing enhanced security and flexibility. 
                 The credential is available in various formats, including cards, key fobs, and stickers, making it suitable for a wide range of applications. 
                 The PNM-9085RQZ1 is a high-performance, 20-megapixel multi-sensor network dome camera designed for comprehensive, large-scale outdoor surveillance deployments. 
                 Utilizing four independent 5MP image sensors running through a single IP address, 
                 this camera eliminates the need for multiple independent devices by capturing distinct view angles simultaneously.
              </p>

              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-[15px] text-black space-y-1">
                {productFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
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
                1/1.8"
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

            {/* Resolution */}
            <tr>
              <td className="bg-gray-50 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Resolution
              </td>
              <td colSpan={2} className="p-4 text-black border-black border align-middle border-b  leading-relaxed ">
                2560x1920, 2560x1440, 1920x1080, 1600x1200, 1280x1024, 1280x960, 1280x720, 1024x768, 800x600, 800x448, 720x576, 720x480, 640x480, 640x360, 320x240
              </td>
            </tr>

            {/* Max. Framerate */}
            <tr>
              <td rowSpan={2} className="bg-gray-200 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Max. Framerate
              </td>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                H.264/H.264
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                30fps/25fps(60Hz/50Hz)
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                MJPEG
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                30fps
              </td>
            </tr>

            <tr>
              <td colSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                LENS
              </td>
            </tr>   

              {/* Min. Illumination */}
            <tr>
              <td rowSpan={2} className="bg-gray-50 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Min. Illumination (Lux)
              </td>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Color(1/30sec, 30IRE)
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                0.11
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                BW(1/30sec, 30IRE)
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                0.011
              </td>
            </tr>

            {/* LENS */}
             <tr>
              <td colSpan={2} className="bg-gray-300 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Focal Length (mm)
              </td>
              <td colSpan={3} className="p-4 text-black border-black border align-middle border-b  leading-relaxed ">
                4.13-9.4
              </td>
            </tr>
             <tr>
              <td rowSpan={1} className="bg-gray-100 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Zoom Ratio
              </td>
              <td className="p-4 text-black border-black border align-middle border-b  leading-relaxed ">
                Optical
              </td>
              <td className="p-4 text-black border-black border align-middle border-b  leading-relaxed">
                2.3x
              </td>
            </tr>

            {/*  Max Aperture Ratio */}
            <tr>
              <td rowSpan={2} className="bg-gray-300 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Max Aperture Ratio (F number)
              </td>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Wide
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                1.92
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Tele
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                2.67
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
                88°~37°
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Vertical
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                65°~28°
              </td>
            </tr>

            <tr>
              <td colSpan={2} className="p-4 text-gray-600  align-middle border-b border-r border-black">
                Min. Object Distance
              </td>
              <td colSpan={3} className="p-4 text-black border-black border align-middle border-b ">
                1.2m(3.94ft)
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="p-4 bg-gray-50 text-gray-600 align-middle border-b border-r border-black">
                Focus Control
              </td>
              <td colSpan={3} className="p-4 text-black border-black border align-middle border-b ">
                Simple focus
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Lens Type
              </td>
              <td colSpan={3} className="p-4 text-black border-black border align-middle border-b ">
                DC auto iris(IR corrected)
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
                EPA (Effective Projected Area)
              </td>
              <td colSpan={3} className="p-4 text-black border-black border align-middle border-b ">
                0.036㎡
              </td>
            </tr>
             <tr>
              <td colSpan={2} className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Input Voltage
              </td>
              <td colSpan={3} className="p-4 text-black border-black border align-middle border-b ">
                PoE++(IEEE802.3bt type4, Class8), 12VDC
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
                Max. 45W, Typical 33.7W
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                12VDC
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                Max. 42W, Typical 32W
              </td>
            </tr>
          
              </tbody>
            </table>
          </div>


            {/* Footer Tags */}
            <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
              <p className="text-white border bg-[#ff5f31] px-2 py-1 rounded">Hanwha</p>
              <p className="text-white border bg-[#ff5f31] px-2 py-1 rounded">CCTVs</p>
              
            </div> 

            {/* Share Section */}
            <SocialShare title="Check out this product!" />
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/4 space-y-6">
            <div className="bg-gray-300 p-6 rounded shadow-sm border border-gray-400">
              <h3 className="font-semibold text-xl mb-4 border-b border-black pb-2 ">More By HANWHA</h3>
              <ul className="space-y-4 text-gray-700">
                <NavLink to="/our-products/onity/directkey-with-serene" className='block'>
                  <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>Onity DirectKey with Serene </li>
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

            {/* Perfected Matching CTA Card */}
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

export default PNM9085RQZ1;