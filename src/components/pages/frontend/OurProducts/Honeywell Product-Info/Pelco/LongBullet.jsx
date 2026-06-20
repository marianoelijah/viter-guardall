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
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
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
                <tr className="bg-gray-300 font-bold">
                  <td className="border-r border-black border p-2 ">
                    Model Name
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    THERMAL VARIANTS
                  </td>
                  <td colSpan="2" className="border border-r border-black  p-2">
                    RADIOMETRIC VARIANTS
                  </td>
                </tr> 
                <tr>
                  <td className="border border-r border-black p-2 font-bold">
                    Part Number
                  </td>
                  <td className="border border-r border-black  p-2">
                    SXTE4-QF04-EBTSXTE4-QF04-EBT-1SXTE4-QF09-EBTSXTE4-QF09-EBT-1</td>
                  <td className="border border-r border-black  p-2">
                    SXTE4-QF13-EBTSXTE4-QF13-EBT-1SXTE4-QF18-EBTSXTE4-QF18-EBT-1</td>
                     <td className="border border-r border-black  p-2">
                    SXTE4-VF24-EBTSXTE4-VF24-EBT-1SXTE4-VF36-EBTSXTE4-VF36-EBT-1</td>
                  <td className="border border-r border-black  p-2">
                    SXRE4-VF09-EBTSXRE4-VF09-EBT-1SXRE4-VF14-EBT</td>
                  <td className="border border-r border-black  p-2">
                    SXRE4-VF09-EBTSXRE4-VF09-EBT-1SXRE4-VF14-EBT</td>
                </tr> 
                <tr>
                  <td className="border border-r border-black p-2 font-bold">
                    Thermal Resolution (MP)</td>
                  <td colSpan="2" className="border-black  p-2 border">
                    320×256
                  </td>
                  <td colSpan="1" className="border-black  p-2 border">
                    640×512
                  </td>
                  <td colSpan="2" className="border-black  p-2 border">
                    640×512
                  </td>
                </tr>
                <tr>
                  <td className="border border-r border-black p-2 font-bold">
                    Image Sensor (MP)</td>
                  <td colSpan="2" className="border-black  p-2 border">
                    Uncooled VOx Microbolometer
                  </td>
                  <td colSpan="1" className="border-black  p-2 border">
                    Uncooled VOx Microbolometer
                  </td>
                  <td colSpan="2" className="border-black  p-2 border">
                   Uncooled VOx Microbolometer Radiometric
                  </td>
                </tr>

                 <tr>
                  <td className="border border-black p-2 font-bold">
                    Pixel Pitch
                  </td>
                  <td colSpan="5" className="border-black border p-2">
                    12μm
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold">
                    Spectral Range
                  </td>
                  <td colSpan="5" className="border-black border p-2">
                    8μm to 14μm
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold">
                   Aspect Ratio
                  </td>
                  <td colSpan="5" className="border-black border p-2">
                    5:4
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold">
                   Imaging Rate
                  </td>
                  <td colSpan="5" className="border-black border p-2">
                   Up to 30 fps (-1 models up to 8.6 fps)
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold">
                   Dynamic Range
                  </td>
                  <td colSpan="5" className="border-black border p-2">
                   -40 °C to 225 °C (-40 °F to 437 °F) [may vary based on operating temperature]
                  </td>
                </tr> 
                <tr>
                  <td className="border border-r border-black p-2 font-bold">
                    Resolution Scaling</td>
                  <td colSpan="2" className="border-black  p-2 border">
                    320×256, can be scaled up to 640×512
                  </td>
                  <td colSpan="1" className="border-black  p-2 border">
                    640×512, can be scaled down to 320×256
                  </td>
                  <td colSpan="2" className="border-black  p-2 border">
                    640×512, can be scaled down to 320×256
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold">
                    3D Noise Reduction Filter
                  </td>
                  <td colSpan="5" className="border-black border p-2">
                   Yes
                  </td>
                </tr> 
                <tr>
                  <td className="border border-black p-2 font-bold">
                    Sensitivity
                  </td>
                  <td colSpan="5" className="border-black border p-2">
                   NETD ≤50mK (NETD ≤40mK on 30FPS models when Frame Averager feature is enabled)
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold">
                    Image Uniformity Optimization
                  </td>
                  <td colSpan="5" className="border-black border p-2">
                    Automatic Flat Field Correction (FFC) – Thermal and Temporal
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold">
                    Operating Temperature Range
                  </td>
                  <td colSpan="5" className="border-black border p-2">
                    -40 °C to +65 °C (-40 °F to 149 °F)
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold">
                    Environmental	
                  </td>
                  <td colSpan="2" className="border-black border p-2">
                    IP66, IP67 (IK10 rating) includes window impact on all models Type 4X
                  </td>
                  <td colSpan="3" className="border-black border p-2">
                    IP66, IP67 IK10 rating includes window impact only on models SXRE4-VF14-EBT, SXRE4-VF14-EBT-1, SXRE4-VF18-EBT,SXRE4-VF18-EBT-1, SXTE4-VF24-EBT, SXTE4-VF24-EBT-1Type 4X
                  </td>
                </tr> 

              </tbody>
            </table>
                </div>
            

            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                PELCO
              </span>
              
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                CCTVs
              </span>
            </div>

               {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 p-4 border border-black  border-r mb-6">
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

            {/* Blue CTA Card */}
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
      </main>
    </div>
    <Footer />
    </>
    
  );
};

// Example Usage for the Hirsch M64 Controller
const LongBullet = () => {
  const data = {
    title: "Sarix Enhanced 4 and 4P Series Short and Long Bullet Cameras",
    subtitle: "A high-performance surveillance camera designed to run multiple analytics at once. ",
    description: "The Sarix Enhanced 4 and 4P Series short and long bullet cameras introduce new analytic capabilities and set an even higher standard for security by simultaneously running multiple analytics. Extract more information and in greater detail to optimize threat detection and response efficiency.",
    features: [
      "Classify and identify people and vehicles",
      "Reliable through network failovers",
      "Capture up to 60 fps to see video clearly ",
      "Uncover tiny details up to 31x away",
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

export default LongBullet;