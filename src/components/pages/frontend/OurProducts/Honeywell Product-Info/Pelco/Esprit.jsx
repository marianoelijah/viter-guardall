import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';



const Esprit = () => {

  const productFeatures = [
    "Built for high corrosion resistance",
    "Heavy-duty stainless steel housing",
    "Obtained Lloyd’s Register Type Approval",
    "Visual & thermal views in a single device",
    "Run up to 4 simultaneous video streams",
    "Rated from ‑40° to 65°C (-40° to 149°F)"
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          Esprit Anti-Corrosion Bispectral PTZ
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
              Designed for environments with harsh conditions,, this corrosion-resistant camera provides visual and thermal imaging to secure a property.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
              Securing rugged environments means accounting for intense snowfall, to harsh corrosion and 
              challenging lighting conditions. The Esprit Anti-Corrosion Bispectral PTZ is a corrosion-resistant 
              camera that combines visual and thermal imaging into a single device to enhance operational awareness.
              The thermal camera can accurately detect a target in most environmental conditions, while the visual 
              camera achieves greater recognition and identification. Designed with heavy-duty stainless steel, 
              the Esprit Anti-Corrosion Bispectral PTZ is made for rugged environments and offers maximum 
              resistance against corrosion, making it an ideal choice for cargo ships, ports, roadways and other 
              highly corrosive industries.
              </p>

               <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1 text-black">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            </section>

            {/* Technical Specifications Table */}
              <div className="bg-gray-300 p-6 shadow rounded border border-r divine-y">
            <h2 className="font-semibold text-black text-xl mb-4">Technical Specification</h2>

            <table className="w-full border text-[15px] text-black">
              <tbody>
                <tr className="bg-gray-100 font-bold">
                  <td className="border-r border-black border  p-2">Model Name</td>
                  <td className="border border-r border-black  p-2">PTZ</td>
                  <td className="border border-r border-black  p-2">BULLET</td>
                </tr> 
                <tr>
                  <td className="border border-r border-black p-2 font-bold">Part Number</td>
                  <td className="border border-r border-black  p-2">ESSE1-2X40-SPT-M2ESSE1-2X40-SPT-ACESSE1-2X40-SPT-M1</td>
                  <td className="border border-r border-black  p-2">ESSE1-2X40-SBT-PAPESSE1-2X40-SBT-PAESSE1-2X40-SBT-PAW</td>
                </tr> 
                <tr>
                  <td className="border border-r border-black p-2 font-bold">Resolution (MP)</td>
                  <td className="border-black  p-2">2 MP</td>
                  <td className="border-black border-r  p-2"></td>
                </tr>
                 <tr>
                  <td className="border border-black p-2 font-bold">
                    Image Sensor
                  </td>
                  <td className="border-black border p-2">
                    1/2.8” progressive scan CMOS
                  </td>
                  <td className="border-black border  p-2">
                  </td>
                </tr> 
                 <tr>
                  <td className="border border-r border-black p-2 font-bold">
                    Optical Zoom
                  </td>
                  <td className="border-black p-2">
                    40X
                  </td>
                  <td className="border-black border-r  p-2">
                  </td>
                </tr> 
                <tr>
                  <td className="border border-r border-black p-2 font-bold">
                    Pan
                  </td>
                  <td className="border border-r border-black  p-2">
                    360°, endless, up to 100°/second
                  </td>
                  <td className="border border-r border-black  p-2">
                    N/A
                  </td>
                </tr>
                 <tr>
                  <td className="border border-r border-black p-2 font-bold">
                    Pan
                  </td>
                  <td className="border border-r border-black  p-2">
                    -90° to +90°, up to 100°/second
                  </td>
                  <td className="border border-r border-black  p-2">
                    N/A
                  </td>
                </tr>
                
                <tr>
                  <td className="border border-r border-black p-2 font-bold">
                    Max. Dynamic Range (dB)</td>
                  <td className="border border-r border-black p-2">
                    120 dB
                  </td>
                  <td className="border border-r border-black p-2"></td>
                </tr>
                <tr>
                  <td className="border border-r border-black p-2 font-bold">
                    Max. Image Rate (50 Hz / 60 Hz)
                  </td>
                  <td colSpan className="border border-r border-black  p-2">
                    Up to 60 fps
                  </td>
                  <td className="border border-r border-black  p-2"></td>
                </tr>
                <tr>
                  <td className="border border-r border-black p-2 font-bold">Environmental</td>
                  <td className="border border-r border-black  p-2"></td>
                  <td className="border border-r border-black  p-2"></td>
                </tr>
                <tr>
                  <td className="border border-r border-black p-2 font-bold">Thermal camera</td>
                  <td className="border border-r border-black  p-2"></td>
                  <td className="border border-r border-black  p-2"></td>
                </tr>

                <tr className="bg-gray-100 font-bold border border-black">
                  <td className="border-black p-2">AUDIO, POWER, STORAGE</td>
                  <td className="border-black  p-2"></td>
                  <td className="border-black  p-2"></td>
                </tr> 
                 <tr>
                  <td className="border border-r border-black p-2 font-bold">Image Compression Method</td>
                  <td className="border-black p-2 border-r border">H.264 and H.265 Pelco Smart Compression, Motion JPEG</td>
                  <td className="border-black border border-r  p-2"></td>
                </tr>
                 <tr>
                  <td className="border border-r border-black p-2 font-bold">Audio Input/Output</td>
                  <td className="border-black border border-r p-2">None</td>
                  <td className="border-black border border-r  p-2"></td>
                </tr>

                 <tr>
                  <td className="border border-r border-black p-2 font-bold">External I/O Terminals</td>
                  <td className="border-black border border-r p-2">1 Alarm In, 1 Alarm Out, 1 Washer pump Out, 1 Remote reset In</td>
                  <td className="border-black border border-r  p-2">2 Digital Output (optional)</td>
                </tr>
                 <tr>
                  <td className="border border-r border-black p-2 font-bold">Power Source</td>
                  <td className="border-black border border-r p-2">220-230 VAC ±10%, 0.5 A max, 50/60 Hz; 120 VAC ±10%, 1 A max, 50/60 Hz;4 VAC ±10%, 5 A max, 50/60 Hz</td>
                  <td className="border-black border border-r  p-2">POE+; 24 VAC, 1.32A, 24 VDC, 0.9A</td>
                </tr>
                <tr>
                  <td className="border border-r border-black p-2 font-bold">Onboard Storage</td>
                  <td className="border-black border border-r p-2">MicroSD/microSDHC/microSDXC slot – video speed class card required.Class V10 or better recommended.</td>
                  <td className="border-black border border-r  p-2">Pre-installed 128 GBytes storage</td>
                </tr>
                 <tr className="bg-gray-100 font-bold border border-black">
                  <td className="border-black p-2">Learn more at www.pelcom.com </td>
                  <td className=" p-2"></td>
                  <td className=" p-2"></td>
                </tr> 
              </tbody>
            </table>
                </div>

            {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
                PELCO
              </span>
              
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
                CCTVs
              </span>
            </div>

            {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

        </main>

          {/* Sidebar */}
              <aside className="lg:w-1/4 space-y-6"> 
                     <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                        <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By PELCO</h3>
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

export default   Esprit;