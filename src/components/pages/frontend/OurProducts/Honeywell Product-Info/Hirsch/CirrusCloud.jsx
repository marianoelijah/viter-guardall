import React from 'react';
import { Share2, Facebook, Linkedin, Mail, MessageCircle, Twitter } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';

const CirrusCloud = () => {
  const specs = [
    { feature: "Government-grade secure connectivity from server to panels", description: "Building on Hirsch's robust history of protecting the most secure government facilities, Velocity Cirrus provides secure connectivity between cloud servers and onsite equipment." },
    { feature: "Device Control and StatusViewer", description: "Credentials: Up to 500,000 per controller when using a SNIB3. Control zones: 255 per controller. Door groups: 128 per controller. Holiday schedules: 4 (366 days x 2 years) per controller. Expansion input and/or output boards available per controller. Status viewer can be configured to monitor status of system components." },
    { feature: "Alarm viewer", description: "Monitor and acknowledge active system alarms, such as Forced Entry, DOTL (door open too long), and more." },
    { feature: "Event viewer", description: "View system events as they occur with as much granularity as desired." },
    { feature: "Enrollment manager", description: "Comprehensive enrollment tool for managing individuals, groups, credentials, enrollment, access, and printing." },
    { feature: "Advanced reporting", description: "Choose from over 90 system reports that allow administrators to customize multiple parameters to extract information from the system's usage and history." },
    { feature: "Customizable threat levels", description: "Manage system defined threat levels and and threat authority levels to determine how credentials and door groups are affected to accommodate a wide range of situations." },
    { feature: "Who's inside", description: "Protect against credentials being passed back from the secure side of a door to allow unauthorized access, while offering flexible control to accommodate a variety of business policies." },
    { feature: "Photo call-up", description: "Select up to 10 doors to monitor with photo call-up on access granted or denied events and have portraits displayed from Cirrus as the access events occur." },
    { feature: "Industry-leading reader compatibility", description: "Velocity Cirrus and the Hirsch platform accommodates an incredible range of reader industry-standard hardware, including MATCH2, Wiegand and OSDP readers, biometric readers, and the ability to accommodate a variety of credential formats." },
  ];

  return (
    <>
    <Header/>
     <div className="bg-gray-100 min-h-screen font-sans">
      {/* Blue Header Banner */}
      <header className="bg-[#7f95b8] py-12 text-center shadow-md">
        <h1 className="text-white text-4xl font-bold">Cirrus Cloud Access Control</h1>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto bg-gray-100 mt-8 p-8 shadow-sm rounded-sm">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Left Column: Product Info */}
          <div className="md:w-2/3 text-gray-800 leading-relaxed">
            <p className="mb-6 text-gray-600">A secure, cloud-based electronic access control and security management solution.</p>
            
            <section className="mb-6">
              <h2 className="font-bold text-xl mb-2">Product Description:</h2>
              <p className="mb-4 text-[17px]">
                Velocity Cirrus manages access control and security operations from single high-secure rooms to 
                multi-building, multi-location campuses. Control doors, gates, turnstiles, elevators, and other building 
                equipment, monitor users moving around a facility, prevent unwanted access, maintain compliance, 
                and provide a robust audit trail.
              </p>
              <p className="text-[17px]">
                As a hosted Access Control as a Service (ACaaS) solution, it is always maintained on the latest iteration 
                of Identiv's world-class physical access software platform without the hassle of upgrading on premise systems.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-bold text-xl mb-2">Product Features:</h2>
              <ul className="list-disc ml-5 text-[17px] space-y-1">
                <li>As a hosted Access Control as a Service (ACaaS) solution, it is always maintained on the latest iteration of Identiv's world-class physical access software platform without the hassle of upgrading on premise systems.</li>
                <li>Users no longer need to manage local Velocity software or server hardware.</li>
                <li>Offers benefits of high-availability, scalability, and dependability.</li>
                <li>Lower costs, lower maintenance, and the assurance of always having the latest version.</li>
              </ul>
            </section>

            {/* Technical Specification Table */}
            <section>
              <h2 className="font-bold text-xl mb-4">Technical Specification:</h2>
              <div className="border border-gray-500">
                <div className="grid grid-cols-3 bg-gray-100 font-bold text-[17px] border-b border-gray-500">
                  <div className="p-2 border-r border-gray-500">Feature</div>
                  <div className="p-2 col-span-2">Description</div>
                </div>
                {specs.map((spec, index) => (
                  <div key={index} className="grid grid-cols-3 text-[17px] border-b border-gray-500 last:border-b-0">
                    <div className="p-2 border-r border-gray-500 font-bold bg-gray-100">{spec.feature}</div>
                    <div className="p-2 col-span-2">{spec.description}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tags and Share */}
            <div className="mt-8 flex gap-3 mb-5 p-4 rounded">
            <p className="text-white border bg-red-500 px-2 py-1">Hirsch</p>
            <p className="text-white border bg-red-500 px-2 py-1">Access Control System</p>
           </div> 

             <SocialShare title="Check out this product!" />
          </div>

          {/* Right Column: Sidebar */}
          <aside className="md:w-1/3">
            <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
            <h3 className="text-xl font-bold text-black mb-4 border-b pb-1">More By HIRSCH</h3>
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

export default CirrusCloud;