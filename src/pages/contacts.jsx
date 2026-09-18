import { useLanguage } from "../context/languageContext";

const ContactsPage = () => {
    const { data } = useLanguage();

    return (
        <>
            <div className='mx-auto px-5 max-w-360'>
                <div className='flex gap-1'>
                    <a href='/' className='text-gray-400 text-[14px]'>
                        Главная /
                    </a>
                    <a href='contact' className='text-gray-400 text-[14px]'>
                        Контакты
                    </a>
                </div>
                {/* hero */}
                <h1 className='font-medium text-[20px] sm:text-[24px] md:text-3xl mb-4 md:my-7'>
                    {data.contactPage.contactHero.title}
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-3 mb-10 md:mb-20'>
                    <div className='col-span-1 bg-[#FEC80B] max-h-87.5 p-5'>
                        <p className='text-base sm:text-[18px] max-w-60'>
                            {data.contactPage.contactHero.location}
                        </p>
                        <div className='my-5 md:my-1 lg:my-10'>
                            <p className='font-bold text-base sm:text-[18px]'>
                                {data.contactPage.contactHero.call1}
                                <span className='font-normal cursor-pointer'>
                                    8 (831) 235-25-51
                                </span>
                            </p>
                            <p className='font-bold text-base sm:text-[18px]'>
                                {data.contactPage.contactHero.call2}
                                <span className='font-normal cursor-pointer'>
                                    8 (800)-511-05-25
                                </span>
                            </p>
                            <p className='font-bold text-base sm:text-[18px]'>
                                {data.contactPage.contactHero.pochta}
                                <span className='font-normal cursor-pointer'>
                                    info+7605@rtrf.ru
                                </span>
                            </p>
                        </div>
                        <p className='font-bold text-base sm:text-[18px]'>
                            {data.contactPage.contactHero.call3}
                            <span className='font-normal cursor-pointer'>
                                8(831) 225-00-55
                            </span>
                        </p>
                    </div>

                    <div className='col-span-1 md:col-span-2'>
                        <iframe
                            src='https://yandex.uz/map-widget/v1/?from=mapframe&ll=43.821337%2C56.345010&mode=usermaps&source=mapframe&um=constructor%3A5ae836d5720676e2f0d32162afa86c3b03a8a1a0359f4732fa442277488cf68a&utm_source=mapframe&z=9.8'
                            frameborder='1'
                            allowfullscreen='true'
                            className='w-full cursor-pointer h-50 md:h-87.5'
                        ></iframe>
                    </div>
                </div>
                {/* testimonials */}
                <div className='mb-10'>
                    <h1 className='font-medium text-3xl mb-6'>
                        {data.contactPage.employees}
                    </h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        {data.contactPage.testimonials.map((item) => (
                            <div className='border border-gray-200 rounded-lg p-5 items-center text-center justify-center bg-[#ffffff] hover:shadow-[0_0_15px_rgba(0,0,0,0.15)] transition duration-300'>
                                <div>
                                    <img
                                        src={item.image}
                                        className='max-w-40 max-h-40 object-contain rounded-full mx-auto'
                                    />
                                </div>
                                <h1 className='font-medium text-2xl'>
                                    {item.name}
                                </h1>
                                <p className='text-[#A2A2A2]'>{item.job}</p>
                                <div className='flex flex-col mt-10 sm:mt-20'>
                                    <span className='cursor-pointer'>
                                        {item.phone}
                                    </span>
                                    <span className='cursor-pointer'>
                                        {item.media}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default ContactsPage;
