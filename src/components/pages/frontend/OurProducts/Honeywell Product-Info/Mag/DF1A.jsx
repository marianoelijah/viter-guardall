import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';



const DF1A = () => {
  const specs = [
    { label: "Quantity", value: "Equipment" },
    { label: "1 pcs", value: "Soyal AR837EF_OS fingerprint reader" },
    { label: "1 pcs", value: "NVS1230P power supply w/ backup battery" },
    { label: "1 pcs", value: "EM lock 600 lb" },
    { label: "1 pcs", value: "Exit push button" },
  ];

  return (
    <>
    <Header />
     <div className="bg-gray-100 dark:bg-[#121214] min-h-screen font-sans text-slate-800 dark:text-gray-200 transition-colors duration-300">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-4 text-center transition-colors duration-300bg-[#7f95b8]">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
         DF1A Fingerprint with Optical Sensor
        </h1>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 dark:bg-[#1e1e22] border border-transparent dark:border-gray-800 transition-colors shadow-lg my-10 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Left Column: Product Info */}
          <div className="lg:col-span-3">
            <p className="text-[17px] text-gray-800 dark:text-gray-300 border-l-4 border-[#8ba4cc] dark:border-blue-500 pl-4 font-mediumtext-gray-800 mb-6">
            A door access control system that requires fingerprint authentication and uses a robust optical sensor. 
            </p>

            <section className="mb-8">
              <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold dark:text-blue-400 transition-colorsfont-bold text-blackfont-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-[17px] text-gray-800 dark:text-gray-300 mb-8 border-l-4 border-[#8ba4cc] dark:border-blue-500 pl-4 font-medium">
               DF1A is an optical fingerprint door access control system with a time attendance function. DF1A increases door access security by requiring fingerprint authentication. Fingerprint access reader design using optical sensors is more robust and less prone to damage by vandalism. DF1A is ideal for offices, factories or any commercial building that require cost effective and reliable fingerprint access control solutions.
              </p>
            </section>


            {/* Technical Specifications Table */}
            <section>
              <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-4 transition-colors">Ordering Info:</h2>
              <div className="border border-gray-500 dark:border-gray-700 overflow-hidden rounded-sm">
                <table className="w-full border border-gray-800 text-gray-800 divine-x border-r text-[17px]w-full text-left text-xs border-collapse">
                 
                  <tbody className="divide-y divide-gray-800 p-2.5 font-bold  tracking-widest text-gray-800 dark:text-blue-400 text-[17px] border-b border-gray-500 dark:border-gray-700">
                    {specs.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'}>
                        <td className="p-2 border-r border-black font-semibold text-[17px] uppercase text-gray-800 dark:text-gray-200 leading-normal">
                          {spec.label}
                        </td>
                        <td className="p-2 border-r border-black font-semibold text-[17px] uppercase text-gray-800 dark:text-gray-200 leading-normal">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            
             
            {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                MAG
              </span>
              
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                Access Control System
              </span>
            </div>

            {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
            <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By MAG</h3>
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

             {/* Contact Card */}
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
          
          </div>
        </div>
      </main>
    </div>
    <Footer />
    </>
   
  );
};

export default DF1A;