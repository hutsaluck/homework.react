import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.ts";
import {UserComponent} from "./UserComponent.tsx";
import {useSearchParams} from "react-router";
import {PaginationComponent} from "./PaginationComponent.tsx";

interface UsersComponentProps {
    users: IUser[]
}

export const UsersComponent = ({users}: UsersComponentProps) => {
    const [searchParams] = useSearchParams({page: '1'})
    const [usersPage, setUsersPage] = useState<IUser[]>([])
    const [totalPages, setTotalPages] = useState<number>(1)

    useEffect(() => {
        const limit = 4
        const page: number = Number(searchParams.get('page') || 1)
        const skip: number = limit * page - limit
        setUsersPage(users.slice(skip, skip + limit))

        const total = users.length
        setTotalPages(total / limit)
    }, [searchParams, users])

    return (
        <>
            <div className="grid grid-cols-4 gap-10 justify-center items-start mx-5">
                {usersPage.map((user: IUser) => <UserComponent key={user.id} user={user}/>)}
            </div>
            <PaginationComponent totalPages={Math.ceil(totalPages)}/>
        </>
    );
};