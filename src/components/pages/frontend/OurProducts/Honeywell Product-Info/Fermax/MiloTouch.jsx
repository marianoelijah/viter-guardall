import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';


const MiloTouch = () => {
  const specs = [
    { label: "System", value: "CPU: Quad-core Cortex™-A7 1.5GHzGPU: Mali400MP2FLASH: 4GBSDRAM: 1GB DDR3L"},
    { label: "Screen", value: "TFT Color 4.3”Resolution 480 x 272 pixelsViewing angle: 110º H, 90º VContrast: 400/1Brightness: 200cd/m2" },
    { label: "Audio Features", value: "G.711 codecAudio OLR > 15dB" },
    { label: "Camera", value: "1/3” CMOS ColorHorizontal 72º, Vertical 54º1.2 MP0.5 LUX minimum illumination. Automatic activation of white LEDs.AWB" },
    { label: "Consumption", value: "Standby: 250 mAOperating: 500 mA" },
    { label: "Operating voltage", value: "12VDC" },
    { label: "Connectivity", value: "RJ-45 Ethernet connectorRS485 connection for elevator controlWiegand 26 connector for input-output of access control devices.Built-in web server for remote configuration and management. Integrated web server for configuration" },
    { label: "Funcionament condition", value: "Temperature: -40ºC.. + 55ºCHumidity: 10 – 90% (No condensation)IP54" },
    { label: "Technology", value: "MEET" },
    { label: "Measures of the product", value: "154 x 379 x 50 mm" },
    { label: "Weight", value: "2.207 kg" },
    { label: "Measures of the packed product	", value: "46,8x10x21 cm" },
    { label: "EAN 13", value: "8424299095325" },
  ];

  const productFeatures = [
    "Aluminum profile",
    "High Resistance Tempered Glass (Ref.9532) or PMMA (Ref.9531)",
    "Total Hands-Free Communication.",
    "High Definition color camera.",
    "4.3” TFT color screen.",
    "Facial Recognition (up to 6,000 users)",
    "Reset and setting to remote factory values",
    "Wiegand-26 input/output for third-party integration.",
    "Works in a wide range of environments.",
    "Android Modular Structure.",
    "Integrated Access Control for 100,000 Cards.",
    "Configurable in 10 languages",
    "Remote Firmware Update.",
    "Fire alarm with door unlocking and message to concierge and MMS.",
    "Forced door alarm and timerable door open alarm.",
    "Compatible with Elevator Control Function."
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          MILO TOUCH DIGITAL VIDEO PANEL
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
              A combination of sleek design and advanced functionality, this video & audio door panel 
              features a 7-inch touchscreen for clear communication with visitors.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
               The MILO board comes in two different versions: capacitive touch keyboard and mechanical 
               keyboard. It has a 4.3” TFT that facilitates interaction with the user and indicates 
               how to make calls.
              </p>

               <h2 className="font-bold text-xl text-black mb-2">Product Features / Specifications:</h2>
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
            
             
            {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                FERMAX
              </span>
              
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                Audio-Video Intercom & PA-BGM
              </span>
            </div>

            {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

        </main>

          {/* Sidebar */}
              <aside className="lg:w-1/4 space-y-6"> 
                     <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                        <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By FERMAX</h3>
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

export default MiloTouch;