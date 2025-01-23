import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PaginationLayout} from "../layouts/PaginationLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: '', // Головна сторінка
                element: <HomePage />,
            },
            {
                path: '',
                element: <PaginationLayout/>,
                children: [
                    {
                        path: 'users',
                        element: <UsersPage/>
                    },
                ]
            }
        ]
    }
])