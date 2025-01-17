import {IUser} from "../models/IUser.ts";

type IUserProps = {
    user: IUser;
}
export const UserComponent = ({user}:IUserProps) => {
    const {username} = user
    return (
        <div>
            {username}
        </div>
    );
};