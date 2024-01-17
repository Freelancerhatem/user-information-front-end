import axios from "axios";

export const axiosLoader = axios.create({
    baseURL:'https://ueserinfo-react-backend.vercel.app'
})

const useAxiosLoader = () => {
    return axiosLoader
};

export default useAxiosLoader;