import React from 'react'

const Count = () => {
  return (
     <div className='bg-[#9514FA] mt-20 py-12'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white'>
            <div className='space-y-2'>
              <h2 className='text-4xl md:text-5xl font-bold'>50K+</h2>
              <p className='text-purple-100 opacity-80'>Active Users</p>
            </div>
            <div className='space-y-2 border-y md:border-y-0 md:border-x border-white/20 py-6 md:py-0'>
              <h2 className='text-4xl md:text-5xl font-bold'>200+</h2>
              <p className='text-purple-100 opacity-80'>Premium Tools</p>
            </div>
            <div className='space-y-2'>
              <h2 className='text-4xl md:text-5xl font-bold'>4.9</h2>
              <p className='text-purple-100 opacity-80'>Rating</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Count
