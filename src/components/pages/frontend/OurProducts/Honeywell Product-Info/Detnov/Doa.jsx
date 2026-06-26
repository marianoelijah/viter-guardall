import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';
import React from 'react';

const Doa = () => {
  const specs = [
    { label: "INDICATOR LIGHT", value: "DOA FJ/CPD", valu: "DOA K", vale: "DOA K/WP" },
    { label: "Operating voltage", value: "From 10.8 to 28 VDC", valu: "From 24 to 28 VDC", vale: "From 24 to 28 VDC" },
    { label: "Alarm current consumption", value: "110 mA", valu: "55 mA", vale: "55 mA" },
    { label: "Volume at 1 m", value: "From 81 to 87 dB", valu: "91,7 dB", vale: "91,7 dB" },
    { label: "Frequency", value: "3050 Hz", valu: "2900 Hz", vale: "2900 Hz" },

    { type: 'header', label: 'Connections' },
    { type: 'header', label: '2 x 1,5 mm2 twisted' },
    { type: 'header', label: 'Environment' },

    { label: "Operating temperature", value: "From -10C to +55°C", valu: "From -10C to +55°C", vale: "From -10C to +55°C" },
    { label: "Relative humidity", value: "95% without condensation", valu: "95% without condensation", vale: "95% without condensation" },
    { label: "IP Index", value: "IP21C", valu: "IP21C", vale: "IP54" },

    { type: 'header', label: 'PHYSICAL FEATURES' },

    { label: "Size", value: "320 mm x 140 mm x 68 mm", valu: "331 mm x 150 mm x 68 mm", vale: "331 mm x 150 mm x 68 mm" },
    { label: "Material", value: "ABS and polycarbonate", valu: "ABS and polycarbonate", vale: "ABS and polycarbonate" },
    
    { type: 'header', label: 'APPROVALS' },

    { label: "", value: "EN 54-3 and EN 54-23 (DOA FJ/CPD only EN 54-3)" },
    { label: "", value: "Certificate number: 1328-CPR-0615 ", valu: "Certificate number: 1328-CPR-0725", vale: "Certificate number: 1328-CPR-0726" },
    
    
  ];

  const productFeatures = [
    "Power supply 24 V",
    "Low current consumption",
    "EN 54-3 and EN 54-23 approved (depends on the model)",
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
           DOA Series Indicator Light with Buzzer
        </h1>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-lg my-10 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Left Column: Product Info */}
          <div className="lg:col-span-3">
            <p className="text-gray-800 text-[17px] mb-6">
               The DOA series indicator lights are signaling devices and acoustic warning by buzzer.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
                The DOA series indicator lights are signaling devices and acoustic warning by buzzer. 
                Due to their low consumption and high visibility, they are ideal for informing the user 
                about the actions of the extinguishing system, fire detection system and detection of 
                toxic gasses (carbon monoxide).
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
              <div className="overflow-x-auto border border-gray-500">
                <table className="w-full text-left text-xs border-collapse border border-black">
                  <thead>
                    <tr>
                      <th className="p-3 border-b border-r border-black text-black text-[17px] font-bold w-1/3">Specification</th>
                      <th className="p-3 border-b border-r border-black text-[17px] text-black">DOA FJ/CPD</th>
                      <th className="p-3 border-b border-r border-black text-[17px] text-black">DOA K</th>
                      <th className="p-3 border-b border-r border-black text-[17px] text-black">DOA K/WP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specs.map((spec, index) => {
                      if (spec.type === 'header') {
                        return (
                          <tr key={index}>
                            <td colSpan="4" className="p-3 border-b border-r border-black text-black text-[17px] font-bold bg-gray-300">
                              {spec.label}
                            </td>
                          </tr>
                        );
                      }
                      return (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                          <td className="p-3 border-b border-r border-black text-black text-[17px] font-bold w-1/3">
                            {spec.label}
                          </td>
                          <td className="p-3 border-b border-r border-black text-[17px] text-black">
                            {spec.value}
                          </td>
                          <td className="p-3 border-b border-r border-black text-[17px] text-black">
                            {spec.valu}
                          </td>
                          <td className="p-3 border-b border-r border-black text-[17px] text-black">
                            {spec.vale}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
            
             
            {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#ff5f31] text-white  px-2 py-1 rounded">
                DETNOV
              </span>
              
              <span className="bg-[#ff5f31] text-white  px-2 py-1 rounded">
                Fire Alarm
              </span>
            </div>

            {/* SHARE SECTION */}
             <SocialShare title="Check out this product!" />

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
            <h3 className="text-xl font-bold text-black mb-4 border-b pb-1">More By DETNOV</h3>
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

          </div>
        </div>
      </main>
    </div>
    <Footer />
    </>
   
  );
};

export default Doa;