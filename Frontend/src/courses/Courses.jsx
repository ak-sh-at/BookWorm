import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'
import list from "../../public/list.json"
function Courses() {
    console.log(list);
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <Navbar/>
      <div className="min-h-screen">
      <Course/>
      </div>
      
     <Footer/>
    </div>
  )
}

export default Courses
