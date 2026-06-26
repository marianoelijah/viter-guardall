import React from 'react';
import { Share2, Facebook, Linkedin, Mail, MessageCircle, Twitter } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';
import React from 'react';


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
        <h1 className="text-5xl md:text-5xl font-bold max-w-5xl mx-auto leading-tight text-white">Cirrus Cloud Access Control</h1>
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
            <p className="text-white border bg-[#ff5f31] px-2 py-1">Hirsch</p>
            <p className="text-white border bg-[#ff5f31] px-2 py-1">Access Control System</p>
           </div> 

             <SocialShare title="Check out this product!" />
          </div>

          {/* Right Column: Sidebar */}
          <aside className="md:w-1/3">
            <div className="bg-gray-300 p-6 rounded shadow-sm border border-gray-400 mb-10">
                      <h3 className="font-bold text-black text-xl mb-4 border-b border-black pb-2 uppercase">More By HIRSCH</h3>
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

            {/* Blue CTA Card */}
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
      </main>
    </div>
    <Footer />
    </>
   
  );
};

export default CirrusCloud;