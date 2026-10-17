import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const   ND9442P = () => {
  const productFeatures = [
    "Smart VCA Camera Supported for Event Search",
    "802.3at/af PoE with PoE Management",
    "RAID 0, 1, 5 Supported to Prevent Recording Loss",
    "Cyber Protection via Trend Micro IoT Security",
    "Manage with VORTEX and VAST Security Station"
  ];

  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
        {/* Blue Header Banner */}
        <header className="bg-[#8ba4ca] text-white py-12 px-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            ND9442P
          </h1>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="lg:w-3/4 bg-gray-300 p-8 shadow-sm">
            <p className="text-[15px] text-black mb-6">
               Core+ AI H.265 16-CH Embedded PoE NVR
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
              <p className="text-[15px] text-black leading-relaxed mb-4">
                The VIVOTEK ND9442P (V Series) is a Core+ AI H.265 16-channel embedded PoE Network Video Recorder designed for high-security enterprise surveillance. It supports Smart VCA camera integration for intelligent event search and efficient video management. Equipped with built-in 802.3at/af PoE ports and intelligent PoE management, it simplifies camera installation and power monitoring. To ensure maximum data redundancy and prevent recording loss, it supports RAID 0, 1, and 5 storage configurations. Additionally, it provides enhanced cybersecurity powered by Trend Micro IoT Security and seamlessly integrates with VORTEX and VAST Security Station (VSS) for centralized system management.
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
            <h2 className="font-bold text-black text-xl mb-4">Product Specification</h2>

            <table className="w-full border text-[15px] text-black border-black">
              <tbody>

            {/* TECHNICAL SPECIFICATIONS */}
            <tr>
              <td colSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                TECHNICAL SPECIFICATIONS
              </td>
            </tr> 

             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Descriptions
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                16-CH Embedded PoE NVR
              </td>
            </tr>
            

            {/* DEVICE */}
            <tr>
              <td colSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                DEVICE
              </td>
            </tr>   

            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                OS
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Embedded Linux
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Watchdog
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">              
                Hardware + Software
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Power Restoration
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                
                System Restart Automatically after Power Recovery
              </td>
            </tr>

            {/* DISPLAY */}
            <tr>
              <td colSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                DISPLAY
              </td>
            </tr>  

            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                LiveView Display
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                16 Channels
                Multi Layout Display:
                1x1, 1M+5, 1M+12, 1P+3, 1P+6, 2x2, 2P+3, 3x3, 3V, 4x4
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Video Output
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                HDMI x1, VGA x1
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Display Resolution
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                3840x2160, 1920x1080, 1280x720
              </td>
            </tr> 
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Dual Monitor
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                Supported
              </td>
            </tr> 
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Stream Application
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Constant\Auto Adaptive Stream
              </td>
            </tr> 
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Fisheye Dewarp
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Local: 1O, 1P, 1R, 1O3R, 1O8R, 1P3R
                Web: 1O, 1R, 1P
              </td>
            </tr> 
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                  PTZ Operation
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Direction Control, Home, Iris, Preset, Patrol (Group)
              </td>
            </tr>
             
              {/* VIDEO */}
            <tr>
              <td ColSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                VIDEO
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Video Format
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                MJPEG, H.264, H.265
              </td>
            </tr>
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Graphic Decoder
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Hardware decoding
              </td>
            </tr>
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                 Decoding Resolution
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Up to 7680x2560
              </td>
            </tr>
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                 Decoding Capability
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                 H.265/H.264:
                 3840x2160 @ 90 fps
                 1920x1080 @ 360 fps
              </td>
            </tr>

             {/* AUDIO */}
             <tr>
              <td ColSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                AUDIO
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Audio Format
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                G.711, G.726, MPEG-2 AAC-LC
              </td>
            </tr>
          
            {/*  RECORD */}
            <tr>
              <td ColSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                RECORD
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Recording Time (sec.)
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Pre-Record: 5 (Max. 10)
                Post-Record: 20 (Max. 300)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Recording Stream
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Dual
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Recording Throughput
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                
                192 Mbps
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Recording Mode
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                Continuous, Schedule, Manual, Event, Activity Adaptive Streaming
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Recording Setting
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                Recycle (unit: Day)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Watermark
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                Supported
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Seamless Recording
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                Supported
              </td>
            </tr>

            {/*  STORAGE & BACKUP */}
            <tr>
              <td ColSpan={5} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                 STORAGE & BACKUP
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Disk Devices
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                Internal x4 (3.5")
                (HDD is purchased separately)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                HDD Max. Capacity
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                Please refer to HDD supported list on VIVOTEK website
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                RAID
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                              
               RAID 0, 1, 5
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Disk Management
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                Create, Format and Remove Disk
                HDD S.M.A.R.T
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               External Storage 
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                USB Storage (USB 3.0)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Video Clip Export
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                USB pen drive (FAT Format)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Schedule Backup
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                FTP
              </td>
            </tr>

             {/* PLAYBACK */}
            <tr>
              <td ColSpan={5} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                PLAYBACK
              </td>
            </tr>
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Plackback Display
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                4 Channels
                Multi Layout Display: 1x1, 2x2, 1P+3, 3V
              </td>
            </tr>
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Playback Control
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
               Regular (Play, Pause, Stop), Rewind, Next / Previous Frame, Speed Control, Calendar, Event, Timeline, Timeline Scale, Thumbnail (Storyboard)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Video Search
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
               Calendar
               Date/Time
               Alarm
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Thumbnail Explorer (Storyboard)
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                Listing the thumbnail of recorded video (Max. 2 CH)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Snapshot
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
               JPEG
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Video Clip Export
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
               EXE
              </td>
            </tr>

            {/* NETWORK */}
            <tr>
              <td ColSpan={5} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               NETWORK
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Ethernet
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
               10/100/1000Mbps Ethernet (RJ-45) x2
              </td>
            </tr>
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Network Throughtput in total
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                              
                224 Mbps
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               PoE
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
               802.3at/af compliant PoE ports x16
               (Total Max. 200W)
               DO NOT suggest connecting any non-PD device with this NVR PoE port in order to avoid potential risk.
              </td>
            </tr>
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               PoE Management
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                              
                Supported
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Protocols
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
               IPv4, IPv6, TCP/IP, HTTP, HTTPS, UPnP, RTSP/RTP/RTCP, SMTP, FTP, DHCP, NTP, DNS, DDNS
              </td>
            </tr>
            
             {/*  EXTERNAL INTERFACE */}
            <tr>
              <td ColSpan={5} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               EXTERNAL INTERFACE
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               USB
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                              
                Front: 2 (USB 2.0)
                Back: 1 (USB 3.0)
              </td>
            </tr>
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Alarm In
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                              
                x16 (max. 30VDC)
              </td>
            </tr>
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Alarm Out
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                              
                x8 (DO: max. 1A/30VDC)
              </td>
            </tr>
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Audio In
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                              
                3.5 mm Phone Jack Audio Input x1 (HW available, FW feature not supported yet)
              </td>
            </tr>
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Audio Out
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                              
                3.5 mm Phone Jack Audio Output x1
              </td>
            </tr>
              <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               RS485
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                              
                1 (HW available, FW feature not supported yet)
              </td>
            </tr>

            {/*  GENERAL */}
            <tr>
              <td ColSpan={5} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                GENERAL
              </td>
            </tr>

            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Power Input
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                            
                100-240V AC, 50/60Hz
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Power Consumption
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                Max. 300 W
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Dimensions
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
               421 (D) x 432 (W) x 66 (H) mm
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Weight
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
               4.6 kg
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Operating Temperature
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                -10°C ~ 55°C (14°F ~ 131°F)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Humidity
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                0 ~ 95%
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Safety Certifications
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                             
                CE, LVD, FCC, VCCI, C-Tick, UL, CB, BSMI, BIS
              </td>
            </tr>
            
              </tbody>
            </table>
          </div>


            {/* Footer Tags */}
            <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
              <p className="text-white border bg-[#ff5f31] px-2 py-1 rounded">Vivotek</p>
              <p className="text-white border bg-[#ff5f31] px-2 py-1 rounded">CCTVs</p>
              
            </div> 

            {/* Share Section */}
            <SocialShare title="Check out this product!" />
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/4 space-y-6">
            <div className="bg-gray-300 p-6 rounded shadow-sm border border-gray-400">
              <h3 className="font-semibold text-xl mb-4 border-b border-black pb-2 ">More By VIVOTEK</h3>
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

export default  ND9442P;