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
        {/* <div className="bg-gray-300 p-6 shadow rounded border border-r divine-y">
            <h2 className="font-bold text-black text-xl mb-4">Technical Specification</h2>

            <table className="w-full border text-[15px] text-black">
              <tbody>
                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold w-1/2 text-center">
                    CAMERA
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Max Resolution
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    2688 × 1520
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Image Sensor
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    1/3′′ Progressive Scan CMOS
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Min. Illumination
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Color: 0.005 Lux @ (F1.6, AGC ON), 0 Lux with IR on
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Shutter Time
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   1/3 s to 1/100, 000 s
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Day & Night
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    IR cut filter
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Angle Adjustment
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   Pan: 0° to 360°, tilt: 0° to 90°, rotate: 0° to 360°
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold w-1/2 text-center">
                    LENS
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Lens Type
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Fixed focal lens, 2.8, 4, and 6 mm optional
                  </td>
                </tr>
               
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Focal Length & FOV
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    2.8 mm, horizontal FOV 103°, vertical FOV 55°, diagonal FOV 122°4 mm, horizontal FOV 84°, vertical FOV 45°, diagonal FOV 100°6 mm, horizontal FOV 52°, vertical FOV 28°, diagonal FOV 61°
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Lens Mount
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    M12
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Iris Type
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Fixed
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Aperture
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    F1.6
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold w-1/2 text-center">
                     ILLUMINATOR
                  </td>
                </tr>

                 
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Supplement Light Range
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    IR Distance: up to 200 m
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Supplement Light Range
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    IR
                  </td>
                </tr>

              </tbody>
            </table>
        </div> */}
            

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
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By HANWHA VISION</h3>
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
    title: "PNM-C16013RVQ 4CH mini AI Camera",
    description: "The Hanwha Vision PNM-C16013RVQ is a compact 4-channel AI-powered multi-directional dome camera designed for advanced surveillance, offering object classification, loitering detection, and enhanced cybersecurity in a smaller, discreet form factor. It’s ideal for both indoor and outdoor environments such as banks, schools, hospitals, and retail spaces. ",
    features: [
      "4CH AI Analytics",
      "Loitering & Line Crossing Detection",
      "Cybersecurity",
      "Durability",
      "IR Night Vision",
    ],


    sidebarItems: [
      "Onity DirectKey with Serene",
      "MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs",
      "INR 415 256-Channel 12 Bay RAID Backmount Standalone",
      "GNR 340 100-Channel Tower Standalone",
      "ENR 130 16-Channel Desktop Standalone NVR- No HDD Included",
      "Z86 Outdoor Network Dome Camera with Night Vision"
    ]
  };

  return <ProductLayout {...data} />;
};

export default PNMC16013RVQ;