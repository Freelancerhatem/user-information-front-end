/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, FreeMode } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import useAos from '../../../Hooks/useAos/useAos';
import { useEffect, useState } from 'react';
import axios from 'axios';
const HappyClients = () => {
    const [feedBack, setFeedBack] = useState([]);

    useEffect(() => {
        axios.get('./UserFeedBack.json')
            .then(res => setFeedBack(res.data))
    }, [])
    useAos()
    return (
        <div data-aos='fade-up' className=" md:w-[calc(100vw-120px)] h-[50vh]  mx-auto md:py-5 px-5 md:px-0 my-10 md:my-0">
            <div className=" mx-auto md:w-[50%]   md:px-10  ">
                <Swiper loop={true} style={{
                    "--swiper-navigation-color": "#000",
                    "--swiper-navigation-size": "25px",
    
                }}

                    spaceBetween={30}
                    centeredSlides={true}
                    freeMode={true}
                    navigation={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation]}
                    className="text-xs">
                    {
                        feedBack.map((data, index) => <SwiperSlide key={index}>
                            
                                <div className='flex flex-col items-center'>
                                    <img className='md:w-20 w-10 rounded-full mx-auto mt-5' src={data.img} alt="" />
                                    <Rating
                                        style={{ maxWidth: 100 }}
                                        value={data.rating}
                                        readOnly
                                    />

                                </div>
                                <div className='px-20 mt-5 '>

                                    <div className='flex items-center'>
                                        <hr className='h-1 w-10 bg-slate-500' />
                                        <h1 className='md:text-2xl'>{data.name}</h1>
                                    </div>
                                    <p className='text-gray-400 md:text-base text-xs h-32 md:h-full'>{data.message}</p>

                                </div>

                           
                        </SwiperSlide>)
                    }



                </Swiper>
            </div>


        </div>
    );
};

export default HappyClients;