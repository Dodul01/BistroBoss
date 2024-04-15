import { Outlet } from "react-router-dom"
import Footer from "../../Components/Footer/Footer"
import Nav from "../../Components/Nav/Nav"

const Main = () => {
    return (
        <div>
            <Nav />
            <div className="min-h-[68vh]">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Main