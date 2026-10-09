import { useState } from "react";
import { FooterButton } from "../buttons/buttons";
import { useLanguage } from "../../context/languageContext";
import { ZakazatZvonokModal } from "../modals/modals";

const Footer = () => {
    const [aboutOpen, setAboutOpen] = useState(true);
    const [mediaOpen, setMediaOpen] = useState(false);
    const [zakazatOpen, setZakazatOpen] = useState(false);
    const { data } = useLanguage();

    return (
        <div className='bg-black py-10 md:py-16'>
            <div className='mx-auto max-w-360 px-5'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-white font-medium'>
                            {data.footer.footerTel}
                        </h1>
                        <h1 className='text-white font-medium'>
                            {data.footer.footerEmail}
                        </h1>
                        <h1 className='text-white mb-5 font-medium'>
                            {data.footer.footerLocation}
                        </h1>
                        <FooterButton onClick={() => setZakazatOpen(true)} />
                        {zakazatOpen && (
                            <ZakazatZvonokModal
                                onClose={() => setZakazatOpen(false)}
                            />
                        )}
                        <div className='w-auto h-auto my-5'>
                            <img
                                src='/homePagePhotos/footer-qr.svg'
                                className='max-w-44 object-contain'
                            />
                        </div>
                        {/* hidden section */}
                        <div className='bg-transparent block md:hidden'>
                            <div className='mb-2'>
                                <button
                                    onClick={() => setAboutOpen(!aboutOpen)}
                                    className='flex items-center gap-3 text-base font-medium text-white'
                                >
                                    {data.footer.footerMedia.aboutUs}
                                    <img
                                        src='/homePagePhotos/footer-strelka.svg'
                                        className={`w-3 h-3 transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""} `}
                                    />
                                </button>
                                {aboutOpen && (
                                    <nav className='mt-3 flex flex-col gap-2'>
                                        {data.footer.footerMedia.allBoutUs.map(
                                            (item, index) => (
                                                <a
                                                    key={index}
                                                    href={item.path}
                                                    className='text-sm font-medium text-[#BDBDBD] hover:text-[#C99024]'
                                                >
                                                    {item.name}
                                                </a>
                                            ),
                                        )}
                                    </nav>
                                )}
                            </div>
                            <div>
                                <button
                                    onClick={() => setMediaOpen(!mediaOpen)}
                                    className='flex items-center gap-3 text-base font-medium text-white'
                                >
                                    {data.footer.footerMedia.media}
                                    <img
                                        src='/homePagePhotos/footer-strelka.svg'
                                        className={`w-3 h-3 transition-transform duration-300 ${mediaOpen ? "rotate-180" : ""} `}
                                    />
                                </button>
                                {mediaOpen && (
                                    <nav className='mt-3 flex flex-col gap-2'>
                                        {data.footer.footerMedia.allMedia.map(
                                            (item, index) => (
                                                <a
                                                    key={index}
                                                    href={item.path}
                                                    className='text-sm font-medium text-[#BDBDBD] hover:text-[#C99024]'
                                                >
                                                    {item.name}
                                                </a>
                                            ),
                                        )}
                                    </nav>
                                )}
                            </div>
                        </div>
                        {/* hidden section end */}
                    </div>
                    <div className='hidden md:block'>
                        <h2 className='text-base font-medium mb-5 text-[#FFFFFF] transition duration-300 hover:text-[#C99024]'>
                            {data.footer.footerMedia.aboutUs}
                        </h2>
                        <div className='flex gap-20'>
                            <nav className='grid grid-cols-1'>
                                {data.footer.footerMedia.allBoutUs
                                    .slice(0, 7)
                                    .map((index, i) => (
                                        <a
                                            href={index.path}
                                            key={i}
                                            className='text-sm text-[#FFFFFF] leading-[180%] transition duration-300 hover:text-[#C99024]'
                                        >
                                            {index.name}
                                        </a>
                                    ))}
                            </nav>
                            <nav className='grid grid-cols-1'>
                                {data.footer.footerMedia.allBoutUs
                                    .slice(7, 13)
                                    .map((index, i) => (
                                        <a
                                            href={index.path}
                                            key={i}
                                            className='text-sm text-[#FFFFFF] leading-[180%] transition duration-300 hover:text-[#C99024]'
                                        >
                                            {index.name}
                                        </a>
                                    ))}
                            </nav>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <h2 className='text-base font-medium mb-5 text-[#FFFFFF] transition duration-300 hover:text-[#C99024]'>
                            {data.footer.footerMedia.media}
                        </h2>
                        <nav className='grid grid-cols-1'>
                            {data.footer.footerMedia.allMedia.map(
                                (index, i) => (
                                    <a
                                        href={index.path}
                                        key={i}
                                        className='text-sm leading-[180%] text-[#FFFFFF] transition duration-300 hover:text-[#C99024]'
                                    >
                                        {index.name}
                                    </a>
                                ),
                            )}
                        </nav>
                    </div>
                </div>
                <div className='flex flex-col-reverse md:grid md:grid-cols-2 md:items-start'>
                    <div>
                        <p className='font-semibold text-[#FFFFFF] text-[14px] leading-[100%] opacity-[0.4]'>
                            {data.footer.footerFirstText}
                        </p>
                        <p className='font-semibold text-[#FFFFFF] text-[14px] max-w-112.5 leading-[120%] opacity-[0.4]'>
                            {data.footer.footerSecondText}
                        </p>
                    </div>
                    {/* social mediaaaaaaaaaaaaaaaaaaaaaaa */}
                    <div className='flex gap-2 items-center my-8 md:my-0'>
                        <a href='' target='_blank'>
                            <img
                                src='/homePagePhotos/max-messenger-sign-logo.svg'
                                className='w-8 h-8 object-contain'
                            />
                        </a>
                        <a href=''>
                            <img
                                src='/homePagePhotos/telegram.svg'
                                className='w-8 h-8 object-contain'
                            />
                        </a>
                        <a href=''>
                            <img
                                src='/homePagePhotos/VK_com-logo.svg'
                                className='w-8 h-8 object-contain'
                            />
                        </a>
                        <a href=''>
                            <img
                                src='/homePagePhotos/Rutube_icon.png'
                                className='w-8 h-8 object-contain'
                            />
                        </a>
                        <a href=''>
                            <img
                                src='/homePagePhotos/YouTube_full-color_icon.png'
                                className='w-8 h-8 object-contain'
                            />
                        </a>
                        <a href=''>
                            <img
                                src='/homePagePhotos/Yandex_Zen_logo_icon.png'
                                className='w-8 h-8 object-contain'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
