import Home from "../Pages/Home/Home";
import Main from "../Layout/Main/Main";
import { createBrowserRouter } from "react-router-dom";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";

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
            }
        ]
    }
]);