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
        <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          {title}
        </h1>
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-xl my-10 p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Product Info */}
          <div className="lg:col-span-3">
            <p className="text-[15px]  text-black mb-6">{subtitle}</p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
              <p className="text-[15px] text-black leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-[15px] text-black space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>

             {/* Technical Specifications Table */}
              <div className="bg-gray-300 p-6 shadow rounded border border-r divine-y">
            <h2 className="font-semibold text-black text-xl mb-4">Technical Specification</h2>

            <table className="border text-[15px] w-full">
              <tbody> 
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                   Passage Width
                  </td>
                  <td colSpan="1" className="border border-r border-black p-2 text-black">
                    MPP 122
                  </td>
                  <td colSpan="1" className="border border-r border-black p-2 text-black">
                    MPP 222
                  </td>
                  <td colSpan="1" className="border border-r border-black p-2 text-black">
                    MPP 112
                  </td>
                  <td colSpan="1" className="border border-r border-black p-2 text-black">
                    MPP 212
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Application
                  </td>
                  <td colSpan="1" className="border border-r border-black p-2 text-gray-700">
                    Indoor
                  </td>
                  <td colSpan="1" className="border border-r border-black p-2 text-gray-700">
                   Outdoor
                  </td>
                  <td colSpan="1" className="border border-r border-black p-2 text-gray-700">
                    Indoor
                  </td>
                  <td colSpan="1" className="border border-r border-black p-2 text-gray-700">
                    Outdoor
                  </td>
                </tr>
             
               <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Housing variant	
                  </td>
                  <td colSpan="2" className="border-black  p-2 border text-gray-700">
                   Long
                  </td>
                  <td colSpan="3" className="border-black  p-2 border text-gray-700">
                    Short
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Passage width
                  </td>
                  <td colSpan="2" className="border-black  p-2 border text-gray-700">
                   515 mm
                  </td>
                  <td colSpan="3" className="border-black  p-2 border text-gray-700">
                    515 mm
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Drive technology
                  </td>
                  <td colSpan="2" className="border-black  p-2 border text-gray-700">
                    MHTM
                  </td>
                  <td colSpan="3" className="border-black  p-2 border text-gray-700">
                    MHTM
                  </td>
                </tr>
                
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Voltage
                  </td>
                  <td colSpan="2" className="border-black  p-2 border text-gray-700">
                    110 – 240 VAC, 50/60 Hz
                  </td>
                  <td colSpan="3" className="border-black  p-2 border text-gray-700">
                    110 – 240 VAC, 50/60 Hz
                  </td>
                </tr>
                 <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Power Consumption
                  </td>
                  <td colSpan="2" className="border-black  p-2 border text-gray-700">
                     Max. 65 W
                  </td>
                  <td colSpan="3" className="border-black  p-2 border text-gray-700">
                     Max. 65 W
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Duty cycle
                  </td>
                  <td colSpan="2" className="border-black  p-2 border text-gray-700">
                     100 %
                  </td>
                  <td colSpan="3" className="border-black  p-2 border text-gray-700">
                     100 %
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                   Housing dimensions (L x W x H)
                  </td>
                  <td colSpan="2" className="border-black  p-2 border text-gray-700">
                     1300 x 260 x 1035 mm
                  </td>
                  <td colSpan="3" className="border-black  p-2 border text-gray-700">
                     400 x 300 x 1035 mm
                  </td>
                </tr>

                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Enclosure rating
                  </td>
                  <td colSpan="1" className="border-black  p-2 border text-gray-700">
                    IP32
                  </td>
                  <td colSpan="1" className="border-black  p-2 border text-gray-700">
                    IP 44
                  </td>
                  <td colSpan="1" className="border-black  p-2 border text-gray-700">
                   IP32
                  </td>
                  <td colSpan="1" className="border-black  p-2 border text-gray-700">
                    IP 44
                  </td>
                </tr>
                 <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Weight
                  </td>
                  <td colSpan="2" className="border-black  p-2 border text-gray-700">
                    	Approx. 60 kg
                  </td>
                   <td colSpan="3" className="border-black  p-2 border text-gray-700">
                    	Approx. 40 kg
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                     Temperature range
                  </td>
                  <td colSpan="2" className="border-black  p-2 border text-gray-700">
                    	−25 to +50 °C
                  </td>
                   <td colSpan="3" className="border-black  p-2 border text-gray-700">
                    	−25 to +50 °C
                  </td>
                </tr>

                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                     Warranty
                  </td>
                  <td colSpan="2" className="border-black  p-2 border text-gray-700">
                      3 years*
                  </td>
                   <td colSpan="3" className="border-black  p-2 border text-gray-700">
                      3 years*
                  </td>
                </tr>

              </tbody>
            </table>
                </div>
            

            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                MAGNETIC
              </span>
            </div>

               {/* SHARE SECTION */}
           <SocialShare title="Check out this product!" />

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 p-4 border border-black  border-r mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By MAGNETIC</h3>
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
const Turnstiles = () => {
  const data = {
    title: "MPP Turnstiles",
    subtitle: "This passageway is ideal for division and management of large number of people  such as public pools or sports stadiums.",
    description: "At swimming pools, sports stadiums or public toilets – MPP turnstiles are the ideal choice wherever large numbers of people must be reliably individualized and managed. The robust housings and stainless steel barrier arms not only withstand improper use, but are also suitable for outdoor applications (option). MPP turnstiles offer versatile operation: a large number of people can easily be managed with one of the many applications available while bi-directional operation permits a single turnstile to act as both entrance and exit. And MPP turnstiles are ideally equipped for emergencies: The barrier allows free passage if there",
    features: [
      "Robust turnstiles for high throughput frequencies",
      "Optional drop-arm mechanism permits passage in case of power cut or alarm",
      "High-quality stainless steel housing for indoor or outdoor use",
      "Simple integration of all common access control systems",
      "Designed for 10 million throughput cycles"
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

export default Turnstiles;