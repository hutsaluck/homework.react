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
        <div>
            {users.map(user => (<UserComponent user={user} key={user.id}/>))}
        </div>
    );
};