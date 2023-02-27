import React from 'react'
import Cards from '../Cards/Cards'
import Newcard from '../Newcard/Newcard'
import Sidebar from '../Sidebar/Sidebar'


const products = [
    {
      createdAt: "2023-02-14T23:23:08.228Z",
      name: "Edmond Hoeger",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1224.jpg",
      subtitle:
        "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      id: "5",
    },
    {
      createdAt: "2023-02-15T01:21:27.913Z",
      name: "Ms. Alvin Wolff",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/755.jpg",
      subtitle:
        "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      id: "7",
    },
    {
      createdAt: "2023-02-15T03:07:50.642Z",
      name: "Irma Bednar",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/742.jpg",
      subtitle:
        "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      id: "12",
    },
    {
      createdAt: "2023-02-15T04:46:13.414Z",
      name: "Ms. Kirk Hartmann",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1225.jpg",
      subtitle:
        "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      id: "13",
    },
    {
      createdAt: "2023-02-17",
      name: "salam",
      avatar: "https://picsum.photos/100/100",
      subtitle: "alekum",
      id: "14",
    },
  ];
  
  const post =[
    {
     "title": "Kristy Schinner",
     "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/849.jpg",
     "subtile": "subtile 1",
     "id": "1"
    },
    {
     "title": "Miss Jacqueline Yost",
     "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/823.jpg",
     "subtile": "subtile 2",
     "id": "2"
    },
    {
     "title": "Francis Rohan",
     "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/624.jpg",
     "subtile": "subtile 3",
     "id": "3"
    }
   ]

const Main = () => {
  return (
    <div className="flex justify-between ">
<Sidebar />
<div className="mt-10">
{/* products */}
<Newcard products={products}/>
{/* middle */}
<Cards post={post}/>
</div>
</div>

  )
}

export default Main