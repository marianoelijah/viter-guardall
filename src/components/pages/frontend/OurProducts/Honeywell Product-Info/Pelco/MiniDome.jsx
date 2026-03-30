import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';

// Shared Layout Component to maintain design consistency across all products
const ProductLayout = ({ title, subtitle, description, features, specs, sidebarItems }) => {
  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-slate-800">
      {/* Banner Header */}
      <header className="bg-[#7f95b8] text-white py-14 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          {title}
        </h1>
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-xl my-10 p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Product Info */}
          <div className="lg:col-span-3">
            <p className="text-[17px]  text-gray-800 mb-6">{subtitle}</p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
              <p className="text-[17px] text-gray-680 leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] text-gray-680 space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
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
                            <td className="p-3 border-b border-r border-gray-500 font-bold text-[15px] text-black bg-gray-50/50 w-1/2">
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

            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                PELCO
              </span>
              
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                CCTVs
              </span>
            </div>

               {/* SHARE SECTION */}
             <SocialShare title="Check out this product!" />

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By PELCO</h3>
            <ul className="text-xs space-y-4 text-gray-500 transition-colors">
              <li className='cursor-pointer hover:text-[#f08c09]'>Onity DirectKey with Serene</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>INR 415 256-Channel 12 Bay RAID Rackmount Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>GNR 340 100-Channel Tower Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>ENR 130 16-Channel Desktop Standalone NVR - No HDD Included</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>Z86 Outdoor Network Dome Camera with Night Vision</li>
            </ul>
          </div>

            {/* Blue CTA Card */}
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
      </main>
    </div>
    <Footer />
    </>
    
  );
};

// Example Usage for the Hirsch M64 Controller
const MiniDome = () => {
  const data = {
    title: "Sarix Value Series IR Environmental Mini Dome Cameras (IMV229-1ERS, IMV529-1ERS)",
    subtitle: "A budget-friendly, compact surveillance camera that blends with its surroundings. ",
    description: "Sarix Value IMV Series cameras are ideal for discreet surveillance with their compact size and design that blends in with surroundings. The Sarix Value Series features excellent image quality with great low light performance, color fidelity and true wide dynamic range (WDR) for increased visibility in difficult lighting situations. And with built-in IR illumination, the camera can provide coverage even in total darkness. The vari-focal lensing gives you the flexibility to set a range of fields of view.",
    features: [
      "Excellent low light performance",
      "True Wide Dynamic Range",
      "30 fps @ 1080p, 20 FPS @ 5 MP",
      "Built-in IR illumination up to 30 M",
      "Remote zoom and focus varifocal lens",
      "H.265 and H.264 encoding with Pelco Smart Compression",
      "IP66 for environmental ruggedness and IK10 for vandal resistance",
      "Built-in MicroSD / SDHC / SDXC Card Slot for",
      "On-board Storage, 256 GB tested",
      "Built-in Microphone"
    ],

    specs: [
    //   { type: 'header', label: 'Connections' },
      { label: 'Model Name', value: 'VARIFOCAL MINI DOME' },
      { label: 'Part Number', value: 'IIMV229-1ERSIMV529-1ERS' },
      { label: 'Resolution (MP)', value: '2 MP/ 5 MP' },
      { label: 'Image Sensor', value: '1/2.9” Progressive CMOS(IMV229-1ERS); 1/2.7” Progressive CMOS(IMV529-1ERS)' },

      { label: 'Max. Dynamic Range (dB)', value: '120 dB' },
      { label: 'Max. Image Rate', value: '30 fps at 2 MP20 fps at 5 MP' },
      { label: 'Environmental', value: 'IK10 / IP66' },
      { type: 'header', label: 'AUDIO, POWER, STORAGE' },
      { label: 'Audio Compression Method', value: 'G.711, G.726' },
      
      { label: 'Audio Input/Output', value: 'One way audio:Bulit-in Microphone' },
      { label: 'PoE Power Source', value: 'PoE Class 3' },
      { label: 'Onboard Storage', value: 'MicroSD/SDHC/SDXC card' },
    //   { type: 'header', label: 'Learn more at www.pelcom.com ' }
    ],
    sidebarItems: [
      "Onity DirectKey with Serene",
      "MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs",
      "INR 415 256-Channel 12 Bay RAID Backmount Standalone",
      "GNR 340 100-Channel Tower Standalone",
      "ENR 130 16-Channel Desktop Standalone NVR- No HDD Included",
      "Z86 Outdoor Network Dome Camera with Night Vision"
    ]
  };

  return <ProductLayout {...data} />;
};

export default MiniDome;