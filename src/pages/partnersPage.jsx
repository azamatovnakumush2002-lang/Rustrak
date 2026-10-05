import { div } from "motion/react-client";
import { useLanguage } from "../context/languageContext";
import Breadcrumb from "../components/breadcrum/breadcrum";

const PartnersPage = () => {
    const { data } = useLanguage();

    return (
        <>
            <div className='mx-auto max-w-360 px-5'>
                <Breadcrumb />
                <div className='mb-5'>
                    <h1 className='font-medium text-2xl sm:text-3xl my-5 md:my-7 lg:my-10'>
                        {data.partnersPage.pageTitle}
                    </h1>
                    <h2 className='font-medium text-xl sm:text-2xl my-5'>
                        {data.partnersPage.title1}
                    </h2>
                    <p className='text-base sm:text-[18px] my-5'>
                        {data.partnersPage.text1}
                    </p>
                    <h2 className='font-medium text-xl sm:text-2xl mt-10'>
                        {data.partnersPage.title2}
                    </h2>
                    <p className='text-base sm:text-[18px] my-5'>
                        {data.partnersPage.text2}
                    </p>

                    {data.partnersPage.info.map((item, i) => (
                        <div key={i}>
                            <h1 className='font-medium text-xl sm:text-2xl mt-10'>
                                {item.title}
                            </h1>
                            <p className='text-base sm:text-[18px] my-3'>
                                {item.text}
                            </p>
                            <a
                                href={item.link}
                                className='text-gray-400 text-base sm:text-[18px]'
                            >
                                {item.link}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default PartnersPage;
