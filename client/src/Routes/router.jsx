import Home from "../Pages/Home/Home";
import Main from "../Layout/Main/Main";
import { createBrowserRouter } from "react-router-dom";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import MyCart from "../Pages/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import Dashbord from "../Layout/Dashbord/Dashbord";
import Cart from "../Pages/Dashbord/Cart/Cart";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <Menu />
            },
            {
                path: '/order',
                element: <Order />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: '/signIn',
                element: <SignIn />
            },
            {
                path: '/myCart',
                element: <PrivateRoute><MyCart /></PrivateRoute>
            }
        ],
    },
    {
        path: '/dashbord',
        element: <Dashbord />,
        children: [
            {
                path: 'cart',
                element: <PrivateRoute><Cart /></PrivateRoute>
            }
        ]
    }
]);