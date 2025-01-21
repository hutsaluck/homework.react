import {useNavigate} from "react-router";

export const CartEmptyComponent = () => {
    const navigation = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-2xl font-semibold text-gray-600">Your cart is empty</h1>
            <p className="text-gray-500 mt-2">
                Looks like you haven't added anything to your cart yet.
            </p>
            <button
                className="mt-5 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                onClick={() => navigation(`/users`)}
            >
                Go Shopping
            </button>
        </div>
    );
};