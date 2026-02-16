import React from 'react';

const DahuaProducts = [
  {
    title: "DH-80840WANF 8MP 4K Starlight PTZ IP Security Camera with Analytics+ and 40x Optical Zoom",
    description: "Designed for outdoor use, this 4K surveillance camera has a 40x optical zoom and Analytics+ for real-time face recognition. Product Description:The 4K IR PTZ Dome camera features a 1/1.8-in STARVIS™",
    image: "/src/assets/image/DAHUA IMG/Starlight PTZ IP Security.png"
  },
  {
    title: "DH-PSDW81642M-A360-D440-S3 16MP Multi-Sensor 360° Panoramic PTZ Hubble WizMind Network Camera",
    description: "A high-speed surveillance camera that can provide a 360° panoramic view of your property.  Product Description:The Panoramic Network Camera + PTZ Camera can splice up to a 360° horizontal view",
    image: "/src/assets/image/DAHUA IMG/Multi Sensor 360 Panoramic.png"
  },
  {
    title: "DH-IPC-EBW81242N-AS-S2 12MP IR Fisheye WizMind Network Camera",
    description: "A surveillance camera that can provide 360° ideal for shopping centers, airports, and banks.  Product Description:With a fisheye lens, Dahua Fisheye series camera can realize 360° surveillance, and it is",
    image: "/src/assets/image/DAHUA IMG/Fisheye WizMind Network.png"
  },
  {
    title: "DH-IPC-PFW83242-A180-S2 4 x 8MP Multi-Sensor Panoramic Bullet WizMind Network Camera",
    description: "A panoramic surveillance camera that accurately detects human and vehicles and can provide perimeter protection. Product Description:The splicing camera supports a 180° panoramic view and 4-channel hardware splicing to realize",
    image: "/src/assets/image/DAHUA IMG/8MP Multisensor Panoramic Bullet WizMind.png"
  },
   {
    title: "DH-IPC-HDBW7442H-Z-S 4MP IR Dome WizMind Network Camera",
    description: "This surveillance camera can provide reliable image capture with this full portfolio of solutions.  Product Description:With an advanced deep learning algorithm, Dahua WizMind 7 Series network camera supports various intelligent",
    image: "/src/assets/image/DAHUA IMG/Dome WizMind Network Camera.png"
  },
  {
    title: "6CE445XANR 4MP IR 45x Starlight Analytics+ PTZ DomeCamera",
    description: "Featuring an Analytics+ function, this surveillance camera provides real-time perimeter protection. It also has a 45x optical zoom.  Product Description:The 4 MP Starlight PTZ Dome camera features offers Analytics+ functions",
    image: "/src/assets/image/DAHUA IMG/Starlight Analytics DomeCamera.png"
  },
  {
    title: "WizSense Series 52C432GBNR 4MP Network PTZ Dome Camera",
    description: "This surveillance camera features endless panning, a 0 to 90 tilt range, and 32x optical zoom.  Product Description:Securely monitor your surroundings with the WizSense Series 52C432GBNR 4MP Network PTZ Dome",
    image: "/src/assets/image/DAHUA IMG/WizSense Series 52C432GBNR.png"
  },
  {
    title: "WizSense Series 5A445GBNR 4MP Outdoor Network PTZ Dome Camera",
    description: "This surveillance camera features endless panning, a -15 to 90 tilt range, and 45x optical zoom.  Product Description:Securely monitor your surroundings with the WizSense Series 5A445GBNR 4MP Outdoor Network PTZ",
    image: "/src/assets/image/DAHUA IMG/WizSense Series 5A445GBNR.png"
  },
  {
    title: "6C3425XBPV 4MP Outdoor TiOC NEtwork PTZ Dome Camera",
    description: "Designed for outdoor use, this surveillance camera has an active alarm system featuring red and blue lights, and voice prompt to deter intruders.  Product Description:Designed for outdoor use, the 6C3425XBPV",
    image: "/src/assets/image/DAHUA IMG/Outdoor TiOC Network.png"
  },
  {
    title: "N83BP83 8MP Outdoor Dual-Lens TiOC Panoramic Network ePoE Bullet Camera",
    description: "A panoramic surveillance camera with Enhanced Night Color technology to provide illumination in complete darkness.   Product Description:Securely monitor your surroundings with the N83BP83 8MP Outdoor Dual-Lens TiOC Panoramic Network ePoE",
    image: "/src/assets/image/DAHUA IMG/Panoramic Network EP0E Bullet.png"
  },
  {
    title: "AcuPick N85FJ6Z 8MP Outdoor Network ePoE Turret Camera",
    description: "This surveillance camera has a varifocal lens for large coverage and built-in microphone to capture clear audio. Product Description:Monitor your surroundings with the AcuPick N85FJ6Z 8MP Outdoor Network ePoE Turret",
    image: "/src/assets/image/DAHUA IMG/AcuPick N85FJ6Z 8MP.png"
  },
  {
    title: "AcuPick N45FJ62 4MP Outdoor Network ePoE Turret Camera",
    description: "With built-in integrated ePoE, this cost-effective camera has two IR LEDs for better night vision coverage.  Product Description:Monitor your surroundings with the AcuPick N45FJ62 4MP Outdoor Network ePoE Turret Camera",
    image: "/src/assets/image/DAHUA IMG/AcuPick N45FJ62 4MP.png"
  },
  {
    title: "N85EUN2 8MP ePoE Night Color Network Turret Camera",
    description: "A cost-effective surveillance camera that can capture 4K UHD videos and record full color video in low-light conditions. Product Description:Monitor an indoor or outdoor area with the N85EUN2 8MP ePoE",
    image: "/src/assets/image/DAHUA IMG/N85EUN2 8MP ePoE Night Color.png"
  },
  {
    title: "N45EYN2 4MP ePoE Night Color 2.0 Network Dome Camera",
    description: "A highly reliable surveillance camera that can capture full color video in low-light conditions. Product Description:Monitor an indoor or outdoor area with the N45EYN2 4MP ePoE Night Color 2.0 Network",
    image: "/src/assets/image/DAHUA IMG/N45EYN2 4MP ePoE Night Color.png"
  },
  {
    title: "AcuPick N85FL6Z4 8MP Outdoor Network ePoE Dome Camera",
    description: "With built-in integrated ePoE, this cost-effective camera has a varifocal lens for a wide, horizontal field of view.  Product Description:Monitor your surroundings with the AcuPick N85FL6Z4 8MP Outdoor Network ePoE",
    image: "/src/assets/image/DAHUA IMG/AcuPick N85FL6Z4 8MP Dome Camera.webp"
  },
  {
    title: "N85CL5Z 4K UHD Outdoor ePoE Network Dome Camera",
    description: "A surveillance camera with varifocal lens for a wider field of view and 4x optical zoom.  Product Description:The N85CL5Z 4K UHD Outdoor ePoE Network Dome Camera from Dahua Technology uses",
    image: "/src/assets/image/DAHUA IMG/N85CL5Z 4k UHD Outdoor EPoE.png"
  },
  {
    title: "N85EFN2 8MP Outdoor ePoE Night Color 2.0 Network Bullet Camera",
    description: "Built for both indoor and outdoor use, this highly reliable camera can capture 4K UHD videos.  Product Description:Monitor an indoor or outdoor area with the N85EFN2 8MP ePoE Night Color",
    image: "/src/assets/image/DAHUA IMG/N85EFN2 8MP Outdoor.png"
  },
  {
    title: "AcuPick N85FB6Z4 8MP Outdoor Network ePoE Bullet Camera",
    description: "With a varifocal lens for a wider field of view, this surveillance camera also has two-way audio thanks to its built-in microphone. Product Description:Monitor an indoor or outdoor area with",
    image: "/src/assets/image/DAHUA IMG/AcuPick N85FB6Z4 8MP Outdoor.png"
  },
  {
    title: "DH-S4228-24GT-360 28-Port Gigabit PoE++ Compliant Compliant Managed Network Switch",
    description: "A high-speed network switch capable of supporting up to 28 devices with its ports.  Product Description:Increase your business’s capacity for advanced IP security cameras, access points, and other power-over-Ethernet compatible",
    image: "/src/assets/image/DAHUA IMG/Compliant Managed Network Switch.png"
  },
  {
    title: "DH-PFS3010-8GT-96 8-Port Gigabit PoE-Compliant Unmanaged Network Switch",
    description: "A budget-friendly network switch that has a plug-and-play feature for easier use.  Product Description:Quickly expand your business’s network capacity to support powered devices, such as IP security cameras and access",
    image: "/src/assets/image/DAHUA IMG/Compliant Unmanaged Network.png"
  },
  {
    title: "DH-S4220-16GT-240 16-Port Gigabit PoE++ Compliant Managed Network Switch",
    description: "A high-performance network switch capable of supporting up to 16 devices with its ports.  Product Description:Grow your business’s network capacity with the DH-S4220-16GT-240 16-Port Gigabit PoE++ Complaint Managed Network Switch",
    image: "/src/assets/image/DAHUA IMG/Compliant Managed.png"
  },
  {
    title: "DH-S4210-8GT-110 8-Port Gigabit PoE Compliant Managed Network Switch",
    description: "A budget-friendly network switch capable of supporting security devices and access points. It features 8 ports to support at least 8 devices. Product Description:Quickly expand your business’s network capacity to",
    image: "/src/assets/image/DAHUA IMG/Port Gigabit PoE Compliant.png"
  },
  {
    title: "DH-LR2110-8ET-120 10-Port Unmanaged Switch with 8-Port ePoE",
    description: "Designed for fast transmission of data, this network switch can accommodate up to 8 devices. Product Description:DH-LR2110-8ET-120 is a 8-Port ePoE switch, which is able to realize PoE transmission over",
    image: "/src/assets/image/DAHUA IMG/Port Unmanaged Switch.png"
  },
  {
    title: "DH-IS4210-8GT-120 8-Port Gigabit PoE++ Compliant Managed industrial Switch",
    description: "This industrial network switch is designed to withstand harsh environments to constantly power security cameras. Product Description:Capable of operating in -40 to 167°F temperatures, the DH-IS4210-8GT-120 8-Port Gigabit PoE++ Compliant",
    image: "/src/assets/image/DAHUA IMG/Compliant Managed Industrial Switch.png"
  },
  {
    title: "N84B5N 32-Channel AcuPick 8k PoE Network Video Recorder",
    description: "Powered with a powerful processor and built-in analytics chip, this network video recorder can accommodate up to 32 channels. Product Description:The 32-Channel AcuPick 8K Network Video Recorder from Dahua Technology",
    image: "/src/assets/image/DAHUA IMG/32-Channel Network Video Recorder.png"
  },
  {
    title: "N82B2P 8-Channel AcuPick 8k PoE Network Video Recorder",
    description: "Powered with a powerful processor and built-in analytics chip, this network video recorder can accommodate up to 8 channels. Product Description:The 8-Channel AcuPick 8K 8 PoE Network Video Recorder from",
    image: "/src/assets/image/DAHUA IMG/8-Channel Network Video Recorder.png"
  },
  {
    title: "1A404DBNR 4MP Outdoor Network Mini Dome Camera with Night Visio",
    description: "This high-performance surveillance camera has 2 IR LEds for night vision, two-way audio, and 4x optical zoom for better viewing.  Product Description:Securely monitor your surroundings with the WizSense Series 1A404DBNR",
    image: "/src/assets/image/DAHUA IMG/Outdoor Network Mini Dome Camera.png"
  },
  {
    title: "N43CJ6Z 4MP Enhanced Straight Network Eyeball Camera",
    description: "Designed to operate in any lighting condition, this surveillance camera is ideal for various outdoor applications. Product Description:The Dahua 4MP Enhanced Starlight Network Vari-focal Eyeball Camera is ideal for a",
    image: "/src/assets/image/DAHUA IMG/Straight Network Eyeball.png"
  },
   {
    title: "N43CL62 4MP Outdoor Network Dome Camera with Night Vision",
    description: "This surveillance camera has 3 IR LEDs for night vision purposes and has two-way audio thanks to its built-in microphone.  Product Description:Monitor your surroundings with the white WizSense Series N43CL62",
    image: "/src/assets/image/DAHUA IMG/Outdoor Network Dome Camera with Night Vision.png"
  },
  {
    title: "N22AL12 2 MP Outdoor Network Mini Dome Camera with Night Vision",
    description: "A compact, surveillance camera can capture full HD security video and is designed for outdoor use.  Product Description:Capture Full HD security video with the Lite Series N22AL12 2MP Outdoor Network",
    image: "/src/assets/image/DAHUA IMG/Outdoor Network Mini Dome Camera with Night Vision.png"
  },
   {
    title: "N43CF6Z WizSense 4MP Outdoor Network Bullet Camera with Night Vision",
    description: "This cost-effective surveillance camera has 4 IR LEDs for night vision purposes and has two-way audio thanks to its built-in microphone.  Product Description:Monitor an indoor or outdoor area with the",
    image: "/src/assets/image/DAHUA IMG/N43CF6z WizSense 4MP.png"
  },
  {
    title: "N43BX8Z 4MP Outdoor TiOC Network Bullet Camera with Night Vision",
    description: "A cost-effective surveillance camera with night vision range and 2 white LEDs for recording full color video. Product Description:Monitor an indoor or outdoor area with the N43BX8Z 4MP TiOC Network",
    image: "/src/assets/image/DAHUA IMG/N43BX8Z 4MP Outdoor TiOC.png"
  },
  
];

const ProductCard = ({ title, description, image }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer">
    {/* Enhanced Image Container Size */}
    <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-5 flex items-center justify-center h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-110" 
      />
    </div>
    <div className="flex-grow">
      <h3 className="text-[#1a365d] font-semibold text-lg uppercase mb-3 leading-tight tracking-wide">
        {title}
      </h3>
      <p className="text-gray-600 text-xl leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const Dahua = () => {
  return (
    <div className="bg-[#e9eff6] min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* Changed from font-black to font-normal/medium */}
          <h2 className="text-lg md:text-5xl lg:text-5xl font-medium text-[#2257a0] mb-6 tracking-tight">
           CCTVs – Dahua
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
        </header>

        {/* Responsive Grid with improved spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {DahuaProducts.map((p, idx) => (
            <ProductCard key={idx} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dahua;