import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetSingleProductListQuery } from "./features/api/apiSlice";

function Navbar() {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate("/");
    };
    const handlerView = () => {
        navigate("/view");
    };
    const {
        data: productList,
        isError,
        isLoading,
    } = useGetSingleProductListQuery();
    const handlerAdd = () => {
        navigate("/add-product");
    };
    return (
        <div className="navbar">
            <nav className="nav">
                <div className="logo" onClick={handleHome}>
                    <span className="text">Product Img</span>
                </div>
                <div className="add-p" onClick={handlerAdd}>
                    <span>add product</span>
                </div>
                <div className="icon" onClick={handlerView}>
                    <i className="fa-solid fa-cart-shopping">
                        {!isLoading && !isError && (
                            <span className="count">{productList?.length}</span>
                        )}
                    </i>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
