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
    <div className="bg-gray-200 dark:bg-[#121214] min-h-screen font-sans text-[#333] dark:text-gray-200 transition-colors duration-300">
      {/* Banner Header */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-centerbg-[#7f95b8] dark:bg-blue-950/70 text-center transition-colors duration-300">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          {title}
        </h1>
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto shadow-xl my-10 p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Product Info */}
          <div className="lg:col-span-3 bg-gray-100 dark:bg-[#1e1e22] p-6 md:p-8 rounded-xl border border-transparent dark:border-gray-800 shadow-md transition-colors duration-300">
            <p className="text-[15px] text-gray-680 leading-relaxed whitespace-pre-line">{subtitle}</p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Description:</h2>
              <p className="text-[15px] text-gray-680 leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] text-gray-680 space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>

             {/* Technical Specifications Table */}
              <div className="p-6 shadow rounded border border-r divine-y">
            <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Technical Specification</h2>

            <table className="w-full border text-[15px] text-black">
              <tbody>
                <tr className="bg-gray-300 font-semisbold">
                  <td className="border-r p-3 border-gray-500 dark:border-gray-700 w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold">Model Name</td>
                  <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">2 MP / 3 MP / 5 MP</td>
                  
                </tr> 
                <tr>
                  <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">Image Sensor</td>
                  <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">1/2.8” progressive scan CMOS</td>
                  <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">1/1.8” progressive scan CMOS</td>
                </tr> 
                <tr>
                  <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">Dynamic Range</td>
                  <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    WDR Off: Up to 83 dB
                    WDR On (IEC 62676):  Up to 126 dB (dual exposure, 30 fps) Up to 144 dB (triple exposure, 20 fps or less)
                    Up to 106dB (dual exposure, 30 fps) Up to 136dB (triple exposure, 20 fps or less)
                    Up to 130dB (dual exposure, 30 fps)
                    WDR On:  Up to 130 dB (dual exposure, 30 fps) Up to 150 dB (triple exposure, 20 fps or less)
                    Up to 120dB (dual exposure, 30 fps) Up to 144dB (triple exposure, 20 fps or less)
                    Up to 144 dB (dual exposure, 20 fps or less)
                  </td>
                </tr>
                 <tr>
                  <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Image Rate
                  </td>
                  <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    (50 Hz/60 Hz): 50 fps/60 fps in High Frame RateMode1, otherwise 25 fps/30 fps
                  </td>
                  <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    (50 Hz/60 Hz): 25 fps/30 fps
                  </td>
                </tr> 
                 <tr>
                  <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Operating Temperature Range
                  </td>
                  <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    -10°C to +55°C (-14°F to 131°F)
                  </td>
                  <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    -30°C to +65°C (-22°F to 149°F) with IEEE 802.3af Class 3 (13W PoE)
                  </td>
                </tr> 
                <tr>
                  <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Environmental
                  </td>
                  <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Indoor Dome:IEC 60529 IP54, IEC/EN 62262 IK11 (IK10 Surface Mount w/IR)
                  </td>
                  <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Outdoor Dome:IEC 60529 IP66, IP67, IP68 (2m depth for 2 hours), IPX9K, NEMA 4X, IEC 60068-2 Shock & Vibration, NEMA TS2 Sec 2.2.7-2.2.9, IK11
                  </td>
                </tr>
                 <tr>
                  <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Pan
                  </td>
                  <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    -90° to +90°, up to 100°/second
                  </td>
                  <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    N/A
                  </td>
                </tr>
                 <tr>
                  <td colSpan="4"className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   AUDIO, POWER, STORAGE
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Audio Compression Method	
                  </td>
                  <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                   G.711 PCM 8 kHz, Opus
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Audio Input/Output
                  </td>
                  <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                   Line level input and output
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    External I/O Terminals
                  </td>
                  <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                   1 x Relay In, 1 x Relay Out, 1 x 12 VDC out at 50 mA
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    PoE Power Source
                  </td>
                  <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                   IEEE 802.3af Class 3
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Onboard Storage
                  </td>
                  <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                    Two microSD/microSDHC/microSDXC slots – video speed class card required. Class V10 or better recommended.
                  </td>
                </tr>
              </tbody>
            </table>
                </div>
            

            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
                PELCO
              </span>
              
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
                CCTVs
              </span>
            </div>

               {/* SHARE SECTION */}
             <SocialShare title="Check out this product!" />

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded-xl shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
            <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By PELCO</h3>
                      <ul className="space-y-4 text-gray-700 dark:text-gray-300">
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
const SeriesDome = () => {
  const data = {
    title: "Sarix Enhanced 4 and 4P Series Dome Camera",
    subtitle: "A dome-shaped surveillance camera designed to run multiple analytics at once. ",
    description: "The Sarix Enhanced 4 Series camera line, consisting of the 4 and 4P Series dome cameras, introduces new analytic capabilities and sets an even higher standard for security by simultaneously running multiple analytics. Extract more information and in greater detail to optimize threat detection and response efficiency.",
    features: [
      "Classify and identify people and vehicles",
      "Reliable through network failovers",
      "Capture up to 60 fps to see video clearly ",
      "Uncover tiny details up to 31x away",
      "Protect against cyber attacks ",
      "Integrates with your ONVIF-conformant VMS ",
    ],

    specs: [
    //   { type: 'header', label: 'Connections' },
      { label: 'Resolution (MP)', value: '2 MP / 3 MP / 5 MP' },
      { label: 'Image Sensor', value: '1/2.8” progressive scan CMOS', valu: "1/1.8” progressive scan CMOS" },
      { label: 'Dynamic Range', value: 'WDR Off: Up to 83 dB WDR On (IEC 62676):  Up to 126 dB (dual exposure, 30 fps) Up to 144 dB (triple exposure, 20 fps or less) Up to 106dB (dual exposure, 30 fps) Up to 136dB (triple exposure, 20 fps or less) Up to 130dB (dual exposure, 30 fps) WDR On:  Up to 130 dB (dual exposure, 30 fps) Up to 150 dB (triple exposure, 20 fps or less) Up to 120dB (dual exposure, 30 fps) Up to 144dB (triple exposure, 20 fps or less) Up to 144 dB (dual exposure, 20 fps or less)' },
      { label: 'Image Rate', value: '(50 Hz/60 Hz): 50 fps/60 fps in High Frame RateMode1, otherwise 25 fps/30 fps', valu: '(50 Hz/60 Hz): 25 fps/30 fps' },

      { label: 'Operating Temperature Range', value: '-10°C to +55°C (-14°F to 131°F)', valu: "-30°C to +65°C (-22°F to 149°F) with IEEE 802.3af Class 3 (13W PoE)" },
      { label: 'Environmental', value: 'Indoor Dome: IEC  60529 IP54, IEC/EN 62262 IK11 (IK10 Surface Mount w/IR)', valu: "Outdoor Dome:IEC 60529 IP66, IP67, IP68 (2m depth for 2 hours), IPX9K, NEMA 4X, IEC 60068-2 Shock & Vibration, NEMA TS2 Sec 2.2.7-2.2.9, IK11" },
      { type: 'header', label: 'AUDIO, POWER, STORAGE' },
      { label: 'Audio Compression Method', value: 'G.711 pcm 8 Khz, Opus' },
      
      { label: 'Audio Input/Output', value: 'Line level input and output' },
      { label: 'External I/O Terminals', value: '1 x Relay In, 1 x Relay Out, 1 x 12 VDC out at 50 mA' },
      { label: 'PoE Power Source', value: 'IEEE 802.3af Class 3'},
      { label: 'Onboard Storage', value: '	Two microSD/microSDHC/microSDXC slots – video speed class card required. Class V10 or better recommended.'},
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

export default SeriesDome;