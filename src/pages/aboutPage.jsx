import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Breadcrumb from "../components/breadcrum/breadcrum";
import { useLanguage } from "../context/languageContext";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { div } from "motion/react-client";
const AboutPage = () => {
    const { data } = useLanguage();

    return (
        <>
            <div>
                <div className='mx-auto px-5 max-w-360'>
                    <Breadcrumb />
                </div>
                <div className='bg-[url(/aboutPagePhotos/about-company.jpg)] object-cover bg-center bg-no-repeat h-70 md:h-110 mb-20'>
                    <div className='mx-auto px-5 max-w-360'>
                        <h1 className='text-white text-[24px] font-medium max-w-130 pt-10'>
                            {data.aboutPage.pageTitle}
                        </h1>
                    </div>
                </div>
                {/* ////////////////////////////////////////////// */}
                <div className='mx-auto px-5 max-w-360 mb-20'>
                    <div className='mb-16'>
                        <div className='flex justify-between items-center mb-5 sm:mb-8'>
                            <h1 className='text-[18px] md:text-[20px] lg:text-[22px] max-w-120 lg:max-w-160'>
                                {data.aboutPage.swiperTitle}
                            </h1>
                            <div className='hidden sm:block items-center gap-3'>
                                <button className='custom-prev-btn border border-gray-800 rounded justify-center  hover:bg-amber-300 transition-all duration-300 group mr-4'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='40px'
                                        height='40px'
                                        viewBox='0 0 16 16'
                                    >
                                        <path d='M0 0h16v16H0z' fill='none' />
                                        <path
                                            fill='none'
                                            stroke='#454141'
                                            d='M9.5 4.5L6 8l3.5 3.5'
                                        />
                                    </svg>
                                </button>
                                <button className='custom-next-btn border border-gray-800 rounded justify-center  hover:bg-amber-300 transition-all duration-300 group'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='40px'
                                        height='40px'
                                        viewBox='0 0 16 16'
                                    >
                                        <path d='M0 0h16v16H0z' fill='none' />
                                        <path
                                            fill='none'
                                            stroke='#454141'
                                            d='M6 4.5L9.5 8L6 11.5'
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={10}
                            slidesPerView={2}
                            loop={true}
                            navigation={{
                                prevEl: ".custom-prev-btn",
                                nextEl: ".custom-next-btn",
                            }}
                            breakpoints={{
                                300: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                            }}
                            className='mySwiper'
                        >
                            {data.aboutPage.swiperInfo.map((item, id) => (
                                <SwiperSlide key={id}>
                                    <div className='border border-[#EBEBEB] h-55 sm:h-65 lg:h-80 rounded-lg p-3 sm:p-5 transition-all duration-300 hover:border-amber-400 hover:shadow-[0_8px_25px_rgba(245,158,11,0.15)] cursor-pointer'>
                                        <div className='mb-2 lg:my-5'>
                                            <img src={item.image} />
                                        </div>
                                        <h3 className='font-medium text-base sm:text-[18px] lg:text-[20px] mb-3'>
                                            {item.title}
                                        </h3>
                                        <p className='text-sm line-clamp-4 md:line-clamp-5'>
                                            {item.text}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between items-center mb-5 sm:mb-10'>
                        <div>
                            <h1 className='font-medium text-4xl mb-5'>
                                {data.aboutPage.title}
                            </h1>
                            {data.aboutPage.texts.map((item, i) => (
                                <div
                                    key={i}
                                    className='flex items-start gap-3 mb-5'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                    >
                                        <path d='M0 0h24v24H0z' fill='none' />
                                        <path
                                            fill='#efa806'
                                            d='m23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68zm-13 5l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9z'
                                        />
                                    </svg>
                                    <p className='text-base sm:text-[18px]'>
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div>
                            <img
                                src='/aboutPagePhotos/about-track.png'
                                className='w-auto h-auto object-cover'
                            />
                        </div>
                    </div>
                    <div className='grid min-[1200px]:grid-cols-3 gap-5 mb-10 sm:mb-20'>
                        <div className='rounded-xl bg-primary p-5'>
                            <h1 className='font-medium text-xl lg:text-[28px] leading-[110%] my-5'>
                                {data.aboutPage.yellowTitle1}
                            </h1>
                            <p className=''>{data.aboutPage.yellowText1}</p>
                            <h1 className='font-medium text-xl lg:text-[28px] leading-[110%] my-5'>
                                {data.aboutPage.yellowTitle2}
                            </h1>
                            <p className=''>{data.aboutPage.yellowText2}</p>
                        </div>
                        <div className='col-span-2 grid grid-cols-2 gap-5'>
                            <div>
                                <img
                                    src='/aboutPagePhotos/about-im_v2.webp'
                                    className='rounded-xl w-full h-auto object-cover'
                                />
                            </div>
                            <div>
                                <img
                                    src='/aboutPagePhotos/about-im2_v2.webp'
                                    className='rounded-xl w-full h-auto object-cover'
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='textbase sm:text-[18px] mb-5 sm:mb-10'>
                            {data.aboutPage.lastText1}
                        </p>
                        <p className='textbase sm:text-[18px] mb-5 sm:mb-10'>
                            {data.aboutPage.lastText2}
                        </p>
                        <p className='textbase sm:text-[18px] mb-5 sm:mb-10'>
                            {data.aboutPage.lastText3}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AboutPage;
