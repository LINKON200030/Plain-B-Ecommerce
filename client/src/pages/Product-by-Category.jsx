import React, {useEffect} from 'react';
import Layout from "@/components/Layout/Layout.jsx";
import ListProduct from "@/components/Products/ListProduct.jsx";
import useProductStore from "@/Store/Procuts/ProductStore.js";
import {useParams} from "react-router-dom";

const ProductByCategory = () => {
    let { id } = useParams();
    const {ProductListByCategoryRequest } = useProductStore();
     useEffect(() => {
         (async() => {
             await ProductListByCategoryRequest(id);
         })()
     },[])
    return (
        <Layout>
            <ListProduct/>
        </Layout>
    );
};

export default ProductByCategory;
