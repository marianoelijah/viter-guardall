import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';

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
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      {/* Blue Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-4 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
           FR300 Face Recognition Reader
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
          <p className="text-[17px] leading-relaxed mb-6">
         A mid-level face recognition reader suitable for door access and pedestrian access.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
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
        
         {/* 1  */}
              <tbody>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     User ID/ Face Capacity
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    10,000
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                   Event Record Capacity
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                   1,000,000
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     Access Mode
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                     Dynamic Face Recognition, PINFace Recognition + PIN
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Face Recognition Mode
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    1:1, 1:N
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                   Validation Display
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                   Name & Number
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Real Time Face Detection
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                     0.2sec
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                   Intelligent Function
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                     Infrared Live Person Identification Detection
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Facial Scanning Range
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    Purely Dynamic Face Recognition: 0.5-3mInfrared Live movement detection: 0.5-1.5m
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                   Dual Camera
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                     ColorSense camera and IRSense camera
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     Dual Light
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    Smart LED light and infrared light
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     Display Screen
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    5 inch smart touch screen
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     Operating System
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                     LINUX
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    False Rejection Rate (FRR)
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                   = 0.1%
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     False Approval Rate (FAR)
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                   = 0.001%
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     Relay Output
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                   Lock Relay OutputAlarm Relay Output
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     Relay Input
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    Door Sensor
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    U-Disk Output
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    Yes
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     Push Button Input
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                      Yes
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Communication Interface
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                     RS485, RS232,TCP/IP
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    External Wiegand Port
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                  Yes, WG26/34 Output/Input
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Power Supply
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                   DC 12V,1A
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                   Working Temperature
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                   -15°C to 60°C
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Casing
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    Aluminium Alloy
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Dimension (L x W x H)
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                   110mm x 20mm x 185mm
                  </td>
                </tr>
              </tbody>

        {/* 2  */}
               <tbody>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     User ID/ Face Capacity
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    10,000
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                   Event Record Capacity
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                   1,000,000
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     Access Mode
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                     Dynamic Face Recognition, PINFace Recognition + PIN
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Face Recognition Mode
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    1:1, 1:N
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                   Validation Display
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                   Name & Number
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Real Time Face Detection
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                     0.2sec
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                   Intelligent Function
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                     Infrared Live Person Identification Detection
                  </td>
                </tr>
                 <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Facial Scanning Range
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    Purely Dynamic Face Recognition: 0.5-3mInfrared Live movement detection: 0.5-1.5m
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                   Dual Camera
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                     ColorSense camera and IRSense camera
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     Dual Light
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    Smart LED light and infrared light
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     Display Screen
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    5 inch smart touch screen
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     Operating System
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                     LINUX
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    False Rejection Rate (FRR)
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                   = 0.1%
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     False Approval Rate (FAR)
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                   = 0.001%
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     Relay Output
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                   Lock Relay OutputAlarm Relay Output
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     Relay Input
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    Door Sensor
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    U-Disk Output
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    Yes
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                     Push Button Input
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                      Yes
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Communication Interface
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                     RS485, RS232,TCP/IP
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    External Wiegand Port
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                  Yes, WG26/34 Output/Input
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Power Supply
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                   DC 12V,1A
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                   Working Temperature
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                   -15°C to 60°C
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Casing
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                    Aluminium Alloy
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-2 font-bold bg-gray-100 text-[17px]">
                    Dimension (L x W x H)
                  </td>
                  <td className="border border-gray-500 text-gray-700 text-[15px] p-2 break-all">
                   110mm x 20mm x 185mm
                  </td>
                </tr>
              </tbody>
             
            </table>
          </section>

        {/* Tags */}
           <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="text-white border bg-red-500 px-2 py-1">MAG</p>
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
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By MAG</h3>
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

export default FR300;