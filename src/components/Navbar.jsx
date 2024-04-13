import React from 'react'
import navbar from "../assets/navbar.png"
import search from "../assets/search.png"

const Navbar = () => {
  return (
    <div>
        <div className='fixed inset-x-0 bottom-0 bg-white border-t p-4 flex justify-around'>
        <img src={navbar} />
        
        </div>
        <div className='fixed inset-x-0 bottom-3 flex justify-center '>
            <img
                src={search} />
        </div>
    </div>
 )
}

export default Navbar
