import React,{useState} from 'react';
import ProductImageGalery from "@/components/Products/ProductImageGalery.jsx";
import {Link, useParams} from "react-router-dom";
import useProductStore from '@/Store/Procuts/ProductStore.js'
import useCartStore from "@/Store/Cart/CartStore.js";
import {Button} from "@/components/ui/button.jsx";
import {Separator} from "@/components/ui/separator.jsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import parse from "html-react-parser"
import Brands from "@/components/Products/Brands.jsx";
import {useNavigate} from "react-router-dom";

const ProductDetails = () => {
    let navigate  = useNavigate();
    let { id } = useParams();

    const {CartFormData,CartFormDataOnChange,CreateCartListRequest, CreateCartList}=useCartStore()
    const { ProductDetail, ProductDetailRequest ,BrandList} = useProductStore();

    React.useEffect(() => {
        (async () => {
            await ProductDetailRequest(id);
        })()
    },[])

    const AddCart=async ()=>{

        await CreateCartListRequest(CartFormData,id)
        navigate('/cart')


    }




    return (
        <div className="container mt-2">
            {ProductDetail.map((item, i) => (
                <div>
                <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 max-w-full ">
                        <ProductImageGalery />

                    </div>
                    <div className="p-3">
                        <h4 className="text-2xl font-bold text-primary mb-2">{item['title']}</h4>
                        <p className="text-muted bodySmal text-pink-700 font-semibold my-1">Category: {item['category']['categoryName']} </p>
                        <p className="text-muted bodySmal text-green-900 font-semibold my-1">Brand: {item['brand']['brandName']} </p>
                        <p className="bodySmal mb-2 mt-1">Short Description: {item['shortDes']} </p>
                        <span className="block mb-2 text-success font-semibold text-xl">
                <strike className="text-secondary text-red-700 text-md">${item['price']}</strike> ${item['discountPrice']}
            </span>
                        <div className="grid grid-cols-2 items-center justify-center  gap-4 my-8">
                            <div className="col-span-1 w-3/4">

                                <label className="bodySmal m-1 font-semibold">Size</label><br/>
                                <select value={CartFormData.size}
                                        onChange={(e) => CartFormDataOnChange('size', e.target.value)}
                                        className="form-select my-3 w-full py-1 border shadow rounded">
                                    <option className="" value="">Size</option>
                                    {item['details']['size'].split(",").map((item, i) => (
                                        <option key={i} value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-span-1 w-3/4">
                                <label className="bodySmal m-1 font-semibold">Color</label><br/>
                                <select value={CartFormData.color}
                                        onChange={(e) => CartFormDataOnChange('color', e.target.value)}
                                        className="form-select my-3 w-full py-1 border shadow rounded">
                                    <option value="">Color</option>
                                    {item['details']['color'].split(",").map((item, i) => (
                                        <option key={i} value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>

                            {/*<div className="col-span-1">*/}
                            {/*    <label className="bodySmal m-1 font-semibold">Quantity</label>*/}
                            {/*    <div className="flex my-2 ">*/}
                            {/*        <button onClick={decrement} className="btn btn-outline-secondary">-</button>*/}
                            {/*        <input value={quantity} type="text"*/}
                            {/*               className="form-control bg-light text-center w-32 py-1 border-gray-950"*/}
                            {/*               readOnly/>*/}
                            {/*        <button onClick={incrementQty} className="btn btn-outline-secondary">+</button>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        <div className="flex justify-center items-center space-x-7 mt-2">

                            <Button onClick={AddCart} className="btn btn-success w-32">Add to Cart</Button>
                            <Button as={Link}  to="/addtowishlist" className="btn btn-success w-32">Add to Wish</Button>
                        </div>



                    </div>



                    </div>
                    <Separator className="mt-8 mb-2" />
                    <Tabs defaultValue="specification" className="w-[800px]">
                        <TabsList>
                            <TabsTrigger value="specification" className="w-[160px]">Specifications</TabsTrigger>
                            <TabsTrigger value="reviews" className="w-[160px]">Reviews</TabsTrigger>
                        </TabsList>

                        <TabsContent value="specification">
                            <div className="ml-3 mt-3 mb-5 w-full">

                                <p className="bodySmal my-1 ">{parse(item['details']['des'])}</p>
                            </div>
                        </TabsContent>
                        <TabsContent value="reviews">
                            There are No Reviews Right Now
                        </TabsContent>
                    </Tabs>






                </div>




                ))}

            <Separator className="mt-3 mb-2" />

            <Brands/>




        </div>
    );
};

export default ProductDetails;
