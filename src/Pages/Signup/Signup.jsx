import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import img from '../../assets/bg.jpg'
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios/useAxios";
import { MdEmail, MdPerson } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Lottie from "lottie-react";
import signin from '../../assets/animation/login.json'
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { FaImages } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Signup = () => {
    const bg = ` url(${img})`;
    const { createUser, user, updateUserProfile, setUser, signOutUser } = useAuth();
    const [serialData, setSerialData] = useState([]);
    const axiosLoader = useAxios()
    const navigate = useNavigate();
    const [eye, setEye] = useState(false)
    const { register, handleSubmit, reset } = useForm();
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_upload_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

    /*to do
    1.create a number and put it in db
    2.load the number in signup page
    3.when user click on sign up increase the value of point 2 with 1
    4.update the value of point 1

    */

    useEffect(() => {
        axiosLoader.get('/api/serial')
            .then((res) => setSerialData(res.data))
    }, [axiosLoader])

    if (serialData.length == 0) {
        return <div className="h-screen flex justify-center items-center"></div>
    }
    
    



    const handleCreateUser = async (data) => {


        const name = data.name;
        const image = { image: data.image[0] }; //important for notes
        const email = data.email;
        const password = data.password;
        const address = data.address;
        const phone = data.phone;
        const userType = 'normal';
        const [{ serial }] = serialData;
        const userId = `user_` + serial;

        // // image bb image upload
        const res = await axios.post(image_upload_api, image, {
            headers: {
                "content-type": "multipart/form-data",
            },
        })

        const imageUrl = res.data.data.display_url;

        const userInfo = { name, image: imageUrl, email, address, phone, userType, userId };
        // console.log(userInfo)

        createUser(email, password)
            .then(() => {

                updateUserProfile(name, imageUrl)
                    .then(() => {
                        // back end
                        const updateSerial = serial + 1;
                        axiosLoader.patch('/api/serialUpdate', { updateSerial })
                            .then(res => console.log(res.data))
                        axios.post('https://ueserinfo-react-backend.vercel.app/user', userInfo)
                            .then((res) => {
                                console.log(res.data)
                            })
                            .catch(err => {
                                console.log(err)
                            })
                        // back end
                        Swal.fire({
                            title: "Good job!",
                            text: "Sign Up Success!",
                            icon: "success"
                        });


                        // signOutUser();
                        navigate('/signin')

                    }).catch((error) => {
                        console.log(error.message)


                    });






            })
            .catch((error) => {
                Swal.fire({
                    title: "Failed!",
                    text: error.message,
                    icon: "error"
                });

            })
    }

    return (
        <div>
            <div className="h-screen  bg-center bg-cover" style={{ backgroundImage: bg }} >
                <Link to={'/'}><button className="btn absolute top-2 md:right-2 right-3"><RxCross2/></button></Link>
                <div className="h-screen w-screen flex items-center  bg-center bg-cover bg-no-repeat px-5 md:px-0" style={{ backgroundImage: bg }}  >
                    <div className=" md:w-[60%] md:h-[90%] grid md:grid-cols-2 grid-cols-1  gap-4 justify-between  mx-auto rounded-xl  md:shadow-2xl">

                        <div className="md:w-[80%] md:pl-10 mt-4">
                            <form onSubmit={handleSubmit(handleCreateUser)} className="  w-full ">
                                <div>
                                    <h1 className="text-center text-xl font-bold pt-5">Hello!</h1>
                                    <p className="text-center mb-2">Create Your Account</p>
                                </div>
                                <div className="mb-4">
                                    <div className="relative mb-4">
                                        <input className="w-full   px-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                                            type="text"  id="" {...register("name", { required: true })} placeholder="Name" />
                                        <MdPerson className="absolute  top-1 left-2  text-[#fe5d1d]  text-3xl"></MdPerson>
                                    </div>
                                    <div className="relative mb-4">
                                        <input className="w-full   px-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                                            type="email" id="email" {...register("email", { required: true })} placeholder="Email" />
                                        <MdEmail className="absolute  top-1 left-2  text-[#fe5d1d]  text-3xl"></MdEmail>
                                    </div>
                                    <div className="relative mb-4">
                                        <input className="w-full   px-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                                            type="text"  {...register("address", { required: true })} placeholder="Address" />
                                        <FaAddressCard className="absolute  top-1 left-2  text-[#fe5d1d]  text-3xl"></FaAddressCard>
                                    </div>
                                    <div className="relative mb-4">
                                        <input className="w-full   px-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                                            type="file"  {...register("image", { required: true })} placeholder="Image" />
                                        <FaImages className="absolute  top-1 left-2  text-[#fe5d1d]  text-3xl"></FaImages>
                                    </div>
                                    <div className="mb-4 relative">
                                        <input {...register("phone", { required: true })} className="w-full   pl-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                                            type="number" placeholder="Phone" />
                                        <IoCallSharp className="absolute  top-1 left-2  text-[#fe5d1d]  text-3xl"></IoCallSharp>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="relative ">
                                        <input {...register("password", { required: true })} className="w-full   px-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                                            type={`${eye ? 'password' : 'text'}`} placeholder="Password" />
                                        <RiLockPasswordFill className="absolute  top-1 left-2  text-[#fe5d1d]  text-3xl"></RiLockPasswordFill>
                                        <div onClick={() => setEye(!eye)} className={`absolute top-3 right-2 `}>{eye ? <IoEye></IoEye> : <IoEyeOff></IoEyeOff>}</div>
                                    </div>
                                </div>

                                <div className="">
                                    <button
                                        className="w-full bg-[#fe5d1d] text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-[#fe5d1dc0] transition duration-300"
                                        type="submit">Sign up</button>
                                    <div className="divider">or</div>
                                    <div className="flex flex-col  items-center justify-center text-lg border rounded-md"><p className="font-bold">Sign up with</p> <FcGoogle /></div>
                                    <span>Have an account <Link to={'/signin'}><span className="text-blue-500 underline">sign in</span></Link></span>
                                </div>


                            </form>
                        </div>
                        <div className="hidden md:flex flex-col justify-center items-center bg-[#f69e7b]  rounded-tr-xl rounded-br-xl">
                            <h1 className="text-xl font-semibold">Welcome!</h1>
                            <div>
                                <Lottie animationData={signin} loop={true} autoplay />
                            </div>


                        </div>


                    </div>
                </div >
            </div >
        </div>
    );
};

export default Signup;