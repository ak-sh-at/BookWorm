import React from 'react'
import pict from "../../public/pict.jpg"
function Banner() {
  return (
    <>
    <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="order-2 md:order-1 w-full md:w-1/2">
               <div className="space-y-8 mt-12 md:mt-32">
               <h1 className="text-4xl font-bold ">Congratulations on being a <span className="text-orange-500">Book Worm ! </span> Explore the books and dwelve deeper into thoughts!</h1>
        <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi at tenetur eum cum rerum quae architecto velit aut. Numquam omnis sed dignissimos cum, tempora veniam tenetur ipsum quas mollitia?
        </p>
        <label className="bg-white input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="bg-white grow" placeholder="Email" />
</label>



               </div>
               <button className="mt-5 mb-20 text-orange-500 bg-transparent border border-orange-500 py-2 px-4 rounded transition-colors duration-300 hover:text-black hover:bg-orange-500">
  Submit
</button>
        </div>
        <div className="order-1 w-full md:w-1/2 flex items-center justify-center custom-padding" >
               <img src={pict} alt="" className="w-90 h-80 rounded-lg transform scale-100 hover:scale-110 transition-transform duration-300 z-10"></img>
        </div>
    </div>
    </>
  )
}

export default Banner
