import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
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
        // category: "catalog",
        // category: "Каталог",
        partners: "Партнёры",
        service: "Сервис и гарантии",
        info: "Информационные материалы",
        promo: "Рекламные материалы",
        video: "Видео",
        fotogallery: "Фотогалерея",
        leasing: "Кредит и лизинг",
        vacancies: "Вакансии",
        sertificate: "Сертификаты",
        suppliers: "Поставщикам и партнёрам",
        otziv: "Отзывы и рекомендательные письма партнёров ООО «Рустрак»",
        production: "Производство",
    };

    const parts = path.split("/").filter(Boolean);

    return (
        <div className='flex items-center gap-2 text-sm'>
            <Link to='/' className='text-gray-400'>
                Главная
            </Link>

            {parts.map((part, index) => {
                const isLast = index === parts.length - 1;

                const currentPath = "/" + parts.slice(0, index + 1).join("/");

                const name = names[part] || part;

                return (
                    <div
                        key={currentPath}
                        className='flex items-center gap-2 text-gray-400'
                    >
                        <span>/</span>

                        {isLast ? (
                            <span>{name}</span>
                        ) : (
                            <Link to={currentPath} className='text-gray-400'>
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
