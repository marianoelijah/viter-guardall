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
    <div className="bg-gray-200 dark:bg-[#121214] min-h-screen font-sans text-[#333] dark:text-gray-200 transition-colors duration-300">
      {/* Banner Header */}
      <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-6 text-center transition-colors duration-300">
        <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          {title}
        </h1>
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto shadow-xl my-10 p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Product Info */}
          <div className="lg:col-span-3 bg-gray-100 dark:bg-[#1e1e22] p-6 md:p-8 rounded-xl border border-transparent dark:border-gray-800 shadow-md transition-colors duration-300lg:col-span-3">
            <p className="text-[17px] text-gray-680 leading-relaxed whitespace-pre-line mb-2">{subtitle}</p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Description:</h2>
              <p className="text-[17px] text-gray-680 leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </section>

            <section className="mb-5">
              <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] text-gray-680 space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>

             {/* Technical Specifications Table */}
          <div className="p-6 shadow rounded border border-r divine-y">
            <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Technical Specification</h2>

            <table className="w-full border text-[15px] text-black">
              <tbody>

                 <tr>
                  <td colSpan="5" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    CONTROL PANEL 
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Power supply
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    90-264VAC 50/60 Hz
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Battery capacity
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     2 x 7.5 Ah
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   Zones
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Max. alarm current consumption: 82 mAMax. quiescent current consumption: 3.5 mAMax. devices per zone: 32 detectors / 10 MCPMax. cable resistance per zone: 44 Ω
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Sounder outputs
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Maximum load: 500 mA per outputDelay selectable on board: 0 – 10 minutes
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Free contact relay outputs
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    10A to 30VCC
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    24V auxiliary output:
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    500 mA (1)
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    24V resettable output:
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Maximum load: 500 mA (1)Replacement time:  5 seconds
                  </td>
                </tr>

                <tr>
                  <td colSpan="5" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    ENVIRONMENT
                  </td>
                </tr>

                 <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Operating temperature
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    From -5°C to +40°C
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Relative humidity
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    95% without condensation
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   IP Index
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    IP30
                  </td>
                </tr>

                <tr>
                  <td colSpan="5" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    PHYSICAL FEATURES
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Size
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    439 mm x 268 mm x 112 mm
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   Weight (without batteries)
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   1,9 kg
                  </td>
                </tr>

              

                <tr>
                  <td colSpan="5" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    APPROVALS
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   EN 54-2, EN 54-4 and EN 54-13
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                  </td>
                  <td colSpan="3" className="p-3 border-r border-b border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Certificate number: 0370-CPR-3149     PR-1811-064
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
const ControlPanel = () => {
  const data = {
    title: "CCD-102 Conventional Control Panel Series",
    subtitle: "A fire control panel ideal for small and medium installations",
    description: "The range of conventional fire detection control panels of Detnov CCD-100 series have been certified according to EN 54-2, EN 54-4 and EN 54-13 to cover all the requirements of small and medium installations. This range of fire control panels is made up of 4 models and it offers 1, 2, 8 and 12 zones. The common features to the whole range include: the discrimination between manual call point alarm and detector alarm, relay outputs for alarm status and fault status, 2 monitored sounder outputs, 24V auxiliary power output, 24V resettable power output and a configurable input. It also allows to connect optional cards: relay cards, supervised sounder cards and communication cards to allow remote control and integration with other systems.",
    features: [
      "2, 4, 8 and 12 zones models",
      "Alarm status relay output",
      "Fault status relay output",
      "2 supervised sounder outputs (500 mA each output)",
      "Sounder delay settings on motherboard",
      "24V auxiliary power output (500 mA (1))",
      "24V auxiliary power output (500 mA (1))",
      "Configurable external input",

      "Test mode with auto-reset function",
      "Multilingual keyboard",
      "ABS plastic case, can be fitted into the wall (optional)",
      "Optional supervised sounders expansion card",
      "Optional free contact relay expansion card",
      "Optional communication expansion card",
      "EN 54-2, EN 54-4 and EN 54-13 approved",
    ],

  };

  return <ProductLayout {...data} />;
};

export default ControlPanel;