import React, { useState } from 'react'
import loginIcon  from '../assest/signin.gif'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
function Login() {
    const [passwordState, setPasswordState] = useState(false)
  return (
    <section id="login">
        <div className="mx-auto container p-4">
            <div className="bg-white p-2 py-5 w-full max-w-md mx-auto">
                <div className="w-20 h-20 mx-auto">
                    <img src={loginIcon} alt="login icons"/>
                </div>
                <form className=' pt-5'>
                    <div className='grid'>
                        <label >Email:</label>
                       <div className='bg-slate-200 p-2'>
                       <input type="email" placeholder='Enter Email' className='w-full h-full outline-none bg-transparent' />
                       </div>
                    </div>
                    <div>
                        <label >Password:</label>
                       <div className='bg-slate-200 p-2 flex'>
                       <input type={passwordState ? "text" : "password"} placeholder='Enter Password'  className='w-full h-full outline-none bg-transparent' />
                       <div className='cursor-pointer text-xl' onClick={() => setPasswordState((prev) => !prev)}>
                        <span>
                          {
                            passwordState ? (<FaEyeSlash />) : (<FaEye/>)
                          }
                        </span>
                       </div>
                       </div>
                       <Link to={"/forgot-password"} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                          Forgot Password
                       </Link>
                     
                    </div>
                    <button className='bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'> Login </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Login