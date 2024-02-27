import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios/useAxios";


const AdminDashBoard = () => {
    const axiosLoader = useAxios();
    const [panelData, setPanelData] = useState([])
    useEffect(() => {
        axiosLoader.get('/api/v1/adminPanelData')
            .then(res => setPanelData(res.data))
    }, [axiosLoader]);

    const handleUpdateStatus = (targetedID) => {
        axiosLoader.patch(`/api/v1/updateStatus/${targetedID}`, { status: 'approved' })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    axiosLoader.get('/api/v1/adminPanelData')
                        .then(res => setPanelData(res.data))
                }
            })
    }

    return (
        <div className="py-20 h-screen max-w-7xl mx-auto ">
            <h2 className="text-center text-3xl font-bold my-2">Total Data:{panelData.length}</h2>
            <div>

                {
                    panelData.map((data, index) => <div key={index} className="grid grid-cols-5 bg-green-300">
                        <div className="border">
                            <h1 className="text-base font-bold text-center bg-gray-300">Req. User ID</h1>
                            <p>{data.requestUser}</p>
                        </div>
                        <div className="border">
                            <h1 className="text-base font-bold text-center bg-gray-300">Req. User Name</h1>
                            <p>{data.forUser}</p>
                        </div>
                        <div className="border">
                            <h1 className="text-base font-bold text-center bg-gray-300" >Targeted User</h1>
                            <p>{'id'}</p>
                        </div>
                        <div className="border">
                            <h1 className="text-base font-bold text-center bg-gray-300">Status</h1>
                            <p>{data?.status ? data.status : 'pending'}</p>
                        </div>
                        <div className="border">
                            <h1 className="text-base font-bold text-center bg-gray-300">Action</h1>
                            <button onClick={() => handleUpdateStatus(data._id)} className="btn">Approve</button>
                        </div>
                    </div>)
                }

            </div>



        </div>
    );
};

export default AdminDashBoard;