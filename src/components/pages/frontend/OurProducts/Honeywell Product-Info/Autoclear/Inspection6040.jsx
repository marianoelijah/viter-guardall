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
            <h2 className="font-bold text-black text-xl mb-4">Technical Specification</h2>

            <table className="w-full border text-[15px] text-black">
              <tbody>
                 <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold">
                    PHYSICAL DETAILS
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Tunnel Size
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    62.0 x 42.0 cm24.4 x 16.5 in. (W x H)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Overall Dimension
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    156.2 x 82.6 x 127.3 cm61.5 x 32.5 x 50.1 in. (L x W x H)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Weight
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    60 kV (standard): 353 kg (778 lbs.) Net weight     413 kg (911 lbs.) Shipping weight
                    150 kV (optional): 379 kg (836 lbs.) Net weight     455 kg (1,003 lbs.) Shipping weight
                    170 kV (optional): 477 kg (1,052 lbs.) Net weight     537 kg (1,184 lbs.) Shipping weight
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Construction
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Robust heavy gauge, epoxy-painted, steel frame construction. Stainless steel and aluminum trim and accessories. Non-marking casters.
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Temperature
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   Operating: 0° to 40°C (32° to 104°F)Storage: -20° to 40°C (-4° to 104°F)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Humidity
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    20%-95%, non-condensing
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Storage
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   To 65°C (149°F)
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Power Consumption
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   7.5 amps 100, 110 volts AC ±10%; 3.75 amps 200, 220, 230, 240, 250 volts AC ±10%; all at 50 or 60 Hz
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold">
                    X-RAY GENERATOR
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    X-ray Tube Head
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Self-contained
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    High Voltage Rating
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    160 kV, operating at 140 kV
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Duty Cycle
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   100% with sealed oil bath cooling
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Beam Orientation
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   Diagonal (80° beam divergence)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Dose per exam
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   0.1 mR (1 μSv)
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold">
                   INSPECTION ABILITIES
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Material Penetration (steel) 
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   28–29 mm (1.10–1.14 in.) steel
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Contrast Sensitivity
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   Over 2 million color tones standard
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                  Resolution
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                  40 AWG wire
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Processing
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    32-bit adaptive image processing with minimum 1 Gbytes+ memory; 2.2GHz+ dual core processor; video processing using next generation graphical processing unit architecture with 550MHz+ GPU clock, 512Mbyte+ video memory and 32+ stream processing cores
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                  Conveyor Speed
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   24.0 cm (9.4 in.) per second 14.6 m (48.0 ft.) per minute
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Pulling Weight
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   150 kg (331 lbs.)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Film Safety
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Guaranteed for high-speed film up to ISO 1600 (33 DIN)
                  </td> 
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    DETECTORS
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    L-shaped detector for 100% object screening Surface mounted, multilayer, fully integrated, high frequency solid state detectors using high speed processors and Pentium 4 image processing 
                  </td> 
                </tr>

              </tbody>
            </table>
                </div>
            

            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
                AUTOCLEAR
              </span>
              
              <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
                Detection Systems
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
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By AUTOCLEAR</h3>
            <ul className="text-lg space-y-4 text-gray-500 transition-colors">
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
              <div className="relative z-10 px-4 max-w-3xl">
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
const Inspection6040 = () => {
  const data = {
    title: "6040DVS X-Ray Inspection System",
    subtitle: "A compact x-ray system known for its speed and accurate detection of briefcases, backpacks, and similar-sized items.",
    description: "The user-friendly 6040DVS delivers best-in-class speed and detection capability and makes the most of available space. This single-source, dual-energy system is designed to screen small- to mid-sized items for weapons, explosives, drugs and other contraband. The right size for scanning strollers, briefcases, backpacks, purses and other hand-carried items, this compact workhorse is ready to meet the toughest throughput demands.",
    features: [
      "Fits in elevators, narrow halls and tight spaces",
      "Patented guided conveyor belt never needs adjusting",
      "Built on the industry’s most stable and flexible operating system"
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

export default Inspection6040;