import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';



const WristbandProximity = () => {
  const productFeatures = [
    "Includes a two-year warranty for material defects and workmanship",
    "Consistent read range and reliability",
    "Comfortable, light-weight, and hypoallergenic wristbands designed for active environments that require easy access in applications such as physical access control (i.e., attractions and amusement parks) or healthcare (i.e., patient monitoring, tracking, and assisted living facilities)",
    "Applicable to: Physical access,  NFC, Games and toys,  Electronics, Pharma and healthcare",
    "Built to perform in harsh environments and withstand exposure to the elements, including continuous immersion in water and constant motion",
    "Value-priced RFID credential in a reusable form factor",
    "Universal compatibility with most 125 kHz proximity readers (including Identiv’s uTrust TS Readers)",
    "Data format programmable to match existing infrastructure (i.e., 26 bits, 35 bits, 37 bits, and more available on demand); Refer to “Credentials Ordering Guide” for a complete list of all supported formats"
  ];

  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      {/* Blue Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-4 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
         uTrust Wristband Proximity <br/>
               Central
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
          <p className="text-[17px] leading-relaxed mb-6">
            Allows for seamless access and management of amusement parks, gyms, and other active facilities.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
            <div className="text-[17px] leading-relaxed space-y-4 mb-6">
              <p>
              Identiv’s 125 kHz Wristband Proximity Credential is the perfect access control solution for active environments. The wristband allows for convenient access to facilities, attractions, and services for temporary or long-term use. This credential delivers a seamless experience for managing access in amusement and water parks, summer camps, sport (i.e., student athletics) and fitness centers, and healthcare environments. As it is waterproof, this wristband is the ideal companion product for Identiv credentials, enabling support for additional use cases in many deployments, including physical access control.
              </p>
              
            </div>

            <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          {/* Technical Specifications Table */}
          <section className="mt-10 overflow-x-auto">
            <h2 className="font-bold text-xl text-black mb-4">Technical Specification:</h2>
            <table className="w-full border-collapse border border-gray-500 text-[11px]">
              <thead>
                <tr className="bg-gray-100 uppercase font-bold text-[17px]">
                  <th className="border border-gray-500 p-2 text-left w-1/4">
                     Operating Frequency
                  </th>
                  <th className="border border-gray-500 p-2 text-left">
                     125 KHz
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     Dimensions
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    • Standard inner diameter: 70 mm (2.76 in), 60 mm (2.36 in), and 55 mm (2.17 in)• Semi circle top head size: 25mm height (0.98 in) and 50mm long (1.97 in)• Custom: Other sizes available on demand
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Weight
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    14 – 15 g (0.49 – 0.52 oz)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                   Typical Read Range
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                   Up to 61 mm (2.4 in)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                   Transaction Time
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                     100 ms
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                   Programming
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    All standard PACS formats, including Identiv proprietary formats;By default, programmed number shows on the back of the wristband
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     Slot Punch
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                     None
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                  Operating Temperature
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    -30° to 220°C (-22° to 428°F)
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Housing Material
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                   Silicon rubber (similar to the material of medical gloves)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                  Part Numbers
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                   • 4096: White, 70mm (2.76 in), no logo• 4096-BLACK-001: Black, 70mm (2.76 in), no logo• 4097: White, 60 mm (2.36 in), no logo• 4097-BLACK-001: Black, 60 mm (2.36 in), no logo• 4098: White, 55mm (2.17 in), no logo• 4098-BLACK-001: Black, 55 mm (2.17 in), no logoPlease contact your Identiv representative for more options
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                  Color Options
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    • Standard: White and black• Custom (Special Order): Yellow, orange, green, red, or blue
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                  Minimum Order Quantity
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    • Standard: 100 units (each size)• Custom: 1,000
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Water Resistance
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                   Internal Protection Rating: IP68, 2 m (6.6 ft) for 24 hours
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Options
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                   • Screen printing (with logo or text) on top semi-circle head of wristband and/or on the band itself• Laser engraving (available on demand)• Alternative RFID chips Note: Maximum logo size on semi-circle area is about 20mm height (0.79 in) x 30mm long (1.18 in).
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                   Accreditation
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                   FDA (Food and Drug Administration) and ROHs
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

        {/* Tags */}
           <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="text-white border bg-[#ff5f31] px-2 py-1">Hirsch</p>
            <p className="text-white border bg-[#ff5f31] px-2 py-1">Access Control System</p>
           </div> 

          {/* Share Section */}
           <SocialShare title="Check out this product!" />
        </main>

        {/* Sidebar */}
        <aside className="lg:w-1/4 space-y-6">
          <div className="bg-gray-300 p-6 rounded shadow-sm border border-gray-400">
                         <h3 className="font-bold text-black text-xl mb-4 border-b border-black pb-2">More By HIRSCH</h3>
                         <ul className="space-y-4 text-gray-700">
                           <NavLink to="/our-products/onity/directkey-with-serene" className='block'>
                           <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>Onity DirectKey with Serene </li>
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

export default WristbandProximity;