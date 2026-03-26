import React from 'react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';

// Shared Layout Component to maintain design consistency across all products
const ProductLayout = ({ title, subtitle, description, features, specs, sidebarItems }) => {
  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen font-sans text-slate-800">
      {/* Banner Header */}
      <header className="bg-[#7f95b8] text-white py-14 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight">
          {title}
        </h1>
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-200 shadow-xl my-10 p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Product Info */}
          <div className="lg:col-span-3">
            <p className="text-[17px]  text-black mb-6">{subtitle}</p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
              <p className="text-[17px] text-gray-680 leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] text-gray-680 space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>

             {/* Technical Specifications Table */}
        <div className="bg-gray-300 p-6 shadow rounded border border-r divine-y">
            <h2 className="font-bold text-black text-xl mb-4">Technical Specification</h2>

            <table className="w-full border text-[15px] text-black">
              <tbody>
                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold w-1/2 text-center">
                    CAMERA
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                    Max Resolution
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    2688 × 1520
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Image Sensor
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    1/3′′ Progressive Scan CMOS
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Min. Illumination
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Color: 0.005 Lux @ (F1.6, AGC ON), 0 Lux with IR on
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Shutter Time
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   1/3 s to 1/100, 000 s
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Day & Night
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    IR cut filter
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Angle Adjustment
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   Pan: 0° to 360°, tilt: 0° to 90°, rotate: 0° to 360°
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold w-1/2 text-center">
                    LENS
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Lens Type
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Fixed focal lens, 2.8, 4, and 6 mm optional
                  </td>
                </tr>
               
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Focal Length & FOV
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    2.8 mm, horizontal FOV 103°, vertical FOV 55°, diagonal FOV 122°4 mm, horizontal FOV 84°, vertical FOV 45°, diagonal FOV 100°6 mm, horizontal FOV 52°, vertical FOV 28°, diagonal FOV 61°
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Lens Mount
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    M12
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Iris Type
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Fixed
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Aperture
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    F1.6
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold w-1/2 text-center">
                     ILLUMINATOR
                  </td>
                </tr>

                 
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Supplement Light Range
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    IR Distance: up to 200 m
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Supplement Light Range
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    IR
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold w-1/2 text-center">
                     PTZ
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Movement Range (Pan)
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    360°
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Movement Range (Tilt)
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    –15° to 90° (auto flip)
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Pan Speed
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Pan speed: configurable from 0.1° to 160°/s, preset speed: 240°/s
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Tilt Speed
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Tilt speed: configurable from 0.1° to 120°/s, preset speed 200°/s
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Proportional Pan
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Yes
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Presets
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    300
                  </td>
                </tr>
                  <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Patrol Scan
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    8 patrols, up to 32 presets for each patrol
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Pattern Scan
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    4 pattern scans
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Power-off Memory
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Yes
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Park Action
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Preset,pattern scan,patrol scan,auto scan,tilt scan,random scan,frame scan,panorama scan
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                  3D Positioning
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Yes
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   PTZ Status Display
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Yes
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                   Preset Freezing
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Yes
                  </td>
                </tr>
                
              </tbody>
            </table>

            <table className="w-full border text-[15px] text-black mt-10 ">
              <tbody>
                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold w-1/2 text-center">
                     DORI
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold w-1/2">
                     DORI
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     2.8 mm: D: 67 m, O: 26 m, R: 13 m, I: 6 m4 mm: D: 80 m, O: 31 m, R: 16 m, I: 8 m6 mm: D: 120 m, O: 47 m, R: 24 m, I: 12 m
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold w-1/2 text-center">
                     ILLUMINATOR
                  </td>
                </tr>

                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Supplement Light Type
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     IR
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Supplement Light Range
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     -2I: up to 60 m-4I: up to 80 m
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Smart Supplement Light
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Yes
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     IR Wavelength
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     850 nm
                  </td>
                </tr>

                 <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold w-1/2 text-center">
                     VIDEO
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Main Stream
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     50 Hz: 25 fps (2688 × 1520, 1920 × 1080, 1280 × 720)60 Hz: 30 fps (2688 × 1520, 1920 × 1080, 1280 × 720)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Sub-Stream
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     50 Hz: 25 fps (1280 × 720, 640 × 480, 640 × 360)60 Hz: 30 fps (1280 × 720, 640 × 480, 640 × 360)
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Third Stream
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     50 Hz: 10 fps (1920 × 1080, 1280 × 720, 640 × 480, 640 × 360)60 Hz: 10 fps (1920 × 1080, 1280 × 720, 640 × 480, 640 × 360)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Video Compression
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Main stream: H.265/H.264/H.264+/H.265+Sub-stream: H.265/H.264/MJPEGThird stream: H.265/H.264
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Video Bit Rate
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     32 Kbps to 8 Mbps
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    H.264 Type
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Baseline Profile/Main Profile/High Profile
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     H.265 Type
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Main Profile
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Bit Rate Control
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    CBR/VBR
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Scalable Video Coding (SVC)
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    Yes
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Region of Interest (ROI)
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                    1 fixed region for main stream and sub-stream
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold w-1/2 text-center">
                     NETWORK
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Protocols
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     TCP/IP, ICMP, HTTP, HTTPS, FTP, DHCP, DNS, DDNS, RTP, RTSP, NTP, UPnP, SMTP, IGMP, 802.1X, QoS, IPv6, UDP, Bonjour, SSL/TLS, PPPoE, WebSocket, WebSockets
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Simultaneous Live View
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Up to 6 channels
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     API
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Open Network Video Interface (Profile S, Profile G), ISAPI, SDK
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     User/Host
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Up to 32 users. 3 user levels: administrator, operator and user
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Security
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Password protection, complicated password, HTTPS encryption, IP address filter, Security Audit Log, basic and digest authentication for HTTP/HTTPS, TLS 1.1/1.2, WSSEand digest authentication for Open Network Video Interface
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Network Storage
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     NAS (NFS, SMB/CIFS), auto network replenishment (ANR)
                  </td>
                </tr>
                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Client
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     iVMS-4200, Hik-Connect, Hik-Central
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Web Browser
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Plug-in required live view: IE 10, IE 11Plug-in free live view : Chrome 57.0+, Firefox 52.0+Local service: Chrome 57.0+, Firefox 52.0+
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold w-1/2 text-center">
                     INTERFACE
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Ethernet Interface
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     1 RJ45 10M/100M self-adaptive Ethernet port
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     On-Board Storage
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Built-in microSD, up to 512 GB
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Reset Key
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Yes
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold w-1/2 text-center">
                     EVENT
                  </td>
                </tr>

                 <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Basic Event
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Motion detection (human and vehicle targets classification), video tampering alarm, exception
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Smart Event
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Line crossing detection, intrusion detectionSupports human and vehicle targets classificationFace detection
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Linkage
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Upload to FTP/memory card/NAS, notify surveillance center, trigger recording, trigger capture, send email
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold w-1/2 text-center">
                     GENERAL
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Power
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     -2I:12 VDC ± 25%, 0.71 A, max. 8.5 W, Ø 5.5 mm coaxial power plug, reverse polarityprotectionPoE: 802.3af, 36 V to 57 V, 0.27 A to 0.17 A, max. 9.5 W -4I:12 VDC ± 25%, 1.0 A, amx. 11.5 W, Ø 5.5 mm coaxial power plug, reverse polarityprotectionPoE: 802.3af, Class 3, 36 V to 57 V, 0.35 A to 0.22 A, max. 12.5 W
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Material
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Aluminum alloy bodySun shield, IR cover: plastic
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Dimension
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Ø105 × 299.7 mm (Ø4.1′′ × 11.8′′)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Package Dimension
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     386 × 156 × 155 mm (15.2″ × 6.2″ × 6.2″)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Weight
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Approx. 1070 g (2.4 lb.)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     With Package Weight
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Approx. 1589 g (3.5 lb.)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Storage Conditions
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     -30 °C to 60 °C (-22 °F to 140 °F). Humidity 95% or less (non-condensing)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Startup and OperatingConditions
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     -30 °C to 60 °C (-22 °F to 140 °F). Humidity 95% or less (non-condensing)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Language
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     33 languagesEnglish, Russian, Estonian, Bulgarian, Hungarian, Greek, German, Italian, Czech, Slovak,French, Polish, Dutch, Portuguese, Spanish, Romanian, Danish, Swedish, Norwegian,Finnish, Croatian, Slovenian, Serbian, Turkish, Korean, Traditional Chinese, Thai,Vietnamese, Japanese, Latvian, Lithuanian, Portuguese (Brazil), Ukrainian
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     General Function
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     Anti-flicker, heartbeat, password reset via e-mail, pixel counter
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="5" className="border-r border-black border p-2 font-bold w-1/2 text-center">
                     APPROVAL
                  </td>
                </tr>

                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     EMC
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     FCC (47 CFR Part 15, Subpart B);CE-EMC (EN 55032: 2015, EN 61000-3-2: 2014, EN 61000-3-3: 2013, EN 50130-4: 2011+A1: 2014);RCM (AS/NZS CISPR 32: 2015);IC (ICES-003: Issue 6, 2016);KC (KN 32: 2015, KN 35: 2015)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                    Safety
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     UL (UL 60950-1);CB (IEC 60950-1:2005 + Am 1:2009 + Am 2:2013);CE-LVD (EN 60950-1:2005 + Am 1:2009 + Am 2:2013);BIS (IS 13252(Part 1):2010+A1:2013+A2:2015);LOA (IEC/EN 60950-1)
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Environment
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                   	CE-RoHS (2011/65/EU);WEEE (2012/19/EU);Reach (Regulation (EC) No 1907/2006) 
                  </td>
                </tr>
                <tr className="bg-gray-300 ">
                  <td colSpan="2" className="border-r border-black border p-2 font-bold">
                     Protection
                  </td>
                  <td colSpan="3" className="border border-r border-black  p-2">
                     IP67 (IEC 60529-2013)
                  </td>
                </tr>
              </tbody>
           </table>

        </div>
            

            {/* Footer Tags & Socials */}
            <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                HIKVISION
              </span>
              
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                CCTVs
              </span>
            </div>

               {/* SHARE SECTION */}
            <div className="mt-8">
              <p className="font-medium text-black mb-3">Share:</p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/facebook.png" alt="Facebook" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/gmail.png" alt="Gmail" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/telegram.png" alt="Telegram" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded hover:bg-[#f3760f] transition-colors duration-200">
                  <img src="/assets/image/social-logo/viber.png" alt="Viber" className="w-full h-full object-contain p-1" />
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
             <div className="bg-gray-300 p-4 border border-black  border-r mb-6">
            <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By HIKVISION</h3>
            <ul className="text-xs space-y-4 text-gray-500 transition-colors">
              <li className='cursor-pointer hover:text-[#f08c09]'>Onity DirectKey with Serene</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>MAD-401 and MAD-402 Series Addressable Modules 1 & 2 Technical Inputs</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>INR 415 256-Channel 12 Bay RAID Rackmount Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>GNR 340 100-Channel Tower Standalone</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>ENR 130 16-Channel Desktop Standalone NVR - No HDD Included</li>
              <li className='cursor-pointer hover:text-[#f08c09]'>Z86 Outdoor Network Dome Camera with Night Vision</li>
            </ul>
          </div>

            {/* Blue CTA Card */}
             <div
              className="bg-blue-600 text-white p-6 rounded shadow-md overflow-hidden relative min-h-[200px]"
              style={{
                backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(30, 64, 175, 0.8)), url('/src/assets/image/Our Products/quickalert.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="relative z-10 px-4 max-w-3xl">
                 <h3 className="text-xl font-semibold mb-3">
                   Secure Your Piece Of Mind Today
                 </h3>
                 <p className="text-lg mb-4">
                   Contact Guard-All now for a customized security solution
                   that protects what matters most.
                 </p>
              <button className="bg-blue-700 hover:bg-blue-400 text-white font-semibold px-4 py-2 rounded w-full">
                <NavLink to="/contacts" className="w-full h-full block">
                CONTACT US TODAY
                </NavLink>
              </button>
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
const DS2DE7A825IW = () => {
  const data = {
    title: "DS-2DE7A825IW-AEB(T5) 8MP 25 x IR Network Speed Dome Camera",
    subtitle: "Designed for outdoor use, this surveillance dome camera has 25x optical zoom lens and up to 200m IR distance.",
    description: "Hikvision DS-2DE7A825IW-AEB(T5) 8 MP 25× IR Network Speed Dome adopts 1/1.8″ progressive scan CMOS chip. With the 25× optical zoom lens, the camera offers more details over expansive areas. This series of cameras can be widely used for wide ranges of high-definition, such as the rivers, roads, railways, airports, squares, parks, scenic spots, and venues, etc. Empowered by deep learning algorithms, Hikvision AcuSense technology brings human and vehicle targets classification alarms to front- and back-end devices. The system focuses on human and vehicle targets, vastly improving alarm efficiency and effectiveness.",
    features: [
      "1/1.8″ progressive scan CMOS",
      "High quality imaging with 8 MP resolution",
      "Excellent low-light performance with powered-by-DarkFighter technology",
      "Audio visual alarm: The white flashing light and audible warning can be triggered by certain events",
      "25× optical zoom and 16× digital zoom provide close up views over expansive areas",
      "Expansive night view with up to 200 m IR distance",
      "Focuses on human and vehicle targets classification based on deep learning",
      "Face capture: Up to 5 faces captured at the same time",
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

export default DS2DE7A825IW;