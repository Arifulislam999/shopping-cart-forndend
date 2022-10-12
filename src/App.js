import CartItemes from "./components/CartItemes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/style.css";
import Navbar from "./components/Navbar";
import CartViewPage from "./components/CartViewPages";
import "./font-awesome pacage/fontawesome-icon/css/all.css";
import View from "./components/View";
import AddProduct from "./components/addProduct";
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<CartItemes />} />
                <Route path="/cart/:id" element={<CartViewPage />} />
                <Route path="/view" element={<View />} />
                <Route path="/add-product" element={<AddProduct />} />
            </Routes>
        </Router>
    );
}

export default App;
