import { useLanguage } from "../../context/languageContext";
import allImages from "../../assets/icons/icons";
import { useParams, useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/breadcrum/breadcrum";
import { PoluchitButton } from "../../components/buttons/buttons";
import { useState } from "react";
import { PoluchitButtonModal } from "../../components/modals/modals";
import { useCart } from "../../context/cardContext";
import { useLike } from "../../context/likeContext";

const CategoryPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [viewMode, setViewMode] = useState("grid");
    const [filterModal, setFilterModal] = useState(false);
    const { slug } = useParams();
    const { data } = useLanguage();
    const { addToCart } = useCart();
    const { toggleLike } = useLike();
    const navigate = useNavigate();
    const [tanlanganBrand, setTanlanganBrand] = useState([]);
    const [appliedBrands, setAppliedBrands] = useState([]);
    const categories = data.CategoryProducts.categoryCards;

    const allProducts = Object.values(data.CategoryProducts.Products).flat();

    const category = categories.find((item) => item.slug === slug);
    const products = allProducts.filter((item) => {
        if (item.categoryId !== category?.id) {
            return false;
        }
        if (appliedBrands.length === 0) {
            return true;
        }
        return appliedBrands.includes(item.brand);
    });

    return (
        <div className='bg-gray-100'>
            <div className='mx-auto max-w-360 px-5 py-5'>
                <Breadcrumb />
                <div className='flex  py-5'>
                    <div className='flex gap-5 items-center'>
                        <h1 className='text-base sm:text-xl md:text-2xl lg:text-3xl font-medium'>
                            {category?.name}
                        </h1>
                        <span className='text-gray-400 flex gap-2 text-sm sm:text-base'>
                            {products.length}
                            <span>{data.CategoryProducts.Marka.product}</span>
                        </span>
                    </div>
                </div>
                {/* input grid button list button */}
                <div className='flex items-center justify-end mb-5'>
                    <button
                        onClick={() => setFilterModal(true)}
                        className='block lg:hidden w-6 h-6  bg-amber-400 rounded'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                        >
                            <path d='M0 0h24v24H0z' fill='none' />
                            <path
                                fill='#000'
                                d='M13.878 8.75H4a.75.75 0 0 1 0-1.5h9.878a2.251 2.251 0 0 1 4.244 0H20a.75.75 0 0 1 0 1.5h-1.878a2.251 2.251 0 0 1-4.244 0m6.122 8a.75.75 0 0 0 0-1.5h-9.878a2.251 2.251 0 0 0-4.244 0H4a.75.75 0 0 0 0 1.5h1.878a2.25 2.25 0 0 0 4.244 0z'
                            />
                        </svg>
                    </button>
                    <div className='flex items-center justify-end gap-2'>
                        <form action='#'>
                            <label
                                htmlFor=''
                                className='text-gray-400 text-sm '
                            >
                                {data.CategoryProducts.Marka.sort}:
                            </label>
                            <input
                                type='text'
                                placeholder='По бренду'
                                className='bg-white rounded p-2 text-[12px] lg:text-base'
                            />
                        </form>
                        <button
                            onClick={() => setViewMode("list")}
                            className={`w-8 h-8 rounded-full hidden md:block ${
                                viewMode === "list"
                                    ? "bg-[#FFC400]"
                                    : "bg-transparent"
                            }`}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                className='mx-auto'
                            >
                                <path d='M0 0h24v24H0z' fill='none' />
                                <path
                                    fill='none'
                                    stroke='#808080'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2.5'
                                    d='M3 6h18M3 12h18M3 18h18'
                                />
                            </svg>
                        </button>
                        <button
                            onClick={() => setViewMode("grid")}
                            className={`w-8 h-8 rounded-full hidden md:block ${
                                viewMode === "grid"
                                    ? "bg-[#FFC400]"
                                    : "bg-transparent"
                            }`}
                        >
                            <svg
                                className='mx-auto items-center'
                                xmlns='http://www.w3.org/2000/svg'
                                width='20'
                                height='20'
                                viewBox='0 0 12 12'
                            >
                                <path d='M0 0h12v12H0z' fill='none' />
                                <path
                                    fill='#000'
                                    d='M6 6h5V1H6Zm-6 6h5V7H0Zm0-6h5V1H0Zm6 6h5V7H6Zm0 0'
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* filterni modali */}
                {filterModal && (
                    <div className='absolute top-0 left-0 inset-0 z-50 bg-black/40 flex items-start lg:hidden'>
                        <div className='bg-white w-full h-auto overflow-y-auto'>
                            <div className='bg-black text-white px-4 py-3 flex items-center justify-between sticky top-0 z-10'>
                                <p className='font-medium'>Фильтры</p>

                                <button
                                    onClick={() => setFilterModal(false)}
                                    className='text-white text-2xl leading-none'
                                >
                                    ×
                                </button>
                            </div>

                            <div className='p-5'>
                                <button className='text-gray-400 text-sm mb-4'>
                                    Сбросить
                                </button>

                                <p className='font-medium text-[18px]'>
                                    {data.CategoryProducts.Marka.marka}
                                </p>

                                <div className='flex items-center my-3'>
                                    <input
                                        type='text'
                                        placeholder={
                                            data.CategoryProducts.Marka
                                                .placeholder
                                        }
                                        className='border border-gray-400 p-2 rounded w-full'
                                    />

                                    <img
                                        src={allImages.headerImages.searchImg}
                                        className='-ml-8'
                                    />
                                </div>

                                <div>
                                    {data.CategoryProducts.Marka.type.map(
                                        (index, i) => (
                                            <div
                                                key={i}
                                                className='flex items-center gap-2 mb-3'
                                            >
                                                <input
                                                    type='checkbox'
                                                    className='w-5 h-5 accent-black'
                                                />

                                                <span>{index.name}</span>
                                            </div>
                                        ),
                                    )}
                                </div>

                                <p className='font-medium text-[18px] my-5'>
                                    {data.CategoryProducts.Marka.generalMassa}
                                </p>

                                <div>
                                    <div className='flex items-center gap-2 mb-3'>
                                        <input
                                            type='checkbox'
                                            className='w-5 h-5 accent-black'
                                        />

                                        <span>
                                            {data.CategoryProducts.Marka.before}{" "}
                                            12
                                        </span>
                                    </div>

                                    <div className='flex items-center gap-2 mb-3'>
                                        <input
                                            type='checkbox'
                                            className='w-5 h-5 accent-black'
                                        />

                                        <span>
                                            {data.CategoryProducts.Marka.before}{" "}
                                            20
                                        </span>
                                    </div>

                                    <div className='flex items-center gap-2 mb-3'>
                                        <input
                                            type='checkbox'
                                            className='w-5 h-5 accent-black'
                                        />

                                        <span>
                                            {data.CategoryProducts.Marka.before}{" "}
                                            5,5
                                        </span>
                                    </div>

                                    <div className='flex items-center gap-2 mb-3'>
                                        <input
                                            type='checkbox'
                                            className='w-5 h-5 accent-black'
                                        />

                                        <span>
                                            {data.CategoryProducts.Marka.smthng}{" "}
                                            20
                                        </span>
                                    </div>

                                    <div>
                                        <p className='font-medium text-[18px] my-5'>
                                            {data.CategoryProducts.Marka.dlina}
                                        </p>

                                        {data.CategoryProducts.Marka.number.map(
                                            (index, i) => (
                                                <div
                                                    key={i}
                                                    className='flex items-center gap-2 mb-3'
                                                >
                                                    <input
                                                        type='checkbox'
                                                        className='w-5 h-5 accent-black'
                                                    />

                                                    <span>{index.num}</span>
                                                </div>
                                            ),
                                        )}
                                    </div>

                                    <p className='font-medium text-[18px] my-5'>
                                        {data.CategoryProducts.Marka.tonna}
                                    </p>
                                </div>

                                <button
                                    onClick={() => setFilterModal(false)}
                                    className='w-full border border-amber-400 hover:bg-white bg-amber-400 rounded py-3 hover:text-amber-400 transition duration-300'
                                >
                                    {data.CategoryProducts.Marka.button}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {/* gridlaaaaaaaaaaaaaaaaaaaa */}
                <div className='grid grid-cols-3 lg:grid-cols-4 gap-5'>
                    {/* marka side */}
                    <div className='p-5 top-0 bg-white self-start max-h-250 overflow-y-auto sticky col-span-1 hidden lg:block'>
                        <p className='font-medium text-[18px] '>
                            {data.CategoryProducts.Marka.marka}
                        </p>
                        <div className='flex items-center my-3'>
                            <input
                                type='text'
                                placeholder={
                                    data.CategoryProducts.Marka.placeholder
                                }
                                className='border border-gray-400 p-2 rounded w-70'
                            />
                            <img
                                src={allImages.headerImages.searchImg}
                                className='-ml-8'
                            />
                        </div>
                        {/* marka */}
                        <div>
                            {data.CategoryProducts.Marka.type.map((item) => (
                                <label
                                    key={item.name}
                                    className='flex items-center gap-2 mb-2'
                                >
                                    <input
                                        className='w-6 h-6 hover:border-b-black accent-black '
                                        type='checkbox'
                                        value={item.name}
                                        checked={tanlanganBrand.includes(
                                            item.name,
                                        )}
                                        onChange={(e) => {
                                            const brand = e.target.value;

                                            setTanlanganBrand((prev) =>
                                                prev.includes(brand)
                                                    ? prev.filter(
                                                          (item) =>
                                                              item !== brand,
                                                      )
                                                    : [...prev, brand],
                                            );
                                        }}
                                    />

                                    <span>{item.name}</span>
                                </label>
                            ))}
                        </div>
                        {/* general massa */}
                        <p className='font-medium text-[18px] my-5'>
                            {data.CategoryProducts.Marka.generalMassa}
                        </p>
                        <div>
                            <div className='flex items-center gap-2 mb-3'>
                                <input
                                    type='checkbox'
                                    className='w-6 h-6 hover:border-b-black accent-black '
                                />
                                <span>
                                    {data.CategoryProducts.Marka.before} 12
                                </span>
                            </div>
                            <div className='flex items-center gap-2 mb-3'>
                                <input
                                    type='checkbox'
                                    className='w-6 h-6 hover:border-b-black accent-black '
                                />
                                <span>
                                    {data.CategoryProducts.Marka.before} 20
                                </span>
                            </div>
                            <div className='flex items-center gap-2 mb-3'>
                                <input
                                    type='checkbox'
                                    className='w-6 h-6 hover:border-b-black accent-black '
                                />
                                <span>
                                    {data.CategoryProducts.Marka.before} 5,5
                                </span>
                            </div>
                            <div className='flex items-center gap-2 mb-3'>
                                <input
                                    type='checkbox'
                                    className='w-6 h-6 hover:border-b-black accent-black '
                                />
                                <span>
                                    {data.CategoryProducts.Marka.smthng} 20
                                </span>
                            </div>
                            {/* ////////////////////////////////////////////// */}
                            <div>
                                <p className='font-medium text-[18px] my-5'>
                                    {data.CategoryProducts.Marka.dlina}
                                </p>
                                {data.CategoryProducts.Marka.number.map(
                                    (index, i) => (
                                        <div
                                            key={i}
                                            className='flex items-center gap-2 mb-3'
                                        >
                                            <input
                                                type='checkbox'
                                                className='w-6 h-6 hover:border-b-black accent-black '
                                            />
                                            <span>{index.num}</span>
                                        </div>
                                    ),
                                )}
                            </div>
                            <p className='font-medium text-[18px] my-5'>
                                {data.CategoryProducts.Marka.tonna}
                            </p>
                        </div>
                        <button
                            onClick={() => setAppliedBrands(tanlanganBrand)}
                            className='w-full border border-amber-400 hover:bg-white bg-amber-400 rounded py-2 hover:text-amber-400 transition duration-300'
                        >
                            {data.CategoryProducts.Marka.button}
                        </button>
                    </div>

                    <div className='col-span-3'>
                        <div
                            className={
                                viewMode === "grid"
                                    ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
                                    : "flex flex-col gap-5"
                            }
                        >
                            {products.map((item, id) => (
                                <div
                                    key={id}
                                    className={
                                        viewMode === "grid"
                                            ? "bg-white pb-3"
                                            : "bg-white flex"
                                    }
                                >
                                    <div
                                        onClick={() =>
                                            navigate(
                                                `/category/${slug}/${item.id}`,
                                            )
                                        }
                                        className={
                                            viewMode === "grid"
                                                ? "cursor-pointer"
                                                : "cursor-pointer w-62.5 shrink-0"
                                        }
                                    >
                                        <img
                                            src={item.image}
                                            className={
                                                viewMode === "grid"
                                                    ? "w-full h-45 object-cover"
                                                    : "w-full h-full min-h-47.5 object-cover"
                                            }
                                        />
                                    </div>

                                    {/* GRID BO`LG`ONDO  */}
                                    {viewMode === "grid" && (
                                        <>
                                            <div
                                                onClick={() =>
                                                    navigate(
                                                        `/category/${slug}/${item.id}`,
                                                    )
                                                }
                                                className='cursor-pointer'
                                            >
                                                <h2 className='text-base px-2 pt-2 line-clamp-1 overflow-hidden text-center'>
                                                    {item.name}
                                                </h2>
                                                <h1 className='font-medium text-xl mx-auto text-center pb-2'>
                                                    {data.CategoryProducts.sena}
                                                </h1>
                                            </div>
                                            <div className='flex items-center gap-4 text-center justify-center mx-auto'>
                                                <button
                                                    onClick={() =>
                                                        navigate(
                                                            `/category/${slug}/${item.id}`,
                                                        )
                                                    }
                                                    className='py-2 px-3 bg-amber-300 hover:bg-amber-200 rounded text-[12px]'
                                                >
                                                    {data.modals.podrobne}
                                                </button>
                                                {/* basketbutton */}
                                                <button
                                                    onClick={() =>
                                                        addToCart(item)
                                                    }
                                                >
                                                    <img
                                                        src={
                                                            allImages
                                                                .headerImages
                                                                .basketImg
                                                        }
                                                        className='h-6 w-6 sm:h-7 sm:w-7'
                                                    />
                                                </button>
                                                {/* likebutton */}
                                                <button
                                                    onClick={() =>
                                                        toggleLike({
                                                            ...item,
                                                            categorySlug: slug,
                                                        })
                                                    }
                                                >
                                                    <img
                                                        src={
                                                            allImages
                                                                .headerImages
                                                                .heartImg
                                                        }
                                                        className='h-6 w-6 sm:h-7 sm:w-7'
                                                    />
                                                </button>
                                            </div>
                                            <PoluchitButton
                                                onClick={() =>
                                                    setModalOpen(true)
                                                }
                                            />
                                        </>
                                    )}
                                    {/* LIST BO`LG`ONDO */}
                                    {viewMode === "list" && (
                                        <>
                                            <div className='flex-1 p-5'>
                                                <h2
                                                    onClick={() =>
                                                        navigate(
                                                            `/category/${slug}/${item.id}`,
                                                        )
                                                    }
                                                    className='text-base cursor-pointer'
                                                >
                                                    {item.name}
                                                </h2>
                                                <div className='mt-5 space-y-3'>
                                                    {Object.values(item)
                                                        .filter(
                                                            (value) =>
                                                                value &&
                                                                typeof value ===
                                                                    "object" &&
                                                                value.title &&
                                                                value.value,
                                                        )
                                                        .map((item, i) => (
                                                            <div
                                                                key={i}
                                                                className='flex items-center text-sm'
                                                            >
                                                                <span className='text-gray-400'>
                                                                    {item.title}
                                                                </span>

                                                                <span className='flex-1 border-b border-dashed border-gray-400'></span>

                                                                <span>
                                                                    {item.value}
                                                                </span>
                                                            </div>
                                                        ))}
                                                </div>
                                            </div>

                                            <div className='pr-3 shrink-0 flex flex-col items-center justify-center'>
                                                <h1 className='font-medium text-xl text-center'>
                                                    {data.CategoryProducts.sena}
                                                </h1>

                                                <div className='flex gap-1 items-center'>
                                                    <button
                                                        onClick={() =>
                                                            navigate(
                                                                `/category/${slug}/${item.id}`,
                                                            )
                                                        }
                                                        className='py-3 px-5 bg-amber-300 hover:bg-amber-200 rounded mt-4'
                                                    >
                                                        {data.modals.podrobne}
                                                    </button>
                                                    {/* <div
                                                        className='relative cursor-pointer'
                                                        onClick={() =>
                                                            navigate("/basket")
                                                        }
                                                    >
                                                        <button>
                                                            <img
                                                                src={
                                                                    allImages
                                                                        .headerImages
                                                                        .basketImg
                                                                }
                                                                className='h-6 w-6 sm:h-7 sm:w-7'
                                                            />
                                                        </button>

                                                        {cart.length > 0 && (
                                                            <span className='absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-medium'>
                                                                {cart.length}
                                                            </span>
                                                        )}
                                                    </div> */}
                                                </div>
                                                <div className='flex gap-1 items-center'>
                                                    <PoluchitButton
                                                        onClick={() =>
                                                            setModalOpen(true)
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {modalOpen && (
                                        <PoluchitButtonModal
                                            onClose={() => setModalOpen(false)}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                        {/* ///////textssssssssssssssssssssssssss */}
                        <div className='my-10'>
                            <p className='text-base sm:text-[18px] mb-5'>
                                {data.CategoryProducts.texts.text1}
                            </p>
                            <h1 className='font-bold text-[20px] mb-3'>
                                {data.CategoryProducts.texts.assortiment}
                            </h1>
                            <p className='text-base sm:text-[18px]'>
                                {data.CategoryProducts.texts.text2}
                            </p>
                            <p className='text-base sm:text-[18px] mb-2'>
                                {data.CategoryProducts.texts.marki}
                            </p>
                            <div>
                                {data.CategoryProducts.Marka.type.map(
                                    (index, i) => (
                                        <div
                                            key={i}
                                            className='flex items-center gap-4 mb-3'
                                        >
                                            <span className='text-amber-400'>
                                                ◆
                                            </span>
                                            <span>{index.name}</span>
                                        </div>
                                    ),
                                )}
                            </div>
                            <p className='text-base sm:text-[18px] mb-5'>
                                {data.CategoryProducts.texts.text3}
                            </p>
                            <h1 className='font-bold text-[20px] mb-3'>
                                {data.CategoryProducts.texts.title2}
                            </h1>
                            <div>
                                {data.CategoryProducts.texts.text.map(
                                    (item, i) => (
                                        <div
                                            key={i}
                                            className='flex items-start gap-4 mb-3'
                                        >
                                            <span className='text-amber-400'>
                                                ◆
                                            </span>
                                            <span className='text-base sm:text-[18px]'>
                                                {item}
                                            </span>
                                        </div>
                                    ),
                                )}
                            </div>
                            <h1 className='font-bold text-[20px] mb-3'>
                                {data.CategoryProducts.texts.sferi}
                            </h1>
                            <p className='text-base sm:text-[18px] mb-5'>
                                {data.CategoryProducts.texts.sferiText}
                            </p>
                            <h1 className='font-bold text-[20px] mb-3'>
                                {data.CategoryProducts.texts.rustrak}
                            </h1>
                            <div>
                                {data.CategoryProducts.texts.rustraks.map(
                                    (item, i) => (
                                        <div
                                            key={i}
                                            className='flex items-start gap-4 mb-3'
                                        >
                                            <span className='text-amber-400'>
                                                ◆
                                            </span>
                                            <div>
                                                <p className='text-base sm:text-[18px]'>
                                                    {item.title}
                                                </p>
                                                <p className='text-base sm:text-[18px]'>
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                    ),
                                )}
                            </div>
                            <h1 className='font-bold text-[20px] mb-3'>
                                {data.CategoryProducts.texts.texnika}
                            </h1>
                            <p className='text-base sm:text-[18px] mb-5'>
                                {data.CategoryProducts.texts.text4}
                            </p>
                        </div>
                        {/* ////////////////////////////////////////////////// */}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CategoryPage;
