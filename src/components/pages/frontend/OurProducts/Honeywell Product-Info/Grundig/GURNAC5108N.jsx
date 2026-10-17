import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const   GURNAC5108N = () => {
  const productFeatures = [
    "Silent operation without any fans and low power consumption",
    "Controlled locally by USB mouse or remotely through Ethernet connection with CMS, Web page and mobile Apps, IVA support (intelligent virtual assistant) Amazon Alexa and Google Assistant"
  ];

  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
        {/* Blue Header Banner */}
        <header className="bg-[#8ba4ca] text-white py-12 px-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            GU-RN-AC5108N
          </h1>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="lg:w-3/4 bg-gray-300 p-8 shadow-sm">
            <p className="text-[15px] text-black mb-6">
              The Grundig GU-RN-AC5108N is an 8-channel standalone IP network video recorder belonging to Grundig's SMART lineup. Designed for centralized video management, it provides 4K output support, Power over Ethernet (PoE) integration, efficient video compression, and deep learning AI analytics to support smart security monitoring.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
              <p className="text-[15px] text-black leading-relaxed mb-4">
                Grundig's SMART range is designed to deliver complete modern video surveillance solutions with integrated AI analytics suitable for a variety of deployment environments. Additionally, as part of the SMART ECO family, it focuses on ease of use, dependable operation, efficient resource usage through false alarm filtration, and high cost-efficiency.
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

            <tr>
              <td colSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                VIDEO
              </td>
            </tr>    
            
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                IP Inputs
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                8 channels
              </td>
            </tr>

            <tr>
              <td colSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                RECORDING / PLAYBACK
              </td>
            </tr>    
            
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Recording Bandwidth
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                max. 76 Mbps
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Outgoing Bandwidth
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                max. 32 Mbps
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Recording Resolution
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                8 MP, 5 MP, 3 MP, 1080p, 960p, 720p
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Recording Mode
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                Continuous, Event Alarm, Motion, Schedule
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Search Mode
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                Date, Time, Event Alarm, Motion, Search Backup
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Smart Search Foundation
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                Search for people, motorized vehicles, non-motorized vehicles, intrusion and line crossing, 
                thumbnails, tags, faces and characteristics, attendance, visit frequency and license plates
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Playback
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                Synchronised playback of max. 4 cameras
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Frame Rate(R)
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                4K: 30 fps, 4MP: 60fps, 2MP: 120 fps
              </td>
            </tr>

            <tr>
              <td colSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                AUDIO
              </td>
            </tr> 

            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
               Audio Compression
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                G.711
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
               Audio Detection
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
               Detects unusual noises: dogs barking, babies crying, gunshots, sudden sound increase and decrease
              </td>
            </tr>
            

            <tr>
              <td colSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                GENERAL
              </td>
            </tr> 

            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                External Backup
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                USB HDD, USB Memory, Network
              </td>
            </tr>
             <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Max. Storage Capacity
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
               Up to 10 TB capacity for each HDD
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
               Languages
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                Chinese, Czech, Dutch, English, Finnish, French, German, Italian, Portuguese, Spanish, Russian, 
                Turkish, Polish
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                PTZ Control
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
               Pan, Tilt, Zoom, Preset set and call
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Basic Internal Storage
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
               No
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Accessories Included
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                Mouse & external power supply
              </td>
            </tr>

             <tr>
              <td colSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                NETWORK
              </td>
            </tr> 

             <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Video Compression
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                H.264, H.264+, H.265, H.265+ , MJPEG
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Cyber Security
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                Different password levels, password protection, complicated password, HTTPS encryption,
               digest authentication for HTTP/HTTPS , IP address filter, WSSE and digest authentication for
               ONVIF, RTP/RTSP over HTTPS, control timeout settings, security audit log, TLS 1.0, TLS 1.1 & TLS
               1.2, TLS 1.2 with updated cipher suites including AES 256 encryption, Brute Force Delay
               Protection, Signed Firmware.
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Remote Connections
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                96
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Streaming Method
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                Unicast, Multicast
              </td>
            </tr>
            
            <tr>
              <td colSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                I/O Interface
              </td>
            </tr> 

            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                HDMI Output
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                4K (3840 × 2160), 2K (2560 × 1440), 1920 x 1200, 1600 x 1200, 1920 × 1080, 1280 × 720, 1440 x
                900, 1280 x 1024, 1024 × 768
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                VGA Output
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                1920 × 1080, 1440 x 900, 1280 × 1024, 1280 × 720, 1024 x 768
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
               Audio Outputs:
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                1-ch, RCA
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
               Harddisk bay:
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                1 x SATA III
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
               Network Interface:
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                1x 10, 100 Base T (Ethernet), TX (RJ-45)
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
               Serial Interface(s):
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                Front panel: 1 × USB 2.0 Rear panel: 1 × USB 2.0
              </td>
            </tr>
            
          
              </tbody>
            </table>
          </div>


            {/* Footer Tags */}
            <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
              <p className="text-white border bg-[#ff5f31] px-2 py-1 rounded">Grundig</p>
              <p className="text-white border bg-[#ff5f31] px-2 py-1 rounded">CCTVs</p>
              
            </div> 

            {/* Share Section */}
            <SocialShare title="Check out this product!" />
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/4 space-y-6">
            <div className="bg-gray-300 p-6 rounded shadow-sm border border-gray-400">
              <h3 className="font-semibold text-xl mb-4 border-b border-black pb-2 ">More By GRUNDIG</h3>
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

export default  GURNAC5108N;