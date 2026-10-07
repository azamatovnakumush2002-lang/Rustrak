import { useSearchParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/languageContext";
import Breadcrumb from "../components/breadcrum/breadcrum";
import allImages from "../assets/icons/icons";
import { PoluchitButton } from "../components/buttons/buttons";
import { useCart } from "../context/cardContext";
import { useLike } from "../context/likeContext";
import { useState } from "react";
import { PoluchitButtonModal } from "../components/modals/modals";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel } from "swiper/modules";

const SearchPage = () => {
    const { data } = useLanguage();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { toggleLike } = useLike();
    const [modalOpen, setModalOpen] = useState(false);
    const query = searchParams.get("query") || "";
    const allProducts = Object.values(data.CategoryProducts.Products).flat();
    const filteredProducts = allProducts.filter((product) =>
        product.name?.toLowerCase().includes(query.toLowerCase()),
    );
    const cardniOlish = (product) => {
        const category = data.CategoryProducts.categoryCards.find(
            (item) => item.id === product.categoryId,
        );
        return category?.path || category?.slug;
    };

    const cardaOtish = (product) => {
        const slug = cardniOlish(product);

        if (slug) {
            navigate(`/category/${slug}/${product.id}`);
        }
    };

    return (
        <div className='bg-[#f9f9f9]'>
            <div className='mx-auto max-w-360 px-5 pt-5 pb-10'>
                <Breadcrumb />

                <p className='font-medium text-4xl my-5'>
                    {data.search.search} <span>{query}</span>
                </p>

                {filteredProducts.length === 0 ? (
                    <p className='font-medium text-3xl text-amber-300'>
                        {data.search.notFound}
                    </p>
                ) : (
                    <div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                            {filteredProducts.map((product) => (
                                <div
                                    key={`${product.categoryId}-${product.id}`}
                                    onClick={() => cardaOtish(product)}
                                    className='bg-white cursor-pointer pb-3'
                                >
                                    <img
                                        src={product.image}
                                        className='w-full h-45 object-cover'
                                    />
                                    <div className='cursor-pointer'>
                                        <h2 className='text-base px-2 pt-2 line-clamp-1 overflow-hidden text-center'>
                                            {product.name}
                                        </h2>
                                        <h1 className='font-medium text-xl mx-auto text-center pb-2'>
                                            {data.CategoryProducts.sena}
                                        </h1>
                                    </div>
                                    <div className='flex items-center gap-4 text-center justify-center mx-auto'>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                cardaOtish(product);
                                            }}
                                            className='py-2 px-3 bg-amber-300 hover:bg-amber-200 rounded text-[12px]'
                                        >
                                            {data.modals.podrobne}
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                addToCart(product);
                                            }}
                                        >
                                            <img
                                                src={
                                                    allImages.headerImages
                                                        .basketImg
                                                }
                                                className='h-6 w-6 sm:h-7 sm:w-7'
                                            />
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                const slug =
                                                    cardniOlish(product);
                                                toggleLike({
                                                    ...product,
                                                    categorySlug: slug,
                                                });
                                            }}
                                        >
                                            <img
                                                src={
                                                    allImages.headerImages
                                                        .heartImg
                                                }
                                                className='h-6 w-6 sm:h-7 sm:w-7'
                                            />
                                        </button>
                                    </div>
                                    <PoluchitButton
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setModalOpen(true);
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                        {modalOpen && (
                            <PoluchitButtonModal
                                onClose={() => setModalOpen(false)}
                            />
                        )}
                        <div className='my-5 sm:my-10'>
                            <h1 className='font-medium text-3xl'>
                                {data.search.swiperTitle}
                            </h1>
                            <Swiper
                                keyboard={true}
                                breakpoints={{
                                    300: {
                                        slidesPerView: 2,
                                        spaceBetween: 5,
                                    },
                                    540: {
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                    },
                                    768: {
                                        slidesPerView: 4,
                                        spaceBetween: 10,
                                    },
                                    1024: {
                                        slidesPerView: 5,
                                        spaceBetween: 10,
                                    },
                                }}
                                modules={[Mousewheel, Keyboard]}
                                className='mySwiper'
                            >
                                {filteredProducts.map((item) => (
                                    <SwiperSlide
                                        key={`${item.categoryId}-${item.id}`}
                                    >
                                        <div
                                            onClick={() => cardaOtish(item)}
                                            className='my-5'
                                        >
                                            <img
                                                src={item.image}
                                                className='w-full h-30 object-cover rounded'
                                            />
                                            <div className='pr-2'>
                                                <h1 className='line-clamp-2 sm:line-clamp-1 text-[12px] sm:text-base mt-3 '>
                                                    {item.name}
                                                </h1>
                                                <button className='bg-amber-300 hover:bg-amber-300 transition duration-400 rounded text-sm py-2 px-5 mt-2 '>
                                                    {data.modals.podrobne}
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default SearchPage;
