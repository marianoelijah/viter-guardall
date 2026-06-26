import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';



const Pelco = () => {
  const productFeatures = [
    "Built-in microphone for audio detection",
    "Detect objects with Smart Analytics",
    "Resist damage from water, dust or impact",
    "See details in low-lighting with true WDR",
    "Easy-to-install design",
    "Integrates with your ONVIF conformant VMS",
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
             Pelco Fisheye Camera
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
          <p className="text-[17px] leading-relaxed mb-6">
           A surveillance camera that provides a 360-degree view of the surrounding to avoid any blind spots. 
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
            <div className="text-[17px] leading-relaxed space-y-4 mb-6">
              <p>
              The Pelco Fisheye camera features built-in AI-powered Pelco Smart Analytics, powered by Motorola Solutions. This helps to detect critical events and helps to increase security teams’ productivity by expediting real-time responses and forensic investigations. This panoramic camera is a cost-effective and easy-to-install solution that provides 360-degree views of large areas from a single vantage point, bringing superior situational awareness, free from any blind spots. With a sleek, low-profile design the fisheye camera provides a discreet video security solution. 
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
                      <th colSpan="2" className="border border-black p-2 text-[17px] text-black">
                        IN-CEILING MOUNT INDOOR MODELS
                      </th>
                      <th colSpan="2" className="border border-black p-2 text-[17px] text-black">
                        IN-CEILING MOUNT INDOOR MODELS
                      </th>
                   </tr>
                </thead>
                <tbody>
                  <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                          Part Number
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          IMF82-1ESIMF82-1ERS
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          IMF122-1ESIMF122-1ERS
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          IMF82-1I
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          IMF122-1I
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                          Sensor Resolution (MP)
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          IMF82-1ESIMF82-1ERS
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          IMF122-1ESIMF122-1ERS
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          IMF82-1I
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          IMF122-1I
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                          Image Sensor (progressive scan CMOS)
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          1/1.8”
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          1/2.3”
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          1/1.8”
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          1/2.3”
                      </td>
                   </tr>
                    
                
                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                       Max. Dynamic Range (dB)
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        120 dB
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                       Max. Image Rate (50 Hz / 60 Hz)
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                        25 fps / 30 fps
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                       Environmental
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black">
                        IK10 Impact Rating IP66 Type 4X on environmental models
                      </td>
                       <td colSpan="2" className="border border-black p-2 text-[17px] text-black">
                        IP5X Rating
                      </td>
                   </tr>

                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                         AUDIO, POWER, STORAGE
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black">
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                         Audio Compression Method
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black text-center">
                         Opus, G.711 PCM 8 kHz
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                         Audio Input/Output
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black text-center">
                        Line level I/O and built-in microphone (can be enabled)
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                        External I/O Terminals	
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black text-center">
                         Alarm In: Digital input for connecting an external input sensor Alarm Out: Digital output for controlling an external output device
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                       External Power Source
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black text-center">
                         With IR: VDC: 12 V +/-10%, 26 W min, Without IR: VDC: 12 V +/-10%, 11 W min
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                        PoE Power Source
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black text-center">
                        With IR: PoE+: IEEE 802.3at, Class 4, Without IR: PoE: IEEE 802.3af, Class 3
                      </td>
                   </tr>
                    <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                        Onboard Storage
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black text-center">
                        2 x microSD/microSDHC/microSDXC slots – video speed class card required. Class V10 or better recommended One of the two SD card slots is reserved for future use
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                        LENS
                      </td>
                      <td colSpan="4" className="border border-black p-2 text-[17px] text-black text-center">
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                          Lens
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          (1.4mm, F/2.0)
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          (1.6mm, F/2.0)
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          (1.4mm, F/2.0)
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          (1.6mm, F/2.0)
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                          Field of View
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                         360°
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          360°
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          360°
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          360°
                      </td>
                   </tr>
                   <tr>
                      <td className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                          Minimum Illumination (color/monochrome)
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                         With IR: 0 luxWithout IR: (0.2 lux / 0.1 lux)
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          Without IR: (0.38 lux / 0.19 lux)
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          With IR: 0 luxWithout IR: (0.2 lux / 0.1 lux)
                      </td>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black text-center">
                          Without IR: (0.38 lux / 0.19 lux)
                      </td>
                   </tr>

                   
                </tbody>
             </table>
          </div>

         

          {/* Tags */}
            <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="text-white border bg-[#FF5F31] px-2 py-1">PELCO</p>
            <p className="text-white border bg-[#FF5F31] px-2 py-1">CCTVs</p>
           </div> 

          {/* Share Section */}
           <SocialShare title="Check out this product!" />
        </main>

        {/* Sidebar */}
        <aside className="lg:w-1/4 space-y-6">
           <div className="bg-gray-300 p-4 border border-black mb-6">
            <h3 className="text-xl font-bold text-black mb-4 border-b pb-1">More By PELCO</h3>
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

export default Pelco;