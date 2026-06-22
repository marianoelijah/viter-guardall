import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

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
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
               FOSTER + FREEMAN
              </span>
              
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                Forensic Examination
              </span>
            </div>

            {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

            </div>

            {/* Right Column: Sidebar */}
                     <div className="lg:col-span-1 space-y-8">
                         <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                       <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By FOSTER + FREEMAN</h3>
            <ul className="space-y-4 text-gray-800 font-medium">
              <NavLink to="/our-products/onity/directkey-with-serene" className='block'>
                <li className='cursor-pointer hover:text-[#ff5f31] transition-colors break-words'>Onity DirectKey with Serene</li>
              </NavLink>
              <NavLink to="/our-products/detnov/addressable-sounder" className='block'>
                <li className='cursor-pointer hover:text-[#ff5f31] transition-colors break-words'>MAD-401 and MAD-402 Series Modules</li>
              </NavLink>
              <NavLink to="/our-products/acti/bay-raid-backmount-standalone" className='block'>
                <li className='cursor-pointer hover:text-[#ff5f31] transition-colors break-words'>INR 415 256-Channel RAID Standalone</li>
              </NavLink>
              <NavLink to="/our-products/acti/channel-tower-strandalone" className='block'>
                <li className='cursor-pointer hover:text-[#ff5f31] transition-colors break-words'>GNR 340 100-Channel Tower NVR</li>
              </NavLink>
              <NavLink to="/our-products/acti/bay-raid-backmount-standalone" className='block'>
                <li className='cursor-pointer hover:text-[#ff5f31] transition-colors break-words'>INR 415 256-Channel RAID Standalone</li>
              </NavLink>
              <NavLink to="/our-products/acti/channel-tower-strandalone" className='block'>
                <li className='cursor-pointer hover:text-[#ff5f31] transition-colors break-words'>GNR 340 100-Channel Tower NVR</li>
              </NavLink>
            </ul>
                     </div>
           
                        {/* Contact Card */}
                        <div
                className="relative min-h-[240px] overflow-hidden rounded-xl p-8 text-white shadow-md bg-cover bg-center bg-blend-multiply bg-blue-900/85"
                  style={{ backgroundImage: "url('/dist/assets/image/Our Products/quickalert.jpg')" }}
                >
                  <div className="relative z-10">
                     <h3 className="mb-4 text-2xl font-bold leading-tight tracking-wide">
                        Secure Your Peace Of Mind Today
                     </h3>
                                         
                      <p className="mb-6 text-sm text-gray-200 font-medium leading-relaxed">
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
                     </div>

          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Fingerprint;