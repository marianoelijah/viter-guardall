import React from "react";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import { NavLink } from "react-router-dom";
import SocialShare from "@/components/pages/frontend/OurProducts/Reusable/SocialShare";



const Fin4000ac = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100">

        {/* HEADER */}
        <div className="bg-[#7f95b8] py-16 text-center mb-5">
          <h1 className="text-5xl font-bold text-white tracking-wide uppercase">
            HON-FIN4000AC-100K: COMPACT <br />
            FINGERPRINT DEVICE
          </h1>
        </div>

        {/* CONTAINER */}
        <div className="max-w-7xl mx-auto px-6 py-12">

          {/* WRAPPER */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-2 bg-gray-300 p-8 rounded shadow-sm">

              <p className="text-[15px] font-bold mb-6">
                A slender, compact fingerprint device that can provide a high level of
                security for your property and can effectively identify fake fingerprints.
              </p>

              <h2 className="font-semibold text-black text-lg mb-3 uppercase">Product Description:</h2>
              <p className="text-black mb-6 leading-relaxed">
                Equipped with advanced fingerprint recognition technology and top
                hardware configuration, Honeywell HON-FIN4000 Series compact
                fingerprint device provides class-leading performance and high
                security level of protection.
              </p>

              <h2 className="font-semibold text-black text-lg mb-3 uppercase">Product Features:</h2>
              <ul className="list-disc pl-6 text-black space-y-2 mb-8">
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
              <h2 className="font-semibold text-black text-lg mb-4 uppercase">Technical Specification:</h2>

              <div className="overflow-x-auto">
                <table className="w-full border bg-gray-200 text-black border-black">
                  <tbody className="divide-y divide-gray-300 border border-black">
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
                      <tr key={index} className="border-t border-gray-300 text-[15px]">
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
                <span className="rounded text-white bg-[#ff5f31]  px-2 py-1 font-bold">Honeywell</span>
                <span className="rounded text-white bg-[#ff5f31] px-2 py-1 font-bold">Access Control</span>
              </div>

              <hr className="border-gray-400 my-6" />

              {/* 2. DYNAMIC SOCIAL SHARE COMPONENT */}
              <SocialShare title="Check out this product!" />

            </div>

            {/* RIGHT SIDEBAR */}
            <div className="space-y-6">
                {/* MORE BY SECTION */}
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

              {/* CTA Card */}
<div 
  className="relative min-h-[240px] overflow-hidden rounded-2xl p-8 text-white shadow-md bg-cover bg-center bg-blend-multiply bg-blue-900/85"
  style={{ backgroundImage: "url('/dist/assets/image/Our Products/quickalert.jpg')" }}
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Fin4000ac;