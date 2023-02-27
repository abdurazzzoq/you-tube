import React from 'react'
import Middle from '../Posts/Middle'

const Cards = ({post}) => {
  return (
<div className="mt-12">
<h5 className="mb-8 text-2xl font-medium">
      Recomended
      </h5>
<div className="flex flex-wrap gap-10 ">
 {post.map((post, index)=>{
return <Middle key={index} post={post} />
})} 
</div>

</div>
    )
}

export default Cards