import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className=" bg-white shadow-md sticky top-0 z-50">
            <div className="navbar w-11/12 mx-auto flex items-center justify-between lg:justify-between">
                {/* LEFT - Logo */}
                <div className="">
                    <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
                        <img src={logo} alt="logo" className="w-12" />
                    </Link>
                </div>

                {/* CENTER - Links (Desktop only) */}
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-gray-600")}>
                                Home
                            </NavLink>
                        </li>
                        {user ? (
                            <li>
                                <NavLink to="/my-profile" className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-gray-600")}>
                                    My Profile
                                </NavLink>
                            </li>
                        ) : (
                            ""
                        )}
                        <li>
                            <NavLink to="/feedback" className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-gray-600")}>
                                FeedBack
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/allToys" className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-gray-600")}>
                                All-Toys
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/support" className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-gray-600")}>
                                Support
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/FAQ" className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-gray-600")}>
                                FAQ
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* RIGHT - Buttons */}
                <div className="">
                    {/* Mobile View */}
                    <div className="flex items-center gap-2 lg:hidden">
                        {!user ? (
                            <Link to="/login" className="btn btn-primary btn-sm">
                                Login
                            </Link>
                        ) : (
                            <div className="flex items-center gap-2">
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName || "No Name"}>
                                    <img src={user?.photoURL || "/default-avatar.png"} referrerPolicy="no-referrer" alt="User" className="w-12 h-12 rounded-full object-cover border border-gray-300 " />
                                </div>
                                <button onClick={logout} className="btn btn-primary">
                                    LogOut
                                </button>
                            </div>
                        )}

                        {/* Mobile Dropdown */}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <NavLink to="/" className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-gray-600")}>
                                        Home
                                    </NavLink>
                                </li>
                                {user ? (
                                    <li>
                                        <NavLink to="/my-profile" className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-gray-600")}>
                                            My Profile
                                        </NavLink>
                                    </li>
                                ) : (
                                    " "
                                )}
                                <li>
                                    <NavLink to="/feedback" className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-gray-600")}>
                                        FeedBack
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/allToys" className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-gray-600")}>
                                        All-Toys
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/support" className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-gray-600")}>
                                        Support
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/FAQ" className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-gray-600")}>
                                        FAQ
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Desktop View */}
                    <div className="hidden lg:flex items-center gap-4">
                        {!user ? (
                            <Link to="/login" className="btn btn-primary btn-sm w-20">
                                Login
                            </Link>
                        ) : (
                            <div className="flex items-center gap-4">
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName || "No Name"}>
                                    <img src={user?.photoURL || "/default-avatar.png"} referrerPolicy="no-referrer" alt="User" className="w-12 h-12 rounded-full object-cover border border-gray-300 " />
                                </div>
                                <button onClick={logout} className="btn btn-primary">
                                    LogOut
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
