import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';



// Shared Layout Component to maintain design consistency across all products
const ProductLayout = ({ title, subtitle, description, features, specs, sidebarItems }) => {
  return (
    <>
    <Header />
    <div className="bg-gray-200 dark:bg-[#121214] min-h-screen font-sans text-[#333] dark:text-gray-200 transition-colors duration-300">
      {/* Banner Header */}
      <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-6 text-center transition-colors duration-300">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          {title}
        </h1>
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto shadow-xl my-10 p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Product Info */}
          <div className="lg:col-span-3 bg-gray-100 dark:bg-[#1e1e22] p-6 md:p-8 rounded-xl border border-transparent dark:border-gray-800 shadow-md transition-colors duration-300">
            <p className="text-[15px] text-gray-680 leading-relaxed whitespace-pre-line mb-5">{subtitle}</p>

            <section className="mb-8">
              <h2 className="font-semibold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Description:</h2>
              <p className="text-[17px] text-gray-680 leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-semibold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] text-gray-680 space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>

             {/* Technical Specifications Table */}
        <div className="p-6 shadow rounded border border-r divine-y">
            <h2 className="font-semibold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Technical Specification</h2>

            <table className="w-full border text-[15px] text-black">
              <tbody>
                <tr>
                  <td colSpan="5" className="border border-black p-2 text-[15px] text-black font-semibold bg-gray-100 text-center">
                    CAMERA
                  </td>
                </tr>
               
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Image Sensor
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   [Panoramic channel] 1/2.5″ Progressive Scan CMOS[PTZ channel] 1/2.8″ Progressive Scan CMOS
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   Min. Illumination
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    [PTZ channel] Color: 0.005 Lux @ (F1.5, AGC ON), B/W: 0.001 Lux @ (F1.5, AGC ON), 0 lux with IR[Panoramic channel] Color: 0.0005 Lux @ (F1.0, AGC ON), 0 Lux with Light
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Shutter Speed
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   1 s to 1/30,000 s
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   Slow Shutter
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   Yes
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   HLC
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   Yes
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                  3D DNR
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   Yes
                  </td>
                </tr>
                 <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Day & Night
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    IR cut filter
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   White Balance
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   auto,ATW,sodium lamp,fluorescent lamp,indoor,outdoor,MWB,Locked WB
                  </td>
                </tr>
                 <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   Zoom
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   32 × optical,16 × digital
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   Max. Resolution
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   [Panoramic channel] 3632 × 1632[PTZ channel] 2560 × 1440
                  </td>
                </tr>

                <tr>
                  <td colSpan="5" className="border border-black p-2 text-[15px] text-black font-semibold bg-gray-100 text-center">
                    LENS
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    FOV
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    [Panoramic channel] horizontal field of view: 180°±10°, vertical field of view: 80°±5°[PTZ channel] horizontal field of view: 60.2° to 2.3°
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   Focus
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Auto,semi-auto,manual
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Zoom Speed
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    [Panoramic channel] No[PTZ channel] approx. 5.6 s
                  </td>
                </tr>
                 <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   Focal Length
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    [Panoramic channel] 2.8 mm[PTZ channel] 5.9 to 188.8 mm
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Aperture
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    [Panoramic channel] F1.0[PTZ channel] Max. F1.5
                  </td>
                </tr>

                <tr>
                  <td colSpan="5" className="border border-black p-2 text-[15px] text-black font-semibold bg-gray-100 text-center">
                     ILLUMINATOR
                  </td>
                </tr>

                 
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    White Light Distance
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Panoramic channel: 30 m
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Supplement Light Range
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    IR distance: up to 200 m
                  </td>
                </tr>

                <tr>
                  <td colSpan="5" className="border border-black p-2 text-[15px] text-black font-semibold bg-gray-100 text-center">
                     PTZ
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Movement Range (Pan)
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    360°
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Movement Range (Tilt)
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    –15° to 90°
                  </td>
                </tr>
                 <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Pan Speed
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Pan speed: configurable from 0.1° to 160°/s, preset speed: 240°/s
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Tilt Speed
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Tilt speed: configurable from 0.1° to 120°/s, preset speed 200°/s
                  </td>
                </tr>
                 <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Proportional Pan
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Yes
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Presets
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    300
                  </td>
                </tr>
                  <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Patrol Scan
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    8 patrols, up to 32 presets for each patrol
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Pattern Scan
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    4 pattern scans, record time over minutes for each scan
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   Power-off Memory
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Yes
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Park Action
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Preset,pattern scan,patrol scan,auto scan,tilt scan,random scan,frame scan,panorama scan
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                  3D Positioning
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Yes
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   PTZ Status Display
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Yes
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   Preset Freezing
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Yes
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   Scheduled Task
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Preset,pattern scan,patrol scan,auto scan,tilt scan,random scan,frame scan,panorama scan,dome reboot,aux output,dome adjust
                  </td>
                </tr>
                
              </tbody>
            </table>

            <table className="w-full border text-[15px] text-black mt-10 ">
              <tbody>
                <tr>
                  <td colSpan="5" className="border border-black p-2 text-[15px] text-black font-semibold bg-gray-100 text-center">
                     VIDEO
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 w-1/2">
                    Stream Type
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    main stream,sub-stream,third stream
                  </td>
                </tr>
                 <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 w-1/2">
                    Main Stream
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   [PTZ channel] 50 Hz: 25 fps (2560 × 1440, 1920 × 1080, 1280 × 960, 1280 × 720), 60 Hz: 30 fps (2560 × 1440, 1920 × 1080, 1280 × 960, 1280 × 720)[Panoramic channel] 50 Hz: 25 fps (3632 × 1632, 3680 × 1656), 60 Hz: 30 fps (3632 × 1632, 3680 × 1656)
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 w-1/2">
                   Sub-Stream
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   [PTZ channel] 50 Hz: 25 fps (704 × 576, 640 × 480, 352 × 288), 60 Hz: 30 fps (704 × 480, 640 × 480, 352 × 240)[Panoramic channel] 50 Hz: 25 fps (1200 × 536, 960 × 432), 60 Hz: 30 fps (1200 × 536, 960 × 432)
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 w-1/2">
                    Third Stream
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   [PTZ channel] 50 Hz: 25 fps (1920 × 1080, 1280 × 960, 1280 × 720, 704 × 576, 640 × 480, 352 × 288), 60 Hz: 30 fps (1920 × 1080, 1280 × 960, 1280 × 720, 704 × 480, 640 × 480, 352 × 240)[Panoramic channel] No
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 w-1/2">
                    Video Compression
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   ​​Main stream: H.265+/H.265/H.264+/H.264,Sub-stream: H.265/H.264/MJPEG,Third stream: H.265/H.264/MJPEG
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 w-1/2">
                    Video Bitrate
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    32 Kbps to 16384 Mbps
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 w-1/2">
                    H.264 Type
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Baseline Profile/Main Profile/High Profile
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 w-1/2">
                    H.265 Type
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Main profile
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 w-1/2">
                    Scalable Video Coding (SVC)
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Yes
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80 w-1/2">
                    Region of Interest (ROI)
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    fixed region
                  </td>
                </tr>


                <tr>
                  <td colSpan="5" className="border border-black p-2 text-[15px] text-black font-semibold bg-gray-100 text-center">
                     AUDIO
                  </td>
                </tr>

                 <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Audio Compression
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    G.711,G.722.1,G.726,MP2L2,PCM,AAC-LC,MP3
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Audio Bit Rate
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     32 to 192 Kbps (MP2L2),16 to 64Kbps (AAC-LC),8 to 320 Kbps (MP3)
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Audio Sampling Rate
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     MP2L2: 16kHz, 32kHz, 48kHzAAC-LC: 16kHz, 32kHz, 48kHzPCM: 8kHz, 16kHz, 32kHz, 48kHzMP3: 8kHz, 16KHz, 32KHz, 48KHz
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Environment Noise Filtering
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     yes
                  </td>
                </tr>

                 <tr>
                  <td colSpan="5" className="border border-black p-2 text-[15px] text-black font-semibold bg-gray-100 text-center">
                    SMART FEATURES
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Smart Record
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     ANR (Automatic Network Replenishment), Dual-VCA
                  </td>
                </tr>

                <tr>
                  <td colSpan="5" className="border border-black p-2 text-[15px] text-black font-semibold bg-gray-100 text-center">
                    NETWORK
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Network Storage
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     NAS (NFS, SMB/CIFS), auto network replenishment (ANR)
                  </td>
                </tr>
                 <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Protocols
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    TCP/IP,ICMP,HTTP,HTTPS,FTP,DHCP,DNS,DDNS,RTP
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     API
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    ISUP,SDK,ISAPI,ONVIF (Profile S, Profile G, Profile T)
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Simultaneous Live View
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     20
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   User/Host
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   32
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Security
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Password protection,HTTPS encryption,802.1X authentication (EAP-TLS, EAP-LEAP, EAP-MD5),host authentication (MAC address),IP address filter
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Client
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    iVMS-4200, Hik-Connect, Hik-Central
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Web Browser
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    IE 11+, Chrome 57+, Firefox 52+, Safari 12+, Edge 79.0.309.65+
                  </td>
                </tr>

                <tr>
                  <td colSpan="5" className="border border-black p-2 text-[15px] text-black font-semibold bg-gray-100 text-center">
                     IMAGE
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Wide Dynamic Range (WDR)
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    [Panoramic channel] Digital WDR[PTZ channel] 120 dB
                  </td>
                </tr>
                 <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Day/Night Switch
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Day,night,auto,schedule
                  </td>
                </tr>
                 <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Image Enhancement
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    BLC,HLC,3D DNR
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Defog
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    yes
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Image Stabilization
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    yes
                  </td>
                </tr>
                 <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Regional Exposure
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    yes
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Regional Focus
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     yes
                  </td>
                </tr>
                 <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Image Settings
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    saturation, brightness, contrast, sharpness
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Image Parameters Switch
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     yes
                  </td>
                </tr>
                 <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Privacy Mask
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     24 programmable polygon privacy masks, mask color or mosaic configurable
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     SNR
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     52dB
                  </td>
                </tr>

                <tr>
                  <td colSpan="5" className="border border-black p-2 text-[15px] text-black font-semibold bg-gray-100 text-center">
                     INTERFACE
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Ethernet Interface
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     1 RJ45 10M/100M self-adaptive Ethernet port
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     On-Board Storage
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Built-in memory card slot, support Micro SD/Micro SDHC/Micro SDXC, up to 512 GB
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Alarm
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     2 input(s), 1 output(s)
                  </td>
                </tr>
                 <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Reset
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Yes
                  </td>
                </tr>
                 <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                   Audio
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     1 input (line in), max. input amplitude: 2-2.4 vpp, input impedance: 1 KΩ ± 10%,1 output (line out), line level, output impedance: 600 Ω
                  </td>
                </tr>

                <tr>
                  <td colSpan="5" className="border border-black p-2 text-[15px] text-black font-semibold bg-gray-100 text-center">
                     EVENT
                  </td>
                </tr>

                 <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Basic Event
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Motion detection,video tampering alarm,alarm input and output,exception (network disconnected, IP address conflict, illegal login, HDD full, HDD error, abnormal restart)
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Smart Event
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Line crossing detection,intrusion detection,region entrance detection,region exiting detection,audio exception detection
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Linkage
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Upload to FTP/NAS/memory card,notify surveillance center,send email,trigger alarm output,trigger recording,and PTZ actions (such as preset, patrol scan, pattern scan),audible warning,white light flashing
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Smart Linkage
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     panorama linkage, tracking takeover, track in turn
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Smart Tracking
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Manual tracking,auto-tracking
                  </td>
                </tr>

                <tr>
                  <td colSpan="5" className="border border-black p-2 text-[15px] text-black font-semibold bg-gray-100 text-center">
                     DEEP LEARNING FUNCTION
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Face Capture
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Support detecting up to 5 faces at the same time. Support detecting, capturing, grading, selecting of face in motion, and output the best face picture of the face
                  </td>
                </tr>

                 <tr>
                  <td colSpan="5" className="border border-black p-2 text-[15px] text-black font-semibold bg-gray-100 text-center">
                    GENERAL
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Power
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     24 VAC, Max. 60 W, Hi-PoE
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Material
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     ADC12,Plastic,PC+10%GF
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     General Function
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     mirror,watermark,password protection,IP address filter)
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Operating Condition
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    -30 °C to 65 °C (-22 °F to 149 °F). Humidity 90% or less (non-condensing)
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Demist
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                    Yes
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Dimension
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Ø 222.3 mm × 387.2 mm (Ø 8.75″ × 15.2″)
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Weight
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Approx. 4.75 kg (10.47 lb.)
                  </td>
                </tr>

                <tr>
                  <td colSpan="5" className="border border-black p-2 text-[15px] text-black font-semibold bg-gray-100 text-center">
                     APPROVAL
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     Protection
                  </td>
                  <td colSpan="3" className="p-3 border-r border-gray-500 dark:border-gray-700 font-semibold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                     IIP66 (IEC 60529-2013)
                  </td>
                </tr>
              </tbody>
           </table>

        </div>
            

            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
                HIKVISION
              </span>
              
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
                CCTVs
              </span>
            </div>

               {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded-xl shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
            <h3 className="font-bold text-black dark:text-blue-400 text-xl mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By HIKVISION</h3>
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

            {/* Blue CTA Card */}
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
      </main>
    </div>
    <Footer />
    </>
    
  );
};

// Example Usage for the Hirsch M64 Controller
const DS2SE7C432MWG = () => {
  const data = {
    title: "DS-2SE7C432MWG-EB/26(F0) TandemVu 4MP 32 x Network PTZ Camera",
    subtitle: "A panoramic surveillance camera with 32x optical zoom and AcuSense technology.",
    description: "The TandemVu PTZ cameras feature Hikvision’s next-generation camera design, integrating multiple lenses in one security camera to provide big picture and small details in tandem. Equipped with this technology, Hikvision’s new TandemVu PTZ cameras display a broad view even when panning, tilting, or zooming. Users will see everything and miss nothing at any given moment, getting situational awareness from the moment they set up the camera.",
    features: [
      "Panoramic channel supports image stitching, with 180° horizontal field of view",
      "High quality imaging with 6 MP resolution in panoramic and channel and 4 MP resolution in PTZ channel",
      "Secures an expansive area with 32 × optical zoom and 16 × digital zoom",
      "AcuSense technology focuses on human and vehicle targets classification and supports face capture to detect, capture and select faces in motion",
      "Expansive night view with up to 200 m IR distance in PTZ channel and 30 m white light in panoramic channel",
      "Active strobe light and audio alarm to warn intruders off",
      "Smart-linkage between panoramic channel and PTZ channel"
    ],


    sidebarItems: [
      "Onity DirectKey with Serene",
      "MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs",
      "INR 415 256-Channel 12 Bay RAID Backmount Standalone",
      "GNR 340 100-Channel Tower Standalone",
      "ENR 130 16-Channel Desktop Standalone NVR- No HDD Included",
      "Z86 Outdoor Network Dome Camera with Night Vision"
    ]
  };

  return <ProductLayout {...data} />;
};

export default DS2SE7C432MWG;