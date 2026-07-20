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
              <td colSpan={6} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                VIDEO
              </td>
            </tr>    

          {/* Imaging Device */}
            <tr>
              <td rowSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Imaging Device
              </td>
              <td colSpan={2} className="p-4 text-gray-600 align-middle border-b border-r border-black ">
                Size
              </td>
              <td colSpan={3} className="p-4 text-black border-black border align-middle border-b ">
                1/2.8"
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Type
              </td>
              <td colSpan={3} className="p-4 text-black border align-middle border-b border-black">
                CMOS
              </td>
            </tr>

          
            <tr>
              <td className="w-1/2 bg-gray-50 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Resolution
              </td>
              <td colSpan={5} className="p-4 text-black border-black border align-middle border-b  leading-relaxed ">
                3840x2160, 2592x1944, 2592x1464, 1920x1080, 1600x1200, 1280x1024, 1280x960, 1280x720, 1024x768, 800x600, 800x448, 720x576, 720x480, 640x480, 640x360, 320x240
              </td>
            </tr>

           
            <tr>
              <td rowSpan={2} className="bg-gray-200 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Max. Framwrate
              </td>
              <td colSpan={4} className="p-4 text-gray-600 align-middle border-b border-r border-black">
                H.265/H.264
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                30fps/25fps(60Hz/50Hz)
              </td>
            </tr>
            <tr>
              <td colSpan={4} className="p-4 text-gray-600 align-middle border-b border-r border-black">
                MJPEG
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                30fps(@8MP Max. 5fps)
              </td>
            </tr>

            <tr>
              <td rowSpan={2} className="bg-gray-200 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Min. Illumination (Lux)
              </td>
              <td colSpan={4} className="p-4 text-gray-600 align-middle border-b border-r border-black">
                 Color(1/30sec, 30IRE)
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                0.1
              </td>
            </tr>
            <tr>
              <td colSpan={4} className="p-4 text-gray-600 align-middle border-b border-r border-black">
                BW(1/30sec, 30IRE)
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                0.01
              </td>
            </tr>

            {/* LENS */}

            <tr>
              <td colSpan={6} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                LENS
              </td>
            </tr>   

             <tr>
              <td colSpan={5} className="bg-gray-300 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Focal Length (mm)
              </td>
              <td colSpan={3} className="p-4 text-black border-black border align-middle border-b  leading-relaxed ">
               5-150
              </td>
            </tr>

            <tr>
              <td rowSpan={2} className="bg-gray-50 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Zoom Ratio
              </td>
              <td colSpan={4} className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Optical
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                30x
              </td>
            </tr>
            <tr>
              <td colSpan={4} className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Digital
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                32x
              </td>
            </tr>

            <tr>
              <td rowSpan={2} className="bg-gray-50 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Max. Apperture Ratio (F number)
              </td>
              <td colSpan={4} className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Wide
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                1.6
              </td>
            </tr>
            <tr>
              <td colSpan={4} className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Tele
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                4.56
              </td>
            </tr>

            <tr>
              <td rowSpan={2} className="bg-gray-50 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Angular Field of View
              </td>
              <td colSpan={4} className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Horizontal
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                57.42°~2.19°
              </td>
            </tr>
            <tr>
              <td colSpan={4} className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Vertical
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                33.54°~1.25°
              </td>
            </tr>

            <tr>
              <td colSpan={5} className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Min. Object Distance
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                3m(9.84ft)
              </td>
            </tr>

            <tr>
              <td colSpan={5} className="bg-gray-300 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
               Focus Control
              </td>
              <td  className="p-4 text-black border-black border align-middle border-b  leading-relaxed ">
               Oneshot AF, Focus save
              </td>
            </tr>

            <tr>
              <td colSpan={5} className="bg-gray-300 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Lens Type
              </td>
              <td className="p-4 text-black border-black border align-middle border-b  leading-relaxed ">
                DC Auto iris
              </td>
            </tr>

           

            {/* ENVIRONMENTAL & ELECTRICAL */}
            <tr>
              <td rowSpan={3} className="bg-gray-50 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Operating Condition
              </td>
              <td colSpan={4} className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Temperature
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                -40°C~+55°C(-40°F~+131°F)
              </td>
            </tr>
            <tr>
              <td colSpan={4} className="p-4 text-gray-600 align-middle border-b border-r border-black">
               Humidity
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                0~100% RH(condensing)
              </td>
            </tr>
            <tr>
              <td colSpan={4} className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Others
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                +74°C(+165°F)(Max) based on NEMA-TS 2(2.2.7), Start up should be done at above -30°C, Humidity control with AIR vent
              </td>
            </tr>

             <tr>
              <td rowSpan={2} className="bg-gray-50 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Storage Condition
              </td>
              <td colSpan={4} className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Temperature
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
               -50°C~+60°C(-58°F~+140°F)
              </td>
            </tr>
            <tr>
              <td colSpan={4} className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Humidity
              </td>
              <td className="p-4 text-black border-black border align-middle border-b ">
                0~90% RH(non-condensing)
              </td>
            </tr>

            <tr>
              <td colSpan={5} className="bg-gray-300 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                EPA (Effective Projected Area)
              </td>
              <td className="p-4 text-black border-black border align-middle border-b  leading-relaxed ">
                0.048m
              </td>
            </tr>
            <tr>
              <td colSpan={5} className="bg-gray-300 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Input Voltage
              </td>
              <td  className="p-4 text-black border-black border align-middle border-b  leading-relaxed ">
                PoE++(IEEE802.3bt type3, Class6)
              </td>
            </tr>
            <tr>
              <td colSpan={1} className="bg-gray-300 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Power Consumption
              </td>
              <td colSpan={2}className="p-4 text-black border-black border align-middle border-b  leading-relaxed ">
                PoE
              </td>
              <td colSpan={3} className="p-4 text-black border-black border align-middle border-b  leading-relaxed ">
                Max. 42W, Typical 20W
              </td>
            </tr>

            {/* MECHANICAL */}

            <tr>
              <td colSpan={5} className="bg-gray-300 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Color
              </td>
              <td  className="p-4 text-black border-black border align-middle border-b  leading-relaxed ">
                White, Black
              </td>
            </tr>
            <tr>
              <td colSpan={5} className="bg-gray-300 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Material
              </td>
              <td  className="p-4 text-black border-black border align-middle border-b  leading-relaxed ">
                Aluminum, PC (Polycarbonate)
              </td>
            </tr>
            <tr>
              <td colSpan={5} className="bg-gray-300 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Ral Code
              </td>
              <td  className="p-4 text-black border-black border align-middle border-b  leading-relaxed ">
                RAL9003, RAL9005
              </td>
            </tr>
            <tr>
              <td colSpan={5} className="bg-gray-300 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Product Dimensions
              </td>
              <td  className="p-4 text-black border-black border align-middle border-b  leading-relaxed ">
                ø184.9x318.8mm(7.28x12.55")
              </td>
            </tr>
            <tr>
              <td colSpan={5} className="bg-gray-300 p-4 font-normal text-gray-600 align-middle border-b border-r border-black">
                Product Weight
              </td>
              <td  className="p-4 text-black border-black border align-middle border-b  leading-relaxed ">
                5,400g(11.90lb)
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
const XNP9300RW = () => {
  const data = {
    title: "XNP-9300RW",
    subtitle: "4K 30x IR PTZ with built-in wiper",
    description: "The XNP-9300RW is an outdoor-ready, ultra-high-definition 4K network pan-tilt-zoom (PTZ) dome camera featuring a high-performance 30x optical zoom lens. Part of Hanwha Vision’s PTZ PLUS lineup, this camera is engineered with a significantly more compact and lightweight form factor that simplifies installation and cabling requirements.",
    features: [
      "Wisenet PTZ Plus design(compact, lighter, simple cabling)",
      "Target lock tracking",
      "DIS built-in Gyro sensor",
      "SFP-supported by injector",
    ],
  };

  return <ProductLayout {...data} />;
};

export default XNP9300RW;