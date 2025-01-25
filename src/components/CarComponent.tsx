import {ICar} from "../models/ICar.ts";

interface CarComponentProps {
    car: ICar
}

export const CarComponent = ({car}: CarComponentProps) => {
    return (
        <div className="rounded-lg shadow-lg bg-white overflow-hidden max-w-sm">
            <img
                src={`https://bin.ua/uploads/posts/2024-06/1719315021_1.jpg`}
                alt={`${car.brand} car`}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{car.brand}</h3>
                <p className="text-gray-600">Year: {car.year}</p>
                <p className="text-gray-600">Price: ${car.price.toLocaleString()}</p>
            </div>
        </div>
    );
};