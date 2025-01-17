"use client";

import React from 'react';
import Wrapper from './Wrapper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { productData } from '@/utils/data';
import SkeletonCard from './SkeletonCard';
import ProductCard from './ProductCard';

const ProductSlider = () => {
    return (
        <Wrapper className='!px-0 mb-10 relative'>
            {/* Header Section */}
            <div className='flex justify-between pt-6'>
                <h2 className='xl:text-[32px] font-bold mb-3'>Best Deal</h2>
            </div>

            {/* Swiper Slider */}
            <div className="ProductSlider mt-3 relative">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={15}
                    slidesPerView={5}
                    navigation={{
                        nextEl: '.prod_next',
                        prevEl: '.prod_prev',
                    }}
                    loop
                    // pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className='productSlider'
                    breakpoints={{
                        // Define breakpoints for responsiveness
                        320: {
                            slidesPerView: 1, // 1 slide on small screens
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2, // 2 slides on medium screens
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 3, // 4 slides on larger screens
                            spaceBetween: 20,
                        },
                        1440: {
                            slidesPerView: 5, // 6 slides on extra-large screens
                            spaceBetween: 25,
                        },
                    }}
                >
                    {/* Map Over Category Data */}
                    {productData && productData.length > 0
                        ? productData.map((product, index) => (
                            <SwiperSlide key={`${product.id}-${index}`}> {/* Combine ID and index */}
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))
                        : Array(6)
                            .fill(0)
                            .map((_, index) => (
                                <SwiperSlide key={index}> {/* `index` is fine for skeletons */}
                                    <SkeletonCard />
                                </SwiperSlide>
                            ))}
                </Swiper>

                {/* Custom Navigation Arrows */}
                <div className="prod_prev outside_Arrow_prev swiper-button-prev absolute top-1/2 left-[-30px] transform -translate-y-1/2 z-10 cursor-pointer">

                </div>
                <div className="prod_next outside_Arrow_next swiper-button-next absolute top-1/2 right-[-30px] transform -translate-y-1/2 z-10 cursor-pointer">

                </div>
            </div>
        </Wrapper>
    );
};

export default ProductSlider;
