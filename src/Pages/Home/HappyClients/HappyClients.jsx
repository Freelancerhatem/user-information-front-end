/* eslint-disable react/no-unescaped-entities */
import image1 from '../../../assets/review/james-person-1.jpg'
import image2 from '../../../assets/review/p2.avif'
import image3 from '../../../assets/review/p3.avif'
import image4 from '../../../assets/review/p4.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import useAos from '../../../Hooks/useAos/useAos';
const HappyClients = () => {
useAos()
    return (
        <div data-aos='fade-up' className="rounded-md w-[calc(100vw-120px)] mx-auto py-5  bg-gray-50">
            <div className=" mx-auto w-[50%]   px-10  ">
                <Swiper loop={true} navigation={true} modules={[Navigation]} className="">
                    <SwiperSlide>
                    <div className=''>
                            <div className='flex flex-col items-center'>
                                <img className='w-20 rounded-full mx-auto mt-5' src={image1} alt="" />
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={5}
                                    readOnly
                                />
                                
                            </div>
                            <div className='px-20 mt-5 '>

                                <div className='flex items-center'>
                                    <hr className='h-1 w-10 bg-slate-500' />
                                    <h1 className='text-2xl'>James Kim</h1>
                                </div>
                                <p className='text-gray-400'>Antripe.com is an invaluable resource for anyone who values their time. As a parent juggling work and family responsibilities, I appreciate the ease with which I can access essential information on this site. Whether I'm researching local services or looking for quick tips, Antripe consistently delivers reliable results, making my daily tasks a breeze.</p>

                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <div className='flex flex-col items-center'>
                                <img className='w-20 h-20 rounded-full mx-auto mt-5' src={image2} alt="" />
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={5}
                                    readOnly
                                />

                            </div>
                            <div className='px-20 mt-5 '>

                                <div className='flex items-center'>
                                    <hr className='h-1 w-10 bg-slate-500' />
                                    <h1 className='text-2xl'>Alex Rodriguez</h1>
                                </div>
                                <p className='text-gray-400'>Antripe.com is an invaluable resource for anyone who values their time. As a parent juggling work and family responsibilities, I appreciate the ease with which I can access essential information on this site. Whether I'm researching local services or looking for quick tips, Antripe consistently delivers reliable results, making my daily tasks a breeze.</p>

                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <div className='flex flex-col items-center'>
                                <img className='w-20 h-20 rounded-full mx-auto mt-5' src={image3} alt="" />
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={5}
                                    readOnly
                                />

                            </div>
                            <div className='px-20 mt-5 '>

                                <div className='flex items-center'>
                                    <hr className='h-1 w-10 bg-slate-500' />
                                    <h1 className='text-2xl'>Marcus Patel</h1>
                                </div>
                                <p className='text-gray-400'>Antripe.com has become an integral part of my travel planning routine. From finding the best restaurants in a new city to exploring local attractions, this website provides comprehensive and insightful information. The user info finder feature is particularly impressive, giving me a quick snapshot of what I need to know about a place or service. Antripe is a must-have for any avid traveler.</p>

                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                    <div className=''>
                            <div className='flex flex-col items-center'>
                                <img className='w-20 h-20 rounded-full mx-auto mt-5' src={image4} alt="" />
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={5}
                                    readOnly
                                />
                                
                            </div>
                            <div className='px-20 mt-5 '>

                                <div className='flex items-center'>
                                    <hr className='h-1 w-10 bg-slate-500' />
                                    <h1 className='text-2xl'>Sarah Thompson</h1>
                                </div>
                                <p className='text-gray-400'>Antripe.com has simplified my information-gathering process immensely. As a student constantly researching for assignments and projects, I appreciate the website's ability to aggregate relevant and credible information. The site's clean design and intuitive navigation make it easy to find what I need without wasting time. Antripe has become my academic research companion, saving me both time and effort.</p>

                            </div>

                        </div>
                    </SwiperSlide>



                </Swiper>
            </div>


        </div>
    );
};

export default HappyClients;