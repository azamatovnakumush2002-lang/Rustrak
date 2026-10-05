import { p } from "motion/react-client";
import { useLanguage } from "../context/languageContext";
import Breadcrumb from "../components/breadcrum/breadcrum";

const SuppliersPage = () => {
    const { data } = useLanguage();

    return (
        <>
            <div className='mx-auto max-w-360 px-5'>
                <Breadcrumb />
                <div>
                    <h1 className='font-medium text-xl md:text-2xl lg:text-3xl my-5 sm:my-8'>
                        {data.suppliersPage.pageTitle}
                    </h1>
                    <h1 className='font-medium text-xl  md:text-2xl lg:text-3xl'>
                        {data.suppliersPage.title1}
                    </h1>
                    <p className='text-base sm:text-[18px] my-5 sm:my-8'>
                        {data.suppliersPage.text1}
                    </p>
                    <p className='text-base sm:text-[18px] mb-5 sm:mb-8'>
                        {data.suppliersPage.text2}
                    </p>
                    <p className='text-base sm:text-[18px] mb-5 sm:mb-8'>
                        {data.suppliersPage.text3}
                    </p>
                    <div>
                        <div className='mb-1 flex gap-5'>
                            <div className='w-8 h-8 rounded-full bg-amber-400 font-medium text-xl justify-center text-center'>
                                1
                            </div>
                            <p className='text-base sm:text-[18px]'>
                                {data.suppliersPage.num1}
                            </p>
                        </div>
                        <div className='mb-1 flex gap-5'>
                            <div className='w-8 h-8 rounded-full bg-amber-400 font-medium text-xl justify-center text-center'>
                                2
                            </div>
                            <p className='text-base sm:text-[18px]'>
                                {data.suppliersPage.num2}
                            </p>
                        </div>
                        <div className='mb-1 flex gap-5'>
                            <div className='w-8 h-8 rounded-full bg-amber-400 font-medium text-xl justify-center text-center shrink-0'>
                                3
                            </div>
                            <p className='text-base sm:text-[18px]'>
                                {data.suppliersPage.num3}
                            </p>
                        </div>
                        <div className='mb-1 flex gap-5'>
                            <div className='w-8 h-8 rounded-full bg-amber-400 font-medium text-xl justify-center text-center'>
                                4
                            </div>
                            <p className='text-base sm:text-[18px]'>
                                {data.suppliersPage.num4}
                            </p>
                        </div>
                    </div>
                    <p className='text-base sm:text-[18px] my-5 sm:my-8'>
                        {data.suppliersPage.text4}
                    </p>
                    {data.suppliersPage.texts.map((item, i) => (
                        <p key={i} className='text-base sm:text-[18px]'>
                            {item}
                        </p>
                    ))}

                    <p className='text-base sm:text-[18px] my-5 sm:my-8'>
                        {data.suppliersPage.text5}
                    </p>
                </div>
            </div>
        </>
    );
};
export default SuppliersPage;
