import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';
import React from 'react';


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
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      {/* Blue Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-4 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
           iKLAS Keys Management System
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
          <p className="text-[17px] leading-relaxed mb-6">
             A key management system that protects the keys and tracks them to ensure it is properly returned.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
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

            <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

           {/* Technical Specifications Table */}
            <section>
            <h2 className="font-bold text-xl text-black mb-4">Technical Specification:</h2>
            <div className="overflow-x-auto border border-black">
              <table className="w-full text-xs text-left">
                <thead className="bg-gray-100 border-b border-black text-black pb-4">
                  <tr>
                    <th className="p-2 border-r text-black text-[17px] border-black w-1/4">
                       iKLAS EKMS Model
                    </th>
                    <th className="p-2 border-r border-black text-[17px]">
                        Number of Keys
                    </th>
                    <th className="p-2 border-r border-black text-[17px]">
                        Width
                    </th>
                    <th className="p-2 border-r border-black text-[17px]">
                        Height
                    </th>
                    <th className="p-2 border-r border-black text-[17px]">
                        Depth
                    </th>
                    <th className="p-2 text-[17px]">
                        Weight
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {techSpecs.map((spec, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-50'}>
                      <td className="p-2 border-r border-black text-black font-semibold text-[17px]">{spec.ekms}</td>
                      <td className="p-2 border-r border-black text-gray-700 text-[17px]">{spec.keys}</td>
                      <td className="p-2 border-r border-black text-gray-700 text-[17px]">{spec.width}</td>
                      <td className="p-2 border-r border-black text-gray-700 text-[17px]">{spec.height}</td>
                      <td className="p-2 border-r border-black text-gray-700 text-[17px]">{spec.depth}</td>
                      <td className="p-2 text-gray-700 text-[17px]">{spec.weight}</td>
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
         <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By UBERGARD</h3>
           <ul className="space-y-4 text-gray-700">
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