import {Link} from "react-router";

export const MenuComponent = () => {
    return (
        <div className="flex justify-between items-center my-5 mx-5">
            <Link to="/" className="text-2xl font-extrabold uppercase text-bloack">
                Logo
            </Link>
            <ul className="flex list-none gap-5">
                <li><Link to="/users" className="capitalize text-black no-underline hover:text-gray-500">Users</Link></li>
                <li><Link to="/posts" className="capitalize text-black no-underline hover:text-gray-500">Posts</Link></li>
                <li><Link to="/comments" className="capitalize text-black no-underline hover:text-gray-500">Comments</Link></li>
                <li><Link to="/complex" className="capitalize text-black no-underline hover:text-gray-500">Complex</Link></li>
            </ul>
        </div>

    );
};