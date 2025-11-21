import { useRoutes } from "react-router-dom";
import Login from '@/pages/login'
import RouterNotFound from '@/pages/error/404'
import Main from '@/pages/main'
import React, { lazy } from 'react';
import path from "path";


const AccountInfo = lazy(() => import('@/components/account/account_info'))

export const routes = [
        // 导航路由
        {
            path: '/',
            element: <Main />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path : '/404',
            element: <RouterNotFound />
        }, 
        {
            path: '/account/info',
            element: <AccountInfo />
        }
    ];


export default function AppRouter() {
    const element = useRoutes(routes)
    return element
}

