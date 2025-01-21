import {IProduct} from "../models/IProduct.ts";
import {ProductComponent} from "./ProductComponent.tsx";

interface ProductsComponentProps {
    products: IProduct[]
}

export const ProductsComponent = ({products}: ProductsComponentProps) => {
    return (
        <div className="grid grid-cols-5 gap-5 justify-center items-start mx-5">
            {products.map((product: IProduct) => <ProductComponent key={product.id} product={product}/>)}
        </div>
    );
};