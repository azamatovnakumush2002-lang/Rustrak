import { useState } from "react";
import { useLanguage } from "../../context/languageContext";
export const PoluchitButtonModal = ({ onClose }) => {
    const { data } = useLanguage();
    return (
        <div
            onClick={onClose}
            className='fixed inset-0 z-999 flex items-center justify-center bg-black/60'
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className='relative w-full max-w-117.5 rounded-lg bg-white px-6 py-10 md:px-20'
            >
                <button
                    onClick={onClose}
                    className='absolute right-1 -top-3 text-6xl font-extralight text-[#333]'
                >
                    ×
                </button>

                <h2 className='mb-10 text-center text-[22px] font-medium leading-[120%] text-[#1D1D1B] md:text-[26px]'>
                    {data.modals.title1}
                </h2>

                <form className='flex flex-col gap-3'>
                    <div>
                        <label className='mb-1 block text-sm'>
                            {data.modals.name} *
                        </label>

                        <input
                            type='text'
                            placeholder='Иван'
                            className='w-full rounded-md border-2 border-[#c6c4c4] px-4 py-2 focus:border-[#FEC80B]'
                        />
                    </div>

                    <div>
                        <label className='mb-1 block text-sm'>
                            {data.modals.email} *
                        </label>

                        <input
                            type='email'
                            placeholder='your@mail.com'
                            className='w-full rounded-md border-2 border-[#c6c4c4] px-4 py-2 outline-none focus:border-[#FEC80B]'
                        />
                    </div>

                    <div>
                        <label className='mb-1 block text-sm'>
                            {data.modals.phone} *
                        </label>

                        <input
                            type='tel'
                            placeholder='+7'
                            className='w-full rounded-md border-2 border-[#c6c4c4] px-4 py-2 outline-none focus:border-[#FEC80B]'
                        />
                    </div>

                    <label className='mt-1 flex items-start gap-3'>
                        <input
                            type='checkbox'
                            defaultChecked
                            className='h-7 w-7 accent-black'
                        />

                        <span className='text-sm leading-[120%] text-[#777]'>
                            {data.modals.checkText1}
                            <span className='text-[#4B3B65]'>
                                {data.modals.checkText2}
                            </span>
                        </span>
                    </label>

                    <button
                        type='submit'
                        className='mt-10 w-full rounded-md bg-[#FEC80B] py-2 font-normal text-black hover:opacity-90 transition'
                    >
                        {data.modals.poluchitKP}
                    </button>
                </form>
            </div>
        </div>
    );
};
// /////////////////////////////////////////////////////
export const ZakazatZvonokModal = ({ onClose }) => {
    const { data } = useLanguage();
    return (
        <div
            onClick={onClose}
            className='fixed inset-0 z-999 flex items-center justify-center bg-black/60'
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className='relative w-full max-w-117.5 rounded-lg bg-white py-10'
            >
                <button
                    onClick={onClose}
                    className='absolute right-1 -top-3 text-6xl font-extralight text-[#333]'
                >
                    ×
                </button>
                <h2 className='text-center text-[22px] font-medium leading-[120%] text-[#1D1D1B] md:text-[30px]'>
                    {data.modals.zakazatZvonok}
                </h2>
                <p className='mb-5 text-center text-[#1D1D1B]'>
                    {data.modals.zzText}
                </p>

                <form className='flex flex-col gap-3 px-6 md:px-20'>
                    <div>
                        <label className='mb-1 block text-sm'>
                            {data.modals.name} *
                        </label>
                        <input
                            type='text'
                            placeholder='Иван'
                            className='w-full rounded-md border-2 border-[#c6c4c4] px-4 py-2 focus:border-[#FEC80B]'
                        />
                    </div>
                    <div>
                        <label className='mb-1 block text-sm'>
                            {data.modals.phone} *
                        </label>

                        <input
                            type='tel'
                            placeholder='+7'
                            className='w-full rounded-md border-2 border-[#c6c4c4] px-4 py-2 focus:border-[#FEC80B]'
                        />
                    </div>
                    <label className='mt-1 flex items-start gap-3'>
                        <input
                            type='checkbox'
                            defaultChecked
                            className='h-7 w-7 accent-black'
                        />

                        <span className='text-sm leading-[120%] text-[#777]'>
                            {data.modals.checkText1}
                            <span className='text-[#4B3B65]'>
                                {data.modals.checkText2}
                            </span>
                        </span>
                    </label>
                    <button
                        type='submit'
                        className='mt-5 w-full rounded-md bg-[#FEC80B] py-2 font-normal text-black hover:opacity-90 transition'
                    >
                        {data.modals.zayavkuBtn}
                    </button>
                    <div className='text-center'>
                        <p className='text-[12px]'>
                            {data.modals.forRegion1} 8 (800) 511-05-25
                        </p>
                        <p className='text-[12px]'>
                            {data.modals.forRegion2} 8 (831) 235-25-51
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};
// //////////////////////////////////////////////////////
export const OformitZakazModal = () => {
    const { data } = useLanguage();
    return (
        <div className=''>
            <div className=''>
                <h2 className='my-10 text-[22px] font-medium sm:text-3xl'>
                    {data.modals.oformitZakaz}
                </h2>
                <form className='flex flex-col gap-3'>
                    <div>
                        <label className='mb-1 block text-sm'>
                            {data.modals.name} *
                        </label>
                        <input
                            type='text'
                            placeholder='Иван'
                            className='w-auto sm:w-90 rounded border-2 border-[#c6c4c4] px-4 py-2 focus:border-[#FEC80B]'
                        />
                    </div>
                    <div>
                        <label className='mb-1 block text-sm'>
                            {data.modals.email} *
                        </label>
                        <input
                            type='email'
                            placeholder='your@mail.com'
                            className='w-auto sm:w-90 rounded border-2 border-[#c6c4c4] px-4 py-2 focus:border-[#FEC80B]'
                        />
                    </div>
                    <div>
                        <label className='mb-1 block text-sm'>
                            {data.modals.phone} *
                        </label>

                        <input
                            type='tel'
                            placeholder='+7'
                            className='w-auto sm:w-90 rounded border-2 border-[#c6c4c4] px-4 py-2 focus:border-[#FEC80B]'
                        />
                    </div>
                    <label className='flex items-center gap-3'>
                        <input
                            type='checkbox'
                            defaultChecked
                            className='h-7 w-7 accent-black'
                        />
                        <span className='text-sm leading-[120%] text-[#777]'>
                            {data.modals.checkText1}
                            <span className='text-[#5a15c9]'>
                                {data.modals.checkText2}
                            </span>
                        </span>
                    </label>
                    <button
                        type='submit'
                        className='mt-10 max-w-90 rounded border border-amber-400 bg-[#FEC80B] py-2 hover:bg-white transition'
                    >
                        {data.modals.oformitZakaz}
                    </button>
                </form>
            </div>
        </div>
    );
};
// ///////////////////////////////////////////////////////
export const OstalisVopros = () => {
    const { data } = useLanguage();
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className='mt-5 md:mt-0'>
            <h1 className='font-medium text-3xl'>{data.modals.question}</h1>
            <p className='text-gray-400 max-w-80 my-5'>{data.modals.text}</p>
            <div className=''>
                <p className='text-gray-400'>
                    {data.modals.forRegion1} 8 (800) 511-05-25
                </p>
                <p className='text-gray-400'>
                    {data.modals.forRegion2} 8 (831) 235-25-51
                </p>
            </div>
            <button
                onClick={() => setModalOpen(true)}
                className='my-5 rounded border px-20 py-2 hover:bg-black hover:text-white'
            >
                {data.modals.zakazatZvonok}
            </button>
            {modalOpen && (
                <ZakazatZvonokModal onClose={() => setModalOpen(false)} />
            )}
        </div>
    );
};
