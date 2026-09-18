import {
    NameInput,
    OtpravitButton,
    PhoneNumberInput,
} from "../buttons/buttons";

const QuestionsSection = () => {
    return (
        <section className='bg-[#F2F2F2] flex justify-between py-8 xl:py-0'>
            <div className='mx-auto max-w-360 px-5 pb-5 flex justify-between items-center'>
                <div className='mx-auto lg:mx-0 text-center lg:text-left'>
                    <h1 className='text-[26px] sm:[34px] md:text-[42px] font-semibold text-[#000000]'>
                        ОСТАЛИСЬ ВОПРОСЫ?
                    </h1>
                    <p className='text-base sm:text-[18px] text-[#000000] mb-5'>
                        Оставьте свои контактные данные, и мы перезвоним Вам в
                        ближайшее время
                    </p>
                    <div className='flex items-end gap-5'>
                        <form
                            action='html'
                            className='md:flex md:items-end gap-5 mx-auto w-full md:mx-0'
                        >
                            <div className='flex flex-col gap-1'>
                                <label
                                    htmlFor='name'
                                    className='text-[14px] leading-5 text-black text-left'
                                >
                                    Ваше имя *
                                </label>
                                <NameInput />
                            </div>
                            <div className='flex flex-col gap-1 my-5 md:my-0'>
                                <label
                                    htmlFor='phone'
                                    className='text-[14px] leading-5 text-black text-left'
                                >
                                    Телефон *
                                </label>
                                <PhoneNumberInput />
                            </div>
                            <OtpravitButton />
                        </form>
                    </div>
                    <p className='mt-5 text-[#888] text-[14px]'>
                        Нажимая на кнопку отправить.
                        <a
                            href='https://rtrf.ru/upload/privacy_policy.pdf'
                            className='underline text-blue-900'
                        >
                            Вы соглашаетесь на обработку персональных данных
                        </a>
                    </p>
                </div>
            </div>
            <div className='w-full h-full hidden lg:block'>
                <img
                    src='/homePagePhotos/3d-render-of-a-cargo-delivery-truck (1) 2.png'
                    className='relative w-full h-auto object-cover'
                />
            </div>
        </section>
    );
};
export default QuestionsSection;
