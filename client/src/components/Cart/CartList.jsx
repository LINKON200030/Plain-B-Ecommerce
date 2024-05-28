import React, {useEffect, useState} from 'react';
import useCartStore from "@/Store/Cart/CartStore.js";


const CartList = () => {
    let {ReadCartListAllRequest,ReadCartListAll}=useCartStore()

    useEffect(() => {
        (async () => {
            await ReadCartListAllRequest();
        })()
    },[])
    let [quantity,setQuantity]=useState(1)




    const incrementQty=()=>{
        setQuantity(quantity=quantity+1)
    }
    const decrement = () => {
        if (quantity>1){
            setQuantity(quantity=quantity-1)
        }
    }

    return (
        <>
            <div className="flex justify-center items-center bg-gray-50 ">
                <div className="container flex md:flex-row flex-col justify-between  bg-gray-100   rounded-md shadow-md my-12   ">
                    <div className="col w-full md:basis-2/3 p-10 bg-white">
                        <div className="row flex justify-between items-center mb-4">
                            <span className="text-2xl font-bold">Shopping Cart</span>
                            <span className="text-2xl font-bold"> 3 Items</span>
                        </div>
                        <hr/>

                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                <tr>

                                    <th>PRODUCT DETAILS</th>
                                    <th>QUANTITY</th>
                                    <th>PRICE</th>
                                    <th>TOTAL</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* row 1 */}
                                {
                                    ReadCartListAll.map((item, i) => (
                                        <tr key={i} className="shadow-md transition-all hover:bg-gray-100 rounded hover:cursor-pointer hover:shadow-2xl duration-300">
                                            <td>
                                                <div className=" items-center  flex gap-x-4">
                                                    <div className="w-16">
                                                        <img src={item['product']['image']} className=" h-18 " alt={item['product']['title']}/>
                                                    </div>
                                                    <div className="text-sm  flex flex-col justify-left items-start gap-1 opacity-80">
                                                        <span className="font-bold"> {item['product']['title']}</span>
                                                        Size: {item['size']}<br/>
                                                        Color: {item['color']}
                                                        <button className="text-blue-800 font-bold  mt-1">Remove
                                                        </button>
                                                    </div>

                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <button type="button" onClick={decrement} className="font-bold text-xl" >-</button>
                                                    <span  className="font-bold border px-4 py-1">{quantity}</span>
                                                    <button type="button" onClick={incrementQty} className="font-bold text-xl" >+</button>
                                                </div>
                                            </td>
                                            <td>
                                                {
                                                    item['product']['discount'] ? (
                                                        item['product']['discountPrice']
                                                    ):(
                                                        item['product']['price']

                                                    )
                                                }

                                            </td>
                                            <td>
                                                {
                                                    item['product']['discount'] ? (
                                                        item['product']['discountPrice'] * item['qty']
                                                    ):(
                                                        item['product']['price'] * item['qty']
                                                    )
                                                }
                                            </td>
                                        </tr>
                                    ))
                                }


                                </tbody>


                            </table>

                        </div>


                    </div>


                    <div className="col w-full md:basis-1/3 py-10 md:px-5 ">
                        <div className="row flex justify-between items-center mb-4">
                            <span className="text-2xl font-bold">Order Summary</span>
                        </div>
                        <hr/>
                        <div className="row flex justify-between items-center py-2.5">
                            <span className="text-sm font-semibold text-gray-400">ITEMS 3</span>
                            <span className="text-sm font-semibold text-gray-400">

                            {
                                ReadCartListAll.map((item, i) => (
                                    item['product']['discount'] ? (
                                        item['product']['discountPrice'] * item['qty']
                                    ):(
                                        item['product']['price'] * item['qty']
                                    )
                                ))
                            }
                        </span>
                        </div>
                        <hr/>
                        <div className="flex flex-col space-y-10 mt-8">
                            <div className="col-span-1 flex flex-col ">
                                <label className="font-semibold mx-1">SHIPPING</label>
                                <select
                                    className="w-full text-sm text-gray-500 bg-white shadow-sm font-semibold  border-gray-300 focus:outline-none rounded-md p-2 mt-5">
                                    <option className="text-sm px-3">Choose Shipping Method</option>
                                    <option>Standard- <span>$5.00</span></option>
                                    <option>Express- <span>$80.00</span></option>
                                    <option>Fast- <span>$10.00</span></option>
                                </select>
                            </div>
                            <div className="col-span-1 flex flex-col ">
                                <label className="font-semibold mx-1">PROMO CODE</label>
                                <input className="w-full text-sm text-gray-500 bg-white shadow-sm font-semibold  border-gray-300 focus:outline-none rounded-md p-2 mt-5

                            "
                                       placeholder="Enter your promo code"
                                />
                                <button
                                    className=" py-2 px-4 bg-red-500 rounded-sm text-white font-semibold mt-7 w-1/3 mb-10"
                                    type="submit">Apply
                                </button>
                                <hr/>

                            </div>


                        </div>
                        <div className="row flex justify-between items-center my-6 ">
                        <span className="text-sm font-semibold text-gray-400">
                            TOTAL
                        </span>
                            <span className="text-sm font-semibold text-gray-400">

                            {
                                ReadCartListAll.map((item, i) => (
                                    item['product']['discount'] ? (
                                        item['product']['discountPrice'] * item['qty']
                                    ):(
                                        item['product']['price'] * item['qty']
                                    )
                                ))
                            }
                        </span>
                        </div>


                    </div>

                </div>



            </div>

        </>
    );
};

export default CartList;
