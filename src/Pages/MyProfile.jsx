import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const MyProfile = () => {
    const { user, updateUser, setUser } = useContext(AuthContext);
    const handleChange =(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;

        updateUser({ displayName: name, photoURL: photoURL })
            .then(() => {
                setUser({...user, displayName: name, photoURL: photoURL})
                Swal.fire("Updated!", "Profile updated successfully", "success");
            })
            .catch((err) => {
                Swal.fire("Error", err.message, "error");
            });
    }
    return (
        <main className="w-[800px] mx-auto grid grid-cols-1 md:grid-cols-8 gap-5 py-5 px-4">
            <section className="md:col-span-4">
                <div className="card w-full max-w-sm bg-gradient-to-br from-purple-100 via-white to-orange-100 shadow-lg p-6 border border-purple-200">
                    <div className="flex flex-col items-center gap-4">
                        <img src={user?.photoURL || "https://i.pravatar.cc/150"} referrerPolicy="no-referrer" alt="Profile" className="w-40 h-40 rounded-full shadow-lg border-4 border-white object-cover" />

                        <h2 className="text-2xl font-bold text-purple-700">{user?.displayName || "https://i.pravatar.cc/150"}</h2>

                        <p className="text-sm text-gray-700 font-medium">{user?.email}</p>

                        <p className="text-xs text-orange-500 break-all italic">{user?.photoURL || "No image URL found"}</p>
                    </div>
                </div>
            </section>
            <section className="md:col-span-4 ">
                <form onSubmit={handleChange} className="w-full mt-12 space-y-4 bg-gradient-to-br from-purple-50 via-white to-orange-50 p-5 rounded-xl shadow-md border border-purple-200">
                    <label className="font-semibold text-gray-700">Your Name</label>
                    <input type="text" name="name" defaultValue={user?.displayName} placeholder="Update Name" className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200" required />

                    <label className="font-semibold text-gray-700">Image URL</label>
                    <input type="text" name="photoURL" defaultValue={user?.photoURL} referrerPolicy="no-referrer" placeholder="Update Image URL" className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200" required />

                    <button type="submit" className="btn bg-gradient-to-r from-purple-500 to-orange-400 text-white font-bold hover:scale-105 transition-transform duration-200 w-full">
                        Update Profile
                    </button>
                </form>
            </section>
        </main>
    );
};

export default MyProfile;
