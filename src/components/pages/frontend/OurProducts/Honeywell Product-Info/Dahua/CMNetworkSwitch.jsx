import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';
import React from 'react';

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
              <p className="text-[17px] text-black leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] text-black space-y-1">
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
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                      Model
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     DH-S4220-16GT-240
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Description
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                      16-port PoE 2.0 ManagedGigabit Switch
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Port Configuration
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     16 GbE PoE+2 GbE
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     SFP Optical Ports
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                      2 GbE SFP
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    PoE Standard
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    PoE (802.3af),PoE+ (802.3at), Hi-PoE,PoE++ (802.3bt)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    PoE Budget
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     240 W
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    PoE Watchdog 
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                      Supported
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Long Distance PoE Transmission
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Yes (820 ft)
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Intelligent PoE Management
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Supported
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                   Switching Capacity
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    56 Gbps
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                      Packet Forwarding Rate
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                      29.76 Mpps
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                   Packet Buffer Memory
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    4.1 Mb
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Mac Table Size
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     8K
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 text-black font-bold w-1/2">
                     VLAN
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Supported
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Link Aggregation
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Supported
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 text-black font-bold w-1/2">
                     Spanning Tree
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Supported
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Management
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   Web and SNMP
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Lightning Protection
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Common Mode 4 kVDifferential Mode 2 kV
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Working Temperature
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    14° F to 131° F(-10° C to 55° C)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Dimensions
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    440 mm × 300 mm × 44 mm(17.32 in. × 11.81 in. × 1.73 in.)
                  </td>
                </tr>
               
              </tbody>
            </table>
                </div>
            

            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#ff5f31] text-white text-sm px-4 py-2 rounded">
                DAHUA
              </span>
              
              <span className="bg-[#ff5f31] text-white text-sm px-4 py-2 rounded">
                CCTVs
              </span>
            </div>

               {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 p-4 border border-black  border-r mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By DAHUA</h3>
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
const CMNetworkSwitch = () => {
  const data = {
    title: "DH-S4210-8GT-110 8-Port Gigabit PoE Compliant Managed Network Switch",
    subtitle: "A budget-friendly network switch capable of supporting security devices and access points. It features 8 ports to support at least 8 devices.",
    description: "Quickly expand your business’s network capacity to support powered devices, such as IP security cameras and access points, with the S4210-8GT-110 8-Port Gigabit PoE Compliant Managed Network Switch from Dahua Technology. This budget-friendly network switch features eight PoE-complaint Gigabit Ethernet ports, one of which can supply up to 90W of power to advanced devices while the rest support 30W with a total budget of 110W.",
    features: [
      "1 x PoE++ Compliant Port (90W)",
      "7 x PoE+ Compliant Ports (30W)",
      "2 x Gigabit Ethernet Uplink Ports",
      "20 Gb/s Switching Capacity",

      "14.88 Forwarding Rate",
      "110W Power Budget",
      "Desktop & Wall Mountable",
      "Layer 2 Features"
    ],

  };

  return <ProductLayout {...data} />;
};

export default CMNetworkSwitch;