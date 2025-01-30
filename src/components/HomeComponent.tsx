import {Link} from "react-router";

export const HomeComponent = () => {
    return (
        <main className="flex items-center justify-center h-screen bg-gray-100">
            <div className="max-w-xl text-center space-y-8 p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-gray-800">
                    Welcome to Complex Routing Demo
                </h1>
                <p className="text-lg text-gray-600">
                    This application demonstrates complex routing with state management for users, posts, and comments.
                </p>
                <div className="text-left space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-700">Available Pages:</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>
                            <strong>Users:</strong> Displays a list of users fetched from{' '}
                            <a
                                href="https://jsonplaceholder.typicode.com/users"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                JSONPlaceholder
                            </a>.
                        </li>
                        <li>
                            <strong>Posts:</strong> Lists posts associated with users.
                        </li>
                        <li>
                            <strong>Comments:</strong> Shows comments related to posts.
                        </li>
                        <li>
                            <strong>Complex:</strong> Displays a user, their posts, and comments, but only if previous pages have been visited or necessary data is available in the store.
                        </li>
                    </ul>
                </div>
                <div className="space-x-4">
                    <Link to="/users" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition duration-300">
                        Go to Users Page
                    </Link>
                    <Link to="/complex" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                        Go to Complex Page
                    </Link>
                </div>
            </div>
        </main>
    );
};