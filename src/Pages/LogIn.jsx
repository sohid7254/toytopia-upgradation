import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const LogIn = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="text-2xl font-semibold text-center">Log In Your Account</h2>
                <form className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="font-bold">Email Address</label>
                        <input type="email" name="email" className="input" placeholder="Enter your email address" required />
                        {/* password */}
                        <label className="font-bold ">Password</label>
                        <input type="password" name="password" className="input" placeholder="Enter Your Password" required />
                        <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div>

                        <button type="submit" className="btn btn-neutral mt-4">
                            Login
                        </button>
                        <p className="text-center font-semibold pt-2">
                            Don't Have An Account?{" "}
                            <Link to={"/register"} className="text-red-400 hover:underline">
                                Register
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

export default LogIn;
