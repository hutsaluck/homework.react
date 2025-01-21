import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.ts";
import {UserComponent} from "./UserComponent.tsx";
import {IUserResponseModel} from "../models/IUserResponseModel.ts";
import {userService} from "../services/api.service.ts";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        userService.getAllUsers().then(({users}: IUserResponseModel) => setUsers(users))
    }, [])

    return (
        <div className="grid grid-cols-5 gap-5 justify-center items-start mx-5">
            {users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};