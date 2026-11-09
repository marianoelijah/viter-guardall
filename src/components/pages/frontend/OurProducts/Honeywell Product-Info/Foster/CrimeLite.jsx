import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';



const CrimeLite = () => {
  const productData = {
    title: "CRIME-LITE AUTO",
    subtitle: "A semi-automated evidence screening tool with a complete, all-in-one solution for the detection and imaging of evidence.",
    description: "Combining the latest forensic imaging technology with high- intensity multi-spectral illumination, the new Crime-lite AUTO is a complete solution to the search, detection and capture of evidence. A compact handheld device, with the weight and feel of a pro-grade digital SLR camera, the Crime-lite AUTO can reveal evidence including, body fluids (semen, saliva, and urine etc.); blood on dark fabrics; fingerprints; gunshot residues; and traces of physical evidence (glass, fibers, hairs, etc.)",
    features: [
      "20 MP Camera",
      "Precision Imaging Camera",
      "UV-Vis-IR Illumination",
      "Intelligent Interface",
      "Detect Body Fluids with Fluorescence Examination",
      "Reveal Blood Stains Live Infrared Examination",
      "Reveal and Enhance the Visibility of Evidence"
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
          <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
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
                  Technical and System Specification:
                </h2>
                <table className="w-full text-[15px] text-black border-collapse border border-black">
                  
                   <tr>
                      <td colSpan="2" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Camera
                      </td>
                      <td colSpan="3" className="p-3 border-r border-gray-500 border dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       – High sensitivity colour/IR camera 
                       - Autofocus macro lens 
                       - High resolution still images (5456x3632px)
                       - HDMI live video output
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Illumination
                      </td>
                      <td colSpan="3" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        High intensity LED illumination ring: 
                        - UV 365nm, Violet 410nm, Blue 445nm, Blue Green475nm, Green 520nm, Orange 590nm, Red 640nm 
                        - 4x LED per wavelength- Combine LEDs to provide up to 55 combinations 
                        - Brightness control function 2x Wide-angle LED illumination arms: 
                        - UV 365nm, White VIS, IR 850nm- 2x UV LED, 1x White LED, and 1xIR LED per arm
                      </td>
                    </tr>
                     <tr>
                      <td colSpan="2" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        IMAGING FILTERS
                      </td>
                      <td colSpan="3" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       9 - position motorised filter wheel 
                       - Longpass filters at:VIS, 455nm, 495nm, 550nm, 590nm, and 780nm
                       - Bandpass filters at:UV 315-380nm, 415nm, and 530nm
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border  border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        INTERFACE
                      </td>
                      <td colSpan="3" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       7” multi-touch IPS TFT displayInternal processor (no PC required)App’ style user interfaceWiFi and Bluetooth connectivity
                      </td>
                    </tr>
                     <tr>
                      <td colSpan="2" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       DIMENSIONS
                      </td>
                      <td colSpan="3" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       – H 126mm x W 207mm x D 159mm (excluding battery) 
                       - Weight (when fitted with 2Ah battery) 1.6kg (approx.)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        SYSTEM SOFTWARE
                      </td>
                      <td colSpan="3" className="p-3 border-r border border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       Crime-lite AUTO functions are carried out via an ‘App’ style interface using the system’s integrated multi-touch display:
                       – Live video search and capture (AVI) 
                       - High-resolution capture of still images (BMP, TIFF, PNG, JPG) 
                       - Complete control of all camera settings 
                       - Complete control of all illumination settings 
                       - Manual or semi-automated ‘intelligent’ filter selection 
                       - Pull-out image gallery of all recent work 
                       - Save and Recall images with examination settings 
                       - Timestamp captured video and images 
                       - Export images and data to external USB 
                       - Option to connect secondary viewing monitor via HDMI
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
                         <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded-xl shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
                       <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By FOSTER + FREEMAN</h3>
            <ul className="space-y-4 text-gray-800 dark:text-gray-300">
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

export default CrimeLite;