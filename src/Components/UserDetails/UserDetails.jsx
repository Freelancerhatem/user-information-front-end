import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios/useAxios";
import toast, { Toaster } from "react-hot-toast";
import { MdAdminPanelSettings } from "react-icons/md";
import useAuth from "../../Hooks/useAuth/useAuth";
import { FaAddressCard } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";



const UserDetails = () => {
    const { id } = useParams();
    const axiosLoader = useAxios();
    const [detailsData, setdetailsData] = useState({});
    const [seeAll, setSeeAll] = useState(false);
    const{user}=useAuth();
    const loginUserEmail = user?.email;


    useEffect(() => {
        axiosLoader.get(`/details/${id}`)
            .then((res) => setdetailsData(res.data))
    }, [axiosLoader, id])

    // console.log(detailsData);


    const handleAdmin = e => {
        e.preventDefault();
        axiosLoader.patch(`/requestForData/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount == 1) {
                    toast.success('Successfully requested to admin');
                    axiosLoader.get(`/details/${id}`)
                        .then((res) => setdetailsData(res.data))
                }
            })
    }
    const { name, image, email, address, phone, userType, status } = detailsData || '';
    // console.log(detailsData)
    return (
        <div className=" h-[80vh]  flex items-center justify-center  ">
            <Toaster></Toaster>

            <div className="w-full mx-auto  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">

                </div>
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={image} alt="user image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white uppercase">{name}</h5>

                    <div>
                        {
                            seeAll ?
                                <div className="flex flex-col  text-center">
                                    <span className="text-base text-[#39a2e1] text-center font-semibold flex items-center gap-1"><MdMarkEmailRead/>{email}</span>
                                    <span className="text-base text-[#39a2e1] text-center font-semibold flex items-center gap-1"><FaAddressCard/>{address}</span>
                                    <span className="text-base text-[#39a2e1] text-center font-semibold flex items-center gap-1"><FaPhoneVolume/>{phone}</span>
                                </div>
                                :
                                ''
                        }
                    </div>
                    <div>
                        {
                            !seeAll ?
                                <div className="flex mt-4 md:mt-6">
                                    <button disabled={status == 'pending' || status == 'approved' ? true : false} onClick={handleAdmin} className={`${loginUserEmail==email? 'hidden':''} flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#39a2e1] rounded-lg     disabled:bg-slate-300 disabled:text-white `}>Request to Admin<MdAdminPanelSettings /></button>
                                    <button onClick={() => setSeeAll(true)} disabled={status == 'approved' || loginUserEmail==email ? false : true} className={`inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 disabled:bg-slate-300 disabled:text-white ms-3`}>See Details</button>
                                </div>
                                :
                                ''
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserDetails;