import React,{useEffect} from 'react';
import useProductStore from "@/Store/Procuts/ProductStore.js";
import {Link} from "react-router-dom";
const Brands = () => {
const {BrandList,BrandListRequest}=useProductStore();

useEffect(()=>{
    (async ()=>{
        await BrandListRequest();
    })()
},[])

    return (
        <div>
            <div className="text-center mb-10 my-8">
                <h1 className="text-3xl font-bold">Top Brands</h1>
                <p className="mt-4 text-sm font-semibold text-opacity-30 text-gray-1000">
                    Explore a World of Choices Across Our Most Popular <br/>
                    <span className="font-semibold">Shopping Categories</span>
                </p>
            </div>

            {BrandList.map((item, i) => (
                <div key={i} className="mb-4 inline-block w-1/2 md:w-1/6 pt-3">
                    <Link to={`/by-brand/${item['_id']}`} className="flex justify-center">
                        <div className="flex flex-col  items-center bg-white px-4 py-3  rounded shadow">
                            <img src={item.brandImg} className="w-75 " alt={item.brandName}/>
                            <p className="text-sm font-semibold text-opacity-30 text-gray-1000 mt-4">
                                {item.brandName}
                            </p>
                        </div>
                    </Link>
                </div>
            ))}


        </div>
    );
};

export default Brands;
