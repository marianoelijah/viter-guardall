import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';

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
      <div className="bg-gray-200 min-h-screen font-sans text-slate-800">
        <header className="bg-[#7f95b8] text-white py-14 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold max-w-5xl mx-auto uppercase tracking-wider">
            {productData.title}
          </h1>
        </header>

        <main className="max-w-6xl mx-auto bg-gray-200 shadow-xl my-10 p-6 md:p-12">
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
                  
                   <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Camera
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       – High sensitivity colour/IR camera- Autofocus macro lens- High resolution still images (5456x3632px)- HDMI live video output
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Illumination
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        High intensity LED illumination ring:- UV 365nm, Violet 410nm, Blue 445nm, Blue Green475nm, Green 520nm, Orange 590nm, Red 640nm- 4x LED per wavelength- Combine LEDs to provide up to 55 combinations- Brightness control function 2x Wide-angle LED illumination arms:- UV 365nm, White VIS, IR 850nm- 2x UV LED, 1x White LED, and 1xIR LED per arm
                      </td>
                    </tr>
                     <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        IMAGING FILTERS
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       9-position motorised filter wheel- Longpass filters at:VIS, 455nm, 495nm, 550nm, 590nm, and 780nm- Bandpass filters at:UV 315-380nm, 415nm, and 530nm
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        INTERFACE
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       7” multi-touch IPS TFT displayInternal processor (no PC required)App’ style user interfaceWiFi and Bluetooth connectivity
                      </td>
                    </tr>
                     <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                       DIMENSIONS
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       – H 126mm x W 207mm x D 159mm (excluding battery)- Weight (when fitted with 2Ah battery) 1.6kg (approx.)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        SYSTEM SOFTWARE
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                       Crime-lite AUTO functions are carried out via an ‘App’ style interface using the system’s integrated multi-touch display:
                       – Live video search and capture (AVI)- High-resolution capture of still images (BMP, TIFF, PNG, JPG)- Complete control of all camera settings- Complete control of all illumination settings- Manual or semi-automated ‘intelligent’ filter selection- Pull-out image gallery of all recent work- Save and Recall images with examination settings- Timestamp captured video and images- Export images and data to external USB- Option to connect secondary viewing monitor via HDMI
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

export default CrimeLite;