import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h3 className="font-bold text-4xl mb-10">CONTACT US</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-7 ">
              <div className=" ">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your full name!"
                  {...register("name", { required: true })}
                  className="w-80 px-3 border rounded-md outline-none bg-white dark:bg-slate-900"
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
                
              </div>
              <div className="">
                <span>Email</span>
                <br />
                <input
                  type="Email"
                  placeholder="Enter your email!"
                  {...register("email", { required: true })}
                  className="w-80 px-3  border rounded-md outline-none  bg-white dark:bg-slate-900"
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="">
                <span>Message</span>
                <br />
                <textarea
                  name="postContent"
                  rows={6}
                  cols={37}
                  className="bg-white border rounded-md p-1 dark:bg-slate-900 dark:text-white"
                  {...register("textarea", { required: true })}
                />
                <br />
                {errors.textarea && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <button className="border-2 px-2 py-1 rounded-md bg-orange-500 text-white hover:bg-orange-700 hover:scale-105 duration-300">
              Submit
            </button>
            </div>
            
          </form>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Contact;
