import React from 'react'

const Middle = ({post}) => {
  return (
    <div className='box'>
        <img className="cursor-pointer rounded-2xl w-96 h-52 sm:mx-0 sm:shrink-0" src={post.image} alt="" />
    <h3 className='text-sm text-black font-semibold'>{post.title}</h3>
    <p className='text-sm text-gray-500'>{post.subtile}</p>
    </div>
  ) 
}

export default Middle