import { useState } from "react";
import Breadcrumb from "../components/breadcrum/breadcrum";
import {
    OformitZakazModal,
    OstalisVopros,
    PoluchitButtonModal,
} from "../components/modals/modals";
import { useCart } from "../context/cardContext";
import { useLanguage } from "../context/languageContext";
import { Link } from "react-router-dom";

const BasketPage = () => {
    const { data } = useLanguage();
    const { cart, removeFromCart } = useCart();
    const [counts, setCounts] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const getCategorySlug = (categoryId) => {
        const category = data.CategoryProducts.categoryCards.find(
            (item) => item.id === categoryId,
        );

        return category?.path;
    };
    return (
        <div>
            <div className='bg-[#f9f9f9] min-h-screen'>
                <div className='mx-auto max-w-360 p-5'>
                    <Breadcrumb />
                    <h1 className='text-3xl sm:text-4xl font-medium my-5'>
                        {data.basket.pageTitle}
                    </h1>
                    {cart.length === 0 ? (
                        <div className='bg-white p-4 sm:p-8 rounded shadow-sm'>
                            <p className='text-base sm:text-[20px] mb-2'>
                                {data.basket.text1}
                            </p>
                            <p className='text-base sm:text-[20px] mb-6'>
                                {data.basket.text2}
                            </p>

                            <div className='flex flex-wrap gap-4'>
                                <a
                                    href='/'
                                    className='border-2 border-amber-300 px-4 sm:px-8 py-2 rounded hover:bg-amber-400 transition duration-300 text-[12px] sm:text-base'
                                >
                                    {data.basket.button1}
                                </a>

                                <a
                                    href='/katalog'
                                    className='border-2 border-amber-300 px-4 sm:px-8 py-2 rounded bg-amber-400 hover:bg-white transition duration-300 text-[12px] sm:text-base'
                                >
                                    {data.basket.button2}
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className='flex flex-col gap-4'>
                                {cart.map((product) => (
                                    <div
                                        key={`${product.categoryId}-${product.id}`}
                                        className='flex flex-col sm:flex-row items-start lg:items-center justify-between gap-3 sm:bg-white p-3'
                                    >
                                        <Link
                                            to={`/category/${getCategorySlug(product.categoryId)}/${product.id}`}
                                            className='block'
                                        >
                                            <img
                                                src={product.images?.[0]}
                                                alt={product.name}
                                                className='w-full h-auto sm:max-w-50 sm:max-h-35 lg:w-60 lg:h-40 object-cover cursor-pointer'
                                            />
                                        </Link>
                                        <div className='flex-1 sm:pt-3 sm:pr-3'>
                                            <h2 className='text-sm lg:text-[18px] sm:mb-3 sm:max-w-2xl'>
                                                {product.name}
                                            </h2>

                                            <div className='hidden lg:block max-w-2xl space-y-1.5'>
                                                <div className='flex items-baseline text-sm lg:text-base text-gray-400'>
                                                    <span className='shrink-0 pr-1'>
                                                        {product.marka.title}
                                                    </span>
                                                    <span className='grow mx-1 border-b border-dotted border-gray-300 -translate-y-1'></span>
                                                    <span className='shrink-0 pl-1 text-gray-400'>
                                                        {product.marka.value}
                                                    </span>
                                                </div>
                                                <div className='flex items-baseline text-sm sm:text-base text-gray-400'>
                                                    <span className='shrink-0 pr-1'>
                                                        {product.gabariti.title}
                                                    </span>
                                                    <span className='grow mx-1 border-b border-dotted border-gray-300 -translate-y-1'></span>
                                                    <span className='shrink-0 pl-1 text-gray-400'>
                                                        {product.gabariti.value}
                                                    </span>
                                                </div>
                                                <div className='flex items-baseline text-sm sm:text-base text-gray-400'>
                                                    <span className='shrink-0 pr-1'>
                                                        {product.kg.title}
                                                    </span>
                                                    <span className='grow mx-1 border-b border-dotted border-gray-300 -translate-y-1'></span>
                                                    <span className='shrink-0 pl-1 text-gray-400'>
                                                        {product.kg.value}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col max-[439px]:flex-row max-[439px]:flex-wrap min-[440px]:flex-row sm:flex-col gap-2 text-center mr-5'>
                                            <button
                                                onClick={() =>
                                                    setModalOpen(true)
                                                }
                                                className='bg-amber-300 hover:bg-amber-400 max-[439px]:w-full min-[440px]:px-3 sm:px-5 py-2 rounded flex items-center justify-center gap-2 transition duration-300 text-[12px] sm:text-base'
                                            >
                                                {data.modals.poluchitKP}
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className='h-4 w-4'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    stroke='currentColor'
                                                >
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        strokeWidth={2}
                                                        d='M19 14l-7 7m0 0l-7-7m7 7V3'
                                                    />
                                                </svg>
                                            </button>
                                            <div className='mx-auto w-22 mt-3 max-[439px]:mt-0 max-[439px]:w-auto flex items-center border border-gray-300 rounded bg-white'>
                                                <button
                                                    onClick={() => {
                                                        setCounts((prev) => ({
                                                            ...prev,
                                                            [product.id]:
                                                                Math.max(
                                                                    1,
                                                                    (prev[
                                                                        product
                                                                            .id
                                                                    ] || 1) - 1,
                                                                ),
                                                        }));
                                                    }}
                                                    className='px-2.5 py-1 text-gray-500 hover:bg-gray-100 border-r border-gray-300'
                                                >
                                                    -
                                                </button>

                                                <span className='px-3 py-1 text-sm font-medium border-r border-gray-200'>
                                                    {counts[product.id] || 1}
                                                </span>

                                                <button
                                                    onClick={() => {
                                                        setCounts((prev) => ({
                                                            ...prev,
                                                            [product.id]:
                                                                (prev[
                                                                    product.id
                                                                ] || 1) + 1,
                                                        }));
                                                    }}
                                                    className='px-2.5 py-1 text-gray-500 hover:bg-gray-100'
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                onClick={() =>
                                                    removeFromCart(product)
                                                }
                                                className='mx-auto max-[439px]:mt-0 flex items-center gap-1.5 text-gray-400  hover:text-amber-400 text-base transition duration-300 mt-3'
                                            >
                                                {data.modals.udalit}

                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className='h-5 w-5'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    stroke='currentColor'
                                                >
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        strokeWidth={1.5}
                                                        d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4v3M4 7h16'
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='my-10 md:flex justify-between items-center'>
                                <OformitZakazModal />
                                <OstalisVopros />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {modalOpen && (
                <PoluchitButtonModal onClose={() => setModalOpen(false)} />
            )}
        </div>
    );
};
export default BasketPage;
