import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';



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
     <div className="bg-gray-100 dark:bg-[#121214] min-h-screen font-sans text-slate-800 dark:text-gray-200 transition-colors duration-300">
      {/* Header Banner */}
      <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-4 text-center transition-colors duration-300">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          AR837EF Direct TCPIP Fingerprint with LCD & Keypad Panel
        </h1>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 dark:bg-[#1e1e22] border border-transparent dark:border-gray-800 transition-colors shadow-lg my-10 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Left Column: Product Info */}
          <div className="lg:col-span-3">
            <p className="text-[17px] text-gray-800 dark:text-gray-300 mb-8 border-l-4 border-[#8ba4cc] dark:border-blue-500 pl-4 font-medium">
             A contemporary door access that has a manual keypad, LCD panel, and fingerprint biometric access. 
            </p>

            <section className="mb-8">
              <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold dark:text-blue-400 transition-colorsfont-bold text-xl mb-2 text-black">Product Description:</h2>
              <p className="text-[17px] text-gray-800 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              High performance fingerprint reader built in LCD screen and keypad, support 125Khz 
              & 13.56Mhz. RS485 & TCPIP interface. 0.8 sec identification time. 16K card users. 
              32K event memory. 9000 fingerprint (2 fingers per user).
              </p>

               <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl mb-3 text-black dark:text-blue-400 transition-colors">Product Features:</h2>
            <ul className="list-disc pl-6 text-gray-800 dark:text-gray-300 text-[17px] space-y-1 mb-8">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            </section>


            {/* Technical Specifications Table */}
            <section>
              <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-4 transition-colors">Technical Specification:</h2>
              <div className="border border-gray-500 dark:border-gray-700 overflow-hidden rounded-sm">
                <table className="w-full border border-gray-800 text-gray-800 divine-x border-r text-[17px]">
                  
                  <tbody className="divide-y divide-gray-800 p-2.5 font-bold  tracking-widest text-gray-800 dark:text-blue-400 text-[17px] border-b border-gray-500 dark:border-gray-700">
                    {specs.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-500' : 'bg-gray-00'}>
                        <td className="p-2 border-r border-black font-semibold text-[17px] uppercase text-gray-800 dark:text-gray-200 leading-normal">
                          {spec.label}
                        </td>
                        <td className="p-2 border-r border-black font-semibold text-[17px] text-gray-800 dark:text-gray-200 leading-normal">
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
          </div>
        </div>
      </main>
    </div>
    <Footer />
    </>
   
  );
};

export default AR837EF;