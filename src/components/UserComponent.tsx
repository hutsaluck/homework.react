import {IUser} from "../models/IUser.ts";
import {useNavigate} from "react-router";
import {FC} from "react";

interface UserComponentProps {
    user: IUser
}

export const UserComponent: FC<UserComponentProps> = ({user}: UserComponentProps) => {
    const {id, firstName, lastName, username, image} = user
    const navigation = useNavigate()

    const onButtonClickNavigate = () => {
        navigation(`/users/${id}/carts`)
    }

    return (
        <div
            className="my-10 border border-gray-300 rounded-2xl grid justify-center items-center cursor-pointer transition-shadow duration-500 hover:shadow-lg">
            <div className="overflow-hidden rounded-t-2xl h-64">
                <img
                    src={image}
                    alt={username}
                    className="w-full h-full object-contain rounded-t-2xl transition-transform duration-500 hover:scale-110"
                />
            </div>
            <div className="p-4">
                <h3 className="text-2xl font-semibold text-center mb-2">
                    {firstName} {lastName}
                </h3>
                <button
                    className="bg-gray-300 rounded-lg border-none outline-none py-2 px-4 uppercase shadow-md shadow-gray-400/30 w-full hover:shadow-lg hover:shadow-gray-400/40"
                    onClick={onButtonClickNavigate}>
                    Click me
                </button>
            </div>
        </div>
    );
};