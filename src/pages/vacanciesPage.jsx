import { useState } from "react";
import { useLanguage } from "../context/languageContext";
import Breadcrumb from "../components/breadcrum/breadcrum";

const VacanciesPage = () => {
    const { data } = useLanguage();
    const [modalOpen, setModalOpen] = useState(true);
    const [buttonOpen, setButtonOpen] = useState(false);

    return (
        <>
            <div className='mx-auto max-w-360 px-5'>
                <Breadcrumb />
                <div>
                    <h1 className='font-medium text-2xl sm:text-4xl my-5 sm:my-7'>
                        {data.vacanciesPage.pageTitle}
                    </h1>
                    {/* //////////////////////////////////////// */}
                    <div className='mb-10 w-full'>
                        <div className=''>
                            <button
                                onClick={() => setModalOpen(!modalOpen)}
                                className={`flex items-center justify-between text-xl sm:text-2xl font-medium w-full p-3 sm:p-4  transition duration-300 hover:border-amber-400 ${modalOpen ? "bg-amber-300 rounded-tl-xl rounded-tr-xl" : "bg-white border border-gray-300 rounded-xl"}`}
                            >
                                {data.vacanciesPage.avtoelektrik}
                                <button
                                    className={`transition-transform duration-300 ${modalOpen ? "rotate-180" : ""}`}
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='35'
                                        height='35'
                                        viewBox='0 0 24 24'
                                    >
                                        <path d='M0 0h24v24H0z' fill='none' />
                                        <path
                                            fill='none'
                                            stroke='currentColor'
                                            stroke-linecap='round'
                                            d='m19.142 9.929l-6.364 6.364a1 1 0 0 1-1.415 0L5 9.929'
                                        />
                                    </svg>
                                </button>
                            </button>
                            {modalOpen && (
                                <div className='p-3 sm:p-5 border border-gray-100 rounded-bl-xl rounded-br-xl'>
                                    <div>
                                        <h1 className='font-medium text-[18px]'>
                                            {data.vacanciesPage.title1}
                                        </h1>
                                        {data.vacanciesPage.obyazannosti.map(
                                            (item, i) => (
                                                <div key={i} className=''>
                                                    <span className='font-black text-3xl mx-3'>
                                                        .
                                                    </span>
                                                    <p className='text-base inline'>
                                                        {item}
                                                    </p>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                    <div className='my-5'>
                                        <h1 className='font-medium text-[18px]'>
                                            {data.vacanciesPage.title2}
                                        </h1>
                                        {data.vacanciesPage.trebovaniya.map(
                                            (item, i) => (
                                                <div key={i} className=''>
                                                    <span className='font-black text-3xl mx-3'>
                                                        .
                                                    </span>
                                                    <p className='text-base inline'>
                                                        {item}
                                                    </p>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                    <div className='my-5'>
                                        <h1 className='font-medium text-[18px]'>
                                            {data.vacanciesPage.title3}
                                        </h1>
                                        {data.vacanciesPage.usloviya.map(
                                            (item, i) => (
                                                <div key={i} className=''>
                                                    <span className='font-black text-3xl mx-3'>
                                                        .
                                                    </span>
                                                    <p className='text-base inline'>
                                                        {item}
                                                    </p>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                    <button
                                        onClick={() => setButtonOpen(true)}
                                        className='bg-amber-300 py-2 px-7 text-base rounded hover:bg-amber-200 transition duration-300 my-3 ml-5'
                                    >
                                        {data.vacanciesPage.button}
                                    </button>
                                </div>
                            )}
                            {/* ///////////////////////////// */}
                            {buttonOpen && (
                                <div
                                    onClick={() => setButtonOpen(false)}
                                    className='fixed inset-0 z-999 flex items-center justify-center bg-black/60'
                                >
                                    <div
                                        onClick={(e) => e.stopPropagation()}
                                        className='relative w-full max-w-117.5 rounded-lg bg-white px-5 py-5 md:px-16'
                                    >
                                        <button
                                            onClick={() => setButtonOpen(false)}
                                            className='absolute right-1 -top-3 text-5xl'
                                        >
                                            ×
                                        </button>
                                        <h2 className='text-center text-[22px] font-medium md:text-[32px]'>
                                            {data.vacanciesPage.modalInfo.title}
                                        </h2>
                                        <p className='mb-5 text-center text-base'>
                                            {
                                                data.vacanciesPage.modalInfo
                                                    .miniTitle
                                            }
                                        </p>
                                        <form className='flex flex-col gap-3'>
                                            <div>
                                                <label className='mb-1 block text-sm'>
                                                    {
                                                        data.vacanciesPage
                                                            .modalInfo.name
                                                    }
                                                </label>

                                                <input
                                                    type='text'
                                                    placeholder='Иван'
                                                    className='w-full rounded-md border-2 border-[#c6c4c4] px-4 py-2 focus:border-[#FEC80B]'
                                                />
                                            </div>
                                            <div>
                                                <label className='mb-1 block text-sm'>
                                                    E-mail *
                                                </label>
                                                <input
                                                    type='email'
                                                    placeholder='your@mail.com'
                                                    className='w-full rounded-md border-2 border-[#c6c4c4] px-4 py-2 focus:border-[#FEC80B]'
                                                />
                                            </div>
                                            <div>
                                                <label className='mb-1 block text-sm'>
                                                    {
                                                        data.vacanciesPage
                                                            .modalInfo.telefon
                                                    }
                                                </label>

                                                <input
                                                    type='tel'
                                                    placeholder='+7'
                                                    className='w-full rounded-md border-2 border-[#c6c4c4] px-4 py-2 focus:border-[#FEC80B]'
                                                />
                                            </div>
                                            <div>
                                                <label className='mb-1 block text-sm'>
                                                    {
                                                        data.vacanciesPage
                                                            .modalInfo.silka
                                                    }
                                                </label>

                                                <input
                                                    type='text'
                                                    placeholder='https://...'
                                                    className='w-full rounded-md border-2 border-[#c6c4c4] px-4 py-2 focus:border-[#FEC80B]'
                                                />
                                            </div>
                                            <label className='mt-1 flex items-start gap-3'>
                                                <input
                                                    type='checkbox'
                                                    defaultChecked
                                                    className='h-7 w-7 accent-black'
                                                />
                                                <span className='text-sm text-[#777]'>
                                                    {
                                                        data.vacanciesPage
                                                            .modalInfo.checkText
                                                    }
                                                    <span className='text-[#4B3B65]'>
                                                        {
                                                            data.vacanciesPage
                                                                .modalInfo
                                                                .checkLink
                                                        }
                                                    </span>
                                                </span>
                                            </label>
                                            <button
                                                type='submit'
                                                className='mt-3 w-full rounded-md bg-[#FEC80B] py-2 font-normal hover:bg-amber-200 transition duration-300'
                                            >
                                                {
                                                    data.vacanciesPage.modalInfo
                                                        .title
                                                }
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default VacanciesPage;
