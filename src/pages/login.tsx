import { EmptyLayout } from "@/components/layout";
import Head from "next/head";
import { setCookie, getCookie} from "cookies-next";
import { useState } from "react";

import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";

export default function Login() {
    const axios = require('axios');
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [token, setToken] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        // Fetch login API to http://localhost:8080/signin
        // If success, redirect to /admin
        // If failed, show error message
        e.preventDefault();
        axios
        .post(`${process.env.BACKEND_API}/signin`, {
            username: username,
            password: password,
        })
        .then((response) => {
            setCookie("accessToken", response.data.accessToken, {
            maxAge: 60 * 60 * 12,
            });
            window.location.href = `/${response.data.roles}`;
        })
        .catch((error) => {
            console.log(error);
            setError(true);
        });
    };
    return (
        <>
        <EmptyLayout pageTitle="Login">
        <div className="h-screen flex flex-col z-0 bg-cover bg-center relative" style={{backgroundImage: "url('../../DSC7133.jpg')",}}>
            <div className="bg-blue-900/50 w-full h-screen">
                <div className="h-1/2"></div>
                <div className="flex-col flex items-center justify-center">
                    <div className="absolute justify-center bg-white align-middle shadow-lg shadow-blue-500/20  z-30 px-14 py-5 border-solid border-2 w-2/5 rounded-lg">
                        <Typography variant="h2" className="mt-3 text-center">Login</Typography>
                        <form className="flex flex-col">
                            <Typography variant="paragraph" className="mt-6">Email</Typography>
                            <Input
                                size="lg"
                                placeholder="Masukkan email"
                                crossOrigin=''
                                className="h-10 !border-t-blue-gray-200 focus:!border-t-gray-900 w-80"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                />
                            <Typography variant="paragraph" className="mt-4">Password</Typography>
                            <Input
                                type="password"
                                size="lg"
                                placeholder="Masukkan password"
                                crossOrigin=''
                                className="h-10 !border-t-blue-gray-200 focus:!border-t-gray-900 w-80"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Button className="mt-6 bg-blue-500" fullWidth>Login</Button>
                            <Typography className="text-center mt-2">Lupa Password?
                                <a href="#" className="text-gray-400"> Klik Disini</a> 
                            </Typography>
                        </form>
                    </div>
                </div>
                <div className="bg-white flex-col flex items-center justify-center shadow-lg rounded-t-3xl h-1/2 z-10">
            </div>
            </div>
        </div>
        </EmptyLayout>
        </> 
    );
}