import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';

const AR837EF = () => {
  const specs = [
    { label: "Model", value: "AR837EF" },
    { label: "Card user", value: "16,000 card users" },
    { label: "Event memory", value: "32,000" },
    { label: "Time zone", value: "63" },
    { label: "Holiday per year", value: "120" },
    { label: "Door group", value: "255" },
    { label: "Anti-passback", value: "YES (Local anti-passback)" },
    { label: "Alarm function", value: "Door sensor input for force entrance and door open too long" },
    { label: "Duress function", value: "4 duress code pin number" },
    { label: "LCD screen for AR837EF only", value: "Graphical big LCD 128 x 64 (4 line message, 16 character per line)" },
    { label: "External weigand port", value: "Yes, WG26/WG34" },
    { label: "Push button input", value: "YES" },
    { label: "Access mode Pin only for AR837EF", value: "Fingerprint only* Card only/ Card or PIN/ Card + PIN" },
    { label: "Fingerprint sensor", value: "Optical sensor OS" },
    { label: "1:1000 identification time", value: "700 msec" },
    { label: "FRR", value: "0.01%" },
    { label: "Fingerprint module CPU", value: "400 MHz DSP" },
    { label: "Image size", value: "384 Bytes" },
    { label: "Fingerprint capacity", value: "9,000 templates (each user 2 templates)" },
    { label: "Sensor size (mm)", value: "63 (L) x 43 (W) x 10(H)" },
    { label: "Encryption", value: "256 bit AES (fingerprint data protection)" },
    { label: "Card reading range", value: "EM 5-8cm & Mirfare 2-5cm" },
    { label: "Relay output", value: "1 x Door relay output1 x Alarm relay output" },
    { label: "Door unlock travel time interval", value: "Toggle, 0.1 – 600 sec" },
    { label: "Alarm relay timer", value: "Toggle, 0.1 – 600 sec" },
    { label: "Communication interface", value: "RS485 & TCPIP" },
    { label: "Serial port", value: "RS485, 9600, N, 8, 1" },
    { label: "Ethernet TCPIP", value: "10/100M Base T" },
    { label: "Power Consumption", value: "10 to 18VDC, Less than 5W" },
    { label: "Operating temperature", value: "	0°C to 50°Cc" },
    { label: "AR837EF dimension & weight", value: "128 x 147 x 65mm (LxWxH), 520g" },
    { label: "AR8371EF dimension & weight", value: "151 x 81 x 73mm (LxWxH), 330g" },
  ];

  const productFeatures = [
    "Text display on the LCD welcome screen can be programmed to display company names.",
    "LCD display employee name (user 0-4999) when flash card",
    "Built in 1 relay output for automation -activated according to duty time or pre-set weekly schedule.",
    "Support more accurate duty based time attendance function",
    "Ability to set expiry date for users",
    "Assignable user range for multiple master card. Master card is used to as a alternative method to enter editing mode incase user forgot the password",
    "Auto display current duty name according to the pre-set duty start time",
    "Powerful access control function with fingerprint anti-passback",
  ];

  return (
    <>
    <Header />
     <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          AR837EF Direct TCPIP Fingerprint with LCD & Keypad Panel
        </h1>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-lg my-10 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Left Column: Product Info */}
          <div className="lg:col-span-3">
            <p className="text-gray-800 text-[17px] mb-6">
             A contemporary door access that has a manual keypad, LCD panel, and fingerprint biometric access. 
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-gray-800 text-[17px] leading-relaxed">
              High performance fingerprint reader built in LCD screen and keypad, support 125Khz 
              & 13.56Mhz. RS485 & TCPIP interface. 0.8 sec identification time. 16K card users. 
              32K event memory. 9000 fingerprint (2 fingers per user).
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
                  {/* <thead>
                    <tr className="bg-gray-200">
                      <th colSpan="2" className="p-2 border-b border-gray-500 font-bold text-[15px] text-black uppercase tracking-wider">PHYSICAL</th>
                    </tr>
                  </thead> */}
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
              <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
                MAG
              </span>
              
              <span className="bg-red-500 text-white text-sm px-4 py-2 rounded">
                Access Control System
              </span>
            </div>

            {/* SHARE SECTION */}
            <div className="mt-8">
              <p className="font-medium text-black mb-3">Share:</p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/facebook.png" alt="Facebook" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/gmail.png" alt="Gmail" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/telegram.png" alt="Telegram" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/src/assets/image/social-logo/viber.png" alt="Viber" className="w-full h-full object-contain p-1" />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
            <h3 className="text-xl font-bold text-black mb-4 border-b pb-1">More By MAG</h3>
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
              <button className="bg-blue-700 hover:bg-blue-400 text-white font-semibold px-4 py-2 rounded w-full">
                <NavLink to="/contacts" className="w-full h-full block">
                CONTACT US TODAY
                </NavLink>
              </button>
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

export default AR837EF;