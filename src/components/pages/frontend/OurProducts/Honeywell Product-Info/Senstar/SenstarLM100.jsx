import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';


const SenstarLM100 = () => {
  const specs = [
    { label: "Sensing Technology", value: "MEMS-based 3-axis accelerometer in every luminaire (detects climb/cut/lift)."},
    { label: "Light Output", value: "53 lux per luminaire at ground level (~163 lumens)."},
    { label: "Color Temperature", value: "6500K (Nominal White); Dark Sky compliant warm-white options available."},
    { label: "Power Consumption", value: "2.5W per luminaire (up to 95% more efficient than traditional security lights)." },
    { label: "Input Voltage", value: "12 to 48 VDC." },
    { label: "Communication", value: "2.4 GHz AES-128 encrypted wireless mesh between luminaires; RS-485 to Gateway." },
    { label: "Wireless Range", value: "Up to 30 m (100 ft) between individual luminaires." },
    { label: "Operating Temperature", value: "$-40\text{°C}$ to $+70\text{°C}$ (extremely rugged for cold or desert climates)." },
    { label: "Deterrence Modes", value: "Programmable: Always On, Dim-to-Bright on alarm, or Strobe Mode on alarm." }
  ];

  const productFeatures = [
    "Supports virtually all fence types",
    "If sensor cable is cut, detection continues up to cut location",
    "Full cut-immune configuration available",
    "Reliably detects intrusions in the presence of non-localized environmental noise"
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          SenstarLM100 FP1150
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
               SenstarLM100 FP1150 is a perimeter intrusion detection system that can be fence-mounted, 
               buried, or deployed in a wall-top configuration. It can also be used to protect data 
               conduits and buried pipelines. Advanced adaptive signal processing along with certified 
               SMS/VMS integration options ensure the highest level of security and performance.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
                SenstarLM100 FP1150 builds upon Senstar’s 40 years of perimeter intrusion detection experience 
                to offer a system that detects and reports both common and sophisticated intrusion attempts 
                almost instantly. Unlike generic AI systems that require extensive training and may fail when 
                presented with unseen intrusion data, SenstarLM100 is designed with intelligence built-in, 
                works out of the box, and offers the highest levels of performance and system confidence.
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
                       
        

            {/* SHARE SECTION */}
             <SocialShare title="Check out this product!" />

        </main>

          {/* Sidebar */}
              <aside className="lg:w-1/4 space-y-6"> 
                     <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                        <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By SENSTAR</h3>
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
                                      className="inline-block w-full rounded-xl bg-[#0f3e90] px-6 py-3 text-center text-sm font-semibold tracking-wider text-white transition-colors hover:bg-[#ff5f31] sm:w-auto"
                                    >
                                      CONTACT US TODAY
                                    </NavLink>
                                  </div>
                                </div>
            
                </aside>

         

        </div>
    </div>
    <Footer />
    </>
   
  );
};

export default SenstarLM100;