import {useForm} from "react-hook-form";
import {ICar} from "../models/ICar.ts";
import {addCar} from "../services/api.service.ts";
import {CarValidator} from "../validators/CarValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {useState} from "react";

export const CreateCarComponent = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(CarValidator)
    })

    const [message, setMessage] = useState<boolean>(false)

    const createHandler = (data: ICar) => {
        addCar(data)
        setMessage(true)
        reset()
        setTimeout(() => {
            setMessage(false)
        }, 3000)
    }

    return (
        <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Do you want to build your own car?</h2>
            <p className="text-center text-lg mb-6">Just do it!</p>
            <form className="grid gap-5" onSubmit={handleSubmit(createHandler)}>
                <label htmlFor="brand" className="relative">
                    <p className="bg-white py-0 font-light absolute px-1 -top-3 left-4 bg-primary-color text-text-color-button">Name</p>
                    <input
                        type="text"
                        {...register('brand')}
                        id="brand"
                        placeholder="Brand"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                    {errors.brand && <p className="text-red-500 text-sm mt-2">{errors.brand.message}</p>}
                </label>

                <label htmlFor="price" className="relative">
                    <p className="bg-white py-0 font-light absolute px-1 -top-3 left-4 bg-primary-color text-text-color-button">Price</p>
                    <input
                        type="number"
                        {...register('price')}
                        id="price"
                        placeholder="Price"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                    {errors.price && <p className="text-red-500 text-sm mt-2">{errors.price.message}</p>}
                </label>

                <label htmlFor="year" className="relative">
                    <p className="bg-white py-0 font-light absolute px-1 -top-3 left-4 bg-primary-color">Year</p>
                    <input
                        type="year"
                        {...register('year')}
                        id="year"
                        placeholder="Year"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                    {errors.year && <p className="text-red-500 text-sm mt-2">{errors.year.message}</p>}
                </label>

                <input
                    type="submit"
                    value="Create car"
                    disabled={!isValid}
                    className="px-10 py-4 uppercase bg-gray-300 rounded-lg cursor-pointer hover:bg-gray-400 disabled:cursor-not-allowed disabled:bg-gray-200"
                />
            </form>
            {message &&
                <p className="text-center text-sm mt-4 text-gray-500">
                    Car was created!
                </p>}
        </div>

    );
};