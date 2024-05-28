import React,{useEffect, useState} from 'react';
import useProductStore from "@/Store/Procuts/ProductStore.js";

import StarRatings from "react-star-ratings/build/star-ratings.js";
import {Link} from "react-router-dom";
import newIndicator from "../../assets/images/icons8-new-50.png"

const Products = () => {
    const [activeButton, setActiveButton] = useState('new');
    const {ProductsListByRemark, productListByRemarkRequest} = useProductStore()
    const handleButtonClick = async (remark) => {
        await productListByRemarkRequest(remark);
        setActiveButton(remark);
    };

    useEffect(() => {

        (async () => {
            await productListByRemarkRequest('new')
        })()
    }, [])

    return (
        <>


            <div className="text-center mb-10 my-8">
                <h1 className="text-3xl font-bold">Our Products</h1>
                <p className="mt-4 text-sm font-semibold text-opacity-30 text-gray-1000">
                    Explore a World of Choices Across Our Most Popular <br/>
                    <span className="font-semibold">Product</span>
                </p>
                <ul className="flex justify-center mt-7 space-x-4">
                    <li>
                        <button
                            onClick={() => handleButtonClick('new')}
                            className={`px-3 py-1 text-sm shadow rounded ${activeButton === 'new' ? 'bg-green-700 text-white' : ''}`}>
                            New
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleButtonClick('trending')}
                            className={`px-3 py-1 text-sm shadow rounded ${activeButton === 'trending' ? 'bg-green-700 text-white' : ''}`}>
                            Trending
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleButtonClick('popular')}
                            className={`px-3 py-1 text-sm shadow rounded ${activeButton === 'popular' ? 'bg-green-700 text-white' : ''}`}>
                            Popular
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleButtonClick('top')}
                            className={`px-3 py-1 text-sm shadow rounded ${activeButton === 'top' ? 'bg-green-700 text-white' : ''}`}>
                            Top
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleButtonClick('special')}
                            className={`px-3 py-1 text-sm shadow rounded ${activeButton === 'special' ? 'bg-green-700 text-white' : ''}`}>
                            Special
                        </button>
                    </li>
                </ul>
            </div>

            {/*Product Card*/}

            {ProductsListByRemark.map((item, i) => {
                let price = <p>Price: {item['price']}</p>; // Note the correct syntax here

                if (item['discount']) { // Fix the typo in the condition
                    price = <p>Price: <strike>${item['price']}</strike> ${item['discountPrice']}</p>;
                }

                return (
                    <div key={i} className="mb-4 inline-block w-1/2 md:w-1/5  pt-3  justify-center mx-auto">
                        <Link to={`/details/${item['_id']}`} className="flex justify-center mx-auto indicator">
                            <span className="indicator-item badge indicator  ">
                                <img src={newIndicator}/>
                            </span>
                            <div className="transition duration-700 ease-linear backdrop-blur-xl opacity-80 hover:opacity-100 hover:shadow-2xl hover:translate-y-2 hover:scale-105 flex flex-col justify-center  bg-white px-4 py-3 rounded shadow">
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

        </>

    );
};

export default Products;
