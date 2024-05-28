import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import useUserStore from "@/Store/Users/UserStore.js";
import ValidationUtility from "@/utility/validationUtility.js";

const OtpVerify = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const {VerifyUserFormValue,VerifyUserFormValueChange,verifyUserRequest}=useUserStore()
    const onFormSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted"); // Add this line for debugging

        try {
            if (ValidationUtility.IsEmpty(VerifyUserFormValue.otp)) {
                // toast.error("Please Enter a Valid Email");
            } else {
                setLoading(true);
                console.log("Before verifyUserRequest");
                await verifyUserRequest(VerifyUserFormValue.otp);
                console.log("After verifyUserRequest");
               navigate("/")
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-base-200 flex justify-center items-center">
            <div className="card w-11/12 md:w-5/12 bg-base-100 shadow-md my-16 md:my-24">
                <div className="card-body space-y-2">
                    <h2 className="Card-title font-bold text-2xl">Enter Your Verification Code</h2>
                    <p>A verification code has been sent to your <br/><span>email address</span></p>
                    <input
                        value={VerifyUserFormValue.otp}
                        onChange={(e) => VerifyUserFormValueChange("otp", e.target.value)}
                        className="px-2 py-1.5 border border-gray-300 rounded-md"
                        type="number"
                        placeholder="Enter Your Verification Code"
                    />

                    <button
                        onClick={onFormSubmit}
                        disabled={loading} // Disable the button while loading
                        className="transition opacity-80 ease-in-out duration-700 py-1.5 rounded-md bg-success text-white font-semibold
                        hover:translate-y-2 hover:opacity-100  hover:shadow-2xl
                        "
                        type="submit"
                    >
                        {loading ? (
                            <span className="loading loading-infinity loading-md"></span>
                        ) : 'Verify'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OtpVerify;
