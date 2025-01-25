import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {PaginationLayout} from "../layouts/PaginationLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {CarsPage} from "../pages/CarsPage.tsx";
import {CreateCarPage} from "../pages/CreateCarPage.tsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: '',
                element: <HomePage />,
            },
            {
                path: 'cars/create',
                element: <CreateCarPage/>
            },
            {
                path: '',
                element: <PaginationLayout/>,
                children: [
                    {
                        path: 'cars',
                        element: <CarsPage/>
                    },
                ]
            }
        ]
    }
])