import {IUser} from "../models/IUser.ts";
import {useNavigate} from "react-router";
import {FC} from "react";

interface UserComponentProps {
    user: IUser
}

export const UserComponent:FC<UserComponentProps> = ({user}: UserComponentProps) => {
    const navigation = useNavigate()

    const onButtonClickNavigate = () => {
        navigation(`/users/${user.id}/carts`)
    }

    return (
        <div>
            {user.username}
            <button className="border-2" onClick={onButtonClickNavigate}>Click me</button>
        </div>
    );
};