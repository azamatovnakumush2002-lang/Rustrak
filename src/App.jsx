import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/layout";
import AboutPage from "./pages/aboutPage";
// import ShortnieAvtomobile from "./pages/avtoCategory/shtornieAvtomobile";
import ContactsPage from "./pages/contacts";
import HomePage from "./pages/homePage";
import NewsPage from "./pages/news/news";
import NewsDetail from "./pages/news/newsDetailsPage";
import RepairPage from "./pages/repairPage";
import ServicePage from "./pages/servicePage";
import FotogalleryPage from "./pages/fotogalleryPage";
import VideoPage from "./pages/videoPage";
import PromoPage from "./pages/promoPage";
import InfoMaterial from "./pages/infoPage";
import SertificatePage from "./pages/sertificatePage";
import OtzivPage from "./pages/otzivPage";
import KreditPage from "./pages/kreditPage";
import VacanciesPage from "./pages/vacanciesPage";
import SuppliersPage from "./pages/suppliersPage";
import ProductionPage from "./pages/productionPage";
import PartnersPage from "./pages/partnersPage";
import CategoryPage from "./pages/avtoCategory/categoryPage";
import CategoryDetailPage from "./pages/avtoCategory/categoryDetail";
import BasketPage from "./pages/basketPage";
import LikesPage from "./pages/likesPage";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='/category/:slug' element={<CategoryPage />} />
                    <Route
                        path='/category/:slug/:id'
                        element={<CategoryDetailPage />}
                    />
                    <Route path='about' element={<AboutPage />} />
                    <Route path='partners' element={<PartnersPage />} />
                    <Route path='production' element={<ProductionPage />} />
                    <Route path='suppliers' element={<SuppliersPage />} />
                    <Route path='otziv' element={<OtzivPage />} />
                    <Route path='sertificate' element={<SertificatePage />} />
                    <Route path='vacancies' element={<VacanciesPage />} />
                    <Route path='leasing' element={<KreditPage />} />
                    <Route path='fotogallery' element={<FotogalleryPage />} />
                    <Route path='video' element={<VideoPage />} />
                    <Route path='promo' element={<PromoPage />} />
                    <Route path='info' element={<InfoMaterial />} />
                    <Route path='service' element={<ServicePage />} />
                    <Route path='contact' element={<ContactsPage />} />
                    <Route path='repair' element={<RepairPage />} />
                    <Route path='/news' element={<NewsPage />} />
                    <Route path='/news/:path' element={<NewsDetail />} />
                    <Route path='/basket' element={<BasketPage />} />
                    <Route path='/liked' element={<LikesPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
