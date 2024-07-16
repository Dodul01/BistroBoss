import { Link, Outlet } from "react-router-dom"
import { FaBook, FaCalendarCheck, FaCommentAlt, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { FaBagShopping, FaCalendar } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { LiaListSolid } from "react-icons/lia";
import { IoMail, IoMenu } from "react-icons/io5";
import { TiGroup } from "react-icons/ti";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Dashbord = () => {
    const [cart] = useCart();

    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    const links = <>
        <li>
            <Link to={'/'} className="flex items-center uppercase p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                <FaHome className="text-2xl black" />
                <span className="ms-3">User Home</span>
            </Link>
        </li>
        <li>
            <Link to={'/'} className="flex items-center uppercase p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                <FaCalendar className="text-2xl black" />
                <span className="ms-3">Reservation</span>
            </Link>
        </li>
        <li>
            <Link to={'/dashbord/cart'} className="flex items-center uppercase p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                <FaShoppingCart className="text-2xl black" />
                <span className="ms-3">My Cart <span>({cart.length})</span> </span>
            </Link>
        </li>
        <li>
            <Link to={'/dashbord/paymentHistory'} className="flex items-center uppercase p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                <FaWallet className="text-2xl black" />
                <span className="ms-3">payment history</span>
            </Link>
        </li>
        <li>
            <Link to={'/dashbord/cart'} className="flex items-center uppercase p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                <FaCommentAlt className="text-2xl black" />
                <span className="ms-3">Add Review</span>
            </Link>
        </li>
        <li>
            <Link to={'/dashbord/cart'} className="flex items-center uppercase p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                <FaCalendarCheck className="text-2xl black" />
                <span className="ms-3">My Booking</span>
            </Link>
        </li>
    </>

    const adminLink = <>
        <li>
            <Link to={'/dashbord/cart'} className="flex items-center uppercase p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                <FaHome className="text-2xl black" />
                <span className="ms-3">Admin Home </span>
            </Link>
        </li>
        <li>
            <Link to={'/dashbord/addItem'} className="flex items-center uppercase p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                <ImSpoonKnife className="text-2xl black" />
                <span className="ms-3">Add Item</span>
            </Link>
        </li>
        <li>
            <Link to={'/dashbord/manageItems'} className="flex items-center uppercase p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                <LiaListSolid className="text-2xl black" />
                <span className="ms-3">Manage Items</span>
            </Link>
        </li>
        <li>
            <Link to={'/dashbord/cart'} className="flex items-center uppercase p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                <FaBook className="text-2xl black" />
                <span className="ms-3">Manage Bookings</span>
            </Link>
        </li>
        <li>
            <Link to={'/dashbord/users'} className="flex items-center uppercase p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                <TiGroup className="text-2xl black" />
                <span className="ms-3">All Users</span>
            </Link>
        </li>
    </>

    const bottomLinks = <>
        <li>
            <Link to={''} className="flex items-center uppercase p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                <FaHome className="text-2xl black" />
                <span className="ms-3">User Home</span>
            </Link>
        </li>
        <li>
            <Link to={'/menu'} className="flex items-center uppercase p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                <IoMenu className="text-2xl black" />
                <span className="ms-3">Menu</span>
            </Link>
        </li>
        <li>
            <Link to={'/order'} className="flex items-center uppercase p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                <FaBagShopping className="text-2xl black" />
                <span className="ms-3">Shop</span>
            </Link>
        </li>
        <li>
            <Link to={''} className="flex items-center uppercase p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                <IoMail className="text-2xl black" />
                <span className="ms-3">Contact</span>
            </Link>
        </li>
    </>;

    return (
        <>
            <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            {/* Side Bar */}
            <aside id="separator-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-[#D1A054]">
                    <h1 className="text-4xl font-bold font-serif">Bistro Boss</h1>
                    <h1 className="text-4xl font-bold font-serif mb-10">Resturent</h1>
                    <ul className="space-y-2 font-medium">
                        {isAdmin ? adminLink : links}
                    </ul>
                    <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-black">
                        {bottomLinks}
                    </ul>
                </div>
            </aside>
            {/* Layout */}
            <div className="p-4 sm:ml-64 bg-gray-50 h-screen">
                <Outlet />
            </div>
        </>
    )
}

export default Dashbord