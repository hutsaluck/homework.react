import {IUser} from "../models/IUser.ts";

type IUserProps = {
    user: IUser;
}
export const UserComponent = ({user}: IUserProps) => {
    const {firstName, lastName, username, image, age, gender, email, phone} = user
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
                <div
                    className="text-center max-h-[160px] hover:max-h-full overflow-hidden text-ellipsis transition-all duration-300">
                    <p>age: {age}</p>
                    <p>gender: {gender}</p>
                    <p>email: {email}</p>
                    <p>phone: {phone}</p>
                </div>
            </div>
        </div>
    );
};