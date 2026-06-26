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
                {/* HEADER*/}
                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold w-1/2 uppercase">
                    Detection Capabilities
                  </td>
                </tr>

                <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Zones per Processor
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Up to 4 detection zones
                  </td>
                </tr>
                <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Zone Length
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Up to 300 m (984 ft) of sensing cable per zone
                  </td>
                </tr>
                <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Adaptive Processing (EDAPT)
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Uses Environmentally Derived Adaptive Processing Technology to distinguish between actual intrusions and environmental noise like wind or heavy rain
                  </td>
                </tr>
                 <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Lead-in Cable
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Supports up to 20 km (12.4 miles) of insensitive (non-sensing) lead-in cable, allowing the processor to be located far from the actual fence line in a secure server room
                  </td>
                </tr>

                {/* HEADER*/}
                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold uppercase">
                     Processor Specifications (F4EM0100)
                  </td>
                </tr>

                <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Mechanical* Dimensions
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    $179 \times 160 \times 43\text$ (Compact footprint)
                  </td>
                </tr>

                {/* HEADER*/}
                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold uppercase">
                    Environmental
                  </td>
                </tr>

                <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Operating Temperature
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   -40°C to +70°C (-40°F to +158°F)
                  </td>
                </tr>
                <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Humidity
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    0 to 95%, non-condensing
                  </td>
                </tr>
                <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Ingress Protection
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   IP30 (standard) or IP67 when used with the optional Field Enclosure Kit.
                  </td>
                </tr>

                {/* HEADER*/}
                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold uppercase">
                    Power
                  </td>
                </tr>

                <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Input Power
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    12 to 48 VDC or Power over Ethernet (PoE).
                  </td>
                </tr>
                <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Consumption
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Very low, typical 2.0W (max 3.0W).
                  </td>
                </tr>

                {/* HEADER*/}
                 <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold uppercase">
                    Inputs & Outputs (I/O)
                  </td>
                 </tr>

                <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Relay Outputs
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    6 Form C output relays ($1.0\text A$ at $30\textVDC$), software-assignable for alarms, supervision, or power failure.
                  </td>
                </tr>
                <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Auxiliary Inputs
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    2 dry-contact inputs for monitoring gate latches or other external sensors.
                  </td>
                </tr>
                <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Network Interfaces
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Built in Ethernet(PoE), with options for RS-422 or fiber-optic communication cards.
                  </td>
                </tr>

                {/* HEADER*/}
                 <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold uppercase">
                    Fiber Optic Cable Specs
                  </td>
                 </tr>

                <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Fiber Type
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Single-mode fiber.
                  </td>
                </tr>
                <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Immunity
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Completely immune to EMI (Electromagnetic Interference) and lightning.
                  </td>
                </tr>
                <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Safety
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Intrinsically safe for use in explosive atmospheres (perfect for oil/gas or chemical sites).
                  </td>
                </tr>
                <tr className="bg-gray-200 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Durability
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    UV-resistant Nylon-12 jacket; optional corrugated steel tape (CST) armor for high-damage areas.
                  </td>
                </tr>
              </tbody>
            </table>

                </div>
            
               {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 p-4 border border-black  border-r mb-6">
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
const FiberPatrolFP400 = () => {
  const data = {
    title: "FiberPatrol FP400",
    subtitle: "The FiberPatrol FP400 is a high-performance fiber optic perimeter intrusion detection system designed for critical infrastructure protection. It offers advanced detection capabilities, including up to 4 zones per processor and support for up to 300 meters of sensing cable per zone. The system utilizes Environmentally Derived Adaptive Processing Technology (EDAPT) to minimize false alarms caused by environmental factors such as wind or heavy rain. With its rugged design and support for long lead-in cables, the FiberPatrol FP400 is ideal for securing large outdoor areas while allowing the processor to be located in a secure server room.",
    description: "FiberPatrol FP400 is a zone-reporting fence-mounted fiber optic intrusion detection sensor that detects intruders climbing, cutting or lifting the fence fabric. The fiber optic sensor cable is completely immune to EMI and lightning and is intrinsically safe in explosive atmospheres, making it ideal for sites like electrical substations, pipeline valve and pump stations, oil and gas well-pads, and other critical infrastructure sites.",
    features: [
      "The FP400 supports up to 20 km (12.4 mi) of fiber-optic lead-in cable between the processor and the start of the detection zones, enabling the processor to be installed away from the perimeter in a secure area",
      "The FP400 works with chain-link, standard welded mesh, expanded metal mesh and a palisade fences. Each FP400 processor supports four zones of detection",
      "The FP400 uses the same configuration and integration software as other Senstar products, reducing training requirements while increasing operational efficiencies.",
      "FP400 sensor cable can be installed on swinging gates to provide detection, and the gate area itself can be configured as an independent detection zone.",
      "With built-in Ethernet, on-board relay outputs, auxiliary inputs, and support for RS-422 and fiber optic communication cards, the FP400 can work with virtually any security system.",
      "The FP400 is designed to operate in harsh outdoor environments, with an operating temperature range of 40°C to +70°C (-40°F to +158°F) and an IP30 rating (or IP67 when used with the optional Field Enclosure Kit). The sensor cable is UV-resistant and can be armored for high-damage areas.",
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

export default FiberPatrolFP400;