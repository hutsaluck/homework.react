import {IProduct} from "../models/IProduct.ts";

interface ProductComponentProps {
    product: IProduct
}

export const ProductComponent = ({product}: ProductComponentProps) => {
    console.log(product);
    const {
        title,
        thumbnail,
        price,
        quantity,
        total
    } = product

    return (
        <div className="group border border-gray-300 rounded-2xl grid justify-center items-center cursor-pointer transition-shadow duration-500 hover:shadow-lg">
            <div className="overflow-hidden rounded-t-2xl">
                <img
                    src={thumbnail}
                    alt="product"
                    className="w-full rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <div className="grid grid-cols-2 gap-5 items-center">
                    <p className="font-semibold">${price} × {quantity}</p>
                    <p className="bg-gray-300 rounded-2xl py-1 px-3 text-white text-center">${total}</p>
                </div>
            </div>
        </div>

    );
};