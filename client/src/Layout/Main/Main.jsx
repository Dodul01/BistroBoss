import { Outlet, useLocation } from "react-router-dom"
import Footer from "../../Components/Footer/Footer"
import Nav from "../../Components/Nav/Nav"

const Main = () => {
    const location = useLocation();

    const noHederFooter = location.pathname.includes('signUp') || location.pathname.includes('signIn')

    return (
        <div>
            {noHederFooter || <Nav />}
            <div className="min-h-[68vh]">
                <Outlet />
            </div>
            {noHederFooter || <Footer />}
        </div>
    )
}

export default Main