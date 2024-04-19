import { Outlet, useLocation } from "react-router-dom"
import Footer from "../../Components/Footer/Footer"
import Nav from "../../Components/Nav/Nav"

const Main = () => {
    const location = useLocation();

    return (
        <div>
            {location.pathname.includes('signUp') || <Nav />}
            <div className="min-h-[68vh]">
                <Outlet />
            </div>
            {location.pathname.includes('signUp') || <Footer />}
        </div>
    )
}

export default Main