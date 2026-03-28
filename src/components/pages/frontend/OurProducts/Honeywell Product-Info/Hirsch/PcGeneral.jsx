import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';


const PcGeneral = () => {
  const productFeatures = [
    "Lifetime warranty with prompt, courteous, and fast customer service",
    "Meet or exceed existing card performance at lower cost",
    "Easily integrates with existing card populations",
    "Optional high-quality, four-color artwork for ISO/IEC 7816 and clamshell",
    "Available in PVC or long-life composite (60% PVC and 40% PET)",
    "Magnetic stripe HICO option, three ISO/ IEC 7811 tracks (default black), and/or combined with 13.56 MHz HF (e.g., MIFARE Classic or MIFARE DESFire), and/or 900 MHz UHF",
  ];

  // Helper to render table headers for the hardware sections
  const renderHardwareHeader = (models) => (
    <thead>
      <tr className="bg-gray-100 font-bold text-[10px]">
        <th className="border border-gray-500 p-2 text-left w-1/4"></th>
        {models.map((model, idx) => (
          <th key={idx} className="border border-gray-500 p-2 text-center">{model}</th>
        ))}
      </tr>
    </thead>
  );

  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800 pb-12">
      {/* Blue Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-4 text-center">
        <h1 className="text-5xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto text-center">
              uTrust Proximity Credentials (General)
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
          <p className="text-[17px] leading-relaxed mb-6">
            A series of cost-effective contactless credentials that come in various formats such as key fob, smart card, and wristband. 
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
            <div className="text-[17px] leading-relaxed space-y-4 mb-6">
              <p>
               From enterprise to government, Identiv’s uTrust Proximity Credentials enable access for employees, temporary workers, and visitors. These generic credentials (available in credit card format, key fobs, wristbands, and round stickers) boast consistent read range and reliability and offer universal compatibility with today’s most popular brands, making integration a simple process.
              </p>
            </div>

            <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1 mb-8">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          <h2 className="font-bold text-xl text-black mb-4 uppercase">Technical Specification:</h2>

          {/* 1. uTrust TS Mullion Reader Specifications */}
          <div className="mb-8 w-3/">
            
             <table className="w-full border-collapse border border-gray-500 text-[10px]">
                <thead>
                   <tr className="bg-gray-100 font-bold">
                      <th className="border border-gray-500 p-2 text-left w-1/4"></th>
                      <th className="border border-gray-500 p-2 text-[17px] text-gray-800">Clamshell</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-gray-800">ISO Card with Mag StripeOption</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-gray-800">Key Fob</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-gray-800">Round Sticker</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-gray-800">Round Tag On Metal Sticker</th>
                      <th className="border border-gray-500 p-2 text-[17px] text-gray-800">Wristband</th>
                   </tr>
                </thead>
                <tbody>
                  <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 font-bold bg-gray-50">
                        Dimensions
                      </td>
                      <td colSpan="1" className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                       3.385 x 2.125 x0.075 in(86 x 54 x 1.9 mm)
                      </td>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                         3.37 x 2.125 x0.033 in(85.6 x 54 x 0.84 mm)
                      </td>
                       <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                         2.18 x 1.23 x0.32 in(55.4 x 31.2 x 8.13 mm)
                      </td>
                       <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        Diameter:1.278 in (32.5 mm)
                      </td>
                      <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                         Diameter:1.58 in (40 mm)
                      </td>
                        <td className="border border-gray-500 p-2 text-[15px] text-gray-800 text-center">
                        Semi circle top head:25mm (0.98 in) / 50mmlong (1.97 in)
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 font-bold bg-gray-50">
                        Weight
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                         0.317 oz (8.9 g)
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                         0.212 oz (6 g)
                      </td>
                       <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                         0.15 oz (4.3 g)
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                        0.045 oz (1.28 g)
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                          0.06 (1.8g)
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                          0.388 oz (11 g)
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 font-bold bg-gray-50">
                        Read Range
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                        Up to 5 in(127 mm)
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                        Up to 2.5 in(63.5 mm)
                      </td>
                       <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                        Up to 2 in(50.8 mm)
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                        Up to 2.4 in(61 mm)
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                         Up to 2.5 in(63.5 mm)
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 font-bold bg-gray-50">
                       Slot Punch
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                        Vertical
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                        Vertical or Horizontal
                      </td>
                       <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                         Keyhole Ring
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                        None
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                        None
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                        None
                      </td>
                   </tr>
                  <tr>
                    <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                       OperatingTemperature
                   </td>
                  <td colSpan="5" className="border border-gray-500 p-2  text-[15px] text-gray-700">
                     -49 ̊ to 158 ̊ F(-45 ̊ to 70 ̊ C)
                  </td>
                   <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                      -22 ̊ to 428 ̊ F(-30 ̊ to 220 ̊ C)
                    </td>
                   </tr>
                     <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 font-bold bg-gray-50">
                       Material
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                        Hard Shell:ABS Cover Label: PVC
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                       PVC or Composite
                      </td>
                       <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                        ABS Plastic
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                       PVC/Adhesive backing
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                       PVC / Ferrite /Adhesive backing
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                        Silicone
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 font-bold bg-gray-50">
                       IdentivPart Numbers
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                        4000
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                       4010 (PVC)4020 (Composite)4030 (PVC mag stripe)4032 (Composite magstripe)
                      </td>
                       <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                        4082
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                        4090
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                        40-042-TOM-LF-STICK-001
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                       70mm (2.76 in) wristdiameter:• 4096:White – No logo• 4096-BLACK-001:Black – No logo55mm (2.17 in) wristdiameter:• 4098:White – No logo• 4098-BLACK-001:Black – No logo
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 font-bold bg-gray-50">
                        IdentivPart Numbersfor Kantech
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                       4000XSF
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                       4010XSF, 4020XSF,4030XSF, 4032XSF
                      </td>
                       <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                       4082XSF
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                       4090XSF
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                       By request
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                       70mm (2.76 in) wristdiameter:• 4096XSF:White – No logo• 4096XSF-BLACK-001: Black – No logo55mm (2.17 in) wristdiameter:• 4098XSF:White – No logo
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 font-bold bg-gray-50">
                       HID®Part Number
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                        1326
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                       1386/1586
                      </td>
                       <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                       1346
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                       1391
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                        N/A
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                       N/A
                      </td>
                   </tr>
                     <tr>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 font-bold bg-gray-50">
                        Schlage /Allegion
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                        7410
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                       7510
                      </td>
                       <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                       7610
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                       7710
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                       N/A
                      </td>
                      <td className="border border-gray-500 p-2 text-[17px] text-gray-800 text-center">
                       N/A
                      </td>
                   </tr>
                </tbody>
             </table>
          </div>

          {/* Tags */}
            <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="text-white border bg-red-500 px-2 py-1">Hirsch</p>
            <p className="text-white border bg-red-500 px-2 py-1">Access Control System</p>
           </div> 

          {/* Share Section */}
          <SocialShare title="Check out this product!" />
        </main>

        {/* Sidebar */}
        <aside className="lg:w-1/4 space-y-6">
           <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By HIRSCH</h3>
            <ul className="text-xl space-y-4 text-gray-500 transition-colors">
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
              <button className="bg-blue-700 hover:bg-blue-400 text-white font-semibold rounded transition-all duration-300 w-full md:w-auto px-4 py-3 md:px-6 md:py-2 lg:px-8 lg:py-3 lg:text-lg">
                <NavLink to="/contacts" className="w-full h-full flex items-center justify-center">
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

export default PcGeneral;