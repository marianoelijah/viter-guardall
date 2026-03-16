import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';

const Vsc9000 = () => {

  const productFeatures = [
    "Precise Image Capture",
    "Accurate Illumination",
    "Forensic-Level Analysis",
    "Digital Authentication",
    "SRi Imaging",
    "WaveTRIM Illumination",
    "AI Assist MRZ",
    "Dual Camera Advantage",
    "480x Image Magnification",
    "Multi-Layered Analysis",
    "Microscopic Fine-Detail Inspection",
    "Surface & Material Analysis",
    "Multi-Spectral Uv-Vis-Ir Imaging"
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          VSC9000
        </h1>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-lg my-10 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Left Column: Product Info */}
          <div className="lg:col-span-3">
            <p className="text-gray-800 text-[17px] mb-6">
               A high-performance optical system that enables multi-spectral examinations of documents to reveal and identify tampering or manipulation.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
              Equipped with a high-performance optical and illumination system, the VSC9000 enables
              the examiner to conduct multi-spectral examinations of documents in microscopic detail 
              to authenticate legitimate documents, reveal sophisticated counterfeits and to identify
              evidence of tampering or manipulation with unparalleled accuracy. The VSC9000 provides a comprehensive forensic-level solution to the interrogation and analysis of all document types.
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
            <h2 className="font-bold text-black text-xl mb-4">Technical Specification</h2>

            <table className="w-full border text-[15px] text-black">
              <tbody>

                <tr className="bg-gray-300 ">
                  <td colSpan="1" className="border-r border-black border p-2 font-bold w-1/2">
                    Year of Release
                  </td>
                  <td colSpan="4" className="border border-r border-black  p-2">
                    2024
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="1" className="border-r border-black border p-2 font-bold w-1/2">
                    Imaging System
                  </td>
                  <td colSpan="4" className="border border-r border-black  p-2">
                    Dual Camera
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="1" className="border-r border-black border p-2 font-bold w-1/2">
                    Image Resolution
                  </td>
                  <td colSpan="4" className="border border-r border-black  p-2">
                    12MP/12MP
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="1" className="border-r border-black border p-2 font-bold w-1/2">
                    Std. Field of View
                  </td>
                  <td colSpan="4" className="border border-r border-black  p-2">
                    310 x 232mm
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="1" className="border-r border-black border p-2 font-bold w-1/2">
                    Magnification
                  </td>
                  <td colSpan="4" className="border border-r border-black  p-2">
                    Up to 480x
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="1" className="border-r border-black border p-2 font-bold w-1/2">
                    Microspectrometer
                  </td>
                  <td colSpan="4" className="border border-r border-black  p-2">
                    2nm resolution
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="1" className="border-r border-black border p-2 font-bold w-1/2">
                    XY Stage
                  </td>
                  <td colSpan="4" className="border border-r border-black  p-2">
                    Motorised
                  </td>
                </tr>

                 <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold">
                    Document Imaging System
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="1" className="border-r border-black border p-2 font-bold w-1/2">
                    Primary Camera
                 </td>
                  <td colSpan="4" className="border border-r border-black  p-2">
                    – Colour/IR high resolution, live 12MP- Spectral range, 350-1100nm
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="1" className="border-r border-black border p-2 font-bold w-1/2">
                    Secondary Camera
                 </td>
                  <td colSpan="4" className="border border-r border-black  p-2">
                   – A4/Letter overview image, live 12MP- Spectral range, 350-1100nm
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold">
                    Standard Illumination Sources
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="1" className="border-r border-black border p-2 font-bold w-1/2">
                    Incident Flood
                 </td>
                  <td colSpan="2" className="border border-r border-black  p-2">
                   Visible and IR
                  </td>
                  <td colSpan="2" className="border border-r border-black  p-2 ">
                   LED
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="1" className="border-r border-black border p-2 font-bold w-1/2">
                    Transmitted
                 </td>
                  <td colSpan="2" className="border border-r border-black  p-2">
                   Flood: UV, Visible, and IRSpot: 400-1000nm
                  </td>
                   <td colSpan="2" className="border border-r border-black  p-2">
                   LED
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="1" className="border-r border-black border p-2 font-bold w-1/2">
                    Oblique/Side
                 </td>
                  <td colSpan="2" className="border border-r border-black  p-2">
                    Visible and IR
                  </td>
                   <td colSpan="2" className="border border-r border-black  p-2">
                    LED
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="1" className="border-r border-black border p-2 font-bold w-1/2">
                    Variable Bandpass Spot
                 </td>
                  <td colSpan="2" className="border border-r border-black  p-2">
                    – 16x Low Pass filters- 16x High Pass filters
                  </td>
                   <td colSpan="2" className="border border-r border-black  p-2">
                    250W
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="1" className="border-r border-black border p-2 font-bold w-1/2">
                    Narrow Bandpass Spot
                 </td>
                  <td colSpan="2" className="border border-r border-black  p-2">
                    400-1000nm (1nm steps)
                  </td>
                   <td colSpan="2" className="border border-r border-black  p-2">
                    100W
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold">
                    Specialist Illumination Sources
                  </td>
                </tr>

                 <tr className="bg-gray-300 ">
                  <td colSpan="1" className="border-r border-black border p-2 font-bold w-1/2">
                    OVD
                 </td>
                  <td colSpan="2" className="border border-r border-black  p-2">
                    Two-axis Visible array
                  </td>
                   <td colSpan="2" className="border border-r border-black  p-2">
                    LED
                  </td>
                </tr>

                 <tr className="bg-gray-300 ">
                  <td colSpan="1" className="border-r border-black border p-2 font-bold w-1/2">
                    Coaxial
                 </td>
                  <td colSpan="2" className="border border-r border-black  p-2">
                    Segmented array
                  </td>
                   <td colSpan="2" className="border border-r border-black  p-2">
                    LED
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="1" className="border-r border-black border p-2 font-bold w-1/2">
                    Anti-Stokes
                 </td>
                  <td colSpan="2" className="border border-r border-black  p-2">
                    IR 980nm
                  </td>
                   <td colSpan="2" className="border border-r border-black  p-2">
                    LED
                  </td>
                </tr>

                 <tr className="bg-gray-300 ">
                  <td colSpan="1" className="border-r border-black border p-2 font-bold w-1/2">
                    3D Imaging
                 </td>
                  <td colSpan="2" className="border border-r border-black  p-2">
                    Visible and IR
                  </td>
                   <td colSpan="2" className="border border-r border-black  p-2">
                    LED
                  </td>
                </tr>

                 <tr className="bg-gray-300 ">
                  <td colSpan="1" className="border-r border-black border p-2 font-bold w-1/2">
                    Phosphorescence
                 </td>
                  <td colSpan="2" className="border border-r border-black  p-2">
                    Pulsed UVPulsed UV
                  </td>
                   <td colSpan="2" className="border border-r border-black  p-2">
                    LED
                  </td>
                </tr>

                 <tr className="bg-gray-300 ">
                  <td colSpan="1" className="border-r border-black border p-2 font-bold w-1/2">
                    Polarised
                 </td>
                  <td colSpan="2" className="border border-r border-black  p-2">
                    Visible Polarised
                  </td>
                   <td colSpan="2" className="border border-r border-black  p-2">
                    LED
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold">
                    Microspectrometer
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="1" className="border-r border-black border p-2 font-bold">
                  Absorption, reflectance,transmission andfluorescence spectra
                  </td>
                  <td colSpan="4" className="border border-r border-black  p-2">
                    Spectral Range: 400-1000nmSpatial Resolution: 2nm
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold">
                    XY-Stage
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="1" className="border-r border-black border p-2 font-bold">
                    Motorised stage
                  </td>
                  <td colSpan="4" className="border border-r border-black  p-2">
                    Movement range of at least 60 x 45mmStep resolution 0.01mm (10μm)
                  </td>
                </tr>
              </tbody>
            </table>
                </div>

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

export default Vsc9000;