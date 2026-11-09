import React from "react";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import { NavLink } from "react-router-dom";
import SocialShare from "@/components/pages/frontend/OurProducts/Reusable/SocialShare";


const Fin4000ac = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 dark:bg-[#1e1e22]  min-h-screen font-sans text-slate-800 dark:text-gray-200 transition-colors duration-300">

        {/* HEADER */}
        <div className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-4 text-center transition-colors duration-300">
          <h1 className="text-5xl font-bold text-white tracking-wide uppercase">
            HON-FIN4000AC-100K: COMPACT <br />
            FINGERPRINT DEVICE
          </h1>
        </div>

        {/* CONTAINER */}
        <div className="max-w-5xl mx-auto px-6 py-12">

          {/* WRAPPER */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 dark:bg-[#1e1e22] border border-transparent dark:border-gray-800 transition-colors shadow-lg">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-2 max-w-6xl mx-auto bg-gray-200 dark:bg-[#1e1e22] border border-transparent dark:border-gray-800 transition-colors shadow-lg  p-8 md:p-12">

              <p className="text-[17px] leading-relaxed space-y-4 mb-6">
                A slender, compact fingerprint device that can provide a high level of
                security for your property and can effectively identify fake fingerprints.
              </p>

              <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
                Product Description:
              </h2>
              <p className="text-[17px] leading-relaxed space-y-4 mb-6">
                Equipped with advanced fingerprint recognition technology and top
                hardware configuration, Honeywell HON-FIN4000 Series compact
                fingerprint device provides class-leading performance and high
                security level of protection.
              </p>

              <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
                Product Features:
              </h2>
              <ul className="list-disc ml-5 text-[17px] space-y-1">
                <li>Slender and compact design. Brushed Metal Panel.</li>
                <li>1.2GHz quad-core CPU with large capacity memory</li>
                <li>High sensitivity optical sensor</li>
                <li>Advanced fingerprint recognition algorithm</li>
                <li>Fake finger detection (Rubber, paper, glue, clay)</li>
                <li>Multi-card identification</li>
                <li>RS-485 / TTL / Relay / Wiegand</li>
                <li>IP67 Protection</li>
              </ul>

              {/* TECHNICAL SPECIFICATION TABLE */}
              <h2 className="font-bold text-xl mb-4 text-black dark:text-blue-400 uppercase transition-colors mt-5">
                Technical Specification:
              </h2>

              <div className="border border-gray-500 dark:border-gray-700 rounded-sm overflow-x-auto mb-8">
                <table className="w-full text-[15px] text-left border-collapse">
                  <tbody className="divide-y divide-gray-800 p-2.5 font-bold  tracking-widest text-gray-800 dark:text-blue-400 text-[17px] border-b border-gray-500 dark:border-gray-700">
                    {[
                      ["Model", "HON-FIN4000AC-100K"],
                      ["CPU", "1.2G Quad Core"],
                      ["Memory", "2GB Flash + 256MB RAM"],
                      ["Fingerprint Sensor", "Optical Sensor"],
                      ["Matching Speed", "Max. 1:150,000 match/sec"],
                      ["Max. User", "100,000"],
                      ["Max. FP Template", "200,000"],
                      ["Logs", "1,000,000"],
                      ["Ethernet", "10/100 Mbps"],
                      ["RS-485", "OSDP Supported"],
                      ["Wiegand", "Supported"],
                      ["Relay", "1 door relay"],
                      ["LED", "Multi-Color"],
                      ["Sound", "Multi-tone Buzzer"],
                      ["Tamper", "Supported"],
                      ["Power", "12V DC (Max.600mA)"],
                      ["Operating Temp", "-20°C ~ 50°C"],
                      ["Operating Humidity", "0% ~ 80%"],
                      ["Ingress Protection", "IP67"],
                      ["Dimensions", "50 x 172 x 43.5 mm"],
                    ].map((row, index) => (
                      <tr key={index} className="bg-gray-300 dark:bg-gray-800 font-bold text-black dark:text-blue-600">
                        <td className="p-3 font-medium bg-gray-50 w-1/3 text-[17px]">
                          {row[0]}
                        </td>
                        <td className="p-3">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* TAGS */}
              <div className="mt-8 flex gap-3 mb-5">
                <span className="rounded text-white bg-[#ff5f31]  px-2 py-1 font-bold">
                  Honeywell
                </span>
                <span className="rounded text-white bg-[#ff5f31] px-2 py-1 font-bold">
                  Access Control
                </span>
              </div>

              <hr className="border-gray-400 my-6" />

              {/* 2. DYNAMIC SOCIAL SHARE COMPONENT */}
              <SocialShare title="Check out this product!" />

            </div>

            {/* RIGHT SIDEBAR */}
            <div className="space-y-6">
                {/* MORE BY SECTION */}
              <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded-xl shadow-sm  mb-6">
                <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">
                  More By HONEYWELL
                </h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
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

              {/* CTA Card */}
            <div 
              className="relative min-h-[240px] overflow-hidden rounded-2xl p-8 text-white shadow-md bg-cover bg-center bg-blend-multiply bg-blue-900/85 mr-5"
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
                  className="inline-block w-full rounded-xl bg-[#0f3e90] px-2 py-3 text-center text-sm font-semibold tracking-wider text-white transition-colors hover:bg-[#ff5f31] sm:w-auto"
                >
                  CONTACT US TODAY
                </NavLink>
              </div>
            </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Fin4000ac;