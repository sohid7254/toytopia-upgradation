import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="flex justify-center items-center min-h-screen my-5">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="text-2xl font-semibold text-center">Register Your Account</h2>
                <form className="card-body">
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="font-bold">Your Name</label>
                        <input type="text" required name="name" className="input" placeholder="Enter your email address" />
                        {/* {nameError && <p className="font-semibold text-red-400">{nameError}</p>} */}
                        {/* Photo Url */}
                        <label className="font-bold">Photo Url</label>
                        <input type="text" required name="photo" className="input" placeholder="Enter your email address" />
                        {/* email */}
                        <label className="font-bold">Email Address</label>
                        <input type="email" required name="email" className="input" placeholder="Enter your email address" />
                        {/* password */}
                        <label className="font-bold ">Password</label>
                        <input type="password" required name="password" className="input" placeholder="Enter Your Password" />
                        {/* button */}
                        <button type="submit" className="btn btn-neutral mt-4">
                            Register
                        </button>

                        <p className="text-center font-semibold pt-2">
                            Already Have An Account?{" "}
                            <Link to={"/login"} className="text-red-400 hover:underline">
                                Log In
                            </Link>
                        </p>
                    </fieldset>
                </form>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-center mb-2">Or</h2>
                    <div className="border border-gray-400 w-50"></div>
                </div>
                <div className="flex justify-center items-center">
                    <button className="btn bg-orange-300  mt-3  border-[#e5e5e5] text-black">
                        <FcGoogle />
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;