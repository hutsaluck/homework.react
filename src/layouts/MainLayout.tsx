import {Outlet} from "react-router";
import {MenuComponent} from "../components/MenuComponent.tsx";

export const MainLayout = () => {
    return (
        <>
            <MenuComponent/>
            <Outlet/>
        </>
    );
};