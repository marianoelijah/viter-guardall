import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';




const KinTouch = () => {
  const specs = [
    { label: "System", value: "CPU: Quad-core Cortex™-A7 1.5GHzGPU: Mali400MP2FLASH: 8GB eMMC FlashSDRAM: 1GB DDR3L Screen:10.1” color TFTResolution 1024 x 600 pixelViewing angle: 130º H, 140º VContrast: 800/1Brightness: 300cd/m2 Audio:Codec G.711/G 729 Camera:1/3” CMOS Color120º diagonal Lens, Horizontal 105º, Vertical 55º1280 x 720 pixelMinimum illumination: 0.5 LUX. Automatic activation of LEDsAWB Electrical consumption:Standby: 250 mAOperating: 1000 mAWith active heater (*): 1500 mA Voltage:12 VdcPoE (*) Connectivity:RJ-45 Ethernet ConnectorRS485 connection port for elevator relay and control module.Wiegand-26 connection for exterior access control reader.Remote configuration and management through webserver."},
    { label: "Environmental characteristics:", value: "Temperature: -40 oC.. + 55 oCHumidity: 10 – 90% (non-condensing)IP54" },
    { label: "Technology", value: "MEET" },
    { label: "Measures of the product", value: "405 X185 X 50 mm" },
    { label: "Weight", value: "2.297 kg" },
    { label: "Measures of the packed product	", value: "•14×46,5×25,5 cm" },
    { label: "EAN 13", value: "• PoE• 12 Vdc" },
    
  ];

  const productFeatures = [
    "Call To Housing",
    "Agenda Visitors Will Also Be Able To Locate A Call By Searching For The Neighbor’s Name In The Electronic Directory.",
    "Call To Concierge",
    "Additional Relay",
    "Access Via Pin Code.",
    "Facial Recognition",
    "Access Control –  The Board Includes A Mifare Card Reader, And Can Control Up To 100,000 Cards.",
    "IP Cameras.",
    "Video Streaming ",
    "WAnti-Sabotage",
  ];

  return (
    <>
    <Header />
     <div className="bg-gray-200 dark:bg-[#121214] min-h-screen font-sans text-[#333] dark:text-gray-200 transition-colors duration-300">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-6 text-center transition-colors duration-300">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          KIN TOUCH PANEL MEET
        </h1>
      </header>

      
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Container */}
        <main className="lg:w-3/4 lg:col-span-8 bg-gray-100 dark:bg-[#1e1e22] p-6 md:p-8 rounded-xl border border-transparent dark:border-gray-800 shadow-md transition-colors duration-300">
            <p className="text-5xl md:text-[17px]  max-w-4xl mx-auto leading-tight">
               This video & audio panel features a 7-inch capacitive touch screen for easy operation. It offers clear video and audio communication with convenient controls. 
            </p>

            <section className="mb-8">
               <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] text-gray-800 dark:text-gray-300 space-y-1 transition-colors">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            </section>

            {/* Technical Specifications Table */}
            <section>
              <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Technical Specification:</h2>
              <div className="overflow-x-auto border border-gray-500">
                <table className="w-full text-left text-xs border-collapse border border-black">
                 
                  <tbody>
                    {specs.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-00' : 'bg-gray-00'}>
                        <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                          {spec.label}
                        </td>
                        <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
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
                FERMAX
              </span>
              
              <span className="bg-[#ff5f31] text-white px-2 py-1 rounded">
                Audio-Video Intercom & PA-BGM
              </span>
            </div>

            {/* SHARE SECTION */}
             <SocialShare title="Check out this product!" />

        </main>

          {/* Sidebar */}
              <aside className="lg:w-1/4 space-y-6"> 
                     <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded-xl shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
                        <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By FERMAX</h3>
                         <ul className="space-y-4 text-gray-700 dark:text-gray-300">s
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

export default KinTouch;