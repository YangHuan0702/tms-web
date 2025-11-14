import { useRoutes } from "react-router-dom";
import Login from '@/pages/login'
import RouterNotFound from '@/pages/error/404'
import Main from '@/pages/main'


export default function AppRouter() {
    let navRouters = [
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
            path : '*',
            element: <RouterNotFound />
        }
    ];
    const element = useRoutes(navRouters)
    return element
}

