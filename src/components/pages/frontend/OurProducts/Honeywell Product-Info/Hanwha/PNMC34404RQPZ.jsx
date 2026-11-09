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
    <div className="bg-gray-100 dark:bg-[#121214] min-h-screen font-sans text-slate-800 dark:text-gray-200 transition-colors duration-300">
      {/* Banner Header */}
      <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-4 text-center transition-colors duration-300">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          {title}
        </h1>
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto shadow-xl my-10 p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Product Info */}
          <div className="lg:col-span-3 bg-gray-100 dark:bg-[#1e1e22] p-6 md:p-8 rounded-xl border border-transparent dark:border-gray-800 shadow-md transition-colors duration-300">
            <p className="text-[17px] text-gray-800 dark:text-gray-300 mb-6 font-medium transition-colors">{subtitle}</p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Description:</h2>
              <p className="text-[17px] text-gray-680 leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] text-gray-680 space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>

               {/* Technical Specifications Table */}
          <div className="p-6 shadow rounded border border-r divine-y">
            <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Technical Specification</h2>

            <table className="w-full border text-[15px] text-black border-black">
              <tbody>

            <tr>
              <td colSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                VIDEO
              </td>
            </tr>    

          {/* Imaging Device */}
            <tr>
              <td rowSpan={2} className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Imaging Device
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Size
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                1/2.8"
              </td>
            </tr>
            <tr>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Type
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                CMOS
              </td>
            </tr>

          
            <tr>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Resolution
              </td>
              <td colSpan={2} className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                3840x2160, 1920x1080, 1280x1024, 1280x960, 1280x720, 1024x768, 800x600, 800x448, 720x576, 720x480, 640x480, 640x360, 320x240
              </td>
            </tr>

           
            <tr>
              <td rowSpan={2} className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Max. Framerate
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                 H.265/H.264
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                15fps/15fps(60Hz/50Hz)
              </td>
            </tr>
            <tr>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                MJPEG
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                15fps(@8MP Max. 5fps)
              </td>
            </tr>

            <tr>
              <td rowSpan={2} className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Min. Illumination (Lux)
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                 Color(1/30sec, 30IRE)
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                 0.1
              </td>
            </tr>
            <tr>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                BW(1/30sec, 30IRE)
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                0.01
              </td>
            </tr>

            
            {/* LENS */}

            <tr>
              <td colSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                LENS
              </td>
            </tr>   

             <tr>
              <td colSpan={2} className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Focal Length (mm)
              </td>
              <td colSpan={3} className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 leading-relaxed ">
                 3.3~5.7
              </td>
            </tr>

            <tr>
              <td rowSpan={2} className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Zoom Ratio
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Optical
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                1.7x
              </td>
            </tr>
            <tr>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Digital
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                -
              </td>
            </tr>

              <tr>
              <td rowSpan={2} className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Max Aperture Ratio (F number)
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Wide
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                1.5
              </td>
            </tr>
            <tr>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Tele
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                1.9
              </td>
            </tr>

             {/*  Angular Field of View */}
            <tr>
              <td rowSpan={3} className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Angular Field of View
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Horizontal
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                109°~56°
              </td>
            </tr>
            <tr>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Vertical
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                55°~31°
              </td>
            </tr>
            <tr>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Diagonal
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                136°~65°
              </td>
            </tr>

            <tr>
              <td colSpan={2} className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Min. Object Distance
              </td>
              <td colSpan={3} className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                1.3m(4.27ft)
              </td>
            </tr>

            <tr>
              <td colSpan={2} className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Focus Control
              </td>
              <td colSpan={3} className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Simple focus
              </td>
            </tr>

            <tr>
              <td colSpan={2} className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Lens Type
              </td>
              <td colSpan={3} className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Fixed iris
              </td>
            </tr>

            <tr>
              <td colSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                ENVIRONMENTAL & ELECTRICAL
              </td>
            </tr>

               {/*  OPERATING CONDITION */}
            <tr>
              <td rowSpan={3} className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Operating Condition
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Temperature
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
               -40°C~+50°C(-40°F~+122°F)
              </td>
            </tr>
            <tr>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Humidity
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                0~90% RH(non-condensing)
              </td>
            </tr>
            <tr>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Others
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                +74°C(+165°F)(Max) based on NEMA-TS 2(2.2.7), Start up should be done at above -30°C
              </td>
            </tr>

             <tr>
              <td rowSpan={2} className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Storage Condition
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Temperature
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                -50°C~+60°C(-58°F~+140°F)
              </td>
            </tr>
            <tr>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Humidity
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                0~90% RH(non-condensing)
              </td>
            </tr>

             <tr>
              <td colSpan={2} className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                EPA(Effective Projected Area)
              </td>
              <td colSpan={3} className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                0.075
              </td>
            </tr>

             <tr>
              <td colSpan={2} className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Input Voltage
              </td>
              <td colSpan={3} className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                PoE++(IEEE802.3bt type4, Class8)
              </td>
            </tr>

            <tr>
              <td rowSpan={2} className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Power Consumption
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                PoE
              </td>
              <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                Max. 64W, typical 45W
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
             <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded-xl shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
            <h3 className="font-bold text-black dark:text-blue-400 text-x mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By HANWHA</h3>
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
const PNMC34404RQPZ = () => {
  const data = {
    title: "PNM-C34404RQPZ",
    subtitle: "4K 4Ch PTRZ + 2MP 40x PTZ AI Camera",
    description: "The PNM-C34404RQPZ is a highly innovative multi-directional network outdoor camera that integrates quad-sensor wide area surveillance with a high-speed PTZ camera into a single physical housing. This advanced unit deploys four independent 4K/8MP sensors with motorized PTRZ mechanics, allowing installers to remotely adjust the pan, tilt, rotation, and zoom to map out a seamless 360° field of view over a single IP address.",
    features: [
      "360 Analytics events based on AI engine: Classified object (Person/Face/Vehicle/License plate)",
      "360 Attributes search (Vehicle type: Car/Bus/Truck/Motorcycle/Bicycle)",
      "AI based loitering detection and line crossing detection",
      "AI based smart zoom and advanced hand over",
      "PTRZ remote adjustmend",
      "New design",
      "Expansion of alarm/audio faetures",
      "Next level cysersecurity (TPM 2.0 with FIPS 140-2 level2)",
      "Reinforced durability (IP66, IK19, NEMA4X)"
    ],
  };

  return <ProductLayout {...data} />;
};

export default PNMC34404RQPZ;