import React, { useRef } from 'react';
import logo from "../../assets/logo.png"
import Swal from "sweetalert2";

import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    const emailRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: "success",
            title: "Subscribed!",
            text: "Thank you for subscribing to our newsletter.",
            timer: 2000,
            showConfirmButton: false,
        });
        if(emailRef.current) emailRef.current.value = "";
    };


    return (
        <div className="bg-base-200 py-8">
            <div className="w-11/12 mx-auto">
                <div className="footer sm:footer-horizontal  text-base-content px-4">
                    <aside>
                        <img to={"/"} src={logo} alt="logo" className="w-20" />
                        <p className="text-gray-400 font-semibold">
                            Toy-Topia
                            <br />
                            Providing Toy Sinse 1992
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <Link className="link link-hover">About us</Link>
                        <Link className="link link-hover">Contact</Link>
                        <Link className="link link-hover">Jobs</Link>
                        <Link className="link link-hover">Press kit</Link>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <Link to={"/terms"} className="link link-hover">
                            Terms of use
                        </Link>
                        <Link to={"/privacy"} className="link link-hover">
                            Privacy policy
                        </Link>
                        <Link className="link link-hover">Cookie policy</Link>
                    </nav>
                    <form onSubmit={handleSubmit}>
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="w-80">
                            <label>Subscribe to our Newsleter</label>
                            <div className="join mt-2">
                                <input ref={emailRef} type="text" placeholder="Your Email" className="input " />
                                <button className="btn btn-primary ">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                    <nav>
                        <h6 className="footer-title">Social</h6>
                        <div className="grid grid-flow-col gap-4">
                            <Link to={"https://github.com/sohid7254"}>
                                <FaGithub className="text-3xl" />
                            </Link>
                            <Link to={"https://www.facebook.com/mdshahidulislam8854"}>
                                <FaFacebook className="text-3xl" />
                            </Link>
                            <Link>
                                <FaTwitter className="text-3xl" />
                            </Link>
                        </div>
                    </nav>
                </div>
                <div>
                    <div className="border border-gray-300 mt-3"></div>
                    <div>
                        <p className="text-gray-500 font-semibold text-center mt-3">Copyright © {new Date().getFullYear()} - All right reserved by Toy-Topia Pvt. Ltd.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;