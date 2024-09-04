import React from 'react';
import { Router } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';


const routes = [
    {
        id:1,
        path:'/',
        exact:true,
        auth:false,
        component:Home,
        pageTile:"Akunna's Linktree"
    },

    {
        id:2,
        path:'/login',
        exact:true,
        auth:false,
        component:Login,
        pageTile:"Login to Dashboard"
    }
];

export default routes;