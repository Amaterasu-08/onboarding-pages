import React from 'react'
import Navbar from '../components/Navbar'
import leftarrow from "../assets/left-arrow.png"
import rightarrow from "../assets/right-arrow.png"
import sunday from "../assets/sunday.png"
import monday from "../assets/monday.png"
import tuesday from "../assets/tuesday.png"
import wednesday from "../assets/wednesday.png"
import thursday from "../assets/thursday.png"
import rectangle from "../assets/rectangle.png"
import rectangle2 from "../assets/rectangle2.png"
import add from "../assets/add.png"


const Page7 = ({onClick}) => {
    const times = [
        "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", 
        "10:00 AM", "11:00 AM", "12:00 PM", 
        "01:00 PM","02:00 PM","03:00 PM","04:00 PM","05:00PM"
      ];
  return (
    <div onClick={onClick}>
        <div  className="flex flex-col h-screen p-8 bg-white">
            <h1 className="text-2xl font-bold text-center mb-4">Workout Schedule</h1>
            <div className='flex justify-center items-baseline	pb-10	'>
                <img src={leftarrow}
                className='h-3 px-3'/>
                <p className='text-center'>Feb 2024</p>
                <img src={rightarrow} 
                className='h-3 px-3'/>
            </div>
            <div class="flex justify-between pb-10">
                <img src={sunday} alt="Sun 5" class="w-14 h-15"/>
                <img src={monday} alt="Sun 5" class="w-14 h-15"/>              
                <img src={tuesday} alt="Tue 7" class="w-14 h-15"/>
                <img src={wednesday} alt="Wed 8" class="w-14 h-15"/>
                <img src={thursday} alt="Thu 9" class="w-14 h-15"/>
            </div>
                <div className="relative left-0 top-0 h-screen p-4 my-7 bg-white overflow-auto">
                    <ul className="space-y-5">
                        {times.map((time, index) => (
                        <li key={index} className="flex items-center space-x-2">
                            
                            {!([1,3].includes(index)) && <div className="-ml-2"></div>}
                            <span>{time}</span>
                            {index === 1 && <div className=""><span className='absolute right-[25%]'
                            style={{
                                backgroundImage: `url(${rectangle})`
                              }}>Ab workout, 7:30am</span></div>}
                            {index === 3 && <div className=""><span className='absolute right-[10%]'
                            style={{
                                backgroundImage: `url(${rectangle2})`
                              }}
                            >Upperbody workout, 9am</span></div>}
                            <hr className='w-full border-b-2 border-gray-500'></hr>
                        </li>
                        ))}
                    </ul>
                </div>
            <div className='fixed bottom-20 right-20'>
                <img src={add} 
                className='h-12 w-12'/>
                
            </div>
        </div>
        <div>
            <Navbar />
        </div>
    </div>

  )
}

export default Page7
