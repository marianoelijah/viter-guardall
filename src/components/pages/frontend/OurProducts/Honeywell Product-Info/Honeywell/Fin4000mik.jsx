import React from "react";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import { NavLink } from "react-router-dom";
import SocialShare from "../../Reusable/SocialShare";

const Fin4000mik = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* HEADER */}
      <div className="bg-[#7f95b8] py-16 text-center">
        <h1 className="text-5xl font-bold text-white tracking-wide leading-snug">
          HON-FIN4000MIK-100K: COMPACT <br />
          FINGERPRINT DEVICE
        </h1>
      </div>

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* WRAPPER */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SECTION */}
          <div className="lg:col-span-2 bg-gray-300 p-8 rounded shadow-sm">

            <p className="text-black text-[17px] mb-6">
              A standard fingerprint device with touch keypads and color LCD displays.
              It can accurately identify wet and dry fingerprints.
            </p>

            <h2 className="font-semibold text-black text-lg mb-3">
              Product Description:
            </h2>

            <p className="text-black text-[17px] leading-relaxed mb-6">
              Equipped with powerful hardware and industry-leading algorithms,
              Honeywell HON-FIN4000 Series standard fingerprint device –
              HON-FIN4000MIK-100K provides instant comparison and authentication
              with speed up to 150,000 fingerprints per second that greatly improves
              the system efficiency. The product supports multiple authentication
              to meet diverse customer requirements.
            </p>

            <h2 className="font-semibold text-black text-[17px] mb-3">
              Product Features:
            </h2>

            <ul className="list-disc pl-6 text-black space-y-2 mb-8">
              <li>2-inch color LCD display, full capacitive touch keypads</li>
              <li>1.2GHz quad-core CPU with large capacity memory</li>
              <li>High sensitivity optical sensor</li>
              <li>Advanced fingerprint recognition algorithm, max. 1:150,000 match/sec</li>
              <li>Fake finger detection (Rubber, paper, glue, clay)</li>
              <li>Programmable function keys</li>
              <li>Multiple authentication</li>
              <li>Versatile Interfaces: RS-485 / TTL / Relay / Wiegand</li>
              <li>TCP/IP network connect</li>
              <li>16bit Hi-Fi</li>
            </ul>

            {/* TECHNICAL SPECIFICATION */}
            <h2 className="font-semibold text-black text-lg mb-4">
              Technical Specification:
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-black text-xl">
                <tbody className="divide-y divide-gray-300">
                  {[
                    ["Model", "HON-FIN4000MIK-100K"],
                    ["CPU", "1.2G Quad Core"],
                    ["Memory", "2GB Flash + 256 MB RAM"],
                    ["Fingerprint Sensor", "Optical Sensor"],
                    ["Matching Speed", "Max. 1:150,000 match/sec"],
                    ["Max. User", "100,000 (1 fingerprint per user)"],
                    ["Max. FP Template", "200,000 (Two templates per fingerprint)"],
                    ["Logs", "1,000,000 (text)"],
                    ["Live Fingerprint Detection (LFD)", "Supported"],
                    ["RF Option", "EM/HID_Prox/Mifare/DesFire_EV1/iClass_SE/Seos"],
                    ["Authentication Modes", "Finger only, Card only, Finger+Card"],
                    ["Ethernet", "10/100 Mbps"],
                    ["RS-485", "OSDP Supported"],
                    ["Wiegand", "Supported"],
                    ["TTL", "2 ch input (for LED/Buzzer control)"],
                    ["Relay", "1 door relay"],
                    ["LED", "Multi-Color"],
                    ["Sound", "Multi-tone Buzzer"],
                    ["Tamper", "Supported"],
                    ["Power", "12V DC (Max.600mA)"],
                    ["Operating Temperature", "-20°C ~ 50°C"],
                    ["Operating Humidity", "0% ~ 80% (Non condensing)"],
                    ["Ingress Protection", "IP67"],
                    ["Dimensions (WxHxD)", "50 x 172 x 43.5 mm"],
                  ].map((row, index) => (
                    <tr key={index} className="border-t bg-gray-200 border-black border border-r text-[15px] ">
                      <td className="p-3 bg-gray-100 font-medium w-1/3 text-[17px] border-black border border-r">
                        {row[0]}
                      </td>
                      <td className="p-3 border-black border border-r">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* TAGS */}
            <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
              <p className="rounded text-white border bg-[#ff5f31] px-2 py-1">Honeywell</p>
              <p className="rounded text-white border bg-[#ff5f31] px-2 py-1">Access Control System</p>
            </div> 

            {/* SHARE SOCIAL */}
            <SocialShare title="Check out this product!" />
          </div>

          {/* RIGHT SIDEBAR SECTION */}
          <div className="space-y-6">

            {/* More By Honeywell Card */}
            <div className="bg-gray-300 p-6 rounded shadow-sm border border-gray-400">
              <h3 className="font-bold text-black text-xl mb-4 border-b border-black pb-2 uppercase">More By Honeywell</h3>
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

            {/* Cleaned & Balanced Reference CTA Card */}
            <div 
              className="relative min-h-[240px] overflow-hidden rounded-2xl p-8 text-white shadow-md bg-cover bg-center bg-blend-multiply bg-blue-900/85"
              style={{ backgroundImage: "url('/assets/image/Our%20Products/quickalert.jpg')" }}
            >
              <div className="relative z-10 max-w-3xl">
                <h3 className="mb-4 text-2xl font-semibold leading-tight tracking-wide">
                  Secure Your Peace Of Mind Today
                </h3>
                
                <p className="mb-6 text-sm md:text-base text-gray-200 font-medium leading-relaxed">
                  Contact Guard-All now for a customized security solution that protects what matters most.
                </p>

                <NavLink 
                  to="/contacts" 
                  className="inline-block w-full rounded-lg bg-[#1a4ca1] px-6 py-3 text-center text-sm font-semibold tracking-wider text-white transition-colors hover:bg-blue-800"
                >
                  CONTACT US TODAY
                </NavLink>
              </div>
            </div>

          </div> {/* Closes Sidebar */}

        </div> {/* Closes Wrapper Grid */}
      </div> {/* Closes Container */}

      <Footer />
    </div>
  );
};

export default Fin4000mik;