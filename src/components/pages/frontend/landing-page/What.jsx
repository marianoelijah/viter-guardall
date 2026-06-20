import React from 'react';
import { HardHat, Settings, ShieldCheck, Briefcase } from 'lucide-react';

const What = () => {
  const services = [
    {
      icon: <HardHat className="w-8 h-8 text-white" />,
      title: "DESIGN & ENGINEERING",
      description: "We plan and design your safety and security with the best engineers."
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: "INSTALLATION",
      description: "Our Security Experts can install physical alarms and surveillance to give you a total customer satisfaction."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "SECURITY EQUIPMENT",
      description: "We provide world-class security systems to ensure your home or business gets only the best."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      title: "AFTER SALES & MAINTENANCE",
      description: "Our top engineers, technicians, and support staff are committed to enhancing your security systems through effective technical support."
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-7xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            What We Do
          </h2>
          <p className="text-gray-600 text-xl max-w-4xl leading-relaxed">
            We are dedicated to deliver you a holistic approach to electronic security. 
            Our attention to service and 24/7 team will ensure that your company's 
            security gets the attention it needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-start group">
              {/* Icon Circle */}
              <div className="w-16 h-16 bg-[#1e40af] hover:bg-[#ff5f31] rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight uppercase min-h-[56px] flex items-center">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default What;