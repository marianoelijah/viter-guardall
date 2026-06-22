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
                    100.0 x 100.0 cm
                    39.4 x 39.4 in. (W x H) 
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Overall Dimension
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    326.6 x 163.0 x 174.3 cm
                    128.6 x 64.2 x 68.6 in. (L x W x H)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Weight
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    1,315 kg (2,900lbs.) Net weight
                    1,497 kg (3,300 lbs.) Shipping weight
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
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                AUTOCLEAR
              </span>
              
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                Detection Systems
              </span>
            </div>

               {/* SHARE SECTION */}
             <SocialShare title="Check out this product!" />

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 p-4 border border-black  border-r mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By AUTOCLEAR</h3>
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
const DvsXray = () => {
  const data = {
    title: "100100TDVS X-Ray Inspection System",
    subtitle: "This x-ray system is designed for large object screening such as cargos, detecting concealed weapons and explosives.",
    description: "The 100100TDVS-DV heavy-duty conveyorized direct transmission X-ray inspection system is designed for screening large objects, hold baggage and cargo for concealed weapons, explosives and contraband. Multi-energy color allows operators to quickly spot areas of concern in the most thickly packed parcels, bulk loads and baggage. The system’s high-capacity conveyor sits less than a foot from the floor for easier, more ergonomic loading.",
    features: [
      "autoSensing assures 100% screening of all items, no matter how thin or low",
      "Ideal for inspecting oversized and out-of-gauge objects"
    ],

   
  };

  return <ProductLayout {...data} />;
};

export default DvsXray;