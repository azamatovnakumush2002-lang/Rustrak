import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";
import QuestionsSection from "../components/questions/questions";

export function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <QuestionsSection />
            <Footer />
        </>
    );
}
