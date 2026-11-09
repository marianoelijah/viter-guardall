import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';

const HfKeyFob = () => {
  const productFeatures = [
    "Frequency: 13.56 MHz",
    "Chip: NXP MIFARE DESFire EV2 or EV3",
    "International Standards: ISO/IEC 14443 Type A",
    "Applicable to: Physical access, NFC, Games and toys, Electronics, Pharma and healthcare"
  ];

  return (
    <>
      <Header />
      <div className="bg-gray-100 dark:bg-[#121214] min-h-screen font-sans text-gray-800 dark:text-gray-200 transition-colors duration-300">
        {/* Blue Header Banner */}
        <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-12 px-4 text-center transition-colors duration-300">
          <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
            uTrust HF Key Fob
          </h1>
        </header>

        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <main className="lg:w-3/4 bg-gray-200 dark:bg-[#1e1e22] p-8 shadow-sm rounded-sm border border-transparent dark:border-gray-800 transition-colors duration-300">
            <p className="text-[17px] leading-relaxed mb-6 text-gray-800 dark:text-gray-300 font-medium">
              An easy-to-bring physical access commonly used for gym facilities.
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
                Product Description:
              </h2>
              <div className="text-[17px] leading-relaxed space-y-4 mb-6 text-gray-800 dark:text-gray-300">
                <p>
                  Packed with the same technology as Identiv’s proximity and high-frequency (HF) card credentials, uTrust HF Keyfobs match the security of traditional access control cards but with the convenience of a keyfob. No more lost or forgotten cards and the compact size does not add bulk or weight.
                </p>
                <p>
                  uTrust HF Keyfobs are manufactured with high-strength, durable plastics for long-term performance in the harshest environments. The versatility and long-life contribute to a cost-effective access or identification solution. These keyfobs are the ideal complement to traditional key cards.
                </p>
              </div>

              <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
                Product Features:
              </h2>
              <ul className="list-disc ml-5 text-[17px] text-gray-800 dark:text-gray-300 space-y-1">
                {productFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            {/* Technical Specifications Table */}
            <section className="mt-10 overflow-x-auto">
              <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-4 transition-colors">
                Technical Specification:
              </h2>
              <table className="w-full border-collapse border border-gray-500 dark:border-gray-700 text-[11px]">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800 uppercase font-bold text-[17px] text-black dark:text-gray-200">
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-left w-1/4"></th>
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-left">
                      DESFire EV2 4K
                    </th>
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-left">
                      DESFire EV3 4K
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 font-bold bg-gray-100 dark:bg-gray-800/80 text-[17px] text-black dark:text-gray-200">
                      Product Part Number
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[15px] p-2 break-all bg-white dark:bg-[#1e1e22]">
                      3642-BLUE
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[15px] p-2 break-all bg-white dark:bg-[#1e1e22]">
                      3842-BLUE
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 font-bold bg-gray-100 dark:bg-gray-800/80 text-[17px] text-black dark:text-gray-200">
                      IC
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[15px] p-2 break-all bg-white dark:bg-[#1e1e22]">
                      NXP MIFARE DESFire EV2
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[15px] p-2 break-all bg-white dark:bg-[#1e1e22]">
                      NXP MIFARE DESFire EV3
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 font-bold bg-gray-100 dark:bg-gray-800/80 text-[17px] text-black dark:text-gray-200">
                      User Memory
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[15px] p-2 break-all bg-white dark:bg-[#1e1e22]">
                      4 kB
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[15px] p-2 break-all bg-white dark:bg-[#1e1e22]">
                      4 kB
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 font-bold bg-gray-100 dark:bg-gray-800/80 text-[17px] text-black dark:text-gray-200">
                      Frequency
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[15px] p-2 break-all bg-white dark:bg-[#1e1e22]">
                      13.56 MHz
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[15px] p-2 break-all bg-white dark:bg-[#1e1e22]">
                      13.56 MHz
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 font-bold bg-gray-100 dark:bg-gray-800/80 text-[17px] text-black dark:text-gray-200">
                      ISO/IEC specification
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[15px] p-2 break-all bg-white dark:bg-[#1e1e22]">
                      14443A
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[15px] p-2 break-all bg-white dark:bg-[#1e1e22]">
                      14443A
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 font-bold bg-gray-100 dark:bg-gray-800/80 text-[17px] text-black dark:text-gray-200">
                      Read Range
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[15px] p-2 break-all bg-white dark:bg-[#1e1e22]">
                      Up to 2 in (50.8 mm)
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[15px] p-2 break-all bg-white dark:bg-[#1e1e22]">
                      Up to 2 in (50.8 mm)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 font-bold bg-gray-100 dark:bg-gray-800/80 text-[17px] text-black dark:text-gray-200">
                      Dimensions
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[15px] p-2 break-all bg-white dark:bg-[#1e1e22]">
                      1.77 x 1.18 x 0.09 in (45 x 30 x 2.2 mm)
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[15px] p-2 break-all bg-white dark:bg-[#1e1e22]">
                      1.77 x 1.18 x 0.09 in (45 x 30 x 2.2 mm)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 font-bold bg-gray-100 dark:bg-gray-800/80 text-[17px] text-black dark:text-gray-200">
                      Weight
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[15px] p-2 break-all bg-white dark:bg-[#1e1e22]">
                      0.12 oz (3.5 g)
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[15px] p-2 break-all bg-white dark:bg-[#1e1e22]">
                      0.12 oz (3.5 g)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 font-bold bg-gray-100 dark:bg-gray-800/80 text-[17px] text-black dark:text-gray-200">
                      Material
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[15px] p-2 break-all bg-white dark:bg-[#1e1e22]">
                      Polyamide 6
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[15px] p-2 break-all bg-white dark:bg-[#1e1e22]">
                      Polyamide 6
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 font-bold bg-gray-100 dark:bg-gray-800/80 text-[17px] text-black dark:text-gray-200">
                      Operating Temperature
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[15px] p-2 break-all bg-white dark:bg-[#1e1e22]">
                      -25°C ~ 85°C (-13°F ~ 185°F)
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[15px] p-2 break-all bg-white dark:bg-[#1e1e22]">
                      -25°C ~ 85°C (-13°F ~ 185°F)
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Tags */}
            <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
              <p className="text-white border-0 bg-[#ff5f31] px-2 py-1 rounded shadow-sm">Hirsch</p>
              <p className="text-white border-0 bg-[#ff5f31] px-2 py-1 rounded shadow-sm">Access Control System</p>
            </div> 

            {/* Share Section */}
            <SocialShare title="Check out this product!" />
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/4 space-y-6">
            <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
              <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">
                More By HIRSCH
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <NavLink to="/our-products/onity/directkey-with-serene" className="block">
                  <li className="cursor-pointer hover:text-[#ff5f31] dark:hover:text-[#ff5f31] transition-colors">Onity DirectKey with Serene</li>
                </NavLink>
                <NavLink to="/our-products/detnov/addressable-sounder" className="block">
                  <li className="cursor-pointer hover:text-[#ff5f31] dark:hover:text-[#ff5f31] transition-colors">MAD-401 and MAD-402 Series Modules</li>
                </NavLink>
                <NavLink to="/our-products/acti/bay-raid-backmount-standalone" className="block">
                  <li className="cursor-pointer hover:text-[#ff5f31] dark:hover:text-[#ff5f31] transition-colors">INR 415 256-Channel RAID Standalone</li>
                </NavLink>
                <NavLink to="/our-products/acti/channel-tower-strandalone" className="block">
                  <li className="cursor-pointer hover:text-[#ff5f31] dark:hover:text-[#ff5f31] transition-colors">GNR 340 100-Channel Tower NVR</li>
                </NavLink>
              </ul>
            </div>

            {/* Contact Card */}
            <div 
              className="relative min-h-[240px] overflow-hidden rounded-2xl p-8 text-white shadow-md bg-cover bg-center bg-blend-multiply bg-blue-900/85 dark:bg-blue-950/90"
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
                  className="inline-block w-full rounded-xl bg-[#0f3e90] dark:bg-blue-600 px-6 py-3 text-center text-sm font-semibold tracking-wider text-white transition-colors hover:bg-[#ff5f31] dark:hover:bg-[#ff5f31] sm:w-auto"
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

export default HfKeyFob;