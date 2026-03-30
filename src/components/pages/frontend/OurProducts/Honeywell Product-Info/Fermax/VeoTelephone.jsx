import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';


const VeoTelephone = () => {
  const specs = [
    { label: "Dimensions (mm)", value: "82 x 214 x 43" },
    { label: "Auto-on", value: "with this functionality it is possible to start a conversation with the entrance panel without a prior call. (with panel number 0 of your own block or with the last panel from which the call was made and during the 30 seconds after the end of the call)" },
    { label: "Mounting", value: "surface, Door release button and call to concierge, Call volume regulation on the side. (switch 3 positions: do not disturb, medium, high)" },
    { label: "Doorbell", value: "for direct connection of the home’s call button to the telephone Private communication. Conversation secret. 5 selectable melodies Line adapter included in the phone (A, C, default position OFF)" },
    { label: "Time to answer or open from when the call occurs", value: "30s" },
    { label: "Talk time", value: "90s" },
    { label: "Supply voltage", value: "18-24 Vdc" },
    { label: "Consumption", value: "idle: 0.3 W (v42.44); 0.55W (v43.45)maximum: 3.5W (v42.44); 3.9W (v43.45)" },
    { label: "Operating temperature", value: "[-5ºC, +40ºC]" },
    { label: "Terminals", value: "-, A, T, B, B" },
    { label: "Color", value: "matt white (similar to RAL 9003)" },
    { label: "Dimensions", value: "82 x 214 x 43" },
    { label: "Technology", value: "DUOX" },
    { label: "Measures of the product", value: "214x82x43 mm" },
    { label: "Weight", value: "0.317 kg" },
    { label: "Measures of the packed product", value: "25,7×8,5×5,3 cm" },
    { label: "EAN 13", value: "8424299034447" },
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
           DUOX PLUS VEO TELEPHONE
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
              A complete solution for homes and small buildings, this audio door entry system allows clear two-way communication with visitors. It has adjustable volume and call tone selection.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
                 The VEO telephone is made of high impact ABS plastic. Textured finish for easy cleaning 
                 and UV protection to make it more resistant to sunlight. The unique and exclusive design
                 of the handset incorporates a magnet that makes it easy for the user to hang up, 
                 ensuring a correct hanging at the end of the conversation. Its balanced design of pure 
                 lines is distinctive, modern and minimalist. When receiving a call, when the handset 
                 is off the hook, the conversation with the visitor begins. The conversation ends 
                 automatically after 90 seconds or when the handset hangs up. To open the door, 
                 press the blue lock release button.
              </p>

            </section>

            {/* Technical Specifications Table */}
            <section>
              <h2 className="font-bold text-xl text-black mb-4">Technical Specification:</h2>
              <div className="overflow-x-auto border border-gray-500">
                <table className="w-full text-left text-xs border-collapse border border-black">
                 
                  <tbody>
                    {specs.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                        <td className="p-3 border-b border-r border-black text-black text-[17px] font-semibold w-1/3">
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

export default VeoTelephone;