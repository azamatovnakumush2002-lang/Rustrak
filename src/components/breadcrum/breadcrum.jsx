import { Link, useLocation } from "react-router-dom";

function Breadcrumb({ categoryName, productName }) {
    const location = useLocation();
    const path = location.pathname;

    const names = {
        basket: "Корзина",
        liked: "Избранное",
        about: "О нас",
        repair: "Ремонт",
        news: "Новости",
        contact: "Контакты",
        catalog: "Каталог",
        partners: "Партнёры",
        service: "Сервис и гарантии",
        promo: "Рекламные материалы",
        video: "Видео",
        fotogallery: "Фотогалерея",
        leasing: "Кредит и лизинг",
        vacancies: "Вакансии",
        sertificate: "Сертификаты",
        suppliers: "Поставщикам и партнёрам",
        production: "Производство",
    };

    const parts = path.split("/").filter(Boolean);

    return (
        <div className='flex items-center gap-2 text-sm flex-wrap'>
            <Link to='/' className='text-gray-400'>
                Главная
            </Link>

            {parts.map((part, index) => {
                const isLast = index === parts.length - 1;
                const currentPath = "/" + parts.slice(0, index + 1).join("/");

                let name = names[part] || part;

                // Kategoriya slug o'rniga kategoriya nomi
                if (parts[0] === "catalog" && index === 1 && categoryName) {
                    name = categoryName;
                }

                // Mahsulot ID o'rniga mahsulot nomi
                if (parts[0] === "catalog" && index === 2 && productName) {
                    name = productName;
                }

                return (
                    <div
                        key={currentPath}
                        className='flex items-center gap-2 text-gray-400'
                    >
                        <span>/</span>

                        {isLast ? (
                            <span>{name}</span>
                        ) : (
                            <Link
                                to={currentPath}
                                className='text-gray-400 hover:text-amber-400'
                            >
                                {name}
                            </Link>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default Breadcrumb;
