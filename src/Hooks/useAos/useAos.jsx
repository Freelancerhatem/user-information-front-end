import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAos = () => {
    useEffect(() => {
        AOS.init({
            duration: 300,
            easing: 'ease-in-out',
            offset: 200,
        });
    }, []);
};

export default useAos;