import {Link} from "react-router";

export const HomeComponent = () => {
    return (
        <main className="flex items-center justify-center h-screen bg-gray-100">
            <div className="max-w-xl text-center space-y-8 p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-gray-800">
                    Welcome to Routing Demo
                </h1>
                <p className="text-lg text-gray-600">
                    This application uses routing to navigate between pages. Below is the information about available routes:
                </p>
                <div className="text-left space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-700">Available Pages:</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>
                            <strong>UsersPage:</strong> Displays users fetched from{' '}
                            <a
                                href="https://dummyjson.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                dummyjson.com
                            </a>
                            . You can navigate between pages using "Next" and "Previous" buttons.
                        </li>
                    </ul>
                </div>
                <Link
                    to="/users"
                    className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 hover:shadow-lg transition duration-300"
                >
                    Go to Users Page
                </Link>
            </div>
        </main>
    );
};