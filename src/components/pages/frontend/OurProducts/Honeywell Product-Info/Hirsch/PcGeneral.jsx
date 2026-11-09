import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';

const PcGeneral = () => {
  const productFeatures = [
    "Lifetime warranty with prompt, courteous, and fast customer service",
    "Meet or exceed existing card performance at lower cost",
    "Easily integrates with existing card populations",
    "Optional high-quality, four-color artwork for ISO/IEC 7816 and clamshell",
    "Available in PVC or long-life composite (60% PVC and 40% PET)",
    "Magnetic stripe HICO option, three ISO/ IEC 7811 tracks (default black), and/or combined with 13.56 MHz HF (e.g., MIFARE Classic or MIFARE DESFire), and/or 900 MHz UHF",
  ];

  // Helper to render table headers for the hardware sections
  const renderHardwareHeader = (models) => (
    <thead>
      <tr className="bg-gray-100 dark:bg-gray-800 font-bold text-[10px] text-gray-800 dark:text-gray-200">
        <th className="border border-gray-500 dark:border-gray-700 p-2 text-left w-1/4"></th>
        {models.map((model, idx) => (
          <th key={idx} className="border border-gray-500 dark:border-gray-700 p-2 text-center">{model}</th>
        ))}
      </tr>
    </thead>
  );

  return (
    <>
      <Header />
      <div className="bg-slate-50 dark:bg-[#121214] min-h-screen font-sans text-slate-900 dark:text-gray-200 transition-colors duration-300">
        {/* Blue Header Banner */}
        <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-6 text-center shadow-inner transition-colors duration-300">
          <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
            uTrust Proximity Credentials (General)
          </h1>
        </header>

        {/* Main Content Layout */}
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-12">

          {/* Main Content */}
          <main className="lg:col-span-9 bg-gray-200 dark:bg-[#1e1e22] p-8 rounded shadow-sm border border-transparent dark:border-gray-800 transition-colors duration-300">
            <p className="text-[17px] text-gray-800 dark:text-gray-300 mb-8 border-l-4 border-[#8ba4cc] dark:border-blue-500 pl-4 font-medium">
              A series of cost-effective contactless credentials that come in various formats such as key fob, smart card, and wristband. 
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-3 text-black dark:text-blue-400 transition-colors">Product Description:</h2>
              <div className="text-[17px] leading-relaxed text-slate-700 dark:text-gray-300">
                <p>
                  From enterprise to government, Identiv’s uTrust Proximity Credentials enable access for employees, temporary workers, and visitors. These generic credentials (available in credit card format, key fobs, wristbands, and round stickers) boast consistent read range and reliability and offer universal compatibility with today’s most popular brands, making integration a simple process.
                </p>
              </div>

              <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors mt-6">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] text-gray-800 dark:text-gray-300 space-y-1 mb-8">
                {productFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-4 uppercase transition-colors">Technical Specification:</h2>

            {/* 1. uTrust TS Mullion Reader Specifications */}
            <div className="border border-gray-500 dark:border-gray-700 rounded-sm overflow-hidden">
              <table className="w-full text-[11px] text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800 font-bold">
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-left w-1/4"></th>
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-200">Clamshell</th>
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-200">ISO Card with Mag StripeOption</th>
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-200">Key Fob</th>
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-200">Round Sticker</th>
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-200">Round Tag On Metal Sticker</th>
                    <th className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-200">Wristband</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Dimensions
                    </td>
                    <td colSpan="1" className="border border-gray-500 dark:border-gray-700 p-2 text-[15px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      3.385 x 2.125 x0.075 in(86 x 54 x 1.9 mm)
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[15px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      3.37 x 2.125 x0.033 in(85.6 x 54 x 0.84 mm)
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[15px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      2.18 x 1.23 x0.32 in(55.4 x 31.2 x 8.13 mm)
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[15px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      Diameter:1.278 in (32.5 mm)
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[15px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      Diameter:1.58 in (40 mm)
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[15px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      Semi circle top head:25mm (0.98 in) / 50mmlong (1.97 in)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Weight
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      0.317 oz (8.9 g)
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      0.212 oz (6 g)
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      0.15 oz (4.3 g)
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      0.045 oz (1.28 g)
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      0.06 (1.8g)
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      0.388 oz (11 g)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Read Range
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      Up to 5 in(127 mm)
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      Up to 2.5 in(63.5 mm)
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      Up to 2 in(50.8 mm)
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      Up to 2.4 in(61 mm)
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      Up to 2.5 in(63.5 mm)
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Slot Punch
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      Vertical
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      Vertical or Horizontal
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      Keyhole Ring
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      None
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      None
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      None
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 font-bold bg-gray-100 dark:bg-gray-800 text-[17px] text-gray-800 dark:text-gray-200">
                      OperatingTemperature
                    </td>
                    <td colSpan="5" className="border border-gray-500 dark:border-gray-700 p-2 text-[15px] text-gray-700 dark:text-gray-300 bg-white dark:bg-[#1e1e22]">
                      -49 ̊ to 158 ̊ F(-45 ̊ to 70 ̊ C)
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      -22 ̊ to 428 ̊ F(-30 ̊ to 220 ̊ C)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Material
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      Hard Shell:ABS Cover Label: PVC
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      PVC or Composite
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      ABS Plastic
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      PVC/Adhesive backing
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      PVC / Ferrite /Adhesive backing
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      Silicone
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      IdentivPart Numbers
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      4000
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      4010 (PVC)4020 (Composite)4030 (PVC mag stripe)4032 (Composite magstripe)
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      4082
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      4090
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      40-042-TOM-LF-STICK-001
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      70mm (2.76 in) wristdiameter:• 4096:White – No logo• 4096-BLACK-001:Black – No logo55mm (2.17 in) wristdiameter:• 4098:White – No logo• 4098-BLACK-001:Black – No logo
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      IdentivPart Numbersfor Kantech
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      4000XSF
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      4010XSF, 4020XSF,4030XSF, 4032XSF
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      4082XSF
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      4090XSF
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      By request
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      70mm (2.76 in) wristdiameter:• 4096XSF:White – No logo• 4096XSF-BLACK-001: Black – No logo55mm (2.17 in) wristdiameter:• 4098XSF:White – No logo
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      HID®Part Number
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      1326
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      1386/1586
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      1346
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      1391
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      N/A
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      N/A
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-200 font-bold bg-gray-50 dark:bg-gray-800/80">
                      Schlage /Allegion
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      7410
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      7510
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      7610
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      7710
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      N/A
                    </td>
                    <td className="border border-gray-500 dark:border-gray-700 p-2 text-[17px] text-gray-800 dark:text-gray-300 text-center bg-white dark:bg-[#1e1e22]">
                      N/A
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tags */}
            <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
              <p className="text-white border-0 bg-[#ff5f31] px-2 py-1 rounded shadow-sm font-medium text-sm">Hirsch</p>
              <p className="text-white border-0 bg-[#ff5f31] px-2 py-1 rounded shadow-sm font-medium text-sm">Access Control System</p>
            </div> 

            {/* Share Section */}
            <SocialShare title="Check out this product!" />
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
              <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By HIRSCH</h3>
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

export default PcGeneral;