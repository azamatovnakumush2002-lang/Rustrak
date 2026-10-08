import { useEffect, useState } from "react";
import allImages from "../../assets/icons/icons";
import {
    BasketButton,
    HeaderCallButton,
    HeartButton,
    LanguageButton,
} from "../buttons/buttons";
import { useLanguage } from "../../context/languageContext";
import { Link, useNavigate } from "react-router-dom";
import { ZakazatZvonokModal } from "../modals/modals";
function Header() {
    const { data } = useLanguage();
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [catalogOpen, setCatalogOpen] = useState(null);
    const [workingTimeOpen, setWorkingTimeOpen] = useState(false);
    const [categoryDropdown, setCategoryDropdown] = useState(null);
    const [aboutDropdown, setAboutDropdown] = useState(null);
    const [mediaDropdown, setMediaDropdown] = useState(null);
    const [zakazatOpen, setZakazatOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 130);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    // Catalog / About Us / Mediani ochodo`n
    const handleCatalogOpen = (name) => {
        setCatalogOpen((prev) => (prev === name ? null : name));
    };
    const handleCategoryDropdown = (name) => {
        setCategoryDropdown((prev) => (prev === name ? null : name));
    };
    const handleAboutDropdown = (name) => {
        setAboutDropdown((prev) => (prev === name ? null : name));
    };
    const handleMediaDropdown = (name) => {
        setMediaDropdown((prev) => (prev === name ? null : name));
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
                            <span className='max-w-16 text-[8px] font-bold leading-[100%]'>
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
                            <HeaderCallButton
                                onClick={() => setZakazatOpen(true)}
                            />
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
                    <div className='relative flex items-center gap-4 py-4'>
                        <button
                            onClick={() => handleCatalogOpen("catalog")}
                            className='flex items-center gap-2 rounded bg-primary px-4 py-2 text-base transition hover:bg-[#eeb600]'
                        >
                            <span className='text-xl leading-none'>
                                {catalogOpen === "catalog" ? "✕" : "☰"}
                            </span>

                            <span className='hidden sm:block  text-base font-normal'>
                                {data.header.navigations.katalogBtn}
                            </span>
                        </button>
                        <nav className='hidden lg:flex items-center gap-4 '>
                            <button
                                onClick={() => handleCatalogOpen("aboutUs")}
                                className='flex items-center gap-1 whitespace-nowrap text-base transition duration-300 hover:text-[#C99024]'
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

                    <div className='flex items-center gap-3'>
                        <div className='hidden min-[440px]:flex'>
                            <input
                                type='text'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && search.trim()) {
                                        navigate(`/search?query=${search}`);
                                    }
                                }}
                                className='border border-yellow-400 rounded-full py-1 px-4'
                            />

                            <img
                                src={allImages.headerImages.searchImg}
                                className='-ml-6 cursor-pointer'
                                onClick={() => {
                                    if (search.trim()) {
                                        navigate(`/search?query=${search}`);
                                    }
                                }}
                            />
                        </div>
                        <LanguageButton />
                        <BasketButton />
                        <HeartButton />
                    </div>
                </div>
            </div>
            {/* scroll headerrrrrrrrrrrrrrrrrrrrrrrrrrrrr */}
            <div
                className={`fixed top-0 z-50 w-full bg-white shadow-sm ${scrolled ? "block opacity-100" : "hidden opacity-0"}`}
            >
                <div className='mx-auto flex max-w-360 items-center justify-between px-5 py-2'>
                    <div className='flex items-center gap-2'>
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
                                href='home'
                                className='font-extrabold text-base mt-1'
                            >
                                РУСТРАК
                            </a>
                            <br />
                            <span className='whitespace-nowrap text-[13px] text-[#333333]'>
                                8 800-511-05-25
                            </span>
                        </div>
                        <nav className='items-center gap-4 hidden xl:flex'>
                            <button
                                onClick={() => handleCatalogOpen("aboutUs")}
                                className='flex items-center gap-1 text-base transition duration-300 hover:text-[#C99024]'
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
                                className='flex items-center gap-1 text-base transition duration-300 hover:text-[#C99024]'
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
                    <div className='flex  justify-center items-center gap-4'>
                        <div className='hidden min-[480px]:flex items-center'>
                            <input
                                type='text'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && search.trim()) {
                                        navigate(`/search?query=${search}`);
                                    }
                                }}
                                className='border border-yellow-400 rounded-full py-1 pl-4 '
                            />
                            <img
                                src={allImages.headerImages.searchImg}
                                className='-ml-7 cursor-pointer'
                                onClick={() => {
                                    if (search.trim()) {
                                        navigate(`/search?query=${search}`);
                                    }
                                }}
                            />
                        </div>
                        <LanguageButton />
                        <BasketButton />
                        <HeartButton />
                        <HeaderCallButton
                            onClick={() => setZakazatOpen(true)}
                        />
                    </div>
                </div>
            </div>
            {/* catalog modalllllllllllllllllllllllllll */}
            {catalogOpen && (
                <div className='absolute left-0 top-full z-40 w-full bg-[#F9F9F9] shadow-md'>
                    <div className='mx-auto max-w-360 px-5 py-7'>
                        <div className='hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8'>
                            <div>
                                <h2 className='text-[22px] font-bold leading-[160%]'>
                                    {data.header.allCategories.title}
                                </h2>
                                <nav className='grid grid-cols-1'>
                                    {data.header.allCategories.types.map(
                                        (type, i) => (
                                            <Link
                                                to={type.path}
                                                key={i}
                                                className='text-sm leading-[250%] transition duration-300 hover:text-[#C99024]'
                                            >
                                                {type.name}
                                            </Link>
                                        ),
                                    )}
                                </nav>
                            </div>
                            <div>
                                <h2 className='text-[22px] font-bold leading-[160%]'>
                                    {data.header.navigations.aboutUs}
                                </h2>
                                <nav className='grid grid-cols-1'>
                                    {data.header.allAboutUs.types.map(
                                        (type, index) => (
                                            <Link
                                                to={type.path}
                                                key={index}
                                                className='text-sm leading-[250%] transition duration-300 hover:text-[#C99024]'
                                            >
                                                {type.name}
                                            </Link>
                                        ),
                                    )}
                                </nav>
                            </div>
                            <div>
                                <h2 className='text-[22px] font-bold leading-[160%]'>
                                    {data.header.navigations.media}
                                </h2>
                                <nav className='grid grid-cols-1'>
                                    {data.header.allMedia.types.map(
                                        (type, index) => (
                                            <Link
                                                to={type.path}
                                                key={index}
                                                className='text-sm leading-[250%] transition duration-300 hover:text-[#C99024]'
                                            >
                                                {type.name}
                                            </Link>
                                        ),
                                    )}
                                </nav>
                            </div>
                            <div className='flex flex-col gap-5'>
                                {data.header.navigations.media1.map(
                                    (item, i) => (
                                        <Link
                                            key={i}
                                            to={item.path}
                                            className='text-[18px] font-bold transition duration-300 hover:text-[#C99024]'
                                        >
                                            {item.name}
                                        </Link>
                                    ),
                                )}
                            </div>
                        </div>
                        <div className='sm:hidden flex flex-col'>
                            <div>
                                <button
                                    type='button'
                                    onClick={() =>
                                        handleCategoryDropdown("categories")
                                    }
                                    className='flex items-center gap-3 text-[22px] font-bold'
                                >
                                    {data.header.allCategories.title}
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='24'
                                        height='24'
                                        viewBox='0 0 1024 1024'
                                        className={`transition duration-300 ${categoryDropdown ? "rotate-180" : ""} `}
                                    >
                                        <path
                                            d='M0 0h1024v1024H0z'
                                            fill='none'
                                        />
                                        <path
                                            fill='#f5c206'
                                            d='M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35'
                                        />
                                    </svg>
                                </button>
                                {categoryDropdown === "categories" && (
                                    <nav className='flex flex-col pb-4'>
                                        {data.header.allCategories.types.map(
                                            (type, i) => (
                                                <Link
                                                    key={i}
                                                    to={type.path}
                                                    className='text-sm leading-[250%] transition duration-300 hover:text-[#C99024]'
                                                >
                                                    {type.name}
                                                </Link>
                                            ),
                                        )}
                                    </nav>
                                )}
                            </div>
                            <div>
                                <button
                                    type='button'
                                    onClick={() => handleAboutDropdown("about")}
                                    className='flex items-center gap-3 text-[22px] font-bold'
                                >
                                    {data.header.navigations.aboutUs}
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='24'
                                        height='24'
                                        viewBox='0 0 1024 1024'
                                        className={`transition duration-300 ${aboutDropdown ? "rotate-180" : ""} `}
                                    >
                                        <path
                                            d='M0 0h1024v1024H0z'
                                            fill='none'
                                        />
                                        <path
                                            fill='#f5c206'
                                            d='M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35'
                                        />
                                    </svg>
                                </button>
                                {aboutDropdown === "about" && (
                                    <nav className='flex flex-col pb-4'>
                                        {data.header.allAboutUs.types.map(
                                            (type, i) => (
                                                <Link
                                                    key={i}
                                                    to={type.path}
                                                    className='text-sm leading-[250%] transition duration-300 hover:text-[#C99024]'
                                                >
                                                    {type.name}
                                                </Link>
                                            ),
                                        )}
                                    </nav>
                                )}
                            </div>
                            <div>
                                <button
                                    type='button'
                                    onClick={() => handleMediaDropdown("media")}
                                    className='flex items-center gap-3 text-[22px] font-bold'
                                >
                                    {data.header.navigations.media}
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='24'
                                        height='24'
                                        viewBox='0 0 1024 1024'
                                        className={`transition duration-300 ${mediaDropdown ? "rotate-180" : ""} `}
                                    >
                                        <path
                                            d='M0 0h1024v1024H0z'
                                            fill='none'
                                        />
                                        <path
                                            fill='#f5c206'
                                            d='M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35'
                                        />
                                    </svg>
                                </button>
                                {mediaDropdown === "media" && (
                                    <nav className='flex flex-col pb-4'>
                                        {data.header.allMedia.types.map(
                                            (type, i) => (
                                                <Link
                                                    key={i}
                                                    to={type.path}
                                                    className='text-sm leading-[250%] transition duration-300 hover:text-[#C99024]'
                                                >
                                                    {type.name}
                                                </Link>
                                            ),
                                        )}
                                    </nav>
                                )}
                            </div>
                            <div className='flex flex-col gap-2 sm:py-5'>
                                {data.header.navigations.media1.map(
                                    (item, i) => (
                                        <Link
                                            key={i}
                                            to={item.path}
                                            className='text-[22px] font-bold transition duration-300 hover:text-[#C99024]'
                                        >
                                            {item.name}
                                        </Link>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {zakazatOpen && (
                <ZakazatZvonokModal onClose={() => setZakazatOpen(false)} />
            )}
        </header>
    );
}
export default Header;
