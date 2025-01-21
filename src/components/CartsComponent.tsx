import {CartComponent} from "./CartComponent.tsx";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {ICart} from "../models/ICart.ts";
import {ICartResponseModel} from "../models/ICartResponseModel.ts";
import {cartService} from "../services/api.service.ts";

export const CartsComponent = () => {
    const {id} = useParams()
    const [carts, setCarts] = useState<ICart[]>([])

    useEffect(() => {
        if(!id) return
        cartService.getAllCarts(+id).then(({carts}:ICartResponseModel) => setCarts(carts))
    }, [id]);

    return (
        <div>
            {carts.map((cart: ICart) => (<CartComponent cart={cart} key={cart.id}/>))}
        </div>
    );
};