"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

// Import required Swiper modules
import { Pagination, FreeMode } from 'swiper/modules';

// Import Images of team member
import faisal from "../../public/assets/Team/faisal.jpg"
import Image from 'next/image';

const OurTeam = () => {
    return (
        <div>
            <div className="container mx-auto my-24">
                <div className="space-y-5">
                    <h3 className="text-4xl md:text-6xl font-bold text-center">Our Team</h3>
                    <p className="mx-auto text-center px-2 md:px-0 md:max-w-[80%] lg:max-w-[50%]">
                        If you are planning on developing a product landing app or website, take
                        a look at this beautiful-crafted
                    </p>
                </div>
            </div>
            <div className='container mx-auto'>
                <div className='mt-16'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}  // Import and use FreeMode properly
                        breakpoints={{
                            // Small screens (default)
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            // Medium screens (768px and up)
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            // Large screens (1024px and up)
                            1024: {
                                slidesPerView: 2,  // Show 3 slides on large screens
                                spaceBetween: 30,  // Increase space between slides
                            },
                            // Extra-large screens (1366px and up)
                            1366: {
                                slidesPerView: 3,  // Show 4 slides on very large screens
                                spaceBetween: 30,  // Increase spacing for a spacious layout
                            },
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide className='mb-20'>
                            <div className="card card-compact  h-[300px]">
                                <figure>
                                    <Image
                                        className="rounded object-contain"
                                        src={faisal}
                                        alt="Team" fill />
                                </figure>
                                {/* <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div> */}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card card-compact bg-blue-500  shadow-xl">
                                <figure>

                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card card-compact bg-blue-500  shadow-xl">
                                <figure>

                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card card-compact bg-blue-500  shadow-xl">
                                <figure>

                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card card-compact bg-blue-500  shadow-xl">
                                <figure>

                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card card-compact bg-blue-500  shadow-xl">
                                <figure>

                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card card-compact bg-blue-500  shadow-xl">
                                <figure>

                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card card-compact bg-blue-500  shadow-xl">
                                <figure>

                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card card-compact bg-base-100  shadow-xl">
                                <figure>

                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
