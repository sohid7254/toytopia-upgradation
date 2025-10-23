import React, { useRef } from "react";
import Swal from "sweetalert2";

const RightAsideForm = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = nameRef.current?.value.trim();
        const email = emailRef.current?.value.trim();

        if (!name || !email) {
            Swal.fire({
                icon: "error",
                title: "Missing Info",
                text: "Please enter both name and email.",
            });
            return;
        }

        Swal.fire({
            icon: "success",
            title: "Subscribed!",
            text: "Thank you for subscribing to our newsletter.",
            timer: 2000,
            showConfirmButton: false,
        });

        nameRef.current.value = "";
        emailRef.current.value = "";
    };

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <fieldset className="space-y-3">
                        <label className="label">Name</label>
                        <input type="text" ref={nameRef} className="input input-bordered w-full" placeholder="Your Name" />

                        <label className="label">Email</label>
                        <input type="email" ref={emailRef} className="input input-bordered w-full" placeholder="Your Email" />

                        <button type="submit" className="btn btn-primary w-full mt-4">
                            Try Now
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default RightAsideForm;
