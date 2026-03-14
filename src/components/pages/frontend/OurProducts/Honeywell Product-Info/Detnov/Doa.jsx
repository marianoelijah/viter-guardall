import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';

const Doa = () => {
  const specs = [
    { label: "INDICATOR LIGHT", value: "DOA FJ/CPD", valu: "DOA K", vale: "DOA K/WP" },
    { label: "Operating voltage", value: "From 10.8 to 28 VDC", valu: "From 24 to 28 VDC", vale: "From 24 to 28 VDC" },
    { label: "Alarm current consumption", value: "110 mA", valu: "55 mA", vale: "55 mA" },
    { label: "Volume at 1 m", value: "From 81 to 87 dB", valu: "91,7 dB", vale: "91,7 dB" },
    { label: "Frequency", value: "3050 Hz", valu: "2900 Hz", vale: "2900 Hz" },

    { type: 'header', label: 'Connections' },
    { type: 'header', label: 'Environment' },

    { label: "Technology", value: "MIFARE DESFire EV2", valu: "MIFARE DESFire EV2 + Proximity", vale: "MIFARE DESFire EV2" },
    { label: "Dimensions", value: "3.4 x 2.1 x 0.03”(8.7 x 5.4 x 0.08 cm)", valu: "3.4 x 2.1 x 0.03”(8.7 x 5.4 x 0.08 cm)", vale: "1.6 x 1.2 x 0.2”(4.0 x 3.1 x 0.5 cm)" },
    { label: "Road Range", value: "Up to 3” (7.6 cm)", valu: "Up to 3” (7.6 cm)", vale: "Up to 3” (7.6 cm)" },
    { label: "Slot Punch", value: "Vertical or Horizontal", valu: "Vertical or Horizontal", vale: "N/A" },
    { label: "Storage & Operating Temperatures", value: "-50°F – 160°F (10°C – 71°C)", valu: "-50°F – 160°F (10°C – 71°C)", vale: "-13°F – 176°F (-25°C –80°C)" },
    { label: "Material", value: "PVC + PET", valu: "PVC + PET", vale: "Polycarbonate" },
    { label: "LEAF Compatibility", value: "LEAF enabled", valu: "LEAF enabled", vale: "LEAF enabled" },
    { label: "Color", value: "White", valu: "White", vale: "Black with White Center" },
    { label: "Country of Origin", value: "USA", valu: "USA", vale: "USA" },
    
  ];

  const productFeatures = [
    "Power supply 24 V",
    "Low current consumption",
    "EN 54-3 and EN 54-23 approved (depends on the model)",
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
           DOA Series Indicator Light with Buzzer
        </h1>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-lg my-10 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Left Column: Product Info */}
          <div className="lg:col-span-3">
            <p className="text-gray-800 text-[17px] mb-6">
               The DOA series indicator lights are signaling devices and acoustic warning by buzzer.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
                The DOA series indicator lights are signaling devices and acoustic warning by buzzer. 
                Due to their low consumption and high visibility, they are ideal for informing the user 
                about the actions of the extinguishing system, fire detection system and detection of 
                toxic gasses (carbon monoxide).
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
                  <thead>
                    <tr>
                      <th className="p-3 border-b border-r border-black text-black text-[17px] font-bold w-1/3">Specification</th>
                      <th className="p-3 border-b border-r border-black text-[17px] text-black">DOA FJ/CPD</th>
                      <th className="p-3 border-b border-r border-black text-[17px] text-black">DOA K</th>
                      <th className="p-3 border-b border-r border-black text-[17px] text-black">DOA K/WP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specs.map((spec, index) => {
                      if (spec.type === 'header') {
                        return (
                          <tr key={index}>
                            <td colSpan="4" className="p-3 border-b border-r border-black text-black text-[17px] font-bold bg-gray-300">
                              {spec.label}
                            </td>
                          </tr>
                        );
                      }
                      return (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                          <td className="p-3 border-b border-r border-black text-black text-[17px] font-bold w-1/3">
                            {spec.label}
                          </td>
                          <td className="p-3 border-b border-r border-black text-[17px] text-black">
                            {spec.value}
                          </td>
                          <td className="p-3 border-b border-r border-black text-[17px] text-black">
                            {spec.valu}
                          </td>
                          <td className="p-3 border-b border-r border-black text-[17px] text-black">
                            {spec.vale}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
            
             
            {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
                DETNOV
              </span>
              
              <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
                Fire Alarm
              </span>
            </div>

            {/* SHARE SECTION */}
            <div className="mt-8">
              <p className="font-medium text-black mb-3">Share:</p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/facebook.png" alt="Facebook" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/gmail.png" alt="Gmail" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/telegram.png" alt="Telegram" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/viber.png" alt="Viber" className="w-full h-full object-contain p-1" />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
            <h3 className="text-xl font-bold text-black mb-4 border-b pb-1">More By DETNOV</h3>
            <ul className="text-xl space-y-4 text-gray-500 transition-colors">
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

export default Doa;