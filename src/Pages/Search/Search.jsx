import Lottie from "lottie-react";
import { MdVerified } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdLockPerson } from "react-icons/md";
import { useContext, useEffect, useRef, useState } from "react";
import anim from '../../assets/animation/search.json';
import errorAnimation from '../../assets/animation/nofound.json'
import axios from "axios";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import useAuth from "../../Hooks/useAuth/useAuth";
import useInfoUser from "../../Hooks/useInfoUser/useInfoUser";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import img from '../../assets/bg_1.jpg'
import useAos from "../../Hooks/useAos/useAos";
import useAxios from "../../Hooks/useAxios/useAxios";
import { HiDotsHorizontal } from "react-icons/hi";
const Search = () => {
    const [searchData, setsearchData] = useState({});
    const [hide, setHide] = useState(false);
    const [error, setError] = useState(false);
    const [access, setAccess] = useState('');
    const [findAccessClientId, setClientID] = useState('');
    const [sideBar, setSideBar] = useState(false);
    const[status,setStatus] = useState('normal')

    // login user info in db
    const [userData] = useInfoUser();
    // login user info in firebase
    const { user } = useAuth();
    const ref = useRef();
    const axiosLoader = useAxios();
    useAos();

    const { name, image, email, address, phone, userType, _id, userId } = searchData || '';

    const handleSearch = () => {
        // cleared previous access data
        // setAccess('');

        const searchValue = ref.current.value;


        if (Object.keys(searchData).length > 0 && searchData.userId == searchValue) {
            toast.error('already found')
        }
        else {

            axiosLoader.get(`/search/${searchValue}`)
                .then(res => {
                    setsearchData(res.data);
                    if (Object.keys(res.data).length == 0) {
                        setHide(false);
                        setError(true)
                        toast.error('invalid user id,user not found')
                    }
                    else {
                        setHide(true)
                        toast.success('user found');



                    }
                })
                .catch(err => console.log(err.message))
        }





    };



    useEffect(() => {

        axiosLoader.get(`/api/v1/userAccess?user=${userData?.userId}&client=${userId}`)
            .then(res => setAccess(res.data));

    }, [axiosLoader, userData?.userId, userId]);

    // console.log(access);



    // send user access request to admin
    const handleRequsetAccessToAdmin = () => {
        axiosLoader.post(`/api/v1/accessRequest?requestUser=${userData?.userId}&forUser=${userId}`)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('sent request for access')
                    console.log(res.data)
                }
                else{
                    console.log(res.data)
                    toast.error(res.data.status);
                    setStatus(res.data.status)
                }

            })

    }





    /** to do
      1.sent login user id+seeking user id as query
      2.check in login user db the seeking id available or not
      3.if available sent a response true
    
     */

    return (
        <div className="h-screen w-screen" style={{ backgroundImage: `url(${img})` }}>
            <Toaster></Toaster>
            <div className="w-1/2 mx-auto pt-20">
                <label className="input input-bordered flex items-center gap-2">
                    <input ref={ref} type="text" className="grow" placeholder="Search" />
                    <svg onClick={() => handleSearch()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div>
            {
                hide ?


                    <div className="w-[30%] h-[50%] mx-auto mt-20 relative">
                        <div data-aos-duration='700' data-aos='fade-up' className='relative'>
                            <div className={`  bg-white  -z-0 py-5 rounded-md shadow-2xl `}>

                                <div className='z-30 relative'>
                                    <div className={`w-20 h-20 relative rounded-full mx-auto p-4 my-2  bg-black `}>
                                        <img className={`w-full  h-full `} src={image} alt="" />
                                        <span className='absolute text-blue-600 text-xl right-1 bottom-1'><MdVerified /></span>
                                    </div>
                                    <div className={`text-center  text-lg font-semibold`}>
                                        <h2 className='text-xl'>{name}</h2>
                                        <h2 className={`text-xs text-white bg-gray-800  py-1 rounded-full w-[40%] mx-auto `}>{'job title'}</h2>
                                    </div>
                                    <div className={`flex  gap-2 my-4 items-center justify-evenly `}>
                                        <div className='flex flex-col items-center'>
                                            <h2 className=' text-gray-400'>Age</h2>
                                            <p className='text-xl font-bold'>{'age'}</p>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <h2 className=' text-gray-400'>Blood Group:</h2>
                                            <p className='text-xl font-bold'>{'bloodGroup'}</p>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <h2 className=' text-gray-400'>Weight:</h2>
                                            <p className='text-xl font-bold'>{'weight'} kg</p>
                                        </div>

                                    </div>
                                    <Link to={`/details/${_id}`} className='flex justify-center  w-44 rounded-full mx-auto'><button disabled={access === true ? false : true} className={`flex  justify-center items-center gap-2 text-base px-4 text-white rounded-full w-full  ${access ? 'hover:bg-[#4878ca]  bg-[#335da5]' : 'bg-gray-500'}  py-2 font-semibold text-center`}>{access ? 'Visit Profile' : 'Need Access'} {access == true ? <FaArrowAltCircleRight /> : <MdLockPerson></MdLockPerson>}</button></Link>
                                    {access != true ?
                                        <div className="absolute w-44 h-20  -top-8 right-0">
                                            <button onClick={() => setSideBar(!sideBar)} className="btn absolute right-0 bg-transparent border-none text-gray-600 text-3xl shadow-none hover:bg-transparent"><HiDotsHorizontal /></button>

                                        </div>
                                        : ''
                                    }

                                    <button onClick={() => handleRequsetAccessToAdmin()} className={`bg-gray-200  shadow-xl rounded-lg absolute top-2 right-0  ${sideBar ? 'w-44 h-10' : ' hidden'}`}>
                                        {status=='normal'?'Access Request':'Pending'}
                                    </button>


                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="w-[40%] mx-auto border">
                        {error ?
                            <div className="w-[95%]">
                                <h1 className="text-center text-2xl font-bold">No Data Found</h1>
                                <Lottie className="w-full" animationData={errorAnimation} loop={true} autoplay />
                            </div>

                            :
                            <Lottie animationData={anim} loop={true} autoplay />
                        }
                    </div>
            }
        </div>
    );
};

export default Search;