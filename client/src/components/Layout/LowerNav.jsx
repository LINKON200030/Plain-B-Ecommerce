import React from 'react';
import logo from "../../assets/images/plainb-logo.svg"
import {Link, useNavigate} from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import Cookies from "js-cookie";
import WishList from "@/components/WishList/WishList.jsx";
import {
    Sheet,
    SheetContent,
    SheetDescription, SheetHeader,

    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {Button} from "@/components/ui/button.jsx";
import useProductStore from "@/Store/Procuts/ProductStore.js";


const LowerNav = () => {
    let navigate = useNavigate();
    let {SearchKeyword,SetSearchKeyword}=useProductStore()
    let token = Cookies.get("token");


    const logOut = () => {
        Cookies.remove("token");
       navigate('/login')
    }

    return (
        <>
            <div className="flex justify-between items-center w-full py-2 px-5 md:px-9 bg-white shadow sticky top-0 z-50">
                <div className="flex justify-between items-center w-full py-2 ">
                    <div className="flex ml-3 md:ml-7  ">

                            <img src={logo} alt="logo" className="inline-block w-28 h-auto "/>

                            <span className="ml-9 font-semibold">
              <ul className="Main-Nav hidden md:flex">
                <li className="absoute "> <Link to="/">Home</Link></li>


              </ul>
            </span>
                    </div>


                    {/*Mobile Application NavBar*/}
                    <div className="md:hidden">
                        <Sheet>
                        <SheetTrigger>
                            <CiMenuFries className="inline-block h-5 w-5"/>
                        </SheetTrigger>
                        <SheetContent>

                            <SheetTitle className="text-2xl font-bold my-4">
                                Welcome to PlainB
                            </SheetTitle>

                            <SheetDescription>
                                <Button className="bg-green-600 w-full justify-center mx-auto text-white  font-bold py-2 px-4 rounded"

                                >LogIn</Button>

                            </SheetDescription>
                            <SheetDescription>
                                <Link to="/wishlist" className=" mr-6  border-gray-300"><IoBagHandleOutline className="inline-block h-5 w-5"/> </Link>
                            </SheetDescription>

                        </SheetContent>
                        </Sheet>


                    </div>



                    <div className="hidden md:flex  items-center justify-center p-1 mx-8">
                        <div className="relative w-full max-w-md">
                            <input
                                value={SearchKeyword}
                                onChange={(e)=>SetSearchKeyword(e.target.value)}

                                type="text"
                                placeholder="Search..."
                                className="w-full pl-10 pr-3 py-1.5 border rounded-md focus:outline-none focus:border-blue-500"
                                id="searchInput"
                            />

                            {/* Apply the Link directly to CiSearch */}
                            <Link to={SearchKeyword.length>0? `/by-keyword/${SearchKeyword}`:'/'}
                                  className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer"
                                  type="submit">
                                <CiSearch className="text-gray-500" type="submit"/>
                            </Link>
                        </div>


                        <div className="flex items-center justify-center p-1 ml-7 mr-7">
                            <div className="indicator">
                                <WishList/>

                                <Link to="/cart" className=" mr-6  border-gray-300"><CiShoppingCart className="inline-block h-5 w-5"/></Link>
                            </div>

                            {
                                token?(
                                        <div className="flex items-center justify-center space-x-7">
                                            <Link to="/user-profile"  className="bg-success text-white px-4 py-1.5 rounded-md">
                                                Profile
                                            </Link>

                                            <Button  onClick={logOut}  className="bg-success text-white px-4 py-1.5 rounded-md">
                                                LogOut
                                            </Button>

                                         </div>





                                ):(

                                    <Link to="/login"  className="bg-success text-white px-4 py-1.5 rounded-md">
                                        Login
                                    </Link>
                                )
                            }







                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default LowerNav;
