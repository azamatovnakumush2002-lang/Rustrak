import Breadcrumb from "../components/breadcrum/breadcrum";
import { useLanguage } from "../context/languageContext";

const KreditPage = () => {
    const { data } = useLanguage();

    return (
        <>
            <div className='mx-auto max-w-360 px-5'>
                <Breadcrumb />
                <div>
                    <h1 className='font-medium text-xl sm:text-2xl md:text-3xl my-3 sm:my-7'>
                        {data.kreditPage.pageTitle}
                    </h1>
                    <p className='text-base sm:text-[18px] sm:my-5'>
                        {data.kreditPage.text}
                    </p>
                    <h1 className='font-medium text-xl sm:text-2xl my-3 sm:mt-10 sm:mb-5'>
                        {data.kreditPage.title1}
                    </h1>
                    <p className='text-base sm:text-[18px] my-3 sm:my-5'>
                        {data.kreditPage.text1}
                    </p>
                    <h1 className='font-medium text-xl sm:text-2xl  my-3 sm:mt-10 sm:mb-5'>
                        {data.kreditPage.title2}
                    </h1>
                    <p className='text-base sm:text-[18px] my-3 sm:my-5'>
                        {data.kreditPage.text2}
                    </p>
                    <h1 className='font-medium text-xl sm:text-2xl  mt-5 sm:mt-10 mb-5'>
                        {data.kreditPage.title3}
                    </h1>
                    {data.kreditPage.titleInfo.map((item, i) => (
                        <div
                            key={i}
                            className='flex gap-2 sm:gap-5 ml-5 sm:ml-7 mb-5'
                        >
                            <span className='text-6xl sm:text-7xl font-bold text-amber-400'>
                                *
                            </span>
                            <div>
                                <h1 className='font-medium text-[18px]'>
                                    {item.title}
                                </h1>
                                <p className='text-base sm:text-[18px]'>
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                    <h1 className='font-medium text-xl sm:text-2xl  mt-7 mb-3 sm:mt-16 sm:mb-8'>
                        {data.kreditPage.title4}
                    </h1>
                    <p className='text-base sm:text-[18px] my-5'>
                        {data.kreditPage.text4}
                        <span className='cursor-pointer'>
                            {data.kreditPage.telefon}
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
};
export default KreditPage;
