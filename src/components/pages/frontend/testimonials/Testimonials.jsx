import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Andrea",
    role: "Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    quote: "Switching to Guard-All was the best decision we made this year. Their real-time monitoring and threat detection gave our team complete peace of mind. Absolute lifesaver.",
    rating: 5,
    projectTitle: "SouthLinks",
    projectImages: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
    ]
  },
  // {
  //   id: 2,
  //   name: "Marcus Chen",
  //   role: "Head of IT, Sentinel Logistics",
  //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
  //   quote: "The integration was flawless. Guard-All's system caught three major vulnerabilities within the first week. Their support team is incredibly responsive and knowledgeable.",
  //   rating: 5,
  //   projectTitle: "Sentinel Fleet Edge Protection",
  //   projectImages: [
  //     "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  //     "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  //   ]
  // },
  // {
  //   id: 3,
  //   name: "Elena Rostova",
  //   role: "Founder, SecureSphere",
  //   image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
  //   quote: "Incredibly intuitive dashboard. We can monitor all our endpoints from a single screen. Guard-All delivers enterprise-grade protection without the enterprise complexity.",
  //   rating: 5,
  //   projectTitle: "SecureSphere Global Threat Matrix",
  //   projectImages: [
  //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  //   ]
  // },
  // {
  //   id: 4,
  //   name: "Sarah Jenkins",
  //   role: "Operations Director at Nexus Corp",
  //   image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
  //   quote: "Switching to Guard-All was the best decision we made this year. Their real-time monitoring and threat detection gave our team complete peace of mind. Absolute lifesaver.",
  //   rating: 5,
  //   projectTitle: "Nexus Infrastructure Overhaul",
  //   projectImages: [
  //     "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  //     "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
  //   ]
  // },
  // {
  //   id: 5,
  //   name: "Marcus Chen",
  //   role: "Head of IT, Sentinel Logistics",
  //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
  //   quote: "The integration was flawless. Guard-All's system caught three major vulnerabilities within the first week. Their support team is incredibly responsive and knowledgeable.",
  //   rating: 5,
  //   projectTitle: "Sentinel Fleet Edge Protection",
  //   projectImages: [
  //     "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  //     "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  //   ]
  // },
  // {
  //   id: 6,
  //   name: "Elena Rostova",
  //   role: "Founder, SecureSphere",
  //   image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
  //   quote: "Incredibly intuitive dashboard. We can monitor all our endpoints from a single screen. Guard-All delivers enterprise-grade protection without the enterprise complexity.",
  //   rating: 5,
  //   projectTitle: "SecureSphere Global Threat Matrix",
  //   projectImages: [
  //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  //   ]
  // }
];

export default function Testimonials() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="bg-slate-900 py-16 sm:py-24 border-t border-slate-800 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-500 uppercase tracking-wider">
            Trusted Protection
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What Our Clients Say About Guard-All
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            Don’t just take our word for it. Click on any client testimonial card below to view their completed project files and deployment galleries.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              onClick={() => setActiveProject(testimonial)}
              className="group flex flex-col justify-between rounded-2xl bg-slate-800/40 p-8 shadow-lg ring-1 ring-slate-700/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:ring-blue-500/50 hover:bg-slate-800/80 cursor-pointer"
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
                  <span className="text-xs text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                    View Project 
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                  </span>
                </div>

                {/* Review Text */}
                <blockquote className="text-lg font-medium leading-7 text-slate-200 group-hover:text-white transition-colors">
                  “{testimonial.quote}”
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

      {/* Modern Modal Pop-up window */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-opacity">
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
              {activeProject.projectImages?.map((imgUrl, index) => (
                <div key={index} className="overflow-hidden rounded-xl bg-slate-950 border border-slate-800 group/img">
                  <img 
                    src={imgUrl} 
                    alt={`Project screenshot ${index + 1}`} 
                    className="w-full h-64 object-cover transform transition-transform duration-500 group-hover/img:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* Bottom mini-summary */}
            <div className="mt-8 bg-slate-800/40 border border-slate-800/80 rounded-xl p-4">
              <p className="text-slate-300 italic text-sm">
                "{activeProject.quote}"
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}