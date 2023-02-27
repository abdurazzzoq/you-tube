import React from 'react'



const Sidebar = () => {
  return (
    <div className=' mt-10'>
        <ul className='flex flex-col '>
            <li className='list-top  cursor-pointer hover:text-red-600 text-gray-500 mb-7'>Home</li>
            <li className='list-top  cursor-pointer hover:text-red-600 text-gray-500 mb-7'>Trending</li>
            <li className='list-top  mb-16 cursor-pointer hover:text-red-600 text-gray-500'>Subsciptions</li>


            <li className='cursor-pointer hover:text-red-600 text-gray-500 mb-7'>Library</li>
            <li className='cursor-pointer hover:text-red-600 text-gray-500 mb-7'>Hitory</li>
            <li className='cursor-pointer hover:text-red-600 text-gray-500 mb-7'>Watch later</li>
            <li className='cursor-pointer hover:text-red-600 text-gray-500 mb-7'>Favourites</li>
            <li className='cursor-pointer hover:text-red-600 text-gray-500 mb-7'>Liked videos</li>
            <li className='cursor-pointer hover:text-red-600 text-gray-500 mb-7'>Music</li>
            <li className='cursor-pointer hover:text-red-600 text-gray-500 '>Games</li>

        </ul>
    </div>
  )
}

export default Sidebar