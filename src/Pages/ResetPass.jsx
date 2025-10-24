import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation } from "react-router";

const ResetPass = () => {
    const { resetPassword } = useContext(AuthContext);
    const location = useLocation();
    const defaultEmail = location.state?.email;

    const handleReset = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        

        resetPassword(email)
            .then(() => {
                Swal.fire("Success!", "Password reset email sent", "success");
                window.open("https://mail.google.com","_blank");
            })
            .catch((err) => {
                Swal.fire("Error", err.message, "error");
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-base-200 px-4">
            <title>Toy-Topia | ResetPass</title>
            <div className="card w-full max-w-sm bg-base-100 shadow-xl p-6">
                <h2 className="text-xl font-bold text-center mb-4">Reset Your Password</h2>
                <form onSubmit={handleReset} className="space-y-4">
                <input 
                    type="email" 
                    name="email" 
                    required 
                    defaultValue={defaultEmail} 
                    placeholder="Enter your email" 
                    className="input input-bordered w-full" 
                />
                    <button type="submit" className="btn btn-primary w-full">
                        Send Reset Link
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPass;
