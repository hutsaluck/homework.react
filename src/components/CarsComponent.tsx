import {useEffect, useState} from "react";
import {ICar} from "../models/ICar.ts";
import {getCarsWithPagination} from "../services/api.service.ts";
import {CarComponent} from "./CarComponent.tsx";
import {useSearchParams} from "react-router";

export const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([])
    const [searchParams] = useSearchParams({page: '1'})
    const currentPage = Number(searchParams.get('page') || 1)

    useEffect(() => {
        getCarsWithPagination(currentPage).then(cars => setCars(cars))
    }, [currentPage]);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Car List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cars.map(car => <CarComponent key={car.id} car={car}/>)}
            </div>
        </div>
    );
};