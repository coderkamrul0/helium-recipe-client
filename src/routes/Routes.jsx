import { createBrowserRouter }  from "react-router-dom";
import Main from "../layouts/Main";
import React from "react";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

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
            }
        ]
    }
])

export default router;