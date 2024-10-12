import React from 'react'

function Profile() {
  return (
    <div className="">
      <div className='max-w-[1200px] mx-auto p-12 flex items-center'>
        <div className="flex-1 text-xl font-medium px-20 flex flex-col gap-4">
          <div className="flex items-center gap-2 py-4 px-2 hover:bg-[#E5F9F0] transition-all duration-300 cursor-pointer hover:shadow-md rounded-lg">
            <p>Name: Arya Gami</p>
          </div>
          <div className="flex items-center gap-2 py-4 px-2 hover:bg-[#E5F9F0] transition-all duration-300 cursor-pointer hover:shadow-md rounded-lg">
            <p>Email: Arya Gami</p>
          </div>
          <button className='px-2 py-4 text-start rounded-lg hover:bg-[#E5F9F0] transition-all duration-300 cursor-pointer hover:shadow-md' >Privacy Settings</button>
        </div>
        <img src="https://via.placeholder.com/150" alt="profile" className='rounded-full size-80'  />
      </div>
    </div>
    
  )
}

export default Profile
