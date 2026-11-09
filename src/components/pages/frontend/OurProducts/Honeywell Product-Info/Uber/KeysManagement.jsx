import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';



const KeysManagement = () => {
  const productFeatures = [
    "Built-in Wide Angled Colour Camera",
    "Access Card Reader",
    "Biometric Access Control",
    "Supports UID + PIN Access",
    "Auto Key Tag Return Reader",
    "7″ Color Touchscreen",
    "LAN Port",
    "Optional 4G GSM Modem",
    "Optional WIFI Router",
    "Backup Battery",
    "User ID (UID)",
    "Alpha-Numeric Password Format",
    "User Change Own Password",
    "Support PIN Authentication",
    "Search Authorized_keys",
    "Track Purpose of Key Withdrawal",
    "2-Factor Authentication",
    "Multi-Access (Escort Key Access)",
    "Interlock Key Group/ Critical Key",
    "Supports up to 5000 users"
  ];

   const techSpecs = [
    { ekms: "iKLAS-G3-24", keys: "12, 18, 24, 30", width: "430 mm", height: "510 mm", depth: "180 mm", weight: "12 kg" },
    { ekms: "iKLAS-G3-48", keys: "36, 42, 48, 54", width: "430 mm", height: "750mm", depth: "180 mm", weight: "16 kg" },
    { ekms: "iKLAS-G3-66", keys: "60, 66, 72", width: "630 mm", height: "855 mm", depth: "220 mm", weight: "53 kg" },
    { ekms: "iKLAS-G3-96", keys: "84, 96, 108", width: "880 mm", height: "685 mm", depth: "220 mm", weight: "60 kg" },
    { ekms: "iKLAS-G3-132", keys: "120, 132, 144", width: "900 mm", height: "855 mm", depth: "220 mm", weight: "65 kg" },
    { ekms: "iKLAS-G3-192", keys: "156, 168, 180, 192 G3 Key Master", width: "710 mm 165 mm", height: "1300 mm 375 mm", depth: "280 mm", weight: "92 kg" },
    { ekms: "iKLAS-G3-252", keys: "204, 216, 228, 252 G3 Key Master", width: "710 mm 165 mm", height: "1600 mm 375 mm", depth: "280 mm 120 mm", weight: "115 kg" },
    { ekms: "iKLAS-G5-24", keys: "12,18,24,30", width: "440 mm", height: "540 mm", depth: "180 mm", weight: "23 kg" },
    { ekms: "iKLAS-G5-48", keys: "36, 42, 48, 54", width: "440 mm", height: "784 mm", depth: "180 mm", weight: "31 kg" },
    { ekms: "iKLAS-G5-66", keys: "60, 66, 72", width: "630 mm", height: "855 mm", depth: "180 mm", weight: "31 kg" },
    { ekms: "iKLAS-G5-96", keys: "84, 96, 108", width: "880 mm", height: "685 mm", depth: "220 mm", weight: "60 kg" },
    { ekms: "iKLAS-G5-132", keys: "120, 132, 144", width: "900 mm", height: "855 mm", depth: "220 mm", weight: "65 kg" },
    { ekms: "iKLAS-G5-192", keys: "156 ,168, 180, 192 G5 Key Master", width: "710 mm 200 mm", height: "1300 mm 270 mm", depth: "280 mm 70mm", weight: "92 kg" },
    { ekms: "iKLAS-G5-252", keys: "204, 216, 228, 252 G5 Key Master", width: "710 mm 200 mm", height: "1600 mm 270 mm", depth: "280 mm 70mm", weight: "115 kg" },
    
  ];

  return (
    <>
    <Header />
    <div className="bg-gray-100 dark:bg-[#121214] min-h-screen font-sans text-slate-800 dark:text-gray-200 transition-colors duration-300">
      {/* Blue Header Banner */}
      <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-4 text-center transition-colors duration-300">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
           iKLAS Keys Management System
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <main className="max-w-6xl mx-auto bg-gray-200 dark:bg-[#1e1e22] border border-transparent dark:border-gray-800 transition-colors shadow-lg my-10 p-8 md:p-12">
          <p className="text-[17px] leading-relaxed mb-6">
             A key management system that protects the keys and tracks them to ensure it is properly returned.
          </p>

          <section className="mb-8">
            <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Description:</h2>
            <div className="text-[17px] leading-relaxed space-y-4 mb-6">
              <p>
               Intelligent Key Lock Application System (iKLAS), is a solution that helps businesses
               manage and monitor keys within their organizations.  It offers extensive key management 
               capabilities, accommodating storage capacities of 12 to 252 keys within a single AIO 
               (All-in-One) cabinet. Access is securely controlled, allowing only authorized individuals 
               to use keys through card access or biometric authentication.
              </p>
              <p>
              Available sizes: 24 / 48 / 66 / 96 / 132 / 192 / 252 key slots
              </p>
            </div>

            <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

           {/* Technical Specifications Table */}
        <section>
          <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Technical Specification:</h2>
            <div className="border border-gray-500 dark:border-gray-700 overflow-hidden rounded-sm">
              <table className="w-full border-collapse border border-gray-500 text-[11px]">
                <thead className="divide-y divide-gray-800 p-2.5 font-bold  tracking-widest text-gray-800 dark:text-blue-400 text-[17px] border-b border-gray-500 dark:border-gray-700">
                  <tr>
                    <th className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                       iKLAS EKMS Model
                    </th>
                    <th className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                        Number of Keys
                    </th>
                    <th className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                        Width
                    </th>
                    <th className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                        Height
                    </th>
                    <th className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                        Depth
                    </th>
                    <th className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                        Weight
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {techSpecs.map((spec, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-00' : 'bg-gray-00'}>
                      <td className="p-2 border-r border-black font-semibold text-[17px] uppercase text-gray-800 dark:text-gray-200 leading-normal">{spec.ekms}</td>
                      <td className="p-2 border-r border-black font-semibold text-[17px] uppercase text-gray-800 dark:text-gray-200 leading-normal">{spec.keys}</td>
                      <td className="p-2 border-r border-black font-semibold text-[17px] uppercase text-gray-800 dark:text-gray-200 leading-normal">{spec.width}</td>
                      <td className="p-2 border-r border-black font-semibold text-[17px] uppercase text-gray-800 dark:text-gray-200 leading-normal">{spec.height}</td>
                      <td className="p-2 border-r border-black font-semibold text-[17px] uppercase text-gray-800 dark:text-gray-200 leading-normal">{spec.depth}</td>
                      <td className="p-2 border-r border-black font-semibold text-[17px] uppercase text-gray-800 dark:text-gray-200 leading-normal">{spec.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </section>

        {/* Tags */}
           <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="text-white border bg-[#ff5f31] px-2 py-1">UBERGARD</p>
            <p className="text-white border bg-[#ff5f31] px-2 py-1">Access Control System</p>
           </div> 

          {/* Share Section */}
            <SocialShare title="Check out this product!" />
        </main>

        {/* Sidebar */}
        <aside className="lg:w-1/4 space-y-6">
         <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
            <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By UBERGARD</h3>
           <ul className="space-y-4 text-gray-700 dark:text-gray-300">
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

export default KeysManagement;