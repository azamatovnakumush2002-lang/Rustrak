import Breadcrumb from "../components/breadcrum/breadcrum";
import { useLanguage } from "../context/languageContext";
import { useLike } from "../context/likeContext";
import { useNavigate } from "react-router-dom";
import allImages from "../assets/icons/icons";
import { useState } from "react";

const LikesPage = () => {
    const { data } = useLanguage();
    const { likedProducts, toggleLike } = useLike();
    const navigate = useNavigate();
    const [status, setStatus] = useState("all");
    return (
        <div>
            <div className='bg-[#f9f9f9]'>
                <div className='mx-auto max-w-360 p-5'>
                    <Breadcrumb />
                    <div className='flex gap-5 items-center'>
                        <h1 className='text-3xl sm:text-4xl font-medium my-5'>
                            {data.like.pageTitle}
                        </h1>
                        <span className='text-gray-400 my-5'>
                            {likedProducts.length}{" "}
                            <span>{data.like.product}</span>
                        </span>
                    </div>
                    {likedProducts.length === 0 || status === "notAvailable" ? (
                        <div className='bg-white p-4 sm:p-8 rounded shadow-sm mb-5'>
                            <p className='text-base sm:text-[20px] mb-2'>
                                {data.like.text}
                            </p>
                            <p className='text-base sm:text-[20px] mb-6'>
                                {data.basket.text2}
                            </p>
                            <div className='flex flex-wrap gap-4'>
                                <a
                                    href='/'
                                    className='border-2 border-amber-300 px-4 sm:px-8 py-2 rounded hover:bg-amber-400 transition duration-300 text-sm sm:text-base'
                                >
                                    {data.basket.button1}
                                </a>
                                <a
                                    href='/katalog'
                                    className='border-2 border-amber-300 px-4 sm:px-8 py-2 rounded bg-amber-400 hover:bg-white transition duration-300 text-sm sm:text-base'
                                >
                                    {data.basket.button2}
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className='flex items-center gap-6 mb-5'>
                                <label className='flex items-center gap-2 cursor-pointer'>
                                    <input
                                        type='radio'
                                        name='status'
                                        value='all'
                                        checked={status === "all"}
                                        onChange={(e) =>
                                            setStatus(e.target.value)
                                        }
                                        className='w-4 h-4 accent-black'
                                    />
                                    <span>{data.like.all}</span>
                                </label>

                                <label className='flex items-center gap-2 cursor-pointer'>
                                    <input
                                        type='radio'
                                        name='status'
                                        value='available'
                                        checked={status === "available"}
                                        onChange={(e) =>
                                            setStatus(e.target.value)
                                        }
                                        className='w-4 h-4 accent-black'
                                    />
                                    <span>{data.like.nalichi}</span>
                                </label>

                                <label className='flex items-center gap-2 cursor-pointer'>
                                    <input
                                        type='radio'
                                        name='status'
                                        value='notAvailable'
                                        checked={status === "notAvailable"}
                                        onChange={(e) =>
                                            setStatus(e.target.value)
                                        }
                                        className='w-4 h-4 accent-black'
                                    />
                                    <span>{data.like.netNalichi}</span>
                                </label>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                                {likedProducts.map((item) => (
                                    <div
                                        key={`${item.categoryId}-${item.id}`}
                                        className='bg-white pb-4'
                                    >
                                        <div
                                            onClick={() =>
                                                navigate(
                                                    `/category/${item.categorySlug}/${item.id}`,
                                                )
                                            }
                                            className='cursor-pointer'
                                        >
                                            <img
                                                src={item.image}
                                                className='w-full h-45 object-cover'
                                            />
                                        </div>

                                        <h2
                                            onClick={() =>
                                                navigate(
                                                    `/category/${item.categorySlug}/${item.id}`,
                                                )
                                            }
                                            className='text-base px-2 pt-2 line-clamp-1 overflow-hidden text-center cursor-pointer'
                                        >
                                            {item.name}
                                        </h2>

                                        <h1 className='font-medium text-xl text-center pb-2'>
                                            {data.CategoryProducts.sena}
                                        </h1>

                                        <div className='flex items-center gap-2 lg:gap-4 justify-center mb-3'>
                                            <button>
                                                <img
                                                    src={
                                                        allImages.headerImages
                                                            .basketImg
                                                    }
                                                    className='h-6 w-6 sm:h-7 sm:w-7'
                                                />
                                            </button>
                                            <button
                                                onClick={() => toggleLike(item)}
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
                                        <div className='flex items-center gap-2 lg:gap-4 justify-center'>
                                            <button
                                                onClick={() =>
                                                    navigate(
                                                        `/category/${item.categorySlug}/${item.id}`,
                                                    )
                                                }
                                                className='py-2 px-3 bg-amber-300 hover:bg-amber-200 rounded text-[12px]'
                                            >
                                                {data.modals.podrobne}
                                            </button>
                                            <button className='text-gray-400 text-[12px] '>
                                                {data.modals.poluchitKP}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LikesPage;
