import React from 'react';
import { 
  Users, Search, PenTool, 
  Truck, CheckCircle, Settings, 
  Phone, Mail, MapPin 
} from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const QuickAlert = () => {

  const otherServices = [
    { name: 'Vehicle Barrier System and Pedestrian Barriers', path: '/products/magnetic' },
    { name: 'Intrusion/ Burglary Alarm Systems', path: '/products/paradox' },
    { name: 'CCTVs', path: '/products/dahua' },
    { name: 'Detection Systems', path: '/products/gilardoni' },
    { name: 'Fire Alarm', path: '/products/detnov' },
    { name: 'Audio-Video Intercom & PA-BGM', path: '/products/honeywell' },
    { name: 'Vesda System (Aspirating Smoke Detection)', path: '/our-products/vesda/vesda-eves' },
    { name: 'Forensic Examination', path: '/products/foster-freeman' },
    { name: 'Guard Tour Systems', path: '/products/ebs' },
    { name: 'Hotel Locking Systems and Hotel Safes', path: '/products/onity' },
    { name: 'Parking Management / Parking Guidance System', path: '/products/cass' },
    { name: 'Quick Alert', path: '/products/quick-alert' }
  ];

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header Banner */}
      <header className="bg-blue-100 text-white text-center py-6 shadow-md">
        <h1 className="text-4xl md:text-7xl text-[#2257a0] mb-6 drop-shadow-sm tracking-tight">
          QUICKALERT
        </h1>
      </header>

      {/* CHANGED: Switched to lg:grid-cols-5 to allow better flex ratio for sidebar */}
      <main className="max-w-6xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-5 gap-8">  
        
        {/* Main Content Area (3/5 width) */}
        <div className="lg:col-span-3 space-y-8">
          <div className='main_content'>
            <div className='main-area_container'>
              <div className='content_wrapper mb-8 bg-slate-300 rounded shadow-lg p-6'>
                <section className="relative h-64 md:h-80 bg-black rounded overflow-hidden shadow-xl">
                    <img 
                       src="/assets/image/QUICK IMG/247365.jpg"
                       alt="Control Room" 
                       className="w-full h-full object-cover opacity-60"
                       />
                    <div className="absolute inset-0 flex flex-col justify-center px-8">
                      <h2 className="text-white text-2xl md:text-3xl font-bold">
                        24 - 7 - 365 CENTRAL MONITORING STATION
                      </h2>
                     <p className="text-green-400 font-semibold">
                      A Guard-All Company
                     </p>
                    </div>
                </section>

                  <div className='catalog_wrapper'>
                      <div className='catalog_image'>
                        <div className='catalog-image_wrapper'>
                          <img src="/assets/image/QUICK IMG/quickie.jpg" alt="Quick Alert Catalog" className='catalog_img mb-4 mt-4' />
                        </div>
                      </div>
                  </div>

                  <section className=" p-6 rounded shadow-sm border-l-4 border-red-500">
                    <h2 className="text-red-600 font-bold mx-auto mb-5">
                      Standpoint
                    </h2>
                    <p className="text-gray-700 text-xl leading-relaxed">
                        Quick Alert is a full service Central Monitoring Station (CMS) devoted to monitoring a range of alarms including; intrusion, fire and panic alarms. QuickAlert is a wholly owned subsidiary of Guard-All Electronic Security Systems, Inc. QuickAlert uses state-of-the-art equipment to monitor our clients’ premises 24-hours a day nationwide from our headquarters in Makati.
                    </p>
                    <ul className="mt-4 space-y-1 text-lg text-gray-600 list-disc list-inside">
                       <li>Central Monitoring Station</li>
                       <li>Lifeline Ambulance Service</li>
                       <li>CMS Remote Video Monitoring</li>
                    </ul>
                  </section>

                  <section className="space-y-4 mt-20">
                    <h2 className="text-red-600 font-bold uppercase tracking-widest mb-3 text-2xl">
                      Quick Alert Services
                    </h2> 

                    <ServiceCard 
                      title="Central Monitoring Station" 
                      image="/assets/image/QUICK IMG/central.jpg"
                      desc="We ensure your safety and security via surveillance 24/7/365."
                      className="h-full w-full object-cover rounded-lg shadow-md" 
                    />

                    <ServiceCard 
                      title="Lifeline Ambulance" 
                      image="/assets/image/QUICK IMG/ambulance.jpg"
                      desc="Dedicated to providing state-of-the-art emergency medical services."
                      className="h-full w-full object-cover rounded-lg shadow-md"
                    />
                    <ServiceCard 
                      title="CMS Remote Video Monitoring" 
                      image="/assets/image/QUICK IMG/cms_remote.jpg"
                      desc="Dedicated to providing state-of-the-art emergency medical services."
                      className="h-full w-full object-cover rounded-lg shadow-md"
                    />
                  </section>
              </div>
            </div> 
          </div>    
        </div>
        
        {/* Sidebar Area (2/5 width) - Wider & roomier */}
        <aside className="lg:col-span-2 space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-bold text-xl text-gray-800 border-b pb-3 mb-4">
              Other Services
            </h3>
            <ul className="space-y-3.5">
              {otherServices.map((service, i) => (
                <li key={i} className="text-base md:text-lg text-gray-600 flex items-start">
                  {/* flex-shrink-0 keeps the bullet from compressing on text wrapping */}
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                  <NavLink 
                    to={service.path} 
                    className={({ isActive }) => 
                      `hover:text-blue-600 transition-colors block ${isActive ? 'text-blue-600 font-bold' : ''}`
                    }
                  >
                    {service.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Card */}
          <div
            className="relative min-h-[260px] overflow-hidden rounded-xl p-8 text-white shadow-md bg-cover bg-center bg-blend-multiply bg-blue-900/85"
            style={{ backgroundImage: "url('/dist/assets/image/Our Products/quickalert.jpg')" }}
          >
            <div className="relative z-10 flex flex-col justify-between h-full">
               <div>
                 <h3 className="mb-4 text-2xl font-bold leading-tight tracking-wide">
                   Secure Your Peace Of Mind Today
                 </h3>
                 <p className="mb-6 text-sm text-gray-200 font-medium leading-relaxed">
                   Contact Guard-All now for a customized security solution that protects what matters most.
                 </p>
               </div>
                     
              <NavLink 
                 to="/contacts" 
                 className="inline-block w-full rounded-xl bg-[#0f3e90] px-6 py-3 text-center text-sm font-semibold tracking-wider text-white transition-colors hover:bg-[#ff5f31]"
              >
                CONTACT US TODAY
              </NavLink>
            </div>
          </div>
        </aside>

      </main>

      {/* Footer / Tags */}
      <footer className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="flex flex-wrap gap-2 mb-6 text-xs md:text-lg ">
          {['Access Control', 'Intrusion Control', 'Object Inspection', 'Thermal Camera','Vehicle Security'].map(tag => (
            <span key={tag} className="bg-[#ff5f31] text-white px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </footer>

    </div>
  );
};

// Sub-component for Service Cards
const ServiceCard = ({ title, image, desc }) => (
  <div className="relative h-48 rounded overflow-hidden group shadow-md">
    <img src={image} alt={title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center p-8">
      <div className="max-w-xs text-white">
        <h4 className="font-bold text-lg uppercase mb-1">{title}</h4>
        <p className="text-xs opacity-90">{desc}</p>
      </div>
    </div>
  </div>
);

export default QuickAlert;