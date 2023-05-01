import { createBrowserRouter }  from "react-router-dom";
import Main from "../layouts/Main";
import React from "react";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ChefDetails from "../pages/ChefDetails/ChefDetails";

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
                path: '/about',
                element: <About/>
            },
            {
                path: 'details/:id',
                element: <ChefDetails/>
            }
        ]
    }
])

export default router;