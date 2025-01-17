"use client"
import { Sora} from "next/font/google";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { banner1 } from '@/assets/images';
import Image from 'next/image';
import { Button } from "./ui/button";
const sora = Sora({ subsets: ['latin'] });

const HeroBanner = () => {
    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="banner_Img relative">
                        <Image src={banner1} className="w-full " width={1200} height={600} alt="Banner image 1"
                        />
                        <div className="bannerContent absolute top-[30%] left-[40%]">
                            <h6 className={`${sora.className} text-[--GreenColor] text-xl`}>Beast Deals</h6>
                            <h2  className={`${sora.className}  font-bold text-[70px] leading-tight`}>Organic Grocery</h2>
                            <p  className={`${sora.className}  text-[20px] mt-3 `}>Save up to 20% offf this week</p>

                            <Button className="bg-[--primeColor] rounded-full inline-block mt-3">Shop Now</Button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="banner_Img relative">
                        <Image src={banner1} className="w-full " width={1200} height={600} alt="Banner image 1"
                        />
                        <div className="bannerContent absolute top-[30%] left-[40%]">
                            <h6 className='text-[--GreenColor] text-xl'>Beast Deals</h6>
                            <h2  className={`${sora.className}  font-bold text-[70px] leading-tight`}>Fresh Vegitable</h2>
                            <p  className={`${sora.className}  text-[20px] mt-3 `}>Save up to 20% offf this week</p>

                            <Button className="bg-[--primeColor] rounded-full inline-block mt-3">Shop Now</Button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="banner_Img relative">
                        <Image src={banner1} className="w-full " width={1200} height={600} alt="Banner image 1"
                        />
                        <div className="bannerContent absolute top-[30%] left-[40%]">
                            <h6 className='text-[--GreenColor] text-xl'>Beast Deals</h6>
                            <h2  className={`${sora.className}  font-bold text-[70px] leading-tight`}>Dairy, Bread & Eggs </h2>
                            <p  className={`${sora.className}  text-[20px] mt-3 `}>Save up to 20% offf this week</p>

                            <Button className="bg-[--primeColor] rounded-full inline-block mt-3">Shop Now</Button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="banner_Img relative">
                        <Image src={banner1} className="w-full " width={1200} height={600} alt="Banner image 1"
                        />
                        <div className="bannerContent absolute top-[30%] left-[40%]">
                            <h6 className='text-[--GreenColor] text-xl'>Beast Deals</h6>
                            <h2  className={`${sora.className}  font-bold text-[70px] leading-tight`}>Ready to Cook</h2>
                            <p  className={`${sora.className}  text-[20px] mt-3 `}>Save up to 20% offf this week</p>

                            <Button className="bg-[--primeColor] rounded-full inline-block mt-3">Shop Now</Button>
                        </div>
                    </div></SwiperSlide>
          
            </Swiper>
        </>
    )
}

export default HeroBanner
