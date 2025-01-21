import {UsersComponent} from "../components/UsersComponent.tsx";
import {Outlet} from "react-router";

export const UsersPage = () => {
    return (
        <div className="grid grid-cols-5 gap-5 justify-center items-start mx-5">
            <div className="col-span-4">
                <UsersComponent/>
            </div>
            <div className="col-span-1">
                <Outlet/>
            </div>
        </div>
    );
};