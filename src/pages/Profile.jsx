import { useState } from 'react'

function Profile() {

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  }

  return (
    <div className="">
      <div className='max-w-[1200px] mx-auto p-12 flex items-center'>
        <div className="flex-1 text-xl font-medium px-20 flex flex-col gap-4 relative">
          <div className="flex items-center gap-2 py-4 px-2 hover:bg-[#E5F9F0] transition-all duration-300 cursor-pointer hover:shadow-md rounded-lg">
            <p>Name: Arya Gami</p>
          </div>
          <div className="flex items-center gap-2 py-4 px-2 hover:bg-[#E5F9F0] transition-all duration-300 cursor-pointer hover:shadow-md rounded-lg">
            <p>Email: arya@gmail.com</p>
          </div>
          <button className='px-2 py-4 text-start rounded-lg hover:bg-[#E5F9F0] transition-all duration-300 cursor-pointer hover:shadow-md' onClick={handleShow}>Privacy Settings</button>
          <div className={`${show?'block':'hidden'} absolute -bottom-36`}>
            <div className={`px-2 py-4 text-start rounded-lg bg-[#E5F9F0]`}>
              <p>Public</p>
              <p className={` text-sm text-gray-500 ${show?'block':'hidden'}`}>Change your privacy setting for other users of the app to see profile on their travel section of not visited places.</p>
            </div>
          </div>
        </div>
        <img src="https://via.placeholder.com/150" alt="profile" className='ml-10 rounded-full size-80'  />
      </div>
    </div>
    
  )
}

export default Profile
