/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import NumberCount from '../../../Components/NumberCount/NumberCount';
import img1 from '../../../assets/img/abt1.avif'
import img2 from '../../../assets/img/abt2.jpg'
import img3 from '../../../assets/img/abt3.jpg'
import useAos from '../../../Hooks/useAos/useAos';
const AboutUs = () => {
    useAos()
    const [counterOn, setCounterOn] = useState(false);
    const [onEnter, setEnter] = useState(false);
    const [onEnter2, setEnter2] = useState(false);
    const [onEnter3, setEnter3] = useState(false);
    
    return (
        <div name={'about'}  className="h-screen mt-20  ">

            <h2 className='text-3xl text-center pt-5'>About us</h2>

            <ScrollTrigger className=' flex justify-center items-center gap-4 py-5 mt-5 rounded-xl  w-[calc(100vw-80px)] mx-auto' duration={500} onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className="flex flex-col items-center">
                    <h1 className="text-xl font-bold">Our Total user</h1>
                    {counterOn && <p className="text-3xl font-extrabold"> <NumberCount endValue={2000}></NumberCount>+</p>}



                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-xl font-bold">Total information</h1>
                    {counterOn && <p className="text-3xl font-extrabold"> <NumberCount endValue={35000}></NumberCount>+</p>}
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-xl font-bold">Active User</h1>
                    {counterOn && <p className="text-3xl font-extrabold"> <NumberCount endValue={650}></NumberCount>+</p>}
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-xl font-bold">Regular Search</h1>
                    {counterOn && <p className="text-3xl font-extrabold"> <NumberCount endValue={30000}></NumberCount>+</p>}
                </div>
            </ScrollTrigger >

            <div data-aos='fade-up' className='grid grid-cols-3 gap-5 py-5 px-10  h-full' >

                <div className={`h-[70%] shadow-xl relative grid grid-rows-2 rounded-xl`} onMouseEnter={() => setEnter(true)} onMouseLeave={() => setEnter(false)}>
                    <div className={`absolute left-0 bottom-0 bg-gradient-to-t  from-[#ff672b] via-25% via-[#ff672b] to-[#00000000]  w-full  rounded-xl ${onEnter ? 'h-full transition-all duration-500' : 'h-0 transition-all duration-500'}`}></div>
                    <div>
                        <img src={img1} className='rounded-t-xl h-full w-full' alt="" />
                    </div>
                    <div className={`z-20 px-5 py-3 ${onEnter ? 'text-white  translate-y-10 transition-all duration-100' : 'transition-all duration-100'}`}>
                        <h1 className={`text-2xl font-bold ${onEnter ? '' : ''}`}>Our Mission</h1>
                        <p className={`mt-5${onEnter ? '' : ''}`}>At the heart of our mission is a commitment to providing users with not just a secure vault, but a seamlessly integrated hub where they can effortlessly organize, update, and access their personal data.</p>
                    </div>

                </div>

                <div className={` h-[70%] shadow-xl relative grid grid-rows-2 rounded-xl`} onMouseEnter={() => setEnter2(true)} onMouseLeave={() => setEnter2(false)}>
                    <div className={`absolute left-0 bottom-0 bg-gradient-to-t  from-[#ff672b] via-25% via-[#ff672b] to-[#00000000]  w-full  rounded-xl ${onEnter2 ? 'h-full transition-all duration-500' : 'h-0 transition-all duration-500'}`}></div>
                    <div>
                        <img src={img2} className='rounded-t-xl h-full w-full' alt="" />
                    </div>
                    <div className={`z-20 px-5 py-3 ${onEnter2 ? 'text-white translate-y-10 transition-all duration-100' : 'transition-all duration-100'}`}>
                        <h1 className={`text-2xl font-bold ${onEnter2 ? '' : ''}`}>Search Capabilities</h1>
                        <p className={`mt-5${onEnter2 ? '' : ''}`}>Our advanced search algorithms go beyond basic criteria, allowing users to fine-tune their searches with precision. Whether you're seeking like-minded individuals, specific skill sets, or unique attributes.</p>
                    </div>

                </div>

                <div className={` h-[70%] shadow-xl relative grid grid-rows-2 rounded-xl`} onMouseEnter={() => setEnter3(true)} onMouseLeave={() => setEnter3(false)}>
                    <div className={`absolute left-0 bottom-0 bg-gradient-to-t  from-[#ff672b] via-25% via-[#ff672b] to-[#00000000]  w-full  rounded-xl ${onEnter3 ? 'h-full transition-all duration-500' : 'h-0 transition-all duration-500'}`}></div>
                    <div>
                        <img src={img3} className='rounded-t-xl h-full w-full' alt="" />
                    </div>
                    <div className={`z-20 px-5 py-3 ${onEnter3 ? 'text-white translate-y-10 transition-all duration-100' : 'transition-all duration-100'}`}>
                        <h1 className={`text-2xl font-bold ${onEnter3 ? '' : ''}`}>Security Measures</h1>
                        <p className={`mt-5${onEnter3 ? '' : ''}`}>Implementing multi-layered encryption protocols and regular security audits to proactively identify and address potential vulnerabilities, we prioritize the utmost protection for our user's sensitive information.</p>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default AboutUs;