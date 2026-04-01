import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';

const AlarmExpansion = () => {
  // Data structure for the multi-section Technical Specifications table
  const technicalSpecs = {
    communications: [
      { label: "Wiring from Controller", value: "EBIC5" },
      { label: "Supervision", value: "± 2% with MELM 3" },
    ],
    physical: [
      { label: "Alarm", value: "Physical tamper on panel enclosure" },
      { label: "Dimensions", value: "6.85 x 4.05 x .52 in (17.4 x 10.3 x 1.32 cm)" },
      { label: "Shipping Weight", value: "1 lb (0.45 kg)" },
      { label: "Operating Temperature Range", value: "32° to 140°F (0° to 60°C)" },
      { label: "Relative Humidity", value: "0 to 90%, non-condensing" },
      { label: "Listings and Approvals", value: "• UL-294, UL-1076• CE" },
    ]
  };

  return (
    <>
    <Header />
    <div className="bg-gray-200 min-h-screen font-sans text-[#333]">
      {/* Blue Header Banner */}
      <header className="bg-[#7f95b8] text-white py-14 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          AEB8 Alarm Expansion Board with 8 Additional Line Model Inputs
        </h1>
      </header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Left Column (8/12 width) */}
          <main className="lg:col-span-8">
            <p className="text-[17px] text-gray-800 mb-6">
              Used for a variety of security monitoring, this device provides an additional 8 line module inputs per board.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
              <p className="text-[17px] text-gray-800 leading-relaxed">
                The Alarm Expansion line module inputs are used for a variety of security monitoring functions in an access control application. 
                The AEB8 has four (4) address jumpers, and a range of eight (8) addresses. 
                This addressing scheme enables up to four (4) AEB8s to reside on one controller.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] text-gray-800 space-y-1">
                <li>Up to 32 expansion inputs (intrusion detection, fire doors, windows)</li>
                <li>Add up to 4 AEB8 per controller</li>
                <li>Less than two (2) second response time with contact, tamper, motion, and line supervision</li>
                <li>Use with any Hirsch end-of-line module (MELM 1, 2, or 3)</li>
                <li>Attach to interior motion detectors, perimeter doors and windows</li>
                <li>Request to exit</li>
                <li>Tamper inputs</li>
              </ul>
            </section>

            {/* Technical Specification Table */}
            <section className="mt-10">
              <h2 className="font-bold text-xl text-black mb-4">Technical Specification:</h2>
              <div className="border border-gray-500">
                <table className="w-full text-left text-[12px] border-collapse">
                  <tbody>
                    {/* Communications Section */}
                    <tr className="bg-gray-200">
                      <th colSpan="2" className="p-2 border-b border-gray-500 text-[17px] text-black font-bold uppercase tracking-wide">Communications</th>
                    </tr>
                    {technicalSpecs.communications.map((spec, i) => (
                      <tr key={`comm-${i}`} className="border-b border-gray-500">
                        <td className="p-2 border-r border-gray-500 font-bold w-1/3 text-[17px] text-black  bg-gray-100">{spec.label}</td>
                        <td className="p-2 text-gray-800 text-[15px]">{spec.value}</td>
                      </tr>
                    ))}

                    {/* Physical Section */}
                    <tr className="bg-gray-200">
                      <th colSpan="2" className="p-2 border-b border-gray-500 font-bold uppercase text-[17px] text-black tracking-wide">Physical</th>
                    </tr>
                    {technicalSpecs.physical.map((spec, i) => (
                      <tr key={`phys-${i}`} className="border-b border-gray-500 last:border-b-0">
                        <td className="p-2 border-r border-gray-500 font-bold w-1/3 bg-gray-100 text-[17px] text-black">{spec.label}</td>
                        <td className="p-2 text-gray-800 text-[15px]">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

              {/* Tags & Social */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                HIRSCH
              </span>
              
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                Access Control System
              </span>
            </div>

              {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

          </main>

          {/* Sidebar (4/12 width) */}
          <aside className="lg:col-span-4 space-y-8">
              <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By HIRSCH</h3>
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
      </div>
    </div>
    <Footer />
    </>
    
  );
};

export default AlarmExpansion;