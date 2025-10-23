import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { RiNavigationFill } from "react-icons/ri";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const Register = () => {
    const {setUser, creatUser, updateUser, loginWithGoogle} = useContext(AuthContext)
    const [nameError, setNameError] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const navigate =  useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if(name.lemgth < 5){
            setNameError("Name must be more than 5 charecters")
            return;
        }else{
            setNameError("")
        }

        const validPassword = /[A-Z]/.test(password) && /[a-z]/.test(password) && password.length >= 6;
        if(!validPassword){
            alert("Error", "Password must contain upperCase, lowerCase, and must be at least 6 charecter")
            return
        }

        creatUser(email, password)
            .then((result) => {
                const user = result.user
                updateUser({displayName: name, photoURL: photo})
                    .then(() => {
                        setUser({...user, displayName: name, photoURL: photo})
                        Swal.fire("Success", "Registered Successfully", "success")
                        navigate("/login")
                    })
                    .catch((error) => {
                        console.log(error)
                        setUser(user);
                    })
            })
            .catch((error) => {
                Swal.fire("Error", error.message, "error")
            })
    }
    const handleGoogleLogIn = () => {
        loginWithGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);
                Swal.fire("Success", "Signed in With Google", "success");
                navigate("/login");
            })
            .catch((error) => {
                Swal.fire("Error", error.message, "error");
            });
    };


    return (
        <div className="flex justify-center items-center min-h-screen my-5">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="text-2xl font-semibold text-center">Register Your Account</h2>
                <form className="card-body" onSubmit={handleRegister}>
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="font-bold">Your Name</label>
                        <input type="text" required name="name" className="input" placeholder="Your Name" />
                        {nameError && <p className="text-red-500">{nameError}</p>}
                        {/* {nameError && <p className="font-semibold text-red-400">{nameError}</p>} */}
                        {/* Photo Url */}
                        <label className="font-bold">Photo Url</label>
                        <input type="text" required name="photo" className="input" placeholder="Photo Url" />
                        {/* email */}
                        <label className="font-bold">Email Address</label>
                        <input type="email" required name="email" className="input" placeholder="Enter your email address" />
                        {/* password */}
                        <label className="font-bold ">Password</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} name="password" required className="input input-bordered  pr-12" placeholder="Enter Your Password" />
                            <span className="absolute right-6 top-3 cursor-pointer text-xl text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <BsEyeSlash /> : <BsEye />}
                            </span>
                        </div>
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
                    <button onClick={handleGoogleLogIn} className="btn bg-orange-300  mt-3  border-[#e5e5e5] text-black">
                        <FcGoogle />
                        SignUp with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
