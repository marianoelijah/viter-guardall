import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';




const Projects = () => {
 
  const productFeatures = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ];

  const specData = [
    { label: "", col1: "", col2: "", isTriple: false },
    { label: "", col1: "", col2: "", isTriple: false },
    { label: "", col1: "", col2: "", isTriple: false },
    { label: "", col1: "", col2: "", isTriple: false },
    { label: "e", col1: "", isFullWidth: true },
    { label: "", col1: "", col2: "", isTriple: false },
    { label: "", col1: "", isFullWidth: true },
    { label: "", col1: "", isFullWidth: true },
    { label: "", col1: "", isFullWidth: true },
    
  ];

  return (
    <>
    <Header />
     <div className="bg-[#f3f4f6] min-h-screen font-sans text-gray-700 pb-12">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 text-center">
        <h1 className="text-5xl font-semibold tracking-tight">
          Testimonials Projects
        </h1>
      </header>

      <div className="max-w-6xl mx-auto bg-gray-200 mt-8 p-8 shadow-sm flex flex-col md:flex-row gap-8">
        
        {/* Left Content Area */}
        <main className="md:w-[72%]">
          <p className="text-[15px] mb-6 text-black">
           
          </p>

          <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
          <p className="text-[15px] text-black leading-relaxed mb-6">
            
          </p>

          <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
          <ul className="list-disc ml-5 text-[15px] text-black space-y-1 mb-8">
            {productFeatures.map((f, i) => <li key={i}>{f}</li>)}
          </ul>

          <h2 className="font-bold text-xl text-black mb-4 uppercase">Technical Specification:</h2>
          <table className="w-full border-collapse border border-black text-[11px]">
            <thead className="bg-gray-200">
              <tr className="font-bold uppercase">
                <th className="border border-black p-2 text-left w-1/4"></th>
                <th colSpan="3" className="border border-black p-2 text-left text-[15px] text-black bg-gray-200"></th>
              </tr>
              <tr className="font-bold">
                <th className="border border-black p-2"></th>
                <th className="border border-black p-2 text-left text-[17px] text-black"></th>
                <th className="border border-black p-2 text-left text-[17px] text-black"></th>
                <th className="border border-black p-2 text-left text-[17px] text-black"></th>
              </tr>
            </thead>
            <tbody>
              {specData.map((row, idx) => (
                <tr key={idx}>
                  <td className="border border-black p-2 font-bold bg-gray-200 text-black text-[15px]">{row.label}</td>
                  {row.isFullWidth ? (
                    <td colSpan="3" className="border border-black p-2 text-[15px]">{row.col1}</td>
                  ) : (
                    <>
                      <td colSpan={row.label === "Dimensions" ? 2 : 1} className="border border-black p-2 text-[15px]">{row.col1}</td>
                      <td className="border border-black p-2 text-[15px]">{row.col2}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Tags */}
           <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className=" text-white border bg-[#ff5f31] px-2 py-1 rounded"></p>
            <p className=" text-white border bg-[#ff5f31] px-2 py-1 rounded"></p>
            <p className=" text-white border bg-[#ff5f31] px-2 py-1 rounded"></p>
           </div> 

          {/* Social Share Mockup */}
           <SocialShare title="Check out this product!" />
           
        </main>

        {/* Right Sidebar */}
        <aside className="md:w-[28%]">
          <div className="bg-gray-300 p-6 rounded shadow-sm border border-gray-400 mb-5">
                <h3 className="font-bold text-black text-xl mb-4 border-b border-black pb-2">More By HONEYWELL</h3>
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

export default Projects;