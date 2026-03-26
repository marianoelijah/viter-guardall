import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';

// Shared Layout Component to maintain design consistency across all products
const ProductLayout = ({ title, subtitle, description, features, specs, sidebarItems }) => {
  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-slate-800">
      {/* Banner Header */}
      <header className="bg-[#7f95b8] text-white py-14 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          {title}
        </h1>
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-xl my-10 p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Product Info */}
          <div className="lg:col-span-3">
            <p className="text-[17px]  text-black mb-6">{subtitle}</p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
              <p className="text-[17px] text-black leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] text-black space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>

             {/* Technical Specifications Table */}
              <div className="bg-gray-300 p-6 shadow rounded border border-r divine-y">
            <h2 className="font-bold text-black text-xl mb-4">Technical Specification</h2>

            <table className="w-full border text-[15px] text-black">
              <tbody>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                      Model
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                      N85CL5Z
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Day/Night
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    True
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Camera Angle Adjustment
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Horizontal: 0 to 355°Vertical: 0 to 65°
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Multi-View Streaming
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   Yes, 3 Streams
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Automatic Gain Control
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Yes
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     1- or 2-Way Audio
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Two-Way
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Audio Formats
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                      AAC, G.711, G.726
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Pan/Tilt
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     No
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Security
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    HTTPS, IEEE 802.1X
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Supported Protocols
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    ARP, Bonjour, DDNS, DHCP, DNS, FTP, HTTP, ICMP, IGMP, IPv4/v6, NTP, PPPoE, QoS Layer 3 DiffServ, RTP, RTSP, SMTP, SNMP v1/v2c/v3 (MIB-II), TCP, UDP, UPnP
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Event Trigger
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     	Yes
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Event Action
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Recording, Notification, Alarm
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                      Data Streaming
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Yes
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Alarm I/O
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     1 / 1
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Memory
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    512 MB RAM / 32 MB Flash
                  </td>
                </tr>
               <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Media/Memory Card Slot
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Single Slot: microSD/microSDHC/microSDXC [128 GB Maximum]
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     External Storage Options
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   Local PC, NAS
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Package Weight
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    2.55 lb
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     Box Dimensions (LxWxH)
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     7.85 x 7.5 x 7.5″
                  </td>
                </tr>
              </tbody>
            </table>
                </div>
            

            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                DAHUA
              </span>
              
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                CCTVs
              </span>
            </div>

               {/* SHARE SECTION */}
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

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 p-4 border border-black  border-r mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By DAHUA</h3>
            <ul className="text-xs space-y-4 text-gray-500 transition-colors">
              <li className='cursor-pointer hover:text-[#f08c09]'>Onity DirectKey with Serene</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>INR 415 256-Channel 12 Bay RAID Rackmount Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>GNR 340 100-Channel Tower Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>ENR 130 16-Channel Desktop Standalone NVR - No HDD Included</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>Z86 Outdoor Network Dome Camera with Night Vision</li>
            </ul>
          </div>

            {/* Blue CTA Card */}
             <div
              className="bg-blue-600 text-white p-6 rounded shadow-md overflow-hidden relative min-h-[200px]"
              style={{
                backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(30, 64, 175, 0.8)), url('/src/assets/image/Our Products/quickalert.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="relative z-10 max-w-3xl">
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
      </main>
    </div>
    <Footer />
    </>
    
  );
};

// Example Usage for the Hirsch M64 Controller
const N85CL5Z = () => {
  const data = {
    title: "N85CL5Z 4K UHD Outdoor ePoE Network Dome Camera",
    subtitle: "A surveillance camera with varifocal lens for a wider field of view and 4x optical zoom. ",
    description: "The N85CL5Z 4K UHD Outdoor ePoE Network Dome Camera from Dahua Technology uses a 1/2.5″ progressive scan STARVIS CMOS sensor to capture 3840 x 2160 resolution at 15 fps. Three IR LEDs provide up to 164′ of night vision. The camera’s 2.7-12mm motorized varifocal lens delivers a 110-40° horizontal field of view and 4x optical zoom. Two-way audio communication is possible thanks to an audio input and output. An onboard memory card slot supports microSD cards up to 128GB (available separately). Integrated PoE technology simplifies connectivity by enabling the transfer of power and data through a single cable. Additionally, ePoE technology offers a cost-effective solution for transmitting power and data over long distances via Ethernet or coaxial cables.",
    features: [
      "3840 x 2160 Resolution at 15 fps",
      "IR LEDs for Night Vision up to 164′",
      "2.7-12mm Motorized Varifocal Lens",
      "110-40° Horizontal Field of View",
      "4x Optical Zoom",
      "Two-Way Audio Communication",
      "Supports microSD Cards up to 256GB",
      "RJ45 with Enhanced Power over Ethernet",
      "Complies with ONVIF Profiles G, S & T",
      "IP67 Rated for Outdoor Use",
      "IK10-Rated Vandal Resistance"
    ],

  };

  return <ProductLayout {...data} />;
};

export default N85CL5Z;