import { BiSolidMessageRounded } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
    
    return (
        <div className="md:h-[50vh] bg-black">
            <div className="grid grid-cols-1 md:grid-cols-4 md:h-[40vh]  px-10 py-5">
                <div className="text-white">
                    <h1 className="lg:text-2xl text-xl font-bold text-white">Connect with us</h1>
                    <div className="mt-10">
                        <p>Subscribe with email for up to date with us.</p>
                        <div className="relative mt-4">
                            <input type="text" className="py-2 bg-white w-full pl-4 border-none outline-none rounded-full placeholder:text-[#5b5b5b]" placeholder="Email" />
                            <button className="py-2 absolute right-0 bottom-0 bg-[#fe5d1d] px-4 rounded-r-full">go</button>
                        </div>
                    </div>
                </div>
                <div className="md:ml-20 mt-5 md:mt-0">
                    <h1 className="text-xl text-white font-semibold">About</h1>
                    <nav className="list-none text-white mt-10">
                        <li>Our Team</li>
                        <li>Clients</li>
                        <li>Press</li>
                        <li>Blogs</li>
                    </nav>
                </div>
                <div>
                    <h1 className="text-xl text-white font-semibold">Social Links</h1>
                    <nav className="list-none text-white text-xl flex gap-2 mt-10">
                        <li><FaSquareFacebook/></li>
                        <li><IoLogoLinkedin/></li>
                        <li><BiLogoInstagramAlt/></li>
                        

                    </nav>
                </div>
                <div className="text-white flex flex-col ">
                    <h1 className="text-xl to-white font-semibold">Contact us</h1>
                    <div className="my-10 space-y-1">
                        <div className="flex items-center gap-2 ">
                            <IoIosCall></IoIosCall>
                            <p>+8801712345678</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <BiSolidMessageRounded />
                            <p>info@usernest.com</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdLocationOn />
                            <p className="uppercase">Bronx,ny,Usa</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t-2 border-[#4d4d4d] border-dashed h-[10vh]  flex justify-center items-center">
                    <h1 className="flex items-center gap-1 text-[#4d4d4d]"> <MdCopyright className="mt-[1px]"/>copyright User Nest Ltd. </h1>
            </div>
        </div>
    );
};

export default Footer;