import React from 'react';
import Header from '../../../../partials/Header';
import Footer from '../../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../../Reusable/SocialShare';


// Shared Layout Component to maintain design consistency across all products
const ProductLayout = ({ title, subtitle, description, features, specs, sidebarItems }) => {
  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-slate-800">
      {/* Banner Header */}
      <header className="bg-[#7f95b8] text-white py-14 px-4 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
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

            <table className="w-full border text-[15px] text-black">
              <tbody>
                <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Security Rating
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Category IV (Defence Rated)
                  </td>
                </tr>
                <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Material
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     High-tensile steel (Galvanized or Zincalu-Super)
                  </td>
                </tr>
                <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Panel Type
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Solid steel shutters / solid steel panels
                  </td>
                </tr>
                 <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Standard Heights
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    1.8 m, 2.1 m, 2.4 m, 3.0 m (Custom heights available)
                  </td>
                </tr>

                <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Post System
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Taper Locking Post (bolted on the secure side)
                  </td>
                </tr>

                <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Coating Options
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Marine Fusion Bond (Coastal), Polyester Powder Coating, or Hot-Dipped Galvanized
                  </td>
                </tr>
                <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Ballistic Protection
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Customizable levels (tested against various ammunition types)
                  </td>
                </tr>
                <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Wind Loading
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   Engineered to withstand high wind loads despite being a solid surface
                  </td>
                </tr>

                <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Compatible Toppings
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Shark Tooth, Castle Spikes, Electric Fencing, or Razor Wire
                  </td>
                </tr>

                </tbody>
            </table>

                </div>
            
               {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 p-4 border border-black  border-r mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By SENSTAR</h3>
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
const SmartLidar = () => {
  const data = {
    title: "Smart 3D Lidar",
    subtitle: "The Smart 3D Lidar is designed to fill the gaps where traditional security fails such as in total darkness, dense fog, or complex environments with moving vegetation. It performs on device processing to analyze the size, speed, and direction of an object, ensuring that alarms are only triggered for genuine human or vehicle threats.",
    description: "It is a solid state (no moving parts) Lidar sensor that operates using Light Detection and Ranging. By emiting infrared laser pulses and measuring the time they take to bounce back, it builds a precise 3D map. Because it does not rely on ambient light or heat signatures, it is highly resistant to the false alarms that plague standard video analytics (like shadows, headlights, or small animals).",
    features: [
      "Creates an invisible detection volume rather than just a flat line, making it perfect for protecting open areas or sterilize zones",
      "Provides detailed movemont data without capturing facial features or colors, making it GDPR compliant and ideal for public spaces",
      "Can distinguish between a small animal, a human, and a vehicle based on 3D volume",
      "Remains reliable in heavy rain, snow and fog where cameras typically lose visibility",
      "Ignores environmental noise like moving trees, wind-blown debris by analyzing the actual 3D displacement of objects",
      "Allows the user to draw complex, polygonal alarm zones within the 3D field of view."
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

export default SmartLidar;