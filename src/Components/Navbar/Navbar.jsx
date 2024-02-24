import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaFacebook, FaLinkedin, FaRightFromBracket } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { IoSearchOutline } from "react-icons/io5";
import logo from '../../assets/logoor.png'
import { Link as ScrollLink } from 'react-scroll'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext) || '';
    const [uid, setuid] = useState([]);
    const { userId } = uid;
    const { photoURL, displayName } = user || '';
    const [active, setActive] = useState(true);
    const [menuBar, setMenuBar] = useState(true)

    const handleLogout = e => {
        e.preventDefault();
        logOut();


    }

    useEffect(() => {
        axios.get(`https://ueserinfo-react-backend.vercel.app/uid?email=${user?.email}`)
            .then((res) => setuid(res.data))
    }, [user?.email]);



    useEffect(() => {
        const handleScroll = () => {
            const scrollValue = window.scrollY;
            if (scrollValue > 100) {

                setActive(false)
            }
            else {
                setActive(true)
            }

        };
        window.addEventListener('scroll', handleScroll);

        // clean the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={`fixed w-screen z-50  ${active ? ' bg-white' : ''}`}>
            <div className={`fixed pt-20  ${active ? ' bg-white' : 'bg-[#062336]'} z-0 ${menuBar ? 'translate-x-0 h-screen w-56 transition-all duration-500 left-0 right-0' : '-translate-x-32 transition-all duration-500 h-screen w-20 '}`}>
                <div className={`w-full h-6   absolute  flex justify-end  ${active ? 'p-2 top-20 right-0 ' : 'top-14 right-2'}`}><button onClick={() => setMenuBar(false)} className={`${active ? '' : 'text-white'}`}><ImCross></ImCross></button></div>
                <div className=" flex items-center justify-start ">
                    <nav className={`flex flex-col items-center justify-center list-none gap-5 ${active ? 'text-[#062336]' : 'text-white'}`}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Pages</li>
                        <li className={` px-2 py-2 ml-2 ${active ? ' bg-[#062336] text-white' : 'text-black bg-white'}`}>Contacts</li>
                    </nav>

                </div>
            </div>
            <div  className={`bg-white w-full z-[100] h-6 md:px-10 px-2 flex items-center justify-end gap-3 transition-all duration-100${active ? '-translate-y-4' : '-translate-y-20'}`}>
                <h3>Follow us on</h3>
                <div className="flex justify-center items-center gap-2 text-xl">
                    <p><FaFacebook /></p>
                    <p><IoLogoYoutube /></p>
                    <p><FaLinkedin /></p>
                </div>
            </div>
            
            
            <div className={`h-14  text-white bg-[#062336]  lg:px-10  grid grid-cols-3 transition-all duration-100 ${active ? 'translate-y-0 ' : '-translate-y-10  bg-white '}`}>
                
                
                <div className=" flex items-center ">
                    <button onClick={() => setMenuBar(true)} className={`p-2 ${active ? 'text-white' : 'text-white'}`}>{!menuBar ? <GiHamburgerMenu /> : ''}</button>
                    <img src={logo} className="h-12" alt="" />
                </div>
                <div className={`hidden md:flex items-center lg:w-full md:w-[70%] relative transition-all duration-500 ${active ? '' : 'opacity-0'}`}>
                    <input required placeholder="search for a user" type="text" className={`w-full  h-10 rounded-md  pl-4 border-none outline-none transition-all duration-500 text-black ${active ? '' : 'bg-[#06233622] '}`} />
                    <button className={`absolute top-4 text-[#7d7d7d] text-2xl  h-5  lg:right-3 md:right-1  ${active ? '' : 'text-[#bebdbd]'}`}><IoSearchOutline /></button>

                </div>
                <div className="md:hidden absolute top-0 right-0 h-full  w-[65%] pr-2">
                    <div className=" h-full  flex items-center">
                        <input required type="text" className={`w-full h-[60%] rounded-md  pl-4  border-none outline-none transition-all duration-500 text-black ${active ? '' : 'bg-[#062336] '}`} />
                        <button className={`absolute top-4 text-black text-2xl  h-5  right-3 ${active ? '' : 'text-white'}`}><IoSearchOutline /></button>

                    </div>
                </div>
                <div className=" lg:flex items-center justify-end invisible md:visible">

                    <nav className={`flex items-center h-full list-none lg:gap-5 md:gap-2 ${active ? 'text-white ' : ''}`}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Pages</li>
                        <Link to={'/signin'} className={` lg:px-4 lg:py-2  ${active ? 'text-black bg-white' : 'bg-[#335da5] text-white'}`}>Sign In</Link>
                    </nav>
                </div>


            </div>
        </div>


    );
};

export default Navbar;