import { createBrowserRouter }  from "react-router-dom";
import Main from "../layouts/Main";
import React from "react";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Registration/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: 'details/:id',
                element: <PrivateRoutes><ChefDetails/></PrivateRoutes>
            },
            {
                path: 'blog',
                element: <Blog/>
            },
            {
                path: '*',
                element: <ErrorPage/>
            }
        ]
    }
])

export default router;