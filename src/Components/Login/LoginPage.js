import React from "react";
import Layout from "./Components/Layouting/Layout";
// import LoginForm from "./LoginForm";
import LoginPageBody from "./LoginPageBody";

export default function LoginPage() {
    return (
        <>
            <Layout>
                <LoginPageBody />
                {/* <LoginForm/> */}
            </Layout>
        </>
    );
}
