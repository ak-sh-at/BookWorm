import React from "react";

function Cards({ item }) {
   console.log(item);
  return (
    <>
      <div className="my-5 p-3">
        <div className="card w-92 shadow-xl hover:scale-105 duration  300 dark:bg-slate-900 dark:text-white dark:border ">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-3 rounded-full badge badge-outline hover:bg-orange-400 hover:text-black hover:py-4">Buy now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
