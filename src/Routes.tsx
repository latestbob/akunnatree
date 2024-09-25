import React from 'react';
import { Router } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Forgot from './pages/Forgot';
import MyLinks from './pages/dashboard/MyLinks';
import Analytics from './pages/dashboard/Analytics';
import Review from './pages/Review';
import ReviewTwo from './pages/ReviewTwo';
import Confirm from './pages/Confirm';

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
    },


    {
        id:4,
        path:'/forgot',
        exact:true,
        auth:false,
        component: Forgot,
        pageTile:"Forgot Password"
    },

    {
        id:5,
        path:'/links',
        exact:true,
        auth:true,
        component: MyLinks,
        pageTile:"My Links"
    },

    {
        id:5,
        path:'/analytics',
        exact:true,
        auth:true,
        component: Analytics,
        pageTile:"Analytics"
    },

    {
        id:6,
        path:'/pluto-review',
        exact:true,
        auth:false,
        component: Review,
        pageTile:"Pluto Beauty Supplies Review"
    },

    {
        id:7,
        path:'/pluto-review-next',
        exact:true,
        auth:false,
        component: ReviewTwo,
        pageTile:"Pluto Beauty Supplies Review"
    },

    {
        id:8,
        path:'/confirmation',
        exact:true,
        auth:false,
        component: Confirm,
        pageTile:"Pluto Beauty Supplies Review"
    },
];

export default routes;