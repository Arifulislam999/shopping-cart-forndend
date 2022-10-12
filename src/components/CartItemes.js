import React from "react";
import CartItem from "./CartItem";
import { useGetProductQuery } from "./features/api/apiSlice";
import Loader from "./Loader";

function CartItemes() {
    const { data: products, isError, isLoading, error } = useGetProductQuery();

    let content = null;
    if (isLoading) {
        content = <Loader />;
    } else if (!isLoading && isError) {
        content = <h1>`There is an ${error} occured...`</h1>;
    } else if (!isLoading && !isError && products?.length === 0) {
        content = <h1>You have no Produc List...</h1>;
    } else if (!isLoading && !isError && products?.length > 0) {
        content = products.map((product) => (
            <CartItem key={product.id} product={product} />
        ));
    }
    return <div className="carts">{content}</div>;
}

export default CartItemes;
