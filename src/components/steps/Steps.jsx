import React from 'react';
import icon_1 from "./../../assets/user.png"
import icon_2 from "./../../assets/package.png"
import icon_3 from "./../../assets/rocket.png"
const Steps = () => {
  const stepsData = [
    {
      number: 1,
      icon: icon_1,
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started."
    },
    {
      number: 2,
      icon: icon_2,
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs."
    },
    {
      number: 3,
      icon: icon_3,
      title: "Start Creating",
      description: "Download and start using your premium tools immediately."
    }
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-5 tracking-tight">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto font-medium leading-relaxed">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stepsData.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-3xl border border-gray-100 shadow-lg shadow-gray-50/50 flex flex-col items-center text-center transition-all hover:border-[#E9D5FF] hover:shadow-xl hover:shadow-[#7C3AED]/5"
            >
              <div className="relative mb-10">
                <div className="absolute -top-3 -right-3 bg-[#7C3AED] text-white w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold shadow-md">
                  {step.number}
                </div>
                <div className="w-24 h-24 bg-white rounded-full border border-gray-100 flex items-center justify-center shadow-inner">
                 <img src={step.icon} alt="icon" />
                </div>
              </div>

           {
              <h3 className="text-2xl font-bold text-[#111827] mb-4 tracking-tight">
                {step.title}
            </h3>
              }
              <p className="text-gray-500 text-base leading-relaxed font-normal px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Steps;