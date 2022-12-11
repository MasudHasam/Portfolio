import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../Layout/Main';
import AboutMe from '../Pages/AboutMe';
import Blog from '../Pages/Blog';
import ContactMe from '../Pages/ContactMe';
import GiveTake from '../Pages/GiveTake';
import Home from '../Pages/Home';
import HungryShef from '../Pages/HungryShef';
import LearnTech from '../Pages/LearnTech';

const Route = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/giveTake',
                    element: <GiveTake></GiveTake>
                },
                {
                    path: '/hungryChef',
                    element: <HungryShef></HungryShef>
                },
                {
                    path: '/learnTech',
                    element: <LearnTech></LearnTech>
                },
                {
                    path: '/aboutme',
                    element: <AboutMe></AboutMe>
                },
                {
                    path: '/blog',
                    element: <Blog></Blog>
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