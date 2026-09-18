import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/layout";
import AboutPage from "./pages/aboutPage";
import ShortnieAvtomobile from "./pages/avtoCategory/shtornieAvtomobile";
import ContactsPage from "./pages/contacts";
import HomePage from "./pages/homePage";
import NewsPage from "./pages/news/news";
import NewsDetail from "./pages/news/newsDetailsPage";
import RepairPage from "./pages/repairPage";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='about' element={<AboutPage />} />
                    <Route path='contact' element={<ContactsPage />} />
                    <Route path='repair' element={<RepairPage />} />
                    <Route path='/news' element={<NewsPage />} />
                    <Route path='/news/:path' element={<NewsDetail />} />
                    <Route
                        path='/category/:slug'
                        element={<ShortnieAvtomobile />}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
