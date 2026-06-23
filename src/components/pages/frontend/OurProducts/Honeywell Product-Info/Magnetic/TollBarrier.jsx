import React from 'react';
import { Facebook, Linkedin, Mail, Send } from 'lucide-react'; // Using lucide-react for icons
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';
import { NavLink } from 'react-router-dom';

const TollBarrier = () => {
  const specs = [
    { label: "Barrier width", values: ["max. 3.0 m", "max. 3.0 m", "max. 3.0 m", "max. 3.0 m", "max. 3.2 m (with 2 barriers)"] },
    { label: "Opening/closing time", values: ["1.3 s", "0.9 s", "0.7 s", "0.6 s", "0.3 s"] },
    { label: "Power consumption", values: ["max. 55 W", "max. 95 W", "max. 225 W", "max. 320 W", "max. 450 W"] },
    
    { label: "Weight", values: ["approx. 42 kg", "approx. 42 kg", "approx. 43 kg", "approx. 44 kg", "approx. 44 kg"] },
  ];

  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen p-4 md:p-8 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* Main Content Area */}
        <main className="flex-1 bg-gray-200 p-6 md:p-10 shadow-sm rounded-sm">
          <p className="text-[15px] mb-6"
          >Designed for toll areas, these gate barriers are fast and efficient.
          </p>
          
          <section className="mb-8">
            <h2 className="font-bold text-xl text-black mb-2">Description:</h2>
            <p className="leading-relaxed text-sm text-black">
              Rapid, reliable, and economical processing of road users is essential when collecting toll charges at bridges, tunnels and on roads. 
              Toll barriers from Magnetic have been specially designed for this situation. The innovative MHTM™ drive at the heart of the barriers 
              is characterized by its speed, lack of maintenance and energy efficiency...
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-bold text-xl text-black mb-3">Product Features:</h2>
            <ul className="list-disc ml-5 space-y-1 text-sm text-black">
              <li>Opening and closing times down to 0.3 s</li>
              <li>Very low operating costs thanks to efficient and long-lived MHTM™ drive</li>
              <li>Highly user-friendly and with optimum accessibility</li>
              <li>Prizewinning design: German Design Award 2014 and Red Dot Design Award 2012</li>
              <li>Designed for 10 million opening and closing cycles</li>
            </ul>
          </section>

          {/* Technical Specifications Table */}
          <section className="overflow-x-auto">
            <h2 className="font-bold text-xl text-black mb-4">Technical Specifications:</h2>
            <table className="w-full border-collapse border border-black  text-xs md:text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-black text-black p-2 "></th>
                  {["Toll", "Toll Pro", "Toll Pro 2", "Toll HighSpeed", "Toll HighSpeed 2"].map(model => (
                    <th key={model} className="border border-black text-black text-[15px] p-2 font-bold text-left">{model}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specs.map((row, idx) => (
                  <tr key={idx}>
                    <td className="border border-black text-black text-[15px]  p-2 font-bold bg-gray-50">{row.label}</td>
                    {row.values.map((val, vIdx) => (
                      <td key={vIdx} className="border border-black text-[15px] text-black p-2">{val}</td>
                    ))}
                  </tr>
                ))}
                {/* Span rows */}
                <tr>
                  <td className="border border-black text-[15px] p-2 font-bold text-black bg-gray-50">
                    Drive technology
                  </td>
                  <td colSpan="5" className="border border-black  p-2 text-center">
                    MHTM™
                  </td>
                </tr>
                <tr>
                  <td className="border border-black  p-2 text-[15px] text-black font-bold bg-gray-50">
                    Voltage
                  </td>
                  <td colSpan="5" className="border border-black  p-2 text-[15px] text-center">
                    85 – 264 VAC, 50/60 Hz
                  </td>
                </tr>
                 <tr>
                  <td className="border border-black  p-2 text-[15px] text-black font-bold bg-gray-50">
                    Duty cycle
                  </td>
                  <td colSpan="5" className="border border-black  p-2 text-[15px] text-center">
                    100 %
                  </td>
                </tr>
                 <tr>
                  <td className="border border-black  p-2 text-[15px] text-black font-bold bg-gray-50">
                    Housing dimensions (W x D x H)
                  </td>
                  <td colSpan="5" className="border border-black  p-2 text-[15px] text-center">
                    315 x 360 x 1115 mm
                  </td>
                </tr>
                 <tr>
                  <td className="border border-black  p-2 text-[15px] text-black font-bold bg-gray-50">
                    Enclosure rating
                  </td>
                  <td colSpan="5" className="border border-black  p-2 text-[15px] text-center">
                    IP 54
                  </td>
                </tr>
                 <tr>
                  <td className="border border-black  p-2 text-[15px] text-black font-bold bg-gray-50">
                    Temperature range
                  </td>
                  <td colSpan="5" className="border border-black  p-2 text-[15px] text-center">
                    −30 to +55 °C
                  </td>
                </tr>
                 <tr>
                  <td className="border border-black  p-2 text-[15px] text-black font-bold bg-gray-50">
                    MCBF
                  </td>
                  <td colSpan="5" className="border border-black  p-2 text-[15px] text-center">
                    10 Mil
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <div className="mt-10 pt-6 border-t border-gray-200">
             <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">MAGNETIC</span>
          </div>

          {/* Social Share Footer */}
          <SocialShare title="Check out this product!" />
          
        </main>

        {/* Sidebar */}
        <aside className="w-full lg:w-72 space-y-6">
          <div className="bg-gray-300 p-4 border border-black  border-r mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By MAGNETIC</h3>
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
    </div>
    <Footer />
    </>
  );
};

export default TollBarrier;