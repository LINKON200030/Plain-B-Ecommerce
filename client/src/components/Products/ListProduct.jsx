import React, {useEffect, useState} from 'react';
import useProductStore from "@/Store/Procuts/ProductStore.js";
import {data} from "autoprefixer";
import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings.js";

const ListProduct = () => {

    const {BrandListRequest, CategoryListRequest,ProductListByFilterRequest,BrandList, CategoryList, ProductListByFilter} = useProductStore();
    const [filter, setFilter] = useState({
        brandID: '',
        categoryID: '',
        priceMin: '',
        priceMax: ''
    })

    let inputOnChange=(name, value)=>{
       setFilter((data)=>{
           return{
               ...data,
               [name]: value
           }
       })
    }

    useEffect(()=>{
        (async()=>{

            BrandList!==null?await BrandListRequest():null;
            CategoryList!==null?await CategoryListRequest():null;

            let isEveryFilterPropertyEmpty=Object.values(filter).every(value => value==="");
            !isEveryFilterPropertyEmpty?await ProductListByFilterRequest(filter):null
        })()
    },[filter])
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content w-full  ">
                {/* Page content here */}
                {ProductListByFilter.map((item, i) => {
                    let price = <p>Price: {item['price']}</p>;

                    if (item['discount']) {
                        price = <p>Price: <strike>${item['price']}</strike> ${item['discountPrice']}</p>;
                    }

                    return (
                        <div key={i} className="mb-4 inline-block w-1/5 pt-3">
                            <Link to={`/details/${item['_id']}`} className="flex justify-center">
                                <div className="flex flex-col  bg-white px-4 py-3 rounded shadow">
                                    <img src={item.image} className="w-100" alt={item.title}/>
                                    <p className="text-sm font-semibold text-opacity-10  mt-4">
                                        {item.title}
                                    </p>
                                    <p className="text-sm font-semibold  mt-2 ">{price}</p>
                                    <StarRatings rating={parseFloat(item['star'])} starRatedColor="red"
                                                 starDimension="15px" numberOfStars={5} starSpacing="2px"/>

                                </div>
                            </Link>
                        </div>
                    );
                })}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side sticky top-0">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu  w-64 min-h-full bg-base-200 text-base-content ">
                    {/* Sidebar content here */}
                    <label htmlFor="Brands" className="btn btn-ghost normal-case text-right text-md mt-3">Brands</label>
                    <select value={filter.brandID} onChange={async (e) => {
                        await inputOnChange('brandID', e.target.value)
                    }} name="Brands" id="Brands" className="px-3 py-1.5  rounded ">
                        <option>Choose Brand</option>

                        {BrandList !== null ? (
                            BrandList.map((item, i) => (
                                <option key={i} value={item['_id']}>{item['brandName']}</option>
                            ))
                        ) : (
                            <option disabled></option>
                        )}


                    </select>

                    <label htmlFor="Categorys"
                           className="btn btn-ghost normal-case text-right text-md mt-3">Categorys</label>
                    <select value={filter.categoryID} onChange={async (e) => {
                        await inputOnChange('categoryID', e.target.value)
                    }} name="Categorys" id="Categorys" className="px-3 py-1.5  rounded ">
                        <option>Choose Category</option>
                        {CategoryList !== null ? (
                            CategoryList.map((item, i) => (
                                <option key={i} value={item['_id']}>{item['categoryName']}</option>
                            ))
                        ) : (
                            <option></option>
                        )}


                    </select>


                    <label htmlFor="Max-Price"
                           className="btn btn-ghost normal-case text-right text-md mt-3">Max Price
                        ${filter.priceMax}</label>
                    <input value={filter.priceMax} onChange={async (e) => {
                        await inputOnChange('priceMax', e.target.value)
                    }} id="Max-Price" type="range" min="0" max="10000" step="1000"/>


                    <label htmlFor="Min-Price"
                           className="btn btn-ghost normal-case text-right text-md mt-3">Min Price
                        ${filter.priceMin}</label>
                    <input value={filter.priceMin} onChange={async (e) => {
                        await inputOnChange('priceMin', e.target.value)
                    }} id="Min-Price" type="range" min="0" max="10000" step="1000"/>


                </ul>
            </div>

        </div>
    );
};

export default ListProduct;
