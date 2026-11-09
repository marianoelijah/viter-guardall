import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';



// Shared Layout Component to maintain design consistency across all products
const ProductLayout = ({ title, subtitle, description, features }) => {
  return (
    <>
    <Header />
    <div className="bg-gray-200 dark:bg-[#121214] min-h-screen font-sans text-[#333] dark:text-gray-200 transition-colors duration-300">
      {/* Banner Header */}
      <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-6 text-center transition-colors duration-300">
        <h1 className="text-4xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          {title}
        </h1>
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto shadow-xl my-10 p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Product Info */}
          <div className="lg:col-span-3 bg-gray-100 dark:bg-[#1e1e22] p-6 md:p-8 rounded-xl border border-transparent dark:border-gray-800 shadow-md transition-colors duration-300lg:col-span-3">
            <p className="text-[17px] text-gray-680 leading-relaxed whitespace-pre-line mb-4">{subtitle}</p>

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
                  <li key={idx} className="text-gray-600 dark:text-gray-300">
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

             {/* Technical Specifications Table */}
              <div className="p-6 shadow rounded border border-r divine-y">
            <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Technical Specification</h2>

            <table className="w-full border text-[15px] text-black">
              <tbody>

                <tr>
                  <td colSpan="5" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    MODULE
                  </td>
                </tr>
                <tr>
                  <td colSpan="5" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Loop Features
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Operating Voltage
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    From 22 to 38VDC
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Quiescent current consumption
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    300 μA
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   Alarm current consumption
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    20 mA
                  </td>
                </tr>
                 <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   Volume
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    From 78,3 dB(A) to 104,6 dB(A) depends on the tone
                  </td>
                </tr>
                 <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   32 selectable tones3 configurable volumes: low, medium, high
                  </td>
                </tr>

                <tr>
                  <td colSpan="5" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    CONNECTIONs
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   2 x 1,5 mm2 twisted and shielded cable
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   Maximum quantity of sounders in the loop:20 sounders in 1 km loop *10 sounders in 1 km loop
                  </td>
                </tr>

                <tr>
                  <td colSpan="5" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    ENVIRONMENT
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Operating temperature
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     From -10°C to +60°C
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Relative humidity
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     95% without condensation
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    IP Index
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     IP33C
                  </td>
                </tr>
                

                <tr>
                  <td colSpan="5" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    PHYSICAL  FEATURES
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Size 
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    100 mm x 75 mm
                  </td>
                </tr>
                 <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Material
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    ABS
                  </td>
                </tr>

                <tr>
                  <td colSpan="5" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    APPROVALS
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   EN 54-3 y EN 54-17
                  </td>
                </tr>
                 <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                  Certificate number: 0370-CPR-2664
                  </td>
                </tr>
               
              </tbody>
            </table>
                </div>
            
            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                DETNOV
              </span>
              
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                Fire Alarm
              </span>
            </div>

               {/* SHARE SECTION */}
             <SocialShare title="Check out this product!" />

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
            <h3 className="font-bold text-black dark:text-blue-400 text-x mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By DETNOV</h3>
            <ul className="space-y-4 text-gray-800 dark:text-gray-300">
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
                <h3 className="mb-4 text-2xl lg:text-2xl font-bold leading-tight tracking-wide">
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
const Mad464 = () => {
  const data = {
    title: "MAD-464-I Addressable Sounder",
    subtitle: "Designed to warm people in a building to start the evacuation procedure if necessary. ",
    description: "The range of addressable sounders MAD-46X-I has been designed to be used with Detnov’s addressable fire control panels and they conform to a basic device for warning signals in case of fire. The MAD-464-I addressable sounder is directly connected to the loop. It takes up to 1 address in the loop and needs to be directed by the PGD-200 programmer or by auto addressing.",
    features: [
      "Compatible with Detnov’s addressable control panels",
      "Addressable sounder",
      "Low consumption",
      "Loop-powered device",
      "Connections through removable terminal blocks and simple fitting of the cable",
      "With isolator",
      "EN 54-3 and EN 54-17 approved",
    ],

  };

  return <ProductLayout {...data} />;
};

export default Mad464;