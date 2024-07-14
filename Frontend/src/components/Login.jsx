import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
function Login() {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal ">
          <div className="modal-box bg-white text-black dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              {location.pathname!=='/'?
              (<Link
                to="/" 
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>)
              : (<button onClick={() => document.getElementById("my_modal_3").close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>)}
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 mb-6">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email!"
                {...register("email", { required: true })}
                className="w-80 px-3 border rounded-md outline-none bg-white dark:bg-slate-900"
              />
              <br/>
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              <br />
              </div>
              <div className="mb-8">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter password"
                {...register("password", { required: true })}
                className="w-80 px-3  border rounded-md outline-none  bg-white dark:bg-slate-900"
              />
              <br/>
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="flex flex-row justify-around items-center mt-3">
              <div>
                <button className="border-2 px-2 py-1 rounded-md bg-orange-400 hover:bg-orange-700 hover:scale-105">
                  Login
                </button>
              </div>
              <div >
                <p >
               
                {location.pathname!=='/signup'?
                (<p> Not Registered?
              <Link
              to="/signup"
                 className="text-blue-800 underline cursor-pointer"
            >
              Sign up
            </Link></p>)
              : (<p> Not Registered?<button onClick={() => document.getElementById("my_modal_3").close()}  className="text-blue-800 underline cursor-pointer">Sign up</button></p>)}
                  
                  
                </p>
              </div>
            </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
