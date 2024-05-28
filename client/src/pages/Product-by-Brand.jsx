import React, {useEffect} from 'react';
import Layout from "@/components/Layout/Layout.jsx";
import ListProduct from "@/components/Products/ListProduct.jsx";
import useProductStore from "@/Store/Procuts/ProductStore.js";
import {useParams} from "react-router-dom";

const ProductByBrand = () => {
    let {id}=useParams()
    const { ProductListByBrandRequest } = useProductStore();
    useEffect(() => {
        (async () => {
            await ProductListByBrandRequest(id)
        })()
    },[])
    return (
        <Layout>
            <ListProduct/>
        </Layout>
    );
};

export default ProductByBrand;
