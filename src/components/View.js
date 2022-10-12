import React from "react";
import { useGetSingleProductListQuery } from "./features/api/apiSlice";
import Loader from "./Loader";
import ViewCart from "./ViewCart";

function View() {
    const {
        data: productList,
        isLoading,
        isError,
    } = useGetSingleProductListQuery();
    let content = null;
    let totalQnty = 0;
    let totalAmount = 0;
    if (isLoading) {
        content = <Loader />;
    }
    if (!isLoading && isError) {
        content = <h1>There was an occured...</h1>;
    }
    if (!isLoading && !isError && productList?.length === 0) {
        content = <h1>You have no selected product item...</h1>;
    }
    if (!isLoading && !isError && productList?.length > 0) {
        content = productList.map((product, index) => {
            return (
                <ViewCart key={product.id} product={product} count={index} />
            );
        });
    }
    if (!isLoading && !isError && productList?.length > 0) {
        productList.map((product) => {
            return (
                (totalQnty += product.quntaty),
                (totalAmount += product.quntaty * product.price)
            );
        });
    }
    return (
        <div className="cart-views">
            <div className="image">
                <h4 className="product-id">Product No.</h4>
                <h4 className="p-i">Product Image</h4>
                <h4 className="p-t">Product Title</h4>
                <h4 className="p-d">Product Description</h4>
                <h4 className="n-p">No Of Product</h4>
                <h4 className="product-no">Total Price</h4>
            </div>
            {content}
            <div className="total-a">
                <h3 className="tq">
                    Total Quantaty
                    <br /> {totalQnty}
                </h3>
                <h3 className="ta">
                    Total Amount
                    <br /> {totalAmount.toFixed(3)}
                </h3>
            </div>
        </div>
    );
}

export default View;
