import { useLanguage } from "../../context/languageContext";
import {
    NameInput,
    OtpravitButton,
    PhoneNumberInput,
} from "../buttons/buttons";

const QuestionsSection = () => {
    const { data } = useLanguage();
    return (
        <section className='bg-[#F2F2F2]  overflow-hidden pt-5'>
            <div className=' max-w-360 pl-5 mx-auto  min-[1099px]:flex justify-between '>
                <div className='w-full lg:w-[65%] my-auto max-[1099px]:mb-8'>
                    <div className='text-center md:text-left'>
                        <h1 className='text-[26px] sm:text-[34px] md:text-[50px] font-medium'>
                            {data.modals.question}
                        </h1>
                        <p className='text-base sm:text-[18px] mb-5'>
                            {data.modals.questionText}
                        </p>
                    </div>
                    <div className=''>
                        <form className='md:flex md:items-end gap-5 mx-auto w-full md:mx-0'>
                            <div className='flex flex-col gap-1 w-full'>
                                <label
                                    htmlFor='name'
                                    className='text-[14px] leading-5 text-black text-left'
                                >
                                    {data.modals.name} *
                                </label>
                                <NameInput />
                            </div>
                            <div className='flex flex-col gap-1 my-5 md:my-0 w-full'>
                                <label
                                    htmlFor='phone'
                                    className='text-[14px] leading-5 text-black text-left'
                                >
                                    {data.modals.phone} *
                                </label>
                                <PhoneNumberInput />
                            </div>
                            <OtpravitButton />
                        </form>
                        <p className='mt-5 text-[#888] text-[14px]'>
                            {data.modals.text1}
                            <a
                                href='https://rtrf.ru/upload/privacy_policy.pdf'
                                className='underline text-blue-900'
                            >
                                {data.modals.text2}
                            </a>
                        </p>
                    </div>
                </div>

                <div className='hidden min-[1100px]:block w-100 h-80 shrink-0'>
                    <img
                        src='/homePagePhotos/questions-section-img.webp'
                        className=' w-auto h-full max-w-none object-left'
                    />
                </div>
            </div>
        </section>
    );
};
export default QuestionsSection;
