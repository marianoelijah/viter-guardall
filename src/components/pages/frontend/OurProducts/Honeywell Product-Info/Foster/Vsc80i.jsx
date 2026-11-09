import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';


const Vsc80i = () => {
  const productData = {
    title: "Vsc-80i",
    subtitle: "A touch screen workstation that provides a complete examination of secure travel and identity documents.",
    description: "The VSC®80i is a fully integrated workstation that provides a complete solution to the comprehensive examination of secure travel and identity documents, including passports, ID cards, visas, entry permits, and driving licenses etc. Ideal for high security, fast-paced environments including air, land and sea ports, immigration controls, and border crossing points etc.",
    features: [
      "Authenticate Travel & Identity Documents",
      "Reveal UV Activated Security Features",
      "Examine Microtext and Fine Details",
      "Decode ePassport, MRZ & Embedded Data",
      "Surface Features and Laser Engraving",
      "Removable Transmitted Light Base",
      "Incident UV-B and UV-C Light Sources",
      "13x Camera Filter Module",
      "10x LED Spotlight",
      "Infrared Anti-Stokes Light Source"
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
      <div className="bg-gray-100 dark:bg-[#121214] min-h-screen font-sans text-slate-800 dark:text-gray-200 transition-colors duration-300">
        <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-4 text-center transition-colors duration-300">
          <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto uppercase tracking-wider">
            {productData.title}
          </h1>
        </header>

        <main className="max-w-6xl mx-auto shadow-xl my-10 p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-3 max-w-6xl mx-auto bg-gray-200 p-8 shadow-sm dark:bg-[#1e1e22]">
              <p className="text-[15px] text-gray-800 dark:text-gray-300 mb-6 font-medium transition-colors">
                {productData.subtitle}
              </p>
              
              <section className="mb-8">
                <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
                  Product Description:
                </h2>
                <p className="text-[15px] text-gray-800 dark:text-gray-300 mb-6 font-medium transition-colors">
                  {productData.description}
                </p>
              </section>

              <section className="mb-10">
                <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
                  Product Features:
                </h2>
                <ul className="list-disc ml-5 text-[15px] text-gray-800 dark:text-gray-300 space-y-1 transition-colors">
                  {productData.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </section>

              {/* Technical Spec Table */}
              <section className="overflow-x-auto">
                <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
                  Technical Specification:
                </h2>
                <table className="w-full text-[15px] text-black border-collapse border border-black">
                  <tbody>
                    {/* Core System Specs Row */}
                    <tr>
                      <td rowSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                      Core System Specifications
                      </td>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                      Imaging
                      </td>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        <span className="font-bold">Camera:</span>  High sensitivity CMOS cameraVis-IR sensitiveZoom lensFull HD live video output<br/>
                        <span className="font-bold">Magnification:</span> Up to x100 on 24" monitor
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 w-1/3 text-[15px] text-black dark:text-gray-200 dark:bg-gray-800/80 font-semibold bg-gray-100">Illumination</td>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        <span className="font-bold">Visible-IR:</span> LED 21x Multi-Angled LED Array<br/>
                        <span className="font-bold">Illumination</span>Incident (flood) VIS/IR LEDsTwin Vis and IR Side LEDs<br/>
                        <span className="font-bold">Specialist</span> Incident UV-A <br/>
                        <span className="font-bold">Illumination</span> Coaxial Light Source
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 w-1/3 text-[15px] text-black dark:text-gray-200 dark:bg-gray-800/80 font-semibold bg-gray-100">DCS5 System Essentials</td>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        <span className="font-bold">VSC Dimensions</span>  W:392 x D:372 x H:366mm<br/>
                        <span className="font-bold">Power Supply </span>Input 110V/230V, 50/60Hz<br/>
                        <span className="font-bold">PC & Monitor24</span> Touch Screen DisplayFully integrated systemNo PC required
                      </td>
                    </tr>
                    {/* Model Variants */}
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">VSC80i FS</td>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                      <span className="font-bold">Specialist</span> Incident UV-B, UV-C<br/>
                        <span className="font-bold">Illumination </span> IR Anti-Stokes10x LED Spotlight<br/>
                        <span className="font-bold">Filtration</span>13x Camera Filter Module<br/>
                        <span className="font-bold">Transmitted </span>Removable light module<br/>
                        <span className="font-bold">Illumination</span>UV-A, Vis and IR light sources
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">VSC80i M2</td>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        <span className="font-bold">Specialist</span> Incident UV-B, UV-C<br/>
                        <span className="font-bold">Illumination </span>4x LED Spotlight<br/>
                        <span className="font-bold">Filtration</span> 6x Camera Filter Module <br/>
                        <span className="font-bold">Transmitted </span>Removable light module<br/>
                        <span className="font-bold">Illumination</span> UV-A, Vis and IR light sources
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">VSC80i M1</td>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        <span className="font-bold">Transmitted </span>Removable light module<br/>
                        <span className="font-bold">Illumination</span>UV-A, Vis and IR light sources<br/>
                      </td>
                    </tr>


                  </tbody>
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
              <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded-xl shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
                <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By FOSTER + FREEMAN</h3>
             <ul className="space-y-4 text-gray-700 dark:text-gray-300">
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
              className="relative min-h-[240px] overflow-hidden rounded-2xl p-8 text-white shadow-md bg-cover bg-center bg-blend-multiply bg-blue-900/85"
              style={{ backgroundImage: "url('/assets/image/Our%20Products/quickalert.jpg')" }}
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
                  className="inline-block w-full rounded-xl bg-[#0f3e90] px-2 py-3 text-center text-sm font-semibold tracking-wider text-white transition-colors hover:bg-[#ff5f31] sm:w-auto"
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

export default Vsc80i;