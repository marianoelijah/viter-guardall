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
                    System Power
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   115/230 VAC +/- 10%
                   60/50 Hz
                   1.0 kVA max 
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
                    Self-contained, with sealed oil bath cooling
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    High Voltage Rating
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    170 kV, operating at 170 kV
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Duty Cycle
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   100%
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Beam Orientation
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   View 1: diagonal view
                   View 2: side view Both above: (80° beam angle) 
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Dose per exam
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   0.1mR; May be higher or lower due to differing combinations of kV level & X-ray beam configuration
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Radiation Leakage
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                  0.5mR/hr (5.0μSv/hr)
                  0.1mR/hr (1.0μSv/hr) available
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
                   36 mm guaranteed (38 mm typical)
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
                   40 AWG guaranteed (42 AWG typical)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                 Processing
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                  24.0 cm (9.4 in.) per second
                  14.6 m (48 ft.) per minute
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                  Conveyor Speed
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   160 kg (352 lbs.)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Pulling Weight
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
                    High-speed, ultra-sensitive photodiode detector array; L-shaped for 100% package screening
                  </td> 
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    VIDEO
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Two 19” Color LCD monitors, 1280 x 1024 video card
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
const DvXray = () => {
  const data = {
    title: "100100TDVS-DV X-Ray Inspection System",
    subtitle: "A dual-view, heavy-duty x-ray system designed for large object screening. ",
    description: "The 100100TDVS-DV heavy-duty conveyorized direct transmission X-ray inspection system is designed for screening large objects, hold baggage and cargo for concealed weapons, explosives and contraband. Multi-energy color allows operators to quickly spot areas of concern in the most thickly packed parcels, bulk loads and baggage. The system’s high-capacity conveyor sits less than a foot from the floor for easier, more ergonomic loading.",
    features: [
      "autoSensing assures 100% screening of all items, no matter how thin or low",
      "Ideal for inspecting oversized and out-of-gauge objects"
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

export default DvXray;