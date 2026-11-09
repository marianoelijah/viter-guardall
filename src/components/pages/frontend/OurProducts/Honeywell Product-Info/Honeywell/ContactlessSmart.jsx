import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const ContactlessSmart = () => {
  const productFeatures = [
    "Multi-technology card configurations and migrations",
    "Available in 2k-bit and 16k-bit sizes",
    "Program credentials in the factory or field",
    "Store biometric templates and protect privacy",
    "Customizable options: custom artwork, UV ink, surface or embedded hologram"
  ];

  // Helper for the complex 7-column table
  const models = [
    "OmniClass 2k & 16k Bits PVC Cards", "OmniClass + HID Prox Cards", 
    "OmniClass Embeddable", "OmniClass Embeddable +", 
    "OmniClass + Wiegand Cards", "OmniClass Key Fobs", "OmniClass Stickers"
  ];

  return (
    <>
      <Header />
      <div className="bg-gray-100 dark:bg-[#121214] min-h-screen font-sans text-slate-800 dark:text-gray-200 transition-colors duration-300">
        {/* Blue Header Banner */}
        <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-4 text-center transition-colors duration-300">
          <h1 className="text-5xl font-bold tracking-tight">
             OmniClass™ Credentials: <br/> 
             Contactless Smart Card
          </h1>
        </header>

        <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="lg:w-3/4 max-w-6xl mx-auto bg-gray-200 dark:bg-[#1e1e22] border border-transparent dark:border-gray-800 transition-colors shadow-lg p-8 md:p-12">
            <p className="text-[15px] leading-relaxed space-y-4 mb-6">
              A laminated PVC card that utilizes RFID technology and has an excellent contactless range. It is designed to work with OmniClass™ readers.
            </p>

            <section className="mb-8">
              <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Description:</h2>
              <p className="text-[15px] leading-relaxed space-y-4 mb-6">
                Honeywell OmniClass™ credentials are built on 13.56MHz technology, are RFID based, provide excellent contactless range (up to 4.5"), and are designed to work with OmniClass readers. It's available in card, key fobs, and sticker formats.
              </p>

              <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Features:</h2>
              <ul className="list-disc ml-5 text-[15px] space-y-1">
                {productFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            {/* Large Technical Specification Table */}
            <section className="mt-10 overflow-x-auto">
              <h2 className="bg-gray-300 dark:bg-[#1e1e22] p-2 rounded shadow-sm border border-gray-400 dark:border-gray-800 duration-300 font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Technical Specification:</h2>
              <table className="w-full border-collapse border border-gray-500 text-[11px]">
                <thead className="divide-y divide-gray-800 p-2.5 font-bold  tracking-widest text-gray-800 dark:text-blue-400 text-[13px] border-b border-gray-500 dark:border-gray-700">
                  <tr className="font-bold bg-gray-700 dark-gray-800">
                    <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[14px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                      Models
                    </th>
                    {models.map((m, i) => (
                      <th key={i} className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold text-[14px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 border">
                        {m}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-r border-black font-semibold text-[14px] uppercase text-gray-800 dark:text-gray-200 leading-normal">Dimensions</td>
                    <td className="border border-black p-2 text-[13px]" colSpan="4">2.125" W x 3.370" H x 0.030" T (5.4cm W x 8.6cm H x 0.076cm T)</td>
                    <td className="border border-black p-2 text-[13px]">2.125" W x 3.370" H x 0.037" T</td>
                    <td className="border border-black p-2 text-[13px]">1.25" W x 1.35" H</td>
                    <td className="border border-black p-2 text-[13px]">1.285" D x 0.070" T</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-r border-black font-semibold text-[14px] uppercase text-gray-800 dark:text-gray-200 leading-normal">Finish</td>
                    <td className="border border-black p-2 text-[13px]" colSpan="5">Gloss White</td>
                    <td className="border border-black p-2 text-[13px]">Black</td>
                    <td className="border border-black p-2 text-[13px]">White</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-r border-black font-semibold text-[14px] uppercase text-gray-800 dark:text-gray-200 leading-normal">Credential Construction</td>
                    <td className="border border-black p-2 text-[13px]" colSpan="7">Laminated PVC</td>
                  </tr>
                  <tr>
                    <td colSpan="8" className="p-2 border-r border-black font-semibold text-[14px] uppercase text-gray-800 dark:text-gray-200 leading-normal">Max Read Range^3</td>
                  </tr>
                  <tr>
                    <td colSpan="8" className="p-2 border-r border-black font-semibold text-[14px] uppercase text-gray-800 dark:text-gray-200 leading-normal">ISO Standards</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-r border-black font-semibold text-[14px] uppercase text-gray-800 dark:text-gray-200 leading-normal">ISO 7810</td>
                    <td className="border border-black p-2"></td>
                    <td className="border border-black p-2"></td>
                    <td className="border border-black p-2"></td>
                    {Array(4).fill("Yes").map((v, i) => (
                      <td key={i} className="border border-black p-2 text-[13px]">{v}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-2 border-r border-black font-semibold text-[14px] uppercase text-gray-800 dark:text-gray-200 leading-normal">ISO 7811-2,4,5</td>
                    {Array(7).fill("Yes").map((v, i) => (
                      <td key={i} className="border border-black p-2 text-[13px]">{v}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-2 border-r border-black font-semibold text-[14px] uppercase text-gray-800 dark:text-gray-200 leading-normal">ISO 7816-1,2</td>
                    {Array(7).fill("Yes").map((v, i) => (
                      <td key={i} className="border border-black p-2 text-[13px]">{v}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-2 border-r border-black font-semibold text-[14px] uppercase text-gray-800 dark:text-gray-200 leading-normal">ISO 10373-1</td>
                    {Array(7).fill("Yes").map((v, i) => (
                      <td key={i} className="border border-black p-2 text-[13px]">{v}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-2 border-r border-black font-semibold text-[14px] uppercase text-gray-800 dark:text-gray-200 leading-normal">ISO 14443B^4</td>
                    {Array(7).fill("Yes").map((v, i) => (
                      <td key={i} className="border border-black p-2 text-[13px]">{v}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-2 border-r border-black font-semibold text-[14px] uppercase text-gray-800 dark:text-gray-200 leading-normal">ISO 13693</td>
                    {Array(7).fill("Yes").map((v, i) => (
                      <td key={i} className="border border-black p-2 text-[13px]">{v}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-2 border-r border-black font-semibold text-[14px] uppercase text-gray-800 dark:text-gray-200 leading-normal">Operating Temperature</td>
                    <td className="border border-black p-2 text-[13px]" colSpan="7">-40° – 138°F (-40° – 70°C)</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-r border-black font-semibold text-[14px] uppercase text-gray-800 dark:text-gray-200 leading-normal">Operating Humidity</td>
                    <td className="border border-black p-2 text-[13px]" colSpan="7">5-95%, non-condensing</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-r border-black font-semibold text-[14px] uppercase text-gray-800 dark:text-gray-200 leading-normal">Warranty</td>
                    <td className="border border-black p-2 text-[13px]" colSpan="7">Limited lifetime warranty</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Footer Tags */}
            <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
              <p className="text-white border bg-[#ff5f31] px-2 py-1 rounded">Honeywell</p>
              <p className="text-white border bg-[#ff5f31] px-2 py-1 rounded">Cards</p>
              <p className="text-white border bg-[#ff5f31] px-2 py-1 rounded">Access Control System</p>
            </div> 

            {/* Share Section */}
            <SocialShare title="Check out this product!" />
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/4 space-y-6">
            <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded-xl shadow-sm  mb-6">
              <h3 className="font-bold text-black dark:text-blue-400 text-x mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">
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
                  <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>INR 413 256-Channel RAID Standalone</li>
                </NavLink>
                <NavLink to="/our-products/acti/channel-tower-strandalone" className='block'>
                  <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>GNR 340 100-Channel Tower NVR</li>
                </NavLink>
                <NavLink to="/our-products/acti/bay-raid-backmount-standalone" className='block'>
                  <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>INR 413 256-Channel RAID Standalone</li>
                </NavLink>
                <NavLink to="/our-products/acti/channel-tower-strandalone" className='block'>
                  <li className='cursor-pointer hover:text-[#ff5f31] transition-colors'>GNR 340 100-Channel Tower NVR</li>
                </NavLink>
              </ul>
            </div>

            {/* Perfected Matching CTA Card */}
            <div 
              className="relative min-h-[240px] overflow-hidden rounded-2xl p-8 text-white shadow-md bg-cover bg-center bg-blend-multiply bg-blue-900/85 px-6 py-8 flex items-center justify-center"
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
                  className="inline-block w-full rounded-xl bg-[#0f3e90] px-2 py-3 text-center text-xs font-semibold tracking-wider text-white transition-colors hover:bg-[#ff5f31] sm:w-auto"
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

export default ContactlessSmart;