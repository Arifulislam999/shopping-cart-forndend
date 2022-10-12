import { useState } from "react";
import {
    useProductDeleteMutation,
    useQuantatyIncrementMutation,
} from "./features/api/apiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function ViewCart({ product, count }) {
    const { productIdNo, image, id, title, description, price, quntaty } =
        product;
    const [qnty, setQnty] = useState(quntaty);
    const navigate = useNavigate();
    const [productDelete] = useProductDeleteMutation();
    const handlerDelete = () => {
        productDelete(id);
        toast.warn("your product is deleted...!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "dark",
        });
    };
    const [quantatyIncrement] = useQuantatyIncrementMutation();

    // debounce function
    function debounce(fn, deley) {
        let timeOutId;
        return function () {
            if (timeOutId) {
                clearTimeout(timeOutId);
            }
            timeOutId = setTimeout(() => {
                fn();
            }, deley);
        };
    }

    const handlerIncrement = debounce(() => {
        setQnty((prev) => prev + 1);
        quantatyIncrement({ id, data: { quntaty: qnty + 1 } });
    }, 500);

    const handlerDecrement = debounce(() => {
        if (quntaty >= 2) {
            setQnty((prev) => prev - 1);
            quantatyIncrement({ id, data: { quntaty: qnty - 1 } });
        }
    }, 500);

    const handlerView = () => {
        navigate(`/cart/${productIdNo}`);
    };

    return (
        <div className="box">
            <div className="product-item">
                <div>
                    <h3 className="product-id">NO:{count + 1}</h3>
                    <button className="delete" onClick={handlerDelete}>
                        Delete
                    </button>
                </div>
                <img
                    className="p-i p-k"
                    src={image}
                    alt="pictures"
                    onClick={handlerView}
                />
                <h3 className="p-t p-tt">{title}</h3>
                <p className="p-d p-dd">{description}</p>
                <div className="n-p n-pp">
                    <span>
                        <i
                            className="fa-solid fa-plus"
                            onClick={handlerIncrement}
                        ></i>
                    </span>
                    <h3 className="pa">{quntaty}</h3>
                    <span>
                        <i
                            className="fa-solid fa-minus"
                            onClick={handlerDecrement}
                        ></i>
                    </span>
                </div>
                <h3 className="product-no">{(price * quntaty).toFixed(3)} $</h3>
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
                theme="dark"
            />
        </div>
    );
}

export default ViewCart;
