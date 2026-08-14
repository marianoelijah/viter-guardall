import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '@/components/pages/frontend/partials/Header';
import Footer from '@/components/pages/frontend/partials/Footer';
import SocialShare from '../../../Reusable/SocialShare';



const Curve = () => {
  const productFeatures = [
    "Curved Panels",
    "Anti-Climb & Anti-Cut",
    "Architectural Harmony",
    "Weather Resistance",
    "Customization Options",
    "Secure Fixing",
    "Integration Ready"
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          ClearVu Curve
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
            <p className="text-gray-800 text-[17px] mb-6">
              Curved Elegance with Invisible Strength - a high security fence with architectural curves
              for design-sensitive environments.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
                A variant of the ClearVu Invisible Wall, engineered with curved panel designs. Maintains the anti-climb, anti-cut strength of ClearVu
                while offering a softer, more aesthethis profile. Manufactured with Marine Fusion Bnd coating
                for durability in outdoor environments. Offers a balance of security, transparency, and
                design appeal.
              </p>

               <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1 text-black">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            </section>

            {/* Technical Specifications Table */}
            <div className="bg-gray-300 p-6 shadow rounded border border-r divine-y">
            <h2 className="font-semibold text-black text-xl mb-4">Technical Specifications:</h2>

            <table className="border text-[17px] w-full">
              <tbody>
                <tr className="bg-gray-300 font-bold w-1/2">
                  <td colSpan="2" className="border-r border-black border p-2 text-black">
                    Curved Panels
                  </td>
                  <td colSpan="3" className="border-r border-black border p-2 text-black">
                    Smooth flowing lines for architectural integrations
                  </td>
                </tr> 
                <tr className="bg-gray-300 font-bold w-1/2">
                  <td colSpan="2" className="border-r border-black border p-2 text-black">
                   Anti-Climb & Anti-Cut
                  </td>
                  <td colSpan="3" className="border-r border-black border p-2 text-black">
                    Narrow apertures prevent climbing; reinforced steel resists cutting tools.
                  </td>
                </tr> 
                <tr className="bg-gray-300 font-bold">
                   <td colSpan="2" className="border-r border-black border p-2 text-black">
                    Architectural Harmony
                  </td>
                  <td colSpan="3" className="border-r border-black border p-2 text-black">
                    Designed to complement landscaping and building aesthetic
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                   <td colSpan="2" className="border-r border-black border p-2 text-black">
                    Weather Resistance
                  </td>
                  <td colSpan="3" className="border-r border-black border p-2 text-black">
                    Marine Fusion Bond coating ensures long term durability
                  </td>
                </tr> 
                

                <tr className="bg-gray-300 font-bold w-1/2">
                   <td colSpan="2" className="border-r border-black border p-2 text-black">
                    Customization Options
                  </td>
                  <td colSpan="3" className="border-r border-black border p-2 text-black">
                    Available in multiple finishes, colors, and curve styles.
                  </td>
                </tr> 
                <tr className="bg-gray-300 font-bold">
                   <td colSpan="2" className="border-r border-black border p-2 text-black">
                    Secure Fixings
                  </td>
                  <td colSpan="3" className="border-r border-black border p-2 text-black">
                    Hidden connections inside patented taper post groove
                  </td>
                </tr>
                <tr className="bg-gray-300 font-bold">
                   <td colSpan="2" className="border-r border-black border p-2 text-black">
                    Integration Ready
                  </td>
                  <td colSpan="3" className="border-r border-black border p-2 text-black">
                    Compatible with spike toppings, Smart Coil, and electric deterrents.
                  </td>
                </tr> 
              </tbody>
            </table>
          </div> 
                       
            
        

            {/* SHARE SECTION */}
             <SocialShare title="Check out this product!" />

        </main>

          {/* Sidebar */}
              <aside className="lg:w-1/4 space-y-6"> 
                     <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                        <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By COCHRANE</h3>
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

export default Curve;