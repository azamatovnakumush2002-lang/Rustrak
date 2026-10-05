import Breadcrumb from "../components/breadcrum/breadcrum";
import { useLanguage } from "../context/languageContext";

const PromoPage = () => {
    const { data } = useLanguage();

    return (
        <>
            <div className='mx-auto max-w-360 px-5 mb-10'>
                <Breadcrumb />
                <div>
                    <h1 className='font-medium text-2xl sm:text-3xl my-5 sm:my-7'>
                        {data.promoPage.pageTitle}
                    </h1>
                    <h1 className='font-medium text-xl sm:text-2xl mb-3'>
                        {data.promoPage.ooorustrak}
                    </h1>
                    <a
                        href='https://rtrf.ru/upload/iblock/dc7/05zscdtqwo09vw8ebd2dob3xwxa9c9wt.pdf'
                        className='text-base sm:text-[18px] underline outline-none'
                    >
                        {data.promoPage.link1}
                    </a>
                    <h1 className='font-medium text-xl sm:text-2xl mt-7 mb-3'>
                        {data.promoPage.avtotoplivozapravshiki}
                    </h1>
                    <a
                        href='https://rtrf.ru/upload/iblock/a33/aq4p9vkztmdcuz4h0knxnjbyps1hm5mx.pdf'
                        className='text-base sm:text-[18px] underline block outline-none'
                    >
                        {data.promoPage.link2}
                    </a>
                    <a
                        href='https://rtrf.ru/upload/iblock/58c/kw4j96cw2tg7ydn92e81s7a9yrdpqc8s.pdf'
                        className='text-base sm:text-[18px] underline block outline-none'
                    >
                        {data.promoPage.link3}
                    </a>
                    <a
                        href='https://rtrf.ru/upload/iblock/f48/c0qtzrjnfix9tvmknmvrcf7abaxssyau.pdf'
                        className='text-base sm:text-[18px] underline block outline-none'
                    >
                        {data.promoPage.link4}
                    </a>
                    <h1 className='font-medium text-xl sm:text-2xl mt-7 mb-3'>
                        {data.promoPage.pishevie}
                    </h1>
                    <a
                        href='https://rtrf.ru/upload/iblock/06d/nnn1put7h22qmnw702hiqrci3i986p2t.pdf'
                        className='text-base sm:text-[18px] underline block outline-none'
                    >
                        {data.promoPage.link5}
                    </a>
                    <a
                        href='https://rtrf.ru/upload/iblock/a86/hfopgqh0pfvbej4cahrcl0lftaoixsno.pdf'
                        className='text-base sm:text-[18px] underline block outline-none'
                    >
                        {data.promoPage.link6}
                    </a>
                </div>
            </div>
        </>
    );
};
export default PromoPage;
