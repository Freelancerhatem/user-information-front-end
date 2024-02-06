import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaRightFromBracket } from "react-icons/fa6";
import logo from '../../assets/logoor.png'
import { Link as ScrollLink } from 'react-scroll'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext) || '';
    const [uid, setuid] = useState([]);
    const { userId } = uid;
    const { photoURL, displayName } = user || '';
    const [active, setActive] = useState(true);
   
    const handleLogout = e => {
        e.preventDefault();
        logOut();


    }

    useEffect(() => {
        axios.get(`https://ueserinfo-react-backend.vercel.app/uid?email=${user?.email}`)
            .then((res) => setuid(res.data))
    }, [user?.email]);

    
    
    useEffect(()=>{
        const handleScroll =()=>{
            const scrollValue=window.scrollY;
            if(scrollValue > 0)
            {

                setActive(false)
            }
            else{
                setActive(true)
            }
            
        };
        window.addEventListener('scroll',handleScroll);

        // clean the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    },[]);
  

    return (
        <div className='h-20'>
            <div className={`h-8 fixed w-screen z-[60] bg-[#fe5d1d] text-black font-bold  ${active? 'translate-y-0 duration-500':'-translate-y-10 duration-500'}`}>
                <marquee direction="left"><p className="">Here will be published important notice Here will be published important notice Here will be published important notice</p></marquee>
            </div>
            <div className={` h-14  top-0 fixed w-screen z-50 ${active ? 'translate-y-8 duration-500' :'translate-y-0 duration-300'}  bg-white bg-opacity-75 backdrop-blur-lg px-14 grid grid-cols-2 items-center justify-center  `}>

                <div>
                    <img src={logo} className="w-32" alt="" />
                </div>
                <ul className="flex items-center gap-2 relative">
                    <NavLink to={'/'}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#fe5d1d] font-bold " : ""} > <li>Home</li> </NavLink>

                    {
                        uid.role == 'admin' ? <NavLink to={'/dashboard'}

                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#fe5d1d] font-bold " : ""}> <li>Dashboard</li> </NavLink> : ''
                    }
                    <ScrollLink to="about" duration={500} spy={true} smooth={true}   className={`cursor-pointer`}>About</ScrollLink>
                    <ScrollLink to="contact" duration={500} spy={true} smooth={true}   className={`cursor-pointer `}>Contact us</ScrollLink>


                    {!user ? <>

                        <NavLink to={'/signin'} className={'px-4 py-1  absolute right-0 flex items-center gap-2 font-semibold  uppercase  border-2  bg-[#fe5d1d] hover:bg-[#f69e7b] hover:border-[#f69e7b] text-white rounded-lg hover:text-black  border-[#fe5d1d] '}>Sign in <FaRightFromBracket /></NavLink>

                    </>
                        :
                        <NavLink to={'/user/dashboard'}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#fe5d1d] font-bold border-b-2 border-[#fe5d1d]" : ""}> <li>Dashboard</li> </NavLink>
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
                                        <button onClick={handleLogout} className="px-4 py-2  flex items-center  rounded-md bg-[#fe5d1d] hover:bg-[#fb7d4b] text-white absolute bottom-1 left-1/2  -translate-x-1/2 -translate-y-1/2   "><p>Logout</p><RiLogoutCircleRLine /></button>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        :
                        ''
                }
            </div >
        </div>


    );
};

export default Navbar;