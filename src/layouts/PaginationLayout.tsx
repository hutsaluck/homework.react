import {PaginationComponent} from "../components/PaginationComponent.tsx";
import {Outlet, useLocation} from "react-router";
import {useEffect, useState} from "react";
import {userService} from "../services/api.service.ts";
import {IUserResponseModel} from "../models/IUserResponseModel.ts";

export const PaginationLayout = () => {
    const [totalPages, setTotalPages] = useState<number>(1)
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('users')) {
            userService.getAllUsers().then(({total, limit}: IUserResponseModel) => setTotalPages(total / limit))
        }
    }, []);

    return (
        <div>
            <Outlet/>
            <PaginationComponent totalPages={Math.ceil(totalPages)}/>
        </div>
    );
};