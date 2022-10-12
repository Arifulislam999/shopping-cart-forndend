import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddProductMutation } from "./features/api/apiSlice";

function AddProduct() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [addProduct] = useAddProductMutation();
    const navigate = useNavigate();
    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log("Arif");
        addProduct({
            title,
            description,
            category,
            image,
            price,
            quantaty: 10,
            rating: {
                rate: 6.5,
                count: 653,
            },
        });
        navigate("/");
    };
    return (
        <form onSubmit={handlerSubmit}>
            <div className="add-pr">
                <div className="label">
                    <label htmlFor="title">Enter Your Product Title:</label>{" "}
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
                    <label htmlFor="category">Enter Your Product Image:</label>
                    <br />
                    <br />
                    <label htmlFor="category">Enter Your Product Price:</label>
                </div>
                <br />
                <div className="input">
                    <input
                        required
                        id="title"
                        type="text"
                        placeholder="Enter product title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <input
                        required
                        id="Description"
                        type="text"
                        placeholder="Enter your description..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <input
                        required
                        id="category"
                        type="text"
                        placeholder="Enter your category..."
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <input
                        required
                        id="image"
                        type="text"
                        placeholder="Enter your image link..."
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <input
                        required
                        id="price"
                        type="text"
                        placeholder="Enter your product pirce..."
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
            </div>
            <div className="btn-add">
                <button type="submit">Add Product</button>
            </div>
        </form>
    );
}

export default AddProduct;
