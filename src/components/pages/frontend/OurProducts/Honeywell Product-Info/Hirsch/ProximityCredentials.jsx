import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';

const ProximityCredentials = () => {
  const productFeatures = [
    "Lifetime warranty with prompt, courteous, and fast customer service",
    "Meet or exceed existing card performance at lower cost",
    "Easily integrates with existing card populations",
    "No additional charge for printing serial numbers/facilities codes",
    "Optional high-quality, four color artwork for ISO/IEC 7819 and clamshell",
    "Available in PVC or long life composite (60% PVC AND 40% PET)",
    "Magnetic stripe HICO option, three ISO/ IEC 7811 tracks (default black), and/or combined with 13.56 MHz HF (e.g., MIFARE Classic or MIFARE DESFire), and/or 900 MHz UHF"
    
  ];

  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      {/* Blue Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-4 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
        uTrust Proximity Credentials: <br/>
           Mag Stripe Card
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
          <p className="text-[17px] leading-relaxed mb-6">
            A contactless smart card with mag stripe, suitable for office access.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
            <div className="text-[17px] leading-relaxed space-y-4 mb-6">
              <p>
              From enterprise to government, Identiv’s uTrust Proximity Credentials enable access for employees, temporary workers, and visitors. These generic credentials (available in credit card format, key fobs, wristbands, and round stickers) boast consistent read range and reliability and offer universal compatibility with today’s most popular brands, making integration a simple process
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
              <tbody>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     Dimensions
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                     3.37 x 2.125 x0.033 in(85.6 x 54 x 0.84 mm)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Weight
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    0.212 oz (6 g)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     Read Range
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    Up to 2.5 in(63.5 mm)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Slot Punch
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    Vertical or Horizontal
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                   Operating Temperature
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    -49 ̊ to 158 ̊ F(-45 ̊ to 70 ̊ C)
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Material
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                     PVC or Composite
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     IdentivPart Numbers
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                     4010 (PVC)4020 (Composite)4030 (PVC mag stripe)4032 (Composite magstripe)
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     IdentivPart Numbersfor Kantech
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                     4010XSF, 4020XSF,4030XSF, 4032XSF
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     HID®Part Number
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                     1386/1586
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Schlage /Allegion
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                      7510
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

        {/* Tags */}
           <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="text-white border bg-red-500 px-2 py-1">Hirsch</p>
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
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By HIRSCH</h3>
            <ul className="text-[17px] space-y-4 text-gray-500 transition-colors">
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

export default ProximityCredentials;