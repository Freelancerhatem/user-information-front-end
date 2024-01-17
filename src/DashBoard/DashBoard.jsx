import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios/useAxios";
import DashBoardCard from "./DashBoardCard";

const DashBoard = () => {
    const axiosLoader=useAxios();
    const[pendingData,setpendingData]=useState([]);
    
    useEffect(()=>{
        axiosLoader.get('/pending')
        .then(res=>setpendingData(res.data))
    },[axiosLoader])
    return (
        <div className="mt-20">
            {
               pendingData.map((pendingDatas,index)=>
               <DashBoardCard 
                key={index}
                index={index}
                pendingDatas={pendingDatas}
               
               ></DashBoardCard>) 
            }
        </div>
    );
};

export default DashBoard;