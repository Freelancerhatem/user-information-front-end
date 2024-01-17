import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoMdLogIn } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";
import logo from '../../assets/logo.jpg'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext) || '';
    const [uid, setuid] = useState([]);
    const { userId } = uid;
    const { photoURL, displayName } = user || '';



    const handleLogout = e => {
        e.preventDefault();
        logOut();


    }

    useEffect(() => {
        axios.get(`https://ueserinfo-react-backend.vercel.app/uid?email=${user?.email}`)
            .then((res) => setuid(res.data))
    }, [user?.email]);




    return (
        <div className="h-20 fixed top-0 w-screen shadow-2xl bg-white bg-opacity-75 px-14 grid grid-cols-2 items-center justify-center  ">
            <div>
                <img src={logo} className="w-12" alt="" />
            </div>
            <ul className="flex items-center gap-2 relative border">
                <NavLink to={'/'}> <li>Home</li> </NavLink>

                {
                    uid.role == 'admin' ? <NavLink to={'/dashboard'}> <li>Dashboard</li> </NavLink> : ''
                }



                {!user ? <>
                    <NavLink to={'/signin'} className={"px-4 py-1 absolute flex items-center gap-2 font-semibold  right-32 border-2  hover:bg-red-500 hover:text-white  border-red-500 "}>Sign in <IoMdLogIn className="mt-1"/></NavLink>
                    <NavLink to={'/signup'} className={'px-4 py-1  absolute right-0 flex items-center gap-2 font-semibold   border-2  bg-red-500 text-white hover:text-black hover:bg-transparent border-red-500 '}>Sign up<IoCreateOutline className=""/></NavLink>

                </>
                    :
                    <NavLink to={'/user/dashboard'}> <li>Dashboard</li> </NavLink>
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
                                    <button onClick={handleLogout} className="px-4 py-2  flex items-center  rounded-md bg-red-500 hover:bg-red-400 text-white absolute bottom-1 left-1/2  -translate-x-1/2 -translate-y-1/2   "><p>Logout</p><RiLogoutCircleRLine /></button>
                                </div>
                            </ul>
                        </div>
                    </div>
                    :
                    ''
            }

        </div>


    );
};

export default Navbar;