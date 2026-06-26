import React from 'react';
import { Mail, MessageCircle, Send, Share2, Heart } from 'lucide-react';
import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';
import { NavLink } from 'react-router-dom';
import SocialShare from '../../Reusable/SocialShare';
import React from 'react';



const VdsExtra = () => {
  const technicalDetails = [
    "Screw-on surface assembly.",
    "Power supply: 18 Vdc",
    "Audio on/off button",
    "Door release and guard unit call button",
    "5 selectable call tunes",
    "Sequential volume control",
    "Totally hands-free operation. Once the outdoor panel-home channel is activated, communication is simultaneous (full duplex)",
    "Optional change from hands-free to press-to-talk, useful in very noisy surroundings.",
    "3 signal LEDs: Blue: calling/in communication. Green: automatic open function on. Red: do not disturb function – volume off",
    "Private communication. Conversation privacy. Maximum talking time: 90 seconds.",
    "Door bell: for direct house call button connection to telephone.",
    "With call connection extension or lights and bells switch.",
    "With 1 push button for additional functions."
  ];

  return (
    <>
      <Header />
      <div className="bg-slate-50 min-h-screen font-sans">
        {/* Header Banner */}
      <header className="bg-[#7f95b8] text-white py-12 px-6 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          iLOFT TELEPHONE VDS EXTRA
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <main className="lg:w-3/4 bg-gray-200 p-8 shadow-sm">
          <p className="text-gray-800 text-[17px] mb-6">
            A minimalist and highly-functional audio door entry system that offers hands-free communication 
            and high-quality sound. It is an easy to fit wall mounted installation.
          </p>

          <section className="mb-8">
            <h2 className="font-bold text-xl mb-2 text-black">Product Description:</h2>
            <p className="text-gray-800 text-[17px] leading-relaxed">
              The iLoft telephone is a stylish and modern intercom system designed for residential use. Its 
              minimalist design features a slim profile and a high-impact ABS plastic construction with a mirror-
              polished finish. It allows for hands-free communication with visitors at the door and easy door 
              release. The iLoft uses a simplified three-wire bus installation and offers private communication 
              within a range of 200m.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-xl text-black mb-4">Technical Specification:</h2>
            <div className="overflow-x-auto border border-gray-500">
              <table className="w-full text-left text-xs border-collapse border border-black">
                <tbody>
                  <tr className="border-b border-black">
                    <td className="w-1/3 p-3 font-bold align-top border-r border-black text-black text-[17px]">Technical Details</td>
                    <td className="p-0 text-black text-[16px]">
                      {technicalDetails.map((detail, idx) => (
                        <div key={idx} className={`p-3 ${idx !== technicalDetails.length - 1 ? 'border-b border-black' : ''}`}>
                          {detail}
                        </div>
                      ))}
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-3 font-bold border-r border-black text-black text-[17px]">Operating temperature</td>
                    <td className="p-3 text-black text-[16px]">146 (height) x 90 (width) x 20 (depth) mm</td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-3 font-bold border-r border-black text-black text-[17px]">Dimensions</td>
                    <td className="p-3 text-black text-[16px]">in standby: 24 mA. active: 100 mA</td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-3 font-bold border-r border-black text-black text-[17px]">Technology</td>
                    <td className="p-3 text-black text-[16px]">VDS</td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-3 font-bold border-r border-black text-black text-[17px]">Weight</td>
                    <td className="p-3 text-black text-[16px]">0.16 kg</td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-3 font-bold border-r border-black text-black text-[17px]">Measures of the packed product</td>
                    <td className="p-3 text-black text-[16px]">15x9,5x3,3 cm</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold border-r border-black text-black text-[17px]">EAN 13</td>
                    <td className="p-3 text-black text-[16px]">8424299056012</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

           {/* Tags & Social */}
           <div className="flex flex-wrap gap-3 mb-8 mt-10">
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
                FERMAX
              </span>
              
              <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
                Audio-Video Intercom & PA-BGM
              </span>
            </div>

              {/* SHARE SECTION */}
             <SocialShare title="Check out this product!" />
        </main>

       {/* Sidebar */}
              <aside className="lg:w-1/4 space-y-6"> 
                     <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
                        <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By FERMAX</h3>
                         <ul className="space-y-4 text-gray-700">
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

export default VdsExtra;