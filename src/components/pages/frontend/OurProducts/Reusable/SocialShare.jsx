import React, { useEffect, useState } from 'react';

const SocialShare = ({ title = "Check out this product from Guard-All!" }) => {
  const [platforms, setPlatforms] = useState([]);
  const IMAGE_BASE_URL = "http://localhost:5000";
  
  // Get current page details
  const currentUrl = encodeURIComponent(window.location.href);
  const encodedTitle = encodeURIComponent(title);

  useEffect(() => {
    fetch(`${IMAGE_BASE_URL}/api/social-platforms`)
      .then(res => res.json())
      .then(data => setPlatforms(data))
      .catch(err => console.error("Error fetching social platforms:", err));
  }, []);

  // Function to inject real data into the database template
  const generateShareUrl = (template) => {
    return template
      .replace(/{url}/g, currentUrl)
      .replace(/{title}/g, encodedTitle);
  };

  if (platforms.length === 0) return null;

  return (
    <div className="mt-8 font-figtree">
      <p className="font-medium text-[#1a365d] mb-3">Follow Us:</p>
      <div className="flex gap-3">
        {platforms.map((social) => (
          <a
            key={social.id}
            href={generateShareUrl(social.share_template)}
            target="_blank"
            rel="noopener noreferrer"
            title={`Share on ${social.name}`}
            className="w-10 h-10 bg-[#0d3874] rounded-lg flex items-center justify-center hover:bg-[#f3760f] transition-all duration-300 transform hover:scale-110 shadow-md"
          >
            <img 
              src={`${IMAGE_BASE_URL}${social.icon_path}`} 
              alt={social.name} 
              className="w-6 h-6 object-contain brightness-0 invert" 
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialShare;