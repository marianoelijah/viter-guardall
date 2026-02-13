import React from 'react';

const magProducts = [
  {
    title: "TB01 Touchless Button",
    description: "With a simple and compact design, this device allows exit without needing to touch any button. Access is executed via an infrared sensor human is detected to be simple and compact.",
    image: "https://via.placeholder.com/150?text=TB01+Button"
  },
  {
    title: "FR330 Face Recognition Reader",
    description: "A powerful face recognition reader with full HD display for efficient working. Fast recognition rate with dynamic face recognition makes it faster and more convenient.",
    image: "https://via.placeholder.com/150?text=FR330+Face"
  },
  {
    title: "FR320 Face Recognition Reader",
    description: "A dynamic face recognition reader with ultra-fast technical tracking for faster and accurate face detection. Built-in advanced technology.",
    image: "https://via.placeholder.com/150?text=FR320+Face"
  },
  {
    title: "FR300 Face Recognition Reader",
    description: "A mid-level face recognition reader that features basic and reliable outdoor access. Built with an edge-core recognition reader.",
    image: "https://via.placeholder.com/150?text=FR300+Face"
  },
  {
    title: "DFA Fingerprint With Optical Sensor",
    description: "A door access control system that uses high-performance fingerprint reader technology for a robust optical sensor.",
    image: "https://via.placeholder.com/150?text=DFA+Fingerprint"
  },
  {
    title: "CDULI33L UHF & EM Hybrid Card",
    description: "A dual frequency tag compatible with UHF and EM range readers. Product design allows for both high and low frequency use.",
    image: "https://via.placeholder.com/150?text=Hybrid+Card"
  },
  {
    title: "AR401RO16 16-Channel Digital Output Module",
    description: "Designed to connect up to 16 channels, this card reader can connect up to 16 floors and can easily interface with elevator relay systems.",
    image: "https://via.placeholder.com/150?text=Elevator+Module"
  },
  {
    title: "AR837EF Direct TCP/IP Fingerprint With LCD & Keypad",
    description: "A contemporary door access that has a manual keypad, LCD screen, and fingerprint sensor for secure, multi-layer access.",
    image: "https://via.placeholder.com/150?text=AR837EF"
  },
  {
    title: "AR725E Direct TCP/IP Illuminated Touch Keypad",
    description: "A slim and stylish door access with built-in touch sensor and keypad backlighting for visibility in dark areas.",
    image: "https://via.placeholder.com/150?text=AR725E"
  }
];

const ProductCard = ({ title, description, image }) => (
  <div className="bg-white border border-gray-200 rounded shadow-sm p-3 flex flex-col h-full">
    <div className="bg-white border border-gray-100 rounded p-4 mb-3 flex items-center justify-center h-44 overflow-hidden">
      <img src={image} alt={title} className="max-h-full max-w-full object-contain" />
    </div>
    <div className="flex-grow">
      <h3 className="text-[#1a365d] font-bold text-xs uppercase mb-2 leading-tight">
        {title}
      </h3>
      <p className="text-gray-500 text-[11px] leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const Mag = () => {
  return (
    <div className="bg-[#e9eff6] min-h-screen py-12 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-[#1a365d] text-2xl font-bold border-b-2 border-blue-800 pb-2 inline-block uppercase tracking-wider">
            Access Control System – MAG
          </h1>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {magProducts.map((p, idx) => <ProductCard key={idx} {...p} />)}
        </div>
      </div>
    </div>
  );
};

export default Mag;