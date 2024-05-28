import React, {useEffect} from 'react';
import Layout from "@/components/Layout/Layout.jsx";
import ListProduct from "@/components/Products/ListProduct.jsx";
import useProductStore from "@/Store/Procuts/ProductStore.js";
import {useParams} from "react-router-dom";

const ProductByKeyword = () => {
    let { keyword } = useParams();
    const {ProductListByKeywordRequest } = useProductStore();
    useEffect(() => {
        (async () => {
            await ProductListByKeywordRequest(keyword);
        })()
    },[])
    return (
       <Layout>
           <ListProduct/>
       </Layout>
    );
};

export default ProductByKeyword;
