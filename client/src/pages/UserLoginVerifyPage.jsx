import React from 'react';
import Layout from "@/components/Layout/Layout.jsx";
import OtpVerify from "@/components/user/otp-verify.jsx";

const UserLoginVerifyPage = () => {
    return (
       <Layout>
           <OtpVerify/>
       </Layout>
    );
};

export default UserLoginVerifyPage;
