import { useState } from "react";
import { useLanguage } from "../context/languageContext";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import Breadcrumb from "../components/breadcrum/breadcrum";
const RepairPage = () => {
    const { data } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className='mx-auto max-w-360 px-5 mb-10'>
                <Breadcrumb />
                <h1 className='font-medium text-[20px] md:text-[28px] lg:text-[32px] my-4 sm:my-7'>
                    {data.repairPage.pageTitle}
                </h1>
                <p className='font-normal text-[14px] sm:text-[18px]'>
                    {data.repairPage.pageText}
                </p>
                <div className='my-5 mx-auto items-center text-center'>
                    <div className='mx-auto items-center justify-center flex flex-col lg:flex-row gap-5'>
                        {data.repairPage.mainImages.map((item, i) => (
                            <img
                                key={i}
                                src={item}
                                className='w-full max-w-full sm:max-w-120 h-auto rounded object-contain'
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className='border border-amber-300 bg-amber-300 rounded my-6 px-7 py-2 font-semibold text-[12px] sm:text-base hover:text-amber-300 hover:bg-white transition duration-300'
                    >
                        {data.repairPage.button}
                    </button>
                    {/* modallllllllllllllllllllllllllllllll///////////// */}
                    {isModalOpen && (
                        <div
                            className='fixed inset-0 z-999 flex items-center justify-center bg-black/60 px-4'
                            onClick={() => setIsModalOpen(false)}
                        >
                            <div
                                className='relative w-full max-w-120 rounded-xl bg-white p-7'
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className='absolute right-4 top-3 text-[28px] font-bold text-gray-400 hover:text-black'
                                >
                                    ×
                                </button>
                                <h2 className='text-center text-[20px] font-bold'>
                                    {data.repairPage.button}
                                </h2>
                                <p className='mt-3 text-base leading-7'>
                                    {data.repairPage.modalText}
                                </p>
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                    }}
                                    className='mt-6 text-left'
                                >
                                    <label className='block text-[15px]'>
                                        Ваше имя
                                        <span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='Иван'
                                        required
                                        className='mt-2 py-2 w-full rounded border border-gray-300 px-3 text-base'
                                    />
                                    <label className='mt-5 block text-[15px]'>
                                        Телефон
                                        <span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        type='tel'
                                        placeholder='+7 (___) ___-__-__'
                                        required
                                        className='mt-2 py-2 w-full rounded border border-gray-300 px-3 text-base'
                                    />

                                    <button
                                        type='submit'
                                        className='mt-4 py-2 w-full border border-amber-300 bg-amber-300 rounded-md font-semibold text-base hover:text-amber-300 hover:bg-white transition duration-300'
                                    >
                                        {data.repairPage.modalButton}
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
                {/* ///////////////////////////SECTIONNNNNNNNNNNNNNN/////////////////////// */}
                <div>
                    <div className='my-3 sm:my-8'>
                        <h1 className='font-bold text-[22px] mb-4'>
                            {data.repairPage.ourService.serviceTitle}
                        </h1>
                        <p className='font-normal text-[14px] sm:text-[18px]'>
                            {data.repairPage.ourService.serviceText}
                        </p>
                        <span className='font-bold text-[18px]'>
                            {data.repairPage.ourService.important}
                        </span>
                        <span className='font-normal text-[14px] sm:text-[18px]'>
                            {data.repairPage.ourService.importantText}
                        </span>
                    </div>
                    {/* ///////////////////SCROLL RASMLAAAAAAAAAAAAAAAAAAA/////////////// */}
                    <div className='mx-auto justify-center flex flex-col lg:flex-row items-center gap-5'>
                        <div className='max-w-150 h-50 sm:h-80 md:h-100 overflow-hidden rounded-md'>
                            <ImgComparisonSlider className='w-full h-full [--divider-width:6px]  [--divider-color:#FFC400] [--default-handle-width:42px] [--default-handle-color:#FFC400] [--default-handle-opacity:1][--default-handle-shadow:0_1px_5px_rgba(0,0,0,0.3)]'>
                                <div
                                    slot='handle'
                                    className='w-10 h-10 border-3  rounded-full bg-primary flex items-center justify-center text-white text-[22px] font-bold'
                                >
                                    ↔
                                </div>
                                <img
                                    slot='first'
                                    src={
                                        data?.repairPage?.ourService?.beforeimg1
                                    }
                                    alt='before'
                                    className='w-full h-full object-cover'
                                />
                                <img
                                    slot='second'
                                    src={
                                        data?.repairPage?.ourService?.afterimg1
                                    }
                                    alt='after'
                                    className='w-full h-full object-cover'
                                />
                            </ImgComparisonSlider>
                        </div>
                        <div className='max-w-80 h-50 sm:h-80 md:h-100 overflow-hidden rounded-md'>
                            <ImgComparisonSlider className='w-full h-full [--divider-width:6px] [--divider-color:#FFC400] [--default-handle-width:42px] [--default-handle-color:#FFC400] [--default-handle-opacity:1][--default-handle-shadow:0_1px_5px_rgba(0,0,0,0.3)]'>
                                <div
                                    slot='handle'
                                    className='w-10 h-10 border-3  rounded-full bg-primary flex items-center justify-center text-white text-[22px] font-bold'
                                >
                                    ↔
                                </div>
                                <img
                                    slot='first'
                                    src={
                                        data?.repairPage?.ourService?.beforeimg2
                                    }
                                    alt='before'
                                    className='w-full h-full object-cover'
                                />

                                <img
                                    slot='second'
                                    src={
                                        data?.repairPage?.ourService?.afterimg2
                                    }
                                    alt='after'
                                    className='w-full h-full object-cover'
                                />
                            </ImgComparisonSlider>
                        </div>
                    </div>
                    {/* ///////////////////SCROLL RASMLAAAAAAAAAAAAAAAAAAA/////////////// */}
                </div>
                <div className='my-8'>
                    <h1 className='font-bold text-[18px] sm:text-[22px] mb-2 sm:mb-4'>
                        {data.repairPage.advantages.advTitle}
                    </h1>
                    {data.repairPage.advantages.adv.map((item, i) => (
                        <div key={i} className='mb-2'>
                            <span className='text-amber-400'>◆</span>
                            <span className='text-[14px] sm:text-[18px] ml-3'>
                                {item}
                            </span>
                        </div>
                    ))}
                </div>
                {/* //////////////////////////////////////////////////////////////// */}
                <div>
                    <div className='grid grid-cols-3'>
                        {data.repairPage.advantages.images.map((item, i) => (
                            <img
                                key={i}
                                src={item}
                                className={`w-full h-auto object-cover ${i === 0 ? "col-span-3" : ""}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className='block mx-auto border border-amber-300 bg-amber-300 rounded my-6 px-7 py-2 font-semibold text-[12px] sm:text-base hover:text-amber-300 hover:bg-white transition duration-300
                        '
                    >
                        {data.repairPage.button}
                    </button>
                </div>
                {/* //////////////////////////////////////////////////// */}
                <div className='mb-10 sm:mb-20'>
                    <h1 className='font-bold text-[18px] sm:text-[22px] mb-2 sm:mb-4'>
                        {data.repairPage.advantages.qualityTitle}
                    </h1>
                    <p className='text-[14px] sm:text-[18px]'>
                        {data.repairPage.advantages.qualityText}
                    </p>
                </div>
            </div>
        </>
    );
};
export default RepairPage;
