import React from 'react';
const Cards = ({ cards, onBuyNow, isCartView }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {!isCartView && (
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">Premium Digital Tools</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our curated collection of premium digital products.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              
              {card.isPopular && (
                <span className="absolute top-6 right-6 bg-purple-100 text-[#7C3AED] px-4 py-1 rounded-full text-xs font-bold">
                  Popular
                </span>
              )}
              <div className="w-14 h-14 mb-6 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 text-2xl">
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-500 mb-6 text-sm leading-relaxed">{card.description}</p>
              
              <div className="mb-6">
                <span className="text-3xl font-bold">${card.price}</span>
                <span className="text-gray-400 text-sm">/One-Time</span>
              </div>

              <ul className="space-y-3 mb-8">
                {card.features?.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 text-sm">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {!isCartView ? (
                <button 
                  onClick={() => onBuyNow(card)}
                  className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold py-4 rounded-2xl transition-colors"
                >
                  Buy Now
                </button>
              ) : (
                <div className="text-center py-2 px-4 bg-green-50 text-green-600 rounded-xl font-medium">
                  Selected
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;