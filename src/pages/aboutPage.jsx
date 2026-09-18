import { useLanguage } from "../context/languageContext";

const AboutPage = () => {
    const { data } = useLanguage();

    return (
        <>
            <div>
                <div className='flex gap-1 mx-auto px-5 max-w-360'>
                    <a href='' className='text-gray-400 text-[14px]'>
                        Главная /
                    </a>
                    <a href='' className='text-gray-400 text-[14px]'>
                        О нас
                    </a>
                </div>
                <div className='bg-[url(/aboutPagePhotos/about-company.jpg)] object-cover bg-center bg-no-repeat h-70 md:h-110 mb-100'>
                    <div className='mx-auto px-5 max-w-360'>
                        <h1 className='text-white text-[24px] font-medium max-w-130 pt-23'>
                            {data.aboutPageHero.heroTitle}
                        </h1>
                        <div className='md:mt-[12%] lg:mt-[8%] ml-5'>
                            <img
                                src='/aboutPagePhotos/Union.svg'
                                className='max-w-32 h-38'
                            />
                            <div className='sticky mt-[-12%] lg:mt-[-10%] ml-4'>
                                <h1 className='text-[64px] font-semibold leading-[100%]'>
                                    17+
                                    <span className='text-[20px] font-normal block leading-[100%] text-left max-w-28'>
                                        {data.aboutPageHero.yellowTitle}
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AboutPage;
