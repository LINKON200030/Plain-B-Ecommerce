import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page.jsx";
import UserLoginPage from "@/pages/UserLoginPage.jsx";
import UserLoginVerifyPage from "@/pages/UserLoginVerifyPage.jsx";

import ProductDetailsPage from "@/pages/Product-details-Page.jsx";
import UserProfilePage from "@/pages/UserProfile-Page.jsx";

import CartListPage from "@/pages/CartList-Page.jsx";
import ProductByKeyword from "@/pages/Prouct-by-keyword.jsx";
import ProductByBrand from "@/pages/Product-by-Brand.jsx";
import ProductByCategory from "@/pages/Product-by-Category.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<UserLoginPage />} />
                <Route path="/verify" element={<UserLoginVerifyPage />} />
                <Route path="/details/:id" element={<ProductDetailsPage />} />\
                <Route path="/user-profile" element={<UserProfilePage />} />
                <Route path="/cart" element={<CartListPage />} />
                <Route path="/by-keyword/:keyword" element={<ProductByKeyword />} />
                <Route path="/by-brand/:id" element={<ProductByBrand />} />
                <Route path="/by-category/:id" element={<ProductByCategory />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
