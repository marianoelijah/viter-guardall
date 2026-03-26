import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';

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
        <h1 className="text-5xl font-bold tracking-tight">
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
            <p className="text-white border bg-red-500 px-2 py-1">UBERGARD</p>
            <p className="text-white border bg-red-500 px-2 py-1">Access Control System</p>
           </div> 

          {/* Share Section */}
            <div className="mt-8">
              <p className="font-medium text-black mb-3">Share:</p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/assets/image/social-logo/facebook.png" alt="Facebook" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/assets/image/social-logo/gmail.png" alt="Gmail" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/assets/image/social-logo/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/assets/image/social-logo/telegram.png" alt="Telegram" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                    <img src="/assets/image/social-logo/viber.png" alt="Viber" className="w-full h-full object-contain p-1" />
                </div>
              </div>
            </div>
        </main>

        {/* Sidebar */}
        <aside className="lg:w-1/4 space-y-6">
         <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By UBERGARD</h3>
            <ul className="text-xs space-y-4 text-gray-500 transition-colors">
              <li className='cursor-pointer hover:text-[#f08c09]'>Onity DirectKey with Serene</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>INR 415 256-Channel 12 Bay RAID Rackmount Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>GNR 340 100-Channel Tower Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>ENR 130 16-Channel Desktop Standalone NVR - No HDD Included</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>Z86 Outdoor Network Dome Camera with Night Vision</li>
            </ul>
          </div>


          {/* Contact Card */}
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
    </div>
    <Footer />
    </>
    
  );
};

export default KeysManagement;