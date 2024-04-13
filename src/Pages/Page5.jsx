import React from 'react'
import { useState } from 'react';

const goals = [
    'Weight Loss',
    'Muscle Gain',
    'Flexibility and Mobility',
    'General Fitness',
    'Event-specific training',
    'Mindfulness and Mental Health',
  ];

const Page5 = ({onClick}) => {

    const [selectedGoals, setSelectedGoals] = useState([]);

  const toggleGoal = (goal) => {
    setSelectedGoals((prevGoals) =>
      prevGoals.includes(goal)
        ? prevGoals.filter((g) => g !== goal) //this will deselect the goal if it is already sellected
        : [...prevGoals, goal] // add goal
    );
  };

  return(
    <div onClick={onClick} className="flex flex-col h-screen p-6 bg-white">
      <h1 className="text-2xl font-bold text-center mb-4">What are your goals?</h1>
      {goals.map((goal) => (
        <div key={goal} className="flex justify-between my-[5%] p-3 bg-gray-100 rounded-lg">
        <label className='font-semibold' >{goal}</label>
          <input
            type="checkbox"
            checked={selectedGoals.includes(goal)}
            onChange={() => toggleGoal(goal)}
            className="mr-6 w-10 border-2 border-indigo-600"
          />
        </div>
      ))}
      <button className="mt-auto bg-[#7B91FF] text-white font-bold py-2 px-4 rounded">Confirm</button>
    </div>
  )
}

export default Page5
