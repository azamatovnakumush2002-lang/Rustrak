import { useState } from "react";
import { useLanguage } from "../context/languageContext";
import Breadcrumb from "../components/breadcrum/breadcrum";
const OtzivPage = () => {
    const { data } = useLanguage();
    const [tanlanganRasm, setTanlanganRasm] = useState(null);
    return (
        <div className='mx-auto max-w-360 px-5'>
            <Breadcrumb />
            <div>
                <h1 className='font-medium text-2xl sm:text-3xl my-5 sm:my-7'>
                    {data.otzivPage.pageTitle}
                </h1>
                {/* ////////////////////////////////////// */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5 mt-5 mb-10 sm:mt-8'>
                    {data.otzivPage.images.map((item, i) => (
                        <div
                            key={i}
                            className='group'
                            onClick={() => setTanlanganRasm(i)}
                        >
                            <img
                                src={item}
                                className='w-full h-auto object-cover cursor-pointer group-hover:brightness-50 transition duration-300'
                            />
                        </div>
                    ))}
                    {tanlanganRasm !== null && (
                        <div className='fixed inset-0 z-50 bg-black/90 flex items-center justify-center'>
                            <div className='absolute top-5 left-5 text-white text-lg'>
                                {tanlanganRasm + 1} /{" "}
                                {data.otzivPage.images.length}
                            </div>
                            <button
                                onClick={() => setTanlanganRasm(null)}
                                className='absolute top-4 right-6 text-white text-4xl'
                            >
                                ×
                            </button>
                            <button
                                onClick={() =>
                                    setTanlanganRasm(
                                        tanlanganRasm === 0
                                            ? data.otzivPage.images.length - 1
                                            : tanlanganRasm - 1,
                                    )
                                }
                                className='absolute left-5 sm:left-10 text-white text-5xl'
                            >
                                ‹
                            </button>
                            <img
                                src={data.otzivPage.images[tanlanganRasm]}
                                className='max-w-60 max-h-80 sm:max-h-100 sm:max-w-70 md:max-h-120 md:max-w-90 object-contain'
                            />
                            <button
                                onClick={() =>
                                    setTanlanganRasm(
                                        tanlanganRasm ===
                                            data.otzivPage.images.length - 1
                                            ? 0
                                            : tanlanganRasm + 1,
                                    )
                                }
                                className='absolute right-5 sm:right-10 text-white text-5xl'
                            >
                                ›
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default OtzivPage;
