import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />

        </>
    )
};

export default DefaultLayout;