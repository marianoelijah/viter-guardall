import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';


const DS2CD2143G2 = () => {
  const productFeatures = [
    "High quality imaging with 4 MP resolution",
    "Clear imaging against strong backlight due to 120 dB WDR technology",
    "Efficient H.265+ compression technology",
    "Water and dust resistant (IP67) and vandal resistant (IK10)",
    "Focus on human and vehicle targets classification based on deep learning"
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
    <div className="bg-gray-100 min-h-screen font-sans text-black pb-12">
      {/* Blue Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-4 text-center">
        <h1 className="text-5xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto text-center">
             DS-2CD2143G2-I(S) 4MP AcuSense Fixed Dome Network Camera
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
          <p className="text-[17px] leading-relaxed mb-6">
           A dome-shaped surveillance camera that can accurately detect human or vehicle motion/target.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-xl text-black mb-2">Product Description:</h2>
            <div className="text-[17px] leading-relaxed space-y-4 mb-6">
              <p>
              Empowered by deep learning algorithms, Hikvision AcuSense technology brings human and vehicle targets classification alarms to front- and back-end devices. The system focuses on human and vehicle targets, vastly improving alarm efficiency and effectiveness.
              </p>
            </div>

            <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
            <ul className="list-disc ml-5 text-[17px] space-y-1 mb-8">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          <h2 className="font-bold text-xl text-black mb-4 uppercase">Technical Specification:</h2>

          <div className="mb-8">
             <table className="w-full border-collapse border border-black text-[10px]">
                <tbody>
                  {/* HEADER */}
                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                        CAMERA
                      </td>
                   </tr>
                   
                    <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Image Sensor
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                         1/3″ Progressive Scan CMOS
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Min. Illumination
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        Color: 0.005 Lux @ (F1.6, AGC ON), 0 Lux with IR on
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Shutter Speed
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        1/3 s to 1/100,000 s
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Slow Shutter
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        Yes
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        P/N
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        P/N
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Wide Dynamic Range
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        120 dB
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Day & Night
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        ICR Cut
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Angle Adjustment
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        Pan: 0° to 355°, tilt: 0° to 75°, rotate: 0° to 355°
                      </td>
                   </tr>

                   {/* HEADER */}
                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                        LENS
                      </td>
                   </tr>

                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Lens Type
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        Fixed focal lens, 2.8, 4, and 6 mm optional
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Lens Type & FOV
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        2.8 mm, horizontal FOV 103°, vertical FOV 55°, diagonal FOV 122°4 mm, horizontal FOV 84°, vertical FOV 45°, diagonal FOV 100°
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Aperture
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        F1.6
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Lens Mount
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        M12
                      </td>
                   </tr>

                   {/* HEADER */}
                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                          DORI
                      </td>
                   </tr>

                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                         DORI
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        2.8 mm: D: 67 m, O: 26 m, R: 13 m, I: 6 m4 mm: D: 80 m, O: 31 m, R: 16 m, I: 8 m
                      </td>
                   </tr>

                   {/* HEADER */}
                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                          ILLUMINATOR
                      </td>
                   </tr>

                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                         IR Wavelength
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        Up to 30 m
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                         IR Range
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                         850 nm
                      </td>
                   </tr>

                   {/* HEADER */}
                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                         VIDEO
                      </td>
                   </tr>

                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Max. Resolution
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        2688 × 1520
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                       Main Stream
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        50 Hz: 25 fps (2688 × 1520, 1920 × 1080, 1280 × 720)60 Hz: 30 fps (2688 × 1520, 1920 × 1080, 1280 × 720)
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                       Sub-Stream
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       50 Hz: 25 fps (1280 × 720, 640 × 480, 640 × 360)60 Hz: 30 fps (1280 × 720, 640 × 480, 640 × 360)
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Third Stream
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       50 Hz: 10 fps (1920 × 1080, 1280 × 720, 640 × 480, 640 × 360)60 Hz: 10 fps (1920 × 1080, 1280 × 720, 640 × 480, 640 × 360)
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Video Compression
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        Main stream: H.265/H.264/H.264+/H.265+Sub-stream: H.265/H.264/MJPEGThird stream: H.265/H.264
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Video Bitrate
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        32 Kbps to 8 Mbps
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        H.264 Type
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        Baseline Profile/Main Profile/High Profile
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        H.265 Type
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        Main profile
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                       H.264+
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       Main stream supports
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                       H.265+
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       Main stream supports
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                       Bit Rate Control
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       CBR/VBR
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                       Scalable Video Coding (SVC)
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       Yes
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                       Region of Interest (ROI)
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       1 fixed region for main stream and sub-stream
                      </td>
                   </tr>

                    {/* HEADER */}
                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                       AUDIO
                      </td>
                   </tr>

                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Audio Compression
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        -S: G.711ulaw/G.711alaw/G.722.1/G.726/MP2L2/PCM/MP3/AAC-LC
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Audio Bit Rate
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        -S: 8 kHz/16 kHz/32 kHz/44.1 kHz/48 kHz
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Audio Sampling Rate
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        8-ch
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                       Environment Noise Filtering
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       -S: Yes
                      </td>
                   </tr>

                    {/* HEADER */}
                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                       NETWORK
                      </td>
                   </tr>

                    <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Network Storage
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       NAS (NFS, SMB/CIFS), auto network replenishment (ANR)
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Protocols
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        TCP/IP, ICMP, HTTP, HTTPS, FTP, DHCP, DNS, DDNS, RTP, RTSP, NTP, UPnP, SMTP, IGMP, 802.1X, QoS, IPv6, UDP, Bonjour, SSL/TLS, PPPoE, WebSocket, WebSockets
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        API
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       Open Network Video Interface (Profile S, Profile G), ISAPI, SDK
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Simultaneous Live View
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        Up to 6 channels
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        User/Host
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        Up to 32 users, 3 user levels: administrator, operator, and user
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Security
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       Password protection, complicated password, HTTPS encryption, IP address filter, Security Audit Log, basic and digest authentication for HTTP/HTTPS, TLS 1.1/1.2, WSSE and digest authentication for Open Network Video Interface
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Client
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        iVMS-4200, Hik-Connect, Hik-Central
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Web Browser
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        Plug-in required live view: IE 10, IE 11Plug-in free live view : Chrome 57.0+, Firefox 52.0+Local service: Chrome 57.0+, Firefox 52.0+
                      </td>
                   </tr>

                    {/* HEADER */}
                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                       IMAGE
                      </td>
                   </tr>

                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Image Parameter Switch
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        Yes
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Image Settings
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        Rotate, mirror, privacy mask, saturation, brightness, contrast, sharpness, gain, white balance adjustable by client software or web browser
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Day/Night Switch
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       Day, Night, Auto, Schedule
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                       Image Enhancement
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        BLC, HLC, 3D DNR
                      </td>
                   </tr>

                    {/* HEADER */}
                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                       INTERFACE
                      </td>
                   </tr>

                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Ethernet Interface
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        1 RJ45 10 M/100 M self-adaptive Ethernet port
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                       On-board Storage
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       Built-in microSD, up to 512 GB
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Alarm
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        -S: 1 input, 1 output (max. 12 VDC, 30 mA)
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                       Reset
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       Yes
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Audio
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        -S: 1 input (line in), two-core terminal block , max. input amplitude: 3.3 vpp, input impedance: 4.7 KΩ, interface type: non-equilibrium; 1 output (line out), two-core terminal block , max.output amplitude: 3.3 vpp, output impedance: 100 Ω, interface type: non-equilibrium, mono sound
                      </td>
                   </tr>


                   {/* HEADER */}
                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                       EVENT
                      </td>
                   </tr>

                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                       Basic Event
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       Motion detection (human and vehicle targets classification), video tampering alarm, exception
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                       Face Detection
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       Yes
                      </td>
                   </tr>

                    {/* HEADER */}
                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                       DEEP LEARNING FUNCTION
                      </td>
                   </tr>

                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                       Perimeter Protection
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       Line crossing detection, intrusion detectionSupports human and vehicle targets classification
                      </td>
                   </tr>

                    {/* HEADER */}
                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                       GENERAL
                      </td>
                   </tr>

                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                       Linkage Method
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       Upload to FTP/memory card/NAS, notify surveillance center, trigger record, trigger capture, Email
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                       Material
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       Aluminum alloy bodyBubble: plastic
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                       Screw Material
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       SUS304
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                       Camera Dimension
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        Ø110.8 × 84.7 mm (Ø4.4′′ × 3.3′′)
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                       Package Dimension
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       134 × 134 × 108 mm (5.3′′ × 5.3′′ × 4.3′′)
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                       Camera Weight
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        Approx. 530 g (1.2 lb.)
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                      With Package Weight
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       Approx. 720 g (1.6 lb.)
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                       Storage Conditions
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        -30 °C to 60 °C (-22 °F to 140 °F). Humidity 95% or less (non-condensing)
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                         Startup and Operating Conditions
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                         -30 °C to 60 °C (-22 °F to 140 °F). Humidity 95% or less (non-condensing)
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                         Web Client Language
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       33 languagesEnglish, Russian, Estonian, Bulgarian, Hungarian, Greek, German, Italian, Czech, Slovak, French, Polish, Dutch, Portuguese, Spanish, Romanian, Danish, Swedish, Norwegian, Finnish, Croatian, Slovenian, Serbian, Turkish, Korean, Traditional Chinese, Thai, Vietnamese, Japanese, Latvian, Lithuanian, Portuguese (Brazil), Ukrainian
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        General Function
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                         -Anti-flicker, heartbeat, password reset via email, pixel counter
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                         Firmware Version
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       V5.5.113
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Software Reset
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                         Yes
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                         Power Consumption and Current
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                         12 VDC, 0.5 A, max. 6 WPoE (802.3af, 36 V to 57 V), 0.2 A to 0.13 A, max. 7.2 W
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Power Supply
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                         12 VDC ± 25%, reverse polarity protectionPoE: 802.3af, Class 3
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Power Interface
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                         Ø 5.5 mm coaxial power plug
                      </td>
                   </tr>

                   {/* HEADER */}
                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center">
                       APPROVAL
                      </td>
                   </tr>

                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                       EMC
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       FCC (47 CFR Part 15, Subpart B); CE-EMC (EN 55032: 2015, EN 61000-3-2: 2014, EN 61000-3-3: 2013, EN 50130-4: 2011 +A1: 2014); RCM (AS/NZS CISPR 32: 2015); IC (ICES-003: Issue 6, 2016); KC (KN 32: 2015, KN 35: 2015)
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Safety	
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       UL (UL 60950-1); CB (IEC 60950-1:2005 + Am 1:2009 + Am 2:2013); CE-LVD (EN 60950-1:2005 + Am 1:2009 + Am 2:2013); BIS (IS 13252(Part 1):2010+A1:2013+A2:2015)
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                       Environment
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                       CE-RoHS (2011/65/EU); WEEE (2012/19/EU); Reach (Regulation (EC) No 1907/2006)
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="border border-black p-2 text-[17px] text-black font-bold bg-gray-100 text-center w-1/2">
                        Protection
                      </td>
                      <td colSpan="2" className="border border-black p-2 text-[17px] text-black text-center">
                        IP67 (IEC 60529-2013)
                      </td>
                   </tr>
                </tbody>
             </table>
          </div>

          {/* Tags */}
            <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="text-white border bg-red-500 px-2 py-1">HIKVISION</p>
            <p className="text-white border bg-red-500 px-2 py-1">CCTVs</p>
           </div> 

          {/* Share Section */}
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
        </main>

        {/* Sidebar */}
        <aside className="lg:w-1/4 space-y-6">
           <div className="bg-gray-300 p-4 border border-black mb-6">
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


           {/* Contact Card */}
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
    </div>
    <Footer />
    </>
    
  );
};

export default DS2CD2143G2;