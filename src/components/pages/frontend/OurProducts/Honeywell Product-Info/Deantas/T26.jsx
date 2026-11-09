import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';

const T26 = () => {
  const productData = {
    title: "T26E",
    subtitle: "For Broken Bridge Aluminium Door",
    description: "The Deantas T26E is a super-slim smart lock designed specifically for broken bridge aluminium doors and other narrow profiles frames",
    features: [
      "Super-Slim Design",
      "Mocha Gold & Matt Black Panel Options",
      "Flat Right-Angle Handle",
      "Expressive Color Combinations"
    ],
  };

  return (
    <>
      <Header />
      <div className="bg-gray-100 dark:bg-[#121214] min-h-screen font-sans text-slate-800 dark:text-gray-200 transition-colors duration-300">
        {/* Banner Header */}
        <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-4 text-center transition-colors duration-300">
          <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
            {productData.title}
          </h1>
        </header>

        {/* Content Container */}
        <main className="max-w-6xl mx-auto bg-gray-200 dark:bg-[#1e1e22] shadow-xl my-10 p-6 md:p-12 rounded-xl border border-transparent dark:border-gray-800 transition-colors duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Main Product Info */}
            <div className="lg:col-span-3">
              <p className="text-lg text-black dark:text-gray-300 mb-6 font-medium transition-colors">
                {productData.subtitle}
              </p>

              <section className="mb-8">
                <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
                  Product Description:
                </h2>
                <p className="text-lg text-black dark:text-gray-300 leading-relaxed whitespace-pre-line transition-colors">
                  {productData.description}
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">
                  Product Features:
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 list-disc text-black dark:text-gray-300 ml-5 text-[15px] transition-colors">
                  {productData.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </section>

              {/* Technical Specifications Table */}
              <div className="bg-gray-300 dark:bg-gray-800/80 p-6 shadow rounded border border-gray-400 dark:border-gray-700 transition-colors">
                <h2 className="font-semibold text-black dark:text-blue-400 text-xl mb-4 transition-colors">
                  Technical Specification
                </h2>

                <table className="border border-black dark:border-gray-700 text-[15px] w-full mb-10 text-black dark:text-gray-200">
                  <tbody>
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2 w-1/2">
                        Static Current
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        20μA
                      </td>
                    </tr> 
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2">
                        Dynamic Current
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        150mA
                      </td>
                    </tr>
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2">
                        Storage Temperature
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        -25--+70°C
                      </td>
                    </tr>
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2">
                        Storage Humidity
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        10 -- 98%RH
                      </td>
                    </tr> 
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2">
                        Operation Temperature
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        -20 -- +70°C
                      </td>
                    </tr>
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2">
                        Operation Humidity
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        15 -- 95%RH
                      </td>
                    </tr> 
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2">
                        Swiping Range
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        0--5cm
                      </td>
                    </tr> 
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2">
                        Swiping Time
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        0.1s
                      </td>
                    </tr> 
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2">
                        Sensing Method
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        RFID Contact-less Swipe
                      </td>
                    </tr> 
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2">
                        Door Opening Time
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        Swipe, press and hold handle to open, locks immediately after releasing. Locks also in 3-5s if no pressing.
                      </td>
                    </tr> 
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2">
                        Chip
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        Mifare-1 Chip. With 2^32 (two to the power of 32) numbers of password combinations. Secure and reliable. Enable one-card-pass functionality.
                      </td>
                    </tr> 
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2">
                        Power Source
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        Four AA batteries are sufficient for more than 15,000 times of unlocking. When voltage is below 4.7V the lock will give sound and light warning after every swipe, and it is still fully functional for 100 unlocks.
                      </td>
                    </tr> 
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2">
                        Opening Log
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        Can records the latest 900 card-swipe unlock
                      </td>
                    </tr> 
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2">
                        Mechanical Key
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        Spare mechanical Key as the back-up. Can be made as master key
                      </td>
                    </tr> 
                  </tbody>
                </table>

                <table className="border border-black dark:border-gray-700 text-[15px] w-full text-black dark:text-gray-200">
                  <tbody>
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="6" className="border border-black dark:border-gray-700 p-2 text-blue-900 dark:text-blue-400">
                        Standard Configuration Specifications：
                      </td>
                    </tr> 
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2 w-1/2">
                        Processing Techniques
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        The lock panels adopts aluminum alloy integral casting process combined with Poly Carbonate material, which makes panels durable and anti-breaking.
                      </td>
                    </tr>
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2">
                        Surface Treatment
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        Lock panels are enhanced by powder coating to give it features of wear & corrosion-resistant. Which results in a long usage life.
                      </td>
                    </tr>
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2">
                        Motor
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        Door lock specialized motor with reduction gearbox mechanism. Bringing high torque output, fast reaction, stable transmission and long usage life.
                      </td>
                    </tr> 
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2">
                        Handle Structure
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        Anti-Violence and pressure resistant structure, robust and durable
                      </td>
                    </tr>
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2">
                        Lock Body
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        International Standard 3585 lock body.
                      </td>
                    </tr> 
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2">
                        Panel Material 
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        Aluminium
                      </td>
                    </tr> 
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2">
                        Handle Material & Color
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        Aluminium. Same color as panels.
                      </td>
                    </tr> 
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2">
                        Battery Box Material
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        Black plastic
                      </td>
                    </tr> 
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2">
                        Reader Panel Material
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        Wear-resistant tempered glass. Black color.
                      </td>
                    </tr> 
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2">
                        Key Cylinder
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        Standard Mortise Lock
                      </td>
                    </tr> 
                    <tr className="bg-gray-300 dark:bg-gray-800 font-bold">
                      <td colSpan="1" className="border border-black dark:border-gray-700 p-2">
                        Door Thickness
                      </td>
                      <td colSpan="5" className="border border-black dark:border-gray-700 p-2 font-normal dark:font-medium">
                        35 - 70 mm. Can be customized for other thicknesses.
                      </td>
                    </tr> 
                  </tbody>
                </table>
              </div>
                 
              {/* Footer Tags & Socials */}
              <div className="flex flex-wrap gap-3 mb-8 mt-10">
                <span className="bg-[#ff5f31] text-white px-2 py-1 rounded shadow-sm">
                  DEANTAS
                </span>
              </div>

              {/* SHARE SECTION */}
              <SocialShare title="Check out this product!" />
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              <div className="bg-gray-300 dark:bg-gray-800/80 p-4 border border-black dark:border-gray-700 rounded-lg shadow-sm transition-colors duration-300">
                <h3 className="text-xl font-semibold text-black dark:text-blue-400 mb-4 border-b border-gray-400 dark:border-gray-700 pb-1 transition-colors">
                  More By DEANTAS
                </h3>
                <ul className="space-y-4 text-gray-800 dark:text-gray-300">
                  <NavLink to="/our-products/onity/directkey-with-serene" className="block">
                    <li className="cursor-pointer hover:text-[#ff5f31] dark:hover:text-[#ff5f31] transition-colors break-words">Onity DirectKey with Serene</li>
                  </NavLink>
                  <NavLink to="/our-products/detnov/addressable-sounder" className="block">
                    <li className="cursor-pointer hover:text-[#ff5f31] dark:hover:text-[#ff5f31] transition-colors break-words">MAD-401 and MAD-402 Series Modules</li>
                  </NavLink>
                  <NavLink to="/our-products/acti/bay-raid-backmount-standalone" className="block">
                    <li className="cursor-pointer hover:text-[#ff5f31] dark:hover:text-[#ff5f31] transition-colors break-words">INR 415 256-Channel RAID Standalone</li>
                  </NavLink>
                  <NavLink to="/our-products/acti/channel-tower-strandalone" className="block">
                    <li className="cursor-pointer hover:text-[#ff5f31] dark:hover:text-[#ff5f31] transition-colors break-words">GNR 340 100-Channel Tower NVR</li>
                  </NavLink>
                </ul>
              </div>

              {/* Blue CTA Card */}
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
                    className="inline-block w-full rounded-xl bg-[#0f3e90] dark:bg-blue-600 px-2 py-3 text-center text-sm font-semibold tracking-wider text-white transition-colors hover:bg-[#ff5f31] dark:hover:bg-[#ff5f31] sm:w-auto"
                  >
                    CONTACT US TODAY
                  </NavLink>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default T26;