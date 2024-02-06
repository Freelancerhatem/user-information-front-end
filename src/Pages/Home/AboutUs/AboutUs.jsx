
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import NumberCount from '../../../Components/NumberCount/NumberCount';
import img1 from '../../../assets/partner/a- (1).png'
const AboutUs = () => {
    const [counterOn, setCounterOn] = useState(false);
    console.log(counterOn)
    return (
        <div name={'about'}  className="h-screen bg-white ">
            
                <h2 className='text-3xl text-center pt-5'>About us</h2>

                <ScrollTrigger className=' flex justify-center items-center gap-4 py-5 mt-5 rounded-xl bg-gray-100 w-[calc(100vw-80px)] mx-auto' duration = {500} onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
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
            
            <div className='  h-[calc(100%-100px)] grid grid-cols-3 gap-5 py-5 px-10'>
                <div className='h-full w-full bg-orange-200 rounded-xl px-10 py-5'>
                        <div className='' >
                            <h1 className='text-2xl text-center'>Meet the Faces Behind the Data</h1>
                            <p className='text-center mt-5 opacity-50 '>This heading communicates a sense of empowerment and personal connection, letting users know that your team is there to support and guide them through their digital experience.</p>
                            
                        </div>
                </div>
                <div className='h-full w-full bg-orange-200 rounded-xl px-10 py-5'>
                        <div className='' >
                            <h1 className='text-2xl text-center'>Meet the Faces Behind the Data</h1>
                            <p className='text-center mt-5 opacity-50 '>This heading communicates a sense of empowerment and personal connection, letting users know that your team is there to support and guide them through their digital experience.</p>
                            
                        </div>
                </div>
                <div className='h-full w-full bg-orange-200 rounded-xl px-10 py-5'>
                        <div className='' >
                            <h1 className='text-2xl text-center'>Meet the Faces Behind the Data</h1>
                            <p className='text-center mt-5 opacity-50 '>This heading communicates a sense of empowerment and personal connection, letting users know that your team is there to support and guide them through their digital experience.</p>
                            
                        </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;