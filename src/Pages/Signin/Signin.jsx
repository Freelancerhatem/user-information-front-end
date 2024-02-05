import { useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

import img from '../../assets/bg.jpg'
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth/useAuth";

const Signin = () => {
    const{signIn,googleSignIn}=useAuth()
    const location =useLocation();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const bg = ` url(${img})`
    const handleLogin=e=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        

        signIn(email,password)
        .then(()=>{
            
            Swal.fire({
                title: "Good job!",
                text: "Login Success!",
                icon: "success"
              });

              navigate(`${location?.state?  location.state : ('/') }`)

        })
        .catch(()=>{
            Swal.fire({
                title: "Error!",
                text: "Login Failed!",
                icon: "error"
              });
        })
        form.email.value ='';
        form.password.value='';


    }

    const handleGoogleLogin=(e)=>{
        e.preventDefault()
        
        googleSignIn()
        .then(()=>{

            // swal("Good job!", "Login Succesfully!", "success");
              Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });

              navigate(location?.state?  location.state : '/')

        })

        
        .catch(()=>{
            console.log('error')
            Swal.fire({
                title: "Error!",
                text: "Login Failed!",
                icon: "error"
              });

        })
    }
    

    
    
    return (

        <div>

            <div className="h-[calc(100vh-80px)]  bg-center bg-cover" style={{ backgroundImage: bg }}  >
                <div className="container mx-auto py-8">
                    <h1 className="text-2xl font-bold mb-6 text-center">Login Form</h1>
                    <form onSubmit={handleLogin}  className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                                type="email" id="email" name="email" placeholder="your@email.com" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                                type="password" id="password" name="password" placeholder="********" />
                        </div>

                        <div>
                        <button
                            className="w-full bg-red-400 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-red-300 transition duration-300"
                            type="submit">Login</button>
                            <span>Have not an account <Link to={'/signup'}><span className="text-blue-500 underline">sign up</span></Link></span>
                        </div>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleLogin} className="btn w-full  h-14  bg-base-300 rounded-box place-items-center">Login With Google <FcGoogle /></button>
                    </form>

                </div>
            </div >
        </div>

    );
};

export default Signin;