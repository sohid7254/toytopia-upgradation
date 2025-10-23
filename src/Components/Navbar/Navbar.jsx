import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <div className="bg-blend-darken shadow-sm">
            <div className="navbar w-11/12 mx-auto">
                {/* LEFT - Logo */}
                <div className="navbar-start">
                    <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
                        <img src={logo} alt="logo" className="w-12"/>
                    </Link>
                </div>

                {/* CENTER - Links (Desktop only) */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? "text-purple-600 font-bold" : "text-gray-600")}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/my-profile" className={({ isActive }) => (isActive ? "text-purple-600 font-bold" : "text-gray-600")}>
                                My Profile
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* RIGHT - Buttons */}
                <div className="navbar-end">
                    {/* Mobile Menu + Buttons */}
                    <div className="flex items-center gap-2 lg:hidden">
                        <Link to="/login" className="btn btn-primary btn-sm">
                            Login
                        </Link>
                        

                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <NavLink to="/" className={({ isActive }) => (isActive ? "text-purple-600 font-bold" : "text-gray-600")}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/my-profile" className={({ isActive }) => (isActive ? "text-purple-600 font-bold" : "text-gray-600")}>
                                        My Profile
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden lg:flex items-center gap-2">
                        <Link to="/login" className="btn btn-primary btn-sm w-20">
                            Login
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
