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
import AllUsers from "../Layout/Dashbord/Pages/AllUsers/AllUsers";
import AddItem from "../Layout/Dashbord/Pages/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Layout/Dashbord/Pages/ManageItems/ManageItems";
import UpdateItem from "../Layout/Dashbord/Pages/UpdateItem/UpdateItem";
import Payment from "../Layout/Dashbord/Pages/Payment/Payment";
import PaymentHistory from "../Layout/Dashbord/Pages/PaymentHistory/PaymentHistory";

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
            },
            {
                path: 'users',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: 'addItem',
                element: <AdminRoute><AddItem /></AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItems /></AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute><UpdateItem /></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path: 'payment',
                element: <Payment />
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory />
            }
        ]
    }
]);