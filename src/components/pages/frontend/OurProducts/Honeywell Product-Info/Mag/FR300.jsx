import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';


const FR300 = () => {
  const productFeatures = [
    "Automatic Adaptive Detection Reading (AADR) technology.",
    "Automatic Depth Measuring (ADM) technology.",
    "Dual camera featuring IRSense and ColorSense technology.",
    "Adjustable detection range. ",
    "High face capacity up to 10,000 face.",
  ];

  return (
    <>
    <Header />
    <div className="bg-gray-100 dark:bg-[#121214] min-h-screen font-sans text-slate-800 dark:text-gray-200 transition-colors duration-300">
      {/* Blue Header Banner */}
      <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-4 text-center transition-colors duration-300">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
           FR300 Face Recognition Reader
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <main className="max-w-6xl mx-auto bg-gray-200 dark:bg-[#1e1e22] border border-transparent dark:border-gray-800 transition-colors shadow-lg my-10 p-8 md:p-12 lg:w-3/4">
          <p className="text-[17px] leading-relaxed mb-6">
         A mid-level face recognition reader suitable for door access and pedestrian access.
          </p>

          <section className="mb-8">
            <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold dark:text-blue-400 transition-colorsfont-bold text-xl mb-2 text-black">Product Description:</h2>
            <div className="text-[17px] leading-relaxed space-y-4 mb-6">
              <p>
                  MAG FR300 face recognition reader is a dynamic face recognition reader built with an 
                  advanced face tracking algorithm for faster and more accurate dynamic face detection. 
                  The modern, compact and slim design with premium finishes make it easy to fit into any 
                  commercial premises either for door access or pedestrian access. It is suitable for use 
                  in pedestrian gate or door access for office buildings, school, hospital, airport, 
                  condominium, factory, etc.
              </p>
            </div>

            <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold dark:text-blue-400 transition-colorsfont-bold text-xl mb-2 text-black">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          {/* Technical Specifications Table */}
          <section className="mt-10 overflow-x-auto">
            <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold dark:text-blue-400 transition-colorsfont-bold text-xl mb-2 text-black">Technical Specification:</h2>
            <table className="w-full border-collapse border border-gray-500 text-[11px]">
        
         {/* 1  */}
              <tbody>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     User ID/ Face Capacity
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    10,000
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   Event Record Capacity
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   1,000,000
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     Access Mode
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     Dynamic Face Recognition, PINFace Recognition + PIN
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    Face Recognition Mode
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    1:1, 1:N
                  </td>
                </tr>
                 <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   Validation Display
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   Name & Number
                  </td>
                </tr>
                 <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    Real Time Face Detection
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     0.2sec
                  </td>
                </tr>
                 <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   Intelligent Function
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     Infrared Live Person Identification Detection
                  </td>
                </tr>
                 <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    Facial Scanning Range
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    Purely Dynamic Face Recognition: 0.5-3mInfrared Live movement detection: 0.5-1.5m
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   Dual Camera
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     ColorSense camera and IRSense camera
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     Dual Light
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    Smart LED light and infrared light
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     Display Screen
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    5 inch smart touch screen
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     Operating System
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     LINUX
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    False Rejection Rate (FRR)
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   = 0.1%
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     False Approval Rate (FAR)
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   = 0.001%
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     Relay Output
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   Lock Relay OutputAlarm Relay Output
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     Relay Input
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    Door Sensor
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    U-Disk Output
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    Yes
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     Push Button Input
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                      Yes
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    Communication Interface
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     RS485, RS232,TCP/IP
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    External Wiegand Port
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                  Yes, WG26/34 Output/Input
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    Power Supply
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   DC 12V,1A
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   Working Temperature
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   -15°C to 60°C
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    Casing
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    Aluminium Alloy
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    Dimension (L x W x H)
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   110mm x 20mm x 185mm
                  </td>
                </tr>
              </tbody>

        {/* 2  */}
               <tbody>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     User ID/ Face Capacity
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    10,000
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   Event Record Capacity
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   1,000,000
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     Access Mode
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     Dynamic Face Recognition, PINFace Recognition + PIN
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    Face Recognition Mode
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    1:1, 1:N
                  </td>
                </tr>
                 <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   Validation Display
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   Name & Number
                  </td>
                </tr>
                 <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    Real Time Face Detection
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     0.2sec
                  </td>
                </tr>
                 <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   Intelligent Function
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     Infrared Live Person Identification Detection
                  </td>
                </tr>
                 <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    Facial Scanning Range
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    Purely Dynamic Face Recognition: 0.5-3mInfrared Live movement detection: 0.5-1.5m
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   Dual Camera
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     ColorSense camera and IRSense camera
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     Dual Light
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    Smart LED light and infrared light
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     Display Screen
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    5 inch smart touch screen
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     Operating System
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     LINUX
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    False Rejection Rate (FRR)
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   = 0.1%
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     False Approval Rate (FAR)
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   = 0.001%
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     Relay Output
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   Lock Relay OutputAlarm Relay Output
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     Relay Input
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    Door Sensor
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    U-Disk Output
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    Yes
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     Push Button Input
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                      Yes
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    Communication Interface
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                     RS485, RS232,TCP/IP
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    External Wiegand Port
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                  Yes, WG26/34 Output/Input
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    Power Supply
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   DC 12V,1A
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   Working Temperature
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   -15°C to 60°C
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    Casing
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    Aluminium Alloy
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                    Dimension (L x W x H)
                  </td>
                  <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
                   110mm x 20mm x 185mm
                  </td>
                </tr>
              </tbody>
             
            </table>
          </section>

        {/* Tags */}
           <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="text-white border bg-[#ff5f31] px-2 py-1">MAG</p>
            <p className="text-white border bg-[#ff5f31] px-2 py-1">Access Control System</p>
           </div> 

          {/* Share Section */}
            <SocialShare title="Check out this product!" />
        </main>

        {/* Sidebar */}
        <aside className="lg:w-1/4 space-y-6">
         <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
            <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By MAG</h3>
           <ul className="space-y-4 text-gray-700 dark:text-gray-300">
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

export default FR300;