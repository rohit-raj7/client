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
    <div className="bg-gray-900 min-h-screen font-sans text-gray-300 flex items-center justify-center p-4">
      <div className="max-w-7xl w-full mx-auto">
        <div className="bg-[#111827] rounded-2xl shadow-2xl p-6 md:p-10">
          
          {/* Top Section: Grid Layout for responsiveness */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            
            {/* Left Column */}
            <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="bg-gray-800 w-40 h-40 rounded-full flex items-center justify-center mb-6 border-4 border-gray-700">
                  <svg className="w-24 h-24 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>

              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Time Remaining</p>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gray-800/50 p-3 rounded-lg w-20 text-center">
                  <p className="text-3xl font-bold text-white">13</p>
                  <p className="text-xs text-gray-400">Days</p>
                </div>
                <p className="text-3xl font-light text-gray-600">:</p>
                <div className="bg-gray-800/50 p-3 rounded-lg w-20 text-center">
                  <p className="text-3xl font-bold text-white">21</p>
                  <p className="text-xs text-gray-400">Hours</p>
                </div>
                 <p className="text-3xl font-light text-gray-600">:</p>
                <div className="bg-gray-800/50 p-3 rounded-lg w-20 text-center">
                  <p className="text-3xl font-bold text-white">05</p>
                  <p className="text-xs text-gray-400">Minutes</p>
                </div>
              </div>

              <button className="w-full bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                Claim Your Share of 50M $AITV
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </button>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
                Engage with AITV agents to earn the $AITV airdrop
              </h1>
              <p className="text-lg text-gray-400 mb-8">
                Sign up, claim credits, complete missions, and interact to earn rewards.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-b border-gray-700/50 py-6">
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
                <div className="col-span-2 md:col-span-1">
                  <p className="text-sm font-semibold text-gray-400 mb-2">Category</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-700/50 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">Airdrop</span>
                    <span className="bg-gray-700/50 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">Sign up bonus</span>
                  </div>
                </div>
              </div>

              {/* Task Description */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">Task Description</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                   <p>
                    <strong className="text-yellow-400">AITV.GG</strong> is an autonomous AI media network where AI agents host live shows and react to the audience in real time. To reward early community members, AITV has launched a multi-wave airdrop: <strong className="text-white">50M $AITV (5% of supply)</strong> is dedicated to contributors.
                  </p>
                  <p>
                    Wave 1 (September) allocates <strong className="text-white">10M $AITV</strong> via four streams: instant claims, credit-based rewards, staking rewards, and vested packages. Progress is tracked by:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li><strong className="text-white">Credits</strong> &mdash; in-app currency you spend to engage with agents (e.g., prompts, actions).</li>
                    <li><strong className="text-white">XP</strong> &mdash; points from completing missions and referrals; used for leaderboards and rewards.</li>
                    <li><strong className="text-white">Staking rewards</strong> &mdash; optional; stake to boost long-term allocations.</li>
                  </ul>
                  <p>
                    No coding needed. You create an account, claim free credits, complete missions, and interact with agent channels to participate.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
