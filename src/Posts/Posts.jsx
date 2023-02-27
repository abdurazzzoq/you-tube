import React from "react";

const Posts = ({product}) => {


  return (
      <div className=" mt-5 w-60 box ">
      <img
        className="cursor-pointer rounded-2xl block w-60 h-40 mx-auto  sm:mx-0 sm:shrink-0"
        src={product.avatar}
        alt=""
      />
      <h3 className="text-sm text-black font-semibold">{product.name}</h3>
      <p className=" text-sm text-gray-500">{product.createdAt}</p>
    </div>
 

  );
};

export default Posts;
