import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';



const Ptz = () => {
  const specs = [
    { label: "System Architecture", value: "All-in-one integrated architecture combining AI Video Analytics, GUI, and Control Software"},
    { label: "Tracking Mechanism", value: "Automated PTZ control (Smooth Real-time Pan, Tilt, and Zoom lock-on tracking)"},
    { label: "Detection Precision", value: "1-meter precision positioning data coordination with sensor nodes"},
    { label: "Analytic Capabilities", value: "Day/Night Person Tracking, Vehicle Detection, Fire & Smoke Detection, Drone/Airspace Awareness" },
    { label: "Integration Support", value: "Multi-sensor cross-compatibility (PTZ cameras, fixed cameras, UGS sensors, radar, and UAV feeds)" },
    { label: "Detection Coverage", value: "Advanced AI algorithms identify threats and analytics for up to 80m beyond the fence boundary" },
    { label: "Alert Infrastructure", value: "Real-time continuous desktop alerts, localized loud sirens, control room alarms, and instant WhatsApp mobile updates" },
    { label: "Data & Evidence Retention", value: "Secure local/cloud data logging with time-stamped video and complete tracking sequence capture" },
    { label: "Weather Resistance", value: "All-weather operational performance (tested under high-moisture, heavy rain, snow, and extreme climate changes)" }
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          SenseGiz AI-Driven PTZ Camera Surveillance System
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
                Intelligent Auto Tracking & Vision Analytics for Perimeter Security
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed mb-3">
                The SenseGiz AI-Driven PTZ Camera Surveillance System is a highly scalable, automated security monitoring solution
                that integrates computer vision with physical security architecture. Designed to operate in sync with the wireless COIN 
                mesh sensor network, the camera acts as an immediate visual validator. When a boundary breach or structural tampering is detected
                by a sensor node, the system uses automated controls to instantly pan, tilt, and focus the nearest PTZ camera on the precise location of the event.
              </p>

               <h2 className="font-bold text-xl mb-2 text-black">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] text-gray-800 space-y-1">
                <li>AI-Powered Object & Human Tracking</li>
                <li>Sensor-Triggered Auto-Focusing</li>
                <li>Day & Night Advanced Analytics</li>
                <li>Fire, Smoke, & Aerial Threat Detection</li>
                <li>Reduced Operator Fatigue</li>
                <li>Simultaneous Event Management</li>
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
                        <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By SENSEGIZ</h3>
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

export default Ptz;