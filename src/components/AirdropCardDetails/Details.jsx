import React from 'react';

// Social Icons - Using SVGs for easy embedding
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 hover:text-white transition-colors">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.4 3.3 9.6 0 7.3-5.2 11.1-12.2 11.1-5.9 0-10.4-3.4-12.2-7.2 2.3.4 4.5.2 6.5-.8-5.3-.9-7.5-5.3-7.5-10.4 1.2.6 2.5.8 3.8.7-5.2-3.4-3.8-9.4 2.2-11.4 6.9 8.3 18.2 10.4 18.2 10.4s-1.6-4.9 2.5-7.4c1.8-.9 3.9-.7 5.6.3z"></path>
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 hover:text-white transition-colors">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 hover:text-white transition-colors">
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
);


// Main Component
export default function Details() {
  return (
    // Main container with dark background and centered content
    <div className="bg-gray-900 min-h-screen font-sans text-gray-300 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl w-full mx-auto">
        {/* Card container with a more refined background, rounded corners, and shadow */}
        <div className="bg-[#111827] rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Main Grid Layout: Stacks on mobile, becomes 5-column grid on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-5">

            {/* Left Column: Image */}
            {/* Spans 2 columns on large screens. Hidden on mobile and stacked on top by default. */}
            <div className="lg:col-span-2 h-64 lg:h-full">
              <img 
                src="https://placehold.co/600x800/111827/9CA3AF?text=AITV+Project" 
                alt="AITV promotion visual" 
                className="w-full h-full object-cover"
                // Fallback in case the image fails to load
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x800/111827/9CA3AF?text=Image+Not+Found'; }}
              />
            </div>
            
            {/* Right Column: Content */}
            {/* Spans 3 columns on large screens. Takes full width on mobile. */}
            <div className="lg:col-span-3 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Engage with AITV agents to earn the $AITV airdrop
              </h1>
              <p className="text-base sm:text-lg text-gray-400 mb-8">
                Sign up, claim credits, complete missions, and interact to earn rewards.
              </p>

              {/* Countdown Timer */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Time Remaining</p>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-gray-800/50 p-3 rounded-lg flex-1 text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-white">13</p>
                    <p className="text-xs text-gray-400">Days</p>
                  </div>
                  <p className="text-2xl sm:text-3xl font-light text-gray-600">:</p>
                  <div className="bg-gray-800/50 p-3 rounded-lg flex-1 text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-white">21</p>
                    <p className="text-xs text-gray-400">Hours</p>
                  </div>
                  <p className="text-2xl sm:text-3xl font-light text-gray-600">:</p>
                  <div className="bg-gray-800/50 p-3 rounded-lg flex-1 text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-white">05</p>
                    <p className="text-xs text-gray-400">Minutes</p>
                  </div>
                </div>
              </div>

              {/* Call to Action Button */}
              <button className="w-full bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mb-8">
                Claim Your Share of 50M $AITV
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </button>

              {/* Meta Info Section */}
              {/* Stacks on mobile, becomes 3-column grid on medium screens */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-gray-700/50 pt-6">
                <div>
                  <p className="text-sm font-semibold text-gray-400 mb-2">Reward</p>
                  <p className="text-lg font-bold text-yellow-400">$AITV</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-400 mb-2">Project Links</p>
                  <div className="flex items-center gap-4 text-gray-400">
                    <a href="#" aria-label="Twitter"><TwitterIcon /></a>
                    <a href="#" aria-label="Website"><GlobeIcon /></a>
                    <a href="#" aria-label="Telegram"><SendIcon /></a>
                  </div>
                </div>
                <div className="col-span-1 sm:col-span-1">
                  <p className="text-sm font-semibold text-gray-400 mb-2">Category</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-700/50 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">Airdrop</span>
                    <span className="bg-gray-700/50 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">Sign up bonus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
