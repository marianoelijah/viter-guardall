import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';


// Shared Layout Component to maintain design consistency across all products
const ProductLayout = ({ title, subtitle, description, features }) => {
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
      <main className="max-w-7xl mx-auto bg-gray-200 shadow-xl my-10 p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Product Info */}
          <div className="lg:col-span-3">
            <p className="text-[17px]  text-black mb-6">{subtitle}</p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
              <p className="text-[17px] text-black leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] text-black space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>

             {/* Technical Specifications Table */}
              <div className="bg-gray-300 p-6 shadow rounded border border-r divine-y">
            <h2 className="font-semibold text-black text-xl mb-4">Technical Specification</h2>

            <table className="border text-[15px] w-full">
              <thead>
                <tr className="bg-gray-100 uppercase font-bold text-[17px]">
                  <th className="border border-black p-2 text-left w-1/4 text-black">Technical data</th>
                  <th className="border border-black p-2 text-left text-black">MPT 132 3-wing</th>
                  <th className="border border-black p-2 text-left text-black">MPT 132 4-wing</th>
                  <th className="border border-black p-2 text-left text-black">MPT 33 3-wing</th>
                  <th className="border border-black p-2 text-left text-black">MPT 33 4-wing</th>
                  <th className="border border-black p-2 text-left text-black">MPT 30 3-wing</th>
                  <th className="border border-black p-2 text-left text-black">MPT 30 4-wing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black ">Number of wings (angle)</td>
                  <td className="border border-black text-gray-700 text-[15px] p-2 break-all">3 (120°)</td>
                  <td className="border border-black text-gray-700 text-[15px] p-2 break-all">4 (90°)</td>
                  <td className="border border-black text-gray-700 text-[15px] p-2 break-all">3 (120°)</td>
                  <td className="border border-black text-gray-700 text-[15px] p-2 break-all">4 (90°)</td>
                  <td className="border border-black text-gray-700 text-[15px] p-2 break-all">3 (120°)</td>
                  <td className="border border-black text-gray-700 text-[15px] p-2 break-all">4 (90°)</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black ">Drive technology</td>
                  <td colSpan="2" className="border border-black text-gray-700 text-[15px] p-2 break-all">MHTM™</td>
                  <td colSpan="2" className="border border-black text-gray-700 text-[15px] p-2 break-all">Electromechanical </td>
                  <td colSpan="2" className="border border-black text-gray-700 text-[15px] p-2 break-all">Mechanical</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black ">Voltage</td>
                  <td colSpan="2" className="border border-black text-gray-700 text-[15px] p-2 break-all">110 – 240 VAC, 50/60 Hz</td>
                  <td colSpan="2" className="border border-black text-gray-700 text-[15px] p-2 break-all">110 – 240 VAC, 50/60 Hz</td>
                  <td colSpan="2" className="border border-black text-gray-700 text-[15px] p-2 break-all">-</td>
                </tr>
                 <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black ">Power consumption</td>
                  <td colSpan="2" className="border border-black text-gray-700 text-[15px] p-2 break-all">approx. 50 W (without accessories) </td>
                  <td colSpan="2" className="border border-black text-gray-700 text-[15px] p-2 break-all"> approx. 50 W (without accessories) </td>
                  <td colSpan="2" className="border border-black text-gray-700 text-[15px] p-2 break-all">-</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black ">Duty cycle</td>
                  <td colSpan="2" className="border border-black text-gray-700 text-[15px] p-2 break-all">100%</td>
                  <td colSpan="2" className="border border-black text-gray-700 text-[15px] p-2 break-all">100%</td>
                  <td colSpan="2" className="border border-black text-gray-700 text-[15px] p-2 break-all">-</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black ">Enclosure Rating</td>
                  <td colSpan="2" className="border border-black text-gray-700 text-[15px] p-2 break-all">IP43</td>
                  <td colSpan="2" className="border border-black text-gray-700 text-[15px] p-2 break-all">IP43</td>
                  <td colSpan="2" className="border border-black text-gray-700 text-[15px] p-2 break-all">IP43</td>
                </tr>
                 <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black ">Dimensions (L x W x H)</td>
                  <td className="border border-black text-gray-700 text-[15px] p-2 break-all">1510 x 1500 x 2235 mm</td>
                  <td className="border border-black text-gray-700 text-[15px] p-2 break-all">1359 x 1076 x 235 mm</td>
                  <td className="border border-black text-gray-700 text-[15px] p-2 break-all">1510 x 1500 x 2235 mm</td>
                  <td className="border border-black text-gray-700 text-[15px] p-2 break-all">1359 x 1076 x 2235 mm</td>
                  <td className="border border-black text-gray-700 text-[15px] p-2 break-all">1510 x 1500 x 2235 mm</td>
                  <td className="border border-black text-gray-700 text-[15px] p-2 break-all">1359 x 1076 x 2235 mm</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black ">Weight</td>
                  <td className="border border-black text-gray-700 text-[15px] p-2 break-all"> approx. 250 kg</td>
                  <td className="border border-black text-gray-700 text-[15px] p-2 break-all"> approx. 230 kg </td>
                  <td className="border border-black text-gray-700 text-[15px] p-2 break-all"> approx. 250 kg </td>
                  <td className="border border-black text-gray-700 text-[15px] p-2 break-all"> approx. 230 kg</td>
                  <td className="border border-black text-gray-700 text-[15px] p-2 break-all"> approx. 250 kg </td>
                  <td className="border border-black text-gray-700 text-[15px] p-2 break-all"> approx. 230 kg</td>
                </tr>
                 <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-black ">Temperature Range</td>
                  <td colSpan="2" className="border border-black text-gray-700 text-[15px] p-2 break-all"> -25 to +55C </td>
                  <td colSpan="2" className="border border-black text-gray-700 text-[15px] p-2 break-all"> -25 TO +55C</td>
                  <td colSpan="2" className="border border-black text-gray-700 text-[15px] p-2 break-all"> -25 TO +55C</td>
                </tr>
                
                
              </tbody>
            </table>
                </div>
            

            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                MAGNETIC
              </span>
            </div>

               {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
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
const MPT = () => {
  const data = {
    title: "MPT Turnstile",
    subtitle: "MPT turnstiles can also be individually adapted to your requirements: with different material finishes, locking options, additional components, and swing levaes for bicycles, wheelchairs, and material transport.",
    description: "MPT full-height turnstiles are the ideal solution for access control in outdoor areas when large numbers of people need to enter or leave an area in a short time. With various drive options, MPT turnstiles can be precisely tailored to your application: The electromechanical MPT 332 turnstile is driven gently, evenly, and almost silently by an MHTM™ drive unit – ideal for the representative securing of outdoor and company premises. ",
    features: [
      "Reliable securing of oudoor areas and company grounds with high rates of pedestrian traffic",
      "Mechanical, electromechanical or motorized designs available",
      "Maximum personal safety in accordance with DIN EN 17352 thanks to the Magnetic Safe Drive Solution MSDS",
      "Numerous options, e.g, expansion for wheelchair access",
      "Designed for 10 million passagges",
    ],


  };

  return <ProductLayout {...data} />;
};

export default MPT;