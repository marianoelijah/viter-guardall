import React, { useState } from 'react';

// Helper function to convert Google Drive view URLs to direct image URLs
const formatDriveUrl = (url) => {
  if (!url) return '';
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
  return url;
};

const testimonials = [
  {
    id: 1,
    name: "Brad",
    role: "Top",
    image: "https://via.placeholder.com/150",
    // quote: "Exceptional quality and professional installation team",
    rating: 5,
    projectTitle: "HEIGHT REALTY, INC. SOUTHLINKS",
    projectImages: [
      "/assets/image/Testimony/Southlinks/gardhouse.jpg",
      "/assets/image/Testimony/Southlinks/gardhouse2.jpg",
      "/assets/image/Testimony/Southlinks/gardhouse3.jpg"
    ],
    projectDescription: "Supply and Installation of Beam Barriers and Bollards CP-B101."
  },
  {
    id: 2,
    name: "Kirk",
    role: "Top",
    image: "https://via.placeholder.com/150",
    // quote: "Prompt service and reliable security hardware.",
    rating: 4,
    projectTitle: "DON PIN CORPORATION",
    projectImages: [
      "",
      ""
    ],
    projectDescription: "Supply and Installation of DACS, Intercom, CCTV and Intrusion Alarm for Netherlands Embassy"
  },
  {
    id: 3,
    name: "Joshua",
    role: "Top",
    image: "https://via.placeholder.com/150",
    // quote: "Great support throughout deployment.",
    rating: 3,
    projectTitle: "FIVE NEO N-PLAXZA BGC PROPERTIES, INC.",
    projectImages: [],
    projectDescription: "Supply and Installation of Pedestrian Turnstiles Control System.Turnstile setup and access control configuration."
  }
];

export default function Testimonials() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="bg-slate-200 py-16 sm:py-24 border-t border-slate-800 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[25px] font-semibold leading-7 text-[#184c9b] uppercase tracking-wider md:text-3xl">
            Trusted Protection
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            FAQS ABOUT GUARD-ALL
          </p>
          <p className="mt-4 text-xl leading-8 text-black">
            Don’t just take our word for it.
            Click on any client testimonial card below to view our completed project files.
            The attached images is the before and after of the projects.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              onClick={() => setActiveProject(testimonial)}
              className="group flex flex-col justify-between rounded-2xl bg-[#0716a1] p-8 shadow-lg ring-1 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:ring-blue-500/50 hover:bg-slate-800/80 cursor-pointer"
            >
              <div>
                {/* Star Rating & Click Indicator */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-x-1 text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.6 3.102-1.196 4.657c-.21.814.67 1.453 1.374 1.011L10 15.688l4.172 2.601c.704.442 1.585-.197 1.374-1.011l-1.196-4.657 3.6-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-[#feffff] hover:text-[#ff5f31] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                      View Projects of Guard-All
                     <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                  </span>
                </div>
                
                {/* Review Text */}
                <blockquote className="text-lg font-medium leading-7 text-slate-200 group-hover:text-white transition-colors">
                  “{testimonial.quote || "No review statement provided."}”
                </blockquote>
              </div>

              {/* User Profile */}
              <div className="mt-8 flex items-center gap-x-4 border-t border-slate-700/50 pt-6">
                <img
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-500/20 group-hover:ring-blue-500/50 transition-all"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Pop-up Window */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-opacity"
          onClick={() => setActiveProject(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-10 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            {/* Modal Header Area */}
            <div className="border-b border-slate-800 pb-6 mb-6">
              <span className="text-xs uppercase font-bold tracking-widest text-blue-500">Case Gallery</span>
              <h3 className="text-2xl font-bold text-white mt-1">{activeProject.projectTitle}</h3>
              <p className="text-slate-400 text-sm mt-1">Deployed for {activeProject.name} — {activeProject.role}</p>
            </div>

            {/* Showcase Images Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeProject.projectImages
                ?.filter((imgUrl) => imgUrl && imgUrl.trim() !== '')
                .map((imgUrl, index) => (
                  <div key={index} className="overflow-hidden rounded-xl bg-slate-950 border border-slate-800 group/img">
                    <img 
                      src={formatDriveUrl(imgUrl)} 
                      alt={`Project screenshot ${index + 1}`} 
                      className="w-full h-64 object-cover transform transition-transform duration-500 group-hover/img:scale-105"
                    />
                  </div>
                ))}
            </div>

            {/* Description */}
            {activeProject.projectDescription && (
              <div className="mt-6 border-t border-slate-800/60 pt-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Project Description</h4>
                <p className="text-slate-200 text-base mt-2 font-medium">
                  {activeProject.projectDescription}
                </p>
              </div>
            )}

            {/* Quote Summary */}
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