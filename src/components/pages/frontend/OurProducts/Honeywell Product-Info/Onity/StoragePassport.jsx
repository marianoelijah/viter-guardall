import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import SocialShare from '../../Reusable/SocialShare';

const StoragePassport = () => {
  const productData = {
    title: "Self Storage Passport Locking Solution",
    subtitle: "A compact, easy-to-install lock designed to be accessed with DirectKey mobile access. ",
    description: "The Passport self-storage locking solution from Onity is a secure and reliable ecosystem designed to meet the needs of self-storage facilities and tenants. Onity’s PassPortal software is a cloud-based system designed to deliver simplicity, efficiency and tenant satisfaction. PassPortal software provides access to locks and other Onity approved devices for self-storage properties, allowing staff to create and manage mobile key credentials.",
    features: [
      "Two-bolt and four-bolt design accommodates common door models with no new drilling",
      "Reversible design allows installation in right-hand or left-hand configurations",
      "Three-year, best-in-class battery life in a tamper-proof, separate compartment",
      "Hardened steel housing and interior components perform from -20° C to 70° C",
      "LED indicator light signals lock status, events, and errors",
      "Built for attack resistance"
    ],
    moreByBrand: [
      "Onity DirectKey with Serene",
      "MAD-401 and MAD-402 Series Addressable Modules",
      "INR 415 256-Channel 12 Bay RAID",
      "GNR 340 100-Channel Tower Standalone",
      "ENR 130 16-Channel Desktop Standalone NVR",
      "Z86 Outdoor Network Dome Camera"
    ]
  };

  return (
    <>
      <Header />
      <div className="bg-gray-300 min-h-screen font-sans text-slate-800">
        <header className="bg-[#7f95b8] text-white py-14 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold max-w-5xl mx-auto uppercase tracking-wider">
            {productData.title}
          </h1>
        </header>

        <main className="max-w-6xl mx-auto bg-gray-200 shadow-xl my-10 p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-3">
              <p className="text-[15px] text-black mb-6">{productData.subtitle}</p>
              
              <section className="mb-8">
                <h2 className="font-bold text-xl text-black mb-2 border-b-2 border-gray-100 pb-1 inline-block">Product Description:</h2>
                <p className="text-base text-black leading-relaxed mt-2">{productData.description}</p>
              </section>

              <section className="mb-10">
                <h2 className="font-bold text-xl text-black mb-2">Product Features:</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 list-disc text-black ml-5 text-[15px]">
                  {productData.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </section>

                {/* Technical Spec Table */}
              <section className="overflow-x-auto">
                <h2 className="font-bold text-xl mb-4">Technical Specification:</h2>
                <table className="w-full text-[15px] text-black border-collapse border border-black">
                  
                  <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                        Construction
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                        Stainless steel housing; Fits most common roll up doors;
                        Reversible, can be installed on either left or right-hand doors;
                        2- and 4-bolt options to match existing hole patterns, no drilling through doors;  <br/>
                        Utilizes the same mounting locations of existing locks*; <br/>
                        No exposed hardware outside the unit;Attack-resistant latch;
                        Battery powered;Fast open reaction time, no need for tap-to-wake;
                        LED indication for visual communication of latch and errors
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Power
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          3-year battery life*, field-replaceable;Separate battery compartment(can only be accessed by an authorized person);Auxiliary power adapter option
                      </td>
                    </tr>
                     
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Environmental Ratings
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          Operating temperature: -20°C to 70°C;IP53: protection against dust and direct light pressure jets; Corrosion-resistant
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Regulatory Compliance
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          FCC, ISED;Prop 65 Compliant
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Unit Weight
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          2.2 lbs.
                      </td>
                    </tr>
                     <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Unit Dimensions
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          12.35 in. L x 3.65 in. H
                      </td>
                    </tr>
                  <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                           Warranty
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                           1 year limited warranty
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-black p-3 font-bold w-1/2">
                          Security Features
                      </td>
                      <td colSpan="3" className="border border-black p-2">
                          AES-128 encryption;30-second attack resistance;Doors remain lock during attack;Bolts not accessible from outside of the unit;Provisioning and revokingmobile credentials at any time;Audit trail;Event notification**
                      </td>
                    </tr>
                </table>
              </section>

              {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10 border-b py-5 border-b-gray-400">
              <span className="bg-red-500 text-white px-2 py-1 rounded">
               ONITY
              </span>
              
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                Hotel Locking Systems and Hotel Safes
              </span>
            </div>

            {/* SHARE SECTION */}
            <SocialShare title="Check out this product!" />

            </div>

            {/* Right Column: Sidebar */}
                     <div className="lg:col-span-1 space-y-8">
                         <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                       <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By ONITY</h3>
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
                     </div>

          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default StoragePassport;