import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';



const AR837E = () => {
  const specs = [
    { label: "Model", value: "AR837EF" },
    { label: "Frequency", value: "Dual frequency EM125KHz and 13.56 Mhz" },
    { label: "Standard", value: "Dual standard EM and Mifare ISO14443A" },
    { label: "Reading Range (Depends on Tags)", value: "5-15cm2-5cm" },
    { label: "Power Supply", value: "10-24VDC" },
    { label: "Power consumption", value: "5W" },
    { label: "Communication Interface", value: "RS-485 or Ethernet" },
    { label: "Baud Rate", value: "9600 bps(N,8,1) or 10/100M Ease T" },
    { label: "Temperature", value: "-10。C to +60。C" },
    { label: "Digital Input", value: "Egress(R.T.E.) / Door contact x 2" },
    { label: "Relay Output", value: "Alarm Relay / Lock Relay" },
    { label: "Lock Relay Time", value: "ON/OFF, 0.1-600 Sec." },
    { label: "Alarm Time", value: "Toggle, 1-600 Sec" },
    { label: "Tamper Switch", value: "Limit Switch (Form C)" },
    { label: "User Capacity", value: "16,000" },
    { label: "Event log", value: "32,000" },
    { label: "External Reader", value: "1 Weigend Port" },
    { label: "Anti-pass-back", value: "Yes" },
    { label: "Lift Control", value: "64 Floor, 16,000 Users" },
    { label: "Serial port", value: "Yes" },
    { label: "Real Time Clock", value: "Yes" },
    { label: "Transistor Output", value: "Arming LED/Alarm/ Duress/WG Lock Relay / Security trigger signal" },
    { label: "LCD Panel", value: "128*64 (4 Lines message, 16 Character each line)" },
    { label: "Indicator", value: "6 LED & 1 Beeper" },
    { label: "Keypad Material", value: "Illuminated Rubber" },
    { label: "Housing Material", value: "RS485 & TCPIP" },
    { label: "By Order Module", value: "AR-MDL-721V (Voice Module); ar-837i (TPC/IP)AR-WG-HID (HID RF Module)" },
    { label: "Door Bell Button", value: "Yes" },
    { label: "Time Zone", value: "63" },
    { label: "Operation Mode", value: "Standalone/ Networking" },
    { label: "Color", value: "Black / Silver" },
    { label: "Dimensions (mm)", value: "133(L)X96(W)X25(H)" },
    { label: "Weight (g)", value: "230±10" },
  ];

  const productFeatures = [
    "Dual door control",
    "Simple automation",
    "Extended flexibility",
    "Built-in tamper-proof function",
    "Soft global anti-pass back",
   
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          AR837E Direct TCPIP LCD and Keypad Panel
        </h1>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-lg my-10 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Left Column: Product Info */}
          <div className="lg:col-span-3">
            <p className="text-gray-800 text-[17px] mb-6">
             A metallic and compact door access with manual keypad and large LCD design. 
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
             AR837E is a card access reader typically installed at the door to restrict unauthorized access. 
             It reads EM or Mifare proximity cards. It supports RS485 and TCPIP connection, 16,000 users 
             and 32000 event memory. It has a built-in touch panel keypad and LCD screen.
              </p>

               <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1 text-black">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            </section>


            {/* Technical Specifications Table */}
            <section>
              <h2 className="font-bold text-xl text-black mb-4">Technical Specification:</h2>
              <div className="overflow-x-auto border border-gray-500">
                <table className="w-full text-left text-xs border-collapse">
                  <tbody>
                    {specs.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                        <td className="p-3 border-b border-r border-gray-500 text-[15px] font-bold w-1/3 text-gray-700">
                          {spec.label}
                        </td>
                        <td className="p-3 border-b border-gray-500 text-[15px] text-gray-600">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            
             
            {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                MAG
              </span>
              
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                Access Control System
              </span>
            </div>

            {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
            <h3 className="text-xl font-bold text-black mb-4 border-b pb-1">More By MAG</h3>
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
          </div>
        </div>
      </main>
    </div>
    <Footer />
    </>
   
  );
};

export default AR837E;