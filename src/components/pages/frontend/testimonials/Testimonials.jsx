import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Get backend base URL from environment variables (Same pattern as ProductPage.jsx)
const API_URL = import.meta.env.VITE_API_URL || '';

// Helper function to convert Google Drive view URLs to direct image URLs
const formatDriveUrl = (url) => {
  if (!url) return '';
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
  return url;
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        setError(null);
        

        // Uses Axios + API_URL from .env just like ProductPage.jsx
        const { data } = await axios.get(`${API_URL}/api/testimonials`);

        setTestimonials(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError(err.response?.data?.message || err.message || 'Error loading testimonials');
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    if (activeProject) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject]);

  return (
    <section className="bg-slate-900 py-16 sm:py-24 text-slate-100 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold leading-7 text-blue-400 uppercase tracking-widest">
            Trusted by Clients, Proven by Results
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-5xl">
             Client Case Studies & <br/>
              Testimonials
          </p>
          <p className="mt-4 text-xl leading-7 text-slate-400">
            Click on any client card below to inspect project details, 
            hardware setups, and deployment outcomes.
          </p>
          <p>
            <span className="text-sm text-slate-500">
              Note: Some images may be hosted on Google Drive. If you encounter any issues, <br/>
                   please contact us for assistance or alternative access to the project visuals.
            </span>
          </p>
        </div>

        {/* Loading State (Skeleton Loaders) */}
        {loading && (
          <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div 
                key={n} 
                className="animate-pulse rounded-2xl bg-slate-800/40 p-8 border border-slate-800 h-64 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="h-4 bg-slate-700/50 rounded w-1/3"></div>
                  <div className="h-4 bg-slate-700/50 rounded w-full"></div>
                  <div className="h-4 bg-slate-700/50 rounded w-4/5"></div>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                  <div className="h-11 w-11 rounded-full bg-slate-700/50"></div>
                  <div className="space-y-2 flex-1">
                    <div className="h-3 bg-slate-700/50 rounded w-1/2"></div>
                    <div className="h-3 bg-slate-700/50 rounded w-1/3"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="mt-12 text-center rounded-xl bg-red-950/30 border border-red-900/50 p-6 max-w-lg mx-auto">
            <p className="text-red-400 font-medium text-sm">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-3 text-xs bg-red-900/50 hover:bg-red-800/60 text-red-200 px-3 py-1.5 rounded-lg border border-red-700/50 transition-colors"
            >
              Not Responding, Please Try Again
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && testimonials.length === 0 && (
          <div className="mt-12 text-center rounded-xl border border-dashed border-slate-800 p-12 max-w-lg mx-auto">
            <p className="text-slate-400 text-sm">
              No testimonials available at the moment. Please check back later.
            </p>
          </div>
        )}

        {/* Active Testimonials Grid */}
        {!loading && !error && testimonials.length > 0 && (
          <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                onClick={() => setActiveProject(testimonial)}
                className="group flex flex-col justify-between rounded-2xl bg-slate-800/60 p-8 border border-slate-700/60 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-800 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-x-1 text-amber-400">
                      {[...Array(Number(testimonial.rating) || 5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                          <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.6 3.102-1.196 4.657c-.21.814.67 1.453 1.374 1.011L10 15.688l4.172 2.601c.704.442 1.585-.197 1.374-1.011l-1.196-4.657 3.6-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-blue-400 group-hover:text-blue-300 font-medium flex items-center gap-1 transition-colors">
                      View Project
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                      </svg>
                    </span>
                  </div>
                  
                  <blockquote className="text-base font-normal leading-7 text-slate-300 group-hover:text-white transition-colors">
                    “{testimonial.quote || "High-quality security installation and exceptional execution."}”
                  </blockquote>
                </div>

                <div className="mt-8 flex items-center gap-x-4 border-t border-slate-700/50 pt-6">
                  <img
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-blue-500/20 group-hover:ring-blue-500/50 transition-all bg-slate-800"
                    src={testimonial.image ? `${API_URL}${testimonial.image}` : '/assets/default-avatar.png'}
                    alt={testimonial.name}
                    onError={(e) => { e.target.src = '/assets/default-avatar.png'; }}
                  />
                  <div>
                    <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                    <div className="text-xs text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Showcase Modal */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-opacity"
          onClick={() => setActiveProject(null)}
        >
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveProject(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            <div className="border-b border-slate-800 pb-6 mb-6">
              <span className="text-xs uppercase font-bold tracking-widest text-blue-500">
                Case Gallery
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">{activeProject.projectTitle}</h3>
              <p className="text-slate-400 text-sm mt-1">
                Project Contact: 
              {activeProject.name} {activeProject.role ? `— ${activeProject.role}` : ''}
              </p>
            </div>

            {/* Images Grid */}
            {activeProject.projectImages?.filter((img) => img && img.trim() !== '').length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeProject.projectImages
                  .filter((imgUrl) => imgUrl && imgUrl.trim() !== '')
                  .map((imgUrl, index) => {
                    const src = imgUrl.startsWith('http') ? formatDriveUrl(imgUrl) : `${API_URL}${imgUrl}`;
                    return (
                      <div key={index} className="overflow-hidden rounded-xl bg-slate-950 border border-slate-800 group/img">
                        <img 
                          src={src} 
                          alt={`Project preview ${index + 1}`} 
                          className="w-full h-56 object-cover transform transition-transform duration-500 group-hover/img:scale-105"
                          onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found'; }}
                        />
                      </div>
                    );
                  })}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-slate-800 p-8 text-center text-slate-500 text-sm">
                No project images available for this entry.
              </div>
            )}

            {/* Description */}
            {activeProject.projectDescription && (
              <div className="mt-6 border-t border-slate-800/60 pt-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Project Description
                </h4>
                <p className="text-slate-200 text-sm mt-2 font-medium leading-relaxed">
                  {activeProject.projectDescription}
                </p>
              </div>
            )}

            {/* Quote */}
            {activeProject.quote && (
              <div className="mt-6 bg-slate-800/40 border border-slate-800/80 rounded-xl p-4">
                <p className="text-slate-300 italic text-sm">
                  "{activeProject.quote}"
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}