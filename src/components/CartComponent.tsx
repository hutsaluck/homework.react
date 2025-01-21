import {ICart} from "../models/ICart.ts";

interface CartComponentProps {
    cart: ICart
}

export const CartComponent = ({cart}: CartComponentProps) => {
    return (
        <div>
            {cart.id}
        </div>
    );
};