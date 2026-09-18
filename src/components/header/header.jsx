import { useEffect, useState } from "react";
import allImages from "../../assets/icons/icons";
import {
    BasketButton,
    HeaderCallButton,
    HeartButton,
} from "../buttons/buttons";
import { icons } from "../../assets/iconkalar";
const { RussiaIcon, EnglishIcon, UzbekIcon } = icons;
import { useLanguage } from "../../context/languageContext";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [catalogOpen, setCatalogOpen] = useState(null);
    const [workingTimeOpen, setWorkingTimeOpen] = useState(false);
    const [languageOpen, setLanguageOpen] = useState(false);
    const { language, setLanguage, data } = useLanguage();

    const languageFlags = {
        uz: <UzbekIcon />,
        ru: <RussiaIcon />,
        en: <EnglishIcon />,
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 130);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Catalog / About Us / Media ochish
    const handleCatalogOpen = (name) => {
        setCatalogOpen((prev) => (prev === name ? null : name));
    };
    return (
        <header className='relative w-full'>
            {/* first header */}
            <div
                className={`w-full transition-opacity duration-200 ${
                    scrolled ? "pointer-events-none opacity-0" : "opacity-100"
                }`}
            >
                <div className='mx-auto flex max-w-360 items-center justify-between px-5 py-2'>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-2'>
                            <a href='home' className='cursor-pointer'>
                                <img src='https://rtrf.ru/local/templates/rustruck/images/logo.svg' />
                            </a>
                            <p className='hidden lg:block max-w-45 border-l border-yellow-500 pl-2 text-[14px] leading-[110%] text-black'>
                                {data.header.desc}
                            </p>
                        </div>
                        <div className='flex cursor-pointer items-center gap-1'>
                            <img
                                src={allImages.headerImages.qrImg}
                                className='h-7 w-7'
                            />
                            <span className='max-w-16 text-[8px] font-bold leading-[100%] text-[#000000]'>
                                {data.header.qrCode}
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='relative flex flex-col'>
                            <button
                                onClick={() =>
                                    setWorkingTimeOpen((prev) => !prev)
                                }
                                className='hidden lg:block relative gap-1 text-end text-base'
                            >
                                <span className='whitespace-nowrap'>
                                    {data.header.workingTime}
                                </span>

                                <span
                                    className={`
                                        inline-block
                                        text-sm
                                        text-yellow-400
                                        transition-transform
                                        duration-300
                                        ${
                                            workingTimeOpen
                                                ? "rotate-180"
                                                : "rotate-0"
                                        }
                                    `}
                                >
                                    ▼
                                </span>
                                {workingTimeOpen && (
                                    <div className='absolute left-20 top-7 z-30 flex rounded-lg border border-gray-100 bg-white text-left shadow-md'>
                                        <p className='max-w-45 p-3 text-[14px] leading-[170%] text-black'>
                                            {data.header.time}
                                        </p>
                                    </div>
                                )}
                            </button>
                            <p className='hidden md:block text-[14px] text-gray-400 lg:whitespace-nowrap  max-w-35  text-right lg:max-w-none'>
                                {data.header.place}
                            </p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='hidden md:block text-right text-[14px] text-[#A1A1A1]'>
                                <p>{data.header.forRegion}</p>

                                <p className='whitespace-nowrap'>
                                    {data.header.forRegion2}
                                </p>
                            </div>
                            <HeaderCallButton />
                        </div>
                    </div>
                </div>
                <div className='border-b border-[#FEC80B]' />
            </div>
            {/* main header */}
            <div
                className={`w-full bg-white transition-opacity duration-200 ${
                    scrolled ? "pointer-events-none opacity-0" : "opacity-100"
                }`}
            >
                <div className='mx-auto flex max-w-360 items-center justify-between px-5'>
                    <div className='relative flex items-center gap-8 py-4'>
                        <button
                            onClick={() => handleCatalogOpen("catalog")}
                            className='flex items-center gap-3 rounded bg-primary px-4 py-2 text-base transition hover:bg-[#eeb600]'
                        >
                            <span className='text-xl leading-none'>
                                {catalogOpen === "catalog" ? "✕" : "☰"}
                            </span>

                            <span className='hidden sm:block  text-base font-normal'>
                                {data.header.navigations.katalogBtn}
                            </span>
                        </button>
                        <nav className='hidden lg:flex items-center gap-7 '>
                            <button
                                onClick={() => handleCatalogOpen("aboutUs")}
                                className='flex items-center gap-1 whitespace-nowrap text-base leading-[130%] transition duration-300 hover:text-[#C99024]'
                            >
                                {data.header.navigations.aboutUs}

                                <span
                                    className={`
                                        inline-block
                                        text-yellow-400
                                        transition-transform
                                        duration-300
                                        ${
                                            catalogOpen === "aboutUs"
                                                ? "rotate-180"
                                                : "rotate-0"
                                        }
                                    `}
                                >
                                    ▼
                                </span>
                            </button>
                            <button
                                onClick={() => handleCatalogOpen("media")}
                                className='flex items-center gap-1 text-[15px] transition duration-300 hover:text-[#C99024]'
                            >
                                {data.header.navigations.media}

                                <span
                                    className={`
                                        inline-block
                                        text-yellow-400
                                        transition-transform
                                        duration-300
                                        ${
                                            catalogOpen === "media"
                                                ? "rotate-180"
                                                : "rotate-0"
                                        }
                                    `}
                                >
                                    ▼
                                </span>
                            </button>
                            {data.header.navigations.media1.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.path}
                                    className='whitespace-nowrap text-[15px] transition duration-300 hover:text-[#C99024]'
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className='flex items-center gap-3 sm:gap-5'>
                        {/* laguage */}
                        <div className='relative'>
                            <button
                                onClick={() => setLanguageOpen((prev) => !prev)}
                                className='flex items-center gap-1 rounded text-sm'
                            >
                                <span>{languageFlags[language]}</span>

                                <span>{language.toUpperCase()}</span>

                                <span
                                    className={`text-yellow-400 transition-transform duration-300 ${
                                        languageOpen ? "rotate-180" : ""
                                    }`}
                                >
                                    ▼
                                </span>
                            </button>

                            {languageOpen && (
                                <div className='absolute p-4 z-70 flex flex-col gap-2 rounded bg-white shadow-lg'>
                                    <button
                                        onClick={() => {
                                            setLanguage("uz");
                                            setLanguageOpen(false);
                                        }}
                                        className='flex items-center gap-1'
                                    >
                                        {languageFlags.uz} O'zbek
                                    </button>

                                    <button
                                        onClick={() => {
                                            setLanguage("ru");
                                            setLanguageOpen(false);
                                        }}
                                        className='flex items-center gap-1'
                                    >
                                        {languageFlags.ru} Русский
                                    </button>

                                    <button
                                        onClick={() => {
                                            setLanguage("en");
                                            setLanguageOpen(false);
                                        }}
                                        className='flex items-center gap-1'
                                    >
                                        {languageFlags.en} English
                                    </button>
                                </div>
                            )}
                        </div>
                        {/* input div */}
                        <div className='hidden lg:flex'>
                            <input
                                type='text'
                                className='border border-yellow-400 rounded-full py-1 px-5'
                            />
                            <img
                                src={allImages.headerImages.searchImg}
                                className='-ml-8'
                            />
                        </div>

                        <a href='#'>
                            <img
                                src={allImages.headerImages.basketImg}
                                className='h-6 w-6'
                            />
                        </a>
                        <a href='#'>
                            <img
                                src={allImages.headerImages.heartImg}
                                className='h-6 w-6'
                            />
                        </a>
                    </div>
                </div>
            </div>
            {/* scroll header */}
            <div
                className={`fixed top-0 z-50 w-full bg-white shadow-sm ${scrolled ? "block opacity-100" : "hidden opacity-0"}`}
            >
                <div className='mx-auto flex max-w-360 items-center justify-between px-5 py-2'>
                    <div className='flex items-center gap-2 lg:gap-6'>
                        <button
                            onClick={() => handleCatalogOpen("catalog")}
                            className='flex items-center justify-center rounded bg-primary px-4 py-2'
                        >
                            <span className='text-xl leading-none'>
                                {catalogOpen === "catalog" ? "✕" : "☰"}
                            </span>
                        </button>
                        <a href='home'>
                            <img
                                src='https://rtrf.ru/local/templates/rustruck/images/logo.svg'
                                className='hidden lg:block object-contain'
                            />
                        </a>
                        <div className='hidden sm:block lg:hidden'>
                            <a
                                href='#'
                                className='font-extrabold text-[16px] text-[#000000] mt-1'
                            >
                                РУСТРАК
                            </a>
                            <br />
                            <span className='whitespace-nowrap text-[13px] text-[#333333]'>
                                8 800-511-05-25
                            </span>
                        </div>
                        <nav className='items-center gap-7 hidden xl:flex'>
                            <button
                                onClick={() => handleCatalogOpen("aboutUs")}
                                className='flex items-center gap-1 text-[15px] transition duration-300 hover:text-[#C99024]'
                            >
                                {data.header.navigations.aboutUs}
                                <span
                                    className={`inline-block text-yellow-400 transition-transform
                                        duration-300 ${catalogOpen === "aboutUs" ? "rotate-180" : "rotate-0"}`}
                                >
                                    ▼
                                </span>
                            </button>
                            <button
                                onClick={() => handleCatalogOpen("media")}
                                className='flex items-center gap-1 text-[15px] transition duration-300 hover:text-[#C99024]'
                            >
                                {data.header.navigations.media}
                                <span
                                    className={`inline-block text-yellow-400 transition-transform duration-300 ${catalogOpen === "media" ? "rotate-180" : "rotate-0"}`}
                                >
                                    ▼
                                </span>
                            </button>
                            {data.header.navigations.media1.map((item, i) => (
                                <a key={i} href={item.path}>
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className='flex items-center gap-2 sm:gap-5'>
                        {/* laguage */}
                        <div className='relative'>
                            <button
                                onClick={() => setLanguageOpen((prev) => !prev)}
                                className='flex items-center gap-1 rounded text-sm'
                            >
                                <span>{languageFlags[language]}</span>

                                <span>{language.toUpperCase()}</span>

                                <span
                                    className={`text-yellow-400 transition-transform duration-300 ${
                                        languageOpen ? "rotate-180" : ""
                                    }`}
                                >
                                    ▼
                                </span>
                            </button>

                            {languageOpen && (
                                <div className='absolute p-4 z-70 flex flex-col gap-2 rounded bg-white shadow-lg'>
                                    <button
                                        onClick={() => {
                                            setLanguage("uz");
                                            setLanguageOpen(false);
                                        }}
                                        className='flex items-center gap-1'
                                    >
                                        {languageFlags.uz} O'zbek
                                    </button>

                                    <button
                                        onClick={() => {
                                            setLanguage("ru");
                                            setLanguageOpen(false);
                                        }}
                                        className='flex items-center gap-1'
                                    >
                                        {languageFlags.ru} Русский
                                    </button>

                                    <button
                                        onClick={() => {
                                            setLanguage("en");
                                            setLanguageOpen(false);
                                        }}
                                        className='flex items-center gap-1'
                                    >
                                        {languageFlags.en} English
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className='hidden lg:flex'>
                            <input
                                type='text'
                                className='border border-yellow-400 rounded-full py-0.5 px-5'
                            />
                            <img
                                src={allImages.headerImages.searchImg}
                                className='-ml-8'
                            />
                        </div>
                        <BasketButton />
                        <HeartButton />
                        <HeaderCallButton />
                    </div>
                </div>
            </div>
            {/* catalog modal */}
            {catalogOpen && (
                <div className={`absolute left-0 z-40 w-full bg-[#F9F9F9]`}>
                    <div className='mx-auto flex max-w-360 justify-between px-5 py-7 flex-wrap'>
                        <div>
                            <h2 className='text-[22px] font-bold leading-[160%] text-[#000000] transition duration-300 hover:text-[#C99024]'>
                                {data.header.allCategories.title}
                            </h2>
                            <nav className='grid grid-cols-1'>
                                {data.header.allCategories.types.map(
                                    (type, index) => (
                                        <a
                                            href={type.path}
                                            key={index}
                                            className='text-sm leading-[250%] text-[#000000] transition duration-300 hover:text-[#C99024]'
                                        >
                                            {type.name}
                                        </a>
                                    ),
                                )}
                            </nav>
                        </div>
                        <div>
                            <h2 className='text-[22px] font-bold leading-[160%] text-[#000000] transition duration-300 hover:text-[#C99024]'>
                                {data.header.navigations.aboutUs}
                            </h2>
                            <nav className='grid grid-cols-1'>
                                {data.header.allAboutUs.types.map(
                                    (type, index) => (
                                        <a
                                            href={type.path}
                                            key={index}
                                            className='text-sm leading-[250%] text-[#000000] transition duration-300 hover:text-[#C99024]'
                                        >
                                            {type.name}
                                        </a>
                                    ),
                                )}
                            </nav>
                        </div>
                        <div>
                            <h2 className='text-[22px] font-bold leading-[160%] text-[#000000] transition duration-300 hover:text-[#C99024]'>
                                {data.header.navigations.media}
                            </h2>
                            <nav className='grid grid-cols-1'>
                                {data.header.allMedia.types.map(
                                    (type, index) => (
                                        <a
                                            href={type.path}
                                            key={index}
                                            className='text-sm leading-[250%] text-[#000000] transition duration-300 hover:text-[#C99024]'
                                        >
                                            {type.name}
                                        </a>
                                    ),
                                )}
                            </nav>
                        </div>
                        <div className='flex flex-col'>
                            <a
                                href='#'
                                className='text-[22px] font-bold leading-[160%] text-[#000000] transition duration-300 hover:text-[#C99024]'
                            >
                                {data.header.navigations.service}
                            </a>
                            <a
                                href='#'
                                className='text-[22px] font-bold leading-[230%] text-[#000000] transition duration-300 hover:text-[#C99024]'
                            >
                                {data.header.navigations.repair}
                            </a>
                            <a
                                href='#'
                                className='text-[22px] font-bold leading-[230%] text-[#000000] transition duration-300 hover:text-[#C99024]'
                            >
                                {data.header.navigations.news}
                            </a>
                            <a
                                href='#'
                                className='text-[22px] font-bold leading-[230%] text-[#000000] transition duration-300 hover:text-[#C99024]'
                            >
                                {data.header.navigations.contacts}
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
export default Header;
