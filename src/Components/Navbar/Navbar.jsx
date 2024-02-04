import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaRightFromBracket } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import logo from '../../assets/logo.png'
import {Link as ScrollLink} from 'react-scroll'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext) || '';
    const [uid, setuid] = useState([]);
    const { userId } = uid;
    const { photoURL, displayName } = user || '';
    const[activeLink,setActiveLink] = useState(false);
    const[activeAbout,setActiveAbout] = useState(false);
    // console.log(activeLink)

    const handleLogout = e => {
        e.preventDefault();
        logOut();


    }

    useEffect(() => {
        axios.get(`https://ueserinfo-react-backend.vercel.app/uid?email=${user?.email}`)
            .then((res) => setuid(res.data))
    }, [user?.email]);




    return (
        <div className="h-20 fixed top-0 w-screen shadow-2xl z-50 bg-white bg-opacity-75 backdrop-blur-lg px-14 grid grid-cols-2 items-center justify-center  ">
            <div>
                <img src={logo} className="w-32" alt="" />
            </div>
            <ul className="flex items-center gap-2 relative">
                <NavLink to={'/'}
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#98d8ff] font-bold border-b-2 border-[#39a2e1]" : ""} > <li>Home</li> </NavLink>

            {
                uid.role == 'admin' ? <NavLink to={'/dashboard'}
                
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#39a2e1] font-bold border-b-2 border-[#39a2e1]" : ""}> <li>Dashboard</li> </NavLink> : ''
            }
            <ScrollLink to="about" duration={500}  spy={true} smooth={true}    onSetActive={()=>setActiveAbout(true)} onSetInactive={()=>setActiveAbout(false)} className={`cursor-pointer`}>About</ScrollLink>
            <ScrollLink to="contact" duration={500}  spy={true} smooth={true}   onSetActive={()=>setActiveLink(true)} onSetInactive={()=>setActiveLink(false)} className={`cursor-pointer `}>Contact us</ScrollLink>


            {!user ? <>
                
                <NavLink to={'/signin'} className={'px-4 py-1  absolute right-0 flex items-center gap-2 font-semibold  uppercase  border-2  bg-[#39a2e1] text-white rounded-lg hover:text-black  border-[#39a2e1] '}>Sign in <FaRightFromBracket/></NavLink>

            </>
                :
                <NavLink to={'/user/dashboard'}
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#39a2e1] font-bold border-b-2 border-[#39a2e1]" : ""}> <li>Dashboard</li> </NavLink>
            }

        </ul>

            {
        user ?
            <div className="absolute right-2">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-16 rounded-full">
                            <img alt="user" src={photoURL} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-5 z-[1] p-2 shadow bg-base-100 rounded-box w-[15vw] h-[20vh]">
                        <div>
                            <h1 className="text-2xl text-center border-b-2 border-red-200">{displayName}</h1>
                            <p className="text-lg font-semibold mt-2 text-center">id: {userId}</p>
                            <button onClick={handleLogout} className="px-4 py-2  flex items-center  rounded-md bg-[#39a2e1] hover:bg-[#39a2e1] text-white absolute bottom-1 left-1/2  -translate-x-1/2 -translate-y-1/2   "><p>Logout</p><RiLogoutCircleRLine /></button>
                        </div>
                    </ul>
                </div>
            </div>
            :
            ''
    }

        </div >


    );
};

export default Navbar;