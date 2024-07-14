import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
function Signup() {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box border-2 p-5 rounded-md shadow md bg-white text-black dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
          
            <h3 className="font-bold text-lg">Sign up</h3>
            <div className="mt-4">
              <div className="mb-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your full name"
                {...register("name", { required: true })}
                className="w-80 px-3  border rounded-md outline-none bg-white dark:bg-slate-900"
              />
              <br/>
               {errors.name && <span className="text-sm text-red-500">This field is required</span>}
              <br />
              </div>
              <div className="mb-6 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email!"
                {...register("email", { required: true })}
                className="w-80 px-3  border rounded-md outline-none bg-white dark:bg-slate-900"
              />
              <br/>
               {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              <br />
              </div>
              <div className="mb-6 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter password"
                {...register("password", { required: true })}
                className="w-80 px-3 border rounded-md outline-none  bg-white dark:bg-slate-900"
              />
               <br/>
               {errors.password && <span className="text-sm text-red-500">This field is required</span>}
              </div>
            </div>
            <div className="flex flex-row justify-around items-center mt-3">
              <div>
                <button className="border-2 px-2 py-1 rounded-md bg-orange-400 hover:bg-orange-700 hover:scale-105">
                  Sign up
                </button>
              </div>
              <div>
                <Login/>
                <p>
                  Already Registered?{" "}
                  <button
                   
                    className="text-blue-800 underline cursor-pointer"
                  onClick={()=>
                    document.getElementById("my_modal_3").showModal()
                  }
                  >
                    Login
                  </button>
                  <Login/>
                </p>
              </div>
            </div>
            </form>
          </div>
        
        </div>
      </div>
    </>
  );
}

export default Signup;
