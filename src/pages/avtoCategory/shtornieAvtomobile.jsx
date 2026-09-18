import { data } from "react-router-dom";
import Header from "../../components/header/header";
import { useLanguage } from "../../context/languageContext";
import allImages from "../../assets/icons/icons";
import { span } from "motion/react-client";

const ShortnieAvtomobile = () => {
    const { data } = useLanguage();

    return (
        <>
            <Header />
            <div className='bg-[#f9f9f9]'>
                <div className='mx-auto max-w-360 px-5'>
                    <div className='flex gap-6 items-center py-5'>
                        <h1 className='font-medium text-3xl whitespace-nowrap'>
                            {
                                data.CategoryProducts.Category.categoryCards[0]
                                    .name
                            }
                        </h1>
                        <div className='flex justify-between w-full'>
                            <p className='text-gray-400'>
                                {data.CategoryProducts.Products.shtornie.length}
                                {data.CategoryProducts.Marka.product}
                            </p>
                            <form action='#'>
                                <label htmlFor='' className='text-gray-400'>
                                    {" "}
                                    {data.CategoryProducts.Marka.sort}:
                                </label>
                                <input
                                    type='text'
                                    className='border border-amber-400 rounded-full'
                                />
                            </form>
                        </div>
                    </div>
                    <div className='grid grid-cols-4'>
                        {/* marka side */}
                        <div className='p-5 bg-white col-span-1'>
                            <p className='font-medium text-[18px] '>
                                {data.CategoryProducts.Marka.marka}
                            </p>
                            <div className='flex items-center my-3'>
                                <input
                                    type='text'
                                    placeholder={
                                        data.CategoryProducts.Marka.placeholder
                                    }
                                    className='border border-gray-400 p-2 rounded w-70'
                                />
                                <img
                                    src={allImages.headerImages.searchImg}
                                    className='-ml-8'
                                />
                            </div>
                            {/* marka */}
                            <div>
                                {data.CategoryProducts.Marka.type.map(
                                    (index) => (
                                        <div className='flex items-center gap-2 mb-3'>
                                            <input
                                                type='checkbox'
                                                className='w-6 h-6 hover:border-b-black accent-black '
                                            />
                                            <span>{index.name}</span>
                                        </div>
                                    ),
                                )}
                            </div>
                            {/* general massa */}
                            <p className='font-medium text-[18px] my-5'>
                                {data.CategoryProducts.Marka.generalMassa}
                            </p>
                            <div>
                                <div className='flex items-center gap-2 mb-3'>
                                    <input
                                        type='checkbox'
                                        className='w-6 h-6 hover:border-b-black accent-black '
                                    />
                                    <span>
                                        {data.CategoryProducts.Marka.before} 12
                                    </span>
                                </div>
                                <div className='flex items-center gap-2 mb-3'>
                                    <input
                                        type='checkbox'
                                        className='w-6 h-6 hover:border-b-black accent-black '
                                    />
                                    <span>
                                        {data.CategoryProducts.Marka.before} 20
                                    </span>
                                </div>
                                <div className='flex items-center gap-2 mb-3'>
                                    <input
                                        type='checkbox'
                                        className='w-6 h-6 hover:border-b-black accent-black '
                                    />
                                    <span>
                                        {data.CategoryProducts.Marka.before} 5,5
                                    </span>
                                </div>
                                <div className='flex items-center gap-2 mb-3'>
                                    <input
                                        type='checkbox'
                                        className='w-6 h-6 hover:border-b-black accent-black '
                                    />
                                    <span>
                                        {data.CategoryProducts.Marka.smthng} 20
                                    </span>
                                </div>
                            </div>
                            <button className='w-full border border-amber-400 hover:bg-white bg-amber-400 rounded py-2 hover:text-amber-400 transition duration-300'>
                                {data.CategoryProducts.Marka.button}
                            </button>
                        </div>
                        <div className='col-span-3'>{}</div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ShortnieAvtomobile;
