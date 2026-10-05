import Breadcrumb from "../components/breadcrum/breadcrum";
import { useLanguage } from "../context/languageContext";

const InfoMaterial = () => {
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
