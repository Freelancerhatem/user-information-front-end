import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { useState } from "react";
import bg from '../../../assets/bg_1.jpg';
import { FaUserShield } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import useInfoUser from "../../../Hooks/useInfoUser/useInfoUser";
import { Link } from "react-router-dom";
import form_bg from '../../../assets/form_bg.jpg'
import { RxCross2 } from "react-icons/rx";

const Banner = () => {
    const [searchData, setsearchData] = useState({});
    const [seeData, setseeData] = useState(false);
    const { user } = useAuth()
    // load user data from db
    const [userData] = useInfoUser();


    /**to do
     * if userData.userType=='normal' then request for see all data
     * but login user and request uid user if same the hide request button
     */
    const handleSearch = e => {
        e.preventDefault();
        const form = e.target;
        const searhvalue = form.search.value;



        axios.get(`https://ueserinfo-react-backend.vercel.app/search/${searhvalue}`)
            .then(res => {
                setsearchData(res.data);
                // console.log(Object.keys(res.data).length)
                if (Object.keys(res.data).length == 0) {
                    setseeData(false);
                    toast.error('invalid user id,user not found')
                }
                else {


                    // check user type here admin or normal user
                    setseeData(true);
                    toast.success('user found')
                }
            })
            .catch(err => console.log(err.message))




    };
    const { name, image, email, address, phone, userType, _id } = searchData || '';

    return (
        <div className='h-[calc(100vh-80px)] mt-20  bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${bg})` }}>
        <div className={`flex flex-col gap-6  ${seeData? 'bg-black bg-opacity-50 inset-0 h-[calc(100vh-80px)]':''}` }>
            <Toaster />
            <div className=" w-1/2  mt-32   flex  justify-center items-center mx-auto">

                <form className='flex items-center  ' action="" onSubmit={handleSearch}>

                    <input name='search' type="text" required placeholder="Type here" className="input  focus:outline-none input-bordered input-error w-full max-w-xs" />
                    <button type="submit" className="btn ml-2 text-white bg-red-500 border-none hover:bg-red-400">Search<FaSearch /></button>

                </form>



            </div>
            <div className=' w-1/2    flex justify-center items-center mx-auto h-[300px]'>
                {seeData ?
                    <div style={{ backgroundImage: `url(${form_bg})` }} className='shadow-xl relative flex flex-col  w-1/2  items-center h-full   rounded-2xl  border-4'>                        
                            <h1 onClick={()=>setseeData(false)} className="absolute cursor-pointer right-3 bg-white p-2 rounded-lg top-2"><RxCross2 /></h1>
                            <img className='w-20 mt-2  h-20 border-2 border-white rounded-full' src={image} alt="" />
                            <p className='font-bold uppercase text-xl '>{name}</p>
                            <p className='rounded-full bg-blue-500 px-2 py-1 font-semibold text-sm mt-2 flex items-center gap-1 uppercase'><FaUserShield /> {user ? searchData.userType + " " + 'user' : userType + ' ' + 'user'}</p>                            
                            <div>
                                <h1>                                    
                                    {
                                        userData.userType == 'normal'?
                                            <Link to={`/details/${_id}`}><button className='btn btn-sm bg-red-500 text-white hover:bg-red-400 mt-2 border-none'>See Details<MdKeyboardDoubleArrowRight /></button></Link>
                                            : ''
                                    }
                                </h1>
                            </div>
                        
                    </div>
                    : ''
                }

            </div>
        </div>
    </div>
    );
};

export default Banner;