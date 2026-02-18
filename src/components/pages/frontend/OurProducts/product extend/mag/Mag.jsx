import React from 'react';

const magProducts = [
  {
    title: "TB01 Touchless Button",
    description: "With a simple and compact design, this device allows exit without needing to touch any button. Access is executed via an infrared sensor human is detected to be simple and compact.",
    image: "/src/assets/image/MAG IMG/TB01 Touchless.png"
  },
  {
    title: "FR330 Face Recognition Reader",
    description: "A powerful face recognition reader with full HD display for efficient working. Fast recognition rate with dynamic face recognition makes it faster and more convenient.",
    image: "/src/assets/image/MAG IMG/FR330 FACE RECOGNITION.png"
  },
  {
    title: "FR320 Face Recognition Reader",
    description: "A dynamic face recognition reader with ultra-fast technical tracking for faster and accurate face detection. Built-in advanced technology.",
    image: "/src/assets/image/MAG IMG/FR320 FACE RECOGNITION.png"
  },
  {
    title: "FR300 Face Recognition Reader",
    description: "A mid-level face recognition reader that features basic and reliable outdoor access. Built with an edge-core recognition reader.",
    image: "/src/assets/image/MAG IMG/FR300 FACE RECOGNITION.png"
  },
  {
    title: "DFA Fingerprint With Optical Sensor",
    description: "A door access control system that uses high-performance fingerprint reader technology for a robust optical sensor.",
    image: "/src/assets/image/MAG IMG/DF1A FINGERPRINT WITH OPTICAL SENSOR.png"
  },
  {
    title: "CDULI33L UHF & EM Hybrid Card",
    description: "A dual frequency tag compatible with UHF and EM range readers. Product design allows for both high and low frequency use.",
    image: "/src/assets/image/MAG IMG/CDULI33L UHF & EM HYBRID.png"
  },
  {
    title: "CDUE130L Dual Frequency UHF & EM Hybrid Card",
    description: "A dual frequency keycard with 0.84mm thickness and can be used for AR300U mid range readers. UHF and EM (125Khz) support.",
    image: "/src/assets/image/MAG IMG/CDUE130L DUAL FREQUENCY UHF.png"
  },
  {
    title: "CDS18 EM Proximity Card",
    description: "A 125Khz proximity card with 1.8mm thickness. Printed wiegand number makes programming card to system easier.",
    image: "/src/assets/image/MAG IMG/CDS18 EM PROXIMITY CARD.png"
  },
  {
    title: "AR401RO16 16-Channel Digital Output Module",
    description: "Designed to accommodate up to 16 channels, this card reader can connect up to 16 lift levels for elevator control.",
    image: "/src/assets/image/MAG IMG/AR401RO16 16-CHANNEL.png"
  },
  {
    title: "AR837EF Direct TCPIP Fingerprint with LCD & Keypad Panel",
    description: "A contemporary door access that has a manual keypad, LCD panel, and fingerprint biometric access. High performance reader.",
    image: "/src/assets/image/MAG IMG/AR837EF DIRECT TCPIP FINGERPRINT.png"
  },
  {
    title: "AR837E Direct TCPIP LCD and Keypad Panel",
    description: "A metallic and compact door access with manual keypad and large LCD design typically installed at the door to restrict access.",
    image: "/src/assets/image/MAG IMG/AR837E DIRECT TCPIP LCD AND KEYPAD.png"
  },
  {
    title: "AR725E Direct TCPIP Illuminated Touch Keypad Panel",
    description: "A shiny silverblack door access with built-in touchpad and patented anti-vibration relay for pedestrian gates.",
    image: "/src/assets/image/MAG IMG/AR725E DIRECT TCPIP ILLUMINATED.png"
  },
  {
    title: "AR723U Soyal Wiegand Readers",
    description: "Minimalistic design allows it to look simple but elegant. Designed for anti-passback function as an exit reader.",
    image: "/src/assets/image/MAG IMG/AR723U SOSYAL WIEGAND READERS .png"
  },
  {
    title: "AR727H Standard Controller with Built-In Reader",
    description: "A cost-effective door access with manual keypad, LCD screen, and easy to use software for turnstiles and parking.",
    image: "/src/assets/image/MAG IMG/AR727H STANDARD CONTROLLER.png"
  },
  {
    title: "AR721H Basic Controller with Built-In Reader",
    description: "A cost-effective and compact door access with manual keypad, efficiently optimized for low budget security systems.",
    image: "/src/assets/image/MAG IMG/AR721H BASIC CONTROLLER.png"
  },
  {
    title: "AR327H Vandal Resistant Illuminated Touch-Panel Keypad",
    description: "A water and vandal-resistant door access that has a built-in touchpad and can even read proximity cards.",
    image: "/src/assets/image/MAG IMG/AR327H VANDAL RESISTANT.png"
  },
  {
    title: "AR331HT Weather Proof Illuminated Touch-Panel Keypad",
    description: "A weatherproof-card door access with built-in touchpad and can read proximity cards for contactless access.",
    image: "/src/assets/image/MAG IMG/AR331HT WEATHER PROOF.png"
  },
  {
    title: "AR331HS Weather Proof Illuminated Touch-Panel Keypad",
    description: "With a sleek design and silverblack color, this contactless door access can read EM or Mifare proximity cards.",
    image: "/src/assets/image/MAG IMG/AR331HS WEATHER PROOF ILLUMINATED.png"
  },
  {
    title: "AR331U Weather Proof Illuminated Touch-Panel Keypad",
    description: "Metallic SilverBlack color concept further enhances the modern contemporary impression of your security setup.",
    image: "/src/assets/image/MAG IMG/AR331U WEATHER PROOF.png"
  },
  {
    title: "AR321H Vandal Resistant Illuminated Touch-Panel Keypad",
    description: "A compact, touchpad door access with anti-vandalism design to prevent damage or tampering in public areas.",
    image: "/src/assets/image/MAG IMG/AR321H VANDAL RESISTANT.png"
  }
];

const ProductCard = ({ title, description, image }) => (
  <div className="group bg-white border border-gray-200 rounded-xl p-5 flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
    {/* Larger, Responsive Image Container */}
    <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-5 flex items-center justify-center h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110" 
      />
    </div>
    
    <div className="flex-grow">
      {/* Normalized weight title */}
      <h3 className="text-[#1a365d] font-semibold text-sm uppercase mb-3 leading-tight tracking-wide min-h-[2.5rem]">
        {title}
      </h3>
      <p className="text-gray-600 text-xl leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const Mag = () => {
  return (
    <div className="bg-[#e9eff6] min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* Heading with normal font weight */}
          <h2 className="text-lg md:text-5xl lg:text-5xl font-medium text-[#0d3874] mb-6 tracking-tight">
            Access Control System – MAG
          </h2>
          <div className="h-1 w-24 bg-[#2257a0] mx-auto rounded-full opacity-20"></div>
        </header>

        {/* Responsive Grid with enhanced gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {magProducts.map((p, idx) => (
            <ProductCard key={idx} {...p} />
          ))}
        </div>

        <footer className="mt-20 pt-10 border-t border-gray-300 text-center text-gray-500 text-sm tracking-widest uppercase">
          MAG Security Solutions | Innovative Door Access
        </footer>
      </div>
    </div>
  );
};

export default Mag;