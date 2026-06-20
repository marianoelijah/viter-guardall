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
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
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
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
                FERMAX
              </span>
              
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
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
                        <ul className="space-y-4 text-gray-700">
                <NavLink to="/our-products/onity/directkey-with-serene" className='block'>
                  <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>Onity DirectKey with Serene</li>
                </NavLink>
                <NavLink to="/our-products/detnov/addressable-sounder" className='block'>
                  <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>MAD-401 and MAD-402 Series Modules</li>
                </NavLink>
                <NavLink to="/our-products/acti/bay-raid-backmount-standalone" className='block'>
                  <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>INR 415 256-Channel RAID Standalone</li>
                </NavLink>
                <NavLink to="/our-products/acti/channel-tower-strandalone" className='block'>
                  <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>GNR 340 100-Channel Tower NVR</li>
                </NavLink>
                <NavLink to="/our-products/acti/bay-raid-backmount-standalone" className='block'>
                  <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>INR 415 256-Channel RAID Standalone</li>
                </NavLink>
                <NavLink to="/our-products/acti/channel-tower-strandalone" className='block'>
                  <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>GNR 340 100-Channel Tower NVR</li>
                </NavLink>
              </ul>
                      </div>
                      
            
            
                      {/* Contact Card */}
                      <div 
              className="relative min-h-[240px] overflow-hidden rounded-2xl p-8 text-white shadow-md bg-cover bg-center bg-blend-multiply bg-blue-900/85"
              style={{ backgroundImage: "url('/dist/assets/image/Our Products/quickalert.jpg')" }}
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
    </div>
    <Footer />
    </>
   
  );
};

export default VeoTelephone;