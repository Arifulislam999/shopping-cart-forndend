import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    useGetProductListMutation,
    useUpdateProductMutation,
} from "./features/api/apiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function CartProductPage({ product }) {
    const { id: urlId } = useParams();
    const { id, title, price, description, category, image } = product || {};
    const [getProductList] = useGetProductListMutation();
    const [updateProduct] = useUpdateProductMutation();

    // product description
    const [popUp, setPopUp] = useState(false);
    const [title_1, setTitle] = useState(title);
    const [description_1, setDescription] = useState(description);
    const [category_1, setCategory] = useState(category);
    const [image_1, setImage] = useState(image);
    const [price_1, setPrice] = useState(price);

    const navigate = useNavigate();
    const handlerHome = () => {
        navigate("/");
    };
    const handlerAdd = () => {
        getProductList({
            title,
            price,
            description,
            image,
            category,
            quntaty: 1,
            productIdNo: id,
        });
        toast.success("🦄 Your Product Add successfully...!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };
    const handlerPopUp = () => {
        setPopUp(true);
    };
    const resetData = () => {
        setTitle("");
        setDescription("");
        setCategory("");
        setPrice("");
        setImage("");
    };
    const handlerUpdate = (e) => {
        e.preventDefault();
        updateProduct({
            id: urlId,
            data: {
                title: title_1,
                description: description_1,
                category: category_1,
                image: image_1,
                price: price_1,
            },
        });
        // updateSingleProductList({
        //     id,
        //     data: {
        //         title: title_1,
        //         description: description_1,
        //         category: category_1,
        //         image: image_1,
        //         price: price_1,
        //     },
        // });
        resetData();
        navigate("/");
    };
    const handlerBlur = () => {
        setPopUp(false);
    };
    return (
        <div className="cart-view-inner">
            <img src={image} alt="shirt" />
            <div className="desc">
                <h3>{title}</h3>
                <p className="de">{description}</p>
                <p className="pric">Unit Price: {price}$ </p>
                <p className="catea">Category: {category}</p>
                <p className="star">star Rating/parcentage</p>
                <div className="btn-1">
                    <button className="add" onClick={handlerAdd}>
                        Add to Cart
                    </button>
                    <button className="view" onClick={handlerHome}>
                        Back to Home
                    </button>
                    <button className="add ab" onClick={handlerPopUp}>
                        Update Product
                    </button>
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
            </div>
            {popUp && <div className="all-blur" onClick={handlerBlur}></div>}
            {/* pop UP  */}
            {popUp && (
                <div className="popUp">
                    <h3 className="up">Update Your Product Item</h3>
                    <form onSubmit={handlerUpdate}>
                        <div className="add-pop">
                            <div className=" label-pop">
                                <label htmlFor="title">
                                    Enter Your Product Title:
                                </label>
                                <br />
                                <br />
                                <label htmlFor="description">
                                    Enter Your Product Description:
                                </label>
                                <br />
                                <br />
                                <label htmlFor="category">
                                    Enter Your Product Category:
                                </label>
                                <br />
                                <br />
                                <label htmlFor="category">
                                    Enter Your Product Image:
                                </label>
                                <br />
                                <br />
                                <label htmlFor="category">
                                    Enter Your Product Price:
                                </label>
                            </div>
                            <br />
                            <div className=" popinput">
                                <input
                                    required
                                    id="title"
                                    type="text"
                                    placeholder="Enter product title..."
                                    value={title_1}
                                    onChange={(e) => setTitle(e.target.value)}
                                />

                                <input
                                    required
                                    id="Description"
                                    type="text"
                                    placeholder="Enter your description..."
                                    value={description_1}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                />

                                <input
                                    required
                                    id="category"
                                    type="text"
                                    placeholder="Enter your category..."
                                    value={category_1}
                                    onChange={(e) =>
                                        setCategory(e.target.value)
                                    }
                                />
                                <input
                                    required
                                    id="image"
                                    type="text"
                                    placeholder="Enter your image link..."
                                    value={image_1}
                                    onChange={(e) => setImage(e.target.value)}
                                />
                                <input
                                    required
                                    id="price"
                                    type="text"
                                    placeholder="Enter your product pirce..."
                                    value={price_1}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="btn-add-p">
                            <button type="submit">Update Product</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default CartProductPage;
