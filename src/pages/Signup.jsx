import { Link } from "react-router-dom"

function Signup() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
    <div className="h-[80vh] w-[80vw] max-w-[1300px] max-h-[900px] flex shadow-2xl rounded-[40px]">
      <div className="w-[60%] h-full bg-gradient-to-tr from-[#F8B59A] to-[#FDE1EF] via-[#F27EA1] via rounded-l-[40px] flex justify-center items-center">
        <div className="flex-col">
          <p className='text-5xl font-medium text-center tracking-tightiest'>Sign up</p>
          <p className='text-center font-medium text-lg text-[#3A3A3A]' >Start your journey with us</p>
          <form className='flex flex-col mt-7 gap-2'>
            <input
              type="text"
              name="username"
              placeholder="Username"
              // value={username}
              // onChange={handleChange}
              className='text-lg py-4 px-5 rounded-full outline-none'
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              // value={username}
              // onChange={handleChange}
              className='text-lg py-4 px-5 rounded-full outline-none'
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              //  value={password}
              // onChange={handleChange}
              className='text-lg py-4 px-5 rounded-full outline-none'
            />
            <button type="submit" className='mt-2 text-center min-w-full bg-[#F4F6F9] text-black py-4 rounded-full hover:-translate-y-1 transition-all duration-300 hover:shadow-lg'>Sign up</button>
          </form>
          <Link to="/signup" className='text-end mt-1 text-sm'>
            <p className='text-end mt-1 text-sm text-white hover:'>Already have an Account?</p>
          </Link>
          <button className='mt-2 text-center min-w-full bg-[#F4F6F9] text-black py-4 rounded-full hover:-translate-y-1 transition-all duration-300 hover:shadow-lg' >Signup using Google</button>
        </div>
      </div>
      <div className="w-[40%] h-full bg-[#FFE8E8] rounded-r-[40px]">
        
      </div>
    </div>
  </div>
  )
}

export default Signup
