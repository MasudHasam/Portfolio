import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../Layout/Main';
import ContactMe from '../Pages/ContactMe';
import Home from '../Pages/Home';

const Route = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                }
            ]
        }
    ])

    return (
        <RouterProvider router={router}>
        </RouterProvider>
    );
};

export default Route;