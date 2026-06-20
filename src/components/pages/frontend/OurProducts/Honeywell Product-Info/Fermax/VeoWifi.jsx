import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';



const VeoWifi = () => {
  const specs = [
    { type: 'header', label: 'GENERAL CHARACTERISTICS' },
    { label: "Technology", value: "DUOX PLUS (non-polarised 2 wire full digital system)"},
    { label: "Audio/Video system", value: "Audio/Video Color" },
    { label: "Set-up (Installation)", value: "Surface mounted (order connector ref. 9447 separately)" },
    { label: "Desktop support", value: "Yes (ref. 9410)" },
    { label: "Handset with magnet to facilitate the hang up", value: "Yes" },
    { label: "Induction loop available", value: "Yes (replace handset with ref. 3443 or order monitor ref. 9455 which already includes the induction loop)" },
    { label: "Screen dimensions", value: "4,3” (Panoramic 16:9)" },
    { label: "Screen resolution (H x V)", value: "480 x 272" },
    { label: "Color of the product", value: "Matt white" },
    { label: "Number of pushbuttons", value: "4" },
    { label: "Kind of pushbuttons", value: "Mechanical (silicone)" },
    { label: "Number of leds for lighted indications", value: "1 (red with 3 states: always ON, slow/fast blinking)" },
    { type: 'header', label: 'PROGRAMMING OF THE TERMINAL ADDRESS' },
    { label: "From the terminal", value: "From the OSD menu" },
    { label: "From the outdoor panel or guard unit", value: "Yes" },
    { label: "From the outdoor panel throughout the apartment door bell", value: "Yes" },
    { type: 'header', label: 'FEATURES' },
    { label: "Automatic picture capture when the visitor calls (PHOTOCALLER)", value: "Yes (1 photo/call, until 150 photos, 368 x 288 pixels). This feature can be enabled by the user.  Disabled by default." },
    { label: "Guard unit call", value: "Yes (by means of the door release button)" },
    { label: "Auto-on", value: "Yes (with 3 outdoor panels/cameras)" },
    { label: "OSD menu", value: "Yes" },
    { label: "Additional function F1", value: "Yes (Button F1 sends a negative and/or command)" },
    { label: "Additional function F2", value: "Yes (it only sends command, no negative)" },
    { label: "Apartment door bell differentiated from the outdoor panel", value: "Yes" },
    { label: "Connection for additional devices (call extension, light/buzzer activator, etc.)", value: "Yes (ref. 2040, ref. 2438, ref. 3267)" },
    { label: "Additional terminals on the same address", value: "Yes, max. 2 additional terminals (additional power supply can be required)" },
    { label: "Doormatic (automatic door release for offices, etc.)", value: "No" },
    { type: 'header', label: 'ADJUSTMENTS ' },
    { label: "Date and time", value: "Yes" },
    { label: "Ring tones selection", value: "Yes (5)Configurable for Block Panel 0, Block Panel 1, General Entrance Panel 0 and Concierge unit." },
    { label: "Call volume control", value: "Yes (10 levels by OSD menu)" },
    { label: "Do-not-disturb mode", value: "Yes (by OSD menu) + Red led indication" },
    { label: "Audio volume control", value: "Yes (10 levels by OSD menu)" },
    { label: "Brightness, color and contrast control", value: "Yes (by OSD menu)" },
    { type: 'header', label: 'TECHNICAL FEATURES  ' },
    { label: "Product dimensions (width x height x depth) mm", value: "200 x 200 x 23 (44 including handset)" },
    { label: "Time to answer or open the door since the call is done", value: "30 s" },
    { label: "Conversation time", value: "90 s" },
    { label: "Conversation privacy", value: "Yes" },
    { label: "Voltage", value: "18-24 Vdc" },
    { label: "Maximum consumption", value: "5.6 W" },
    { label: "Standby consumption (paired and connected)", value: "1.3 W" },
    { label: "Working temperature (ºC, ºF); Humidity", value: "[-5ºC, +40ºC][23ºF, 104ºF]; [0%, 90%]" },
    { label: "Line adaptor included in the terminal", value: "Yes (A, C, default position OFF)" },
    { label: "Connections", value: "Bin, Bin, Bout, Bout, -, A+, F1, T" },
    { label: "Technology", value: "DUOX" },
    { label: "Measures of the product:", value: "200x200x44 mm" },
    { label: "Weight", value: "0.546 kg" },
    { label: "Measures of the packed product ", value: "5,1×22,2×20,7 cm" },
    { label: "EAN 13", value: "8424299094465" },

  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          DUOX PLUS VEO WIFI 4.3” MONITOR
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
             Suitable for homes and offices, this simple and easy to use video entry monitor has a built-in- WIFI. It allows users to receive calls and manage access control from their smartphones.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
                VEO WIFI is equipped with a Wi-Fi connection that allows calls forwarding to mobile devices. 
                Thanks to the Fermax BLUE app, available free of charge on Play Store and App Store, 
                the functions of the video doorphone can be managed from a smartphone or a tablet, 
                in order to connect you to your home, wherever you are. The DUOX VEO WIFI monitor is 
                made of high-impact ABS plastic. It incorporates a 4,3” (16:9) panoramic color TFT screen. 
                Its unique handset design incorporating a magnet enables the user to put it back into position 
                correctly when the call is finished. Its balanced design of pure lines is distinguishing, modern 
                and minimal.
              </p>

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
             
            {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
                FERMAX
              </span>
              
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
                Audio-Video Intercom & PA-BGM
              </span>
            </div>

            {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

        </main>

          {/* Sidebar */}
              <aside className="lg:w-1/4 space-y-6"> 
                     <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                        <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By FERMAX</h3>
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
                      
            
            
                      {/* Contact Card */}
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
    </div>
    <Footer />
    </>
   
  );
};

export default VeoWifi;