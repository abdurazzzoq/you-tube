import React from "react";
import Posts from "../Posts/Posts";
import user from "../image/Userpic.svg"

const Newcard = ({products}) => {
  return (
    <div className="">
    <div className="  gap-2 flex items-center text-2xl font-medium">
      <img src={user} alt="" />
      <h5>
      Dollie Blair
      </h5>
      </div>
      <div className="flex flex-wrap gap-3">
      {products.map((product, i) => {
        return <Posts key={i} product={product} />;
      })}
    </div>
    </div>
  );
};

export default Newcard;
