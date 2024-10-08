"use client"

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';
import project1 from "../../public/assets/projects/faisal1.jpg"
import Image from 'next/image';
const LatestPosts = () => {
    return (
        <div className='mb-24'>
            <div className='container mx-auto'>
                <div className="space-y-5 mt-24">
                    <h3 className="text-4xl md:text-6xl font-bold text-center">Latest Posts</h3>
                    <p className="mx-auto text-center px-2 md:px-0 md:max-w-[80%] lg:max-w-[50%]">
                        If you are planning on developing a product landing.
                    </p>
                </div>
            </div>
            <div className='container mx-auto'>
                <div className='mt-20'>
                    <>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            // navigation={true}
                            breakpoints={{
                                // Small screens (default)
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,  // Show 3 slides on large screens
                                    spaceBetween: 10,
                                },
                                // Large screens (1024px and up)
                                1024: {
                                    slidesPerView: 2,  // Show 3 slides on large screens
                                    spaceBetween: 30,  // Increase space between slides
                                },
                                // Extra-large screens (1366px and up)
                                1366: {
                                    slidesPerView: 3,  // Show 4 slides on very large screens
                                    spaceBetween: 20,  // Increase spacing for a spacious layout
                                },
                            }}
                            modules={[Autoplay]}
                            className="mySwiper flex justify-center"
                        >
                            <SwiperSlide>
                                <div className="card mx-auto bg-base-100 border-2 border-gray-300 lg:w-96 shadow-xl">
                                    <figure style={{ width: '100%' }}>
                                        <Image src={project1} alt='Blog' width={390} height={200}></Image>
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Life Lack Meaning</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, tempore!</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card mx-auto bg-base-100 border-2 border-gray-300 lg:w-96 shadow-xl">
                                    <figure style={{ width: '100%' }}>
                                        <Image src={project1} alt='Blog' width={390} height={200}></Image>
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Life Lack Meaning</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, tempore!</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card mx-auto bg-base-100 border-2 border-gray-300 lg:w-96 shadow-xl">
                                    <figure style={{ width: '100%' }}>
                                        <Image src={project1} alt='Blog' width={390} height={200}></Image>
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Life Lack Meaning</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, tempore!</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card mx-auto bg-base-100 border-2 border-gray-300 lg:w-96 shadow-xl">
                                    <figure style={{ width: '100%' }}>
                                        <Image src={project1} alt='Blog' width={390} height={200}></Image>
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Life Lack Meaning</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, tempore!</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card mx-auto bg-base-100 border-2 border-gray-300 lg:w-96 shadow-xl">
                                    <figure style={{ width: '100%' }}>
                                        <Image src={project1} alt='Blog' width={390} height={200}></Image>
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Life Lack Meaning</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, tempore!</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card mx-auto bg-base-100 border-2 border-gray-300 lg:w-96 shadow-xl">
                                    <figure style={{ width: '100%' }}>
                                        <Image src={project1} alt='Blog' width={390} height={200}></Image>
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Life Lack Meaning</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, tempore!</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card mx-auto bg-base-100 border-2 border-gray-300 lg:w-96 shadow-xl">
                                    <figure style={{ width: '100%' }}>
                                        <Image src={project1} alt='Blog' width={390} height={200}></Image>
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Life Lack Meaning</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, tempore!</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card mx-auto bg-base-100 border-2 border-gray-300 lg:w-96 shadow-xl">
                                    <figure style={{ width: '100%' }}>
                                        <Image src={project1} alt='Blog' width={390} height={200}></Image>
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Life Lack Meaning</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, tempore!</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card mx-auto bg-base-100 border-2 border-gray-300 lg:w-96 shadow-xl">
                                    <figure style={{ width: '100%' }}>
                                        <Image src={project1} alt='Blog' width={390} height={200}></Image>
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Life Lack Meaning</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, tempore!</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </>
                </div>
            </div>
        </div>
    );
};

export default LatestPosts;