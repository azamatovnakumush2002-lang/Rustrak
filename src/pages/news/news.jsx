import { useLanguage } from "../../context/languageContext";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/breadcrum/breadcrum";

const NewsPage = () => {
    const { data } = useLanguage();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 7;

    const allNews = data.newsPage.allAvto;

    // hamma pagination
    const totalPages = Math.ceil(allNews.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;

    const currentNews = allNews.slice(startIndex, startIndex + itemsPerPage);

    // "Показать ещё" bosilganda keyingi beta o`tirado`n
    const handleShowMore = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    // Pagination
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const firstNews = data.newsPage.allAvto.find((item) => item.id === 0);

    return (
        <>
            <div className='mx-auto max-w-360 px-5 mb-10'>
                <Breadcrumb />
                <h1 className='font-semibold text-3xl my-7'>
                    {data.newsPage.pageTitle}
                </h1>

                <div className='hidden md:grid grid-cols-2 gap-5 mb-20'>
                    <div>
                        <Swiper
                            navigation={true}
                            pagination={true}
                            keyboard={true}
                            modules={[
                                Navigation,
                                Pagination,
                                Mousewheel,
                                Keyboard,
                            ]}
                            className='mySwiper'
                        >
                            {firstNews.images.map((item) => (
                                <SwiperSlide key={item}>
                                    <div className='rounded-2xl'>
                                        <img
                                            src={item}
                                            className='object-cover bg-center bg-no-repeat rounded-2xl w-full h-auto'
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div>
                        <p className='text-black text-[18px]'>
                            {firstNews.year}
                        </p>

                        <p className='font-medium text-2xl line-clamp-2'>
                            {firstNews.name}
                        </p>

                        <button
                            onClick={() => navigate(`/news/${firstNews.path}`)}
                            className='flex items-center gap-2 text-gray-400 hover:text-amber-400 transition duration-300 text-[18px] mt-10'
                        >
                            Подробнее
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='20'
                                height='20'
                                viewBox='0 0 16 16'
                            >
                                <path d='M0 0h16v16H0z' fill='none' />

                                <path
                                    fill='currentColor'
                                    fillRule='evenodd'
                                    d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8'
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* cards */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5'>
                    {currentNews.map((item, index) => (
                        <div key={index}>
                            <img
                                src={item.image}
                                className='rounded h-30 sm:h-40 lg:h-50 w-full object-cover'
                            />
                            <p className='my-1 md:my-3'>{item.year}</p>
                            <h1 className='line-clamp-2 font-medium text-base md:text-xl'>
                                {item.name}
                            </h1>
                            <button
                                onClick={() => navigate(`/news/${item.path}`)}
                                className='flex items-center gap-2 text-gray-400 hover:text-amber-400 transition duration-300  text-base md:text-[18px] mt-2 md:mt-5'
                            >
                                Подробнее
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='20'
                                    height='20'
                                    viewBox='0 0 16 16'
                                >
                                    <path d='M0 0h16v16H0z' fill='none' />

                                    <path
                                        fill='currentColor'
                                        fillRule='evenodd'
                                        d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8'
                                    />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Показать ещё */}
                {currentPage < totalPages && (
                    <div className='flex justify-center mt-10'>
                        <button
                            onClick={handleShowMore}
                            className='rounded bg-[#FEC80B] px-4 py-2 sm:px-6 sm:py-3 text-sm transition duration-300 hover:bg-[#eeb600]'
                        >
                            Показать ещё
                        </button>
                    </div>
                )}

                <div className='flex items-center justify-center gap-1 sm:gap-3 mt-10'>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className='text-gray-700 hover:text-amber-400 transition duration-300 text-[12px] sm:text-base'
                    >
                        ◁ Назад
                    </button>
                    {Array.from(
                        { length: totalPages },
                        (_, index) => index + 1,
                    ).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`flex h-5 w-5 sm:h-8 sm:w-8 items-center justify-center rounded-full text-sm transition ${
                                currentPage === page
                                    ? "bg-[#FEC80B] text-white"
                                    : "text-gray-500 hover:bg-gray-100"
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                    {/* Дальше */}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className='text-gray-700 hover:text-amber-400 transition duration-300 text-[12px] sm:text-base'
                    >
                        Дальше ▷
                    </button>
                </div>
            </div>
        </>
    );
};

export default NewsPage;
