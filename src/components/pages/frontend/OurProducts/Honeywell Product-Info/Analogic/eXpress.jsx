import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';


const Express = () => {
  const productFeatures = [
    "Modular design supports airports checkpoint of any size and length",
    "Configurable features maximize operational throughput",
    "Design to optimize ConneCT performance",
    "Plug and play architecture facilitates fast installation",
    "Easy to service and maintain with minimal downtime",
    "Flexible accomodates hardware and software upgrades"
  ]
     

   return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-slate-800">
      {/* Banner Header */}
      <header className="bg-[#7f95b8] text-white py-14 px-4 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          eXpress Automated Tray Return System
        </h1>
        
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-xl my-10 p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Product Info */}
          <div className="lg:col-span-3">
            <p className="text-[17px]  text-black mb-6">
                The Analogic eXpress lane is a fully automated bag handling system that efficiently and reliably processes bags 
                through the ConneCT Checkpoint Explosive Detection System (EDS CB), and automatically return trays
                to the divest position.
            </p>

            <section className="mb-8">
                
              <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
              <p className="text-[17px] text-gray-900 leading-relaxed whitespace-pre-line mb-3">
                The eXpress lane is designed for any airport that needs the quality, reliability, and throughput
                of a state of the art automated lane and tray return system.
              </p>
              <p className="text-[17px] text-gray-900 leading-relaxed whitespace-pre-line">
                Developed by Analogic, the eXpress lane's modular design permits flexible configurations to
                optimized the needs of individual airports and checkpoints. The modular architecture of the 
                eXpress lane permits hardware and software upgrades to facilitate advances in screening
                and handling capabilities.
              </p>


               <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1 text-black">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            </section>

            

             {/* Technical Specifications Table */}
        <div className="bg-gray-300 p-6 shadow rounded border border-r divine-y">
            <h2 className="font-bold text-black text-xl mb-4">Technical Specification</h2>

            <table className="w-full border text-[15px] text-black">
              <tbody>
                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold w-1/2 text-center">
                    PHYSICAL SPECIFICATIONS
                  </td>
                </tr>
                <tr className="bg-gray-300 ">  
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Lane Throughput
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    500 bins/hr
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    AVG Installation Time
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    16 hours
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Maximum Load
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    23 kg (50 lb) per bag/bin
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Dimensions
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   L: 12 to 21 m (472-827 in) / W: 0.8 to 1.8 m (30.8-70.7 in)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Nominal Belt Height
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   0.84 m (33.1 in)
                   </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Power Consumption
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    800W
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Power Requirements
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    100-240VAC, 47-63Hz
                  </td>
                </tr>
               
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Full Load Current
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    7A (est.)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Facility Circuit
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   20A
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Operating Noise Level
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    70dB
                  </td>
                </tr>

              </tbody>
            </table>

           

        </div>
            

            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
                Analogic
              </span>
               
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
                DETECTION SYSTEMS
              </span>
            </div>

               {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 p-4 border border-black  border-r mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By HIKVISION</h3>
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

export default Express;