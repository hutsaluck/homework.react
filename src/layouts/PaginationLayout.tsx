import {PaginationComponent} from "../components/PaginationComponent.tsx";
import {Outlet, useLocation} from "react-router";
import {useEffect, useState} from "react";
import {getCars} from "../services/api.service.ts";
import {ICar} from "../models/ICar.ts";

export const PaginationLayout = () => {
    const [totalPages, setTotalPages] = useState<number>(1)
    const location = useLocation();
    const limit = 30

    useEffect(() => {
        if (location.pathname.includes('cars')) {
            getCars().then((cars: ICar[]) => setTotalPages(cars.length / limit))
        }
    }, []);

    return (
        <div>
            <Outlet/>
            <PaginationComponent totalPages={Math.ceil(totalPages)}/>
        </div>
    );
};