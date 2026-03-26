import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';

// Shared Layout Component to maintain design consistency across all products
const ProductLayout = ({ title, subtitle, description, features, specs, sidebarItems }) => {
  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-slate-800">
      {/* Banner Header */}
      <header className="bg-[#7f95b8] text-white py-14 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
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

                 <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold">
                    CONTROL PANEL 
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Power supply
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    90-264VAC 50/60 Hz
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Battery capacity
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     2 x 7.5 Ah
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Zones
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Max. alarm current consumption: 82 mAMax. quiescent current consumption: 3.5 mAMax. devices per zone: 32 detectors / 10 MCPMax. cable resistance per zone: 44 Ω
                  </td>
                </tr>

                 {/* <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold">
                    CONNECTIONS
                  </td>
                </tr> */}
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Sounder outputs
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Maximum load: 500 mA per outputDelay selectable on board: 0 – 10 minutes
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Free contact relay outputs
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    10A to 30VCC
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    24V auxiliary output:
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    500 mA (1)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    24V resettable output:
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Maximum load: 500 mA (1)Replacement time:  5 seconds
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold">
                    ENVIRONMENT
                  </td>
                </tr>

                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Operating temperature
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    From -5°C to +40°C
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Relative humidity
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    95% without condensation
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   IP Index
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    IP30
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold">
                    PHYSICAL FEATURES
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Size
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    439 mm x 268 mm x 112 mm
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Weight (without batteries)
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   1,9 kg
                  </td>
                </tr>

              

                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold">
                    APPROVALS
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   EN 54-2, EN 54-4 and EN 54-13
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Certificate number: 0370-CPR-3149     PR-1811-064
                  </td>
                </tr>
              </tbody>
            </table>
                </div>
            

            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                DETNOV
              </span>
              
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                Fire Alarm
              </span>
            </div>

               {/* SHARE SECTION */}
            <div className="mt-8">
              <p className="font-medium text-black mb-3">Share:</p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/facebook.png" alt="Facebook" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/gmail.png" alt="Gmail" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/telegram.png" alt="Telegram" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/viber.png" alt="Viber" className="w-full h-full object-contain p-1" />
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 p-4 border border-black  border-r mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By DETNOV</h3>
            <ul className="text-xs space-y-4 text-gray-500 transition-colors">
              <li className='cursor-pointer hover:text-[#f08c09]'>Onity DirectKey with Serene</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>INR 415 256-Channel 12 Bay RAID Rackmount Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>GNR 340 100-Channel Tower Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>ENR 130 16-Channel Desktop Standalone NVR - No HDD Included</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>Z86 Outdoor Network Dome Camera with Night Vision</li>
            </ul>
          </div>

            {/* Blue CTA Card */}
             <div
              className="bg-blue-600 text-white p-6 rounded shadow-md overflow-hidden relative min-h-[200px]"
              style={{
                backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(30, 64, 175, 0.8)), url('/src/assets/image/Our Products/quickalert.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="relative z-10 px-4 max-w-3xl">
                 <h3 className="text-xl font-semibold mb-3">
                   Secure Your Piece Of Mind Today
                 </h3>
                 <p className="text-lg mb-4">
                   Contact Guard-All now for a customized security solution
                   that protects what matters most.
                 </p>
              <button className="bg-blue-700 hover:bg-blue-400 text-white font-semibold px-4 py-2 rounded w-full">
                <NavLink to="/contacts" className="w-full h-full block">
                CONTACT US TODAY
                </NavLink>
              </button>
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