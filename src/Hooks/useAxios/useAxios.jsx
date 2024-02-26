import axios from "axios";

const axiosLoader = axios.create({
    // baseURL:'https://ueserinfo-react-backend.vercel.app'
    baseURL:'http://localhost:5000'
})
const useAxios = () => {
    return axiosLoader
};

export default useAxios;