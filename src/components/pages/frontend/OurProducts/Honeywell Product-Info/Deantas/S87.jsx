import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';



// Shared Layout Component to maintain design consistency across all products
const ProductLayout = ({ title, subtitle, description, productFeatures = [] }) => {
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

               <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-[15px] text-black space-y-1">
                {productFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            {/* Technical Specifications Table */}
              <div className="bg-gray-300 p-6 shadow rounded border border-r divine-y">
            <h2 className="font-semibold text-black text-xl mb-4">Technical Specification</h2>

            <table className="border text-[15px] w-full">
              <tbody>
                <tr className="bg-gray-300 font-bold w-1/2">
                  <td colSpan="1" className="border-r border-black border p-2 text-black">
                    Available Colors
                  </td>
                  <td colSpan="5" className="border border-r border-black p-2">
                     Brushed Gold, Galaxy Gray, Matt Black, Brushed Silver
                  </td>
                </tr> 
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                     Material
                  </td>
                  <td colSpan="5" className="border border-r border-black p-2 ">
                    Aluminium Alloy + Tempered Glass + ABS
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Lock Body Options
                  </td>
                  <td colSpan="5" className="border border-r border-black p-2 ">
                    60/85 or 70
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Door Thickness Compatibility
                  </td>
                  <td colSpan="5" className="border border-r border-black p-2 ">
                    50 – 80mm
                  </td>
                </tr> 
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Dimensions
                  </td>
                  <td colSpan="5" className="border border-r border-black p-2 ">
                    Rosette width/diameter of 56.5mm; Handle projection 58mm
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
             <div className="bg-gray-300 p-4 border border-black  border-r mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By DEANTAS</h3>
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
const S87 = () => {
  const data = {
    title: "DEANTAS Smart Lock S87",
    subtitle: "Minimalist Split-Type Smart Lever Lock",
    description:
    "The S87 reimagines modern security with a hyper-minimalist split-type configuration. Discarding the traditional large vertical backplate, it separates the secure circular contactless reader from the ergonomic lever handle, giving your doors an ultra-clean, architectural luxury look.",
  };

  const productFeatures = [
    "Multi-Sensor 20MP Resolution",
    "Motorized PTRZ Support",
    "Rotational Smart IR Illumination",
    "Vandal and Weatherproof Design",
    "Massive Local Edge Storage"
  ];

  return <ProductLayout {...data} productFeatures={productFeatures} />;
};

export default S87;