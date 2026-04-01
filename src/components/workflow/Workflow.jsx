import React from 'react';

const Workflow = () => {
  return (
    <section className="bg-[#7C3AED] py-20 px-4">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready To Transform Your Workflow?
        </h2>
        
        {/* Subtitle */}
        <p className="text-purple-100 text-lg mb-10 max-w-2xl mx-auto">
          Join thousands of professionals who are already using DigiTools to work smarter. 
          Start your free trial today.
        </p>

        {/* Buttons Group */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button className="bg-white text-[#7C3AED] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
            Explore Products
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#7C3AED] transition-all">
            View Pricing
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-purple-200 text-sm">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default Workflow;