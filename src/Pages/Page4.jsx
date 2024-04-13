import React from 'react'
import facebook from "../assets/facebook-icon.png"
import google from "../assets/google-icon.png"

const Page4 = ({onClick}) => {
  return (
    <div onClick={onClick} className="flex flex-col justify-between h-screen p-6 bg-white">

        <div className='flex flex-col '>
            <h1 className="text-2xl font-bold text-left mb-4  my-4 ">Welcome Back</h1>
            <input className="border border-gray-300 p-2 rounded mb-2  my-4" type="email" placeholder="Email" />
            <input className="border border-gray-300 p-2 rounded mb-2  my-4" type="password" placeholder="Password" />
            <a href="/forgot-password" className="text-[#7B91FF] underline text-left mb-4  my-4">Forgot your password?</a>
            <button className="bg-[#7B91FF] text-white font-bold py-2 px-4 rounded mb-2 my-4">Sign In</button>
        </div>
        
        <div className='flex flex-col justify-evenly'>
            
            <div className="flex items-center justify-center mb-2">
                <hr className="border-gray-300 flex-grow mx-2" />
                <span>Or</span>
                <hr className="border-gray-300 flex-grow mx-2" />
            </div>
            <div className="flex justify-center mb-4">
                <button className="w-10 h-10 rounded-lg bg-white border border-gray-900 flex justify-center items-center mr-2">
                    <img src={google} />
                </button>
                <button className="w-10 h-10 rounded-lg bg-white border border-gray-900 flex justify-center items-center ml-2">
                    <img src={facebook} />
                </button>
            </div>
            <div className="text-center text-sm text-gray-600">
                Don't have an account yet? <a href="/create-account" className="text-blue-500 underline">Create an account</a>
            </div>
        </div>
  </div>
  )
}

export default Page4
