import { useQuery } from "@tanstack/react-query";
import useAxios from "../useAxios/useAxios";
import useAuth from "../useAuth/useAuth";


const useInfoUser = () => {
   const{user}=useAuth();
   const userEmail = user?.email;
    const axiosLoader = useAxios();
    const {data: userData=[],isPending:loading,refetch}=useQuery({
        queryKey:['userData'],
        queryFn: async ()=>{
            const result = await axiosLoader.get(`/userinfo?email=${userEmail}`);
            
            return result.data;
            
        }
    })
    
    return[userData,refetch,loading]
};

export default useInfoUser;