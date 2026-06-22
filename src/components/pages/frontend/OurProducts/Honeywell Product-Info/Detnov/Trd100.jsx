import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';


const ProductLayout = ({ title, subtitle, description, features, specs, sidebarItems }) => {
  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-slate-800">
      {/* Banner Header */}
      <header className="bg-[#7f95b8] text-white py-14 px-4 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
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

            {/* Technical Specifications Table */}
            <section>
              <h2 className="font-bold text-xl text-black mb-4">Technical Specification:</h2>
              <div className="border  border-r overflow-hidden">
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
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                DETNOV
              </span>
              
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                Fire Alarm
              </span>
            </div>

               {/* SHARE SECTION */}
             <SocialShare title="Check out this product!" />

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 p-4 border border-black  border-r mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By DETNOV</h3>
            <ul className="space-y-4 text-gray-800 font-medium">
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

            {/* Blue CTA Card */}
              <div
                className="relative min-h-[240px] overflow-hidden rounded-xl p-8 text-white shadow-md bg-cover bg-center bg-blend-multiply bg-blue-900/85"
                  style={{ backgroundImage: "url('/dist/assets/image/Our Products/quickalert.jpg')" }}
                >
                  <div className="relative z-10">
                     <h3 className="mb-4 text-2xl font-bold leading-tight tracking-wide">
                        Secure Your Peace Of Mind Today
                     </h3>
                                         
                      <p className="mb-6 text-sm text-gray-200 font-medium leading-relaxed">
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
const Trd100 = () => {
  const data = {
    title: "TRD-100 Expansion Card of 4 Free Voltage Relay Output",
    subtitle: "An expansion card designed to increase the number of relay outputs of DETNOV’s fire control panels",
    description: "The TRD-100 expansion card has been designed to increase the number of relay outputs of Detnov’s CCD-100 range of conventional fire control panels. The TRD-100 card provides 4 free contact relay outputs with their three corresponding contacts (common, normally opened, normally closed), which may be used to carry out activations by zone in a conventional system.",
    // features: [
    //   "Excellent low light performance",
    //   "True Wide Dynamic Range",
    //   "30 fps @ 1080p, 20 FPS @ 5 MP ",
    //   "Built-in IR illumination up to 30 M ",
    //   "Remote zoom and focus varifocal lens",
    //   "H.265 and H.264 encoding with Pelco Smart Compression",
    //   "IP66 for Trd100 ruggedness",
    //   "TBuilt-in MicroSD / SDHC / SDXC Card Slot for On-board Storage, 256 GB tested",
    // ],

    specs: [
      { type: 'header', label: 'RELAY OUTPUT' },
      { label: 'Maximum load', value: '10A to 30VCC' },
      { label: 'Delay selectable on panel board', value: '0-10 minutes' },
      { type: 'header', label: 'ENVIRONMENT' },
      { label: 'Operating temperature', value: 'From -5°C to +40°C' },
      { label: 'Relative humidity', value: '95% without condensation' },
    ],

    // sidebarItems: [
    //   "Onity DirectKey with Serene",
    //   "MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs",
    //   "INR 415 256-Channel 12 Bay RAID Backmount Standalone",
    //   "GNR 340 100-Channel Tower Standalone",
    //   "ENR 130 16-Channel Desktop Standalone NVR- No HDD Included",
    //   "Z86 Outdoor Network Dome Camera with Night Vision"
    // ]
  };

  return <ProductLayout {...data} />;
};

export default Trd100;