import { useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye, IoEyeOff } from "react-icons/io5";

import img from '../../assets/bg.jpg'
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth/useAuth";
import Lottie from "lottie-react";
import signin from '../../assets/animation/login.json'
import { RxCross2 } from "react-icons/rx";

const Signin = () => {
    const { signIn, googleSignIn } = useAuth()
    const location = useLocation();
    const navigate = useNavigate();
    const [eye, setEye] = useState(false)
    const bg = ` url(${img})`
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;



        signIn(email, password)
            .then(() => {

                Swal.fire({
                    title: "Good job!",
                    text: "Login Success!",
                    icon: "success"
                });

                navigate(`${location?.state ? location.state : ('/')}`)

            })
            .catch(() => {
                Swal.fire({
                    title: "Error!",
                    text: "Login Failed!",
                    icon: "error"
                });
            })
        form.reset();


    }

    const handleGoogleLogin = (e) => {
        e.preventDefault()

        googleSignIn()
            .then(() => {

                // swal("Good job!", "Login Succesfully!", "success");
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                });

                navigate(location?.state ? location.state : '/')

            })


            .catch(() => {

                Swal.fire({
                    title: "Error!",
                    text: "Login Failed!",
                    icon: "error"
                });

            })
    }




    return (

        <div>

            <div className="h-screen w-screen flex items-center  bg-center bg-cover bg-no-repeat" style={{ backgroundImage: bg }}  >
                <Link to={'/'}><button className="btn absolute top-2 right-2"><RxCross2 /></button></Link>
                <div className=" w-[60%] h-[70%] grid grid-cols-2 gap-4 justify-between  mx-auto rounded-xl  shadow-2xl">

                    <div className="w-[80%] pl-10 mt-20">
                        <form onSubmit={handleLogin} className="  w-full ">
                            <div>
                                <h1 className="text-center text-xl font-bold pt-5">Hello!</h1>
                                <p className="text-center mb-2">Sign in to Your Account</p>
                            </div>
                            <div className="mb-4">
                                <div className="relative ">
                                    <input className="w-full   px-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                                        type="email" id="email" name="email" placeholder="email" />
                                    <MdEmail className="absolute  top-1 left-2  text-[#fe5d1d]  text-3xl"></MdEmail>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="relative ">
                                    <input className="w-full   px-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                                        type={`${eye ? 'password' : 'text'}`} name="password" placeholder="password" />
                                    <RiLockPasswordFill className="absolute  top-1 left-2  text-[#fe5d1d]  text-3xl"></RiLockPasswordFill>
                                    <div onClick={() => setEye(!eye)} className={`absolute top-3 right-2 `}>{eye ? <IoEye></IoEye> : <IoEyeOff></IoEyeOff>}</div>
                                </div>
                            </div>

                            <div className="">
                                <button
                                    className="w-full bg-[#fe5d1d] text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-[#fe5d1dc0] transition duration-300"
                                    type="submit">Login</button>
                                <div className="divider">or</div>
                                <div onClick={handleGoogleLogin} className="flex flex-col cursor-pointer  items-center justify-center rounded-md text-lg border"><p className="font-bold">Login with</p> <FcGoogle /></div>
                                <span>Have not an account <Link to={'/signup'}><span className="text-blue-500 underline">sign up</span></Link></span>
                            </div>


                        </form>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-[#f69e7b] rounded-tr-xl  rounded-br-xl">
                        <h1 className="text-xl font-semibold">Welcome Back!</h1>
                        <div>
                            <Lottie animationData={signin} loop={true} autoplay />
                        </div>


                    </div>


                </div>
            </div >
        </div>

    );
};

export default Signin;