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
            <p className="text-[15px]  text-black mb-6">{subtitle}</p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">How it Works</h2>
              <p className="text-[15px] text-black leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-[15px] text-black space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>

             {/* Technical Specifications Table */}
              <div className="bg-gray-300 p-6 shadow rounded border border-r divine-y">
            <h2 className="font-semibold text-black text-xl mb-4">Technical Specification</h2>

            <table className="border text-[15px] w-full">
              <tbody > 
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 w-1/4">
                    Supply Voltage
                  </td>
                  <td colSpan="6" className="border border-r border-black p-2">
                    18-30 VDC (24 V Nominal)
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Power Consumption @ 24VDC
                  </td>
                  <td colSpan="3" className="border border-r border-black p-2 text-gray-700">
                    VES-A00-P
                  </td>
                  <td colSpan="3" className="border border-r border-black p-2 text-gray-700">
                    VES-A10-P
                  </td>
                </tr>
             
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Aspirator Setting
                  </td>
                  <td colSpan="1" className="border-black  p-2 border text-gray-700">
                      1
                  </td>
                  <td colSpan="1" className="border-black  p-2 border text-gray-700">
                      5
                  </td>
                  <td colSpan="1" className="border-black  p-2 border text-gray-700">
                     10
                  </td>
                  <td colSpan="1" className="border-black  p-2 border text-gray-700">
                      1
                  </td>
                  <td colSpan="1" className="border-black  p-2 border text-gray-700">
                      5
                  </td>
                  <td colSpan="6" className="border-black  p-2 border text-gray-700">
                      10
                  </td>
                </tr>

                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Power (Quiescent)
                  </td>
                  <td colSpan="1" className="border-black  p-2 border text-gray-700">
                     7.5 W
                  </td>
                  <td colSpan="1" className="border-black  p-2 border text-gray-700">
                     9.8 W
                  </td>
                  <td colSpan="1" className="border-black  p-2 border text-gray-700">
                    15.4 W
                  </td>
                  <td colSpan="1" className="border-black  p-2 border text-gray-700">
                      8.2 W
                  </td>
                  <td colSpan="1" className="border-black  p-2 border text-gray-700">
                     10.0 W
                  </td>
                  <td colSpan="6" className="border-black  p-2 border text-gray-700">
                      15.8 W
                  </td>
                </tr>

               <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                   Power (In Alarm)
                  </td>
                  <td colSpan="1" className="border-black  p-2 border text-gray-700">
                     8.4 W
                  </td>
                  <td colSpan="1" className="border-black  p-2 border text-gray-700">
                     10.8 W
                  </td>
                  <td colSpan="1" className="border-black  p-2 border text-gray-700">
                     15.8 W
                  </td>
                  <td colSpan="1" className="border-black  p-2 border text-gray-700">
                     10.4 W
                  </td>
                  <td colSpan="1" className="border-black  p-2 border text-gray-700">
                      11.6 W
                  </td>
                  <td colSpan="6" className="border-black  p-2 border text-gray-700">
                      16.6 W
                  </td>
                </tr>
                
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Dimensions (WHD)
                  </td>
                  <td colSpan="6" className="border-black  p-2 border text-gray-700">
                    350 mm x 225 mm x 135 mm (13.8 in x 8.9 in x 5.3 in)
                  </td>
                </tr>

                 <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Weight
                  </td>
                  <td colSpan="3" className="border-black  p-2 border text-gray-700">
                    4.7 kg (10.4 lbs)
                  </td>
                  <td colSpan="3" className="border-black  p-2 border text-gray-700">
                     4.8 kg (10.6 lb)
                  </td>
                </tr>

                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Operating Conditions
                  </td>
                  <td colSpan="6" className="border-black  p-2 border text-gray-700">
                     Ambient: 0°C to 38°C (32°F to 100°F)Tested to (EN54-20): -10°C to 55°C (14°F to 131°F)Sampled Air: -20°C to 60°C (-4°F to 140°F) *Humidity: 5% to 95% RH, non-condensing
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Area Coverage
                  </td>
                  <td colSpan="6" className="border-black  p-2 border text-gray-700">
                     2,000 m2(21,520 sq. ft)
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                      Min. airflow per pipe
                  </td>
                  <td colSpan="6" className="border-black  p-2 border text-gray-700">
                     20 l/m
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Pipe Length (Linear)
                  </td>
                  <td colSpan="6" className="border-black  p-2 border text-gray-700">
                    280 m (919 ft)**
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                      Pipe Length (Branched)
                  </td>
                  <td colSpan="6" className="border-black  p-2 border text-gray-700">
                     560 m (1,837 ft)**
                  </td>
                </tr>

                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                      Pipe lengths depending on number of pipes in use
                  </td>
                  <td colSpan="2" className="border-black  p-2 border text-gray-700">
                     2 Pipes
                  </td>
                  <td colSpan="2" className="border-black  p-2 border text-gray-700">
                     3 Pipes
                  </td>
                  <td colSpan="2" className="border-black  p-2 border text-gray-700">
                     3 Pipes
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                      Pipe lengths depending on number of pipes in use
                  </td>
                  <td colSpan="2" className="border-black  p-2 border text-gray-700">
                     100 m (328 ft)
                  </td>
                  <td colSpan="2" className="border-black  p-2 border text-gray-700">
                     80 m (262 ft)
                  </td>
                  <td colSpan="2" className="border-black  p-2 border text-gray-700">
                     70 m (230 ft)
                  </td>
                </tr>

                 <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                      No. of holes (A/B/C)
                  </td>
                  <td colSpan="6" className="border-black  p-2 border text-gray-700">
                    	40/80/100**
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                     Computer design tool
                  </td>
                  <td colSpan="6" className="border-black  p-2 border text-gray-700">
                    	ASPIRE
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                     Pipe
                  </td>
                  <td colSpan="6" className="border-black  p-2 border text-gray-700">
                      Inlet: External diameter 25 mm or 1.05 in (3/4 in IPS) Exhaust:External diameter 25 mm or 1.05 in (3/4 in IPS) via adaptor
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                      Relays
                  </td>
                  <td colSpan="6" className="border-black  p-2 border text-gray-700">
                    	12 programmable relays (latching or non-latching states)Contacts rated 2 A @ 30 VDC (Resistive)
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                      IP rating
                  </td>
                  <td colSpan="6" className="border-black  p-2 border text-gray-700">
                    	IP40
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                      Cable access
                  </td>
                  <td colSpan="6" className="border-black  p-2 border text-gray-700">
                    	4 x 26 mm (1.02 in) cable entries
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                     Cable termination
                  </td>
                  <td colSpan="6" className="border-black  p-2 border text-gray-700">
                    	Screw Terminal blocks 0.2–2.5 sq mm (24–14 AWG)
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                     Measurement Range
                  </td>
                  <td colSpan="6" className="border-black  p-2 border text-gray-700">
                    	0.000 to 32% obs/m (0.0000 to 10% obs/ft)
                  </td>
                </tr>
                 <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                    Sensitivity Range
                  </td>
                  <td colSpan="6" className="border-black  p-2 border text-gray-700">
                    0.005 to 20% obs/m (0.0016% to 6.25% obs/ft)
                  </td>
                </tr>
                 <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                     Threshold setting range
                  </td>
                  <td colSpan="6" className="border-black  p-2 border text-gray-700">
                    	Alert: 0.005% to 2.0% obs/m (0.0016% to 0.625% obs/ft)Action: 0.005% to 2.0% obs/m (0.0016% to 0.625% obs/ft)Fire1: 0.010% to 2.0% obs/m (0.0031% to 0.625% obs/ft)Fire2: 0.020% to 20.0% obs/m (0.0063% to 6.25% obs/ft)
                  </td>
                </tr>
                 <tr className="bg-gray-300 font-bold">
                  <td colSpan="1" className="border-r border-black border text-black p-2 ">
                      Software features
                  </td>
                  <td colSpan="6" className="border-black  p-2 border text-gray-700">
                    	Event log: Up to 20,000 eventsSmoke level and alarm threshold levels, user actions, alarms andfaults with time and date stampAutoLearn: Detector learns Alarm Thresholds and Flow Faultthresholds by monitoring the environment.
                  </td>
                </tr>

              </tbody>
            </table>
                </div>
            

            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
                VESDA
              </span>
              <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
                Vesda System (Aspirating Smoke Detection)
              </span>
            </div>

               {/* SHARE SECTION */}
            <div className="mt-8">
              <p className="font-medium text-black mb-3">Share:</p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/facebook.png" alt="Facebook" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/gmail.png" alt="Gmail" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/telegram.png" alt="Telegram" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/viber.png" alt="Viber" className="w-full h-full object-contain p-1" />
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 p-4 border border-black  border-r mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By VESDA</h3>
            <ul className="text-xs space-y-4 text-gray-500 transition-colors">
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
              <div className="relative z-10 max-w-3xl">
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
const VesdaEves = () => {
  const data = {
    title: "VESDA-E VES: VES-A00-P & VES-A10-P",
    subtitle: "An aspirating smoke detector that enables a single zone to be divided into four separate sectors, allowing for precise location of the smoke source. It provides four individually configurable alarm levels (Alert, Action, Fire 1, and Fire 2) for each sector, ensuring optimal protection across various applications.",
    description: "The VES draws air from all sectors in use. If the smoke level reaches the Adaptive Scan Threshold, the VES quickly scans each sector to identify which sector is carrying smoke. The first sector to reach the Alert level is designated as the First Alarm Sector (FAS) and this sector is signaled to the user. If two or more sectors reach the Alert level then, the sector with the highest smoke concentration is designated as the First Alarm Sector (FAS). Once Fast Scan is completed and the FAS identified, the VES continues to closely monitor all four sectors to track fire growth and maintain full protection of the area.",
    features: [
      "Sector addressability for up to four sectors",
      " Adaptive scan threshold",
      "Flair detection technology delivers reliable very early warning in a wide range of environments with minimal nuisance alarms",
      "Multi stage filtration and optical protection with clean air barriers ensures lifetime detection performance",
      "Four configurable alarm levels per sector and a wide sensitivity range deliver optimum protection for the widest range of applications",
      "Intuitive LCD display provides instant status information for immediate response",
      "Flow fault thresholds per port accommodate varying airflow conditions",
      "Smart on-board filter retains dust count and remaining filter life for predictable maintenance",
      "Extensive event log (20,000 events) for event analysis and system diagnostics",
      "AutoLearnTM smoke and flow for reliable and rapid commissioning",
      "Backward compatible with VLS and VESDAnet",
      "Ethernet for connectivity with Xtralis software for configuration, secondary monitoring and maintenance",
      "Secondary monitoring and maintenance via WiFi",
      "USB for PC configuration, and firmware upgrade using a memory stick",
      "Two programmable GPIs (1 monitored) for flexible remote control",
      "Field replaceable sub-assemblies enable faster service and maximum uptime"
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

export default VesdaEves;