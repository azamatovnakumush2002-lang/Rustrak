import Breadcrumb from "../components/breadcrum/breadcrum";
import PageTitle from "../components/pageTitle/pageTitle";
import { useLanguage } from "../context/languageContext";

const InfoMaterial = () => {
    PageTitle(
        "Информационные материалы | Производитель автоспецтехники РусТрак",
    );
    const { data } = useLanguage();
    return (
        <>
            <div className='mx-auto max-w-360 px-5'>
                <Breadcrumb />
                <h1 className='font-medium text-3xl my-7'>
                    {data.infoMaterialPage.pageTitle}
                </h1>
            </div>
        </>
    );
};
export default InfoMaterial;
