import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.ts";
import {UserComponent} from "./UserComponent.tsx";
import {IUserResponseModel} from "../models/IUserResponseModel.ts";
import {userService} from "../services/api.service.ts";
import {useSearchParams} from "react-router";

export const UsersComponent = () => {
    const [searchParams] = useSearchParams({page: '1'})
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        const currentPage = searchParams.get('page') || 1
        userService.getAllUsersWithPagination(+currentPage).then(({users}: IUserResponseModel) => setUsers(users))
    }, [searchParams])

    return (
        <div className="grid grid-cols-5 gap-5 justify-center items-start mx-5">
            {users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};