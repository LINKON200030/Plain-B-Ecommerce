import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import useProductStore from "../../Store/Procuts/ProductStore.js";
const Categories = () => {
    const {CategoryList,CategoryListRequest}=useProductStore();
    useEffect(() => {
        (async () => {
            await CategoryListRequest();
        })();
    }, []);
    return (
        <div>
            <div className="text-center mb-10 my-8">
                <h1 className="text-3xl font-bold">Top Categories</h1>
                <p className="mt-4 text-sm font-semibold text-opacity-30 text-gray-1000">
                    Explore a World of Choices Across Our Most Popular <br/>
                    <span className="font-semibold">Shopping Categories</span>
                </p>
            </div>

            {CategoryList.map((item, i) => (
                <div key={i} className="mb-4 inline-block w-1/2 md:w-1/6 pt-3">
                    <Link to={`/by-category/${item['_id']}`} className="flex justify-center">
                        <div className="flex flex-col  items-center bg-white px-4 py-3  rounded shadow">
                            <img src={item.categoryImg} className="w-75 " alt={item.categoryName}/>
                            <p className="text-sm font-semibold text-opacity-30 text-gray-1000 mt-4">
                                {item.categoryName}
                            </p>
                        </div>
                    </Link>
                </div>
            ))}

        </div>
    );
};

export default Categories;
