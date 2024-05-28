import React,{useState,useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import useUserStore from "@/Store/Users/UserStore.js";
import ValidationUtility from "@/utility/validationUtility.js";

const Login = () => {
    let navigate = useNavigate();

    const {userLoginRequest,UserFormValue,userFormValueChange} = useUserStore();
    const [loading, setLoading] = useState(false);



    const onFormSubmit = async (e) => {
        e.preventDefault(); // Add this line

        try {
            if (!ValidationUtility.IsEmail(UserFormValue.email)) {
                // toast.error("Please Enter a Valid Email");
            } else {
                setLoading(true);
                await userLoginRequest(UserFormValue.email);

                localStorage.setItem("userEmail", UserFormValue.email);
                // toast.success("A verification code has been sent to your email address");
                navigate("/verify");
            }
        } catch (error) {
            console.error("An error occurred:", error);
            // toast.error("An error occurred. Please try again.");
        }finally {
            setLoading(false);
        }
    };


    return (
        <div className=" bg-base-200 flex justify-center items-center ">
            <div className="card w-11/12 md:w-5/12 bg-base-100 shadow-md my-16 md:my-24">
                <div className="card-body space-y-2">
                    <h2 className="Card-title font-bold text-2xl">Enter Your Email</h2>
                    <p>A verification code will be sent to the email address you provide</p>
                    <input
                        value={UserFormValue.email}
                        onChange={(e) => {
                            userFormValueChange('email', e.target.value);
                        }}
                        className="px-2 py-1.5 border border-gray-300 rounded-md"
                        type="email"
                        placeholder="Email"
                    />

                    <button
                        onClick={onFormSubmit}
                        className="transition opacity-80 ease-in-out duration-700 py-1.5 rounded-md bg-success text-white font-semibold
                        hover:translate-y-2 hover:opacity-100  hover:shadow-2xl
                        "
                        type="submit"
                    >
                        {loading ? (<span className="loading loading-infinity loading-md"></span>) : 'Next'}
                    </button>

                </div>
            </div>

        </div>

    );
};

export default Login;
