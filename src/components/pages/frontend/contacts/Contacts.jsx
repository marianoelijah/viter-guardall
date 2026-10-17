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

// Static branch data with forced pinpoint markers
const BRANCHES = {
  makati: {
    name: "Makati Head Office",
    address: "Unit 708 Cattleya Building, 235 Salcedo St. Legaspi Village, Makati City",
    embedUrl: "https://maps.google.com/maps?q=14.55243,121.01582+(Guard-All%20Makati%20Head%20Office)&t=&z=18&ie=UTF8&iwloc=B&output=embed"
  },
  cebu: {
    name: "Cebu Branch",
    address: "Unit 306 Cebu Holdings Building, Cebu Business Park, Cebu City",
    embedUrl: "https://maps.google.com/maps?q=10.3168,123.9038+(Guard-All%20Cebu%20Branch)&t=&z=17&ie=UTF8&iwloc=B&output=embed"
  }
};

const Contacts = () => {
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    try {
      const response = await fetch(buildApiUrl('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); 
        setTimeout(() => setStatus(''), 5000);
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

  useEffect(() => {
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
    <div className="min-h-screen bg-slate-200 dark:bg-[#121214] font-poppins selection:bg-blue-100 dark:selection:bg-blue-900 transition-colors duration-300">
      {/* Header Section */}
      <section className="pt-20 pb-12 text-center px-6">
        <h1 className="text-4xl md:text-7xl font-bold text-[#2257a0] dark:text-blue-400 mb-4 md:mb-6 tracking-tight transition-colors">
          Contact Us
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-[#2257a0] dark:text-blue-400 mb-4 md:mb-6 tracking-tight transition-colors">
          Secure Your Life Today!
        </h2>
        <p className="text-xl md:text-2xl font-semibold text-[#ff5f31] dark:text-[#ff5f31] hover:text-black dark:hover:text-white mb-4 md:mb-6 tracking-tight transition-colors">
          Tell us what your property needs. Our team is ready to help and support you!
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <div className="bg-white dark:bg-[#1e1e22] p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-800 flex flex-col items-center group hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all">
            <div className="w-16 h-16 bg-blue-50 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2257a0] dark:group-hover:bg-blue-600 transition-colors">
              <Phone className="text-[#2257a0] dark:text-blue-400 group-hover:text-white" size={32} />
            </div>
            <div className="text-lg md:text-xl space-y-2 text-gray-900 dark:text-gray-200 font-medium text-center hover:text-[#2257a0] dark:hover:text-blue-400 transition-colors">
              <p>(02) 8817 4132</p>
              <p>(02) 8840 5673</p>
              <p>(+63) 998 843 9711</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white dark:bg-[#1e1e22] p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-800 flex flex-col items-center group hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all">
            <div className="w-16 h-16 bg-blue-50 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2257a0] dark:group-hover:bg-blue-600 transition-colors">
              <Globe className="text-[#2257a0] dark:text-blue-400 group-hover:text-white" size={32} />
            </div>
            <div className="text-lg md:text-xl space-y-2 text-center">
              <a href="mailto:info@guardall.com.ph" className="block text-gray-900 dark:text-gray-200 font-medium hover:text-[#2257a0] dark:hover:text-blue-400 transition-colors">info@guardall.com.ph</a>
              <a href="https://www.guardall.com.ph" target="_blank" rel="noreferrer" className="block text-gray-900 dark:text-gray-200 font-medium hover:text-[#2257a0] dark:hover:text-blue-400 transition-colors">www.guardall.com.ph</a>
            </div>
          </div>

          {/* Location Summary */}
          <div className="bg-white dark:bg-[#1e1e22] p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-800 flex flex-col items-center group hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all">
            <div className="w-16 h-16 bg-blue-50 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2257a0] dark:group-hover:bg-blue-600 transition-colors">
              <MapPin className="text-[#2257a0] dark:text-blue-400 group-hover:text-white" size={32} />
            </div>

            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300 inline-block sm:block text-left">
              {offices.map((office) => (
                <div key={office.id} className="md:text-xl text-lg flex gap-3">
                  <FaMapMarkerAlt className="text-xl text-[#1435a0] dark:text-blue-400 shrink-0 mt-1" />
                  <p>
                    <strong className="text-gray-900 dark:text-white hover:text-[#1435a0] dark:hover:text-blue-400">{office.city}:</strong> |{" "}
                    <a 
                      href={office.map_link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs md:text-lg text-gray-700 dark:text-gray-300 hover:text-[#1435a0] dark:hover:text-blue-400 hover:underline transition-colors"
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
            <div className="absolute inset-0 bg-[#0097b2] dark:bg-blue-600 translate-x-4 translate-y-4 rounded-3xl -z-10"></div>
            <div className="bg-gray-100 dark:bg-[#1e1e22] p-8 md:p-12 rounded-3xl shadow-lg border border-black dark:border-gray-700 transition-colors duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full px-4 py-4 rounded-lg outline-none focus:ring-2 focus:ring-[#2257a0] dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-black dark:border-gray-700 transition-colors" 
                  required 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full px-4 py-4 rounded-lg outline-none focus:ring-2 focus:ring-[#2257a0] dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-black dark:border-gray-700 transition-colors" 
                  required 
                />
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  className="w-full px-4 py-4 rounded-lg outline-none focus:ring-2 focus:ring-[#2257a0] dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-black dark:border-gray-700 transition-colors" 
                  required 
                />
                <textarea 
                  name="message" 
                  placeholder="Message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="w-full px-4 py-4 rounded-lg outline-none focus:ring-2 focus:ring-[#2257a0] dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-black dark:border-gray-700 resize-none transition-colors" 
                  required
                ></textarea>
                
                {/* Success Message */}
                {status === "success" && (
                  <div className="rounded-xl border border-green-300 dark:border-green-800 bg-green-50 dark:bg-green-950/40 p-4 text-center animate-pulse">
                    <h3 className="text-lg font-bold text-green-700 dark:text-green-400">
                      ✅ Inquiry Sent Successfully!
                    </h3>
                    <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                      Thank you for contacting <strong>Guard-All Electronic Security Systems, Inc.</strong>
                    </p>
                    <p className="text-sm text-green-700 dark:text-green-300">
                       Our team will review your inquiry and get back to you as soon as possible.
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {status === "error" && (
                  <div className="rounded-xl border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/40 p-4 text-center">
                    <h3 className="text-lg font-bold text-red-700 dark:text-red-400">
                      ❌ Unable to Send Inquiry
                    </h3>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      Something went wrong while submitting your request.
                    </p>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      Please try again in a few moments.
                    </p>
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={status === 'sending'} 
                  className="w-auto bg-[#1435a0] dark:bg-blue-600 hover:bg-[#ff5f31] dark:hover:bg-[#ff5f31] text-white py-2 px-5 md:py-4 md:px-15 justify-center text-center font-bold rounded disabled:bg-gray-400 dark:disabled:bg-gray-700 transition-all shadow-md"
                >
                  {status === 'sending' ? 'Sending Your Inquiry...' : 'SEND US A MESSAGE NOW'}
                </button>
              </form>
            </div>
          </div>

          {/* Interactive Map Section */}
          <div className="bg-white dark:bg-[#1e1e22] rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-gray-800 grid grid-cols-1 lg:grid-cols-3 transition-colors duration-300">
            <div className="p-8 bg-slate-50 dark:bg-gray-900/50 border-r border-slate-100 dark:border-gray-800">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] dark:text-blue-400 mb-6 transition-colors">
                Our Locations
              </h3>
              <div className="space-y-4">
                {Object.keys(BRANCHES).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveBranch(key)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      activeBranch === key 
                        ? 'bg-[#1e3a8a] dark:bg-blue-600 text-white shadow-lg' 
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <p className="text-lg md:text-xs font-bold uppercase">{BRANCHES[key].name}</p>
                    <p className="text-xs md:text-xs mt-1 opacity-80">{BRANCHES[key].address}</p>
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 h-[450px]">
              <iframe
                title="Office Location"
                src={BRANCHES[activeBranch].embedUrl}
                className="w-full h-full border-0 filter dark:invert-[0.9] dark:hue-rotate-180 dark:contrast-125"
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