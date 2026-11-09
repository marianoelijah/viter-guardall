import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';




const DS7608NXI = () => {
  const productFeatures = [
    "H.265+/H.265/H.264+/H.264 video formats",
    "Intelligent analytics based on deep learning algorithms",
    "Up to 4-ch perimeter protection",
    "Up to 1-ch facial recognition for video stream",
    "Up to 4-ch facial recognition for face picture",
    "Up to 8-ch IP camera inputs",
    "Up to 16-ch 1080p decoding capability"
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
      <header className="bg-[#7f95b8] dark:bg-blue-950/70 text-white py-14 px-6 text-center transition-colors duration-300">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
              DS-7608NXI-I2/8P/S AcuSense Series NVR
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <main className="lg:col-span-3 bg-gray-100 dark:bg-[#1e1e22] p-6 md:p-8 rounded-xl border border-transparent dark:border-gray-800 shadow-md transition-colors duration-300">
          <p className="text-[15px] leading-relaxed mb-6">
           A network video-recorder with AI functionality and can offer up to 8 channel input.
          </p>

          <section className="mb-8">
            <h2 className="font-semibold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Description:</h2>
            <div className="text-[15px] leading-relaxed space-y-4 mb-6">
              <p>
              With built-in analytics, Hikvision’s Network Video Recorders (NVRs) provide advanced artificial intelligence capabilities for any connected data stream, even those from conventional security cameras. Empowered by AI chips and high-precision algorithms, Hikvision NVRs combine high-efficiency video recording with abundant options for data analytics. These advanced NVRs bring powerful applications to a variety of users with diverse requirements.
              </p>
            </div>

            <h2 className="font-semibold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Product Features:</h2>
            <ul className="list-disc ml-5 text-[15px] space-y-1 mb-8">
              {productFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          {/* Technical Specifications */}
          <h2 className="font-semibold text-xl text-black dark:text-blue-400 mb-2 transition-colors">Technical Specification:</h2>
          <div className="mb-8">
             <table className="w-full border-collapse border border-black text-[10px]">

                <tbody>

                  {/* HEADER */}
                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[15px] text-black font-bold bg-gray-100 text-center">
                        FACIAL RECOGNITION
                      </td>
                   </tr>
                   
                    <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Facial detection and analytics
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                         Face picture comparison, human face capture, face picture search
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Face picture library
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                         Up to 16 face picture libraries, with up to 10,000 face pictures in total (each picture ≤ 512 KB, total capacity ≤ 150 MB)
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Face picture comparison
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        4-ch face picture comparison alarm
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Performance of facial detection and analytics
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        1-ch human face capture (HD network camera, up to 8 MP, H.264/H.265)
                      </td>
                   </tr>

                   {/* HEADER */}
                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[15px] text-black font-bold bg-gray-100 text-center">
                        MOTION DETECTION 2.0
                      </td>
                   </tr>

                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Human/vehicle analysis
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        8-ch
                      </td>
                   </tr>

                   {/* HEADER */}
                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[15px] text-black font-bold bg-gray-100 text-center">
                       VIDEO AND AUDIO
                      </td>
                   </tr>

                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        IP video input
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        8-ch; Up to 12 MP resolution
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Incoming bandwidth
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        80 Mbps
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       Outgoing bandwidth
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        256 Mbps
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       HDMI output
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       4K (3840 × 2160)/60Hz, 4K (3840 × 2160)/30Hz, 2K (2560 × 1440)/60Hz, 1920 × 1080/60Hz, 1600 × 1200/60Hz, 1280 × 1024/60Hz, 1280 × 720/60Hz, 1024 × 768/60Hz
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        VGA output
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        1-ch, 1920 × 1080/60Hz, 1280 × 1024/60Hz, 1280 × 720/60Hz, 1024 × 768/60Hz,
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Video output mode
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        HDMI/VGA independent output
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        CVBS output
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        1-ch, BNC (1.0 Vp-p, 75 Ω), resolution: PAL: 704 × 576, NTSC: 704 × 480
                      </td>
                   </tr>

                    {/* HEADER */}
                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[15px] text-black font-bold bg-gray-100 text-center">
                       DECODING
                      </td>
                   </tr>

                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Decoding format
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        H.265+/H.265/H.264+/H.264/MPEG4
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Recording resolution
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        12 MP/8 MP/6 MP/5 MP/4 MP/3 MP/1080p/UXGA/720p/VGA /4CIF/DCIF/2CIF/CIF/QCIF
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Synchronous playback
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        8-ch
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Capability
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       16-ch@1080p (30 fps)
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Dual stream recording
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       Support
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Stream type
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Video, Video & Audio
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Audio compression
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        G.711ulaw/G.711alaw/G.722/G.726/MP2L2
                      </td>
                   </tr>

                    {/* HEADER */}
                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[15px] text-black font-bold bg-gray-100 text-center">
                       NETWORK
                      </td>
                   </tr>

                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Remote connections
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        128
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Network protocol
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        TCP/IP, DHCP, IPv4, IPv6, DNS, DDNS, NTP, RTSP, SADP, SMTP, SNMP, NFS, iSCSI, ISUP, UPnPTM, HTTP, HTTPS
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Network interface
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       1, RJ-45 10/100/1000 Mbps self-adaptive Ethernet interface
                      </td>
                   </tr>

                    {/* HEADER */}
                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[15px] text-black font-bold bg-gray-100 text-center">
                       PoE
                      </td>
                   </tr>

                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Interface
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        8, RJ-45 10/100 Mbps self-adaptive Ethernet interface
                      </td>
                   </tr>
                    <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       Power
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       120 W
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       Supported standard
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       IEEE 802.3 af/at
                      </td>
                   </tr>

                   {/* HEADER */}
                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[15px] text-black font-bold bg-gray-100 text-center">
                       AUXILIARY INTERFACE
                      </td>
                   </tr>

                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       SATA
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       2 SATA interfaces supporting hot-plug
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       Capacity
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       Up to 10 TB capacity for each disk
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       Alarm in/out
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       4/1
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       USB interface
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       Front panel: 1 × USB 2.0; Rear panel: 1 × USB 3.0
                      </td>
                   </tr>

                   {/* HEADER */}
                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[15px] text-black font-bold bg-gray-100 text-center">
                       GENERAL
                      </td>
                   </tr>

                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       Power supply
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       100 to 240 VAC, 50 to 60 Hz
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       Consumption (without HDD)	
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       15 W
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       Working temperature
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       -10 °C to 55 °C (14 °F to 131 °F)
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Working humidity	
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        10% to 90%
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       Chassis
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                       1U chassis
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Dimension (W × D × H)
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        385 × 315 × 52 mm ( 15.2″× 12.4″ × 2.0″)
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Weight (without HDD)
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        ≤ 2.7 kg (6.0 lb)
                      </td>
                   </tr>

                   {/* HEADER */}
                   <tr>
                      <td colSpan="5" className="border border-black p-2 text-[15px] text-black font-bold bg-gray-100 text-center">
                       CERTIFICATION
                      </td>
                   </tr>

                    <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        FCC
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        Part 15 Subpart B, ANSI C63.4-2014
                      </td>
                   </tr>
                   <tr>
                      <td colSpan="1" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        CE
                      </td>
                      <td colSpan="2" className="p-3 border-r border-gray-500 dark:border-gray-700 font-bold w-1/3 text-[15px] text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-800/80">
                        EN 55032:2015, EN 61000-3-2, EN 61000-3-3, EN 50130-4
                      </td>
                   </tr>
                 
                </tbody>
             </table>
          </div>

         

          {/* Tags */}
            <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="text-white border bg-[#FF5F31] px-2 py-1">HIKVISION</p>
            <p className="text-white border bg-[#FF5F31] px-2 py-1">CCTVs</p>
           </div> 

          {/* Share Section */}
          <SocialShare title="Check out this product!" />
        </main>

        {/* Sidebar */}
        <aside className="lg:w-1/4 space-y-6">
           <div className="bg-gray-300 dark:bg-[#1e1e22] p-6 rounded-xl shadow-sm border border-gray-400 dark:border-gray-800 transition-colors duration-300">
            <h3 className="font-bold text-black dark:text-blue-400 text-x mb-4 border-b border-black dark:border-gray-700 pb-2 transition-colors">More By HIKVISION</h3>
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

export default DS7608NXI;