import React from 'react'

const HomeAccordin = () => {
  return (
    <div className='bg-[#0C0C1D] text-white py-10'>
      <div className='w-[90%] mx-auto md:flex'>
          <div className='flex-1'>
              <h1 className='primary-heading'>Full spectrum <br />of <br />Solution</h1>
          </div>
          <div className='flex-1 '>
              <p className="globalPara py-5 md:py-0 md:pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nostrum officia tenetur, quos consequatur illum. Unde obcaecati quaerat ut deleniti!</p>
              <button className='globalBrownBtn'>Explore more</button>
          </div>
      </div>
    </div>
  )
}

export default HomeAccordin