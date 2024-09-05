import React from 'react';
import { Router } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/dashboard/Dashboard';

const routes = [
    {
        id:1,
        path:'/',
        exact:true,
        auth:false,
        component:Home,
        pageTile:"Akunna Ndubuisi - Beauty, cosmetic & personal care"
    },

    {
        id:2,
        path:'/login',
        exact:true,
        auth:false,
        component:Login,
        pageTile:"Login to Dashboard"
    },

    {
        id:3,
        path:'/dashboard',
        exact:true,
        auth:true,
        component: Dashboard,
        pageTile:"Dashboard"
    }
];

export default routes;