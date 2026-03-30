import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';


const Sarix = () => {
  const productFeatures = [
    "Reduce deployment and maintenance costs",
    "Strong low light performance",
    "Tailored for indoor protection",
    "Flexible lens options for custom coverage",
    "Prevent cyber attacks with FIPS compliance",
    "Integrates with your ONVIF-conformant VMS"
  ];

  // Helper to render table headers for the hardware sections
  const renderHardwareHeader = (models) => (
    <thead>
      <tr className="bg-gray-100 font-bold text-[10px]">
        <th className="border border-black p-2 text-left w-1/4"></th>
        {models.map((model, idx) => (
          <th key={idx} className="border border-black p-2 text-center">{model}</th>
        ))}
      </tr>
    </thead>
  );

  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-black pb-12">
      {/* Blue Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-4 text-center">
        <h1 className="text-5xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto text-center">
              Sarix Multi Enhanced Camera
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
          <p className="text-[17px] leading-relaxed mb-6">
           This camera delivers multi-directional coverage from a single vantage point helping reduce blind spots. 
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
            <div className="text-[17px] leading-relaxed space-y-4 mb-6">
              <p>
               The Pelco Sarix Multi Enhanced camera delivers multi-directional coverage from a single vantage point, offering security teams exceptional situational awareness of wide areas using fewer cameras. This analytics-enabled camera helps to reduce blind spots and can take on the most difficult lighting conditions across vast areas, while providing high-quality, panoramic views. All of this is backed by a 5-year warranty from a brand you can trust.
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
          <div className="mb-8">
             
             <table className="w-full border-collapse border border-black text-[10px]">
                <thead>
                   <tr className="bg-gray-100 font-bold">
                      {/* <th className="border border-black p-2 text-left w-1/4"></th> */}
                      <th className="border border-black p-2 text-[17px] text-black">
                        Model Name
                      </th>
                      <th className="border border-black p-2 text-[17px] text-black">
                        IN-CEILING
                      </th>
                      <th className="border border-black p-2 text-[17px] text-black">
                        SURFACE MOUNT
                      </th>
                      <th className="border border-black p-2 text-[17px] text-black">
                        PENDANT POLE OR WALL MOUNT
                      </th>
                   </tr>
                </thead>
                <tbody>
                  <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-50 text-center">
                        Part Number</td>
                      <td colSpan="4" className="border border-black p-2 text-[15px] text-black text-center">
                        SMLE1-9V5-3HSMLE1-12V5-4HSMLE1-15V5 <br/>
                        -3H SMLE1-20V5-4HSMLE1-24V5-3HSMLE1-32V5-4H
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-50 text-center">
                        Accessory Part Number
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                         IMD1-INC required withIMD1-INCLD0 or IMD1-INCLD1
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          IMD1-SMT required withIMD1-SPLD0 or IMD1-SPLD1
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          IMD1-PMT required withIMD1-SPLD0 or IMD1-SPLD1
                      </td>
                   </tr>
                 <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-center">
                    Resolution (MP)
                  </td>
                  <td colSpan="4" className="border border-black p-2  text-[15px] text-black">
                     3 MP / 5 MP / 8 MP per image sensor
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-bold bg-gray-100 text-[17px] text-center">
                    Image Sensor
                  </td>
                  <td colSpan="4" className="border border-black p-2  text-[15px] text-black">
                     1/2.8” CMOS
                  </td>
                </tr>
                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-50 text-center">
                       Max. Dynamic Range (dB)
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                      120 dB, true WDR, dual exposure
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-50 text-center">
                        Max. Image Rate (50 Hz / 60 Hz)
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        30 m (98 ft) maximum distance at 0 lux when camera is mounted at 4 m (13 ft) off the ground
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-50 text-center">
                         Environmental
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                         N/A
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          IK10, IP66/67, NEMA 4X, NEMA TS2
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          IK10, IP66/67, NEMA 4X, NEMA TS2
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-50 text-center">
                          AUDIO, POWER, STORAGE
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black"></td>
                   </tr>
                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-50 text-center">
                        Audio Compression Method
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        G.711 PCM 8 kHz, Opus
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black  text-[17px] text-black font-bold bg-gray-50 text-center">
                        Audio Input/Output
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        Line level input and output
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-50 text-center">
                        External I/O Terminals	
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        Alarm In, Alarm Out
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black text-[17px] text-black font-bold bg-gray-50 text-center">
                        Power Source	
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black">
                       30 W IEEE 802.3at Type 2 (PoE+)
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black">
                        With IR: 60 W (PoE++): IEEE 802.3bt Type 3, Cisco® UPoE or legacy high-power PoEWith 35% IR Power: 30 W IEEE 802.3at Type 2 (PoE+)Without IR: 30 W IEEE 802.3at Type 2 (PoE+)
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-black text-[17px] text-black font-bold bg-gray-50 text-center">
                        Onboard Storage
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        Dual MicroSD/microSDHC/microSDXC slot
                      </td>
                   </tr>
                </tbody>
             </table>
          </div>

         

          {/* Tags */}
            <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="text-white border bg-red-500 px-2 py-1">PELCO</p>
            <p className="text-white border bg-red-500 px-2 py-1">CCTVs</p>
           </div> 

          {/* Share Section */}
           <SocialShare title="Check out this product!" />
        </main>

        {/* Sidebar */}
        <aside className="lg:w-1/4 space-y-6">
           <div className="bg-gray-300 p-4 border border-black mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By PELCO</h3>
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

export default Sarix;