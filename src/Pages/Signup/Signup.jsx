import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import img from '../../assets/bg.jpg'
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios/useAxios";


const Signup = () => {
    const bg = ` url(${img})`;
    const { createUser, user, updateUserProfile, setUser, signOutUser } =useAuth();
    const [serialData,setSerialData] = useState([]);
    const axiosLoader = useAxios()
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_upload_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

    /*to do
    1.create a number and put it in db
    2.load the number in signup page
    3.when user click on sign up increase the value of point 2 with 1
    4.update the value of point 1

    */

    useEffect(()=>{
        axiosLoader.get('/api/serial')
        .then((res)=>setSerialData(res.data))
    },[axiosLoader])
    
    if(serialData.length==0){
        return <div className="h-screen flex justify-center items-center">Loading</div>
    }
    const[ {serial} ]= serialData;
    console.log(serial)
    
    
    
    const handleCreateUser =async(data) => {
        
        
        const name = data.name;
        const image = {image:data.image[0]}; //important for notes
        const email = data.email;
        const password = data.password;
        const address = data.address;
        const phone = data.phone;
        const userType = 'normal';
        const [{serial}] = serialData;
        const userId = `user_` + serial;
       
        // // image bb image upload
        const res=await axios.post(image_upload_api, image, {
            headers: {
                "content-type": "multipart/form-data",
            },
        })
       
        const imageUrl = res.data.data.display_url;

        const userInfo = { name, image:imageUrl, email, address, phone, userType, userId };
        console.log(userInfo)
        
        createUser(email, password)
            .then(() => {

                updateUserProfile(name, imageUrl)
                    .then(() => {
                        // back end
                        const updateSerial = serial+1;
                        axiosLoader.patch('/api/serialUpdate',{updateSerial})
                        .then(res=>console.log(res.data))
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
            <div className="h-[calc(100vh-80px)]  bg-center bg-cover" style={{ backgroundImage: bg }} >
                <div className="container mx-auto py-8">
                    <h1 className="text-2xl font-bold mb-6 text-center text-black">Registration Form</h1>
                    <form onSubmit={handleSubmit(handleCreateUser)} className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
                        <div className="flex gap-2">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                                <input {...register("name", { required: true })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-400"
                                    type="text" name="name" placeholder="Your Name" />
                            </div>
                            <div className="mb-4 w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Address</label>
                                <input {...register("address", { required: true })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-400"
                                    type="text" name="address" placeholder="Your Address" />
                            </div>

                        </div>
                        <div className="flex gap-2">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">Image</label>
                                <input  {...register("image", { required: true })} className="w-full file-input file-input-bordered  px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-400"
                                    type="file"  />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">Phone Number</label>
                                <input {...register("phone", { required: true })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-400"
                                    type="number" name="phone" placeholder="your phone number" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Email</label>
                            <input {...register("email", { required: true })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-400"
                                type="email" id="email" name="email" placeholder="your@mail.com" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">Password</label>
                            <input {...register("password", { required: true })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-400"
                                type="password" id="password" name="password" placeholder="********" />
                        </div>
                        <div>
                            <button
                                className="w-full bg-red-400 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-red-300 transition duration-300"
                                type="submit">Sign Up</button>
                            <span>Have  an account <Link to={'/signin'}><span className="text-blue-500 underline">Login</span></Link></span>
                        </div>
                    </form>
                </div>
            </div >
        </div>
    );
};

export default Signup;