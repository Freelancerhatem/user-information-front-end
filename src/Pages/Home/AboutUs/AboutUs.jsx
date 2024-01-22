
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import NumberCount from '../../../Components/NumberCount/NumberCount';
const AboutUs = () => {
    const [counterOn, setCounterOn] = useState(false);
    console.log(counterOn)
    return (
        <div name={'about'}  className="h-screen bg-red-300 ">
            
                <h2 className='text-3xl text-center pt-5'>About us</h2>

                <ScrollTrigger className='h-[90vh] flex justify-center gap-4 pt-20' duration = {500} onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
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
            
        </div>
    );
};

export default AboutUs;