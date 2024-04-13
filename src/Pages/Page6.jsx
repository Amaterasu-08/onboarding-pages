import React from 'react'
import Navbar from '../components/Navbar'
import backButton from "../assets/back-button.png"
import chart1 from "../assets/chart1.png"
import chart2 from "../assets/chart2.png"
import upcoming1 from "../assets/upcoming-1.png"
import toggle from "../assets/Toggle.png"
import upcoming2 from "../assets/upcoming-2.png"


const Page6 = ({onClick}) => {
  return (
    <div onClick={onClick}>
    <div  className='p-5 grid grid-cols-4 gap-10'>
        <div className='w-10 h-14'> 
            <button className='flex justify-items-start	'>
                <img src={backButton} />
            </button>
        </div>
        <div className='col-span-3 flex justify-stretch	'>
            <h1 className=' text-4xl font-bold	'>Workout Tracker</h1>
        </div>
        <div className='col-span-4 pb-5'>
            <img src={chart1}
            className='h-[20vh] w-screen'/>
        </div>
        <div className='col-span-4 pb-5'>
            <img src={chart2}
            className='w-screen h-[8vh]'/>
        </div>
        <div className='col-span-3'>
            <h2 className='text-center text-2xl font-semibold'>Upcoming Workout</h2>
        </div>
        <div className='flex justify-end'>
            <button className='text-sm font-semibold text-blue-500'>See more</button>
        </div>
        <div class=" col-span-4">
            <div className="flex items-center p-4 bg-white border rounded-lg">
                <div className="relative">
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full"></div>
                    <img src={upcoming1} alt="Avatar" className="w-12 h-12 rounded-full"/>
                </div>
                
                <div className="ml-4">
                    <p className="font-semibold">Full Body Workout</p>
                    <p>Today 3pm</p>
                </div>

                <button className="ml-auto p-2 ">
                    <img src={toggle} />
                </button>
            </div>
        </div>
        <div class=" col-span-4">
            <div className="flex items-center p-4 mb-10 bg-white border rounded-lg">
                <div className="relative">
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full"></div>
                    <img src={upcoming2} alt="Avatar" className="w-12 h-12 rounded-full"/>
                </div>
                
                <div className="ml-4">
                    <p className="font-semibold">Upper Body Workout</p>
                    <p>4 Feb, 3:30</p>
                </div>

                <button className="ml-auto p-2 ">
                    <img src={toggle} />
                </button>
            </div>
        </div>
    </div>
    <div>
        <Navbar />
    </div>
    </div>
  )
}

export default Page6
