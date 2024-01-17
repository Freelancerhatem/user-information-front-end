import { useEffect } from "react";


const useSpinner = () => {
    useEffect(()=>{
        const delay = setTimeout(() => {
            setIsLoading(false);
          }, 500);
      
          
          return () => clearTimeout(delay);
    },[])
};

export default useSpinner;