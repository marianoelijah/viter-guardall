import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';
import { NavLink } from 'react-router-dom';


const Mifare = () => {
  const productFeatures = [
    "Up to 10 years data retention capability",
    "Up to 10 cm operating distance",
    "106kbit baud rate",
    "Built-in random number generator",
    "Supports Mifare Classic Security",
    "In-built purse functionality (value block format)",
    "2 models available: Mifare 1 Standard 1K S50 and Mifare 1 Standard 4K S70"
  ];

  return (
    <>
    <Header />
     <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      {/* Blue Header Banner */}
      <header className="bg-[#8ba4ca] text-white py-12 px-4 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          MF-01 Mifare Proximity Cards
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <main className="lg:w-3/4 bg-gray-300 p-8 shadow-sm">
          <p className="text-[15px] leading-relaxed text-black  mb-6">
            A contactless access control fit for student and employee IDs. It also helps in attendance management with Honeywell’s Mifare® technology.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
            <p className="text-[15px] text-black leading-relaxed mb-6">
              Powered by Honeywell’s patented Mifare® technology, these cards offer contactless access control up to a read range of 10 cm. An operating frequency of 13.56MHz provides high speed, reliable communications and excellent access integrity to ensure exceptional security for any facility.
            </p>

            <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[15px] space-y-1 text-black">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          {/* Technical Specifications Table */}
          <section className="mt-10 overflow-x-auto">
            <h2 className="font-bold text-xl text-black mb-4">Technical Specification:</h2>
            <table className="w-full border-collapse border border-black text-[15px]">
              <thead>
                <tr className="bg-gray-100 uppercase font-bold text-xl">
                  <th colSpan="2" className="border border-black p-2 text-left"></th>
                  <th className="border border-black p-2 text-left text-black">MODEL</th>
                </tr>
                <tr className="bg-gray-100 font-bold">
                  <th colSpan="2" className="border border-black p-2 text-left"></th>
                  <th className="border border-black p-2 text-left text-black">MF - 01</th>
                  <th className="border border-black p-2 text-left text-black">MF - 02</th>
                </tr>
                <tr className="bg-gray-100 font-bold">
                  <th colSpan="2" className="border border-black p-2 text-left"></th>
                  <th className="border border-black p-2 text-left text-black">Mifare 1 Standard 1K S50</th>
                  <th className="border border-black p-2 text-left text-black">Mifare 1 Standard 4K S70</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="2" className="border border-black p-2 font-bold bg-gray-100 text-black">Card Dimensions</td>
                  <td className="border border-black p-2">85 x 54 x 0.8mm</td>
                  <td className="border border-black p-2">85 x 54 x 0.8mm</td>
                </tr>

                {/* Memory Section */}
                <tr>
                  <td rowSpan="4" className="border border-black p-2 font-bold bg-gray-100 align-top text-black">Memory</td>
                  <td className="border border-black p-2 bg-gray-100">EEPROM size</td>
                  <td className="border border-black p-2">1024 byte</td>
                  <td className="border border-black p-2">4096 byte</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 bg-gray-100">Write Endurance</td>
                  <td className="border border-black p-2">100,000 cycles</td>
                  <td className="border border-black p-2">100,000 cycles</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 bg-gray-100">Data Retention</td>
                  <td className="border border-black p-2">10 years</td>
                  <td className="border border-black p-2">10 years</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 bg-gray-100">Organization</td>
                  <td className="border border-black p-2">16 sectors at 64 byte each</td>
                  <td className="border border-black p-2">16 sectors at 64 byte each and 8 sectors at 256 bytes each</td>
                </tr>

                {/* RF Interface Section */}
                <tr>
                  <td rowSpan="4" className="border border-black p-2 font-bold bg-gray-100 align-top text-black">RF Interface</td>
                  <td className="border border-black p-2 bg-gray-100">Frequency</td>
                  <td className="border border-black p-2">13.56MHz</td>
                  <td className="border border-black p-2">13.56MHz</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 bg-gray-100">Baud Rate</td>
                  <td className="border border-black p-2">106kbit</td>
                  <td className="border border-black p-2">106kbit</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 bg-gray-100">Operating Distance</td>
                  <td className="border border-black p-2">Up to 10cm</td>
                  <td className="border border-black p-2">Up to 10cm</td>
                </tr>
                <tr>
                   <td className="border border-black p-2 bg-gray-100">According to 1443A</td>
                   <td className="border border-black p-2">Yes - up to layer 3</td>
                   <td className="border border-black p-2">Yes - up to layer 3</td>
                </tr>

                {/* Security */}
                <tr>
                  <td rowSpan="4" className="border border-black p-2 font-bold bg-gray-100 align-top text-black">Unique Serial Number</td>
                  <td className="border border-black p-2 bg-gray-100">Random Number Generator</td>
                  <td className="border border-black p-2">Yes</td>
                  <td className="border border-black p-2">Yes</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 bg-gray-100">Access Keys</td>
                  <td className="border border-black p-2">2 Keys per sector</td>
                  <td className="border border-black p-2">2 Keys per sector</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 bg-gray-100">Access Conditions</td>
                  <td className="border border-black p-2">Per sector</td>
                  <td className="border border-black p-2">Per sector</td>
                </tr>
                <tr>
                   <td className="border border-black p-2 bg-gray-100">Mifare Classic Security</td>
                   <td className="border border-black p-2">supported</td>
                   <td className="border border-black p-2">supported</td>
                </tr>

                {/* Special Interface */}
                <tr>
                  <td rowSpan="4" className="border border-black p-2 font-bold bg-gray-100 align-top text-black">Special Interface</td>
                  <td className="border border-black p-2 bg-gray-100">Purse Factionality</td>
                  <td className="border border-black p-2">Value block format</td>
                  <td className="border border-black p-2">Value block format</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 bg-gray-100">Second Transport Transaction</td>
                  <td className="border border-black p-2">512 byte read</td>
                  <td className="border border-black p-2">512 byte read</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 bg-gray-100"></td>
                  <td className="border border-black p-2">16 by wire</td>
                  <td className="border border-black p-2">16 by wire</td>
                </tr>
                <tr>
                   <td className="border border-black p-2 bg-gray-100">Transaction Time [ms]</td>
                   <td className="border border-black p-2">164</td>
                   <td className="border border-black p-2">164</td>
                </tr>

              </tbody>
            </table>
          </section>

          {/* Tags */}
           <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="text-white border bg-[#ff5f31] px-2 rounded">Honeywell</p>
            <p className="text-white border bg-[#ff5f31] px-2 rounded">Cards</p>
            <p className="text-white border bg-[#ff5f31] px-2 rounded">Access Control System</p>
           </div> 

          {/* Share Section */}
           <SocialShare title="Check out this product!" />
        </main>

        {/* Sidebar */}
        <aside className="lg:w-1/4 space-y-6">

           <div className="bg-gray-300 p-6 rounded shadow-sm border border-gray-400">
                <h3 className="font-bold text-black text-xl mb-4 border-b border-black pb-2">More By HONEYWELL</h3>
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

export default Mifare;