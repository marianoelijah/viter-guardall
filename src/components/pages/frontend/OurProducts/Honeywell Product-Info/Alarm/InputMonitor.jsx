import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';


const InputMonitor = () => {
  const specs = [
    { label: "Input power", value: "12 to 24 VDC ±10%,30 mA max"},
    { label: "Communication", value: "Shielded 2-wire RS-485" },
    { label: "Inputs", value: "16 unsupervised/supervised programmable inputs, standard EOL: 1k/1kΩ, 1%, 1⁄4 watt, one dedicated input for each ofthe following: Tamper, AC Fail, Battery Fail" },
    { label: "Outputs", value: "Two Form-C relay outputs: 2 A @ 30 VDC resistive" },
    { label: "Certifications", value: "UL 294 and UL1076 recognizedCE compliant, FCC Class A, ICES-003" },
    { label: "Dimensions", value: "6.46 x 5.51 x 1.02” (16.4 x 14 x 2.6 cm)" },
    { label: "Temperature", value: "32°F — 158°F (0°C — 70°C) operational, -67°F — 185°F (-55°C — 85°C) storage32°F — 158°F (0°C — 70°C) operational, -67°F — 185°F (-55°C — 85°C) storage" },
    { label: "Operating humidity", value: "5% – 85%(non-condensing) RH" },
  ];

  const productFeatures = [
    "Sixteen supervised or unsupervised inputs",
    "Two relay outputs",
    "Three dedicated inputs for tamper, AC fail, Battery fail",
    "Connect up to 16 expansion modules per expansion port, up to 31 expansion modules total",
    "For use with X1100 Door Controller only"
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
           ADC-AC-X200 Input Monitor Expansion Module
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
                Designed to work with X1100 Door Controllers, this expansion module adds support for 16 additional inputs and two relay outputs. 
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
              Alarm.com’s Smarter Access Control is a powerful, easy-to-use solution for commercial 
              properties that seamlessly integrates with the Alarm.com for Business platform. 
              This platform enables intelligent automation and features, such as disarming when 
              badging in, locking doors when arming, and tagging access events on the video timeline. 
              </p>
              <p className="text-gray-800 text-[17px] leading-relaxed">
              The X200 Input Monitor Expansion Module adds support for sixteen additional general
              purpose supervised or unsupervised inputs and two additional relay outputs to an Alarm.com
              X1100 Door Controller.
              </p>

               <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1 text-black">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            </section>

            {/* Technical Specifications Table */}
            <section>
              <h2 className="font-bold text-xl text-black mb-4">Technical Specification:</h2>
              <div className="overflow-x-auto border border-gray-500">
                <table className="w-full text-left text-xs border-collapse border border-black">
                 
                  <tbody>
                    {specs.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                        <td className="p-3 border-b border-r border-black text-black text-[17px] font-bold w-1/3">
                          {spec.label}
                        </td>
                        <td className="p-3 border-b border-r border-black text-[16px] text-gray-800">
                          {spec.value}
                        </td>
                       
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* <img src="" alt="" /> */}
            
             
            {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                ALARMCOM
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

        </main>

          {/* Sidebar */}
              <aside className="lg:w-1/4 space-y-6"> 
                     <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                        <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">ALARM.COM</h3>
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
            
                </aside>

         

        </div>
    </div>
    <Footer />
    </>
   
  );
};

export default InputMonitor;