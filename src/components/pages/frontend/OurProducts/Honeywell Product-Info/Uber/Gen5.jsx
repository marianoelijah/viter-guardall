import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import SocialShare from "../../Reusable/SocialShare";



const Gen5 = () => {
  return (
    <>
    <Header />
     <div className="bg-gray-100 min-h-screen">
      
      {/* Hero Section */}
      <div className="bg-[#7f95b8] py-16 text-center">
        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
             iKLAS Gen 5 Touchscreen
        </h1>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 bg-gray-200 p-8 rounded-lg shadow-sm">

          <p className="text-gray-800 text-[17px] mb-6">
             A contactless card reader and RFID key-tag reader designed to complement the iKLAS Key Management System.
          </p>

          {/* Product Description */}
          <h2 className="text-xl text-black font-semibold mb-2">Product Description:</h2>
          <p className="text-gray-800 text-[17px] mb-4">
           The 7″ Colour Touchscreen of the latest iKLAS GEN-5 incorporates a colour camera, card reader,
            key-tag reader, and (optional) QR code reader, providing all-encompassing access control 
            solutions within a single panel.
          </p>
          
          {/* Product Features */}
          <h2 className="text-xl text-black font-semibold mb-2">Product Features:</h2>
          <ul className="list-disc pl-6 text-gray-800 text-[17px] space-y-1 mb-8">
            <li>Input UID Provides an alphanumeric keypad for users to enter their user ID.</li>
            <li>Multi Access Provides 2 or 3-user authentication for the withdrawal of critical keys.</li>
            <li>Read Card Provides administrators/users with the convenience of reading card IDs, especially when a lost card is found.</li>
            <li>View Status  Provides administrators with a one-glance overview of all key statuses.</li>
            <li>User Info  Allows users to change their PIN and view which keys they are authorized to withdraw, as well as their key status.</li>
            <li>Admin Setting Allows administrators to: Carry out system management, View/export transaction records with photo footage, Manage user profiles (add/edit/delete).</li>
            <li>Forget Card  Allows users, once a month, to access the key system without their access card in a 2FA setup.</li>
            <li>Send OTP  Allows ad hoc users to access the key system via an OTP remotely issued by an administrator through an optional GSM modem.</li>
            <li>Login Pin  Provides a numeric keypad for users to enter their PIN.</li>
            <li>Facial Recognition (FR)  Allows for access via FR plus the convenient facial enrolment of users in the presence of an administrator.</li>
          </ul>

      

          {/* Tags */}
          <div className="mt-6 flex gap-3">
            <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
              UBERGARD
            </span>
            <span className="bg-[#FF5F31] text-white px-2 py-1 rounded">
              Access Control System
            </span>
          </div>

          {/* Share */}
             <SocialShare title="Check out this product!" />

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          
          {/* More By MAG */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-300 p-4 border border-gray-500 mb-6">
              <h3 className="text-xl font-semibold text-black mb-4 border-b pb-1">More By UBERGARD</h3>
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

            {/* CTA Card */}
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
          </div>

        </div>
      </div>
    </div>
    <Footer />
    </>
   
  );
}

export default Gen5;