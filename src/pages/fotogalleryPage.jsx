import { useState } from "react";
import { useLanguage } from "../context/languageContext";
import Breadcrumb from "../components/breadcrum/breadcrum";

const FotogalleryPage = () => {
    const { data } = useLanguage();
    const [activeButton, setActiveButton] = useState("avtomobili");

    const [tanlanganRasm, setTanlanganRasm] = useState(null);

    const gallery = data?.fotogalereyaPage;

    const images = gallery?.[activeButton] || [];

    const allImages = [
        ...(gallery?.avtomobili || []),
        ...(gallery?.proizvodstvo || []),
        ...(gallery?.oKompani || []),
        ...(gallery?.vistavki || []),
    ];
    return (
        <>
            <div className='mx-auto max-w-360 px-5 mb-10'>
                <Breadcrumb />
                <div className='flex justify-between items-center my-4 sm:my-7'>
                    <h1 className='font-medium text-xl sm:text-2xl md:text-3xl'>
                        {data.fotogalereyaPage.pageTitle}
                    </h1>
                    <a
                        href='video'
                        className='hidden lg:block border-2 border-amber-400 py-2 px-6 rounded hover:bg-amber-400 transition duration-300'
                    >
                        {data.fotogalereyaPage.button}
                    </a>
                </div>
                <div className='flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-5'>
                    <button
                        onClick={() => setActiveButton("avtomobili")}
                        className={`text-[12px] sm:text-base border border-gray-300 py-1 px-4 md:py-2 md:px-6 rounded transition duration-300 ${
                            activeButton === "avtomobili"
                                ? "bg-amber-400"
                                : "hover:bg-amber-400"
                        }`}
                    >
                        {data.fotogalereyaPage.button1}
                    </button>

                    <button
                        onClick={() => setActiveButton("proizvodstvo")}
                        className={`text-[12px] sm:text-base border border-gray-300 py-1 px-4 md:py-2 md:px-6 rounded transition duration-300 ${
                            activeButton === "proizvodstvo"
                                ? "bg-amber-400"
                                : "hover:bg-amber-400"
                        }`}
                    >
                        {data.fotogalereyaPage.button2}
                    </button>

                    <button
                        onClick={() => setActiveButton("oKompani")}
                        className={`text-[12px] sm:text-base border border-gray-300 py-1 px-4 md:py-2 md:px-6 rounded transition duration-300 ${
                            activeButton === "oKompani"
                                ? "bg-amber-400"
                                : "hover:bg-amber-400"
                        }`}
                    >
                        {data.fotogalereyaPage.button3}
                    </button>

                    <button
                        onClick={() => setActiveButton("vistavki")}
                        className={`text-[12px] sm:text-base border border-gray-300 py-1 px-4 md:py-2 md:px-6 rounded transition duration-300 ${
                            activeButton === "vistavki"
                                ? "bg-amber-400"
                                : "hover:bg-amber-400"
                        }`}
                    >
                        {data.fotogalereyaPage.button4}
                    </button>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 sm:mt-8'>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            onClick={() => {
                                const globalIndex = allImages.indexOf(image);
                                setTanlanganRasm(globalIndex);
                            }}
                            className='w-full h-35 sm:h-45 object-cover cursor-pointer'
                        />
                    ))}
                </div>
                {/* ////////////////////////////////////////////// */}
                {tanlanganRasm !== null && (
                    <div
                        className='fixed inset-0 z-999 bg-black/80 flex items-center justify-center'
                        onClick={() => setTanlanganRasm(null)}
                    >
                        <div className='absolute top-5 left-5 text-white text-xl'>
                            {tanlanganRasm + 1} / {allImages.length}
                        </div>
                        <button
                            onClick={() => setTanlanganRasm(null)}
                            className='absolute top-3 right-5 text-white text-5xl z-20'
                        >
                            ×
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setTanlanganRasm((prev) =>
                                    prev === 0
                                        ? allImages.length - 1
                                        : prev - 1,
                                );
                            }}
                            className='absolute left-3 sm:left-10 top-[50%] -translate-y-1/2 text-white text-6xl z-20'
                        >
                            ‹
                        </button>
                        <img
                            src={allImages[tanlanganRasm]}
                            onClick={(e) => e.stopPropagation()}
                            className='max-w-80 max-h-50 sm:max-w-130 sm:max-h-80 md:max-w-150 md:max-h-100 lg:max-w-180 lg:max-h-120 object-contain'
                        />
                        <button
                            onClick={(e) => {
                                e.stopPropagation();

                                setTanlanganRasm((prev) =>
                                    prev === allImages.length - 1
                                        ? 0
                                        : prev + 1,
                                );
                            }}
                            className='absolute right-3 sm:right-10 top-[50%] -translate-y-1/2 text-white text-6xl z-20'
                        >
                            ›
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};
export default FotogalleryPage;
