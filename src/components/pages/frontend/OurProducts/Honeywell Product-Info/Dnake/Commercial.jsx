import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';



const Commercial = () => {
  const productData = {
    title: "Commercial",
    subtitle: "Create safer, more secure workplaces with a complete intercom solution",
    description: "DNAKE smart intercoms for commercial applications are built to handle high-traffic environments like office buildings, retail spaces, hotels, and industrial facilities. They combine robust access control, advanced video communication, and centralized management to ensure both convenience and security at scale.",
    features: [
      "Centralized management utilizing dedicated on premises software setups for local area networks (LANs)",
      "Cloud-enabled architecture via the DNAKE Cloud Platform for anytime, anywhere administrative control",
      "Granular entry management for elevators, secure entry points, and main corporate reception doors."
    ],
  };

  return (
    <>
      <Header />
      <div className="bg-gray-200 dark:bg-[#121214] min-h-screen font-sans text-[#333] dark:text-gray-200 transition-colors duration-300">
        <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-6 text-center transition-colors duration-300">
          <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
            {productData.title}
          </h1>
        </header>

        <main className="max-w-6xl mx-auto shadow-xl my-10 p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/*  Main Content Container */}
            <div className="lg:col-span-3 bg-gray-100 dark:bg-[#1e1e22] p-6 md:p-8 rounded-xl border border-transparent dark:border-gray-800 shadow-md transition-colors duration-300">

              <p className="text-[17px] text-gray-680 leading-relaxed whitespace-pre-line mb-3">
                {productData.subtitle}
              </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Description:</h2>
              <p className="text-[17px] text-gray-680 leading-relaxed whitespace-pre-line">
                {productData.description}
              </p>
            </section>

              <section className="mb-10">
                <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Features:</h2>
                <ul className="list-disc ml-5 text-[17px] text-gray-800 dark:text-gray-300 space-y-1 transition-colors">
                  {productData.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </section>

                {/* Technical Specifications Table */}
              <div className="p-6 shadow rounded border border-r divine-y">
            <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Technical Specification</h2>

            <table className="w-full border text-[15px] text-black">
              <tbody>

                <tr className="bg-gray-00 ">
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Management Interface
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Web based administration console.
                  </td>
                </tr>
                <tr className="bg-gray-00 ">
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Software Core
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    LAN-Based On Premises Central Management System (CMS) or WAN Cloud Platform
                  </td>
                </tr>
                <tr className="bg-gray-00 ">
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Integration Capacity 
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Enterprise-level cross-system relay configuration.
                  </td>
                </tr>

              </tbody>
            </table>
                </div>

              {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10 border-b py-5 border-b-gray-400">
              <span className="bg-[#ff5f31] text-white text-sm px-4 py-2 rounded">
               DNAKE
              </span>
            </div>

            {/* SHARE SECTION */}
             <SocialShare title="Check out this product!" />

            </div>

            {/* Right Column: Sidebar */}
    <div className="lg:col-span-1 space-y-8">
        <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded-xl shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
            <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By DNAKE</h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
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

export default Commercial;