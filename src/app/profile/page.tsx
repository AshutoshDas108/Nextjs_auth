"use client";
import axios from "axios";
import Link from "next/link";
import React, {useState} from "react";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";

export default function Profile(){
    const router = useRouter();
    const  logout = async () => {
        try {
            await axios.get('/api/user/logout')
            toast.success('Logout successful')
            router.push('/login')
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-black bg-orange-600 rounded-md">
                Profile Page</h1>
               <br/>
                <button onClick={logout}
                className=" text-xl text-center text-white bg-blue-600 rounded-md">
                    Logout
                </button>
                </div>
    )
}