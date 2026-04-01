import React from 'react';
import badge from "./../../assets/badge.png";
import banner from "./../../assets/banner.png"
import { Play } from 'lucide-react';

const Banner = () => {
  return (
    <section className="py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className='flex flex-col md:flex-row items-center justify-between gap-10'>
          <div className='w-full md:w-1/2 space-y-6'>
            <div className='inline-flex items-center gap-3 bg-[#F0F3FF] border border-[#E1E7FF] rounded-full px-4 py-2'>
              <img src={badge} alt="icon" className="w-5 h-5" />
              <p className='text-[#4F39F6] font-semibold text-sm md:text-base'>
                New: AI-Powered Tools Available
              </p>
            </div>
            <h1 className='text-4xl md:text-6xl font-bold text-[#1A1A1A] leading-[1.1]'>
              Supercharge Your <br className="hidden md:block" /> 
              <span className='text-[#1A1A1A]'>Digital Workflow</span>
            </h1>
            <p className='text-gray-500 text-lg md:text-xl max-w-lg'>
              Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
            </p>
            <div className='flex flex-wrap items-center gap-4 pt-4'>
              <button className='bg-[#9514FA] hover:bg-[#7e12d4] text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all active:scale-95'>
                Explore Products
              </button>
              
              <button className='flex items-center gap-2 border border-gray-200 hover:border-[#9514FA] px-8 py-4 rounded-full font-semibold transition-all group'>
                <div className='w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#9514FA] transition-all'>
                  <Play size={16} className='text-gray-600 group-hover:text-[#9514FA] fill-current' />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
          <div className='w-full md:w-1/2 relative'>
            <div className='relative z-10'>
              <img 
                src={banner} 
                alt="Digital Workflow" 
                className='w-full h-auto rounded-2xl'
              />
            </div>
            <div className='absolute -top-10 -right-10 w-64 h-64 bg-[#9514FA]/5 blur-3xl rounded-full -z-10'></div>
          </div>

        </div>
      </div>
     
    </section>
  )
}

export default Banner;