
import Layout from "@/components/Layout/Layout.jsx";
import Slider from "@/components/Products/Slider.jsx";
import Featrures from "@/components/Products/featrures.jsx";
import Products from "@/components/Products/products.jsx";
import Categories from "@/components/Products/Categories.jsx";
import Brands from "@/components/Products/Brands.jsx";

const HomePage = () => {
    return (
    <Layout>
        <Slider/>
        <Featrures/>
        <Products/>
        <Categories/>
        <Brands/>
    </Layout>

    );
};

export default HomePage;