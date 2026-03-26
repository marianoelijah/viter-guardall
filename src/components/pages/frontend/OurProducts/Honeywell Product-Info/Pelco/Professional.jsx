import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';

// Shared Layout Component to maintain design consistency across all products
const ProductLayout = ({ title, subtitle, description, features, specs, sidebarItems }) => {
  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-slate-800">
      {/* Banner Header */}
      <header className="bg-[#7f95b8] text-white py-14 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          {title}
        </h1>
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-xl my-10 p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Product Info */}
          <div className="lg:col-span-3">
            <p className="text-[17px]  text-black mb-6">{subtitle}</p>

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
              <div className="bg-gray-300 p-6 shadow rounded border border-r divine-y">
            <h2 className="font-semibold text-black text-xl mb-4">Technical Specification</h2>

            <table className="w-full border text-[15px] text-black">
              <tbody>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Model Name
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    BULLET
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Part Number
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    SRXP4-2V10-EBT-IRSRXP4-3V10-EBT-IRSRXP4-3V29-EBT-IR SRXP4-3V40-EBT-IRSRXP4-5V10-EBT-IRSRXP4-5V29-EBT-IRSRXP4-5V40-EBT-IR
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Resolution (MP)
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    2 MP / 3 MP / 5 MP
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Image Sensor
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    1/2.8” progressive scan CMOS
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Max. Dynamic Range (dB)
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    2 MP: 126 dB3 MP: 130 dB5 MP: 130 dB
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Max. Image Rate
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    50m
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Environmental
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    IK10, IP66/67, Type 4X
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold">
                    AUDIO, POWER, STORAGE
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Audio Compression Method
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    G.711 PCM 8 kHz, Opus
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Audio Input/Output
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Line level I/O
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    External I/O Terminals
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Alarm In, Alarm Out
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    PoE Power Source
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    IEEE 802.3af Class 3 compliant, 12VDC Aux
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Onboard Storage
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    microSD/microSDHC/microSDXC slot – video speed class card required. Class V10 or better recommended. 1 TB card tested.
                  </td>
                </tr>

                
              </tbody>
            </table>
                </div>
            

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
            <div className="mt-8">
              <p className="font-medium text-black mb-3">Share:</p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/facebook.png" alt="Facebook" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/gmail.png" alt="Gmail" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/telegram.png" alt="Telegram" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/viber.png" alt="Viber" className="w-full h-full object-contain p-1" />
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 p-4 border border-black  border-r mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By PELCO</h3>
            <ul className="text-xl space-y-4 text-gray-500 transition-colors">
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
const Professional = () => {
  const data = {
    title: "Sarix Professional 4 Series Bullet Camera",
    subtitle: "A high-performance, bullet-style security camera designed to capture activity in high-definition.",
    description: "With security challenges becoming increasingly complex, it’s more important than ever to future-proof your site. Enhance your security infrastructure with the cutting-edge Sarix Professional 4 Series camera designed to capture activity in high-definition. A clear understanding of what is happening on-site elicits more informed decisions, faster responses and produces necessary evidence to support any incident requiring further review. Obtain more accurate insights and reduce the risk of missing critical events utilizing a camera that produces impeccable imaging quality.",
    features: [
      "Detect objects with Smart Analytics ",
      "Flexible lens options ",
      "See in bright and low-light  ",
      "Easy to deploy ",
      "Protect against cyber attacks ",
      "Integrates with your ONVIF-conformant VMS ",
    ],

    // specs: [
    // //   { type: 'header', label: 'Connections' },
    //   { label: 'Resolution (MP)', value: '2 MP / 3 MP / 5 MP' },
    //   { label: 'Image Sensor', value: '1/2.8” progressive scan CMOS', valu: "1/1.8” progressive scan CMOS" },
    //   { label: 'Dynamic Range', value: 'WDR Off: Up to 83 dB WDR On (IEC 62676):  Up to 126 dB (dual exposure, 30 fps) Up to 144 dB (triple exposure, 20 fps or less) Up to 106dB (dual exposure, 30 fps) Up to 136dB (triple exposure, 20 fps or less) Up to 130dB (dual exposure, 30 fps) WDR On:  Up to 130 dB (dual exposure, 30 fps) Up to 150 dB (triple exposure, 20 fps or less) Up to 120dB (dual exposure, 30 fps) Up to 144dB (triple exposure, 20 fps or less) Up to 144 dB (dual exposure, 20 fps or less)' },
    //   { label: 'Image Rate', value: '(50 Hz/60 Hz): 50 fps/60 fps in High Frame RateMode1, otherwise 25 fps/30 fps', valu: '(50 Hz/60 Hz): 25 fps/30 fps' },

    //   { label: 'Operating Temperature Range', value: '-10°C to +55°C (-14°F to 131°F)', valu: "-30°C to +65°C (-22°F to 149°F) with IEEE 802.3af Class 3 (13W PoE)" },
    //   { label: 'Environmental', value: 'Indoor Dome: IEC  60529 IP54, IEC/EN 62262 IK11 (IK10 Surface Mount w/IR)', valu: "Outdoor Dome:IEC 60529 IP66, IP67, IP68 (2m depth for 2 hours), IPX9K, NEMA 4X, IEC 60068-2 Shock & Vibration, NEMA TS2 Sec 2.2.7-2.2.9, IK11" },
    //   { type: 'header', label: 'AUDIO, POWER, STORAGE' },
    //   { label: 'Audio Compression Method', value: 'G.711 pcm 8 Khz, Opus' },
      
    //   { label: 'Audio Input/Output', value: 'Line level input and output' },
    //   { label: 'External I/O Terminals', value: '1 x Relay In, 1 x Relay Out, 1 x 12 VDC out at 50 mA' },
    //   { label: 'PoE Power Source', value: 'IEEE 802.3af Class 3'},
    //   { label: 'Onboard Storage', value: '	Two microSD/microSDHC/microSDXC slots – video speed class card required. Class V10 or better recommended.'},
    // //   { type: 'header', label: 'Learn more at www.pelcom.com ' }
    // ],

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

export default Professional;