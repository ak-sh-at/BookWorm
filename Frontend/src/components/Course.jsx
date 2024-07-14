import React from "react";
import list from "../../public/list.json"
import Cards from "./Cards"
import {Link} from 'react-router-dom'
function Course() {
 
  return (
    <>
      <div >
        <div className="pt-28 items-center justify-center  text-center">
          <h1 className="text-2xl font-semibold">Welcome Readers!</h1>
          <p className="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptas sequi dolores officia molestiae fuga maiores veritatis reprehenderit voluptate tempora. Dolorum voluptate excepturi perferendis enim quaerat ullam beatae perspiciatis minus!</p>
        <Link to="/" >
        <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-700 duration-300">Back</button>
        </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {list.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
