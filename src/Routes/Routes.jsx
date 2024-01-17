import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Signin from "../Pages/Signin/Signin";
import UserDetails from "../Components/UserDetails/UserDetails";
import Signup from "../Pages/Signup/Signup";
import DashBoard from "../DashBoard/DashBoard";
import Home from "../Pages/Home/Home";
import UserDashBoard from "../Pages/UserDashBoard/UserDashBoard";



    const router = createBrowserRouter([
        {
          path: "/",
          element: <HomeLayout></HomeLayout>,
          children: [
            {
              path: '/',
              element: <Home></Home>
            },
            {
              path: 'signin',
              element: <Signin></Signin>
            },
            {
              path: 'details/:id',
              element: <UserDetails></UserDetails>
            },
            {
              path: 'dashboard',
              element: <DashBoard></DashBoard>
            },
            {
              path:'/user/dashboard',
              element:<UserDashBoard></UserDashBoard>
            },
            {
              path: 'signup',
              element: <Signup></Signup>
            },
          ]
        },
      ]);

export default router;