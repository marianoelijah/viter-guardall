import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const   IB9380HTVV2 = () => {
  const productFeatures = [
    "Detect people and vehicles with Vision Object Analytics",
    "Accurate alarm with Smart VCA",
    "Built-in IRs up to 30M with Smart IR",
    "Metal housing with IK10 certification",
    "Cyber protection via Trend Micro IoT Security"
  ];

  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
        {/* Blue Header Banner */}
        <header className="bg-[#8ba4ca] text-white py-12 px-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            IB9380-HTV-V2
          </h1>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="lg:w-3/4 bg-gray-300 p-8 shadow-sm">
            <p className="text-[15px] text-black mb-6">
                5MP Outdoor Bullet AI Camera
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
              <p className="text-[15px] text-black leading-relaxed mb-4">
                 The VIVOTEK IB9380-HTV-V2 (C Series) is an advanced 5MP outdoor bullet network camera 
                 equipped with built-in AI analytics for high-precision security monitoring. 
                 Featuring Vision Object Analytics and Smart VCA, it reliably detects people and vehicles
                 to minimize false alarms and improve event accuracy. Designed for day-and-night performance,
                 it includes built-in IR illuminators with Smart IR technology effective up to 30 meters. 
                 Its durable metal housing carries IK10 vandal resistance, while integrated Trend Micro IoT
                 Security provides robust cyber protection for enterprise networks.
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
                SYSTEM INFORMATION
              </td>
            </tr>    
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                CPU
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Multimedia SoC System-on-Chip
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Flash
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                256 MB
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                RAM
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                512 MB
              </td>
            </tr>

            <tr>
              <td colSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                CAMERA SPECIFICATIONS
              </td>
            </tr>    
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Image Sensor
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                1/2.7" Progressive CMOS
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Max. Resolution
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                2880x1616 (5MP)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Lens Type
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Motorized, Vari focal, Remote Focus
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Focal Length
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                f = 2.7 ~ 13.5 mm
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Aperture
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                F1.6 - F3.1
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Iris Type
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Fixed iris
              </td>
            </tr> 
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Field of View
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                110.4° ~ 45.1° (Horizontal)
                57.9° ~ 25.4° (Vertical)
                133.9° ~ 51.8° (Diagonal)
              </td>
            </tr> 
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Shutter Time
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                1/5 sec. to 1/32,000 sec.
              </td>
            </tr> 
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                WDR Technology
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                WDR Pro
              </td>
            </tr> 
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Day/Night
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Yes
              </td>
            </tr>
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Removable IR-cut filter
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Yes
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Illuminators
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Built-In Illuminators, effective up to 40 meters with Smart IR, IR LED*4
              </td>
            </tr> 
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Miniminum Illumination
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                
                 0.02 lux @ F1.6 (Color)
                 0.005 lux @ F1.6 (B/W)
                 0 lux with IR illumination on
              </td>
            </tr> 
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Tilt Range
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                90*
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Rotation Range
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                180*
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Storage
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Seamless Recording to MicroSD/SDHC/SDXC card (1TB capacity supported) and recording to network-attached storage (NAS)
              </td>
            </tr>
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Built-in Installation Aids
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Pixel calculator
              </td>
            </tr>

              {/* VIDEO */}
              <tr>
              <td ColSpan={5} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                VIDEO
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Compression
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                H.265, H.264, MJPEG
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Maximum Frame Rate
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                30 fps @ 2880x1616
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Maximum Streams
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                3 video streams (Up to 7 configurable profiles)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Main Stream
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                30 fps @ 2880x1616, 2688x1512, 2560x1440, 1920x1080, 1600x904, 1360x768, 1280x720, 640x360 (16:9)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                2nd Stream
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                30 fps @ 1920x1080, 1600x904, 1360x768, 1280x720, 640x360 (16:9)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                3rd Stream
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                30 fps @ 1280x720, 640x360, 480x272 (16:9)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                S/N Ratio
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                52 dB
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Dynamic Range
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                120 dB
              </td>
            </tr>
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Video Streaming
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
               Adjustable resolution, quality and constant bit rate control, Smart Stream III
              </td>
            </tr>
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Image Settings
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
               General settings
               video title and time stamp overlay, video orientation (flip, mirror, rotation), day/night settings
               Illuminators
               illuminators, anti-overexposure, Smart IR
               Image settings
               white balance, image adjustment (brightness, contrast, saturation, sharpness, gamma curve), defog, 3DNR
               Exposure
               BLC, HLC, exposure control (exposure level, exposure time, gain control), AE speed adjustment, WDR
               Focus
               zoom, focus
               Privacy mask
               Pixel calculator
               Scheduled profile settings
              </td>
            </tr>

             {/* AUDIO */}
             <tr>
              <td ColSpan={5} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                AUDIO
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Audio Capability
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Two Way Audio
              </td>
            </tr>
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Compression
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                G.711, G.726, MPEG-2 AAC-LC
              </td>
            </tr>
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Interface
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Built-in microphone
                External line input
                External line output
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Effective Range
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                5 meters
              </td>
            </tr>

            {/*  NETWORK */}
            <tr>
              <td ColSpan={5} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                USER
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Users
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Live viewing for up to 10 clients
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Security
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Access list, Password protection, Digest authentication, CSRF protection, HTTPS, IEEE 802.1x, Signed firmware, Trend Micro IoT Security (brute force attack event, cyberattack event), User access log, User account management
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Protocols
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                
                802.1X, ARP, Bonjour, CIFS/SMB, DDNS, DHCP, DNS, FTP, HTTP, HTTPS, ICMP, IGMPv3, IPv4, IPv6, NTCIP, NTP, PPPoE, QoS (CoS/DSCP), RTSP/RTP/RTCP, SMTP, SNMP, SSL, TCP/IP, TLS 1.2/1.3, UDP, UPnP
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Interface
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                10BASE-T/100BASE-TX Ethernet (RJ-45)
                *It is highly recommended to use standard CAT5e & CAT6 cables which are compliant with the 3P/ETL standard.
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                ONVIF
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                Profile G, S, T supported, ONVIF 21.06
              </td>
            </tr>

            {/*  AI ANALTICS */}
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Compute Capability
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                SoC with built-in hardware deep learning accelerator
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Vision Object Analytics
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                Object Detection: People
                Vehicle (4-wheeled)
                Human / Vehicle Bestshot
                Path Extraction
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Applications
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                              
                Deep Learning VCA (Smart Motion Detection, Smart VCA)
                Smart VCA - Group 1
                Smart Motion Detection (Five-window video motion detection, People detection, Vehicle detection, Time filter), Smart VCA (Intrusion detection, Loitering detection, Line crossing detection)
              </td>
            </tr>

             {/*  SOLUTION INTEGRATION */}
             <tr>
              <td ColSpan={5} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                 SOLUTION INTEGRATION
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                VADP Package
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                              
               Trend Micro (Default, 1-year free trial)
              </td>
            </tr>
            <tr>
            <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Video Motion Detection
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                              
                Motion Detection (Five-window video motion detection)
              </td>
            </tr>

            {/*  ALARM AND EVENT */}
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Event Trigger
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                              
               Motion detection, Camera tampering detection, Digital input, Manual trigger, Periodical trigger, System boot, Recording notification, Cybersecurity events (brute force attack event, cyberattack event)
              </td>
            </tr>
            <tr>
            <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Event Action
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                              
                Event notification via email, HTTP, FTP/SFTP, NAS server, SD card, camera link
                File upload via email, HTTP, FTP, NAS server, SD card
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
                Cnnectors
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                            
                RJ-45 cable connector for 10/100 Mbps Network/PoE connection
                Audio line input
                Audio line output
                Digital input: 1
                Digital output: 1
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                LED Indicator
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                System power and StatuS indicator
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Power Input
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                IEEE 802.3af PoE Class 3
                DC 12V
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Power Consumption
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                Max. 12.4W/9.6W (IR on/off)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Dimensions
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                91 (D) x 195 (H) mm
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Weight
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                757 g
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Certifications
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                             
                EMC
                CE (EN 55032/EN 55035 Class A), UKCA (BS EN 55032/BS EN 55035 Class A), FCC (FCC Part 15 Subpart B Class A), RCM (AS/NZS CISPR 32 Class A), VCCI (VCCI-CISPR 32 Class A), IC (ICES-003 Issue 7, Class A)
                Safety
                UL (UL 62368-1), CB (IEC/EN 62368-1, IEC/EN 60950-22, IEC/EN 62471), LVD (IEC/EN 62368-1), UKCA (BS EN 62368-1)
                Environment
                IK10 (IEC 62262), IP66, IP67 (IEC 60529)
                IA
                BSMI (EMC: CNS 15936, Safety: CNS 15598-1)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Operating Temperature
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                                             
                Starting Temperature:
                -30°C ~ 60°C (-22°F ~ 140°F)
                Working Temperature:
                -30°C ~ 60°C (-22°F ~ 140°F)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Humidity
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                90% non-condensing
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Warranty
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                36 months
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

export default  IB9380HTVV2;