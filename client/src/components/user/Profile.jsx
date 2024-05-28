import React,{useEffect} from 'react';
import useUserStore from "@/Store/Users/UserStore.js";


const Profile = () => {
    const {CreateProfile,UpdateProfile,ReadProfile,ProfileFormValue,ProfileFormOnChange,CreateProfileRequest,UpdateProfileRequest,ReadProfileRequest} = useUserStore();

    useEffect(()=>{
        (async ()=>{
            await ReadProfileRequest();
        })()
    },[])


    const SaveProfile = async()=>{
        let result=await UpdateProfileRequest(ProfileFormValue)
        await CreateProfileRequest(ProfileFormValue)
        if (result){
            alert("Profile updated successfully")
            await ReadProfileRequest();
        }
    }

    return (
        <>
            <div className="section w-full">
                <div className="container w-full ml-5 mr-5 my-14 shadow-md bg-white rounded-md p-10 space-y-16">
                    <div className="row ">

                        <h5 className="text-left mb-2 py-1 text-xl font-bold text-gray-700 ">Customer Details</h5>
                        <hr/>
                        <div className="flex flex-col md:flex-row w-full md:items-center gap-y-4 justify-between  mt-5 ">
                            <div className="col-md-3 ">
                                <label className="form-label" id="customerName">Customer Name</label>
                                <input value={ProfileFormValue.cus_name} onChange={(e)=>ProfileFormOnChange('cus_name',e.target.value)} type="text" className="form-control border border-opacity-30 border-black py-1 px-2 w-full rounded mt-3 focus:outline-none " id="customerName"/>

                            </div>
                            <div className="col-md-3 ">
                                <label className="form-label" id="customerPhone">Customer Phone</label>
                                <input value={ProfileFormValue.cus_phone} onChange={(e)=>ProfileFormOnChange('cus_phone',e.target.value)} type="text" className="form-control border border-opacity-30 border-black py-1 px-2 w-full rounded mt-3  focus:outline-none " id="customerPhone"/>

                            </div>
                            <div className="col-md-3 ">
                                <label className="form-label" id="customerFax">Customer Fax</label>
                                <input value={ProfileFormValue.cus_fax} onChange={(e)=>ProfileFormOnChange('cus_fax',e.target.value)} type="text" className="form-control border border-opacity-30 border-black py-1 px-2 w-full rounded mt-3 focus:outline-none" id="customerFax"/>

                            </div>
                            <div className="col-md-3">
                                <label className="form-label " id="customerCountry">Customer Country</label>
                                <input value={ProfileFormValue.cus_country} onChange={(e)=>ProfileFormOnChange('cus_country',e.target.value)} type="text" className="form-control border border-opacity-30 border-black py-1 px-2 w-full rounded mt-3 focus:outline-none " id="customerCountry"/>

                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row w-full md:items-center gap-y-4 justify-between  mt-5">

                            <div className="col-md-3 p-2">
                                <label className="form-label" id="customerCity">Customer City</label>
                                <input value={ProfileFormValue.cus_city} onChange={(e)=>ProfileFormOnChange('cus_city',e.target.value)} type="text" className="form-control border border-opacity-30 border-black py-1 px-2 w-full rounded mt-3 focus:outline-none " id="customerCity"/>

                            </div>
                            <div className="col-md-3 p-2">
                                <label className="form-label" id="customerState">Customer State</label>
                                <input value={ProfileFormValue.cus_state} onChange={(e)=>ProfileFormOnChange('cus_state',e.target.value)} type="text" className="form-control border border-opacity-30 border-black py-1 px-2 w-full rounded mt-3 focus:outline-none " id="customerState"/>

                            </div>
                            <div className="col-md-3 p-2">
                                <label className="form-label" id="customerPostCode">Customer Post Code</label>
                                <input value={ProfileFormValue.cus_postcode} onChange={(e)=>ProfileFormOnChange('cus_postcode',e.target.value)}  type="text" className="form-control border border-opacity-30 border-black py-1 px-2 w-full rounded mt-3 focus:outline-none " id="customerPostCode"/>

                            </div>
                            <div className="col-md-3 p-2">
                                <label className="form-label" id="customerAddress">Customer Address</label>
                                <input value={ProfileFormValue.cus_address} onChange={(e)=>ProfileFormOnChange('cus_address',e.target.value)} type="text" className="form-control border border-opacity-30 border-black py-1 px-2 w-full rounded mt-3 focus:outline-none " id="customerAddress"/>

                            </div>
                        </div>


                    </div>
                    <div className="row ">

                        <h5 className="text-left mb-2 py-1 text-xl font-bold text-gray-700 ">Shipping Details</h5>
                        <hr/>
                        <div className="flex flex-col md:flex-row w-full md:items-center gap-y-4 justify-between  mt-5 ">
                            <div className="col-md-3 ">
                                <label className="form-label" id="shippingName">Shipping Name</label>
                                <input value={ProfileFormValue.ship_name}
                                       onChange={(e) => ProfileFormOnChange('ship_name', e.target.value)}
                                       type="text"
                                       className="form-control border border-opacity-30 border-black py-1 px-2 w-full rounded mt-3 focus:outline-none "
                                       id="shippingName"/>

                            </div>
                            <div className="col-md-3 ">
                                <label className="form-label" id="shippingNumber">Shipping Number</label>
                                <input value={ProfileFormValue.ship_phone} onChange={(e) => ProfileFormOnChange('ship_phone', e.target.value)}
                                       type="text"
                                       className="form-control border border-opacity-30 border-black py-1 px-2 w-full rounded mt-3  focus:outline-none "
                                       id="shippingNumber"/>

                            </div>
                            <div className="col-md-3 ">
                                <label className="form-label" id="shippingFax">Shipping Fax</label>
                                <input value={ProfileFormValue.ship_fax} onChange={(e) => ProfileFormOnChange('ship_fax', e.target.value)}
                                       type="text"
                                       className="form-control border border-opacity-30 border-black py-1 px-2 w-full rounded mt-3 focus:outline-none"
                                       id="shippingFax"/>

                            </div>
                            <div className="col-md-3">
                                <label className="form-label " id="shippingCountry">Shipping Country</label>
                                <input value={ProfileFormValue.ship_country} onChange={(e) => ProfileFormOnChange('ship_country', e.target.value)}
                                       type="text"
                                       className="form-control border border-opacity-30 border-black py-1 px-2 w-full rounded mt-3 focus:outline-none "
                                       id="shippingCountry"/>

                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row w-full md:items-center gap-y-4 justify-between  mt-5">

                            <div className="col-md-3 p-2">
                                <label className="form-label" id="shippingCity">Shipping City</label>
                                <input  value={ProfileFormValue.ship_city} onChange={(e) => ProfileFormOnChange('ship_city', e.target.value)}
                                        type="text"
                                        className="form-control border border-opacity-30 border-black py-1 px-2 w-full rounded mt-3 focus:outline-none "
                                        id="shippingCity"/>

                            </div>
                            <div className="col-md-3 p-2">
                                <label className="form-label" id="shippingState">Shipping State</label>
                                <input  value={ProfileFormValue.ship_state} onChange={(e) => ProfileFormOnChange('ship_state', e.target.value)} type="text"
                                        className="form-control border border-opacity-30 border-black py-1 px-2 w-full rounded mt-3 focus:outline-none "
                                        id="shippingState"/>

                            </div>
                            <div className="col-md-3 p-2">
                                <label className="form-label" id="shippingPostCode">Shipping Post Code</label>
                                <input  value={ProfileFormValue.ship_postcode} onChange={(e) => ProfileFormOnChange('ship_postcode', e.target.value)} type="text"
                                        className="form-control border border-opacity-30 border-black py-1 px-2 w-full rounded mt-3 focus:outline-none "
                                        id="shippingPostCode"/>

                            </div>
                            <div className="col-md-3 p-2">
                                <label className="form-label" id="shippingAddress">Shipping Address</label>
                                <input  value={ProfileFormValue.ship_address} onChange={(e) => ProfileFormOnChange('ship_address', e.target.value)} type="text"
                                        className="form-control border border-opacity-30 border-black py-1 px-2 w-full rounded mt-3 focus:outline-none "
                                        id="shippingAddress"/>

                            </div>
                        </div>


                    </div>

                    <button onClick={SaveProfile} className="transition w-1/3 md:w-1/6 opacity-80 ease-in-out duration-700 py-2.5 rounded-md bg-success text-white font-semibold
                            hover:translate-y-2 hover:opacity-100  hover:shadow-2xl" type="submit">Save</button>

                </div>
            </div>

        </>
    );
};

export default Profile;
