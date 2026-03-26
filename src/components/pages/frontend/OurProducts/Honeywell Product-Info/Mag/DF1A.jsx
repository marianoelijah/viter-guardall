import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';

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
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
         DF1A Fingerprint with Optical Sensor
        </h1>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-lg my-10 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Left Column: Product Info */}
          <div className="lg:col-span-3">
            <p className="text-gray-800 text-[17px] mb-6">
            A door access control system that requires fingerprint authentication and uses a robust optical sensor. 
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
               DF1A is an optical fingerprint door access control system with a time attendance function. DF1A increases door access security by requiring fingerprint authentication. Fingerprint access reader design using optical sensors is more robust and less prone to damage by vandalism. DF1A is ideal for offices, factories or any commercial building that require cost effective and reliable fingerprint access control solutions.
              </p>
            </section>


            {/* Technical Specifications Table */}
            <section>
              <h2 className="font-bold text-xl text-black mb-4">Ordering Info:</h2>
              <div className="overflow-x-auto border border-gray-500">
                <table className="w-full text-left text-xs border-collapse">
                 
                  <tbody>
                    {specs.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                        <td className="p-3 border-b border-r border-gray-500 text-[15px] font-bold w-1/3 text-gray-700">
                          {spec.label}
                        </td>
                        <td className="p-3 border-b border-gray-500 text-[15px] text-gray-600">
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
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                MAG
              </span>
              
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                Access Control System
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

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-8">
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

             {/* Contact Card */}
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
          </div>
        </div>
      </main>
    </div>
    <Footer />
    </>
   
  );
};

export default DF1A;