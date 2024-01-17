import axios from "axios";

const axiosLoader = axios.create({
    baseURL:'https://ueserinfo-react-backend.vercel.app'
})
const useAxios = () => {
    return axiosLoader
};

export default useAxios;