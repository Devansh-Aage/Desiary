import React from 'react'

function Navbar() {
  return (
    <div className='w-screen h-16 shadow-lg flex items-center px-4 justify-between'>
      <img src="./Logo.png" alt="" className='h-12' />
      <div className='flex items-center gap-6 text-lg' >
        <div className="">Wishlist</div>
        <div className="">Travel</div>
        <div className="">Memories</div>
        <div className="">Journal</div>
        <div className="size-10 rounded-full bg-[#E5F9F0] border">
            <img src="" alt="" className='size-full '/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
