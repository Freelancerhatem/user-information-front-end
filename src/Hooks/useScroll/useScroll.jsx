
import { useEffect, useState } from 'react';

const useScroll = () => {
    const [active,setActive] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const scrollValue = window.scrollY;
            if (scrollValue >0) {
    
                setActive(true)
            }
            else {
                setActive(false)
            }
    
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setActive]);
    return [active];
};

export default useScroll;