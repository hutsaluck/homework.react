import {Link} from "react-router";

export const MenuComponent = () => {
    return (
        <div className="flex justify-between items-center my-5 mx-5">
            <Link to="/users" className="text-2xl font-extrabold uppercase text-white text-shadow-style">
                Logo
            </Link>
            <ul className="flex list-none gap-5">
                <li><Link to="/users" className="capitalize text-black no-underline hover:text-gray-500">Users</Link></li>
                <li><Link to="/posts" className="capitalize text-black no-underline hover:text-gray-500">Posts</Link></li>
            </ul>
        </div>

    );
};