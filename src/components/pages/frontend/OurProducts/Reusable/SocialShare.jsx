import React from 'react';

const SocialShare = ({ title = "Check out this product from Guard-All!" }) => {
  const currentUrl = encodeURIComponent(window.location.href);
  const encodedTitle = encodeURIComponent(title);

  // Social Sharing Links Configuration
  const socialPlatforms = [
    { 
      name: 'Facebook', 
      icon: '/assets/image/social-logo/facebook.png', 
      url: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}` 
    },
    { 
      name: 'Gmail', 
      icon: '/assets/image/social-logo/gmail.png', 
      url: `mailto:?subject=${encodedTitle}&body=I thought you might be interested in this: ${currentUrl}` 
    },
    { 
      name: 'LinkedIn', 
      icon: '/assets/image/social-logo/linkedin.png', 
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}` 
    },
    { 
      name: 'Telegram', 
      icon: '/assets/image/social-logo/telegram.png', 
      url: `https://t.me/share/url?url=${currentUrl}&text=${encodedTitle}` 
    },
    { 
      name: 'Viber', 
      icon: '/assets/image/social-logo/viber.png', 
      url: `viber://forward?text=${encodedTitle}%20${currentUrl}` 
    },
  ];

  return (
    <div className="mt-8 font-figtree">
      <p className="font-medium text-[#1a365d] mb-3">Share this product:</p>
      <div className="flex gap-3">
        {socialPlatforms.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`Share on ${social.name}`}
            className="w-10 h-10 bg-[#0d3874] rounded-lg flex items-center justify-center hover:bg-[#f3760f] transition-all duration-300 transform hover:scale-110 shadow-md"
          >
            <img 
              src={social.icon} 
              alt={social.name} 
              className="w-6 h-6 object-contain brightness-0 invert" 
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialShare;