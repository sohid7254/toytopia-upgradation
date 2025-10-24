import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Feedback = () => {
    const { user } = useContext(AuthContext);
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user) {
            return Swal.fire("Unauthorized", "Please login to submit feedback", "error");
        }

        if (!message.trim()) {
            return Swal.fire("Oops!", "Feedback can't be empty", "warning");
        }

        // Dummy submission logic (replace with backend later)
        Swal.fire("Thank you!", "Your feedback has been submitted", "success");
        setMessage("");
    };

    return (
        <div className="max-w-xl mx-auto py-10 px-4">
            <title>Toy-Topia | Feedback</title>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">We value your feedback</h2>
            <p className="text-sm text-gray-600 mb-6">Let us know what you think, suggest improvements, or report any issues.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <textarea name="feedback" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your feedback here..." className="textarea textarea-bordered w-full h-32" required />
                <button type="submit" className="btn bg-gradient-to-r from-purple-500 to-orange-400 text-white font-bold w-full">
                    Submit Feedback
                </button>
            </form>
        </div>
    );
};

export default Feedback;
