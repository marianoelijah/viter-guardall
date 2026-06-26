import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';
import React from 'react';


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
            <section>
              <h2 className="font-bold text-xl text-black mb-4">Technical Specification:</h2>
              <div className="border border-black border-r overflow-hidden">
                <table className="w-full text-left text-xs border-collapse">
                  <tbody>
                    {specs.map((item, idx) => (
                      <React.Fragment key={idx}>
                        {item.type === 'header' ? (
                          <tr className="bg-gray-200">
                            <th colSpan="2" className="p-2 border-b border-black border border-r text-[15px] text-black font-bold uppercase tracking-wider">
                              {item.label}
                            </th>
                          </tr>
                        ) : (
                          <tr className={idx % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'}>
                            <td className="p-3 border-b border-r border-black border  font-bold w-1/3 text-[15px] text-black bg-gray-50/50">
                              {item.label}
                            </td>
                            <td className="p-3 border-b border-black border border-r text-black whitespace-pre-line text-[15px] hover:bg-slate-50/50 transition-colors">
                              {item.value}
                            </td>
                            <td className="p-3 border-b border-black border border-r text-black whitespace-pre-line text-[15px] hover:bg-slate-50/50 transition-colors">
                              {item.valu}
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
             <div className="bg-gray-300 p-4s border-black border border-r mb-6">
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
const DomeCamera = () => {
  const data = {
    title: "Sarix Professional 4 Series Dome Camera",
    subtitle: "A high-performance, dome-shaped security camera designed to capture activity in high-definition. ",
    description: "With security challenges becoming increasingly complex, it’s more important than ever to future-proof your site. Enhance your security infrastructure with the cutting-edge Sarix Professional 4 Series camera designed to capture activity in high-definition. A clear understanding of what is happening on-site elicits more informed decisions, faster responses and produces necessary evidence to support any incident requiring further review. Obtain more accurate insights and reduce the risk of missing critical events utilizing a camera that produces impeccable imaging quality.",
    features: [
      "Detect objects with Smart Analytics",
      "Flexible lens options",
      "See in bright and low-light ",
      "Easy to deploy",
      "Protect against cyber attacks",
      "Integrates with your ONVIF-conformant VMS",
    ],

    specs: [
    //   { type: 'header', label: 'Connections' },
      { label: 'Model Name', value: 'DOME', valu: "" },
      { label: 'Part Number', value: 'Indoor: SRXP4-2V10-IMDSRXP4-2V10-IMD-IRSRXP4-3V10-IMDSRXP4-3V10-IMD-IRSRXP4-5V10-IMDSRXP4-5V10-IMD-IR', valu: "Environmental:SRXP4-2V10-EMDSRXP4-2V10-EMD-IRSRXP4-3V10-EMDSRXP4-3V10-EMD-IRSRXP4-5V10-EMDSRXP4-5V10-EMD-IR" },
      { label: 'Resolution (MP)', value: '2 MP / 3 MP / 5 MP', valu: "2 MP / 3 MP / 5 MP" },
      { label: 'Image Sensor', value: '1/2.8” progressive scan CMOS', valu: "1/2.8” progressive scan CMOS" },

      { label: 'Max. Dynamic Range (dB)', value: '2 MP: 126 dB3 MP: 130 dB5 MP: 130 dB', valu: "2 MP: 126 dB3 MP: 130 dB5 MP: 130 dB" },
      { label: 'Max. Image Rate', value: '30m', valu: "40m" },
      { label: 'Environmental', value: 'IK10', valu: "IK10, IP66/67, Type 4X" },
      { type: 'header', label: 'AUDIO, POWER, STORAGE', valu: "" },
      { label: 'Audio Compression Method', value: 'G.711 PCM 8 kHz, Opus', valu: "G.711 PCM 8 kHz, Opus" },
      
      { label: 'Audio Input/Output', value: 'Line level I/O', valu: "Line level I/O" },
      { label: 'External I/O Terminals', value: 'Alarm In, Alarm Out', valu: "Alarm In, Alarm Out" },
      { label: 'PoE Power Source', value: 'IEEE 802.3af Class 3 compliant, 12VDC Aux', valu: "IEEE 802.3af Class 3 compliant, 12VDC Aux" },
      { label: 'Onboard Storage', value: 'microSD/microSDHC/microSDXC slot – video speed class card required. Class V10 or better recommended. 1 TB card tested.', valu: "microSD/microSDHC/microSDXC slot – video speed class card required. Class V10 or better recommended. 1 TB card tested." },
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

export default DomeCamera;