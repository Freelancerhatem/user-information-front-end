
import PropTypes from 'prop-types';
import useAxios from '../Hooks/useAxios/useAxios';
import toast from 'react-hot-toast';
import { useState } from 'react';

const DashBoardCard = ({ pendingDatas }) => {
    const axiosLoader = useAxios();
    const [detailsData, setdetailsData] = useState(pendingDatas)
    const { _id,name, image, email, address, phone, userType, status } = detailsData;

    const handleApprove = e => {
        e.preventDefault();
        
        axiosLoader.patch(`/AdminApprove/${_id}`)
            .then(res => {
                // console.log(res.data)
                if (res.data.modifiedCount == 1) {
                    axiosLoader.get(`/details/${_id}`)
                        .then((res) => setdetailsData(res.data))
                    toast.success('approved')
                }
            })
    }
    return (
        <div>
            <div className='flex gap-4 justify-center items-center border'>
                <h1>{name}</h1>
                <h1>{status}</h1>
                <button disabled={status == 'approved' ? true : false} onClick={handleApprove} className="btn btn-success disabled:bg-slate-400">Approve</button>
            </div>
        </div>
    );
};

DashBoardCard.propTypes = {
    pendingDatas: PropTypes.object
};

export default DashBoardCard;