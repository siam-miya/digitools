import React from 'react';
import { Check } from 'lucide-react'; // আইকনের জন্য lucide-react ব্যবহার করা হয়েছে

const PricingCard = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for getting started",
      price: "0",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month"
      ],
      buttonText: "Get Started Free",
      isPopular: false
    },
    {
      name: "Pro",
      description: "Best for professionals",
      price: "29",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics"
      ],
      buttonText: "Start Pro Trial",
      isPopular: true // এটি মাঝখানের পার্পল কার্ডের জন্য
    },
    {
      name: "Enterprise",
      description: "For teams and businesses",
      price: "99",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding"
      ],
      buttonText: "Contact Sales",
      isPopular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-[32px] border transition-all duration-300 ${
                plan.isPopular 
                ? "bg-[#7C3AED] text-white border-[#7C3AED] scale-105 shadow-2xl z-10 py-12" 
                : "bg-[#F9FAFB] text-gray-900 border-gray-100 hover:shadow-xl"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD700] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.isPopular ? "text-purple-100" : "text-gray-500"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className={`text-sm font-medium ${plan.isPopular ? "text-purple-200" : "text-gray-400"}`}>
                  /Month
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <Check className={`w-5 h-5 ${plan.isPopular ? "text-white" : "text-green-500"}`} />
                    <span className={plan.isPopular ? "text-purple-50" : "text-gray-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button className={`w-full py-4 rounded-2xl font-bold transition-colors ${
                plan.isPopular 
                ? "bg-white text-[#7C3AED] hover:bg-gray-100" 
                : "bg-[#7C3AED] text-white hover:bg-[#6D28D9]"
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCard;
