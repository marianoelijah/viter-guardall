import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const getApiBaseUrl = () => {
  if (import.meta.env.VITE_API_URL) return import.meta.env.VITE_API_URL;
  if (import.meta.env.DEV) return 'http://localhost:5000';
  return typeof window !== 'undefined' ? window.location.origin : '';
};

const API_BASE_URL = getApiBaseUrl();
const buildApiUrl = (path) => `${API_BASE_URL.replace(/\/$/, '')}${path}`;

// Move static data outside the component to prevent re-renders
const BRANCHES = {
  makati: {
    name: "Makati Head Office",
    address: "Unit 708 Cattleya Building, 235 Salcedo St. Legaspi Village, Makati City",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.6493134371584!2d121.0156!3d14.5547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c908f9f8f9f8%3A0x0!2sCattleya%20Building!5e0!3m2!1sen!2sph!4v1620000000000!5m2!1sen!2sph"
  },
  cebu: {
    name: "Cebu Branch",
    address: "Unit 306 Cebu Holdings Building, Cebu Business Park, Cebu City",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.34!2d123.90!3d10.31!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999!2sCebu%20Business%20Park!5e0!3m2!1sen!2sph!4v1620000000000!5m2!1sen!2sph"
  }
};

const Contacts = () => {
  // State must be INSIDE the component
  const [activeBranch, setActiveBranch] = useState('makati');
  const [status, setStatus] = useState(''); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [contactInfo, setContactInfo] = useState([]);
  const [offices, setOffices] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(buildApiUrl('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); 
        setTimeout(() => setStatus(''), 5000); // Clear status after 5s
      } else {
        const errorText = await response.text();
        console.error('Contact submission failed:', response.status, errorText);
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  // Fetch dynamic footer elements from your Express backend
  useEffect(() => {
    // Pulling contact records
    fetch(buildApiUrl('/api/footer-contact'))
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP Error Status: ${res.status}`);
        return res.json();
      })
      .then((data) => setContactInfo(Array.isArray(data) ? data : []))
      .catch((err) => {
        console.error("❌ Footer contact error detail:", err);
        setContactInfo([]);
      });

    // Pulling office records
    fetch(buildApiUrl('/api/footer-offices'))
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP Error Status: ${res.status}`);
        return res.json();
      })
      .then((data) => setOffices(Array.isArray(data) ? data : []))
      .catch((err) => {
        console.error("❌ Footer office error detail:", err);
        setOffices([]);
      });
  }, []);


  return (
    <div className="min-h-screen bg-slate-200 font-poppins selection:bg-blue-100">
      {/* Header Section */}
      <section className="pt-20 pb-12 text-center px-6">
        <h1 className="text-5xl md:text-7xl text-[#2257a0] mb-6 drop-shadow-sm tracking-tigh">Contact Us</h1>
        <h2 className="text-5xl md:text-6xl drop-shadow-sm tracking-tigh text-[#2257a0] mb-4">Secure Your Life Today!</h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Tell us what your property needs. Our team is ready to help and support you!
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center group hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2257a0] transition-colors">
              <Phone className="text-[#2257a0] group-hover:text-white" size={32} />
            </div>
            <div className="space-y-2 text-gray-700 font-medium text-center">
              <p>(02) 8817 4132</p>
              <p>(02) 8840 5673</p>
              <p>(+63) 998 843 9711</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center group hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2257a0] transition-colors">
              <Globe className="text-[#2257a0] group-hover:text-white" size={32} />
            </div>
            <div className="space-y-2 text-center">
              <a href="mailto:info@guardall.com.ph" className="block text-gray-700 font-medium hover:text-[#2257a0]">info@guardall.com.ph</a>
              <a href="https://www.guardall.com.ph" target="_blank" rel="noreferrer" className="block text-gray-700 font-medium hover:text-[#2257a0]">www.guardall.com.ph</a>
            </div>
          </div>

          {/* Location Summary */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center group hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2257a0] transition-colors">
              <MapPin className="text-[#2257a0] group-hover:text-white" size={32} />
            </div>

            {/* <div className="text-sm text-gray-700 space-y-3">
              <p><strong>Makati:</strong> Makati | Unit 708 Cattleya Building, 235 Salcedo St. Legaspi Village, Makati City, Philippines 1223</p>
              <p><strong>Cebu:</strong> Cebu | Unit 306 Cebu Holdings Building, Cebu Business Park, Cebu City, Philippines 6000</p>
            </div> */}

            {/* Offices & Social - External Geolocation Hyperlinks */}
            <div className="space-y-4 text-sm text-gray-600 inline-block sm:block text-left">
                {offices.map((office) => (
                  <div key={office.id} className="flex gap-3">
                    <FaMapMarkerAlt className="text-blue-800 shrink-0 mt-1 text-lg" />
                        <p>
                        <strong className="text-gray-800">{office.city}:</strong> |{" "}
                        <a 
                          href={office.map_link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-blue-600 hover:underline transition-colors"
                        >
                          {office.address}
                          </a>
                        </p>
                  </div>
                ))}
              </div>

          </div>
        </div>

        {/* Form and Map Container */}
        <div className="grid grid-cols-1 gap-12">
          {/* Form Section */}

          <div className="max-w-4xl mx-auto w-full relative">
            <div className="absolute inset-0 bg-[#0097b2] translate-x-4 translate-y-4 rounded-3xl -z-10"></div>
            <div className="bg-gray-100 p-8 md:p-12 rounded-3xl shadow-lg border border-black">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-4 rounded-lg outline-none focus:ring-2 focus:ring-[#2257a0]  border border-black" required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full px-4 py-4 rounded-lg outline-none focus:ring-2 focus:ring-[#2257a0]  border border-black" required />
                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-4 rounded-lg outline-none focus:ring-2 focus:ring-[#2257a0]  border border-black" required />
                <textarea name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} className="w-full px-4 py-4 rounded-lg outline-none focus:ring-2 focus:ring-[#2257a0]  border border-black resize-none" required></textarea>
                
                {status === 'success' && <p className="text-green-600 font-bold text-center">Message sent successfully!</p>}
                {status === 'error' && <p className="text-red-600 font-bold text-center">Error sending message. Try again.</p>}
                
                <button type="submit" disabled={status === 'sending'} className="w-auto px-20 bg-[#1435a0] hover:bg-[#ff5f31] text-white py-4 font-bold rounded disabled:bg-gray-400 transition-all shadow-md">
                  {status === 'sending' ? 'SENDING...' : 'SEND US A MESSAGE NOW'}
                </button>
              </form>
            </div>
          </div>

          {/* Interactive Map Section */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 grid grid-cols-1 lg:grid-cols-3">
            <div className="p-8 bg-slate-50 border-r border-slate-100">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">Our Locations</h3>
              <div className="space-y-4">
                {Object.keys(BRANCHES).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveBranch(key)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${activeBranch === key ? 'bg-[#2257a0] text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-blue-50'}`}
                  >
                    <p className="font-bold uppercase text-sm">{BRANCHES[key].name}</p>
                    <p className="text-xs mt-1 opacity-80">{BRANCHES[key].address}</p>
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 h-[450px]">
              <iframe
                title="Office Location"
                src={BRANCHES[activeBranch].embedUrl}
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;