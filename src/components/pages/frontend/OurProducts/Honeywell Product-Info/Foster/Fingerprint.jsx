import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';

const Fingerprint = () => {
  const productData = {
    title: "DCS 5: FINGERPRINT IMAGING WORKSTATION",
    subtitle: "A comprehensive imaging system for any type of fingerprint on any surface or background, ensuring that maximum detail is revealed.",
    description: "DCS 5 is a comprehensive imaging system for the detection, capture and enhancement of almost any type of fingerprint on any surface or background to ensure that maximum detail is revealed. Precise wavebands of illumination from UV through the visible to IR are provided to improve the visualization of every type of fingerprint whether it be latent, contaminated or chemically treated.",
    features: [
      "Fluorescence Imaging",
      "Infrared Imaging",
      "Reflected longwave UV Imaging",
      "Cylindrical Surface Unwrapping",
      "Digital Enhancement",
      "Image Validation & Audit Trail",
      "Interactive Guidance",
      "Comparison & AFIS Search"
    ],
    moreByBrand: [
      "Onity DirectKey with Serene",
      "MAD-401 and MAD-402 Series Addressable Modules",
      "INR 415 256-Channel 12 Bay RAID",
      "GNR 340 100-Channel Tower Standalone",
      "ENR 130 16-Channel Desktop Standalone NVR",
      "Z86 Outdoor Network Dome Camera"
    ]
  };

  return (
    <>
      <Header />
      <div className="bg-gray-200 min-h-screen font-sans text-slate-800">
        <header className="bg-[#7f95b8] text-white py-14 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold max-w-5xl mx-auto uppercase tracking-wider">
            {productData.title}
          </h1>
        </header>

        <main className="max-w-6xl mx-auto bg-gray-100 shadow-xl my-10 p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-3">
              <p className="text-[15px] text-black mb-6">{productData.subtitle}</p>
              
              <section className="mb-8">
                <h2 className="font-bold text-xl text-black mb-2 border-b-2 border-gray-100 pb-1 inline-block">Product Description:</h2>
                <p className="text-base text-black leading-relaxed mt-2">{productData.description}</p>
              </section>

              <section className="mb-10">
                <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 list-disc text-black ml-5 text-[15px]">
                  {productData.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </section>

              {/* Technical Spec Table */}
              <section className="overflow-x-auto">
                <h2 className="font-bold text-xl mb-4">Technical and System Specification:</h2>
                <table className="w-full text-[15px] text-black border-collapse border border-black">
                  
                  <tbody>
                    {/* Model Variants */}
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        PRO Image Capture
                      </td>
                      <td className="border border-black p-2">
                        <span className="font-bold">Nikon D6</span>– Custom-modified camera- 20.8 million effective pixels- 35.9 x 23.9mm CMOS sensor<br/>
                        <span className="font-bold">105mm Macro Lens Kit </span>– For visible imaging- Circular polarizing filter- Visible pass rilter- Filter step ring<br/>
                        <span className="font-bold">Infrared Imaging Filters</span>– 715nm IR imaging filter- 780nm IR imaging filter- 850nm IR imaging filter<br/>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold">
                        PRO Illumination
                      </td>
                      <td className="border border-black p-2">
                        <span className="font-bold">Crime-lite 8×4 MK2</span>Multi-waveband Ring Light- 32x high intensity LEDs- White, UV, Violet, Blue, Blue/Green, Orangeand Red illumination- Set of 12 slot-in fluorescence viewing filters- Filter storage case- Ambient light shielding lens bellows<br/>
                        <span className="font-bold">Halogen Light Source </span>– 150W halogen lamp- Variable dimmer control<br/>
                        <span className="font-bold">Fibre Optic Light Guide</span>– 4” Ring Light- Backlight- Twin arm gooseneck- Dark field ring light<br/>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold">
                        DCS5 System Essentials
                      </td>
                      <td className="border border-black p-2">
                        <span className="font-bold">Pro-Grade Copy Stand</span>+ Ring Light Mount+ Camera Filter Pouch+ Camera Filter Step-ring+ DCS Photography Pack<br/>
                        <span className="font-bold">DCS Light Guide Clamp Set</span>+A selection of clamps and flexible arms for the positioning of light guides <br/>

                        <span className="font-bold">Desktop PC+</span> 32” 4K UHD Monitor+ Photo Printer<br/>
                        <span className="font-bold">DCS 5 Software+</span> Image Pro Analyser+ VeriData iDem+ DCS Wizard<br/>
                      </td>
                    </tr>
                  </tbody>
                  
                   <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        PRO Image Capture
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        ✓ Nikon D6✓ 105mm Macro Lens Kit✓ Infrared Imaging Filters
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        PRO Illumination
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        ✓ Halogen Light Source✓ Fibre Optic Light Guide✓ Crime-lite 8×4 MK2
                      </td>
                    </tr>
                     <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        DCS5 System Essentials
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       ✓ Pro-Grade Copy Stand✓ DCS Light Guide Clamp Set✓ Desktop PC✓ DCS 5 Software
                      </td>
                    </tr>

                     <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       Expert Image Capture
                      </td>
                      <td className="border border-black p-2">
                        <span className="font-bold">85mm Shift/Tilt Lens Kit</span>
                        – Manual focus lens with shift and tilt control- Circular polarizing filter- Visible pass filter- Filter step-ring* Requires macro extension tubes<br/>
                        <span className="font-bold">60mm UV/Vis/IR Lens Kit</span>
                        – Macro lens with 310-1100nm transmission- 330-385nm bandpass filter- Circular polarizing filter- Visible pass filter- Filter step-ring* Requires macro extension tubes<br/>
                      </td>
                    </tr>
                     <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       EXPERT Illumination
                      </td>
                      <td className="border border-black p-2">
                        <span className="font-bold">Crime-lite 8 x 4 MK 4 N-IR Imaging Ring Light</span>
                        – 32x high intensity LEDs- Blue, Red and N-IR LED illumination- Set of 4 slot-in fluorescence viewing filters- Filter storage case- Sample of fpNatural1 IR fingerprint powder- Sample of fpNatural2 NIR fingerprint powder<br/>
                        <span className="font-bold">Crime-lite 82S UV Light Source</span>
                        – 16x 365nm LED illumination<br/>
                         <span className="font-bold">Line Light Attachment</span>
                        – For use with FLS or Halogen Light Source.<br/>
                         <span className="font-bold">Forensic Light Source (FLS)</span>
                        – 100W halogen lamp- 400-1000nm continuous bandpass filter<br/>
                      </td>
                    </tr>

                </table>
              </section>

              {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
               FOSTER + FREEMAN
              </span>
              
              <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
                Forensic Examination
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
                       <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By FOSTER + FREEMAN</h3>
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

export default Fingerprint;