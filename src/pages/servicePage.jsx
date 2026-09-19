import { useLanguage } from "../context/languageContext";

const ServicePage = () => {
    const { data } = useLanguage();

    return (
        <>
            <div className='mx-auto max-w-360 px-5 mb-10'>
                <div className='flex gap-1'>
                    <a href='/' className='text-gray-400 text-[14px]'>
                        Главная /
                    </a>
                    <a href='service' className='text-gray-400 text-[14px]'>
                        Сервис и гарантии
                    </a>
                </div>
                <div>
                    <h1 className='font-medium text-xl sm:text-3xl my-5'>
                        {data.servicePage.pageTitle}
                    </h1>
                    <p className='text-base sm:text-[18px] mb-5'>
                        {data.servicePage.pageText}
                    </p>
                    <div>
                        <h1 className='font-medium text-xl sm:text-2xl my-5'>
                            {data.servicePage.supportText}
                        </h1>
                        <div className='flex gap-5'>
                            <h1 className='font-medium text-3xl text-amber-400'>
                                1*
                            </h1>
                            <div>
                                <a
                                    href='https://rtrf.ru/service/upload/RKLMACTRT26.pdf'
                                    className='underline cursor-pointer outline-none text-base sm:text-[18px]'
                                >
                                    {data.servicePage.supportLink}
                                </a>
                                <span className='text-base sm:text-[18px]'>
                                    {data.servicePage.support1}
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-5 my-5'>
                            <h1 className='text-amber-400 font-medium text-3xl'>
                                2*
                            </h1>
                            <div>
                                <p className='text-base sm:text-[18px]'>
                                    {data.servicePage.support2}
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-5 my-5'>
                            <h1 className='text-amber-400 font-medium text-3xl'>
                                3*
                            </h1>
                            <div>
                                <span className='text-base sm:text-[18px]'>
                                    {data.servicePage.support3}
                                </span>
                                <a
                                    href=''
                                    className='cursor-pointer text-base  sm:text-[18px]'
                                >
                                    {data.servicePage.supportPochta}
                                </a>
                            </div>
                        </div>
                        <p className='my-5 sm:my-10 text-base sm:text-[18px]'>
                            {data.servicePage.text1}
                        </p>
                        <p className='text-base sm:text-[18px]'>
                            {data.servicePage.text2}
                            <a href='' className='cursor-pointer'>
                                {data.servicePage.supportPochta}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ServicePage;
