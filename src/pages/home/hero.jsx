import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import allImages from "../../assets/icons/icons";
import {
    CallButton,
    OpenCatalogButton,
    PodrobneButton,
} from "../../components/buttons/buttons";
import { ZakazatZvonokModal } from "../../components/modals/modals";
import { useLanguage } from "../../context/languageContext";
const Hero = () => {
    const { data } = useLanguage();
    const [zakazatOpen, setZakazatOpen] = useState(false);
    return (
        <div className='mx-auto max-w-360 px-5 mb-10 md:mb-20 lg:mb-30'>
            <Swiper
                spaceBetween={30}
                navigation={true}
                pagination={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <div className='rounded-2xl'>
                        <img
                            src={allImages.homeSwiperImages.img1}
                            className='object-cover bg-center bg-no-repeat rounded-2xl w-full h-60 md:h-auto'
                        />
                    </div>
                    <div className='absolute top-5 left-4 sm:left-7'>
                        <h1 className='font-bold text-[20px] sm:text-[28px] text-[#FFFFFF] max-w-140 mb-3'>
                            {data.homePageSwiper.swiperSlide1.title}
                        </h1>
                        <p className='text-sm md:text-[18px] text-[#FFFFFF] mb-1 md:mb-3'>
                            {data.homePageSwiper.swiperSlide1.text}
                        </p>
                        <CallButton onClick={() => setZakazatOpen(true)} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <div className='rounded-2xl '>
                            <img
                                src={allImages.homeSwiperImages.img2}
                                className='object-cover bg-center bg-no-repeat rounded-2xl h-60 md:h-auto w-full'
                            />
                        </div>
                        <div className='absolute inset-0 bg-linear-to-r from-black via-black/30 to-transparent rounded-2xl'></div>
                        <div className='absolute z-10 top-5 left-4 sm:left-7'>
                            <h1 className='font-bold text-[20px] sm:text-[28px] text-[#FFFFFF] mb-3'>
                                {data.homePageSwiper.swiperSlide2.title}
                            </h1>
                            <p className='text-sm md:text-[18px] text-[#FFFFFF] mb-4 max-w-110'>
                                {data.homePageSwiper.swiperSlide2.text}
                            </p>

                            <CallButton onClick={() => setZakazatOpen(true)} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <div className='rounded-2xl'>
                            <img
                                src={allImages.homeSwiperImages.img3}
                                className='object-cover bg-center bg-no-repeat rounded-2xl h-60 md:h-auto w-full'
                            />
                        </div>
                        <div className='absolute inset-0 bg-linear-to-r from-black via-black/30 to-transparent rounded-2xl'></div>
                        <div className='absolute z-10 top-5 left-4 sm:left-7'>
                            <h1 className='font-bold text-[20px] sm:text-[28px] text-[#FFFFFF] mb-1 md:mb-3'>
                                {data.homePageSwiper.swiperSlide3.title}
                            </h1>
                            <p className='text-sm md:text-[18px] text-[#FFFFFF] mb-1 md:mb-3 max-w-160'>
                                {data.homePageSwiper.swiperSlide3.text}
                            </p>
                            <PodrobneButton />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative overflow-hidden rounded-2xl'>
                        <div className='rounded-2xl'>
                            <img
                                src={allImages.homeSwiperImages.img4}
                                className='object-cover bg-center bg-no-repeat rounded-2xl h-60 md:h-auto w-full'
                            />
                        </div>
                        <div className='absolute inset-0 bg-linear-to-r from-black via-black/30 to-transparent rounded-2xl'></div>
                        <div className='absolute z-10 top-5 left-4 sm:left-7'>
                            <h1 className='font-bold text-[20px] sm:text-[28px] text-[#FFFFFF]  mb-3'>
                                {data.homePageSwiper.swiperSlide4.title}
                            </h1>
                            <p className='text-sm md:text-[18px] text-[#FFFFFF] mb-3 max-w-130'>
                                {data.homePageSwiper.swiperSlide4.text}
                            </p>
                            <div className='flex gap-4'>
                                <OpenCatalogButton />
                                <CallButton
                                    onClick={() => setZakazatOpen(true)}
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative overflow-hidden rounded-2xl'>
                        <div className='rounded-2xl'>
                            <img
                                src={allImages.homeSwiperImages.img5}
                                className='object-cover bg-center bg-no-repeat rounded-2xl h-60 md:h-auto w-full'
                            />
                        </div>
                        <div className='absolute inset-0 bg-linear-to-r from-black via-black/30 to-transparent rounded-2xl'></div>
                        <div className='z-10 absolute top-5 left-4 sm:left-7'>
                            <h1 className='font-bold text-base sm:text-[26px] text-[#FFFFFF] mb-3'>
                                {data.homePageSwiper.swiperSlide5.title}
                            </h1>
                            <p className='text-[10px] sm:text-sm md:text-base text-[#FFFFFF] mb-3 max-w-170 '>
                                {data.homePageSwiper.swiperSlide5.text}
                            </p>
                            <div className='flex gap-4'>
                                <PodrobneButton />
                                <CallButton
                                    onClick={() => setZakazatOpen(true)}
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative overflow-hidden rounded-2xl'>
                        <div className='rounded-2xl'>
                            <img
                                src={allImages.homeSwiperImages.img6}
                                className='object-cover bg-center bg-no-repeat rounded-2xl h-60 md:h-auto w-full'
                            />
                        </div>
                        <div className='absolute inset-0 bg-linear-to-r from-black via-black/30 to-transparent rounded-2xl'></div>
                        <div className='z-10 absolute top-5 left-4 sm:left-7'>
                            <h1 className='font-bold text-base sm:text-[26px] text-[#FFFFFF] mb-3'>
                                {data.homePageSwiper.swiperSlide6.title}
                            </h1>
                            <p className='text-[12px] md:text-base text-[#FFFFFF] mb-3 max-w-160'>
                                {data.homePageSwiper.swiperSlide6.text}
                            </p>
                            <div className='flex gap-4'>
                                <PodrobneButton />
                                <CallButton
                                    onClick={() => setZakazatOpen(true)}
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative overflow-hidden rounded-2xl'>
                        <div className='rounded-2xl'>
                            <img
                                src={allImages.homeSwiperImages.img7}
                                className='object-cover bg-center bg-no-repeat rounded-2xl h-60 md:h-auto w-full'
                            />
                        </div>
                        <div className='absolute inset-0 bg-linear-to-r from-black via-black/30 to-transparent rounded-2xl'></div>
                        <div className='z-10 absolute top-5 left-4 sm:left-7'>
                            <h1 className='font-bold text-[20px] sm:text-[28px] text-[#FFFFFF] mb-3'>
                                {data.homePageSwiper.swiperSlide7.title}
                            </h1>
                            <p className='text-[12px] sm:text-[14px] md:text-[18px] text-[#FFFFFF] mb-3 max-w-140'>
                                {data.homePageSwiper.swiperSlide7.text}
                            </p>
                            <div className='flex gap-4'>
                                <OpenCatalogButton />
                                <CallButton
                                    onClick={() => setZakazatOpen(true)}
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            {zakazatOpen && (
                <ZakazatZvonokModal onClose={() => setZakazatOpen(false)} />
            )}
        </div>
    );
};
export default Hero;
