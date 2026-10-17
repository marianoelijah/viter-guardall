import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const   GUCIAP12616F = () => {
  const productFeatures = [
    "",
    "",
    "",
    ""
  ];

  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
        {/* Blue Header Banner */}
        <header className="bg-[#8ba4ca] text-white py-12 px-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            
          </h1>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="lg:w-3/4 bg-gray-300 p-8 shadow-sm">
            <p className="text-[15px] text-black mb-6">
              
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
              <p className="text-[15px] text-black leading-relaxed mb-4">
                
              </p>

              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-[15px] text-black space-y-1">
                {productFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            {/* Technical Specifications Table */}
                <div className="bg-gray-300 p-6 shadow rounded border border-r divine-y">
            <h2 className="font-bold text-black text-xl mb-4">Technical Specification</h2>

            <table className="w-full border text-[15px] text-black border-black">
              <tbody>

            <tr>
              <td colSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                CAMERA
              </td>
            </tr>    
            
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Image Sensor
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                1/2.3” progressive Scan CMOS
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Resolution (MP)
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                 12 MP
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
               Video Resolution 
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                  4000 × 3000
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Sensitivity Colour
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                0.0001 Lux @ F1.6 (AGC ON)
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Sensitivity B/W
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                0 Lux LED IR on
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Shutter Speed
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                1/5 - 1/20000 s
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                White Balance
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                Auto, Manual
              </td>
            </tr>

            <tr>
              <td colSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                LENS
              </td>
            </tr>    
            
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Lens Focal Length
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                1.6 mm
              </td>
            </tr>
             <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                I-ris F-Number
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                F2.0
              </td>
            </tr>
             <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Lens Drive Type
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                Fixed Iris
              </td>
            </tr>
             <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
               Field of View :
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                360
              </td>
            </tr>
           

            <tr>
              <td colSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                ILLUMINATOR
              </td>
            </tr> 

            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Max. IR Distance
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                Up to 10 m
              </td>
            </tr>
            
             <tr>
              <td colSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                VIDEO
              </td>
            </tr> 

            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
               Col/B&W:
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                 Auto , Color , B&W, IR-cut filter removable (ICR)
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
               Wide Dynamic Range:
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                Digital WDR
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
               Image Enhancement:
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                BLC, 3D DNR, HLC
              </td>
            </tr>
             <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Image Settings
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                 Rotate mode, Saturation, Brightness, Contrast, Sharpness and white balance adjustable by client 
                 software or web browser
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                Day/Night Switch:
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                Support auto, scheduled, day, night
              </td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
               Privacy zones:
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                4 zones, rectangle
              </td>
            </tr>

            <tr>
              <td colSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                AUDIO
              </td>
            </tr> 

            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
               Audio Detection
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                 Detects unusual noises: dogs barking, babies crying, gunshots, sudden sound increase and decreas
              </td>
            </tr>
            

            <tr>
              <td colSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                GENERAL
              </td>
            </tr> 
            <tr>
              <td className="p-4 text-gray-600 align-middle border-b border-r border-black">
                DRI Range:
              </td>
              <td className="p-4 text-black border align-middle border-b border-black">
                Detection Range: 51.6 m
                Observe Range: 20.6 m 
                Recognition Range: 10.3 m
                Identification Range: 5.2 m
                The DORI (detect, observe, recognize, identify) distance gives the general idea of the camera 
                ability to distinguish persons or objects within its field of view. It is calculated based on the 
                camera sensor specification and the criteria given by EN 62676-4: 2015.
              </td>
            </tr>
           

              </tbody>
            </table>
            </div>


            {/* Footer Tags */}
            <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
              <p className="text-white border bg-[#ff5f31] px-2 py-1 rounded">Grundig</p>
              <p className="text-white border bg-[#ff5f31] px-2 py-1 rounded">CCTVs</p>
            </div> 

            {/* Share Section */}
            <SocialShare title="Check out this product!" />
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/4 space-y-6">
            <div className="bg-gray-300 p-6 rounded shadow-sm border border-gray-400">
              <h3 className="font-semibold text-xl mb-4 border-b border-black pb-2 ">More By GRUNDIG</h3>
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

            {/* Perfected Matching CTA Card */}
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

export default  GUCIAP12616F;