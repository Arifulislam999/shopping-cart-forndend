import { Link, useParams } from "react-router-dom";
import CartProductPage from "./CartProductPage";
import { useGetProductSingleQuery } from "./features/api/apiSlice";
import Loader from "./Loader";
function CartViewPage() {
    const { id } = useParams();
    const {
        isError,
        error,
        data: singleProduct,
        isLoading,
    } = useGetProductSingleQuery(id);
    let content = null;
    if (isLoading) {
        content = <Loader />;
    }
    if (!isLoading && isError) {
        content = <h1>There is an occured...error ${error}</h1>;
    }
    if (!isLoading && !isError && singleProduct) {
        content = singleProduct.map((product) => (
            <CartProductPage key={product.id} product={product} />
        ));
    }

    return (
        <div className="cart-view">
            <Link to={`/cart/${id}`} className="product">
                View Product Details...
            </Link>
            {content}
        </div>
    );
}

export default CartViewPage;
