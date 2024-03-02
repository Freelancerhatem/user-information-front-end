import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import logo from '../../assets/logoor.png'
import { Link as ScrollLink } from 'react-scroll'
import useScroll from "../../Hooks/useScroll/useScroll";
import useInfoUser from "../../Hooks/useInfoUser/useInfoUser";
import { FiMenu } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { MdPermContactCalendar } from "react-icons/md";
import { SiPowerpages } from "react-icons/si";
import { SlLogin } from "react-icons/sl";

const NavBarCopy = () => {
    const [active] = useScroll();
    const [menuBar, setMenuBar] = useState(true);
    const [search, setSearch] = useState(true);
    const { user, logOut } = useContext(AuthContext) || '';
    const { photoURL, displayName } = user || '';
    const [userData, refetch] = useInfoUser();
    const[sideBar,setBar]=useState(false)
    console.log(userData)
    return (
        <div className={` h-20 grid grid-rows-3 fixed w-screen z-50`}>
                {/* sidebar */}
                <div className={`fixed  w-56 pt-20 transition-all duration-500 h-screen -z-50 ${sideBar?'translate-x-0':'-translate-x-56'}  bg-white`}>
                    <nav className="mt-20 list-none text-xl flex flex-col gap-8">
                        <li className=" font-bold flex gap-2 items-center  pl-4 shadow-xl"><FaHome /> Home</li>
                        <li className=" font-bold flex gap-2 items-center  pl-4 shadow-xl"><BsFillInfoSquareFill /> About</li>
                        <li className=" font-bold flex gap-2 items-center  pl-4 shadow-xl"><MdPermContactCalendar /> Contacts</li>
                        <li className=" font-bold flex gap-2 items-center  pl-4 shadow-xl"><SiPowerpages/> Pages</li>
                        
                    </nav>
                    <Link to={'signin'} className="relative top-20 left-2">
                        <button className="flex text-2xl items-center font-bold gap-2"><SlLogin/>Login</button>
                    </Link>
                </div>
            <div className={`bg-green-100  flex justify-end items-center gap-5 pr-5 row-span-1  ${active ? 'md:-translate-y-10 translate-y-0 transition-all duration-500' : 'transition-all duration-300'}`}>
                <h3>Follow us on</h3>
                <div className="flex justify-center items-center gap-2 text-xl">
                    <p><FaFacebook /></p>
                    <p><IoLogoYoutube /></p>
                    <p><FaLinkedin /></p>
                </div>
            </div>

            <div className={`bg-fuchsia-950 row-span-2 px-10 grid md:grid-cols-5  ${active ? 'md:-translate-y-8 transition-all duration-300' : 'transition-all duration-500'}`}>
                
                <div className={` md:col-span-1 flex items-center gap-5`}>
                    <div onClick={()=>setBar(!sideBar)} className={`text-3xl font-bold text-white transition-all duration-200 ${sideBar?'rotate-90':''}`}>{<FiMenu/>}</div>
                    <img src={logo} className=" md:h-14 md:w-44 w-24 mx-auto md:mx-0" alt="" />
                </div>
                <div className={`col-span-3 hidden md:flex justify-center items-center h-full text-white ${active ? 'text-red-300' : ''}`}>
                    <nav className="flex justify-center items-center gap-2 list-none cursor-pointer">
                        <li>Home</li>
                        <ScrollLink smooth to="contact" className=""><li>Contacts</li></ScrollLink>
                        <ScrollLink smooth to="about" className=""><li>About us</li></ScrollLink>
                        <li>Pages</li>

                    </nav>
                </div>
                <div className={`col-span-1 hidden  md:flex items-center justify-end gap-4`}>
                    {!user && <Link to={'/signin'}><button className="px-6 py-2  bg-white text-black">Login</button></Link>}
                    <Link to={'/search'}><button className="  text-white text-2xl"><IoSearchSharp /></button></Link>
                    {user && <button onClick={() => logOut()} className="btn">logout</button>}
                    {user&& <p className="text-white">{userData.userId}</p>}
                </div>

                {/* {!search &&
                    <div className="absolute  transition-all duration-700 w-72 h-10 right-6 top-24">
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Search" />
                            <svg onClick={() => alert('hello')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                    </div>
                } */}
            </div>
        
        </div>
    );



};

export default NavBarCopy;