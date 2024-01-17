/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {loading}=useContext(AuthContext);
    if(loading){
        return <div className="w-screen flex justify-center items-center h-[90vh]"><span className="loading  loading-dots loading-lg"></span></div>
    }
    return (
        children
    );
};

export default PrivateRoute;