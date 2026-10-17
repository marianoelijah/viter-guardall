import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const   SD834EHL = () => {
  const productFeatures = [
    "VORTEX Premium Series Cloud Camera",
    "30x Optical Zoom with Auto Focus and EIS",
    "Built-in 200M IR with Smart IR Technology",
    "Weather-proof IP66 & Vandal proof IK10/NEMA 4X",
    "-40% C - 60%C Wide Temperature Range"
  ];

  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
        {/* Blue Header Banner */}
        <header className="bg-[#8ba4ca] text-white py-12 px-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            SD834-EHL
          </h1>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="lg:w-3/4 bg-gray-300 p-8 shadow-sm">
            <p className="text-[15px] text-black mb-6">
                5MP Outdoor AI PTZ Camera
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
              <p className="text-[15px] text-black leading-relaxed mb-4">
                 The VIVOTEK SD834-EHL (VORTEX Series) is a high-performance 5MP outdoor cloud-managed AI PTZ 
                 camera designed for wide-area surveillance and long-range precision monitoring. 
                 Featuring a powerful 30x optical zoom lens with Auto Focus and Electronic Image 
                 Stabilization (EIS), it captures crisp, detailed video even during physical camera 
                 vibrations. It is equipped with built-in IR illuminators utilizing Smart IR 
                 Technology, providing nighttime visibility up to 200 meters. Built to endure 
                 extreme environments, the camera features weather-proof IP66 and vandal-proof 
                 IK10/NEMA 4X rated housing, supporting an operating temperature range of -40°C to 
                 60°C.
              </p>

              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-[15px] text-black space-y-1">
                {productFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

              {/* Technical Specifications Table */}
             <div className="bg-gray-300 p-6 shadow rounded border border-r divine-y">
            <h2 className="font-bold text-black text-xl mb-4">Technical Specification</h2>

            <table className="w-full border text-[15px] text-black border-black">
              <tbody>
            

            {/* CAMERA SPECIFICATIONS */}
            <tr>
              <td colSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                CAMERA SPECIFICATIONS
              </td>
            </tr>   

            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Image Sensor
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                1/2.8" Progressive CMOS
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Max. Resolution
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">              
                SD: 1280x960
                HD: 2560x1920
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Lens Type
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                
                30x Optical Zoom, Auto Focus
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Focal Length
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                f = 4.94 ~ 148.24 mm (30x zoom)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Aperture
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                F1.3 ~ F4.6
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Iris Type
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                DC-iris
              </td>
            </tr> 
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Field of View
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                54.1° ~ 1.9° (Horizontal)
                41.2° ~ 1.4° (Vertical)
                65.7° ~ 2.4° (Diagonal)
              </td>
            </tr> 
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Shutter Time
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                1 sec. to 1/100,000 sec.
              </td>
            </tr> 
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                WDR Technology
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                WDR Pro
              </td>
            </tr> 
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Day/Night
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Yes
              </td>
            </tr>
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Removable IR-cut filter
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Yes
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Illuminators
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Built-In IR Illuminators, effective up to 40 meters with Smart IR, IR LED*4
              </td>
            </tr> 
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Miniminum Illumination
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                
                0.03 lux @ F1.3 (Color)
                0.005 lux @ F1.3 (B/W)
                0 lux with IR illumination on
              </td>
            </tr> 
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Pan Speed
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                0.05° ~ 450°/sec
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Pan Range
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                360° endless
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Tilt Speed
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                0.05° ~ 450° /sec
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Tilt Range
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                -20° ~ +90°
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Preset Location
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                256 preset locations / 128 presets per tour
              </td>
            </tr>
           
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Storage
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                MicroSD/SDHC/SDXC card slot
                (Built-in 256GB industrial SDCard)
              </td>
            </tr>
            

              {/* VIDEO */}
            <tr>
              <td ColSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                VIDEO
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Video Stream Settings
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                HD Video 2560 x 1920@15fps 1.2Mbps upload
                SD Video 1280 x 960@15fps 300Kbps upload
              </td>
            </tr>

             {/* AUDIO */}
             <tr>
              <td ColSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                AUDIO
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Audio Capability
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Two-way Audio (full duplex)
                (xPro License required to enable speaker talk-down feature)
              </td>
            </tr>
            
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Interface
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                External line input
                External line output
              </td>
            </tr>
          

            {/*  NETWORK */}
            <tr>
              <td ColSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                NETWORK
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Users
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Up to 6 clients
                *Live viewing for 6 clients
                *live viewing up to 4 clients and playback 2 clients
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Security
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Secure boot, Signed firmware, HTTPS/TLS encryption, Video encryption
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Protocols
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                
                ARP, DHCP, DNS, HTTP, HTTPS, ICMP, IPv4, NTP, RTSP/RTP/RTCP, SSL, TCP/IP, TLS 1.2, UDP, WebRTC
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Interface
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                10BASE-T/100BASE-TX Ethernet (RJ-45)
                *It is highly recommended to use standard CAT5e & CAT6 cables which are compliant with the 3P/ETL standard.
              </td>
            </tr>
            
            {/*  GENERAL */}
            <tr>
              <td ColSpan={5} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                GENERAL
              </td>
            </tr>

            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Cnnectors
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                            
                RJ-45 cable connector for 10/100 Mbps Network/PoE connection
                Audio line input *
                Audio line output *
                DC 48V power input
                AC 24V power input
                Digital input *2 *
                Digital output *1 *
                RS-485 *1 *
                * Requires AO-008 cable
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                LED Indicator
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                System power and StatuS indicator
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Power Input
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                AC 24V, DC48V, IEEE 802.3bt Class 6 PoE
                (Simultaneous Power Redundancy Supported)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Power Consumption
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                PoE Max: 51W/26W (IR on/off)
                DC 48V Max: 51W/26W (IR on/off)
                AC 24V Max: 51W/26W (IR on/off)
                IR on: 51W/45W Heater and fan on/off
                IR off: 26/20W Heater and fan on/off
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Dimensions
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                256 (D) x 336 (H) mm
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Weight
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                7.1 kg
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Certifications
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                             
                EMC
                CE (EN 55032 Class A, EN 55035, EN 50121-4), UKCA (BS EN 55032:2015+A11:2020, BS EN 55035:2017), FCC (FCC Part 15 Subpart B Class A), IC (ICES-003:2020 Issue 7, Class A), RCM (AS/NZS CISPR 32 Class A), VCCI (VCCI-CISPR 32 Class A)
                Safety
                UKCA (BS EN 62368-1:2014+A11:2017), UL (UL 62368-1), CB (IEC/EN 62368-1, IEC/EN 60950-22, IEC/EN 62471)
                Environment
                IK10 (IEC 62262), IP66 (IEC 60529), NEMA (NEMA 250 Type 4X)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Operating Temperature
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                                             
               Starting Temperature:
               -40°C ~ 55°C (-40°F ~ 131°F)
               Working Temperature:
               -40°C ~ 60°C (-40°F ~ 140°F) (IR on)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Humidity
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                98% non-condensing
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Warranty
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                  Up to 60 Months (Depends on license type)
              </td>
            </tr>

        
              </tbody>
            </table>
             </div>


            {/* Footer Tags */}
            <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
              <p className="text-white border bg-[#ff5f31] px-2 py-1 rounded">Vivotek</p>
              <p className="text-white border bg-[#ff5f31] px-2 py-1 rounded">CCTVs</p>
              
            </div> 

            {/* Share Section */}
            <SocialShare title="Check out this product!" />
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/4 space-y-6">
            <div className="bg-gray-300 p-6 rounded shadow-sm border border-gray-400">
              <h3 className="font-semibold text-xl mb-4 border-b border-black pb-2 ">More By VIVOTEK</h3>
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

            {/* Perfected Matching CTA Card */}
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

export default  SD834EHL;