import { Link } from "react-router-dom";
import { useLanguage } from "../../context/languageContext";
import Breadcrumb from "../../components/breadcrum/breadcrum";

const CatalogPage = () => {
    const { data } = useLanguage();

    return (
        <div className='mx-auto max-w-360 px-5'>
            <Breadcrumb />
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10'>
                {data.CategoryProducts.categoryCards.map((card, index) => (
                    <div
                        key={index}
                        onClick={() => navigate(`/category/${card.path}`)}
                    >
                        <Link to={`/catalog/${card.path}`}>
                            <div className='border border-[#EBEBEB] rounded-lg p-3 sm:p-5 h-auto  transition-all duration-300 hover:border-amber-400 hover:shadow-[0_8px_25px_rgba(245,158,11,0.15)]  cursor-pointer'>
                                <h3 className='font-normal text-[18px] sm:text-2xl overflow-hidden truncate'>
                                    {card.name}
                                </h3>
                                <img
                                    src={card.image}
                                    className='w-auto h-auto object-contain'
                                />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default CatalogPage;
