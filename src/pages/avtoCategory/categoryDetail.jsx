import { useParams } from "react-router-dom";
import { useLanguage } from "../../context/languageContext";
import Breadcrumb from "../../components/breadcrum/breadcrum";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useEffect, useState } from "react";
import { PoluchitButtonModal } from "../../components/modals/modals";
import { useCart } from "../../context/cardContext";
const CategoryDetailPage = () => {
    const { slug, id } = useParams();
    const { data } = useLanguage();
    const { addToCart, isInCart } = useCart();
    const [modalOpen, setModalOpen] = useState(false);
    const categories = data.CategoryProducts.categoryCards;
    const allProducts = Object.values(data.CategoryProducts.Products).flat();
    const category = categories.find((item) => item.slug === slug);
    const product = allProducts.find(
        (item) => item.id === Number(id) && item.categoryId === category.id,
    );
    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]');

        return () => {
            Fancybox.unbind('[data-fancybox="gallery"]');
        };
    }, []);
    return (
        <div className='mx-auto max-w-360 px-5'>
            <Breadcrumb />
            <div className='mb-5'>
                <h1 className='text-xl sm:text-2xl lg:text-4xl font-medium my-3 md:my-8'>
                    {product.name}
                </h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10'>
                    <div className='col-span-1 lg:col-span-2'>
                        {product.images && product.images.length > 0 && (
                            <div>
                                <a
                                    data-fancybox='gallery'
                                    href={product.images[0]}
                                >
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                        className='w-full h-auto object-cover rounded-2xl'
                                    />
                                </a>
                                <div className='hidden'>
                                    {product.images.slice(1).map((item, i) => (
                                        <a
                                            key={i}
                                            data-fancybox='gallery'
                                            href={item}
                                        >
                                            <img src={item} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='col-span-1'>
                        <p className='text-xl sm:text-3xl font-medium mx-auto text-center'>
                            {data.CategoryProducts.sena}
                        </p>
                        <div className='flex gap-5 my-5'>
                            <button
                                onClick={() => addToCart(product)}
                                className='w-full py-3 border border-amber-300 hover:text-amber-300 hover:bg-white bg-amber-300 rounded text-sm transition duration-300'
                            >
                                {isInCart(product)
                                    ? "В корзине"
                                    : data.CategoryProducts.dobavitButton}
                            </button>
                            <button
                                onClick={() => setModalOpen(true)}
                                className='w-full py-3 border border-amber-300 bg-white hover:bg-amber-300 rounded text-sm transition duration-300'
                            >
                                {data.CategoryProducts.poluchitButton}
                            </button>

                            {modalOpen && (
                                <PoluchitButtonModal
                                    onClose={() => setModalOpen(false)}
                                />
                            )}
                        </div>
                        <div className='hidden lg:block'>
                            {product.trucInfo?.map((item, i) => (
                                <div
                                    key={i}
                                    className='flex justify-between items-center mb-2'
                                >
                                    <p className='text-base'>{item.title}</p>
                                    <p className=''>{item.value}</p>
                                </div>
                            ))}
                            <a
                                href=''
                                className='text-left text-gray-400 underline text-sm'
                            >
                                {product.allCharacter}
                            </a>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div>
                        <img
                            src={product?.drawingImage}
                            className='w-full h-auto object-cover'
                        />
                    </div>
                    <h1 className='text-4xl font-medium my-10'>
                        {product?.characterTitle}
                    </h1>

                    <table className='w-full table-fixed border-collapse'>
                        <thead>
                            <tr>
                                <th
                                    colSpan='2'
                                    className='border border-amber-400 py-4 text-center font-semibold bg-amber-400 text-sm sm:text-base'
                                >
                                    {product.name}
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {product?.character?.map((item, i) => (
                                <tr key={i}>
                                    <td className='border border-gray-300 px-4 py-3 text-sm md:text-base'>
                                        {item.title}
                                    </td>

                                    <td className='border border-gray-300 px-4 py-3 text-center text-sm md:text-base'>
                                        {item.value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default CategoryDetailPage;
