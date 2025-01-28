import {useFetch} from "../hook/useFetch.tsx";

export const UsersComponent = () => {
    const users =
        useFetch<{id: number, username: string}[]>(`https://jsonplaceholder.typicode.com/users`, [])

    return (
        <div className="space-y-4 p-6 bg-gray-50 rounded-lg shadow-md">
            {users && users.map(user => (
                <div key={user.id} className="p-4 bg-white rounded-lg shadow hover:bg-gray-100 transition duration-300">
                    <span className="font-semibold text-gray-700">{user.id}: </span>
                    <span className="text-blue-600">{user.username}</span>
                </div>
            ))}
        </div>

    )
};