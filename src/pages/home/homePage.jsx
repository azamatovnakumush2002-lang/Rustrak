import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    NewsPodrobneeButton,
    PodrobneeButton,
    PoluchitButton,
} from "../../components/buttons/buttons";
import { PoluchitButtonModal } from "../../components/modals/modals";
import ScrollSlider from "../../components/scrollSlider/scrollSlider";
import YellowSection from "../../components/yellowSection/yellow";
import { useLanguage } from "../../context/languageContext";
import Hero from "./hero";

const HomePage = () => {
    const navigate = useNavigate();
    const { data } = useLanguage();
    const [likedCards, setLikedCards] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const allProducts = Object.values(data.CategoryProducts.Products).flat();

    return (
        <div>
            <Hero />
            {/* category section*/}
            <div className='mx-auto max-w-360 px-5 mb-16'>
                <div className='flex justify-between items-center mb-5 sm:mb-8'>
                    <h1 className='font-medium text-[30px] sm:text-[42px]'>
                        {data.CategoryProducts.categoryTitle}
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
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    className='mySwiper'
                >
                    {data.CategoryProducts.categoryCards.map((card, index) => (
                        <SwiperSlide
                            key={index}
                            onClick={() => navigate(`/category/${card.path}`)}
                        >
                            <Link to={`/category/${card.path}`}>
                                <div className='border border-[#EBEBEB] rounded-lg p-3 sm:p-5 h-auto  transition-all duration-300 hover:border-amber-400 hover:shadow-[0_8px_25px_rgba(245,158,11,0.15)]  cursor-pointer'>
                                    <h3 className='font-normal text-[18px] sm:text-2xl overflow-hidden truncate'>
                                        {card.name}
                                    </h3>
                                    <img
                                        src={card.image}
                                        className='w-auto h-auto object-contain'
                                    />
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* about rustrack section */}
            <div className='mx-auto max-w-360 px-5 my-10 lg:my-20 lg:flex lg:justify-between items-center'>
                <div>
                    <h1 className='max-w-70 sm:max-w-full font-medium text-[30px] sm:text-[42px]sm:whitespace-nowrap'>
                        {data.homePageAboutRustrak.aboutTitle}
                        <span className='text-[#FEC80B]'>
                            {data.homePageAboutRustrak.rustrak}
                        </span>
                    </h1>
                    <p className='font-normal text-base sm:text-[18px] w-full lg:max-w-120 my-3 sm:my-6'>
                        {data.homePageAboutRustrak.firstText}
                    </p>
                    <p className='font-normal text-base sm:text-[18px] w-full lg:max-w-120 mb-5 sm:mb-10'>
                        {data.homePageAboutRustrak.secondText}
                    </p>
                    <PodrobneeButton />
                </div>
                <div className='mx-auto max-w-187.5 max-h-112.5 mt-4 md:mt-0'>
                    <img
                        src={data.homePageAboutRustrak.image}
                        className='w-auto h-auto object-contain'
                    />
                </div>
            </div>
            <YellowSection />
            <ScrollSlider />
            {/* recommend product section */}
            <div className='bg-[#F9F9F9]'>
                <div className='mx-auto max-w-360 px-5 py-6 sm:py-10'>
                    <div className='flex justify-between items-center mb-5 sm:mb-8'>
                        <h1 className='font-medium text-[24px] sm:text-[36px] md:text-[42px]'>
                            {data.CategoryProducts.recomendTitle}
                        </h1>
                        {/* navigation */}
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
                        {allProducts.map((card) => {
                            const category =
                                data.CategoryProducts.categoryCards.find(
                                    (item) => item.id === card.categoryId,
                                );

                            return (
                                <SwiperSlide
                                    key={`${card.categoryId}-${card.id}`}
                                >
                                    <div
                                        className='absolute right-0 cursor-pointer z-10'
                                        onClick={() => {
                                            setLikedCards((prev) =>
                                                prev.includes(
                                                    `${card.categoryId}-${card.id}`,
                                                )
                                                    ? prev.filter(
                                                          (id) =>
                                                              id !==
                                                              `${card.categoryId}-${card.id}`,
                                                      )
                                                    : [
                                                          ...prev,
                                                          `${card.categoryId}-${card.id}`,
                                                      ],
                                            );
                                        }}
                                    >
                                        {likedCards.includes(
                                            `${card.categoryId}-${card.id}`,
                                        ) ? (
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='34'
                                                height='34'
                                                viewBox='0 0 24 24'
                                            >
                                                <path
                                                    d='M0 0h24v24H0z'
                                                    fill='none'
                                                />
                                                <path
                                                    fill='#ae080d'
                                                    fillRule='evenodd'
                                                    d='M4.536 5.778a5 5 0 0 1 7.07 0q.275.274.708.682q.432-.408.707-.682a5 5 0 0 1 7.125 7.016L13.02 19.92a1 1 0 0 1-1.414 0L4.48 12.795a5 5 0 0 1 .055-7.017z'
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='34'
                                                height='34'
                                                viewBox='0 0 24 24'
                                            >
                                                <path
                                                    d='M0 0h24v24H0z'
                                                    fill='none'
                                                />
                                                <path
                                                    fill='#000'
                                                    fillRule='evenodd'
                                                    d='M19.285 12.645a3.8 3.8 0 0 0-5.416-5.332q-.288.288-.732.707l-.823.775l-.823-.775q-.445-.42-.733-.707a3.8 3.8 0 0 0-5.374 0c-1.468 1.469-1.485 3.844-.054 5.32l6.984 6.984l6.97-6.972zm-14.75-6.18a5 5 0 0 1 7.072 0q.273.274.707.682q.432-.408.707-.683a5 5 0 0 1 7.125 7.017l-7.125 7.126a1 1 0 0 1-1.414 0L4.48 13.48a5 5 0 0 1 .055-7.017z'
                                                />
                                            </svg>
                                        )}
                                    </div>
                                    <div>
                                        <img
                                            src={card.image}
                                            className='w-full h-50 object-cover'
                                        />
                                    </div>
                                    <div className='bg-white p-3 text-center md:text-left'>
                                        <h3 className='font-normal text-sm sm:text-base line-clamp-2 text-left'>
                                            {card.name}
                                        </h3>
                                        <p className='mx-auto text-center font-medium text-[22px]'>
                                            {data.CategoryProducts.sena}
                                        </p>
                                        <div className='flex flex-col'>
                                            <button
                                                onClick={() =>
                                                    navigate(
                                                        `/category/${category.slug}/${card.id}`,
                                                    )
                                                }
                                                className='py-1 md:py-2 rounded bg-[#FEC80B] border border-[#FEC80B] hover:text-[#FEC80B] hover:bg-white w-full text-center justify-center text-[12px] sm:text-base transition duration-300'
                                            >
                                                {
                                                    data.CategoryProducts
                                                        .podrobneBtn
                                                }
                                            </button>
                                            <PoluchitButton
                                                onClick={() =>
                                                    setModalOpen(true)
                                                }
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    {modalOpen && (
                        <PoluchitButtonModal
                            onClose={() => setModalOpen(false)}
                        />
                    )}
                </div>
            </div>
            {/* news sectionnnnnnnnnnnnnnnnn */}
            <div className='mx-auto max-w-360 px-5 sm:my-8'>
                <div className='flex justify-between items-center mb-5 sm:mb-8'>
                    <h1 className='font-medium text-[24px] sm:text-[36px] md:text-[42px]'>
                        {data.newsPage.newsTitle}
                    </h1>
                    {/* navigationnnnnnnnnnnnnnnnnnnnn */}
                    <div className='hidden sm:block items-center gap-3'>
                        <button className='custom-prev-btn border border-gray-800 rounded justify-center hover:bg-amber-300 transition-all duration-300 group mr-4'>
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
                            spaceBetween: 30,
                        },
                    }}
                    className='mySwiper'
                >
                    {data.newsPage.allAvto.map((card, i) => (
                        <SwiperSlide key={i}>
                            <Link to={`/news/${card.path}`}>
                                <div>
                                    <img
                                        src={card.image}
                                        className='w-full h-37.5 sm:h-45 object-cover rounded-t-md'
                                    />
                                </div>

                                <div className='py-1 sm:py-3'>
                                    <span>{card.year}</span>

                                    <p className='font-medium text-base sm:text-[18px] hover:text-amber-400 mt-1 mb-2 sm:mt-2 sm:mb-4 line-clamp-2 transition duration-300'>
                                        {card.name}
                                    </p>
                                    <NewsPodrobneeButton />
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
export default HomePage;
