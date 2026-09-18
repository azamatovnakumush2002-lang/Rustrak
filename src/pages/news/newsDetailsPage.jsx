import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../../context/languageContext";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const NewsDetail = () => {
    const { path } = useParams();
    const { data } = useLanguage();
    const navigate = useNavigate();
    const allNews = data?.newsPage?.allAvto ?? [];
    const news = allNews.find((item) => {
        return item.path === `/${path}/`;
    });
    if (!news) {
        return (
            <>
                <Header />
                <div className='container mx-auto px-4 py-10'>
                    <h1 className='text-3xl font-semibold'>
                        Новость не найдена
                    </h1>
                </div>
                <QuestionsSection />
                <Footer />
            </>
        );
    }
    return (
        <>
            <div className='bg-[#f9f9f9]'>
                <div className='mx-auto max-w-360 px-5'>
                    <div className='py-8'>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold mb-3'>
                            {news.name}
                        </h1>
                        <p className='text-[18px]'>{news.year}</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 pb-10 md:pb-30'>
                        <div>
                            {news.texts?.map((item) => (
                                <p className='text-base md:text-[20px] mb-5'>
                                    {item}
                                </p>
                            ))}
                            <div>
                                <h1 className='font-bold text-[20px] mb-5'>
                                    {news?.keyCharacter}
                                </h1>
                                {news.keyCharacters?.map((item) => (
                                    <p className='text-base md:text-[20px]'>
                                        {item}
                                    </p>
                                ))}
                            </div>
                            <div>
                                <h1 className='font-bold text-[20px] my-5'>
                                    {news?.design}
                                </h1>
                                <p className='text-base md:text-[20px]'>
                                    {news?.designText}
                                </p>
                            </div>
                            <div>
                                <h1 className='font-bold text-[20px] my-5'>
                                    {news?.protection}
                                </h1>
                                {news.protectionText?.map((item) => (
                                    <p className='text-base md:text-[20px]'>
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>

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
                                {news.images.map((item) => (
                                    <SwiperSlide>
                                        <img
                                            src={item}
                                            className='object-cover bg-center bg-no-repeat w-full h-50 sm:h-80 md:max-h-120 rounded-xl'
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    {/* more news */}
                    <div>
                        <h1 className='font-medium text-[26px]'>
                            {data.newsPage.swiperTitle}
                        </h1>
                        <Swiper
                            keyboard={true}
                            breakpoints={{
                                300: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                            }}
                            modules={[Mousewheel, Keyboard]}
                            className='mySwiper'
                        >
                            {data.newsPage.allAvto.map((item) => (
                                <SwiperSlide>
                                    <div className='my-5 md:my-10 p-3 lg:p-5 rounded bg-white'>
                                        <p>{item.year}</p>
                                        <h1 className='line-clamp-2 text-base lg:text-[20px] font-medium'>
                                            {item.name}
                                        </h1>
                                        <button
                                            onClick={() =>
                                                navigate(`/news/${item.path}`)
                                            }
                                            className='flex items-center gap-2 text-gray-400 hover:text-amber-400 transition duration-300  text-base lg:text-[20px] mt-2 sm:mt-5'
                                        >
                                            Подробнее
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='20'
                                                height='20'
                                                viewBox='0 0 16 16'
                                            >
                                                <path
                                                    d='M0 0h16v16H0z'
                                                    fill='none'
                                                />

                                                <path
                                                    fill='currentColor'
                                                    fillRule='evenodd'
                                                    d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsDetail;
