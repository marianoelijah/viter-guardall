import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const   FD9391EHTVV2 = () => {
  const productFeatures = [
    "WDR Pro for Unparalleled Visibility",
    "Built-in IRs up to 50M with Smart IR III",
    "IP66/IP67/IP6K9K and IK10+/NEMA 4X Protection",
    "Cyber Protection via Trend Micro IoT Security",
    "AI powered Smart Motion Detection and Smart VCA"
  ];

  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
        {/* Blue Header Banner */}
        <header className="bg-[#8ba4ca] text-white py-12 px-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            FD9391-EHTV-V2
          </h1>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="lg:w-3/4 bg-gray-300 p-8 shadow-sm">
            <p className="text-[15px] text-black mb-6">
                8MP Outdoor Dome AI Camera
            </p>

            <section className="mb-8">
              <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
              <p className="text-[15px] text-black leading-relaxed mb-4">
                 The VIVOTEK FD9391-EHTV-V2 (V Series) is an advanced 8MP outdoor dome AI camera 
                 engineered for high-resolution surveillance and critical environment protection. 
                 Powered by AI-driven Smart Motion Detection and Smart VCA, it delivers accurate 
                 object detection and reduces false alarms. It features WDR Pro technology for 
                 exceptional visual clarity in high-contrast lighting environments, along with 
                 built-in Smart IR III illumination effective up to 50 meters. Built for maximum 
                 durability, its rugged housing boasts IP66, IP67, IP6K9K, IK10+, and NEMA 4X 
                 ratings. Integrated Trend Micro IoT Security ensures comprehensive cyber 
                 protection across networked security setups
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
                Multimedia SoC (System-on-Chip)
              </td>
            </tr> 
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Flash
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                8 GB
              </td>
            </tr> 
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                RAM
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                2 GB
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
                1/1.8" Progressive CMOS
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Max. Resolution
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                3840x2160 (8MP)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Lens Type
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">            
                Motorized, Vari-focal, Remote Focus
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Focal Length
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">             
                f = 4.4 ~ 10.2 mm
                (f = 2.8~ 10.3mm, equivalent focal length @ 1/2.8")
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Aperture
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                F1.38 ~ F2.24
              </td>
            </tr>

            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Iris Type
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                P-Iris
              </td>
            </tr> 
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Field of View
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                110.0° ~ 43.0° (Horizontal)
                57.0° ~ 24.0° (Vertical)
                133.0° ~ 49.0° (Diagonal)
              </td>
            </tr> 
             <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Shutter Time
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                1 sec. to 1/100,000 sec.
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
                Built-in IR illuminators, effective up to 40 meters with Smart IR, IR LED*4
              </td>
            </tr> 
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Miniminum Illumination
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                                            
                0.01 lux @ F1.38 (Color)
                0.005 lux @ F1.38 (B/W)
                0 lux with IR illumination on
              </td>
            </tr> 
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Pan Range
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                ±175°
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Tilt Range
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                80*
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
               Rotation Range
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                ±175°
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
                Remote focus, Pixel calculator, Remote zoom, Micro USB
                *Requires Wi-Fi dongle and Micro B converter
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
                30 fps @ 3840x2160
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Maximum Streams
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                3 video streams (Up to 8 configurable profiles)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                S/N Ratio
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                58 dB
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
                Image settings
                white balance, image adjustment (brightness, contrast, saturation, sharpness, gamma curve), defog, LDC, 3DNR, EIS, scene mode (auto, deblur)
                Exposure
                BLC, HLC, exposure control (exposure level, iris adjustment, exposure time, gain control, iris mode), AE speed adjustment, WDR
                Focus
                zoom, focus
                Privacy mask
                Pixel calculator
                Scheduled profile settings
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
                Audio Capability
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                Two-way Audio (full duplex)*
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
                External microphone input*
                External line output*
                * Only supported by the I/O cable version.
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
              <td ColSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                NETWORK
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
                Access list, Account block, Audit log, Session timeout, Configurable password strength protection, Digest authentication, CSRF protection, HTTPS, IEEE 802.1x, Secure boot, Signed firmware, Trend Micro IoT Security (brute force attack event, cyberattack event), User access log, User account management
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Protocols
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">
                802.1X, ARP, Bonjour, CIFS/SMB, DDNS, DHCP, DNS, FTP, HTTP, HTTPS, ICMP, IGMPv3, IPv4, IPv6, NTP, PPPoE, QoS (CoS/DSCP), RTSP/RTP/RTCP, SFTP, SMTP, SNMP, SSL, TCP/IP, TLS 1.2, UDP, UPnP
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Interface
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                10BASE-T/100BASE-TX Ethernet
                *It is highly recommended to use standard CAT5e & CAT6 cables which are compliant with the 3P/ETL standard.
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                ONVIF
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                Profile G, S, T, M supported, specification available at www.onvif.org
              </td>
            </tr>

            {/*  GENERAL */}
             <tr>
              <td ColSpan={5} className="bg-gray-100 p-4 text-xl text-black font-bold align-middle border-b border-r border-black">
                GENERAL
              </td>
            </tr>

            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Cnnectors
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                            
                RJ-45 cable connector for 10/100 Mbps PoE network connection
                Audio line input
                Audio line output
                DC 12V power input/AC 24V power input
                Digital input *2
                Digital output *2 (DO+: 12V, 50mA; DO-: 30V, Open Drain, 1A)
                Micro USB
                (Extension I/O Module Kit Included by Default)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                LED Indicator
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                System power and Status indicator
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Power Input
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                AC 24V/DC 12V, IEEE 802.3at PoE Class 4 (Power Redundancy)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Power Consumption
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                              
               PoE: 14.25/10.81W (IR on/off)
               DC 12V: 14.40/10.96W (IR on/off)
               AC 24V: 11.64/8.20W (IR on/off)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Dimensions
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                174 (D) x 123 (H) mm
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Weight
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                1.39 kg
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Certifications
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                                           
                EMC
                CE (EN 55032/EN 55035 Class B, EN 50121-4), FCC (FCC Part 15 Subpart B Class B), UKCA (BS EN 55032/BS EN 55035 Class B), RCM (AS/NZS CISPR 32 Class B), VCCI (VCCI-CISPR 32 Class B), IC (ICES-003 Issue 7)
                Safety
                UL (UL 62368-1), CB (IEC/EN 62368-1, IEC/EN 60950-22, IEC/EN 62471), LVD, (EN 62368-1), UKCA (BS EN IEC 62368-1)
                Environment
                IK10+ (IEC 62262), IP66/67 (IEC 60529), NEMA (NEMA 250 Type 4X), IEC 60068-2-11, IP6K9K (ISO 20653)
                IA
                BIS (IS 13252), BSMI (EMC: CNS 15936, Safety: CNS 15598-1)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Operating Temperature
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">                                 
                Starting Temperature:
                -20°C ~ 50°C (-4°F ~ 122°F)
                Working Temperature:
                -35°C ~ 60°C (-31°F ~ 140°F) (IR off)
                -35°C ~ 50°C (-31°F ~ 122°F) (IR on)
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Humidity
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                98% non-condensing
              </td>
            </tr>
            <tr>
              <td ColSpan={2} className="w-1/5 bg-gray-200 p-4 font-normal  text-black align-middle border-b border-r border-black">
                Warranty
              </td>
              <td className="w-1/5 p-4 text-gray-600 align-middle border-b border-r border-black ">               
                60 months
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

export default  FD9391EHTVV2;