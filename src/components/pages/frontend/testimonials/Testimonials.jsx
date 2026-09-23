import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Get backend base URL from environment variables
const API_URL = import.meta.env.VITE_API_URL || '';

// Fallback image using SVG Data URI to avoid external link breakage
const FALLBACK_IMAGE = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" fill="%230f172a"><rect width="100%" height="100%" fill="%230f172a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23475569" font-family="sans-serif" font-size="16">Visual Unavailable</text></svg>`;

const FALLBACK_AVATAR = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="%231e293b"><circle cx="50" cy="50" r="50" fill="%231e293b"/><circle cx="50" cy="35" r="20" fill="%23475569"/><path d="M20 85c0-16.5 13.5-30 30-30s30 13.5 30 30" fill="%23475569"/></svg>`;

// Helper function to convert Google Drive view URLs to direct image URLs
const formatImageUrl = (url) => {
  if (!url) return '';
  if (url.startsWith('http')) {
    const driveMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (driveMatch && driveMatch[1]) {
      return `https://drive.google.com/uc?export=view&id=${driveMatch[1]}`;
    }
    return url;
  }
  return `${API_URL}${url}`;
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data } = await axios.get(`${API_URL}/api/testimonials`);
        if (isMounted) {
          setTestimonials(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (isMounted) {
          console.error('Error fetching testimonials:', err);
          setError(err.response?.data?.message || err.message || 'Error loading testimonials');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchTestimonials();
    return () => { isMounted = false; };
  }, []);

  // Modal event handling (Escape key + prevent body scroll)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveProject(null);
    };

    if (activeProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeProject]);

  return (
    <section className="bg-slate-900 py-16 sm:py-24 text-slate-100 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xs sm:text-sm font-semibold leading-7 text-blue-400 uppercase tracking-widest">
            Trusted by Clients, Proven by Results
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Client Case Studies & Testimonials
          </p>
          <p className="mt-4 text-sm sm:text-sm leading-7 text-slate-400">
            Click on any card below to explore project execution details, hardware integrations and client feedback.
            Each testimonial reflects our commitment to delivering high-quality security solutions and 
            exceptional service. We value our clients' trust and strive to exceed their expectations 
            in every project we undertake.
          </p>
        </div>

        {/* Loading State (Skeleton Loader) */}
        {loading && (
          <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="animate-pulse rounded-2xl bg-slate-800/40 p-8 border border-slate-800/80 h-72 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="h-4 bg-slate-700/50 rounded w-1/4"></div>
                    <div className="h-4 bg-slate-700/50 rounded w-1/5"></div>
                  </div>
                  <div className="h-4 bg-slate-700/50 rounded w-full mt-4"></div>
                  <div className="h-4 bg-slate-700/50 rounded w-4/5"></div>
                  <div className="h-4 bg-slate-700/50 rounded w-2/3"></div>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                  <div className="h-11 w-11 rounded-full bg-slate-700/50 shrink-0"></div>
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
          <div className="mt-12 text-center rounded-xl bg-red-950/20 border border-red-900/50 p-6 max-w-lg mx-auto">
            <p className="text-red-400 font-medium text-sm">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold bg-red-900/40 hover:bg-red-800/60 text-red-200 px-4 py-2 rounded-lg border border-red-700/50 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M160 80v48m0 0l-32-32m32 32l32-32" />
              </svg>
              Retry Connection
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && testimonials.length === 0 && (
          <div className="mt-12 text-center rounded-2xl border border-dashed border-slate-800 p-12 max-w-lg mx-auto">
            <p className="text-slate-400 text-sm">
              No client testimonials available at this moment.
            </p>
          </div>
        )}

        {/* Testimonials Grid */}
        {!loading && !error && testimonials.length > 0 && (
          <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id || testimonial._id}
                tabIndex={0}
                role="button"
                onClick={() => setActiveProject(testimonial)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveProject(testimonial);
                  }
                }}
                className="group flex flex-col justify-between rounded-2xl bg-slate-800/40 p-8 border border-slate-700/50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-800/80 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    {/* Star Rating */}
                    <div className="flex gap-x-1 text-amber-400">
                      {[...Array(Math.min(Math.max(Number(testimonial.rating) || 5, 1), 5))].map((_, i) => (
                        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.6 3.102-1.196 4.657c-.21.814.67 1.453 1.374 1.011L10 15.688l4.172 2.601c.704.442 1.585-.197 1.374-1.011l-1.196-4.657 3.6-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                        </svg>
                      ))}
                    </div>

                    <span className="text-xs text-blue-400 group-hover:text-blue-300 font-semibold flex items-center gap-1 transition-colors">
                      View Details
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                      </svg>
                    </span>
                  </div>

                  <blockquote className="text-base leading-7 text-slate-300 group-hover:text-slate-100 transition-colors line-clamp-4">
                    “{testimonial.quote || "High-quality security installation and exceptional execution."}”
                  </blockquote>
                </div>

                <div className="mt-8 flex items-center gap-x-4 border-t border-slate-700/50 pt-6">
                  <img
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-blue-500/20 group-hover:ring-blue-500/50 transition-all bg-slate-800 shrink-0"
                    src={formatImageUrl(testimonial.image) || FALLBACK_AVATAR}
                    alt={testimonial.name || 'Client Avatar'}
                    onError={(e) => { e.target.src = FALLBACK_AVATAR; }}
                  />
                  <div className="min-w-0">
                    <div className="font-semibold text-white text-sm truncate">{testimonial.name || 'Anonymous Client'}</div>
                    <div className="text-xs text-slate-400 truncate">{testimonial.role || testimonial.company || 'Verified Client'}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-opacity"
          onClick={() => setActiveProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              aria-label="Close details"
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            {/* Modal Header */}
            <div className="border-b border-slate-800 pb-5 mb-6 pr-8">
              <span className="text-xs uppercase font-bold tracking-widest text-blue-400">
                Project Case Study
              </span>
              <h3 id="modal-title" className="text-2xl font-bold text-white mt-1">
                {activeProject.projectTitle || activeProject.company || 'Security Installation Project'}
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Client Representative: <span className="text-slate-200 font-medium">{activeProject.name}</span>
                {activeProject.role && <span className="text-slate-400"> — {activeProject.role}</span>}
              </p>
            </div>

            {/* Modal Image Gallery */}
            {activeProject.projectImages && activeProject.projectImages.filter((img) => img && img.trim() !== '').length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeProject.projectImages
                  .filter((imgUrl) => imgUrl && imgUrl.trim() !== '')
                  .map((imgUrl, index) => (
                    <div key={index} className="overflow-hidden rounded-xl bg-slate-950 border border-slate-800/80 group/img">
                      <img
                        src={formatImageUrl(imgUrl)}
                        alt={`Project visual ${index + 1}`}
                        className="w-full h-48 sm:h-52 object-cover transform transition-transform duration-500 group-hover/img:scale-105"
                        onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
                      />
                    </div>
                  ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-slate-800 p-8 text-center text-slate-500 text-sm">
                No extra project showcase photos attached.
              </div>
            )}

            {/* Project Description */}
            {activeProject.projectDescription && (
              <div className="mt-6 border-t border-slate-800/80 pt-5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Deployment Summary
                </h4>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed whitespace-pre-line">
                  {activeProject.projectDescription}
                </p>
              </div>
            )}

            {/* Testimonial Quote */}
            {activeProject.quote && (
              <div className="mt-6 bg-slate-800/30 border border-slate-800 rounded-xl p-4">
                <p className="text-xs font-semibold text-blue-400 mb-1">Client Feedback:</p>
                <p className="text-slate-300 italic text-sm leading-relaxed">
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