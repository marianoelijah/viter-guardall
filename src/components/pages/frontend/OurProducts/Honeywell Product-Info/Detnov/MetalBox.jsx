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
                    Supply Voltage
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    90-264 Vac 150W
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                  Battery capacity
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   2 x 7.5 Ah.
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                   Loops: Maximum number of devices
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    250 per loop
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                   Maximum load
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    400 mA
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                   Maximum loop length
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    2 km
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                  Maximum cable resistance
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    44 ohms
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                  Maximum cable capacity
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    500 nF/km
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                  Sounder Outputs: Maximum load
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    500 mA per output
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Delay setting:
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Software
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                   Potential-free relay outputs
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    10 A to 30 Vdc
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    24V auxiliary output
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   500 mA
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold">
                    ENVIRONMENT
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Operating temperature
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    From -5°C to +40°C
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Relative humidity
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    95% without condensation
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
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
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Dimensions
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    460 mm x 360 mm x 120 mm
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Weight (without batteries)
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    7.65 kg
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold">
                    APPROVALS
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                  </td>
                  <td colSpan="1" className="border border-r border-black flex p-2">
                   EN 54-2, EN 54-4 and EN 54-13
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                  </td>
                  <td colSpan="1" className="border border-r border-black flex  p-2">
                  Certificate No.: 0370-CPR-1416
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
             <SocialShare title="Check out this product!" />

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
const MetalBox = () => {
  const data = {
    title: "CAD-150-2-MB | 2-Loop Addressable Control Panel With Metal Box",
    subtitle: "A fire alarm system ideal for all requirements in medium and large-sized facilities. ",
    description: "The Detnov CAD-150 range of addressable fire alarm systems provides the ideal solution for all requirements in medium and large-sized facilities. Thanks to their performance, straightforward installation and excellent value for money, they are the perfect solution for protecting areas requiring up to 2,000 detection devices per control panel, reaching up to 64,000 detection devices in network systems. Suitable for the installations of: Malls and department stores, university campus, industry, hospitals, etc.",
    features: [
      "Self-search, self-diagnosis and auto-addressing functions",
      "Log up to 6,000 events",
      "Up to 250 detection zones",
      "250 polarity-free devices per loop (2)",
      "Up to 50 sounders per loop (1)",
      "Compatible with Detnov Cloud",
      "Compatible with SGD-151 graphics software",
      "Free configuration and monitoring software",
      "Up to 32 control panels in a network (F-Network and S-Network)"
    ],

  };

  return <ProductLayout {...data} />;
};

export default MetalBox;