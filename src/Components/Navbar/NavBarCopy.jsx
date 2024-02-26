import { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaFacebook, FaLinkedin, FaRightFromBracket } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { IoSearchOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import logo from '../../assets/logoor.png'
import { Link as ScrollLink } from 'react-scroll'
import useScroll from "../../Hooks/useScroll/useScroll";
import axios from "axios";

const NavBarCopy = () => {
    const [active] = useScroll();
    const [menuBar, setMenuBar] = useState(true);
    const [search, setSearch] = useState(true);
    const { user, logOut } = useContext(AuthContext) || '';    
    const { photoURL, displayName } = user || '';



    return (
        <div className={` h-20 grid grid-rows-3 fixed w-screen z-50`}>
            <div className={`bg-green-100  flex justify-end items-center gap-5 pr-5 row-span-1  ${active ? '-translate-y-10 transition-all duration-500' : 'transition-all duration-300'}`}>
                <h3>Follow us on</h3>
                <div className="flex justify-center items-center gap-2 text-xl">
                    <p><FaFacebook /></p>
                    <p><IoLogoYoutube /></p>
                    <p><FaLinkedin /></p>
                </div>
            </div>

            <div className={`bg-fuchsia-950 row-span-2 px-10 grid grid-cols-5  ${active ? '-translate-y-8 transition-all duration-300' : 'transition-all duration-500'}`}>

                <div className={`col-span-1 `}>
                    <img src={logo} className=" h-14 " alt="" />
                </div>
                <div className={`col-span-3  flex justify-center items-center h-full text-white ${active ? 'text-red-300' : ''}`}>
                    <nav className="flex justify-center items-center gap-2 list-none">
                        <li>Home</li>
                        <li>Contacts</li>
                        <li>About us</li>
                        <li>Pages</li>

                    </nav>
                </div>
                <div className={`col-span-1  flex items-center justify-end gap-4`}>
                    {!user&&<Link to={'/signin'}><button className="px-6 py-2  bg-white text-black">Login</button></Link>}
                    <Link to={'/search'}><button  className="  text-white text-2xl"><IoSearchSharp /></button></Link>
                    {user&& <button onClick={()=>logOut()} className="btn">logout</button>}
                </div>

                {!search &&
                    <div className="absolute  transition-all duration-700 w-72 h-10 right-6 top-24">
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Search" />
                            <svg onClick={() => alert('hello')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                    </div>
                }
            </div>
        </div>
    );
};

export default NavBarCopy;