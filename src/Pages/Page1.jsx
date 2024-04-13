import React from 'react'
import one from "../assets/1.png"

const Page1 = ({onClick}) => {
  return (
    <div onClick={onClick}className="flex flex-col h-screen p-6 bg-white">
        <div className="flex justify-end">
            <button className="text-blue-500">Skip</button>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
            <img src={one} alt="Illustration" className="w-full max-w-xs mb-8" />
            <h1 className="text-2xl font-bold text-left mb-4">Track Your Goal</h1>
            <p className="text-left text-gray-600">
                Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals.
            </p>
        </div>
        <div className="flex justify-end pr-5">
            <button className="w-12 h-12  flex justify-center items-center">
                <img src='src/assets/button1.png'/>
            </button>
        </div>
  </div>
  )
}

export default Page1
