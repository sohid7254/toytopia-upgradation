import React, { useContext, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const LogIn = () => {
    const emailRef = useRef()
    const { login, loginWithGoogle, setUser, loading, setLoading } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname|| "/";

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then((result) => {
                setUser(result.user);
                Swal.fire("Success", "Loged In Successfully", "success")
                navigate(from, {replace: true});
                setLoading(false)
            })
            .catch((err)=>{
                Swal.fire("Error", err.message, "error")
                setLoading(false)
            })
    }

    const handleGoogleLogIn = () => {
        loginWithGoogle()
          .then((result)=>{
            setUser(result.user)
            Swal.fire("Succes!", "Loged In with google", "success")
            navigate(from, {replace: true})
          })
          .catch((err) => {
            Swal.fire("Error", err.message, "error")
          })
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="text-2xl font-semibold text-center">Log In Your Account</h2>
                <form className="card-body" onSubmit={handleLogIn}>
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="font-bold">Email Address</label>
                        <input type="email" ref={emailRef} name="email" className="input" placeholder="Enter your email address" required />
                        {/* password */}
                        <label className="font-bold ">Password</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} name="password" className="input" placeholder="Enter Your Password" required />
                            <span className="absolute right-6 top-3 cursor-pointer text-xl " onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <BsEyeSlash /> : <BsEye />}
                            </span>
                        </div>
                        <div>
                            <Link to={"/resetpass"} state={{email: emailRef.current?.value}} className="link link-hover">
                                Forgot password?
                            </Link>
                        </div>

                        <button type="submit" className="btn btn-neutral mt-4">
                            {loading ? "Logging in...." : "LogIn"}
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
                    <button onClick={handleGoogleLogIn} className="btn bg-orange-300  mt-3  border-[#e5e5e5] text-black">
                        <FcGoogle />
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
