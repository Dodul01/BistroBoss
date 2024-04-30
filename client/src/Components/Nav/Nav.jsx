import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/Images/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProviders';
import Swal from 'sweetalert2';
import { BsCart4 } from "react-icons/bs";

const Nav = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Sign Out Successfully",
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')
            })
    }

    const link = <>
        <Link className="block py-2 px-3 text-[#D99904] rounded md:bg-transparent hover:text-[#EEFF25] transition-all md:p-0" to="/">Home</Link>
        <Link className="block py-2 px-3 text-[#D99904] rounded md:bg-transparent hover:text-[#EEFF25] transition-all md:p-0" to="/menu">Menu</Link>
        <Link className="block py-2 px-3 text-[#D99904] rounded md:bg-transparent hover:text-[#EEFF25] transition-all md:p-0" to="/order">Order Food</Link>
        <Link className="block py-2 px-3 text-[#D99904] rounded md:bg-transparent hover:text-[#EEFF25] transition-all md:p-0" to="/myCart"><BsCart4 className='text-2xl' /></Link>
        {
            user ?
                <button onClick={() => handleSignOut()} className="px-4 py-3 text-sm transition-all font-medium text-center border border-b-2 border-[#BB8506] text-white bg-[#BB8506] rounded-lg hover:bg-[#111827] hover:text-[#BB8506] focus:ring-4 focus:outline-none focus:ring-[#bb85063d]">Sign Out</button>
                :
                <Link className="block py-2 px-3 text-[#D99904] rounded md:bg-transparent hover:text-[#EEFF25] transition-all md:p-0" to="/signUp">Sign Up</Link>
        }
    </>

    return (
        <nav className="bg-[#111827] text-[#D99904] border-gray-200">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img className='h-[60px]' src={logo} alt="logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">Bistro Boss</span>
                </Link>
                <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        {link}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav