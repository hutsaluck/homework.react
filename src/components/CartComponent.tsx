import {ICart} from "../models/ICart.ts";
import {ProductsComponent} from "./ProductsComponent.tsx";

interface CartComponentProps {
    cart: ICart
}

export const CartComponent = ({cart}: CartComponentProps) => {
    const {total, totalProducts, products} = cart
    return (
        <div>
            <div className="grid grid-cols-2 gap-5 justify-center items-start mx-5">
                <p className="font-semibold">Total: ${total}</p>
                <p className="font-semibold">Quantity products: {totalProducts}</p>
            </div>
            <ProductsComponent products={products}/>
        </div>
    );
};