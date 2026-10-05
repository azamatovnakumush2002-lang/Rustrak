import Breadcrumb from "../components/breadcrum/breadcrum";
import { useLanguage } from "../context/languageContext";

const ProductionPage = () => {
    const { data } = useLanguage();

    return (
        <>
            <div className='mx-auto max-w-360 px-5'>
                <Breadcrumb />
                <div>
                    <h1 className='font-medium text-xl sm:text-3xl my-5 sm:my-8'>
                        {data.productionPage.pageTitle}
                    </h1>
                    <div>
                        <img
                            src='/productionPhotos/production-1.jpg'
                            className='w-full object-cover'
                        />
                    </div>

                    <p className='text-base sm:text-[18px] my-5 sm:my-10'>
                        {data.productionPage.text1}
                    </p>
                    <div>
                        <img
                            src='/productionPhotos/production-2.jpg'
                            className='w-auto object-cover'
                        />
                    </div>

                    <p className='text-base sm:text-[18px] my-5 sm:my-10'>
                        {data.productionPage.text2}
                    </p>
                    <h1 className='font-medium text-xl '>
                        {data.productionPage.title1}
                    </h1>
                    <p className='text-base sm:text-[18px] my-5'>
                        {data.productionPage.text3}
                    </p>

                    <div className='flex lg:grid lg:grid-cols-4 gap-5 my-5 sm:my-10 overflow-x-auto lg:overflow-visible h-50 md:h-auto'>
                        <img src='/productionPhotos/production-3.jpg' />
                        <img src='/productionPhotos/production-4.jpg' />
                        <img src='/productionPhotos/production-5.jpg' />
                        <img src='/productionPhotos/production-6.jpg' />
                    </div>

                    <h1 className='font-medium text-xl '>
                        {data.productionPage.title2}
                    </h1>
                    <p className='text-base sm:text-[18px] my-2 sm:my-5'>
                        {data.productionPage.text4}
                    </p>
                    <div className='my-5 sm:my-10 lg:my-16'>
                        <img
                            src='/productionPhotos/production-7.jpg'
                            className='w-auto object-cover'
                        />
                    </div>
                    <h1 className='font-medium text-xl '>
                        {data.productionPage.title3}
                    </h1>
                    <p className='text-base sm:text-[18px] my-2 sm:my-5'>
                        {data.productionPage.text5}
                    </p>
                    <p className='text-base sm:text-[18px] my-5 sm:my-10'>
                        {data.productionPage.text6}
                    </p>
                </div>
            </div>
        </>
    );
};
export default ProductionPage;
