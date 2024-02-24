import { Outlet, useLocation } from "react-router-dom";
import NavBarCopy from "../Components/Navbar/NavBarCopy";




const HomeLayout = () => {

    const { pathname } = useLocation();
    const navbar = pathname.includes('signin') || pathname.includes('signup') ||pathname.includes('search');

    return (
        <div>
            {!navbar &&
                <NavBarCopy></NavBarCopy>
            }
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;