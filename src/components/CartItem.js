import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetProductListMutation } from "./features/api/apiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function CartItem({ product }) {
    const { id, category, image, price, title, description } = product || {};
    const [getProductList] = useGetProductListMutation();
    const navigate = useNavigate();
    const handleView = () => {
        navigate(`/cart/${id}`);
    };
    const handlerCart = () => {
        getProductList({
            category,
            image,
            price,
            title,
            description,
            quntaty: 1,
            productIdNo: id,
        });
        toast.info("add product successfully...!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "colored",
        });
    };
    const handlerView = () => {
        navigate(`/cart/${id}`);
    };
    return (
        <>
            <div className="cart">
                <div className="img">
                    <img src={image} alt={title} onClick={handlerView} />
                </div>
                <div>
                    <h4 className="title">
                        {title?.length > 50
                            ? `${title.slice(0, 50)}...`
                            : title}
                    </h4>
                    <h5 className="price"> $ {price}</h5>
                    <br />
                    <h5 className="cate">
                        {category?.length > 40
                            ? `${category.slice(0, 40)}...`
                            : category}
                    </h5>
                    <div className="btn">
                        <button className="add" onClick={handlerCart}>
                            Add To Cart
                        </button>
                        <button className="view" onClick={handleView}>
                            View To Cart
                        </button>
                    </div>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </div>
        </>
    );
}

export default CartItem;
