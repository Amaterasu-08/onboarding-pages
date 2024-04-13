import React from 'react'
import facebook from "../assets/facebook-icon.png"
import google from "../assets/google-icon.png"

const Page3 = ({onClick}) => {
  return (
    <div onClick={onClick} className="flex flex-col justify-evenly h-screen p-6  bg-white">
    <h1 className="text-2xl font-bold text-center mb-4">Create an account</h1>
    <input className="border border-gray-300 p-2 rounded-xl mb-2" type="text" placeholder="First Name" />
    <input className="border border-gray-300 p-2 rounded-xl mb-2" type="text" placeholder="Last Name" />
    <input className="border border-gray-300 p-2 rounded-xl mb-2" type="email" placeholder="Email" />
    <input className="border border-gray-300 p-2 rounded-xl mb-2" type="password" placeholder="Password" />
    <p className="text-center text-sm text-gray-600 mb-4">
      By proceeding, I agree to all <a href="/terms" className="text-blue-500 underline">T&C</a> and <a href="/privacy" className="text-blue-500 underline">Privacy Policy</a>
    </p>
    <button className="bg-[#7B91FF] text-white font-bold py-2 px-4 rounded-xl mb-2">Create an Account</button>
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
      Already have an account? <a href="/login" className="text-blue-500 underline">Login</a>
    </div>
  </div>
  )
}

export default Page3
