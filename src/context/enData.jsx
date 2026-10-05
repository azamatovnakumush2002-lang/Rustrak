export const enData = {
    allData: {
        // /////////////////////HEADER////////////////////////
        header: {
            desc: "manufacturing and sales of special-purpose vehicles",
            qrCode: "IN THE REGISTER OF RUSSIAN PRODUCTS",
            workingTime: "Working hours",
            time: "Mon-Fri: from 8:00 AM to 6:00 PM Sat-Sun: Closed",
            place: "Nizhny Novgorod, 35 Torfyanaya St.",
            forRegion: "For regions: 8 (800) 77-77-210",
            forRegion2: "Nizhny Novgorod: 8 (831) 225-00-55",
            main: "Home",

            navigations: {
                katalogBtn: "Catalog",
                aboutUs: "About Us",
                media: "Media",
                media1: [
                    {
                        name: "Service",
                        path: "/service",
                    },
                    {
                        name: "Repair",
                        path: "/repair",
                    },
                    {
                        name: "News",
                        path: "/news",
                    },
                    {
                        name: "Contacts",
                        path: "/contact",
                    },
                ],
            },

            allCategories: {
                title: "Categories",
                types: [
                    {
                        name: "Curtain-sided trucks",
                        path: "/category/shtornye-avtomobili",
                    },
                    {
                        name: "Truck-mounted cranes",
                        path: "/category/krany-manipulyatory",
                    },
                    {
                        name: "Fuel tank trucks",
                        path: "/category/avtotoplivozapravshiki",
                    },
                    {
                        name: "Truck-mounted aerial platforms",
                        path: "/category/avtogidropodyomniki",
                    },
                    {
                        name: "Tank trucks",
                        path: "/category/avtocisterny",
                    },
                    {
                        name: "Car transporters",
                        path: "/category/avtoevakuatory",
                    },
                    {
                        name: "Insulated vans",
                        path: "/category/izotermicheskie-furgony",
                    },
                    {
                        name: "Container carriers",
                        path: "/category/konteynerovozy",
                    },
                    {
                        name: "Hook loaders",
                        path: "/category/kryukovye-pogruzchiki",
                    },
                    {
                        name: "Dump trucks",
                        path: "/category/samosvaly",
                    },
                    {
                        name: "ADR EXII category vehicles",
                        path: "/category/dopog-exii",
                    },
                ],
            },

            allAboutUs: {
                types: [
                    {
                        name: "About Rustrak LLC",
                        path: "/about",
                    },
                    {
                        name: "Our Partners",
                        path: "/partners",
                    },
                    {
                        name: "Production",
                        path: "/production",
                    },
                    {
                        name: "For Suppliers and Partners",
                        path: "/suppliers",
                    },
                    {
                        name: "Reviews",
                        path: "/otziv",
                    },
                    {
                        name: "Certificates",
                        path: "/sertificate",
                    },
                    {
                        name: "Vacancies",
                        path: "/vacancies",
                    },
                    {
                        name: "Credit and Leasing",
                        path: "/leasing",
                    },
                ],
            },

            allMedia: {
                types: [
                    {
                        name: "Photo Gallery",
                        path: "/fotogallery",
                    },
                    {
                        name: "Video",
                        path: "/video",
                    },
                    {
                        name: "Promotional Materials",
                        path: "/promo",
                    },
                    {
                        name: "Information Materials",
                        path: "/info",
                    },
                ],
            },
        },
        // ///////////////////////BASKET///////////////////////
        basket: {
            pageTitle: "Shopping Cart",
            text1: "Your shopping cart is empty.",
            text2: "Use the catalog or search to find a suitable product.",
            button1: "Go to Home",
            button2: "Open Catalog",
        },
        like: {
            pageTitle: "Favorites",
            text: "Your favorites are empty.",
        },
        // /////////////////////////HOME PAGE////////////////////////////////
        homePageSwiper: {
            swiperSlide1: {
                image: "public/homePagePhotos/swiper-img.png",
                title: "Rustrak fuel trucks have been included in the Russian Industrial Products Register",
                text: "They are now available for purchase under Federal Law 44-FZ",
            },

            swiperSlide2: {
                image: "public/homePagePhotos/swiper-image.jpg",
                title: "KAMAZ 4308 curtain-sided vans available",
                text: "Superstructure dimensions: 6200x2550x2850 mm. Price: RUB 5,500,000.",
            },

            swiperSlide3: {
                image: "public/homePagePhotos/swiper-image2.webp",
                title: "Flatbed platforms with curtain mechanisms",
                text: "Manufacturing and supply of commercial vehicles and flatbed platforms, including platforms with sliding curtains and sliding roofs.",
            },

            swiperSlide4: {
                image: "public/homePagePhotos/swiper-image3.jpg",
                title: "Rustrak LLC",
                text: "Manufacturing and supply of specialized equipment and special-purpose vehicles.",
            },

            swiperSlide5: {
                image: "public/homePagePhotos/swiper-image4.jpg",
                title: "Truck-mounted cranes based on MCV/HCV trucks",
                text: "Manufacturing of vehicles equipped with truck-mounted crane units. Use of anti-shift plates, installation of a distributor control unit for rear supports, HOSSEN open profile, mounting plates at the base of the crane unit, and painting the platform in the crane color.",
            },

            swiperSlide6: {
                image: "public/homePagePhotos/swiper-image-5.jpg",
                title: "Fuel tank trucks based on MCV/HCV trucks",
                text: "Manufacturing and supply of fuel tank trucks with capacities of 8 and 6 m³. Aluminum piping, composite pressure-suction hoses, and a high-performance fuel dispensing unit.",
            },

            swiperSlide7: {
                image: "public/homePagePhotos/Rectangle 616.png",
                title: "Special-purpose vehicle manufacturing plant",
                text: "Rustrak LLC is a company engaged in the manufacturing and supply of specialized equipment and special-purpose vehicles.",
            },
        },
        CategoryProducts: {
            categoryTitle: "Categories",

            recomendTitle: "Recommended Products",

            sena: "Price upon request",

            podrobneBtn: "Learn More",

            categoryCards: [
                {
                    id: 1,
                    image: "/homePagePhotos/category-img-1.webp",
                    name: "Curtain-sided trucks",
                    slug: "shtornye-avtomobili",
                    path: "/shtornye-avtomobili",
                },
                {
                    id: 2,
                    image: "/homePagePhotos/category-img-2.webp",
                    name: "Truck-mounted cranes",
                    slug: "krany-manipulyatory",
                    path: "/krani-manipulyatori",
                },
                {
                    id: 3,
                    image: "/homePagePhotos/category-img-3.png",
                    name: "Fuel tank trucks",
                    slug: "avtotoplivozapravshiki",
                    path: "/avtotoplivozapravshiki",
                },
                {
                    id: 4,
                    image: "/homePagePhotos/category-img-4.webp",
                    name: "Truck-mounted aerial platforms",
                    slug: "avtogidropodyomniki",
                    path: "/avtogidropodyomniki",
                },
                {
                    id: 5,
                    image: "/homePagePhotos/category-img-5.webp",
                    name: "Tank trucks",
                    slug: "avtocisterny",
                    path: "/avtosisterni",
                },
                {
                    id: 6,
                    image: "/homePagePhotos/category-img-6.webp",
                    name: "Car transporters",
                    slug: "avtoevakuatory",
                    path: "/avtoevakuatori",
                },
                {
                    id: 7,
                    image: "/homePagePhotos/category-img-7.webp",
                    name: "Insulated vans",
                    slug: "izotermicheskiye-furgony",
                    path: "/izotermicheskiye-furgoni",
                },
                {
                    id: 8,
                    image: "/homePagePhotos/category-img-8.png",
                    name: "Container carriers",
                    slug: "konteynerovozy",
                    path: "/konteynerovozi",
                },
                {
                    id: 9,
                    image: "/homePagePhotos/category-img-9.webp",
                    name: "Hook loaders",
                    slug: "kryukovye-pogruzchiki",
                    path: "/kryukovie-pogruzchiki",
                },
                {
                    id: 10,
                    image: "/homePagePhotos/category-img-10.png",
                    name: "Dump trucks",
                    slug: "samosvali",
                    path: "/samosvaly",
                },
                {
                    id: 11,
                    image: "/homePagePhotos/category-img-11.webp",
                    name: "ADR EXII category vehicles",
                    slug: "dopog-exii",
                    path: "/avtomobili-DOPOG-kategoriya-EXIT",
                },
            ],
        },
    },
};
