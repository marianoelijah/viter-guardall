import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';


const Spectra = () => {
  const specs = [
    { label: "Resolution (MP)", value: "2 MP, 4MP"},
    { label: "Image Sensor", value: "1/1.8″ progressive scan CMOS"},
    { label: "Optical Zoom", value: "30x Enhanced Optical"},
    { label: "Pan", value: "360° continuous" },
    { label: "Tilt", value: "95°" },
    { label: "Max. Dynamic Range (dB)", value: "80 dB" },
    { label: "Environmental", value: "IEC 60529 IP66, IP67 ratingIEC/EN 62262 Impact IK10 (Enclosure), IK09 (Bubble)IEC/EN 60068-2-6 Product VibrationIEC/EN 60068-2-27 Product ShockType 4X" },

    { type: 'header', label: 'AUDIO, POWER, STORAGE' },
    { label: "Image Compression Method", value: "H.264, H.265, Motion JPEG, Pelco Smart Compression" },
    { label: "Audio Input/Output", value: "Full Duplex Line level input and output" },
    { label: "External I/O Terminals", value: "3x Alarm In (3.5VDC/3.5mA MAX), 1x NO Relay Out (32VDC/150mA MAX), 1x Digital Out (13VDC/140mA MAX), 1 x 12VDC source (11~13VDC/140 mA MAX)" },
    { label: "Onboard Storage", value: "2 × microSD/microSDHC/microSDXC slots – video speed class card required. Class V10 or betterrecommended." },
    { type: 'header', label: 'Learn more at www.pelcom.com' },
  ];

  const productFeatures = [
    "Reduce costs with direct drive technology",
    "See incidents clearly up to 30x away",
    "Classify and identify people and vehicles",
    "Follow objects using auto-trackings",
    "Network protection with FIPS-compliance",
    "Integrate with your ONVIF-conformant VMS"
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          Spectra Enhanced 8 PTZ Camera
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
              This pan-tilt-zoom (PTZ) camera can provide fast updates when human activity or vehicle is detected within the property.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
               Have you ever found yourself overwhelmed by the sheer size of the area you are responsible 
               for protecting? Regain control and feel assured knowing the Spectra Enhanced 8 Pan, Tilt, 
               and Zoom (PTZ) is that extra set of eyes on scene you’ve been longing for. Apprehend and 
               answer suspicious events faster with automated insights that notify you when a response is 
               required. Put your trust in advanced and secured technology, that provides a 360-degree 
               view of your property, to simplify your job and protect those you serve.
              </p>

               <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1 text-black">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            </section>

            {/* Technical Specifications Table */}
                       <section>
                         <h2 className="font-bold text-xl text-black mb-4">Technical Specification:</h2>
                         <div className="border border-gray-500 overflow-hidden">
                           <table className="w-full text-left text-xs border-collapse">
                             <tbody>
                               {specs.map((item, idx) => (
                                 <React.Fragment key={idx}>
                                   {item.type === 'header' ? (
                                     <tr className="bg-gray-200">
                                       <th colSpan="2" className="p-2 border-b border-gray-500 text-[15px] text-black font-bold uppercase tracking-wider">
                                         {item.label}
                                       </th>
                                     </tr>
                                   ) : (
                                     <tr className={idx % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'}>
                                       <td className="p-3 border-b border-r border-gray-500 font-bold w-1/3 text-[15px] text-black bg-gray-50/50">
                                         {item.label}
                                       </td>
                                       <td className="p-3 border-b border-gray-500 text-gray-800 whitespace-pre-line text-[15px] hover:bg-slate-50/50 transition-colors">
                                         {item.value}
                                       </td>
                                     </tr>
                                   )}
                                 </React.Fragment>
                               ))}
                             </tbody>
                           </table>
                         </div>
                       </section>
            
             
            {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#f3760f] text-white px-2 py-1 rounded">
                PELCO
              </span>
              
              <span className="bg-[#f3760f] text-white px-2 py-1 rounded">
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
                        <ul className="text-[17px] space-y-4 text-gray-500 transition-colors">
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

export default   Spectra;