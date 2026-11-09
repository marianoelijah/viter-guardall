import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';




const Optera = () => {
  const productFeatures = [
    "Constant, seamless situational awareness",
    "Zoom in for detail live or retrospectively with client-side dewarping",
    "Multiple immersive PTZ views at video management system (VMS)",
    "Up to 12 Megapixel (4 x 3 MPx) resolution for better detail at a distance",
    "Up to 30 frames per second (fps)",
    "Outstanding WDR and low-light performance at the same time",
    "Pelco H.264 Smart Compression Technology",
    "Eight Pelco video analytic behaviors",
    "Local storage (Micro SD)",
    "Pelco Camera Link",
    "ONVIF Profile S, Profile G, and Profile Q conformant",
    "Compatible with Pelco VideoXpert, VideoXpert Professional, Digital Sentry®, EnduraTM (In Tiled Mode), and third-party VMS partners",
    "Power over Ethernet Plus (PoE+)",
    "3-year warranty"
  ];

  // Helper to render table headers for the hardware sections
  const renderHardwareHeader = (models) => (
    <thead>
      <tr className="bg-gray-100 font-bold text-[10px]">
        <th className="border border-black p-2 text-left w-1/4"></th>
        {models.map((model, idx) => (
          <th key={idx} className="border border-black p-2 text-center">{model}</th>
        ))}
      </tr>
    </thead>
  );

  return (
    <>
    <Header />
    <div className="bg-gray-200 dark:bg-[#121214] min-h-screen font-sans text-[#333] dark:text-gray-200 transition-colors duration-300">
      {/* Blue Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-centerbg-[#7f95b8] dark:bg-blue-950/70 text-center transition-colors duration-300">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
             Optera IMM Series with SureVision 2.0
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <main className="lg:w-3/4 lg:col-span-8 bg-gray-100 dark:bg-[#1e1e22] p-6 md:p-8 rounded-xl border border-transparent dark:border-gray-800 shadow-md transition-colors duration-300">
          <p className="text-5xl md:text-[17px]  max-w-4xl mx-auto leading-tight mb-5">
           A panoramic surveillance camera that enables users to zoom in for detail and 
           provide a seamless viewing experience.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Description:</h2>
            <div className="text-5xl md:text-[17px]  max-w-4xl mx-auto leading-tight mb-5">
              <p>
              The OpteraTM IMM Series camera with SureVisionTM 2.0 provides a panomersive 
              experience with seamless situational awareness which provides stitched and 
              blended panoramic views. The IMM Series also enables you to zoom in for 
              detail within multiple intuitive immersive views from a video management 
              system (VMS). Other multi-imager solutions can be disjointed with separate 
              streams out of order. The IMM Series transparently integrates video across 
              all sensors in the camera, presenting a seamless user experience from setup 
              to viewing.
              </p>
            </div>

            <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1 mb-8">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          <h2 className="font-bold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Technical Specification:</h2>

          {/* 1. uTrust TS Mullion Reader Specifications */}
          <div className="mb-8">
             
             <table className="w-full border-collapse border border-black text-[10px]">
                <thead>
                   <tr className="bg-gray-300 font-bold">
                      {/* <th className="border border-black p-2 text-left w-1/4"></th> */}
                      <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Model Name
                      </th>
                      <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        OPTERA 360
                      </th>
                      <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        OPTERA 270
                      </th>
                      <th className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        OPTERA 180
                      </th>
                   </tr>
                </thead>
                <tbody>
                  <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                          Part Number
                      </td>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center">
                          IMM12036
                      </td>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center">
                          IMM12027
                      </td>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center">
                          IMM12018
                      </td>
                   </tr>
                    <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                         Lens Focal Length
                      </td>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center">
                          2.7mm, F/2.5
                      </td>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center">
                          2.7mm, F/2.5
                      </td>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center">
                          4.8 mm, F/2.0
                      </td>
                   </tr>
                   <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                         Horizontal Angle of View
                      </td>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center">
                          360°
                      </td>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center">
                          270°
                      </td>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center">
                          180°
                      </td>
                   </tr>
                   <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                        Vertical Angle of View
                      </td>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center">
                          73°
                      </td>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center">
                          73°
                      </td>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center">
                          41°
                      </td>
                   </tr>
                   <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                        Minimum Illumination(color / monochrome)
                      </td>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center">
                          0.3 lux (F/2.5) in color mode,0.2 lux (F/2.5) in monochrome
                      </td>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center">
                          0.3 lux (F/2.5) in color mode,0.2 lux (F/2.5) in monochrome
                      </td>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center">
                          0.2 lux (F/2.0) in color mode,0.14 lux (F/2.0) in monochrome
                      </td>
                   </tr>
                
                   <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                        Resolution (MP)
                      </td>
                      <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Up to 12MP
                      </td>
                   </tr>
                   <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                        Image Sensor
                      </td>
                      <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        1/3.2” progressive scan CMOS
                      </td>
                   </tr>
                   <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                        Pan
                      </td>
                      <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        360°, adjustable
                      </td>
                   </tr>
                   <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                         Tilt
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center">
                         N/A
                      </td>
                      <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center">
                         180°
                      </td>
                   </tr>
                    <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                         Max. Dynamic Range (dB)
                      </td>
                      <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center">
                         Up to 12.5 frames per second (fps) at full resolution or 30 fps at a reduced resolution
                      </td>
                   </tr>
                   <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                        Max. Image Rate (50 Hz / 60 Hz)
                      </td>
                      <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center">
                         Up to 12.5 frames per second (fps) at full resolution or 30 fps at a reduced resolution
                      </td>
                   </tr>
                   <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                        Environmental
                      </td>
                      <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center">
                         IK10 Impact Rating, IP66 and NEMA Type 4X on environmental models
                      </td>
                   </tr>
                    <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                          AUDIO, POWER, STORAGE
                      </td>
                      <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80"></td>
                   </tr>
                   <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                        Audio Compression Method
                      </td>
                      <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 text-center">
                        G.711 PCM 8 bit, 8 kHz mono at 64 kbit/s
                      </td>
                   </tr>
                   <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                        Audio Input/Output
                      </td>
                      <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        600 ohm differential, 1Vp-p max. signal level
                      </td>
                   </tr>
                   <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Audio Input/Output
                      </td>
                      <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Line level input and output
                      </td>
                   </tr>
                   <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                        Streaming
                      </td>
                      <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                         Bidirectional: full or half duplex
                      </td>
                   </tr>
                    <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                        PoE Power Source
                      </td>
                      <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                         PoE+: IEEE 802.3at, Class 4
                      </td>
                   </tr>
                    <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                        Onboard Storage
                      </td>
                      <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                         Micro SD, SDHC tested up to 128GB
                      </td>
                   </tr>
                   <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                          OPTERA CAMERA MOUNT OPTIONS
                      </td>
                      <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80"></td>
                   </tr>
                    <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                        2’ x 2’ drop ceiling panel; replaces 2’ x 2’ ceiling tile, white
                      </td>
                      <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        IMM-PNL
                      </td>
                   </tr>
                    <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                        Corner mount (outer) for use with WMVE-SR wall mount
                      </td>
                      <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        IMM-CM
                      </td>
                   </tr>
                    <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                        DF5 kit for existing indoor DF5 enclosures
                      </td>
                      <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        IMM-DF5
                      </td>
                   </tr>
                    <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                        Environmental vandal, pendant wall mount, gray
                      </td>
                      <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        WMVE-SR
                      </td>
                   </tr>
                    <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                       Indoor vandal, pendant wall mount, white/ black
                      </td>
                      <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        WMVE-WT/BK
                      </td>
                   </tr>
                   <tr>
                      <td className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 font-bold bg-gray-50 text-center">
                        Pole adapter for use with WMVE-SR wall mount
                      </td>
                      <td colSpan="4" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[17px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                         PA101
                      </td>
                   </tr>
                </tbody>
             </table>
          </div>

          {/* Tags */}
            <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="text-white border bg-[#FF5F31] px-2 py-1">PELCO</p>
            <p className="text-white border bg-[#FF5F31] px-2 py-1">CCTVs</p>
           </div> 

          {/* Share Section */}
           <SocialShare title="Check out this product!" />
        </main>

        {/* Sidebar */}
        <aside className="lg:w-1/4 space-y-6">
           <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded-xl shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
            <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By PELCO</h3>
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

        </aside>
      </div>
    </div>
    <Footer />
    </>
    
  );
};

export default Optera;