import {Link} from "react-router";

export const HomeComponent = () => {
    return (
        <main className="flex items-center justify-center h-screen bg-gray-100">
            <div className="max-w-xl text-center space-y-8 p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-gray-800">
                    Welcome to Cars API Demo
                </h1>
                <p className="text-lg text-gray-600">
                    This application demonstrates working with a car API, including fetching data and creating new car objects. Below is the information about the available features:
                </p>
                <div className="text-left space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-700">Available Pages:</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>
                            <strong>CarsPage:</strong> Displays all cars fetched from the API. Each car includes minimal information such as the model, year, and brand.
                        </li>
                        <li>
                            <strong>CreateCarPage:</strong> A form for adding a new car to the database. The form includes validation to ensure compliance with API requirements.
                        </li>
                    </ul>
                </div>
                <div className="space-x-4">
                    <Link
                        to="/cars"
                        className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300"
                    >
                        Go to Cars Page
                    </Link>
                    <Link
                        to="/cars/create"
                        className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg transition duration-300"
                    >
                        Create a New Car
                    </Link>
                </div>
            </div>
        </main>
    );
};