import allImages from "../../assets/icons/icons";
import { icons } from "../../assets/iconkalar";
import { useState } from "react";
import { useLanguage } from "../../context/languageContext";
import { useLike } from "../../context/likeContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cardContext";

// HEADER BASKET BUTTON
export const BasketButton = () => {
    const { cart } = useCart();
    const navigate = useNavigate();
    return (
        <div
            className='relative cursor-pointer'
            onClick={() => navigate("/basket")}
        >
            <button href='/basket'>
                <img
                    src={allImages.headerImages.basketImg}
                    className='h-7 w-7'
                />
            </button>
            {cart.length > 0 && (
                <span className='absolute -right-2 bottom-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[11px]'>
                    {cart.length}
                </span>
            )}
        </div>
    );
};
BasketButton;
// HEADER HEART BUTTON
export const HeartButton = () => {
    const { likedProducts } = useLike();
    const navigate = useNavigate();
    return (
        <div className='relative'>
            <button onClick={() => navigate("/liked")} className='relative'>
                <img
                    src={allImages.headerImages.heartImg}
                    className='h-6 w-6'
                />

                {likedProducts.length > 0 && (
                    <span className='absolute -right-1 -bottom-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[11px]'>
                        {likedProducts.length}
                    </span>
                )}
            </button>
        </div>
    );
};
// HEADER CALL BUTTON
export const HeaderCallButton = () => {
    return (
        <button className='w-8 h-8 p-0 border-0 bg-[#fec80b] transition-all duration-300 rounded-full items-center justify-center'>
            <img
                src={allImages.headerImages.callImg}
                className='mx-auto w-6 h-6'
            />
        </button>
    );
};
HeaderCallButton;
// HOME PAGE HERO SECTION PODROBNE BUTTON
export const PodrobneButton = () => {
    const { data } = useLanguage();
    return (
        <button className='bg-amber-400 rounded text-black hover:bg-transparent hover:text-white border border-amber-400 transition duration-500 px-2 sm:px-5 text-[12px] md:text-base py-2 md:px-7'>
            {data.modals.podrobne}
        </button>
    );
};
PodrobneButton;
// HOME PAGE HERO SECTION OTKRIT CATALOG BUTTON
export const OpenCatalogButton = () => {
    const { data } = useLanguage();
    return (
        <button className='bg-amber-400 rounded text-black hover:bg-transparent hover:text-white border border-amber-400 transition duration-500 px-2 sm:px-5 text-[12px] md:text-base py-2 md:px-d'>
            {data.modals.openCatalog}
        </button>
    );
};
OpenCatalogButton;
// HOME PAGE HERO SECTION ZAKAZAT ZVONOK BUTTON
export const CallButton = ({ onClick }) => {
    const { data } = useLanguage();
    return (
        <button
            onClick={onClick}
            className='bg-inherit border border-amber-400 text-white rounded hover:bg-amber-400 hover:text-black transition duration-500 px-2 sm:px-5 text-[12px] md:text-base py-2 md:px-7'
        >
            {data.modals.zakazatZvonok}
        </button>
    );
};
CallButton;
// HOME PAGE PODROBNEE BUTTON WITH RIGHT
export const PodrobneeButton = () => {
    const { data } = useLanguage();
    return (
        <button className='border border-amber-400  bg-amber-400 rounded text-black hover:bg-inherit hover:text-amber-500 transition duration-500 px-2 sm:px-5 text-[12px] md:text-base py-2 md:px-7 flex gap-2 items-center'>
            {data.modals.podrobne}
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20px'
                height='1em'
                viewBox='0 0 24 24'
            >
                <path d='M0 0h24v24H0z' fill='none' />
                <path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m18 8l4 4l-4 4M2 12h20'
                />
            </svg>
        </button>
    );
};
PodrobneeButton;
// HOME PAGE RECOMMENDED SECTION POLUCHIT BUTTON
export const PoluchitButton = ({ onClick }) => {
    const { data } = useLanguage();
    return (
        <button
            onClick={onClick}
            className='text-[#a1a1a1] mx-auto mt-2 hidden md:flex items-center gap-2 hover:text-[#FEC80B] transition duration-300'
        >
            {data.modals.poluchitKP}
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 15 15'
            >
                <path d='M0 0h15v15H0z' fill='none' />

                <path
                    fill='currentColor'
                    d='M7.748 10.876a.45.45 0 0 1-.496 0l-.07-.058l-3.25-3.25a.45.45 0 0 1 .636-.637L7.05 9.413V1.5a.45.45 0 0 1 .9 0v7.913l2.48-2.483l.07-.057a.451.451 0 0 1 .625.624l-.058.07l-3.25 3.25zM1.5 13.95a.45.45 0 0 1 0-.9h12a.45.45 0 0 1 0 .9z'
                />
            </svg>
        </button>
    );
};
PoluchitButton;
// HOMEPAGE NOVOSTE SECTION PODROBNEE BUTTON
export const NewsPodrobneeButton = () => {
    const { data } = useLanguage();
    return (
        <button className='flex items-center gap-2 text-[#A2A2A2] text-[14px] sm:text-[18px] hover:text-[#FEC80B] transition duration-300'>
            {data.modals.podrobne}
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='25px'
                height='20px'
                viewBox='0 0 24 24'
            >
                <path d='M0 0h24v24H0z' fill='none' />
                <path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m18 8l4 4l-4 4M2 12h20'
                />
            </svg>
        </button>
    );
};
NewsPodrobneeButton;
// NAME INPUT
export const NameInput = () => {
    return (
        <input
            type='text'
            placeholder='Иван'
            className='h-11 w-full md:w-62.5 rounded border border-black px-4 text-base placeholder:text-[#888] hover:border-amber-400 transition duration-300'
        />
    );
};
NameInput;
// PHONE NUMBER INPUT
export const PhoneNumberInput = () => {
    return (
        <input
            type='number'
            placeholder='+998'
            className='h-11 w-full md:w-62.5 rounded border border-black px-4 text-base placeholder:text-[#888] hover:border-amber-400 transition duration-300'
        />
    );
};
PhoneNumberInput;
// EMAIL INPUT
export const EmailInput = () => {
    return (
        <input
            type='email'
            placeholder='your@mail.com'
            className='h-11 w-full md:w-62.5 rounded border border-black px-4 text-base placeholder:text-[#888] hover:border-amber-400 transition duration-300'
        />
    );
};
EmailInput;
// OTPRAVIT BUTTON
export const OtpravitButton = () => {
    const { data } = useLanguage();
    return (
        <button
            type='submit'
            className='h-11 w-full md:w-32.5 border border-amber-400 rounded-[5px] bg-[#FFC107] hover:bg-inherit hover:text-amber-400 text-base text-black transition duration-300'
        >
            {data.modals.otpravit}
        </button>
    );
};
OtpravitButton;

// FOOTER ZAKAZAT ZVONOK BUTTON
export const FooterButton = ({ onClick }) => {
    const { data } = useLanguage();
    return (
        <button
            onClick={onClick}
            className='bg-amber-400 border border-amber-400 text-white rounded hover:bg-transparent hover:text-amber-400 transition duration-500 text-base py-2 px-7'
        >
            {data.modals.zakazatZvonok}
        </button>
    );
};
FooterButton;
export const LanguageButton = () => {
    const { RussiaIcon, EnglishIcon, UzbekIcon } = icons;
    const [languageOpen, setLanguageOpen] = useState(false);
    const { language, setLanguage } = useLanguage();

    const languageFlags = {
        uz: <UzbekIcon />,
        ru: <RussiaIcon />,
        en: <EnglishIcon />,
    };

    return (
        <div className='relative'>
            <button
                onClick={() => setLanguageOpen((prev) => !prev)}
                className='flex items-center  rounded'
            >
                <span>{languageFlags[language]}</span>

                <span
                    className={`text-yellow-400 transition-transform duration-300 ${
                        languageOpen ? "rotate-180" : ""
                    }`}
                >
                    ▼
                </span>
            </button>

            {languageOpen && (
                <div className='absolute top-10 p-2 z-70 flex flex-col gap-2 rounded bg-white shadow-lg'>
                    <button
                        onClick={() => {
                            setLanguage("uz");
                            setLanguageOpen(false);
                        }}
                        className='flex items-center gap-1 text-sm'
                    >
                        {languageFlags.uz} O'zbek
                    </button>

                    <button
                        onClick={() => {
                            setLanguage("ru");
                            setLanguageOpen(false);
                        }}
                        className='flex items-center gap-1 text-sm'
                    >
                        {languageFlags.ru} Русский
                    </button>

                    <button
                        onClick={() => {
                            setLanguage("en");
                            setLanguageOpen(false);
                        }}
                        className='flex items-center gap-1 text-sm'
                    >
                        {languageFlags.en} English
                    </button>
                </div>
            )}
        </div>
    );
};
