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
    <div className="bg-gray-200 dark:bg-[#121214] min-h-screen font-sans text-[#333] dark:text-gray-200 transition-colors duration-300">
      {/* Banner Header */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-centerbg-[#7f95b8] dark:bg-blue-950/70 text-center transition-colors duration-300">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          eXpress Automated Tray Return System
        </h1>
        
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto shadow-xl my-10 p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Product Info */}
          <div className="lg:col-span-3 bg-gray-100 dark:bg-[#1e1e22] p-6 md:p-8 rounded-xl border border-transparent dark:border-gray-800 shadow-md transition-colors duration-300">
            <p className="text-[17px] text-gray-680 leading-relaxed whitespace-pre-line">
                The Analogic eXpress lane is a fully automated bag handling system that efficiently and reliably processes bags 
                through the ConneCT Checkpoint Explosive Detection System (EDS CB), and automatically return trays
                to the divest position.
            </p>

            <section className="mb-8">
                
              <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Description:</h2>
              <p className="text-[17px] text-gray-680 leading-relaxed whitespace-pre-line">
                The eXpress lane is designed for any airport that needs the quality, reliability, and throughput
                of a state of the art automated lane and tray return system.
              </p>
              <p className="text-[17px] text-gray-680 leading-relaxed whitespace-pre-line">
                Developed by Analogic, the eXpress lane's modular design permits flexible configurations to
                optimized the needs of individual airports and checkpoints. The modular architecture of the 
                eXpress lane permits hardware and software upgrades to facilitate advances in screening
                and handling capabilities.
              </p>


               <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Features:</h2>
            <ul className="list-disc ml-5 text-[15px] text-gray-680 space-y-1">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            </section>

            

             {/* Technical Specifications Table */}
        <div className="p-6 shadow rounded border border-r divine-y">
            <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Technical Specification</h2>

            <table className="w-full border text-[15px] text-black">
              <tbody>
                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold w-1/2 text-center">
                    PHYSICAL SPECIFICATIONS
                  </td>
                </tr>
                <tr>  
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Lane Throughput
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    500 bins/hr
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    AVG Installation Time
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    16 hours
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   Maximum Load
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    23 kg (50 lb) per bag/bin
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   Dimensions
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   L: 12 to 21 m (472-827 in) / W: 0.8 to 1.8 m (30.8-70.7 in)
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   Nominal Belt Height
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   0.84 m (33.1 in)
                   </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Power Consumption
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    800W
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Power Requirements
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    100-240VAC, 47-63Hz
                  </td>
                </tr>
               
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   Full Load Current
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    7A (est.)
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   Facility Circuit
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   20A
                  </td>
                </tr>
                 <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Operating Noise Level
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/2 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
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
             <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
            <h3 className="font-bold text-black dark:text-blue-400 text-x mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By ANALOGIC</h3>
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

export default Express;